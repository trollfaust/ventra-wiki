
## NPC Generator
```meta-bind-button
label: Reroll Dice
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: command
    command: obsidian-dice-roller:reroll

```

|                   |     |                                    |     |                  |     |                                    |
| ----------------: | --: | ---------------------------------- | --- | ---------------: | --: | ---------------------------------- |
| **NPC Race, Age** |     | `dice: [[NPC Generator^npcrace]]`  |     | **PC Race, Age** |     | `dice: [[NPC Generator^race]]`     |
|          **Hair** |     | `dice: [[NPC Generator^hairfeat]]` |     |         **Hair** |     | `dice: [[NPC Generator^hairfeat]]` |
|          **Eyes** |     | `dice: [[NPC Generator^eyecolor]]` |     |         **Eyes** |     | `dice: [[NPC Generator^eyecolor]]` |
|         **Looks** |     | `dice: [[NPC Generator^looks]]`    |     |        **Looks** |     | `dice: [[NPC Generator^looks]]`    |
|        **Detail** |     | `dice: [[NPC Generator^details]]`  |     |       **Detail** |     | `dice: [[NPC Generator^details]]`  |
|    **Profession** |     | `dice: [[NPC Generator^prof]]`     |     |    **Alignment** |     | `dice: [[NPC Generator^align]]`    |
|     **Alignment** |     | `dice: [[NPC Generator^align]]`    |     |                  |     |                                    |
#### ⠀
##### NPC Race/Age

| dice:1d17 | NPC Race/Age                                            |
| --------- | ------------------------------------------------------- |
| 1         | Gray Dwarf, `dice:2d20+250`                             |
| 2         | Hill Dwarf, `dice:5d4+40`                               |
| 3         | Mountain Dwarf, `dice:3d6+75`                           |
| 4         | Valley Dwarf, `dice:2d20+250`                           |
| 5         | Gray Elf, `dice:10d10+500`                              |
| 6         | High Elf, `dice:5d6+130`                                |
| 7         | Moon Elf, `dice:5d6+150`                                |
| 8         | Wild Elf, `dice:5d6+150`                                |
| 9         | Wood Elf, `dice:5d6+150`                                |
| 10        | Deep Gnome, `dice:3d12+300`                             |
| 11        | Surface Gnome, `dice:2d12+100`                          |
| 12        | Hair Foot Halfling, `dice:3d6+24`                       |
| 13        | Stout Halfling, `dice:3d6+24`                           |
| 14        | Tall Fellow Halfling, `dice:3d6+24`                     |
| 15        | Half-Elf (`dice: [[NPC Generator^elf]]`), `dice:2d4+40` |
| 16        | Half-Orc, `dice:2d6+20`                                 |
| 17        | Human, `dice:2d10+20`                                   |
^npcrace

##### Party Race

| dice:1d7 | Race                                                                             |
| -------- | -------------------------------------------------------------------------------- |
| 1        | `dice: [[NPC Generator^dwarf]]`, `dice: [[NPC Generator^dwarfclass]]`            |
| 2        | `dice: [[NPC Generator^elf]]`, `dice: [[NPC Generator^elfclass]]`                |
| 3        | `dice: [[NPC Generator^gnome]]`, `dice: [[NPC Generator^gnomeclass]]`            |
| 4        | Half-Elf (`dice: [[NPC Generator^elf]]`), `dice: [[NPC Generator^halfelfclass]]` |
| 5        | Half-Orc, `dice: [[NPC Generator^halforcclass]]`                                 |
| 6        | `dice: [[NPC Generator^halfling]]`, `dice: [[NPC Generator^halflingclass]]`      |
| 7        | Human, `dice: [[NPC Generator^humanclass]]`                                      |
^race

###### Dwarf

| dice:1d4 | Dwarf          |
| -------- | -------------- |
| 1        | Gray Dwarf     |
| 2        | Hill Dwarf     |
| 3        | Mountain Dwarf |
| 4        | Valley Dwarf   |
^dwarf

