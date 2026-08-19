---
tags:
  - "#Domain"
aliases:
location:
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Kurzbeschreibung zum vorlesen hier rein

## Infos
Übergeordnet: `INPUT[inlineListSuggester(optionQuery(#Domain AND !"99 - Meta"), useLinks(partial)):parent]`

## Sonstiges


> [!|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Gottheit
> FROM !"99 - Meta"
> WHERE contains(domains, this.file.link) AND contains(tags, "#Gottheit")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Untergeordnete_Domain
> FROM !"99 - Meta"
> WHERE contains(parent, this.file.link) AND contains(tags, "#Domain")
> SORT file.name ASC
> ```
