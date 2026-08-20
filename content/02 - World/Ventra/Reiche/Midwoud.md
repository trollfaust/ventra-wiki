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
  - "[[Mondzunge]]"
  - "[[Xyraxisch]]"
governmenttype:
  - Matriarchat
  - Meritokratie
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Eine Nation geleitet von der "Woudmere", mit einer relativ hohen Population von Tabaxi.
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
In den dichten Wäldern, welche hier an der [[Kernsee]] liegen, gab es schon immer eine große Population von [[Tabaxi]]. Nach dem [[Xyrax Imperium]] und der [[Die Splitterung|Splitterung]] bildete sich hier eine Gesellschaft, in welcher die weiblichen Mitglieder die Krieger bildeten. Als es, 23 Jahre nach der [[Die Splitterung|Splitterung]], zu einem Versuch einiger Clans aus den [[Die Ostlande|Ostlanden]] sich die Wälder zu eigen zu machen kam, wurde aus der Gesellschaft eine Nation. Die neue Nation Midwoud berief sich auf die weiblichen Krieger und wurde zu einem Matriarchat in welchem die Leistungen einzelner Mitglieder deren Stand bestimmt.

#### Regierung
Die Regierung wird gleitet von der [[Woudmere]], welche für Jahr die Regierung inne hält. Einmal im Jahr kommt der [[Senat der Frühen]] zusammen, welcher aus den ehemaligen Herrscherinnen besteht, und wählt aus allen Anwärterinnen, basierend auf den Leistungen und Errungenschaften der Anwärterin, die neue [[Woudmere]] aus. Jede Frau kann nur einmal in ihrem Leben die [[Woudmere]] werden.

#### Lage
Östlich des [[Das einsame Auge|einsamen Auges]] an der [[Kernsee]] gelegen, ist Midwoud umgeben vom [[Bund der Sieben]] im Norden, den [[Die Ostlande|Ostlanden]] im Nord-Osten, der [[Sonnen-Küste]] im Osten und dem [[Land des grünen Rates]] im Süden.

#### Hauptstadt
[[Mondschimmer]]

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
