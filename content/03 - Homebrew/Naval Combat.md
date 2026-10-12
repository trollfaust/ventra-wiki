---
tags:
  - "#Homebrew"
aliases:
---
# `=this.file.name`

> [!recite]+ Kurzbeschreibung
> Seekampf Regeln mit Schiffen.

## Infos
Tag: `INPUT[Tags][inlineListSuggester:tags]`

#TODO Drüber schauen und evtl. minimal anpassen

## Theatres of Warfare
Battles in VoidSea take place in one of two theatres: the Naval Theatre, where the primary way to inflict damage is using the long range of artillery; and the Boarding Theatre, where individual creatures can invade enemy vessels and capture, rather than destroy, enemy ships. In the Naval Theatre, each grid space typically represents 30 feet. In the Boarding Theatre, which is the same as the one commonly used in 5e combat, each grid space is 5 feet. Ships in VoidSea are typically around 90 feet long and 30 feet wide. This means that, in the Naval Theatre, they occupy a 1x3 grid spaces. If in doubt, round to the nearest multiple of 30 when using the Naval Theatre (minimum of 1 grid space).

##### Deck Layout. 
Every ship used in this book has a Deck Layout, an annotated diagram that shows the shape and elevation of each deck, the installation locations for different types of components, and the arcs of fire of Artillery installation locations. Deck Layouts are set to a grid showing both the 5-foot grid used in the Boarding Theatre and the 30-foot grid used in the Naval Theatre (see Fig. 1, next page). This allows the location of components to be attributed to the correct grid space in both theatres of combat. More on deck layouts can be found on page 24.
### Dual Map System
Battles on the Voidsea typically use both a Naval Theatre and Boarding Theatre map concurrently. The Naval Theatre tracks the relative position of ships to one another, as well as to ocean hazards. The Boarding Theatre tracks the location of creatures and components on a ship’s Deck Layout, allowing for accurate assessment of which creatures and components might be within the area of a wizard’s Fireball or a cannon’s Explosive Cannonball. Boarding. Once boarding occurs, it is typical to cease using the Naval Theatre unless there are other ships, kaiju, or hazards still at play.

#### Areas of Effect
Areas of effect (AoEs) are typically created by one of two methods: they magically or spontaneously appear (such as the Spike Growth or Hypnotic Pattern spells) or they are created by a projectile (like a Plaguegas Cannonball or the Fireball spell, which specifies that “a bright streak flashes from your pointing finger to a point you choose”). AoEs can also be instantaneous (like Hypnotic Pattern or the Fireball spell) or have an ongoing effect (like the Spike Growth spell or Plaguegas Cannonball). When choosing the point on which an AoE is centred, use the Boarding Theatre. Remember, components automatically succeed on saving throws against AoEs if the area does not cover all the spaces the component occupies (see page 18 for more on component saving throws).

##### Ongoing Effects. 
Although ships move relative to the world around them, ongoing effects that are created centred on a point connected to the ship remain fixed to that point even as the ship cuts through the waves. If you create a Cloud of Daggers centred on the Helmsman’s Control component, the cloud remains there until the spell ends. If you find yourself in a bizarre situation where the Control component ups and moves, then defer to your GM; those are shenanigans we’re not covering here.

##### Artillery & AoEs. 
Spells, magical effects, and areas created by physical projectiles are always assumed to occur exactly where their creator chooses. Let’s take an Exploding Cannonball as an example. It’s a cannonball, so whatever it hits, it damages. In addition, it’s ‘exploding’, so wherever it impacts, it explodes. To use an Exploding Cannonball, you make a regular ball shot attack with a magitech cannon against a target, typically a ship’s component. If the component is bigger than a single 5-foot-by5-foot space, you can choose which of the component’s spaces you target in the Boarding Theatre.
- Hit: On a hit, you deal the attack’s damage to the targeted component, and the AoE is created centred on the space you targeted. For the purpose of overcoming a Damage Threshold (DT), the damage from the AoE is added to the damage of the attack itself. 
- Miss: On a miss, you don’t deal the attack’s damage to the component, and the AoE occurs centred on the space you targeted.