###### Elf

| dice:1d5 | Elf      |
| -------- | -------- |
| 1        | Gray Elf |
| 2        | High Elf |
| 3        | Moon Elf |
| 4        | Wild Elf |
| 5        | Wood Elf |
^elf

###### Gnome

| dice:1d2 | Gnome         |
| -------- | ------------- |
| 1        | Deep Gnome    |
| 2        | Surface Gnome |
^gnome

###### Halfling
| dice:1d3 | Halfling             |
| -------- | -------------------- |
| 1        | Hair Foot Halfling   |
| 2        | Stout Halfling       |
| 3        | Tall Fellow Halfling |
^halfling

##### Class/Age
###### Dwarf Class/Age

| dice:1d5 | Dwarf Class/Age              |
| -------- | ---------------------------- |
| 1        | Cleric, `dice:2d20+250`      |
| 2        | Fighter, `dice:5d4+40`       |
| 3        | Thief, `dice:3d6+75`         |
| 4        | Geomancer, `dice:2d20+250`   |
| 5        | Fighter/Thief, `dice:3d6+75` |
^dwarfclass

###### Elf Class/Age

| dice:1d13 | Elf Class/Age                      |
| --------- | ---------------------------------- |
| 1         | Cleric, `dice:10d10+500`           |
| 2         | Druid, `dice:10d10+500`            |
| 3         | Fighter, `dice:5d6+130`            |
| 4         | Ranger, `dice:5d6+130`             |
| 5         | Knight, `dice:5d6+130`             |
| 6         | Mage, `dice:5d6+150`               |
| 7         | Templar, `dice:5d6+150`            |
| 8         | Thief, `dice:5d6+100`              |
| 9         | Bard, `dice:5d6+130`               |
| 10        | Fighter/Mage, `dice:5d6+150`       |
| 11        | Fighter/Thief, `dice:5d6+150`      |
| 12        | Fighter/Mage/Thief, `dice:5d6+150` |
| 13        | Mage/Thief, `dice:5d6+150`         |
^elfclass

###### Gnome Class/Age

| dice:1d9 | Gnome Class/Age                      |
| -------- | ------------------------------------ |
| 1        | Cleric, `dice:3d12+300`              |
| 2        | Geomancer, `dice:3d12+300`           |
| 3        | Fighter, `dice:5d4+60`               |
| 4        | Illusionist, `dice:2d12+100`         |
| 5        | Templar, `dice:2d12+100`             |
| 6        | Thief, `dice:5d4+80`                 |
| 7        | Fighter/Illusionist, `dice:2d12+100` |
| 8        | Fighter/Thief, `dice:2d12+100`       |
| 9        | Illusionist/Thief, `dice:2d12+100`   |
^gnomeclass

###### Half-Elf Class/Age

| dice:1d17 | Half-Elf Class/Age                 |
| --------- | ---------------------------------- |
| 1         | Cleric, `dice:2d4+40`              |
| 2         | Druid, `dice:2d4+40`               |
| 3         | Fighter, `dice:3d4+22`             |
| 4         | Ranger, `dice:3d4+22`              |
| 5         | Knight, `dice:3d4+22`              |
| 6         | Mage, `dice:2d8+30`                |
| 7         | Templar, `dice:2d8+30`             |
| 8         | Bard, `dice:2d4+20`                |
| 9         | Thief, `dice:3d8+22`               |
| 10        | Cleric/Fighter, `dice:2d4+40`      |
| 11        | Cleric/Fighter/Mage, `dice:2d4+40` |
| 12        | Cleric/Ranger, `dice:2d4+40`       |
| 13        | Cleric/Mage, `dice:2d4+40`         |
| 14        | Fighter/ Mage, `dice:2d4+40`       |
| 15        | Fighter/Thief, `dice:2d4+40`       |
| 16        | Fighter/Mage/Thief, `dice:2d4+40`  |
| 17        | Mage /Thief, `dice:2d4+40`         |
^halfelfclass

