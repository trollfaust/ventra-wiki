---
tags:
  - "#NPC"
  - "#Character"
aliases:
condition: Gesund
occupation:
  - Werkzeug Schmied
location:
  - "[[Norwacht]]"
art: 99 - Meta/Resources/Utility/Placeholder_Person.webp
languages:
  - "[[Helisch]]"
  - "[[Xyraxisch]]"
race: Dwarf
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Kurzbeschreibung zum vorlesen hier rein

## Infos
| Zustand | Standort | Sprachen | Beruf | Spezies | Organisation | Gruppe | Art |
| --- | --- | --- | --- | --- | --- | --- | --- |
|`INPUT[Condition][:condition]`|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]`|`INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]`|`INPUT[Occupation][inlineListSuggester:occupation]`|`INPUT[Race][suggester:race]`|`INPUT[inlineListSuggester(optionQuery(#Organisation AND !"99 - Meta"), useLinks(partial)):organizations]`|`INPUT[inlineListSuggester(optionQuery(#Gruppe AND !"99 - Meta"), useLinks(partial)):party]`|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|

Vater von [[Dwagorr]].
[[Dwagorr]] erzählt ihm zuerst von seiner Anstellung bei der Stadtwache in [[Norwacht]]. Deimund ist daraufhin etwas zwiegespalten, da er stolz ist aber auch wollte, dass sein Sohn in seine Fußstapfen als Schmied tritt.
## Sonstiges


> [!note|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Quest, status AS Status
> FROM !"99 - Meta"
> WHERE contains(questgiver, this.file.link) AND contains(tags, "#Quest")
> SORT nation ASC, file.name ASC
> ```