## Initiative & Phases
In VoidSea Initiative, a single round of combat consists of two phases; the Ship Phase followed by the Creature Phase. Like normal Initiative, each round lasts approximately 6 seconds.

### Rolling Initiative & Turn Order
This section describes how initiative is rolled and turn order established in the Ship and Creature Phases.

### Ship Phase
The Ship Phase is a new phase added to Initiative in VoidSea that occurs before the Creature Phase. A ship's turn in this phase is comprised of four steps: 
1. Command Step 
2. Helm Step 
3. Artillery Step 
4. Miscellaneous Step

##### Rolling Initiative
To determine the order of the ships’ Initiative, roll a d20 for each ship and add the Captain’s Charisma modifier (minimum 0), the Helmsman’s Wisdom modifier (minimuym 0), and the ship’s Dexterity modifier. If the ship has no Captain or Helmsman when Initiative is rolled, no Charisma or Wisdom modifier is added to the ship’s Initiative, respectively (minimum of 0).

##### Turn Order
The first ship in the ship Initiative order takes its turn, performing its Command, Helm, Artillery, and Miscellaneous Steps in that order. During each Step of the Ship Phase, a ship can take the action(s) associated with that Step, provided the requisite crew takes Ship Actions to man those components (see page 14). Once the ship’s crew has decided it wishes to take no more actions in that Step, the next Step begins. After a ship finishes its Miscellaneous Step, the next ship in the Initiative order takes its turn, beginning with its Command Step. Once all ships have acted, the Ship Phase ends, and the Creature Phase begins.

### Creature Phase
The Creature Phase is the same as the Initiative system you might be used to if you’ve played regular 5e.

##### Rolling Initiative
Each creature makes a Dexterity check to determine its Initiative score. The creature with the highest Initiative score takes its turn first, followed by the next highest, and so on. If two or more creatures are tied, the GM decides the order among tied GM-controlled creatures, and the players decide the order among their tied characters. If GM-controlled creatures tier with player characters, the GM decides who goes first in Initiative. 

##### Turn Order
Once the last creature or environmental effect in the Initiative order has acted, the Creature Phase ends, the round ends, and the next round’s Ship Phase begins.

### Irregularities
##### Legendary Actions
Like normal, creatures with Legendary Actions can take a legendary action at the end of another creature’s turn in the Creature Phase. In VoidSea, creatures can also take legendary actions after a ship’s turn finishes in the Ship Phase, but before the next ship’s turn starts

##### Ship-sized Monsters
Some colossi of the sea are so big that they count as ships for the purpose of initiative. They can be identified by the word ‘kaiju’ in parentheses after their creature type. They have specific actions they can take during each Step of the Ship Phase, as listed in the Naval Actions section of their statistics, instead of Legendary Actions. When calculating a ship-sized monster’s initiative, roll initiative for both the Ship Phase (adding its Dexterity, Wisdom, and Charisma modifiers) and the Creature Phase (adding only its Dexterity modifier).

## Steps of the Ship Phase
During the Ship Phase, the Captain gives encouragement, the Helmsman guides the ship’s movement, and the crew causes the ship’s components to perform actions. There are some exceptions to the following rules for perks, features, and components; as usual, those specific rules override these general ones.

##### Ship Action
A creature that isn't Incapacitated act the start of its Ship Phase can act once during that phase by taking a Ship Action. However, a creature that does so can’t move or take an action, a Bonus Action, or use its Object Interaction during its turn in the Creature Phase. A creature that can take either an action or Bonus Action on its turn but not both must roll a d20 at the start of its Ship Phase. On an 11+ it can take a Ship Action as normal, while on a 10- it can't take a Ship Action this phase, but can do so on the next Ship Phase without rolling the d20.

##### Reactions
A creature regains its Reaction as normal at the start of its turn in the Creature Phase.

