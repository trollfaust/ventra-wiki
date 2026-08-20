---
tags:
  - "#NPC"
  - "#Character"
aliases:
condition: Gesund
occupation:
  - Magier
  - Abgesanter
location:
  - "[[Xyrax]]"
art: 99 - Meta/Resources/Utility/Placeholder_Person.webp
languages:
  - "[[Xyraxisch]]"
  - "[[Draconic]]"
  - "[[Saaret]]"
race: Human
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Kurzbeschreibung zum vorlesen hier rein

## Infos
| Zustand | Standort | Sprachen | Beruf | Spezies | Organisation | Gruppe | Art |
| --- | --- | --- | --- | --- | --- | --- | --- |
|`INPUT[Condition][:condition]`|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]`|`INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]`|`INPUT[Occupation][inlineListSuggester:occupation]`|`INPUT[Race][suggester:race]`|`INPUT[inlineListSuggester(optionQuery(#Organisation AND !"99 - Meta"), useLinks(partial)):organizations]`|`INPUT[inlineListSuggester(optionQuery(#Gruppe AND !"99 - Meta"), useLinks(partial)):party]`|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|

Francis kommt von den [[Inseln der Einsamkeit]] hat an der [[Universität der Künste]] gelernt und wurde von dort nach [[Xyrax]] im [[Xyraxisches Reich|Xyraxischen Reich]] als Abgesandter der [[Universität der Künste]] geschickt.

Er ist gebildet in den Themen der Religion und Pferden.

Er ist ein Freund von [[Balduin]] und hat diesen mit nach [[Xyrax]] genommen, von wo aus [[Balduin]] auf Grund seiner Magie fliehen musste.
## Sonstiges


> [!note|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Quest, status AS Status
> FROM !"99 - Meta"
> WHERE contains(questgiver, this.file.link) AND contains(tags, "#Quest")
> SORT nation ASC, file.name ASC
> ```
