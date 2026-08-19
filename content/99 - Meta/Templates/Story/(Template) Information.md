---
tags:
  - "#Story"
  - "#Info"
aliases:
status:
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Kurzbeschreibung zum vorlesen hier rein

## Infos
| Status | Übergeordnet | Charaktere | Orte | Gruppe |
| --- | --- | --- | --- | --- |
|`INPUT[Status][inlineSelect:status]`|`INPUT[inlineListSuggester(optionQuery(#Story AND !"99 - Meta"), useLinks(partial)):parent]`|`INPUT[inlineListSuggester(optionQuery(#Character AND !"99 - Meta"), useLinks(partial)):characters]`|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta")):locations]`|`INPUT[inlineListSuggester(optionQuery(#Gruppe AND !"99 - Meta"), useLinks(partial)):party]`|

## Sonstiges


> [!|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS "Untergeordnete Story", status AS Status
> FROM !"99 - Meta"
> WHERE contains(parent, this.file.link) AND contains(tags, "#Story")
> SORT file.status ASC, file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS "Belohnung in", status AS Status
> FROM !"99 - Meta"
> WHERE contains(reward, this.file.link) AND contains(tags, "#Story")
> SORT file.status ASC, file.name ASC
> ```