### 1. Command Step
During this, the first Step of the Ship Phase, any creature with points in the Captaincy perk tree can take a Ship Action. These typically augment the actions of other crew members, such as adding a bonus to checks, increasing an Artillerist's accuracy, or giving a creature the ability to move even if it takes a Ship Action. A creature can only benefit once from a Ship Action of the same name within a round.

### 2. Helm Step
The second Step in the Ship Phase is when the ship moves, guided by its Helmsman. The Helm Step is where the tactical chess match of naval positioning is won and lost. Positioning artillery to rake through the length of a ship can simultaneously damage multiple components and crew (see Raking, page 22). Using downwind momentum can make a Ram especially damaging, while careful manoeuvring can navigate shallow reefs without causing damage to the Hull.

A creature that takes a Ship Action to interact with a Control component can take the Manoeuvre option as well as the Accelerate or Decelerate option during this step (see page 15). The Ram occurs if a ship’s movement causes vessels to collide.

### 3. Artillery Step
Gunpowder and smoke, explosions and splinters— the Artillery Step is the exciting moment where ships try to sink each other or incapacitate one another’s components and crew before boarding begins. On its turn in the Artillery Step of the Ship Phase, a ship can fire as many Artillery components as it has crew available to take Ship Actions. Thanks to magitech, all artillery requires only a single operator to load, aim, and fire. Each artillery can fire once per Ship Phase, unless otherwise noted.

A creature that takes a Ship Action to interact with an Artillery component can take the Artillery option or Hold Artillery optionduring this step:
- *Artillery.* Once per Artillery Step, a creature can load, aim, and fire an Artillery component within its reach. Choose an option from the component’s Shot Selection.
- *Hold Artillery.* It’s possible for a ship to prepare its Artillery components to fire when a specific trigger is met. Like the Ready action in the Creature Phase, crew manning Artillery components can choose to take the Hold Artillery option. The creature must declare a specific trigger and, when that trigger occurs, choose whether or not to use its Reaction to fire the Artillery component. A creature can only do this if it has not taken its Reaction since the start of its turn in the previous Creature Phase.

### 4. Miscellaneous Step
The nautical world is full of myriad amazing arcanomechanical marvels! Those that don’t fit into any of the previous Steps, like attracting sharks using a chum bucket, occur during this Step. A creature can take a Ship Action during this step to cause the effects of Miscellaneous components to occur. Details of these effects are found in those components' statistics.

##### Bosun & Repair
A Bosun takes a Ship Action during the Miscellaneous Step (see Naval Perks).

## Ship Movement
Ship movement is very similar to the movement of creatures, with three main differences: ships are of irregular size (they do not occupy a square shape on a square grid), they change speed slowly, and they have specific rules governing how they change direction.

During the Helm Step, a Helmsman can take a Ship Action to interact with a Control component and perform one or both of the following: (A) Accelerate or Decelerate and (B) Manoeuvre. Accelerate or decelerate must* be decided before the ship moves or manoeuvring occurs, but a Manoeuvre can occur at any point during the ship’s movement. These actions are described in the following list:
- *Accelerate*. Once per Helm Step, the ship accelerates, increasing its Current Speed (see Acceleration & Top Speed, page 15). 
- *Decelerate*. Once per Helm Step, the ship accelerates, decreasing its Current Speed (see Acceleration & Top Speed, page 15). 
- *Manoeuvre*. Once per Helm Step, the ship changes its facing a number of times equal to its Turn score (see Facings & Manoeuvring, page 16). This Manoeuvre can occur at any point during the ship’s movement. 
- *Ram*. If ships collide, then a Ram occurs at the moment of collision during the Helm Step. Resolve this before any other actions are taken. See Ramming on page 16 for more details. 
- *Coasting*. If a ship’s Current Speed is not 0, it moves a distance equal to its Current Speed on its current facing at the end of its Helm Step. A Helmsman secures the steering mechanism of a Control component after they take a Helm Action, ensuring that the current facing is maintained.

