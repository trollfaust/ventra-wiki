---
tags:
  - "#NPC"
  - "#Character"
  - "#Gottheit"
aliases:
condition:
domains:
location:
art: 99 - Meta/Resources/Utility/Placeholder_Deity.webp
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Kurzbeschreibung zum vorlesen hier rein

## Infos
| Zustand | Aliases | Standort | Domains | Sprachen | Art |
| --- | --- | --- | --- | --- | --- |
|`INPUT[Condition][:condition]`|`INPUT[list:aliases]`|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]`|`INPUT[inlineListSuggester(optionQuery(#Domain AND !"99 - Meta"), useLinks(partial)):domains]`|`INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]`|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|

## Sonstiges


> [!|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Organisation, type AS Typ
> FROM !"99 - Meta"
> WHERE contains(worship, this.file.link) AND contains(tags, "#Organisation")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Quest, status AS Status
> FROM !"99 - Meta"
> WHERE contains(questgiver, this.file.link) AND contains(tags, "#Quest")
> SORT nation ASC, file.name ASC
> ```