###### Halfling Class/Age

| dice:1d6 | Halfling Class/Age           |
| -------- | ---------------------------- |
| 1        | Cleric, `dice:3d6+24`        |
| 2        | Templar, `dice:3d6+24`       |
| 3        | Fighter, `dice:3d4+20`       |
| 4        | Thief, `dice:2d4+40`         |
| 5        | Bard, `dice:3d6+24`          |
| 6        | Fighter/Thief, `dice:3d6+24` |
^halflingclass

###### Half-Orc Class/Age

| dice:1d7 | Half-Orc Class/Age            |
| -------- | ----------------------------- |
| 1        | Cleric, `dice:1d4+20`         |
| 2        | Fighter, `dice:1d6+13`        |
| 3        | Templar, `dice:2d6+20`        |
| 4        | Thief, `dice:2d4+20`          |
| 5        | Fighter/Thief, `dice:2d4+20`  |
| 6        | Cleric/Fighter, `dice:2d4+20` |
| 7        | Cleric/Thief, `dice:2d4+20`   |
^halforcclass

###### Human Class/Age

| dice:1d13 | Human Class/Age            |
| --------- | -------------------------- |
| 1         | Cleric, `dice:1d4+18`      |
| 2         | Druid, `dice:1d4+18`       |
| 3         | Geomancer, `dice:1d4+18`   |
| 4         | Fighter, `dice:1d6+15`     |
| 5         | Paladin, `dice:1d6+15`     |
| 6         | Ranger, `dice:1d6+15`      |
| 7         | Knight, `dice:1d6+15`      |
| 8         | Mage, `dice:2d8+24`        |
| 9         | Illusionist, `dice:2d8+24` |
| 10        | Templar, `dice:2d8+24`     |
| 11        | Monk, `dice:1d4+20`        |
| 12        | Thief, `dice:1d4+18`       |
| 13        | Bard, `dice:2d8+24`        |
^humanclass



##### Alignment

| dice:1d9 |                 |
| -------- | --------------- |
| 1        | Lawful Good     |
| 2        | Neutral Good    |
| 3        | Chaotic Good    |
| 4        | Lawful Neutral  |
| 5        | True Neutral    |
| 6        | Chaotic Neutral |
| 7        | Lawful Evil     |
| 8        | Neutral Evil    |
| 9        | Chaotic Evil    |
^align



##### Hair
###### Hair Feature

| dice:1d12 | Hair Feature                                         |
| --------- | ---------------------------------------------------- |
| 1         | `dice: [[NPC Generator^haircolor]]` - Dyed           |
| 2         | `dice: [[NPC Generator^haircolor]]` - Bangs          |
| 3         | `dice: [[NPC Generator^haircolor]]` - Greying        |
| 4         | `dice: [[NPC Generator^haircolor]]` - Balding/Patchy |
| 5         | `dice: [[NPC Generator^haircolor]]` - Damaged        |
| 6         | `dice: [[NPC Generator^haircolor]]` - Thinning       |
| 7         | `dice: [[NPC Generator^haircolor]]` - Pulled back    |
| 8         | `dice: [[NPC Generator^haircolor]]` - Unkempt        |
| 9         | `dice: [[NPC Generator^haircolor]]` - Styled         |
| 10        | `dice: [[NPC Generator^haircolor]]` - Partly Shaven  |
| 11        | `dice: [[NPC Generator^haircolor]]` - Uneven         |
| 12        | `dice: [[NPC Generator^haircolor]]` - Wig            |
^hairfeat

###### Hair Color

