---
tags:
  - "#Organisation"
aliases:
type:
  - Unternehmen
ruler:
  - "[[Selam Weißzahn Ankergold]]"
location:
  - "[[Ojia]]"
art: 99 - Meta/Resources/Utility/Placeholder_Organisation.webp
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Kurzbeschreibung zum vorlesen hier rein

## Infos
| Typ | Oberhaupt | Übergeordnet | Hauptort | Verehren | Art |
| --- | --- | --- | --- | --- | --- |
|`INPUT[OrganizationType][inlineListSuggester:type]`|`INPUT[inlineListSuggester(optionQuery(#Character AND !"99 - Meta"), useLinks(partial)):ruler]`|`INPUT[inlineListSuggester(optionQuery(#Organization AND !"99 - Meta"), useLinks(partial)):parent]`|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]`|`INPUT[inlineListSuggester(optionQuery(#Character AND !"99 - Meta"), useLinks(partial)):worship]`|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|
Ein Transportunternehmen geführt von [[Selam Weißzahn Ankergold]] welches seinen Hauptsitz in [[Ojia]] hat.
## Sonstiges


> [!note|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID join(link(file.name),", ") AS Unterorganisation, type AS Typ, join(link(ruler),", ") AS Oberhaupt
> FROM !"99 - Meta"
> WHERE contains(parent, this.file.link) AND contains(tags, "#Organisation")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID join(link(file.name),", ") AS Orte, type AS Typ, subType AS Sub-Typ, join(link(dominion),", ") AS Herrscher
> FROM !"99 - Meta"
> WHERE contains(organizations, this.file.link) AND contains(tags, "#Location")
> SORT nation ASC, file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID join(link(file.name),", ") AS Person, join(link(occupation),", ") AS Beruf
> FROM !"99 - Meta"
> WHERE contains(organizations, this.file.link) AND contains(tags, "#Character") AND !contains(condition, "Tot")
> SORT nation ASC, file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Quest, status AS Status
> FROM !"99 - Meta"
> WHERE contains(questgiver, this.file.link) AND contains(tags, "#Quest")
> SORT nation ASC, file.name ASC
> ```
