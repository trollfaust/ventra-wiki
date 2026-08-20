---
tags:
  - "#Language"
aliases:
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Die Sprache der Gelehrten.

## Infos
Übergeordnete Sprache: `INPUT[inlineListSuggester(optionQuery(#Language AND !"99 - Meta"), useLinks(partial)):parent]`

Als uralte Sprache der [[Drachen]], wird sie bis heute als Sprache der Gelehrten angesehen und gesprochen. Entsprechend findet man Draconic überall gesprochen aber besonders an der [[Universität der Künste]]. Hier wird sie als offizielle Amtssprache genutzt.
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