| dice:1d12 | Hair Color                                          |
| --------- | --------------------------------------------------- |
| 1         | `dice: [[NPC Generator^hairlength]]` Black          |
| 2         | `dice: [[NPC Generator^hairlength]]` Dark Brown     |
| 3         | `dice: [[NPC Generator^hairlength]]` Chestnut Brown |
| 4         | `dice: [[NPC Generator^hairlength]]` Light Brown    |
| 5         | `dice: [[NPC Generator^hairlength]]` Auburn         |
| 6         | `dice: [[NPC Generator^hairlength]]` Ginger         |
| 7         | `dice: [[NPC Generator^hairlength]]` Dark Blonde    |
| 8         | `dice: [[NPC Generator^hairlength]]` Golden Blonde  |
| 9         | `dice: [[NPC Generator^hairlength]]` Flaxen         |
| 10        | `dice: [[NPC Generator^hairlength]]` Gray           |
| 11        | `dice: [[NPC Generator^hairlength]]` Salt & Pepper  |
| 12        | `dice: [[NPC Generator^hairlength]]` White          |
^haircolor

###### Hair Type

| dice:1d12 | Hair Type |
| --------- | --------- |
| 1         | Thick     |
| 2         | Curly     |
| 3         | Fine      |
| 4         | Straight  |
| 5         | Full      |
| 6         | Glossy    |
| 7         | Dull      |
| 8         | Frizzy    |
| 9         | Silky     |
| 10        | Wavy      |
| 11        | Bouncy    |
| 12        | Flat      |
^hairtype

###### Hair Length

| dice:1d10 | Hair Length                                         |
| --------- | --------------------------------------------------- |
| 1         | Very Short, `dice: [[NPC Generator^hairtype]]`      |
| 2         | Short, `dice: [[NPC Generator^hairtype]]`           |
| 3         | Shoulder Length, `dice: [[NPC Generator^hairtype]]` |
| 4         | Mid-back, `dice: [[NPC Generator^hairtype]]`        |
| 5         | Hip Length, `dice: [[NPC Generator^hairtype]]`      |
| 6         | Pulled Back, `dice: [[NPC Generator^hairtype]]`     |
| 7         | Braided, `dice: [[NPC Generator^hairtype]]`         |
| 8         | Pulled Up, `dice: [[NPC Generator^hairtype]]`       |
| 9         | Shaved, `dice: [[NPC Generator^hairtype]]`          |
| 10        | Thigh-length, `dice: [[NPC Generator^hairtype]]`    |
^hairlength

##### Eyes

| dice:1d10 | Eye Color      |
| --------- | -------------- |
| 1         | Dark Brown     |
| 2         | Chestnut Brown |
| 3         | Light Brown    |
| 4         | Hazel          |
| 5         | Blue-Gray      |
| 6         | Blue-green     |
| 7         | Green          |
| 8         | Amber          |
| 9         | Black          |
| 10        | Red            |
| 11        | Pale Pink      |
| 12        | Silver         |
| 13        | Lavender       |
| 14        | Vivid Green    |
| 15        | Golden Yellow  |
| 16        | Gold           |
| 17        | Cyan           |
^eyecolor



##### Looks

| dice:1d12 | Looks              |
| --------- | ------------------ |
| 1         | Multiple Piercings |
| 2         | Heterochromia      |
| 3         | Tattoos            |
| 4         | Birthmark          |
| 5         | Freckles           |
| 6         | Dimples            |
| 7         | Scars              |
| 8         | Burn mark          |
| 9         | Callouses          |
| 10        | Painted Nails      |
| 11        | Heavy Makeup       |
| 12        | Light Makeup       |
^looks

##### Additional Details

| dice:1d20 | Details                 |
| --------- | ----------------------- |
| 1         | Smoking                 |
| 2         | Loud voice              |
| 3         | Playing with hair       |
| 4         | Excessive drinking      |
| 5         | Has an accent           |
| 6         | Vision problems         |
| 7         | Lip biting              |
| 8         | Gambling addiction      |
| 9         | Tendency to cheat       |
| 10        | Has a stutter           |
| 11        | Knuckle cracking        |
| 12        | Tendency to lie         |
| 13        | Nail biting             |
| 14        | Excessive swearing      |
| 15        | A sweet tooth           |
| 16        | Difficulty with hearing |
| 17        | Likes to eat            |
| 18        | Sings/whistles          |
| 19        | Uses third person       |
| 20        | Soft voice              |
^details

