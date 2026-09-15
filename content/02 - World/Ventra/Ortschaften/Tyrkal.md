---
tags:
  - "#Location"
aliases:
type: Settlement
subType:
  - Großstadt
dominion:
location:
  - "[[Xyraxisches Reich]]"
art: 99 - Meta/Resources/Utility/Placeholder_Town.webp
import:
  - Getreide
  - Holz
export:
  - Getreide
  - Wolle
  - Früchte
languages:
  - "[[Xyraxisch]]"
  - "[[Khelisch]]"
  - "[[Helisch]]"
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Eine der wichtigsten Handelsstädte des Xyraxischen Reiches.

## Infos
| Typ | Sub-Type | Übergeordnet | Bevölkerungszahl | Herrschaft | Regierungsform | Import | Export | Sprachen | Art |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `INPUT[LocationType][inlineSelect:type]` | `INPUT[LandType][inlineListSuggester:subType]`(Land)<br>`INPUT[SettlementType][inlineListSuggester:subType]`(Ortschaft)<br>`INPUT[POIType][inlineListSuggester:subType]`(POI) | `INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]` | `INPUT[number:population]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Character AND !"99 - Meta"), useLinks(partial)):dominion]` | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` | `INPUT[Goods][inlineListSuggester:import]` | `INPUT[Goods][inlineListSuggester:export]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]` | `INPUT[imageSuggester(class(input-image),optionQuery("")):art]` |
Tyrkal ist eine der größten 3 Städte im [[Xyraxisches Reich|Xyraxischen Reich]] neben [[Xyrax]] und [[Nek-Sha]]. Hauptsächlich eine Handelsstadt im Reich als auch außerhalb nach [[Khelland]] und ins [[Königreich Heldam]], ist Tyrkal eine der wichtigsten Städte im Reich und entsprechend ist die Stadt gut gesichert sowohl im Hafen als auch von Landrouten. Neben dem Handel wird hier im Umland auch ein Großteil der Früchte des Reiches produziert.

## Sonstiges

> [!note|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Unterlocation, type AS Typ, subType AS Sub-Typ, join(link(dominion),", ") AS Herrscher
> FROM !"99 - Meta"
> WHERE contains(location, this.file.link) AND contains(tags, "#Location")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Organisation, type AS Typ, join(link(ruler),", ") AS Oberhaupt
> FROM !"99 - Meta"
> WHERE contains(location, this.file.link) AND contains(tags, "#Organisation")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Person, join(link(occupation),", ") AS Beruf, join(link(organizations),", ") AS Organisationen
> FROM !"99 - Meta"
> WHERE contains(location, this.file.link) AND contains(tags, "#Character") AND !contains(condition, "Tot")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Quest, status AS Status
> FROM !"99 - Meta"
> WHERE contains(location, this.file.link) AND contains(tags, "#Story")
> SORT file.name ASC
> ```
