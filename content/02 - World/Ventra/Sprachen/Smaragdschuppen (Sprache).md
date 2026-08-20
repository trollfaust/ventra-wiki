---
tags:
  - "#Language"
aliases:
parent:
  - "[[Schuppenzungen]]"
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Sprache des Clans der Smaragdschuppen in Süd Ventra.

## Infos
Übergeordnete Sprache: `INPUT[inlineListSuggester(optionQuery(#Language AND !"99 - Meta"), useLinks(partial)):parent]`

Der Clan der [[Smaragdschuppen]], ein Clan von [[Lizardfolk]] im Dschungel von [[Süd Ventra]], spricht seine eigene Sprache.
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
