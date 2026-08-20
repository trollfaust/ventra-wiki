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
governmenttype:
  - Oligarchie
languages:
  - "[[Ba-El]]"
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Von sieben Clans gegründet und geführt, liegt der Bund der Sieben im Norden Ventras.

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
#### Gründung
Nach der [[Die Splitterung|Splitterung]] schlossen sich die [[Die sieben Clans|sieben stärksten Clans]] im Norden [[Ventra|Ventras]] zu einem Bund zusammen und gründeten dieses Reich.

#### Regierung
[[Die sieben Clans]] regieren von [[Baelstadt]] aus das Reich. Jeder Clan stellt einen Vertreter, welcher im [[Rat der Sieben]] die Interessen des Clans vertritt und gemeinsam den Bund führt.

#### Lage
Gelegen im Norden [[Ventra|Ventras]] liegt der Bund der Sieben zwischen dem [[Königreich Heldam]] im Westen und [[Die Ostlande|den Ostlanden]] im Osten. Im Süd-Osten teilt sich der Bund auch eine Grenze mit [[Midwoud]].

#### Hauptstadt
[[Baelstadt]]
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
