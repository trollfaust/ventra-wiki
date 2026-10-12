---
tags:
  - "#Organisation"
aliases:
type:
  - Söldner
ruler:
location:
  - "[[Jal-Hept]]"
art: 99 - Meta/Resources/Utility/Placeholder_Organisation.webp
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Eine Söldner Gruppe im Xyraxischen Reich, welche hauptsächlich zur See agiert.

## Infos
| Typ | Oberhaupt | Übergeordnet | Hauptort | Verehren | Art |
| --- | --- | --- | --- | --- | --- |
|`INPUT[OrganizationType][inlineListSuggester:type]`|`INPUT[inlineListSuggester(optionQuery(#Character AND !"99 - Meta"), useLinks(partial)):ruler]`|`INPUT[inlineListSuggester(optionQuery(#Organization AND !"99 - Meta"), useLinks(partial)):parent]`|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]`|`INPUT[inlineListSuggester(optionQuery(#Character AND !"99 - Meta"), useLinks(partial)):worship]`|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|
Eine Söldner Gruppe im [[Xyraxisches Reich|Xyraxischen Reich]], welche unter anderem von der Regierung angeheuert wird um Häfen zu schützen und Piraten zur Strecke zu bringen.

### Aktuelle Orte/Aufträge
- beschützen den Hafen von [[Tak-Etar]]
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
