---
tags:
  - "#Location"
aliases:
type: Settlement
subType:
  - Stadt
dominion:
location:
  - "[[Xyraxisches Reich]]"
art: 99 - Meta/Resources/Utility/Placeholder_Town.webp
languages:
  - "[[Xyraxisch]]"
export:
  - Holz
  - Stein
import:
  - Stein
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Serena ist vorrangig eine Handelsstadt, welche Stein aus dem Jal-Ahct Gebirge und Holz handelt.

## Infos
| Typ                                      | Sub-Type |Übergeordnet                                                                                      | Herrschaft                                                                                                          | Regierungsform                                              | Import                                     | Export                                     | Sprachen                                                                                                            | Art                                                             |
| ---------------------------------------- | --- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `INPUT[LocationType][inlineSelect:type]` | `INPUT[LandType][inlineListSuggester:subType]`(Land)<br>`INPUT[SettlementType][inlineListSuggester:subType]`(Ortschaft)<br>`INPUT[POIType][inlineListSuggester:subType]`(POI) | `INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Character AND !"99 - Meta"), useLinks(partial)):dominion]` | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` | `INPUT[Goods][inlineListSuggester:import]` | `INPUT[Goods][inlineListSuggester:export]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]` | `INPUT[imageSuggester(class(input-image),optionQuery("")):art]` |

Am Fluss [[Tuk-Nei]] auf der Insel [[Jal-Kaho]] gelegen, ist Serena ein Stadt welche auch per Zug von [[Xyrax]] oder [[Griffan]] aus erreichbar ist. So gut wie alles an Stein was auf dem [[Jal-Ahct Gebirge]] kommt wird über den [[Tuk-Nei]] durch Serena gebracht. Neben dem Steinhandel, wird in Serena viel Holz abgebaut und gehandelt.
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
