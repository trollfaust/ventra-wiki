---
title: Home
---
## Orte

> [!abstract]- Regionen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Region, subType AS Sub-Typ, join(link(location),", ") AS Übergeordnet, join(link(dominion),", ") AS Herrscher
> FROM !"99 - Meta"
> WHERE contains(type, "Landmass") AND contains(tags, "#Location")
> SORT subType ASC
> ```

> [!abstract]- Reiche
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Reich, join(link(location),", ") AS Übergeordnet, join(link(dominion),", ") AS Herrscher, join(link(languages),", ") AS Sprachen
> FROM !"99 - Meta"
> WHERE contains(type, "Nation") AND contains(tags, "#Location")
> SORT file.name ASC
> ```

> [!abstract]- Ortschaften
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Ortschaft, subType AS Sub-Typ, join(link(location),", ") AS Übergeordnet, join(link(dominion),", ") AS Herrscher, join(link(languages),", ") AS Sprachen
> FROM !"99 - Meta"
> WHERE contains(type, "Settlement") AND contains(tags, "#Location")
> SORT subType ASC
> ```

## Charaktere

> [!abstract]- Götter
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Gottheit, join(aliases," | ") AS Namen, join(link(domains),", ") AS Domains, condition AS Status
> FROM !"99 - Meta"
> WHERE contains(tags, "#Gottheit") AND !contains(condition, "Tot")
> SORT file.name ASC
> ```

> [!abstract]- NPCs
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Name, join(race," | ") AS Spezies, join(occupation," | ") AS Berufe, condition AS Status, join(link(languages),", ") AS Sprachen
> FROM !"99 - Meta"
> WHERE contains(tags, "#NPC") AND !contains(tags, "#Gottheit") AND !contains(condition, "Tot")
> SORT file.name ASC
> ```

## Sonstiges

> [!abstract]- Sprachen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Name, join(link(parent),", ") AS Übergeordnet
> FROM !"99 - Meta"
> WHERE contains(tags, "#Language")
> SORT file.name ASC
> ```

> [!abstract]- Homebrew
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Homebrew
> FROM !"99 - Meta"
> WHERE contains(tags, "#Homebrew")
> SORT file.name ASC
> ```
