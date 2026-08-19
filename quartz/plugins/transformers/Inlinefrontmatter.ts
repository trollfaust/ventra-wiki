import type { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import type { InlineCode } from "mdast"

/**
 * Extrahiert den Property-Namen aus einem INPUT[...]-Ausdruck.
 *
 * Unterstützte Formen (Meta-Bind-artige Syntax):
 *   INPUT[label][inputType:property]
 *   INPUT[inputType:property]
 *   INPUT[inputType(arg1, arg2(...), ...):property]
 *
 * Es wird bewusst NICHT mit einem einzelnen Regex gearbeitet, weil der
 * "inputType"-Teil selbst Klammern mit Kommas und Doppelpunkten enthalten
 * kann (z.B. optionQuery(...), useLinks(...)). Stattdessen wird die letzte
 * eckige Klammerngruppe ermittelt und darin der letzte Doppelpunkt auf
 * oberster Klammerungsebene (Tiefe 0 bzgl. "(" / ")") gesucht.
 */
function extractProperty(value: string): string | null {
  if (!value.startsWith("INPUT[")) {
    return null
  }

  // Alle eckigen Klammerngruppen direkt nach "INPUT" einsammeln
  const groups: string[] = []
  let i = "INPUT".length

  while (i < value.length && value[i] === "[") {
    let depth = 0
    const start = i
    let j = i
    do {
      if (value[j] === "[") depth++
      else if (value[j] === "]") depth--
      j++
    } while (depth > 0 && j < value.length)

    if (depth !== 0) {
      // Unausgeglichene Klammern -> kein gültiger INPUT-Ausdruck
      return null
    }

    groups.push(value.slice(start + 1, j - 1))
    i = j
  }

  if (groups.length === 0) {
    return null
  }

  // Nur die letzte Gruppe enthält "inputType:property"
  const last = groups[groups.length - 1]

  let parenDepth = 0
  let colonIndex = -1
  for (let k = 0; k < last.length; k++) {
    const ch = last[k]
    if (ch === "(") parenDepth++
    else if (ch === ")") parenDepth--
    else if (ch === ":" && parenDepth === 0) colonIndex = k
  }

  if (colonIndex === -1) {
    return null
  }

  const property = last.slice(colonIndex + 1).trim()
  return property.length > 0 ? property : null
}

/**
 * Löst einen (ggf. verschachtelten) Property-Pfad wie "meta.author"
 * gegen das Frontmatter-Objekt auf.
 */
function resolveProperty(
  frontmatter: Record<string, unknown>,
  path: string,
): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (acc, key) =>
        acc && typeof acc === "object"
          ? (acc as Record<string, unknown>)[key]
          : undefined,
      frontmatter,
    )
}

/**
 * Formatiert einen Frontmatter-Wert als String für die Anzeige im Text.
 */
function formatValue(value: unknown): string {
  if (value === undefined || value === null) {
    return ""
  }
  if (Array.isArray(value)) {
    return value.map(formatValue).join(", ")
  }
  if (value instanceof Date) {
    return value.toISOString().split("T")[0]
  }
  if (typeof value === "object") {
    // Vermeidet "[object Object]" bei verschachtelten Objekten
    return JSON.stringify(value)
  }
  return String(value)
}

export const InlineFrontmatter: QuartzTransformerPlugin = () => ({
  name: "InlineFrontmatter",
  markdownPlugins() {
    return [
      () => {
        return (tree, file) => {
          // Greift auf das bereits von Quartz geparste Frontmatter zu
          const frontmatter =
            (file.data.frontmatter as Record<string, unknown>) ?? {}

          // `INPUT[...]` steht in Backticks -> mdast parst das als
          // inlineCode-Knoten, NICHT als normalen text-Knoten.
          visit(tree, "inlineCode", (node: InlineCode) => {
            const property = extractProperty(node.value)
            if (property === null) {
              return
            }

            const value = resolveProperty(frontmatter, property)

            // Knoten in einen reinen Textknoten umwandeln, damit die
            // Backtick-/Code-Formatierung im Ergebnis verschwindet.
            const textNode = node as unknown as { type: string; value: string }
            textNode.type = "text"
            textNode.value = formatValue(value)
          })
        }
      },
    ]
  },
})
