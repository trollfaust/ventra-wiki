---
tags:
  - "#Gruppe"
condition:
art: 99 - Meta/Resources/Utility/Placeholder_Organisation.webp
---
# `=this.file.name`

## Infos
| Zustand | DnDBeyond | Foundry | Art |
| --- | --- | --- | --- |
|`INPUT[GroupCondition][:condition]`|[DnDBeyond Kampagne](https://www.dndbeyond.com/en)|[Foundry](https://pnp.trollschmiede.games)|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|

## Charaktere
``` dataview
TABLE WITHOUT ID link(file.name) AS Title, condition AS Zustand, location AS "Aktueller Ort"
FROM !"99 - Meta"
WHERE econtains(party, this.file.link) AND contains(tags, "#Character") AND !contains(condition, "Tot")
SORT tags ASC, file.name ASC
```

## Sessions
``` dataview
TABLE WITHOUT ID 
"<span style='display: block; border-bottom: 2px solid green; text-align: center; margin-bottom: 5px;'>" + link(file.link, Title) + "</span>" AS Session,
"<span style='display: block; border-bottom: 2px solid green; text-align: center; margin-bottom: 5px;'>" + sessiondate + "</span>" AS SessionDate,
quicknote AS Overview
FROM !"99 - Meta"
WHERE contains(party, this.file.link) AND contains(tags, "#Session")
SORT date(sessiondate, "dd/MM/yyyy") DESC LIMIT 10
```

## Adventures
``` dataview
TABLE WITHOUT ID 
"<span style='display: block; border-bottom: 2px solid lightblue; text-align: center; margin-bottom: 5px;'>" + link(file.link, Title) + "</span>" AS Quest,
"<span style='display: block; border-bottom: 2px solid lightblue; text-align: center; margin-bottom: 5px;'>" + status + "</span>" AS Status,
quicknote AS "Overview"
FROM !"99 - Meta"
WHERE contains(party, this.file.link) AND contains(tags, "#Quest") AND !contains(status, "✅") AND !contains(status, "❌")
SORT file.name ASC
```

## Relevante NPCs
`INPUT[inlineListSuggester(optionQuery(#NPC AND !"99 - Meta"), useLinks(partial)):location]`