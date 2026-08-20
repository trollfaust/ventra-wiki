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
  - "[[Vankyst]]"
governmenttype:
  - Demokratie
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> An der Ostküste Ventras liegt die Sonnen-Küste, ein Zusammenschluss von 13 großen Städten geleitet von Gilden.

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
Nach der [[Die Splitterung|Splitterung]] übernahmen in den Städten an der Sonnen-Küste die vielen Gilden die Regierung. Als 23 Jahre nach er [[Die Splitterung|Splitterung]] Clans aus den Ostlanden versuchten in [[Midwoud]] einzufallen, wurde den Städten klar, dass sie einzeln gefährdet waren. Und so beschlossen die Städte und Gilden der Sonnen-Küste sich zusammen zu schließen um eine gemeinsame Nation zu bilden.

#### Regierung
Die Sonnen-Küste wird von [[Zirkel der Gilden]] regiert. Der [[Zirkel der Gilden]] wird alle 5 Jahre neu gewählt von allen offiziellen Bewohnern der 13 größten Städte. Mitglied des [[Zirkel der Gilden|Zirkels]] kann nur werden, wer seit 10 Jahren Mitglied in einer der vielen Gilden ist.

#### Lage
Die Sonnen-Küste liegt an der Ostküste [[Nord Ventra|Nord Ventras]]. Im Norden grenzen die [[Die Ostlande|Ostlande]], im Westen [[Midwoud]] und im Süden das [[Land des grünen Rates]] an. Vor der Küste finden sich außerdem die [[Inseln der Einsamkeit]].

#### Hauptstadt
[[Ostmaar]]
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