### Acceleration & Top Speed
Ships are floating buildings, heavy and cumbersome. They are slow to change velocity, and their Top Speed is at the whim of the wind and weather.

##### Top Speed
A ship’s Top Speed equals the primary speed of its fastest Propulsion component, plus the secondary speed of all its other Propulsion components, plus any environmental effects.

##### Changing Speed
Unless otherwise stated, such as by a specific component, environmental effect, or Naval Perk, a ship’s speed increases or decreases in increments of 30 feet. A ship can’t accelerate if its Current Speed is equal to or greater than its Top Speed. If a ship’s Current Speed is above its Top Speed, its speed decreases by 30 feet each round until its speed is equal to or lower than its Top Speed.

#### Speed and Wind
Despite arcanomechanical advancements and magitech marvels, many ships of the Voidsea continue to rely on the wind as a constant source of energy. These ships’ Propulsion components have the words “Wind-Driven” in their metadata.

The speeds indicated in a wind-driven component’s statistics are its speeds when travelling in any direction other than directly downwind or directly upwind, or while there's no wind. Wind-Driven Propulsion components are modified in the following ways:

- Downwind. While travelling downwind (with the wind directly behind it), a wind-driven component’s primary speed is increased by 30 feet (or more, in special weather events). 
- Upwind. While travelling upwind, a wind-driven component’s primary and secondary speeds are 0 (or less, in special weather events; this number can even be negative). 
- No Wind. While there is no wind, a wind-driven component’s primary and secondary speeds are 0, regardless of the ship’s current facing.

### Facings & Manoeuvring
On a square grid, a ship has eight possible facings, one for each of the orthogonal sides and ordinal corners of the square. When a ship changes which way it’s facing, this is called a manoeuvre. As there are eight possible facings, when a vessel executes four Changes of Facing, it ends up facing the opposite direction from where it started. If an effect causes a ship to move or face in a random direction, you can use the Random Direction table on page 13.

##### Manoeuvres
Once during a ship’s Helm Step, a Helmsman within reach of a ship’s Control component can Manoeuvre to change the ship's facing. During its manoeuvre, a vessel can rotate a number of facings equal to its Control component’s Turn score. The Helmsman can choose to make this Manoeuvre at any point during the ship’s movement. 

Manoeuvres always occur from the back of the vessel. When using a grid, this means that, when a ship turns, the back space of the ship does not move. The following image shows a ship with a Turn score of 2 turning from north to east. Note how the back of the boat remains in the same place it started, while the middle and front have shifted position. 

##### Kaiju and Turning
Although they are ship-sized, creatures with the kaiju tag do not move or change direction the way ships do. They move during the Ship Phase’s Helm Step according to their Helm action (which, unless otherwise stated, includes an unlimited number of Changes of Facing) as well as on their turn in the Creature Phase.

### Ramming
A collision between ships is a calamitous affair. Tonnes of wood, metal, or—in more gruesome cases—bone smash into one another with implacable momentum, puncturing holes and causing Bosuns the world over to weep. When two ships collide while their facings aren't parallel, a Ram occurs. Both the ramming ship’s and the rammed ship’s Hull takes Bludgeoning damage if the ship's Ram is what makes contact first, the damage is dealt to the Ram rather than the Hull. The Bludgeoning amage is equal to the following formula:

- Ramming Bludgeoning damage = ramming ship’s weight in tons + Ram component’s damage bonus, if applicable

##### Ramming & Speed
If either ship's Current Speed when a Ram occurs is 30 feet or lower, no damage occurs. If the Current Speed is 60 feet, the damage from the Ram component is ignored. If the Current Speed is 150 feet or higher, the damage from the Ram component is doubled. If a collision is headon, combine the two ships' speeds when determining the relative speed of the collision. A ship that collides with another head on has its Current Speed reduced to 0 directly after the Ram occurs.

## Boarding
The tactics for incapacitating an enemy ship and crew are many. Some skirmish, others wait in ambush. A few rely on muscle-power and close-quarters prowess. Whatever the tactic, boarding an enemy ship is essential if you want to loot it of its treasure, components, and intel. More on this in future playtests. For now: jump!

