---
tags:
  - "#Location"
aliases:
type: Settlement
subType:
  - Stadt
dominion:
location:
  - "[[Khelland]]"
art: 99 - Meta/Resources/Utility/Placeholder_Town.webp
languages:
  - "[[Khelisch]]"
  - "[[Xyraxisch]]"
  - "[[Helisch]]"
export:
  - Getreide
  - Lehm
import:
  - Holz
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Der erste Anlaufpunkt für Schiffe aus dem Xyraxischen Reich in Richtung Norden ist Urkar.

## Infos
| Typ                                      | Sub-Type                                                                                                                                                                      | Übergeordnet                                                                                      | Bevölkerungszahl           | Herrschaft                                                                                                          | Regierungsform                                              | Import                                     | Export                                     | Sprachen                                                                                                            | Art                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `INPUT[LocationType][inlineSelect:type]` | `INPUT[LandType][inlineListSuggester:subType]`(Land)<br>`INPUT[SettlementType][inlineListSuggester:subType]`(Ortschaft)<br>`INPUT[POIType][inlineListSuggester:subType]`(POI) | `INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]` | `INPUT[number:population]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Character AND !"99 - Meta"), useLinks(partial)):dominion]` | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` | `INPUT[Goods][inlineListSuggester:import]` | `INPUT[Goods][inlineListSuggester:export]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]` | `INPUT[imageSuggester(class(input-image),optionQuery("")):art]` |
Nach der [[Die Splitterung|Splitterung]] lag das Dorf Urkar nicht mehr weit von der Westküste entfernt und innerhalb weniger Jahrzehnte wuchs das Dorf zu einer Stadt bis zur Küste heran. Heute ist Urkar eine Handelsstadt und der erste Anlaufpunkt von Schiffen aus dem [[Xyraxisches Reich|Xyraxischen Reich]], welche Richtung Norden segeln. Das alte Dorf, etwas abseits gelegen, ist bis heute im Getreideanbau und Lehmabbau aktiv.

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
