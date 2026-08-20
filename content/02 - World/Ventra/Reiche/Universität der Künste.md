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
  - "[[Draconic]]"
  - "[[Xyraxisch]]"
governmenttype:
  - Magokratie
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Die Universität der Künste ist ein Ort, an dem fast alles an Wissen gelehrt wird.

## Infos
| Typ                                      | Übergeordnet                                                                                      | Herrschaft                                                                                                          | Regierungsform                                              | Import                                     | Export                                     | Sprachen                                                                                                            | Art                                                             |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `INPUT[LocationType][inlineSelect:type]` | `INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Character AND !"99 - Meta"), useLinks(partial)):dominion]` | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` | `INPUT[Goods][inlineListSuggester:import]` | `INPUT[Goods][inlineListSuggester:export]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]` | `INPUT[imageSuggester(class(input-image),optionQuery("")):art]` |
```meta-bind-js-view
{type} as type
---
var outputStr = "Subtype: ";
if (context.bound.type === "Landmass"){outputStr = outputStr + `\`INPUT[LandType][inlineListSuggester:subType]\``;}
else if (context.bound.type === "Settlement"){outputStr = outputStr + `\`INPUT[SettlementType][inlineListSuggester:subType]\``;}
else if (context.bound.type === "POI"){outputStr = outputStr + `\`INPUT[POIType][inlineListSuggester:subType]\``;}
else {outputStr = "";}
return engine.markdown.create(outputStr);
```

#### Gründung
Die Universität der Künste ist keine Nation im eigentlichen Sinne, sie ist eine uralte [[Die Institution|Institution]] welche eine große Inselgruppe vor der Ostküste [[Nord Ventra|Nord Ventras]] einnimmt. Sie ist so alt, dass niemand mehr genau weiß wann, wie und warum sie gegründet wurde.

#### Die Künste
Auch wenn viele zur Universität finden um die Magischen Künste zu erlernen, kann man hier so gut wie alles erlernen. [[Die Institution]], der Verwaltungsteil der Universität, ist stehts bemüht neues Wissen aus allen Ecken der Welt in die Universität zu bringen.

#### Beziehungen
Die Universität der Künste ist ein Ort der Wissenschaft, Magie und Lehre. Sie hält sich aus der Politik der restlichen Reiche heraus und verhält sich strickt neutral in Internationalen Konflikten.

#### Lage
Auf einer Inselgruppe südöstlich des [[Land des grünen Rates]] liegt die Universität. Südwestlich davon kann man die Küste [[Süd Ventra|Süd Ventras]] und dort die [[Die Drachenberge|Drachenberg]] sehen.

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
