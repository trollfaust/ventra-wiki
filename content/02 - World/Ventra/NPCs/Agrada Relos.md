---
tags:
  - "#NPC"
  - "#Character"
aliases:
condition: Gesund
occupation:
  - Notar
location:
  - "[[Ojia]]"
art: 99 - Meta/Resources/Utility/Placeholder_Person.webp
languages:
  - "[[Xyraxisch]]"
  - "[[Draconic]]"
  - "[[Saaret]]"
race: Ork
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Kurzbeschreibung zum vorlesen hier rein

## Infos
| Zustand | Standort | Sprachen | Beruf | Spezies | Organisation | Gruppe | Art |
| --- | --- | --- | --- | --- | --- | --- | --- |
|`INPUT[Condition][:condition]`|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]`|`INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]`|`INPUT[Occupation][inlineListSuggester:occupation]`|`INPUT[Race][suggester:race]`|`INPUT[inlineListSuggester(optionQuery(#Organisation AND !"99 - Meta"), useLinks(partial)):organizations]`|`INPUT[inlineListSuggester(optionQuery(#Gruppe AND !"99 - Meta"), useLinks(partial)):party]`|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|
Notar aus [[Ojia]].
## Sonstiges


> [!note|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Quest, status AS Status
> FROM !"99 - Meta"
> WHERE contains(questgiver, this.file.link) AND contains(tags, "#Quest")
> SORT nation ASC, file.name ASC
> ```
