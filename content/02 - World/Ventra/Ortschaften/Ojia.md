---
tags:
  - "#Location"
aliases:
type: Settlement
subType:
  - Stadt
dominion:
  - "[[Jel-Dar Teraf]]"
location:
  - "[[Xyraxisches Reich]]"
art: 99 - Meta/Resources/Utility/Placeholder_Town.webp
languages:
  - "[[Xyraxisch]]"
export:
  - Exotisches Holz
  - Gewürze
import:
  - Kohle
population: 12000
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Eine Stadt im Xyraxischen Reich, welche vor allem mit Gewürzen und edlem Holz handelt.

## Infos
| Typ                                      | Sub-Type                                                                                                                                                                      | Übergeordnet                                                                                      | Bevölkerungszahl           | Herrschaft                                                                                                          | Regierungsform                                              | Import                                     | Export                                     | Sprachen                                                                                                            | Art                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `INPUT[LocationType][inlineSelect:type]` | `INPUT[LandType][inlineListSuggester:subType]`(Land)<br>`INPUT[SettlementType][inlineListSuggester:subType]`(Ortschaft)<br>`INPUT[POIType][inlineListSuggester:subType]`(POI) | `INPUT[inlineListSuggester(optionQuery(#Location AND !"99 - Meta"), useLinks(partial)):location]` | `INPUT[number:population]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Character AND !"99 - Meta"), useLinks(partial)):dominion]` | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` | `INPUT[Goods][inlineListSuggester:import]` | `INPUT[Goods][inlineListSuggester:export]` | `INPUT[inlineListSuggester(optionQuery(#Organization OR #Language AND !"99 - Meta"), useLinks(partial)):languages]` | `INPUT[imageSuggester(class(input-image),optionQuery("")):art]` |

#### Überblick
Auf der südwestlichsten der großen Inseln im [[Splitterlande]] gelegen, ist Ojia umgeben von Dschungel und Hügeln. Ojia liegt an der Nord-Ost Küste der Insel [[Kahoprei]] und ist bekannt für seine Gewürze, welche im ganzen [[Xyraxisches Reich|Xyraxischen Reich]] beliebt sind und auch darüber hinaus. Neben den Gewürzen kommt auch der Großteil der exotisch und edlen Holzsorten des [[Xyraxisches Reich|Reiches]] von hier.

#### Regierung
Die Stadt wird im Auftrag der Regierung des Reiches vom Stadthalter [[Jel-Dar Teraf]] verwaltet.

## Sonstiges

> [!note|bg-c-blue]- Tabellen
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Unterlocation, type AS Typ, subType AS Sub-Typ, join(link(dominion),", ") AS Herrscher
> FROM !"99 - Meta"
> WHERE contains(location, this.file.link) AND contains(tags, "#Location")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Organisation, type AS Typ, join(link(ruler),", ") AS Oberhaupt
> FROM !"99 - Meta"
> WHERE contains(location, this.file.link) AND contains(tags, "#Organisation")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Person, join(link(occupation),", ") AS Beruf, join(link(organizations),", ") AS Organisationen
> FROM !"99 - Meta"
> WHERE contains(location, this.file.link) AND contains(tags, "#Character") AND !contains(condition, "Tot")
> SORT file.name ASC
> ```
> ``` dataview
> TABLE WITHOUT ID link(file.name) AS Quest, status AS Status
> FROM !"99 - Meta"
> WHERE contains(location, this.file.link) AND contains(tags, "#Story")
> SORT file.name ASC
> ```

## Demographics
### Random NPC: `dice: [[Ojia#^Spezies]]` / `dice: [[Ojia#^a83a2a]]`
### Table Betriebe

| Betriebe              | Anzahl | Gesamt Arbeiter | Ø Arbeiter Anzahl |
| --------------------- | ------ | --------------- | ----------------- |
| Arbeitslos            | -      | 1480            | -                 |
| Kinder                | -      | 1736            | -                 |
| Abenteuer Gilde       | 2      | 9               | 4,5               |
| Alchemist             | 2      | 6               | 3,0               |
| Altkleider Händler    | 29     | 63              | 2,2               |
| Badehaus              | 7      | 45              | 6,4               |
| Barber                | 35     | 113             | 3,2               |
| Bauernhöfe            | 200    | 3240            | 16,2              |
| Bierhändler           | 9      | 49              | 5,4               |
| Bleicher              | 5      | 54              | 10,8              |
| Buchbinder            | 5      | 16              | 3,2               |
| Buchhändler           | 2      | 11              | 5,5               |
| Buchmaler             | 3      | 3               | 1,0               |
| Bäcker                | 15     | 81              | 5,4               |
| Büchsenmacher         | 1      | 4               | 4,0               |
| Dachdecker            | 7      | 76              | 10,9              |
| Doktor (lizensiert)   | 7      | 7               | 1,0               |
| Doktor (unlizensiert) | 32     | 32              | 1,0               |
| Fischereien           | 144    | 1555            | 10,8              |
| Fischhändler          | 10     | 54              | 5,4               |
| Friedhof              | 17     | 17              | 1,0               |
| Gasthaus              | 7      | 60              | 8,6               |
| Gerber                | 6      | 65              | 10,8              |
| Gewürzhändler         | 9      | 49              | 5,4               |
| Grob-Schmied          | 8      | 52              | 6,5               |
| Handschuhmacher       | 5      | 16              | 3,2               |
| Heuhändler            | 5      | 27              | 5,4               |
| Holzfäller            | 7      | 76              | 10,9              |
| Holzhändler           | 5      | 43              | 8,6               |
| Holzschnitzer         | 6      | 6               | 1,0               |
| Hutmacher             | 13     | 42              | 3,2               |
| Hühner Schlachterei   | 11     | 59              | 5,4               |
| Juwelier              | 30     | 97              | 3,2               |
| Kartograph            | 2      | 6               | 3,0               |
| Kerzengießer          | 16     | 52              | 3,3               |
| Konditor              | 24     | 130             | 5,4               |
| Kurier                | 3      | 10              | 3,3               |
| Küfner                | 16     | 86              | 5,4               |
| Kürschner             | 45     | 146             | 3,2               |
| Magieladen            | 5      | 16              | 3,2               |
| Maler                 | 8      | 69              | 8,6               |
| Messerschmied         | 5      | 16              | 3,2               |
| Minen                 | 14     | 151             | 10,8              |
| Mühle                 | 38     | 82              | 2,2               |
| Rüstungs-Schmied      | 3      | 16              | 5,3               |
| Sattler               | 11     | 36              | 3,3               |
| Scheidenmacher        | 13     | 42              | 3,2               |
| Schlachterei          | 9      | 49              | 5,4               |
| Schlosser             | 6      | 19              | 3,2               |
| Schnallenmacher       | 8      | 26              | 3,3               |
| Schneider             | 48     | 156             | 3,3               |
| Schreiber             | 7      | 7               | 1,0               |
| Schuhmacher           | 73     | 237             | 3,2               |
| Seiler                | 25     | 81              | 3,2               |
| Seilmacher            | 6      | 32              | 5,3               |
| Skulpturenbildner     | 7      | 23              | 3,3               |
| Stadtwache            | 25     | 135             | 5,4               |
| Stall                 | 20     | 43              | 2,2               |
| Steinhauer            | 25     | 54              | 2,2               |
| Stoffhändler          | 18     | 97              | 5,4               |
| Stuckateur            | 9      | 49              | 5,4               |
| Taschenmacher         | 11     | 36              | 3,3               |
| Taverne               | 32     | 173             | 5,4               |
| Tempel                | 37     | 80              | 2,2               |
| Teppichmacher         | 6      | 32              | 5,3               |
| Transport             | 3      | 32              | 10,7              |
| Töpferei              | 14     | 60              | 4,3               |
| Verwaltung            | 11     | 24              | 2,2               |
| Waffen-Schmied        | 4      | 22              | 5,5               |
| Weber                 | 18     | 156             | 8,7               |
| Weinhändler           | 14     | 76              | 5,4               |
| Zaumzeugmacher        | 6      | 19              | 3,2               |
| Zimmerer              | 21     | 181             | 8,6               |
### Table Spezies

| Spezies      | Anzahl | Prozent der Bevölkerung |
|--------------|--------|-------------------------|
| Aarakocra    | 504    | 4,2%                    |
| Aasimar      | 53     | 0,4%                    |
| Air Genasi   | 201    | 1,7%                    |
| Ashborn      | 53     | 0,4%                    |
| Azureborn    | 79     | 0,7%                    |
| Bogborn      | 96     | 0,8%                    |
| Bugbear      | 44     | 0,4%                    |
| Centaur      | 79     | 0,7%                    |
| Cervan       | 96     | 0,8%                    |
| Changeling   | 62     | 0,5%                    |
| Cnidaran     | 53     | 0,4%                    |
| Corvum       | 114    | 1,0%                    |
| Dragonborn   | 548    | 4,6%                    |
| Dwarf        | 895    | 7,5%                    |
| Earth Genasi | 201    | 1,7%                    |
| Eladrin      | 287    | 2,4%                    |
| Elf          | 721    | 6,0%                    |
| Fairy        | 201    | 1,7%                    |
| Firbolg      | 105    | 0,9%                    |
| Fire Genasi  | 201    | 1,7%                    |
| Gallus       | 62     | 0,5%                    |
| Giff         | 62     | 0,5%                    |
| Gnome        | 895    | 7,5%                    |
| Goblin       | 96     | 0,8%                    |
| Goliath      | 253    | 2,1%                    |
| Halfling     | 895    | 7,5%                    |
| Haregon      | 166    | 1,4%                    |
| Harvestborn  | 44     | 0,4%                    |
| Hedge        | 131    | 1,1%                    |
| Hobgoblin    | 53     | 0,4%                    |
| Human        | 895    | 7,5%                    |
| Jerbeen      | 183    | 1,5%                    |
| Kalashtar    | 105    | 0,9%                    |
| Kenku        | 96     | 0,8%                    |
| Khoravar     | 88     | 0,7%                    |
| Kobold       | 44     | 0,4%                    |
| Leonin       | 149    | 1,2%                    |
| Lizardfolk   | 131    | 1,1%                    |
| Lotol        | 44     | 0,4%                    |
| Loxodon      | 131    | 1,1%                    |
| Mapach       | 131    | 1,1%                    |
| Minotaur     | 79     | 0,7%                    |
| Opteran      | 44     | 0,4%                    |
| Orc          | 374    | 3,1%                    |
| Owlin        | 131    | 1,1%                    |
| Plagueborn   | 201    | 1,7%                    |
| Relicborn    | 44     | 0,4%                    |
| Satyr        | 166    | 1,4%                    |
| Sea Elf      | 79     | 0,7%                    |
| Shadar-kai   | 79     | 0,7%                    |
| Shifter      | 79     | 0,7%                    |
| Silkborn     | 79     | 0,7%                    |
| Tabaxi       | 418    | 3,5%                    |
| Threadborn   | 36     | 0,3%                    |
| Tiefling     | 114    | 1,0%                    |
| Tortle       | 114    | 1,0%                    |
| Triton       | 96     | 0,8%                    |
| Vedalken     | 79     | 0,7%                    |
| Vulpin       | 131    | 1,1%                    |
| Walrossfolk  | 62     | 0,5%                    |
| Warforged    | 131    | 1,1%                    |
| Water Genasi | 201    | 1,7%                    |
| Yuan-ti      | 36     | 0,3%                    |
### Table Random Betrieb

| dice: 1d12000 | Betrieb               |
| ------------- | --------------------- |
| 1-1480        | Arbeitslos            |
| 1481-3216     | Kinder                |
| 3217-3225     | Abenteuer Gilde       |
| 3226-3231     | Alchemist             |
| 3232-3294     | Altkleider Händler    |
| 3295-3339     | Badehaus              |
| 3340-3452     | Barber                |
| 3453-6692     | Bauernhöfe            |
| 6693-6741     | Bierhändler           |
| 6742-6795     | Bleicher              |
| 6796-6811     | Buchbinder            |
| 6812-6822     | Buchhändler           |
| 6823-6825     | Buchmaler             |
| 6826-6906     | Bäcker                |
| 6907-6910     | Büchsenmacher         |
| 6911-6986     | Dachdecker            |
| 6987-6993     | Doktor (lizensiert)   |
| 6994-7025     | Doktor (unlizensiert) |
| 7026-8580     | Fischereien           |
| 8581-8634     | Fischhändler          |
| 8635-8651     | Friedhof              |
| 8652-8711     | Gasthaus              |
| 8712-8776     | Gerber                |
| 8777-8825     | Gewürzhändler         |
| 8826-8877     | Grob-Schmied          |
| 8878-8893     | Handschuhmacher       |
| 8894-8920     | Heuhändler            |
| 8921-8996     | Holzfäller            |
| 8997-9039     | Holzhändler           |
| 9040-9045     | Holzschnitzer         |
| 9046-9087     | Hutmacher             |
| 9088-9146     | Hühner Schlachterei   |
| 9147-9243     | Juwelier              |
| 9244-9249     | Kartograph            |
| 9250-9301     | Kerzengießer          |
| 9302-9431     | Konditor              |
| 9432-9441     | Kurier                |
| 9442-9527     | Küfner                |
| 9528-9673     | Kürschner             |
| 9674-9689     | Magieladen            |
| 9690-9758     | Maler                 |
| 9759-9774     | Messerschmied         |
| 9775-9925     | Minen                 |
| 9926-10007    | Mühle                 |
| 10008-10023   | Rüstungs-Schmied      |
| 10024-10059   | Sattler               |
| 10060-10101   | Scheidenmacher        |
| 10102-10150   | Schlachterei          |
| 10151-10169   | Schlosser             |
| 10170-10195   | Schnallenmacher       |
| 10196-10351   | Schneider             |
| 10352-10358   | Schreiber             |
| 10359-10595   | Schuhmacher           |
| 10596-10676   | Seiler                |
| 10677-10708   | Seilmacher            |
| 10709-10731   | Skulpturenbildner     |
| 10732-10866   | Stadtwache            |
| 10867-10909   | Stall                 |
| 10910-10963   | Steinhauer            |
| 10964-11060   | Stoffhändler          |
| 11061-11109   | Stuckateur            |
| 11110-11145   | Taschenmacher         |
| 11146-11318   | Taverne               |
| 11319-11398   | Tempel                |
| 11399-11430   | Teppichmacher         |
| 11431-11462   | Transport             |
| 11463-11522   | Töpferei              |
| 11523-11546   | Verwaltung            |
| 11547-11568   | Waffen-Schmied        |
| 11569-11724   | Weber                 |
| 11725-11800   | Weinhändler           |
| 11801-11819   | Zaumzeugmacher        |
| 11820-12000   | Zimmerer              |

^a83a2a

### Table Random Spezies

| dice: 1d10024 | Spezies      |
| ------------- | ------------ |
| 1-420         | Aarakocra    |
| 421-464       | Aasimar      |
| 465-632       | Air Genasi   |
| 633-676       | Ashborn      |
| 677-742       | Azureborn    |
| 743-822       | Bogborn      |
| 823-859       | Bugbear      |
| 860-925       | Centaur      |
| 926-1005      | Cervan       |
| 1006-1057     | Changeling   |
| 1058-1101     | Cnidaran     |
| 1102-1196     | Corvum       |
| 1197-1653     | Dragonborn   |
| 1654-2399     | Dwarf        |
| 2400-2567     | Earth Genasi |
| 2568-2806     | Eladrin      |
| 2807-3407     | Elf          |
| 3408-3575     | Fairy        |
| 3576-3663     | Firbolg      |
| 3664-3831     | Fire Genasi  |
| 3832-3883     | Gallus       |
| 3884-3935     | Giff         |
| 3936-4681     | Gnome        |
| 4682-4761     | Goblin       |
| 4762-4972     | Goliath      |
| 4973-5718     | Halfling     |
| 5719-5856     | Haregon      |
| 5857-5893     | Harvestborn  |
| 5894-6002     | Hedge        |
| 6003-6046     | Hobgoblin    |
| 6047-6792     | Human        |
| 6793-6945     | Jerbeen      |
| 6946-7033     | Kalashtar    |
| 7034-7113     | Kenku        |
| 7114-7186     | Khoravar     |
| 7187-7223     | Kobold       |
| 7224-7347     | Leonin       |
| 7348-7456     | Lizardfolk   |
| 7457-7493     | Lotol        |
| 7494-7602     | Loxodon      |
| 7603-7711     | Mapach       |
| 7712-7777     | Minotaur     |
| 7778-7814     | Opteran      |
| 7815-8126     | Orc          |
| 8127-8235     | Owlin        |
| 8236-8403     | Plagueborn   |
| 8404-8440     | Relicborn    |
| 8441-8578     | Satyr        |
| 8579-8644     | Sea Elf      |
| 8645-8710     | Shadar-kai   |
| 8711-8776     | Shifter      |
| 8777-8842     | Silkborn     |
| 8843-9190     | Tabaxi       |
| 9191-9220     | Threadborn   |
| 9221-9315     | Tiefling     |
| 9316-9410     | Tortle       |
| 9411-9490     | Triton       |
| 9491-9556     | Vedalken     |
| 9557-9665     | Vulpin       |
| 9666-9717     | Walrossfolk  |
| 9718-9826     | Warforged    |
| 9827-9994     | Water Genasi |
| 9995-10024    | Yuan-ti      |
^Spezies