More than the size and shape of the vessel, a ship’s components are what give it its unique flavour and tactics. From magitech cannons to steam-powered propellers, fire lances to water-elemental-powered fire suppression systems, and sails made from megalodon skin to a Hull that repairs itself by eating victims, the modular systems of a Voidsea vessel allow for numerous combinations.

## Component Overview
Every component has five core statistics:
- Armour Class (AC). This is how hard the component is to hit, a combination of its size and the material from which it’s made. 
- Damage Threshold (DT). This is the component’s capacity to ignore damage, based on the hardiness of its material. Damage dealt to a component that does not exceed the DT is ignored. Resistances and Vulnerabilities are always calculated before determining if the damage exceeds the component’s DT. 
- Hit Points (HP). This is how much damage a component can sustain before it becomes Broken (see page 18) and nonfunctional. 
- Impairment Threshold (IT). This is the number of Hit Points at which a component becomes Impaired (see page 18). 
- Constitution Saving Throw (Con). This is the component’s Constitution saving throw modifier. This is a measure of the robustness of its construction; how well its joints are sealed against the ingress of acid or its ability to absorb the shock of a thunderclap.

##### Conditions
Unless otherwise stated, a ship component is Immune to all conditions and can’t be moved without first being uninstalled from its current location. Like vehicles, ships are Immune to all conditions except the Grappled, Linked, and Restrained conditions. Ships & components are Immune to Poison and Psychic damage unless otherwise stated.

### New Condition: Linked
Whaling, pirating, and not getting sucked into whirlpools are big business on the Voidsea, and harpoons, grappling hooks, and other devices that fix two objects together with a length of flexible material are common. A free-moving target (like a creature or ship) is Linked when it is attached to another free-moving target or a grounded object (one that is fixed to the ground, like a pier or a tree) by a piece of flexible material.

When two targets are connected in such a way, they both have the Linked condition. This condition is always followed by information in parentheses that indicates the object by which the two targets are Linked, as well as that object’s AC, DT, HP, and any damage Resistances and Immunities. For example: “Linked (steel cable: AC 19, DT 10, HP 12; Immunity to all damage except Acid, Force, and Slashing)”.

Linked targets follow these rules: 
- A creature can’t move further away from the target to which it is Linked if that target weighs more than the creature’s drag capacity. 
- A creature can drag an object to which it is Linked if it weighs less than the creature's drag capacity and isn't firmly connected to a grounded object. 
- If a creature is Linked to an unwilling creature that weighs less than its drag capacity, it can make a contested Strength (Athletics) check against that unwilling creature when it tries to move away from it (no action required). On a success, the creature can drag the unwilling creature until the end of the turn, expending 2 feet of movement for every foot it moves. A creature two or more sizes larger than the other automatically succeeds on this contested check. 
- A target can move closer to a target to which it is Linked. Unless otherwise stated, the flexible material that links two creatures is assumed to be taken in as two Linked targets get closer to one another. 
- If the Linked targets are both floating (such as ships on water or airships in the air), and the connecting flexible material is shortened (such as by a winch reeling in a cable), the lighter target is pulled towards the heavier one. 
- Targets stop being Linked if the object connecting them is reduced to 0 Hit Points.

### Saving Throws
Exploding ammunition, Lightning Bolt spells, and a Barbarian’s whirling Greataxe can all trigger saving throws. Ship components deal with some saving throws in unique ways. As mentioned earlier (page 12), components automatically succeed on saving throws against AoEs if the area does not cover the entirety of the grid spaces the component occupies.

##### Strength & Dexterity
Components automatically fail Strength and Dexterity saving throws when the AoE entirely covers the space the component occupies.

##### Constitution
Some effects, like the Shatter spell, force a creature to make a Constitution saving throw. Components make Constitution saving throws against spells and effects that target creatures using their ‘Con’ value as a Constitution saving throw modifier.

