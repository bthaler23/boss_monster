# Boss Monster

## Minimum Viable Product

Action game where player-character must survive waves of enemies, while gaining experiencing and growing.

- [ ] Players will be able move around the arena
- [ ] Trigger basic attacks with allow players to damage enemies
- [ ] Enemies spawn randomly with basic AI functionality
- [ ] **Bonus**: Gather experience points for each defeated foe to level up
- [ ] **Bonus**: Online functionality for multiple players


## Technologies, Libraries, APIS

The project will be implemented with the following technologies:

- `Javascript` for game logic

- `Foo.js` for collision detection

Other scripts included in this project:

`moving-object.js`: this script will handle the logic behind moving characters

`enemy.js`: this script will handle creating the AI and enemy-specific traits

`character.js`: this script will handle the player's character - and store information

`arena.js`: this script will handle the background logic that is going on behind the scenes

## Arena Snapshot

The Arena is where the actual gameplay will take place. The player-character is a boss sprite that can move around and can shoot bullets on an set interval to attack enemy characters. There will be two types of enemies, ones that stay afar and shoot bullets, and ones that rush in for an attack, and they will be in distinct colors so players will be able to tell the difference.

![Arena](/docs/wireframes/arena.png)

[View Other Wireframes Here][wireframes]

[wireframes]: ./docs/wireframes

## Implementation Timeline

#### Phase 1: Implementation of basic rendering of characters on the screen and start menu

- Accomplish the task of getting the game on a screen and able to see the characters

#### Phase 2: Character movement, AI Movement and collision detection

- This phase will have the characters move around and be able to test for collisions

#### Phase 3: Main gameplay elements such as attacking and dying

- Players will be able to hit other enemies and have a score attributed to their high score
