# Boss Monster

Link to [Boss Monster][bossMonster]

[bossMonster]: http://www.bthaler.me/boss-Monster

Boss Monster is an action game, where user's take control of a boss in a dungeon and attempt to defeat waves of enemies in order to get the highest score. In terms of video game genres, Boss Monster would fall under a Top-Down Shooter, where players have control over the main character who can move and shoot bullets at the enemies, who are capable of fighting back as well.

### Structure

Boss Monster is developed with a JavaScript engine, and utilizes HTML Canvas to render the content.

### Gameplay

![Gameplay](/docs/images/boss_monster.gif)


### Major Features

# Dynamic AI

The enemies in Boss Monster are constantly updated with the main player's position in order to calculate their next move. There are two classes of enemies currently, the Wizard and the Warrior. The Warrior is a class that shields itself until it is in within a certain distance to the boss. Once close enough, it rushes in and attacks the boss, causing major damage if it hits. Once it rushes in, it drops it shield, and is vulnerable to attack from the boss. The velocity of the Warrior is calculated by creating an imaginary triangle between the current position of the Warrior and the current position of the Boss. The direction that the Warrior wants to go is the hypotenuse of this triangle. To calculate this, I get the tangent angle of the original triangle, and then use that angle to get the cos and sin of a new imaginary triangle with a hypotenuse of 1, which gives me the x and y speed for the Warrior.

![Warrior Code](/docs/images/warrior_code.png)

# Modular Class Inheritance

Every object in my game belongs to a super class, MovingObject. MovingObject has three major methods, move, update_offset, and set_center. The latter two allow me always keep track of where each object is, so that I can easily detect collusions. Along with that, I can easily create any other object that needs to move and keep track of it without worrying.

![MovingObject](/docs/images/moving_object.png)

One of the major parent classes I implemented is the Enemy Class, which is a child of MovingObject. Enemy has a couple of major methods, it keeps track of the boss's position, binds the enemy to the stage, and repositions the enemy when need be. One of my favorite methods I call in reposition is update_class_attributes, which update's the classes unique attributes when it respawns. With the Enemy Class, I am able to continue to add various unique enemies, and will do so in future versions.

### Future Features

Future features I look forward to adding are a High Score System, which keeps track of the current Highest Scores of the player's who have played. I'm also excited to add more enemy classes to add a more unique and varied gameplay experienced.
