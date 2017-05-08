import Boss from './boss';
import Warrior from './warrior';
import Wizard from './wizard';

class Game {

  constructor(stage) {
    this.stage = stage;
    this.enemies = []; 
    this.slain_enemies = [];
    this.addBoss();
    this.addEnemies();
    this.addKeyEvents();
    this.start();
    //Timeout toggle so I can refresh appropriatly
    this.timeout = false;
    this.refresh_enemies = this.refresh_enemies.bind(this);
  }


  addBoss() {
    this.boss = new Boss();
  }

  addEnemies() {
    for (let i = 0; i < 2 ; i++) {
      this.enemies.push(new Warrior(this.boss.center));
      this.enemies.push(new Wizard(this.boss.center));
    }

  }

  detectCollisions() {
    // window.enemies = this.enemies;
    this.enemies.forEach((enemy) => {
      if (enemy.alive) {
        //LOOK AT THIS SHIT FIGURE IT OUT
        let hit_spells = [];
        this.boss.spells.forEach((spell, i) => {
          if (enemy.collideWith(spell)) {
            if (enemy.shielded === false) {
              spell.hit = true;
              this.slain_enemies.push(enemy);
              enemy.alive = false;
            } else {
              spell.hit = true;
            }
            if (spell.hit) {
              hit_spells.push(i);
            }
          }
        });
        hit_spells.forEach((spell_number) => {
          this.boss.spells.splice(spell_number, 1);
        });
        //Check boss collision with enemy
        if (enemy.collideWith(this.boss)) {
            this.boss.health -= 0.5;
        }
      }
        if (enemy.constructor.name === 'Wizard') {
          let hit_spells = [];
          enemy.spells.forEach((spell, i) => {
            if (this.boss.collideWith(spell)) {
              spell.hit = true;
              this.boss.health -= 5;
              if (spell.hit) {
                hit_spells.push(i);
              }
            }
          });
          hit_spells.forEach((spell_number) => {
              enemy.spells.splice(spell_number, 1);
          });
        }
      });
  }

  addKeyEvents() {
    document.getElementsByTagName("body")[0].addEventListener("keydown", (e) => {
      this.boss.keys[e.keyCode] = true;
    });
    document.getElementsByTagName("body")[0].addEventListener("keyup", (e) => {
      this.boss.keys[e.keyCode] = false;
    });
    this.stage.canvas.addEventListener('click', (e) => {
      // debugger
      this.boss.castSpell(e.offsetX, e.offsetY);
    });
  }

  start() {
     requestAnimationFrame(this.animate.bind(this));

  }

  animate(time) {
    this.stage.clearRect(0, 0, 1300, 800);
    this.stage.fillStyle = '#fde5c6';
    this.stage.fillRect(0, 0, 1300, 800);

    this.enemies.forEach((enemy) => {
      if (enemy.alive) {
        enemy.draw(this.stage);
        enemy.update_boss_pos(this.boss.center);
      }
    });
    if (this.slain_enemies.length === this.enemies.length) {
      if (this.timeout === false) {
        this.timeout = true;
        setTimeout(() => (this.refresh_enemies()), 1500);
      }
    }

    this.boss.draw(this.stage);

    this.detectCollisions();

    requestAnimationFrame(this.animate.bind(this));
  }

  refresh_enemies() {
    this.timeout = false;
    // this.boss.health += (this.boss.health%100)/2;
    this.slain_enemies = [];
    this.enemies.forEach((enemy) => {
      // enemy.update_boss_pos(this.boss.center);
      enemy.reposition(this.boss.center);
    });
  }




}

export default Game;
