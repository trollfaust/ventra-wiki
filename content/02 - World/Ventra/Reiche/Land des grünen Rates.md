---
tags:
  - "#Location"
aliases:
type: Nation
subType:
dominion:
location:
  - "[[Nord Ventra]]"
art: 99 - Meta/Resources/Utility/Placeholder_Country.webp
languages:
  - "[[Elendrisch]]"
governmenttype:
  - Oligarchie
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Ein Land, welches zum Großteil aus Wäldern besteht und dessen Bewohner mit der Natur im Einklang leben.

## Infos
| Typ | Sub-Type | Übergeordnet | Bevölkerungszahl | Herrschaft | Regierungsform | Import | Export | Sprachen | Art |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `INPUT[LocationType][inlineSelect:type]` | `INPUT[LandType][inlineListSuggester:subType]`(Land)<br>`INPUT[SettlementType][inlineListSuggester:subType]`(Ortschaft)<br>`INPUT[POIType][inlineListSuggester:subType]`(POI) | `INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]` | `INPUT[number:population]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Character AND !"99 - Meta"), useLinks(partial)):dominion]` | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` | `INPUT[Goods][inlineListSuggester:import]` | `INPUT[Goods][inlineListSuggester:export]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]` | `INPUT[imageSuggester(class(input-image),optionQuery("")):art]` |


#### Gründung
Die Bewohner des Landes des grünen Rates, waren während der Vormacht des [[Xyrax Imperium|Xyrax Imperiums]] diejenigen die sich am meisten gegen jenes auflehnten. Als das [[Xyrax Imperium]] dann zerfiel, waren Sie die ersten, welche Ihr neues Reich gründeten.

#### Regierung
[[Der Grüne Rat]] lenkt die Geschicke des Landes und hat seinen Sitz in [[Elendria]]. Viele der Mitglieder des [[Der Grüne Rat|grünen Rates]] sind ältere Elfen und haben daher die [[Die Splitterung|Splitterung]] und den Fall des [[Xyrax Imperium|Xyrax Imperiums]] selbst mitbekommen. Auch wenn [[Der Grüne Rat|der grüne Rat]] aus 21 Personen aus alten Adelsfamilien besteht, nimmt der [[Der Grüne Rat|Rat]] die Belange seiner Bürger, egal welchen Standes, sehr ernst.

#### Beziehungen
Die Entscheidung des [[Xyraxisches Reich|Xyraxischen Reiches]] sich gegen die Magie zu wenden, wird bis heute vom [[Der Grüne Rat|grünen Rat]] als Voreilig und Fehlentscheidung gesehen. Daher ist das Land des grünen Rates grundsätzlich negativ gegenüber dem [[Xyraxisches Reich|Xyraxischen Reich]] eingestellt.

#### Lage
Südlich an die [[Die Drachenberge|Drachenberge]] grenzend liegt das Land des grünen Rates noch in [[Nord Ventra]] aber am Übergang nach [[Süd Ventra]]. Östlich vor der Küste findet man die [[Universität der Künste]] und nach Norden hin befindet sich die Grenze zu [[Midwoud]] und der [[Sonnen-Küste]].

#### Hauptstadt
[[Elendria]]
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
