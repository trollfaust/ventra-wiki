---
tags:
  - "#Story"
  - "#Quest"
aliases:
status:
party:
location:
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Kurzbeschreibung zum vorlesen hier rein

## Infos
| Status | Übergeordnet | Questgeber | Belohnung | Charaktere | Orte | Gruppe |
| --- | --- | --- | --- | --- | --- | --- |
|`INPUT[Status][inlineSelect:status]`|`INPUT[inlineListSuggester(optionQuery(#Story AND !"99 - Meta"), useLinks(partial)):parent]`|`INPUT[inlineListSuggester(optionQuery(#Character AND !"99 - Meta"), useLinks(partial)):questgiver]`|`INPUT[inlineListSuggester(optionQuery(#Item OR #Info AND !"99 - Meta" OR "99 - Meta/CLI/items")):reward]` `INPUT[text:rewardMoney]`|`INPUT[inlineListSuggester(optionQuery(#Character AND !"99 - Meta"), useLinks(partial)):characters]`|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta")):locations]`|`INPUT[inlineListSuggester(optionQuery(#Gruppe AND !"99 - Meta"), useLinks(partial)):party]`|

## Sonstiges


> [!|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS "Untergeordnete Story", status AS Status
> FROM !"99 - Meta"
> WHERE contains(parent, this.file.link) AND contains(tags, "#Story")
> SORT file.status ASC, file.name ASC
> ```
