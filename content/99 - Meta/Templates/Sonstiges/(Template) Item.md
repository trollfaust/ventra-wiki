---
tags:
  - "#Item"
aliases:
type:
rarity:
art: 99 - Meta/Resources/Utility/Placeholder_Item.webp
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Kurzbeschreibung zum vorlesen hier rein

## Infos
| Typ | Seltenheit | Eigenschaften | Art |
| --- | --- | --- | --- |
|`INPUT[ItemType][inlineListSuggester():type]`|`INPUT[Rarity][:rarity]`|`INPUT[ItemProperty][inlineListSuggester():properties]`|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|

## Sonstiges


> [!|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS "Quest Belohnung", status AS Status
> FROM !"99 - Meta"
> WHERE contains(reward, this.file.link) AND contains(tags, "#Story")
> SORT file.status ASC, file.name ASC
> ```
