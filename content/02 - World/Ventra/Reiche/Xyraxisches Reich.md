---
tags:
  - "#Location"
aliases:
  - Xyraxischen Reich
type: Nation
subType:
dominion:
  - "[[Shar Xero IV]]"
location:
  - "[[Splitterlande]]"
art: 99 - Meta/Resources/Utility/Placeholder_Country.webp
languages:
  - "[[Xyraxisch]]"
governmenttype:
  - Plutokratie
  - Monarchie
export:
  - Stahl
  - Kohle
import:
  - Getreide
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Geboren aus den Resten des Xyrax Imperiums ist das Xyraxische Reich Technologie fokussiert.

## Infos
| Typ                                      | Sub-Type |Übergeordnet                                                                                      | Herrschaft                                                                                                          | Regierungsform                                              | Import                                     | Export                                     | Sprachen                                                                                                            | Art                                                             |
| ---------------------------------------- | --- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `INPUT[LocationType][inlineSelect:type]` | `INPUT[LandType][inlineListSuggester:subType]`(Land)<br>`INPUT[SettlementType][inlineListSuggester:subType]`(Ortschaft)<br>`INPUT[POIType][inlineListSuggester:subType]`(POI) | `INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Character AND !"99 - Meta"), useLinks(partial)):dominion]` | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` | `INPUT[Goods][inlineListSuggester:import]` | `INPUT[Goods][inlineListSuggester:export]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]` | `INPUT[imageSuggester(class(input-image),optionQuery("")):art]` |


Auch wenn das Xyraxische Reich noch eine relativ junge Nation ist, blickt es doch auf eine weite Vergangenheit zurück, da es aus dem [[Xyrax Imperium]] hervorging.

#### Die Splitterung und Gründung
Das Xyraxische Reich entstand als zum Ende der [[Ära des Krieges]] das [[Xyrax Imperium]] durch die [[Die Splitterung|Splitterung]] zerbrach. Durch die Magische Herkunft der [[Die Splitterung|Splitterung]] wurde im neu gegründeten Xyraxischen Reich Magie verboten und [[Splittergänger]] (Magisch Begabte) gejagt. Vor ca. 40 Jahren wurde dieses Verbot wieder aufgehoben und langsam steigen die Zahlen der Magie Begabten wieder an. Nichts desto trotz werden Magisch Begabte weiterhin mit Misstrauen und Ablehnung begegnet.

#### Regierung
Das Reich wird traditionell regiert durch einen [[Shar]], auch wenn der [[Shar]] theoretisch volle Kontrolle der Macht ausübt, werden die alltäglichen Regierungsgeschäft durch den [[Ministerstab]] abgewickelt. Aktuell wird das Reich regiert von [[Shar Xero IV]].

#### Technologie
Durch das Verbot der Magie brach im Xyraxischen Reich eine Zeit der Technologie an. Es wurden neue Wege, neben der Magie, gesucht das Leben zu verbessern oder [[Splittergänger]] zu fangen. So entstanden unter anderem [[Feuerwaffen]], [[Züge]] und [[Splitterbrecher]].

#### Lage
Das Xyraxische Reich umfasst den Großteil der [[Splitterlande]] und grenzt im Nord-Osten an [[Khelland]] an. Auf der Hauptinsel, auf welcher die Hauptstadt [[Xyrax]] liegt, befindet sich auch das [[Jal-Ahct Gebirge]].

#### Hauptstadt
[[Xyrax]]
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
