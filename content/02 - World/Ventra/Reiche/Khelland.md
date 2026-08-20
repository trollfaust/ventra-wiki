---
tags:
  - "#Location"
aliases:
type: Nation
subType:
dominion:
location:
  - "[[Splitterlande]]"
  - "[[Nord Ventra]]"
art: 99 - Meta/Resources/Utility/Placeholder_Country.webp
languages:
  - "[[Khelisch]]"
governmenttype:
  - Gerontokratie
  - Monarchie
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Regiert durch die Khelrish Familie sitzt Khelland im westlichen Teil Nord Ventras.

## Infos
| Typ                                      | Sub-Type |Übergeordnet                                                                                      | Herrschaft                                                                                                          | Regierungsform                                              | Import                                     | Export                                     | Sprachen                                                                                                            | Art                                                             |
| ---------------------------------------- | --- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `INPUT[LocationType][inlineSelect:type]` | `INPUT[LandType][inlineListSuggester:subType]`(Land)<br>`INPUT[SettlementType][inlineListSuggester:subType]`(Ortschaft)<br>`INPUT[POIType][inlineListSuggester:subType]`(POI) | `INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Character AND !"99 - Meta"), useLinks(partial)):dominion]` | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` | `INPUT[Goods][inlineListSuggester:import]` | `INPUT[Goods][inlineListSuggester:export]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]` | `INPUT[imageSuggester(class(input-image),optionQuery("")):art]` |


#### Neugründung
Nach der [[Die Splitterung|Splitterung]] entstand im nördlichen Bereich der [[Splitterlande]] und einem Teil östlich davon auf dem verbliebenen Hauptkontinent [[Nord Ventra|Nord Ventras]] die Nation Khelland. Gegründet durch die [[Familie Khelrish]] ging die Regierung in einer Art Monarchie auf, in welcher aber immer die 3 ältesten Mitglieder der [[Familie Khelrish]] zusammen regieren.

#### Beziehungen
Zusammen mit dem [[Königreich Heldam]] führt Khelland die engsten Beziehungen zum [[Xyraxisches Reich|Xyraxischen Reich]].

#### Lage
Khelland grenzt südlich am [[Xyraxisches Reich|Xyraxischen Reich]] und nördlich am [[Königreich Heldam]] an. Es liegt teilweise auf dem Hauptkontinent [[Nord Ventra]] und teilweise in den [[Splitterlande|Splitterlanden]]. Außerdem befinden sich der südliche Teil der [[Die Mondberge|Mondberge]] in Khelland.

#### Hauptstadt
[[Kryst]]
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