##### Mental Statistics
Components are generally objects and thus don’t have Intelligence, Wisdom, or Charisma scores. They are Immune to effects that prompt saving throws using these scores unless that effect states that it can target objects, in which case the component automatically fails.

### Impaired and Broken Components
Ships components can be in one of three states of repair: Functional, Impaired, or Broken. Functional components work as expected, Impaired ones have reduced functionality, and Broken ones are entirely inoperable.

##### Impaired
Every component has an Impairment Threshold (IT) indicated in its statistics. When the component is reduced to a number of Hit Points equal to or lower than its IT, it becomes Impaired. A component remains Impaired until its current Hit Points are restored to its Hit Point maximum (see Repairing Components).

Every component type has a generic effect that occurs when it is Impaired, as listed in the Impaired Component Effect table, though some specific components also have unique impairments.

Impaired Component Effect:

| Component     | Effect                                                                                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Artillery     | The component's long range is reduced to its normal range, and its normal range is reduced to its close range. The component loses its close range. |
| Control       | The component's Turn score is reduced by 1.                                                                                                         |
| Hull          | The ship takes on water, potentially damaging stores and cargo (GM’s discretion). Its top speed is reduced by 30 feet (minimum 0 feet).             |
| Miscellaneous | No generic effect.                                                                                                                                  |
| Propulsion    | The component's primary and secondary speeds are reduced by 30 feet (minimum 0 feet).                                                               |
##### Broken
When a component is reduced to 0 Hit Points, it becomes Broken. A component remains Broken until its current Hit Points are equal to or higher than its IT, at which point it becomes Impaired.

Broken components are generally inoperable, resulting in the generic effects in the Broken Component Effect table.

Broken Component Effect:

| Component     | Effect                                                                                          |
| ------------- | ----------------------------------------------------------------------------------------------- |
| Artillery     | The component can’t be used to make attacks.                                                    |
| Control       | A creature can no longer take a Ship Action to Manoeuvre, Accelerate, or Decelerate the vessel. |
| Hull          | The ship sinks in 1d6 minutes.                                                                  |
| Miscellaneous | No generic effect.                                                                              |
| Propulsion    | The component's primary and secondary speeds are 0.                                             |
##### Destroyed
When damage reduces a component to 0 Hit Points and there is damage remaining equal to or greater than the component's IT, or if a component at 0 Hit Points suffers an effect that deals damage equal to or greater than its IT (even if its DT is higher than its IT), the component is destroyed. No amount of magic or craftsmanship can restore Hit Points to it.

### Repairing Components
Once a component is Broken or Impaired, getting it functional again is no easy task. A mast that has entirely collapsed doesn’t become functional again just because it regains 1 Hit Point; it takes serious work to restore even partial functionality to such an object.

##### Cost & Spare Parts
Repairing ships is an expensive business. When a cannonball hits a component, you can bet that at least some of the component’s parts will be blasted into the deep blue beyond. Accordingly, every ship needs to carry Ship Parts. For simplicity’s sake, each Hit Point of repair requires 1 Ship Part, and each Ship Part costs 1 GP and weighs 1 pound. If you run out of Ship Parts, no more Hit Points can be restored to a component.

##### Repair
There are two ways to repair components: magic and craftsmanship, which both require Ship Parts. A single casting of Mending restores 1 Hit Point to a component (and requires 1 Ship Part) but can’t be used on components that are Impaired or Broken. A creature with the correct tools for the material in question (see the Repair: Materials, Tools, and Abilities table) can spend 1 hour with the tools, making an ability check at the end of the hour. The component regains a number of Hit Points equal to the total of the check, or the value of Ship Parts available for repair, whichever is lower.

Repair: Materials, Tools, and Abilities

