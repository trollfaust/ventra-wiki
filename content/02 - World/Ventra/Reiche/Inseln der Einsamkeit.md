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
  - "[[Saaret]]"
governmenttype:
  - Eidgenossenschaft
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Ein Bund aus Kleinstaaten kontrolliert diese Inselgruppe vor der Ostküste Nord Ventras.

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
Die Inseln der Einsamkeit sind ein loser Bund von Kleinstaaten, das sogenannte [[Bündnis der Inseln]], welche jeweils eine Insel einer Inselgruppe vor der Ostküste [[Nord Ventra|Nord Ventras]] einschließen. Die Gründung dieses Staatenbundes liegt länger zurück als die meisten anderen aktuellen Nationen in [[Nord Ventra]], da die Inseln durch die Trennung vom Festland und die weite Distanz nach [[Xyrax]] den Bund vor dem [[Xyrax Imperium]] schützte. Das [[Bündnis der Inseln]] existiert in der ein oder anderen Form schon seit der [[Ära der Frucht]]. 

#### Regierung
Die einzelnen Kleinstaaten des Bundes regieren sich zum Großteil selbst. Wenn es übergreifende Dinge zu regeln gilt, treffen sich die einzelnen Könige und Anführer in [[Hochfels]] auf der größten Insel.

#### Lage
Östlich der [[Sonnen-Küste]] im [[Ostmeer]] liegt die Inselgruppe bekannt als Inseln der Einsamkeit.

#### Hauptstadt
[[Hochfels]]
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
