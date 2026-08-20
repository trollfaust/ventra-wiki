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
governmenttype:
  - Monarchie
languages:
  - "[[Helisch]]"
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Ein sehr traditionelles Königreich im Nord-Westen Ventras.

## Infos
| Typ | Übergeordnet | Herrschaft | Regierungsform | Import | Export | Sprachen | Art |
| --- | --- | --- | --- | --- | --- | --- | --- |
|`INPUT[LocationType][inlineSelect:type]`|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]`|`INPUT[inlineListSuggester(optionQuery(#Organization OR #Character AND !"99 - Meta"), useLinks(partial)):dominion]`|`INPUT[GovernmentType][inlineListSuggester:governmenttype]`|`INPUT[Goods][inlineListSuggester:import]`|`INPUT[Goods][inlineListSuggester:export]`|`INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]`|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|
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

#### Unter dem Imperium
Das Königreich Heldam war eines der wenigen Reiche, welches unter dem [[Xyrax Imperium]] weiterhin relativ eigenständig agieren durfte.

#### Regierung
#TODO: Stephan checken!

#### Lage
Im Süden grenzt das Königreich an [[Khelland]] und im Osten an den [[Bund der Sieben]]. Nach Norden begrenzt durch den [[Der Norgrad|Norgrad]] liegt der Großteil des Königreiches auf dem Hauptkontinent [[Nord Ventra|Nord Ventras]] und ein paar Inseln der [[Splitterlande]].

#### Hauptstadt
[[Norwacht]]

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
