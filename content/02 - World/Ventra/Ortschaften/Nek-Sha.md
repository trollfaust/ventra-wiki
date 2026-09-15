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
languages:
  - "[[Xyraxisch]]"
export:
  - Holz
  - Wolle
import:
  - Holz
  - Getreide
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Eine Stadt am Fluss Satuk mit Hafen und Eisenbahn Anbindung.

## Infos
| Typ                                      | Sub-Type                                                                                                                                                                      | Übergeordnet                                                                                      | Bevölkerungszahl           | Herrschaft                                                                                                          | Regierungsform                                              | Import                                     | Export                                     | Sprachen                                                                                                            | Art                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `INPUT[LocationType][inlineSelect:type]` | `INPUT[LandType][inlineListSuggester:subType]`(Land)<br>`INPUT[SettlementType][inlineListSuggester:subType]`(Ortschaft)<br>`INPUT[POIType][inlineListSuggester:subType]`(POI) | `INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]` | `INPUT[number:population]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Character AND !"99 - Meta"), useLinks(partial)):dominion]` | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` | `INPUT[Goods][inlineListSuggester:import]` | `INPUT[Goods][inlineListSuggester:export]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]` | `INPUT[imageSuggester(class(input-image),optionQuery("")):art]` |
Am Fluss [[Satuk]] gelegen hat Nek-Sha einen Hafen und des weiteren eine Anbindung an das Schienennetz auf dem Hauptland [[Nord Ventra|Nord Ventras]]. Hier wird viel Holz, welches von der Östlichen Küste des [[Xyraxisches Reich|Xyraxischen Reiches]] per Zug kommt umgesetzt und im Reich verteilt. Außerdem befinden sich im Umland viele Farmen mit Schafen und dadurch ist Nek-Sha einer der größten Exporteure von Wolle.

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