| Material | Artisan's Tool                    | Abilities                |
| -------- | --------------------------------- | ------------------------ |
| Flesh    | Surgeon's Tools*                  | Dexterity or Wisdom      |
| Metal    | Smith's or Tinker's Tools         | Strength or Constitution |
| Plant    | Herbalism Kit                     | Intelligence             |
| Stone    | Mason's Tools                     | Strength                 |
| Wood     | Carpenter's or Woodcarver's tools | Strength or Dexterity    |

##### Nomenclature
Components can have up to three parts to their names: function, grade, and quality: 
- Function. The purpose of a component dictates what role it plays in a ship's loadout, while its material delineates some abseline stastitics. For example a Magitech Cannon has Artillery options while a Magitech Control has a Turn score. 
- Grade. How well crafted the component is in one of three grades—Basic, Superior, or Masterwork—affects all the component's baseline statistics. 
- Quality. Specialist carpentry and smithing practices, as indicated by the Bosun Naval Perks, impart blanket modifications to components. More on this in future playtests. This typically affects AC, DT, HP, IT, Con, as well as the time and cost to repair or make the component.

## Component Types
### Hull Components
The Hull is the outer layer of the ship; it’s what keeps the water out and the ship afloat. A ship only ever has one Hull component, though all manner of magical Hulls exist. Some have fins that can provide a higher Top Speed, others have teeth that can bite at an enemy ship during a Ram, and a gruesome few are repaired by the bones of the creatures sacrificed to the ship. In general, Hull components have low ACs—they are the largest component and are easiest to hit—and high DTs and HP.

### Propulsion Components
On the Voidsea, there is all manner of locomotion. Kobold-belief-powered steam engines, chariot-like vessels pulled by sharks, or good old-fashioned sails. As a rule, more and faster Propulsion components result in a faster ship. Speed is always measured in increments of 30 feet (to be compatible with the 30- foot grid of the Naval Theatre). A ship’s speed can be converted to miles per hour by dividing it by 10. 

##### Speeds
Propulsion components have two speed values separated by a slash. The first number is the primary speed, and the second number is the secondary speed. 
- Primary Speed. This is the Top Speed of the component when it is fully functional. 
- Secondary Speed. This is the speed this component adds to the ship’s Top Speed when used in conjunction with a Propulsion component that has a higher Primary Propulsion speed.

##### Dual Power
It is not unusual for a ship to have multiple Propulsion components, such as two sets of sails. In this case, when both components are in operation, the vessel’s Top Speed equals the fastest Propulsion component’s primary speed, plus all the other Propulsion components’ secondary speeds. If the components have the same fastest primary speed, the one with the lower secondary speed is the main Propulsion component.

### Control Components
The Control component is the means by which a ship is steered and its acceleration modified. A ship typically has one Control component, which is manned by the Helmsman. The Control component functions in concert with the ship’s Propulsion component(s) with an important distinction: if the ship’s Control component breaks but the Propulsion component is still functional, the ship will continue on its current facing and speed until the Propulsion component can be manually shut down.

### Artillery Components
Artillery are the components that fire projectiles and energy to impair enemy vessels or attack hostile crew members. 

Attack Modifier. When making an attack roll with an Artillery component, the modifier for the attack roll equals the Artillerist's ability modifier (the ability depends on the type of artillery) plus any additional bonus the Artillerist may have from Artillery perks (see page 29.)

- Artillery attack modifier = artillerist's ability modifier + artillerists’ Artillery perk bonuses

Each nonplayer ship (NPS) has a crew artillery attack modifier. This is used in place of the previous calculation.

##### Critical Hits
As usual, a roll of a 20 on the d20 for an attack roll is a Critical Hit. Like normal Critical Hits, the attack hits regardless of AC and the damage dice are rolled twice to determine how much damage is dealt by that attack.

##### Arcs of Fire
Each ship has specific emplacements reinforced for use with Artillery components. The horizontal angles at which an artillery can be fired from that emplacement are shown in the ship’s Deck Layout (see page 24). Unless otherwise stated (such as by the Anti-Air trait, coming soon), an Artillery component’s maximum vertical angle is 45 degrees. This means that if a flying creature is 95 feet away from the Artillery component and 100 feet above the deck on which the Artillery component is installed, the component can’t target that creature; it can’t point upwards enough.

