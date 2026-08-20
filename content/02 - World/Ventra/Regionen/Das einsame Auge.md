---
tags:
  - "#Location"
aliases:
type: Landmass
subType:
  - Insel
dominion:
location:
  - "[[Nord Ventra]]"
art: 99 - Meta/Resources/Utility/Placeholder_Land.webp
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Eine große Vulkanische Insel in der Inneren See in Nord Ventra.

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

In der [[Kernsee]] in Herzen [[Nord Ventra|Nord Ventras]] liegt diese große Insel. Sie ist Großteils unbewohnt, da es hier durch Vulkanische Aktivitäten teilweise sehr lebensfeindlich ist.

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
