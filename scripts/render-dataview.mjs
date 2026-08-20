#!/usr/bin/env node
/**
 * Minimaler, build-time Dataview-Renderer für Quartz — OHNE externe
 * Dependencies (kein glob, kein js-yaml), nur Node-Bordmittel.
 *
 * Läuft VOR `npx quartz build` im Quartz-Repo und ersetzt ```dataview-
 * Codeblöcke durch statische Markdown-Tabellen, basierend auf dem
 * Frontmatter aller Markdown-Dateien im Content-Ordner.
 *
 * UNTERSTÜTZT:
 *   TABLE WITHOUT ID <spalte> AS <Alias>, ...
 *   FROM !"Ordner/Pfad"
 *   WHERE contains(feld, wert) AND !contains(feld, wert) AND ...
 *   SORT file.name ASC|DESC
 *   Funktionen: link(x), join(x, "sep")
 *
 * Frontmatter-Parser deckt ab: flache key: value Paare, Listen mit "- ",
 * sowohl "- wert" als auch "key: [a, b]"-Inline-Listen, Strings mit/ohne
 * Anführungszeichen. Kein komplexes verschachteltes YAML.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs"
import path from "node:path"

const CONTENT_DIR = process.argv[2] ?? "content"

// ---------- Dateien rekursiv einsammeln ----------

function walk(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) {
      results.push(...walk(full))
    } else if (entry.endsWith(".md")) {
      results.push(full)
    }
  }
  return results
}

// ---------- Minimaler YAML-Frontmatter-Parser ----------

function parseYamlLite(yamlText) {
  const lines = yamlText.split(/\r?\n/)
  const result = {}
  let currentKey = null

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx]
    if (!line.trim()) continue

    const listItem = line.match(/^\s*-\s+(.*)$/)
    if (listItem && currentKey) {
      if (!Array.isArray(result[currentKey])) result[currentKey] = []
      result[currentKey].push(stripQuotes(listItem[1].trim()))
      continue
    }

    const kv = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/)
    if (kv) {
      const [, key, rawVal] = kv
      currentKey = key
      const val = rawVal.trim()

      if (val === "" ) {
        // Möglicherweise folgt eine Liste in den nächsten Zeilen
        result[key] = result[key] ?? undefined
        continue
      }
      if (val.startsWith("[") && val.endsWith("]")) {
        // Inline-Liste: [a, b, c]
        const inner = val.slice(1, -1)
        result[key] = inner.length
          ? splitTopLevelComma(inner).map((v) => stripQuotes(v.trim()))
          : []
        continue
      }
      result[key] = stripQuotes(val)
    }
  }
  return result
}

function splitTopLevelComma(str) {
  const parts = []
  let depth = 0
  let inQuotes = false
  let current = ""
  for (const ch of str) {
    if (ch === '"') inQuotes = !inQuotes
    if (!inQuotes && (ch === "[" || ch === "(")) depth++
    if (!inQuotes && (ch === "]" || ch === ")")) depth--
    if (ch === "," && depth === 0 && !inQuotes) {
      parts.push(current)
      current = ""
    } else {
      current += ch
    }
  }
  if (current.trim().length) parts.push(current)
  return parts
}

function stripQuotes(s) {
  const m = s.match(/^"(.*)"$/) || s.match(/^'(.*)'$/)
  return m ? m[1] : s
}

function splitFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { frontmatter: {}, body: raw }
  let frontmatter = {}
  try {
    frontmatter = parseYamlLite(match[1])
  } catch (err) {
    console.warn(`⚠️  Konnte Frontmatter nicht parsen: ${err.message}`)
  }
  return { frontmatter, body: match[2] }
}

function buildIndex(files) {
  return files.map((filePath) => {
    const raw = readFileSync(filePath, "utf-8")
    const { frontmatter } = splitFrontmatter(raw)
    const relPath = path.relative(CONTENT_DIR, filePath).replace(/\\/g, "/")
    const fileName = path.basename(filePath, path.extname(filePath))
    return { filePath, relPath, fileName, frontmatter, raw }
  })
}

// ---------- Kleine Ausdrucks-Sprache: link(x), join(x, "sep"), Felder ----------

function splitTopLevel(str, sep) {
  const parts = []
  let depth = 0
  let inQuotes = false
  let current = ""
  for (const ch of str) {
    if (ch === '"') inQuotes = !inQuotes
    if (!inQuotes) {
      if (ch === "(") depth++
      if (ch === ")") depth--
    }
    if (ch === sep && depth === 0 && !inQuotes) {
      parts.push(current)
      current = ""
    } else {
      current += ch
    }
  }
  if (current.trim().length > 0 || parts.length > 0) parts.push(current)
  return parts.map((p) => p.trim())
}

function parseExpr(str) {
  const s = str.trim()
  const quoted = s.match(/^"([^"]*)"$/)
  if (quoted) return { type: "literal", value: quoted[1] }

  const call = s.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\((.*)\)$/s)
  if (call) {
    const [, name, argsStr] = call
    const args = splitTopLevel(argsStr, ",").map(parseExpr)
    return { type: "call", name, args }
  }

  return { type: "ident", path: s }
}

function wrapLink(v) {
  const s = String(v ?? "").trim()
  if (s.length === 0) return s
  return s.startsWith("[[") ? s : `[[${s}]]`
}

function normalize(v) {
  let s = String(v ?? "").trim()
  const m = s.match(/^\[\[([^\]|]+)(\|[^\]]+)?\]\]$/)
  if (m) s = m[1]
  return s.trim().toLowerCase()
}

function evaluate(node, row) {
  if (node.type === "literal") return node.value
  if (node.type === "ident") {
    if (node.path === "file.name") return row.fileName
    if (node.path === "file.link") return `[[${row.fileName}]]`
    return row.frontmatter?.[node.path]
  }
  if (node.type === "call") {
    if (node.name === "link") {
      const val = evaluate(node.args[0], row)
      return Array.isArray(val) ? val.map(wrapLink) : wrapLink(val)
    }
    if (node.name === "join") {
      const val = evaluate(node.args[0], row)
      const sep = node.args[1]?.type === "literal" ? node.args[1].value : ", "
      const arr = Array.isArray(val) ? val : val == null ? [] : [val]
      return arr.join(sep)
    }
    return evaluate(node.args[0], row)
  }
  return undefined
}

function renderCell(node, row) {
  const val = evaluate(node, row)
  if (val == null) return ""
  return Array.isArray(val) ? val.join(", ") : String(val)
}

// ---------- Query-Parser ----------

function parseQuery(queryText) {
  const lines = queryText.split(/\r?\n/)
  const clauses = { TABLE: [], FROM: [], WHERE: [], SORT: [] }
  let current = "TABLE"
  for (const line of lines) {
    const m = line.match(/^\s*(TABLE|FROM|WHERE|SORT)\b/i)
    if (m) {
      current = m[1].toUpperCase()
      clauses[current].push(line.replace(m[0], "").trim())
    } else if (line.trim().length > 0) {
      clauses[current].push(line.trim())
    }
  }

  let tableLine = clauses.TABLE.join(" ").trim()
  const withoutId = /^WITHOUT\s+ID\b/i.test(tableLine)
  if (withoutId) tableLine = tableLine.replace(/^WITHOUT\s+ID\b/i, "").trim()
  const columns = splitTopLevel(tableLine, ",").map((col) => {
    const asMatch = col.match(/^(.*)\s+AS\s+(.+)$/i)
    if (asMatch) {
      return { expr: parseExpr(asMatch[1].trim()), alias: asMatch[2].trim() }
    }
    return { expr: parseExpr(col.trim()), alias: col.trim() }
  })

  const fromText = clauses.FROM.join(" ")
  const fromTokens = [...fromText.matchAll(/(!)?"([^"]+)"/g)].map((m) => ({
    exclude: Boolean(m[1]),
    folder: m[2],
  }))

  const whereText = clauses.WHERE.join(" ")
  const conditions = whereText.length
    ? whereText
        .split(/\s+AND\s+/i)
        .map((c) => c.trim())
        .filter(Boolean)
    : []

  const sortText = clauses.SORT.join(" ").trim()
  let sort = null
  if (sortText.length) {
    const sortMatch = sortText.match(/^(\S+)\s*(ASC|DESC)?$/i)
    if (sortMatch) {
      sort = { field: sortMatch[1], dir: (sortMatch[2] || "ASC").toUpperCase() }
    }
  }

  return { withoutId, columns, fromTokens, conditions, sort }
}

function resolveValueExpr(expr, currentRow) {
  const s = expr.trim()
  if (s.toLowerCase() === "this.file.link") return `[[${currentRow.fileName}]]`
  if (s.toLowerCase() === "this.file.name") return currentRow.fileName
  const quoted = s.match(/^"([^"]*)"$/)
  if (quoted) return quoted[1]
  return s
}

function parseCondition(condStr) {
  const m = condStr.match(/^(!)?\s*contains\((.+)\)$/i)
  if (!m) return null
  const [, negate, argsStr] = m
  const [fieldExpr, valueExpr] = splitTopLevel(argsStr, ",")
  return { negate: Boolean(negate), fieldExpr, valueExpr }
}

function fieldValue(fieldExpr, row) {
  const expr = fieldExpr.trim()
  if (expr === "file.name") return row.fileName
  if (expr === "file.link") return `[[${row.fileName}]]`
  return row.frontmatter?.[expr]
}

function evalConditions(conditions, row, currentRow) {
  return conditions.every((condStr) => {
    const cond = parseCondition(condStr)
    if (!cond) {
      console.warn(`⚠️  Nicht unterstützte WHERE-Bedingung, wird ignoriert: "${condStr}"`)
      return true
    }
    const fieldVal = fieldValue(cond.fieldExpr, row)
    const target = normalize(resolveValueExpr(cond.valueExpr, currentRow))
    const arr = Array.isArray(fieldVal) ? fieldVal : fieldVal == null ? [] : [fieldVal]
    const matched = arr.some((v) => normalize(v) === target)
    return cond.negate ? !matched : matched
  })
}

// ---------- Query gegen den Index ausführen ----------

function runQuery(query, index, currentRow) {
  let candidates = index

  for (const token of query.fromTokens) {
    candidates = candidates.filter((row) => {
      const inFolder = row.relPath.startsWith(token.folder)
      return token.exclude ? !inFolder : inFolder
    })
  }

  candidates = candidates.filter((row) => evalConditions(query.conditions, row, currentRow))

  if (query.sort) {
    const { field, dir } = query.sort
    candidates = [...candidates].sort((a, b) => {
      const av = String(field === "file.name" ? a.fileName : a.frontmatter?.[field] ?? "")
      const bv = String(field === "file.name" ? b.fileName : b.frontmatter?.[field] ?? "")
      const cmp = av.localeCompare(bv)
      return dir === "DESC" ? -cmp : cmp
    })
  }

  return candidates
}

function renderMarkdownTable(query, rows) {
  const headers = query.columns.map((c) => c.alias)
  const headerLine = `| ${headers.join(" | ")} |`
  const sepLine = `| ${headers.map(() => "---").join(" | ")} |`
  const rowLines = rows.map((row) => {
    const cells = query.columns.map((c) => renderCell(c.expr, row))
    return `| ${cells.join(" | ")} |`
  })
  return [headerLine, sepLine, ...rowLines].join("\n")
}

// ---------- Dataview-Codeblöcke in einer Datei finden & ersetzen ----------

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function processFile(row, index) {
  const lines = row.raw.split(/\r?\n/)
  const output = []
  let i = 0
  let changed = false

  while (i < lines.length) {
    const openMatch = lines[i].match(/^((?:>\s*)*)```\s*dataview\s*$/i)
    if (!openMatch) {
      output.push(lines[i])
      i++
      continue
    }

    const prefix = openMatch[1]
    const queryLines = []
    i++
    while (i < lines.length) {
      const closeMatch = lines[i].match(/^((?:>\s*)*)```\s*$/)
      if (closeMatch) {
        i++
        break
      }
      const stripped = prefix.length > 0 ? lines[i].replace(new RegExp("^" + escapeRegex(prefix)), "") : lines[i]
      queryLines.push(stripped)
      i++
    }

    try {
      const query = parseQuery(queryLines.join("\n"))
      const results = runQuery(query, index, row)
      const table = renderMarkdownTable(query, results)
      const tableLines = table.split("\n").map((l) => (prefix ? `${prefix}${l}` : l))
      output.push(...tableLines)
      changed = true
    } catch (err) {
      console.warn(`⚠️  Fehler beim Rendern eines Dataview-Blocks in ${row.relPath}: ${err.message}`)
      output.push(`${prefix}\`\`\`dataview`)
      output.push(...queryLines.map((l) => (prefix ? `${prefix}${l}` : l)))
      output.push(`${prefix}\`\`\``)
    }
  }

  if (changed) {
    writeFileSync(row.filePath, output.join("\n"), "utf-8")
    console.log(`✅ Dataview-Blöcke ersetzt: ${row.relPath}`)
  }
}

// ---------- Main ----------

function main() {
  console.log(`ℹ️  Suche Markdown-Dateien in: ${path.resolve(CONTENT_DIR)}`)
  const files = walk(CONTENT_DIR)
  console.log(`ℹ️  Gefundene .md-Dateien: ${files.length}`)

  const index = buildIndex(files)
  const withDataview = index.filter((row) => /```\s*dataview/i.test(row.raw))
  console.log(`ℹ️  Dateien mit \`\`\`dataview-Block: ${withDataview.length}`)
  if (withDataview.length > 0) {
    console.log(`ℹ️  Betroffene Dateien: ${withDataview.map((r) => r.relPath).join(", ")}`)
  } else if (files.length > 0) {
    // Diagnose-Hilfe: zeig die erste Datei mit einem Fence-Block (egal welcher Sprache),
    // damit wir sehen, ob "dataview" evtl. anders geschrieben ist als erwartet
    const withAnyFence = index.find((row) => /```\S/.test(row.raw))
    if (withAnyFence) {
      console.log(`ℹ️  Beispiel-Codeblock-Zeile(n) in ${withAnyFence.relPath}:`)
      withAnyFence.raw
        .split(/\r?\n/)
        .filter((l) => l.includes("```"))
        .forEach((l) => console.log(`    ${JSON.stringify(l)}`))
    } else {
      console.log(`ℹ️  Keine \`\`\`-Codeblöcke in irgendeiner Datei gefunden.`)
    }
  }

  for (const row of withDataview) {
    processFile(row, index)
  }
}

main()
