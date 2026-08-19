---
tags:
  - "#Story"
  - "#Event"
aat-event-start-date: 1-1-100
aat-event-end-date: 1-5-100
aat-render-enabled: false
timelines: []
art: 99 - Meta/Resources/Utility/Placeholder_Event.webp
---
# `=this.file.name` %%aat-ignore-line%%
## Timeline Beschreibung%%aat-ignore-line%%



%%aat-event-end-of-body%%
## Infos
| Start Jahr | End Jahr | Anzeigen | Timeline | Übergeordnete Story | Art |
| --- | --- | --- | --- | --- | --- |
|`INPUT[text:aat-event-start-date]`|`INPUT[text:aat-event-end-date]`|`INPUT[toggle:aat-render-enabled]`|`INPUT[inlineListSuggester(optionQuery(#Timeline AND !"99 - Meta"), useLinks(false)):timelines]`|`INPUT[inlineListSuggester(optionQuery(#Story AND !"99 - Meta"), useLinks(partial)):parent]`|`INPUT[imageSuggester(class(input-image),optionQuery("")):art]`|

## Sonstiges


> [!|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS "Untergeordnete Story", status AS Status
> FROM !"99 - Meta"
> WHERE contains(parent, this.file.link) AND contains(tags, "#Story")
> SORT file.status ASC, file.name ASC
> ```