##### Range
Artillery weapons have three ranges: close, normal, and long. These are indicated in the Artillery component’s shot selection's statistics after the word ‘range’. Eyepieces attached to magitech artillery always allow for accurate ranging; an Artillerist never has to guess a range.

Normal and long range work like regular ranged weapons: attack rolls against targets beyond an artillery’s normal range are made at Disadvantage, while the long range indicates the maximum possible distance that the artillery can attack a target.

The shots of certain artillery components have unique effects—typically gaining Advantage on the attack roll—against specific targets within their close range. This is detailed in the artillery's shot selection. Close range also allows Artillery to attempt a Rake (see page 22).

##### Range & Attack Rolls
| Target                           | Close     | Normal    | Long         |
| -------------------------------- | --------- | --------- | ------------ |
| Non-kaiju Creature               | -*        | -*        | Disadvantage |
| Component (non-Hull)             | -         | -         | Disadvantage |
| Hull & Kaiju (ball shot only***) | Advantage | -         | Disadvantage |
| Mast** (chain shot only***)      | Advantage | Advantage | -            |
\*Creatures receive a bonus to AC against Artillery based on size (see the Bonus to Creature AC vs Artillery Attacks table). 
\*\*Or other tall vertical structure, at the GM’s discretion. 
\*\*\*See Shot Selection & Ammunition, on this page.

##### Targeting Creatures
Ships move predictably and are enormous targets. This makes them much easier to hit than the crew that man them. Accordingly, unless stated otherwise, creatures receive a bonus to their AC against attacks from Artillery components according to the creature's size (see Bonus to Creature AC vs Artillery Attack table). Artillery components with the Anti-Personel trait ignore this bonus to AC.

Bonus to Creature AC vs Artillery Attacks:

| Creature Size  | Bonus to AC |
| -------------- | ----------- |
| Tiny           | +20         |
| Small          | +12         |
| Medium         | +8          |
| Large          | +4          |
| Huge or larger | +0          |

### Shot Selection & Ammunition
Shot selection and ammunition choice are two different things. Shot is the form the ammunition takes, whereas ammunition is a special variant of that form. For example, cannons have three choices of shot: ball, chain, and grape.
##### Ball Shot
This is a single spherical ball, usually made of metal—the type of shot you would expect a cannon to fire. It deals the most damage and is great for punching through thick Hulls. This shot confers Advantage on attack rolls against Hulls and kaiju at close range.

##### Chain Shot
This consists of two smaller balls connected by a chain. When fired, the chain stretches horizontally, making it more likely to hit tall vertical structures like masts. This shot has Advantage on attack rolls against masts and other tall vertical structures. The GM decides if a component is tall enough for an attack against it to gain this Advantage, and an Artillerist always knows this information before they select their shot.

##### Grape Shot
A dozen or more smaller balls tightly wrapped and bound with cloth and rope forms a grape shot. When fired, the cloth rips, causing the shot to spread out in a Narrow Cone*. Any creature in this area must make a Dexterity saving throw (DC equals 8 + the artillerist's ability modifier + the artillerist's perk bonuses). A creature takes damage on a failed save or half as much damage on a successful one (the damage dice are detailed in the artillery’s statistics).

Other weapons, like ballista, have a similar selection of shots; its javelin shot and splinter shot are the equivalent of ball shot and grape shot, respectively. Read the Shot Selection section of an Artillery component’s statistics for details.

##### Shot Selection
An Artillerist chooses which shot to load when it makes an attack roll with an Artillery component. It makes this decision and loads this shot as part of the Ship Action it takes to use the component.

##### Ammunition
Imaginative artificers can augment a type of shot with magical or mechanical alterations, causing them to unleash incapacitating gases, destructive explosions, or arcanomagnetic pulses that can disable components. These variations are referred to as ammunition. A full list of ammunition will be presented in future playtests.

## Sonstiges
