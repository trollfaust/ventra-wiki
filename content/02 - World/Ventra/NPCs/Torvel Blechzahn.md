---
tags:
  - "#NPC"
  - "#Character"
aliases:
condition: Gesund
occupation:
  - Händler
location: []
art: 99 - Meta/Resources/Utility/Placeholder_Person.webp
languages:
  - "[[Xyraxisch]]"
  - "[[Khelisch]]"
race: Dwarf
organizations:
  - "[[Derk Belaks Handelsgesellschaft]]"
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Kindheitsfreund von Backarias ist der Zwerg Torvel

## Infos
| Zustand | Standort | Sprachen | Beruf | Spezies | Organisation | Gruppe | Art |
| --- | --- | --- | --- | --- | --- | --- | --- |
|`INPUT[Condition][:condition]`|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]`|`INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]`|`INPUT[Occupation][inlineListSuggester:occupation]`|`INPUT[Race][suggester:race]`|`INPUT[inlineListSuggester(optionQuery(#Organisation AND !"99 - Meta"), useLinks(partial)):organizations]`|`INPUT[inlineListSuggester(optionQuery(#Gruppe AND !"99 - Meta"), useLinks(partial)):party]`|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|
Zwerg, etwa so alt wie [[Backarias Eisenbart|Backarias]]. Angestellter bei [[Derk Belaks Handelsgesellschaft]]. Kein Firmenchef, mittlere Ebene, viel unterwegs.

### Beziehung [[Backarias Eisenbart|Backarias]]
Backarias und er haben als Kinder auf derselben Halde gesammelt. Der Spitzname "Blechzahn" stammt aus dieser Zeit. Torvel mag ihn nicht, lässt ihn sich aber von [[Backarias Eisenbart|Backarias]] sagen. Von sonst niemandem. Vor Kollegen ist ihm [[Backarias Eisenbart|Backarias]] unangenehm. Unter vier Augen ist [[Backarias Eisenbart|Backarias]] der Einzige, mit dem er offen redet. Er will nicht mehr der Junge von der Halde sein. Er hat Angst, dass jemand von dem Zahn erfährt.

### Der Zinnzahn
Torvel hat als junger Mann einen Zahn verloren. [[Backarias Eisenbart|Backarias]] hat ihm einen aus Zinn geschlagen, aus Schrott, und mit der Feile nachgearbeitet. Der Zahn sitzt seit fünfundzwanzig Jahren in seinem Kiefer. Er rostet nicht, entzündet sich nicht und tut nie weh, und wenn Torvel friert, wird er warm.

Torvel hat das gemerkt. Er hat es einmal [[Backarias Eisenbart|Backarias]] gesagt; der hat versprochen nicht darüber zu reden und hält die Sache für Unsinn. Sonst weiß es niemand. Torvel trägt einen unangemeldeten Magiegegenstand im Mund, den er nicht herausnehmen und nicht melden kann. Sein Schweigen hat deshalb zwei Gründe: Freundschaft und Eigennutz. -> Messer für Torvel aber auch für Backarias


### Die Schuld
Torvel hat einmal für [[Backarias Eisenbart|Backarias]] gebürgt, bei einem Auftrag für die [[Derk Belaks Handelsgesellschaft|Gesellschaft]]. Es ist schiefgegangen, und Torvel hat es bezahlt. Er hat es
[[Backarias Eisenbart|Backarias]] nie in Rechnung gestellt und auch nicht vergessen. [[Backarias Eisenbart|Backarias]] hält es für Materialpech und nicht für seine Schuld.
## Sonstiges


> [!note|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Quest, status AS Status
> FROM !"99 - Meta"
> WHERE contains(questgiver, this.file.link) AND contains(tags, "#Quest")
> SORT nation ASC, file.name ASC
> ```
