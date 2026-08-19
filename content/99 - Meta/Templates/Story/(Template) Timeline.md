---
tags:
  - "#Timeline"
  - "#Story"
aliases:
condition:
occupation:
location:
---
# `=this.file.name`

## Infos
| Orte | Übergeordnet |
| --- | --- |
|`INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):locations]`|`INPUT[inlineListSuggester(optionQuery(#Story AND !"99 - Meta"), useLinks(partial)):parent]`|

## Timeline

```aat-vertical
TimelineID hier ändern
dateDisplayFormat: {day}/{month}/{year}
```