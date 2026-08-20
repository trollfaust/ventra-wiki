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
  - "[[Khar]]"
governmenttype:
  - Autokratie
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Die Ostlande stellen einen losen Zusammenschluss vieler einzelner Clans dar.

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

#### Keine Nation
Die Ostlande sind keine wirkliche Nation. Sie sind ein Landstrich, in welchem viele kleinere Clans verstreut leben und eine lose Gesellschaft des Stärkeren bilden.

#### Regierung
Die rudimentären Regierungsgeschäfte werden in der Stadt [[Kar-Dur]] alle 3 Jahre von Vertretern vieler Clans beschlossen. Auch wenn aus diesen sogenannten [[Kar-Ting]] häufig nicht viel hervorgeht, da sich die Clans eher uneinig sind, stehen die vielen Clans oft gemeinsam gegen größere Bedrohungen wie etwa drohende Invasionen anderer Nationen.

#### Lage
Wie der Name schon impliziert, liegen die Ostlande im östlichen Bereich [[Nord Ventra|Nord Ventras]]. Sie grenzen im Westen an den [[Bund der Sieben]] im Süd-Westen an [[Midwoud]] und südlich an die [[Sonnen-Küste]].

#### Hauptstadt
[[Kar-Dur]]
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
