import type { QuartzTransformerPlugin } from "@quartz-community/types"
import type { Heading, InlineCode, Root, Parent } from "mdast"
import { visit } from "unist-util-visit"
 
/**
 * Erkennt Überschriften, deren gesamter Inhalt aus einem Obsidian-
 * Inline-Dataview-Feld auf den Dateinamen besteht, z.B.:
 *
 *   # `=this.file.name`
 *   ## `= this.file.name`
 *
 * Das wird in Obsidian genutzt, um den Titel dynamisch anzuzeigen —
 * in Quartz übernimmt das bereits die ArticleTitle-Komponente, daher
 * ist diese Zeile hier nur redundant und wird komplett entfernt.
 */
function isAutoTitleHeading(node: Heading): boolean {
  if (node.children.length !== 1) return false
  const child = node.children[0]
  if (child.type !== "inlineCode") return false
  const value = (child as InlineCode).value.trim()
  return /^=\s*this\.file\.name\s*$/.test(value)
}
 
export const RemoveAutoTitleHeading: QuartzTransformerPlugin = () => ({
  name: "RemoveAutoTitleHeading",
  markdownPlugins() {
    return [
      () => {
        return (tree: Root) => {
          visit(tree, "heading", (node: Heading, index, parent: Parent | undefined) => {
            if (!parent || index === undefined) return
            if (isAutoTitleHeading(node)) {
              parent.children.splice(index, 1)
              // Am selben Index weitermachen, da dort jetzt das nächste
              // Geschwister-Element steht (sonst würde eines übersprungen).
              return index
            }
          })
        }
      },
    ]
  },
})
