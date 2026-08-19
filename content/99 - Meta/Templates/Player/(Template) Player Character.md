---
tags:
  - "#Spieler"
  - "#Character"
aliases:
condition:
class:
race:
location:
art: 99 - Meta/Resources/Utility/Placeholder_Person.webp
---
# `=this.file.name`

## Infos
| Zustand                              | Standort                                                                                          | Sprachen                                                                                               | Klasse                                                                                        | Spezies                                             | Gruppe                                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `INPUT[Condition][:condition]`       | `INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]`                                                        | `INPUT[Class][inlineListSuggester:class]`                                                     | `INPUT[Race][suggester:race]`                       | `INPUT[inlineListSuggester(optionQuery(#Gruppe AND !"99 - Meta"), useLinks(partial)):party]` |
| Gender                               | Alter                                                                                             | Religionen                                                                                             | Götter                                                                                        | Beruf                                               | Art                                                                                          |
| `INPUT[Gender][inlineSelect:gender]` | `INPUT[number:age]`                                                                               | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"99 - Meta"), useLinks(partial)):religions]` | `INPUT[inlineListSuggester(optionQuery(#Gottheit AND !"99 - Meta"), useLinks(partial)):gods]` | `INPUT[Occupation][inlineListSuggester:occupation]` | `INPUT[imageSuggester(class(input-image),optionQuery("")):art]`  |

[DnDBeyond]()

> [!info]

## Übersicht


## Ziele


## Schwächen


## Sonstiges

