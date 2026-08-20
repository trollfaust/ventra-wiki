---
tags:
  - "#Language"
aliases:
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Die dominante Sprache im Land des grünen Rates.

## Infos
Übergeordnete Sprache: `INPUT[inlineListSuggester(optionQuery(#Language AND !"99 - Meta"), useLinks(partial)):parent]`

Da [[Elendria]] während der Herrschaft des [[Xyrax Imperium|Xyrax Imperiums]] sich am meisten gegen dessen Herrschaft wehrte, wurde Elendrisch auch während der [[Ära des Krieges]] mehr als [[Xyraxisch]] im Südöstlichen Gebiet von [[Nord Ventra]] gesprochen. Bis heute ist Elendrisch die dominante Sprache im [[Land des grünen Rates]].
## Sonstiges


> [!note|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Location, type AS Typ, subType AS Sub-Typ, join(link(dominion),", ") AS Herrscher
> FROM !"99 - Meta"
> WHERE contains(languages, this.file.link) AND contains(tags, "#Location")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS "Untergeordnete Sprache"
> FROM !"99 - Meta"
> WHERE contains(parent, this.file.link) AND contains(tags, "#Language")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Charakter, location AS Ort, condition AS Zustand
> FROM !"99 - Meta"
> WHERE contains(languages, this.file.link) AND contains(tags, "#Character") AND !contains(condition, "Tot")
> SORT file.name ASC
> ```