##### Profession

| dice:1d10000  | **Profession**       |
| ------------- | -------------------- |
| 1-1660    | Beggars              |
| 1661-2821 | Housewife (husband)  |
| 2822-3982 | Laborers             |
| 3983-4949 | Elderly/Infirm       |
| 4950-5280 | Servers (tavern/inn) |
| 5281-5512 | Guards (private)     |
| 5513-5744 | Clergy members       |
| 5745-5937 | Peddlers             |
| 5938-6130 | Porters              |
| 6131-6295 | Apprentices          |
| 6296-6423 | Domestic Servant     |
| 6424-6538 | Guards (city)        |
| 6539-6653 | Journymen            |
| 6654-6768 | Mercenaries          |
| 6769-6883 | Sailors              |
| 6884-6998 | Students             |
| 6999-7113 | Thieves              |
| 7114-7210 | Cobblers             |
| 7211-7307 | Furniture Maker      |
| 7308-7400 | Clothiers, Used      |
| 7401-7493 | Grocers              |
| 7494-7586 | Warehousers          |
| 7587-7664 | Officials            |
| 7665-7737 | Dairy sellers        |
| 7738-7810 | Furriers             |
| 7811-7883 | Launderers           |
| 7884-7956 | Prostitutes          |
| 7957-8023 | Bricklayers          |
| 8024-8081 | Livestock merchant   |
| 8082-8139 | Slaves               |
| 8140-8197 | Tailors              |
| 8198-8255 | Weavers              |
| 8256-8307 | Pages                |
| 8308-8354 | Barbers              |
| 8355-8401 | Basket Makers        |
| 8402-8448 | Carpenters           |
| 8449-8495 | Drapers              |
| 8496-8542 | Flowersellers        |
| 8543-8589 | Guides/touts         |
| 8590-8636 | Parchmentmakers      |
| 8637-8683 | Potters              |
| 8684-8730 | Tavern Keepers       |
| 8731-8772 | Wheelwrights         |
| 8773-8811 | Jewelers             |
| 8812-8844 | Caravaner            |
| 8845-8877 | Masons               |
| 8878-8910 | Bakers               |
| 8911-8939 | Soapmakers           |
| 8940-8965 | Cooks                |
| 8966-8988 | Chandlers            |
| 8989-9011 | Rat Catchers         |
| 9012-9034 | Traveler             |
| 9035-9057 | Watercarriers        |
| 9058-9079 | Coopers              |
| 9080-9101 | Mercers              |
| 9102-9122 | Pastry Makers        |
| 9123-9143 | Engravers            |
| 9144-9164 | Pawnbroker           |
| 9165-9183 | Grooms               |
| 9184-9202 | Midwives             |
| 9203-9221 | Haberdashers         |
| 9222-9240 | Wine Merchants       |
| 9241-9257 | Scabbard Makers      |
| 9258-9274 | Silversmiths         |
| 9275-9290 | Tinkers              |
| 9291-9305 | Butchers             |
| 9306-9320 | Doctors, Unlicensed  |
| 9321-9335 | Fishmongers          |
| 9336-9350 | Saddler/Spurrier     |
| 9351-9364 | Purse Makers         |
| 9365-9377 | Blacksmiths          |
| 9378-9390 | Goldsmiths           |
| 9391-9403 | Toymakers            |
| 9404-9416 | Wool Merchants       |
| 9417-9428 | Artists              |
| 9429-9440 | Beer Merchants       |
| 9441-9452 | Fishers              |
| 9453-9464 | Herbalists           |
| 9465-9476 | Leatherworkers       |
| 9477-9488 | Nannies, Governess   |
| 9489-9500 | Plasterers           |
| 9501-9512 | Spice Merchants      |
| 9513-9523 | Rope Makers          |
| 9524-9534 | Tanners              |
| 9535-9544 | Buckle Makers        |
| 9545-9554 | Cutlers              |
| 9555-9564 | Fullers              |
| 9565-9574 | Glaziers             |
| 9575-9584 | Harness Makers       |
| 9585-9594 | Painters             |
| 9595-9604 | Roofers              |
| 9605-9613 | Woodcarvers          |
| 9614-9622 | Woodsellers          |
| 9623-9631 | Inn Keepers          |
| 9632-9640 | Doctors, Licensed    |
| 9641-9648 | Mendicants           |
| 9649-9656 | Bathers              |
| 9657-9664 | Brothel Keepers      |
| 9665-9672 | Copyists             |
| 9673-9680 | Glass Makers         |
| 9681-9688 | Hay Merchants        |
| 9689-9696 | Instrument Makers    |
| 9697-9704 | Locksmiths           |
| 9705-9712 | Millers              |
| 9713-9720 | Rug Makers           |
| 9721-9728 | Sculptors            |
| 9729-9736 | Storytellers         |
| 9737-9743 | Acrobats, Tumblers   |
| 9744-9750 | Jesters              |
| 9751-9757 | Jongleurs            |
| 9758-9764 | Minstrels            |
| 9765-9771 | Teachers             |
| 9772-9778 | Bleachers            |
| 9779-9785 | Shipmakers           |
| 9786-9791 | Bookbinders          |
| 9792-9797 | Moneychangers        |
| 9798-9803 | Bowyer/Fletchers     |
| 9804-9809 | Brewers              |
| 9810-9815 | Glove Makers         |
| 9816-9821 | Vintner              |
| 9822-9827 | Booksellers          |
| 9828-9833 | Gardeners            |
| 9834-9839 | Girdlers             |
| 9840-9845 | Religious sellers    |
| 9846-9851 | Sage/scholar         |
| 9852-9857 | Skinners             |
| 9858-9863 | Wetnurses            |
| 9864-9869 | Armorers             |
| 9870-9875 | Weaponsmiths         |
| 9876-9880 | Advocates (lawyers)  |
| 9881-9885 | Distillers           |
| 9886-9890 | Historians           |
| 9891-9895 | Illuminators         |
| 9896-9900 | Judges               |
| 9901-9905 | Librarians           |
| 9906-9910 | Perfumer             |
| 9911-9915 | Tilers               |
| 9916-9919 | Dentists             |
| 9920-9923 | Engineers            |
| 9924-9927 | Naval Outfitters     |
| 9928-9931 | Potionmakers         |
| 9932-9935 | Satirists            |
| 9936-9939 | Undertakers          |
| 9940-9943 | Writers              |
| 9944-9946 | Professors           |
| 9947-9949 | Restaurantiers       |
| 9950-9952 | Architects           |
| 9953-9955 | Astrologers          |
| 9956-9958 | Clock Makers         |
| 9959-9961 | Grain Merchants      |
| 9962-9964 | Navigator/Pathfinder |
| 9965-9967 | Tax Collectors       |
| 9968-9970 | Taxidermists         |
| 9971-9973 | Tobacco merchants    |
| 9974-9976 | Vestment Makers      |
| 9977-9979 | Alchemists           |
| 9980-9982 | Bankers              |
| 9983-9985 | Diplomats            |
| 9986-9988 | Slavers              |
| 9989-9991 | Town Criers          |
| 9992-9993 | Bellmakers           |
| 9994-9995 | Cartographers        |
| 9996-9997 | Dye Makers           |
| 9998-9999 | Inventors            |
| 10000     | Magic Merchants      |
^prof