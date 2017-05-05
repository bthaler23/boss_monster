import Boss from './boss';
import Enemy from './enemies';

class StageView {

  constructor(stage) {
    this.stage = stage;
    this.enemies = []; 
    this.slain_enemies = [];
    this.addBoss();
    this.addEnemies();
    this.addKeyEvents();
    this.start();
  }


  addBoss() {
    this.boss = new Boss();
  }

  addEnemies() {
    for (let i = 0; i < 2 ; i++) {
      this.enemies.push(new Enemy(this.boss.center));
    }
  }

  detectCollisions() {
    this.enemies.forEach((enemy) => {
      if (enemy.alive) {
        if (!((enemy.x_pos > this.boss.x_offset || enemy.x_offset < this.boss.x_pos) ||
        (enemy.y_pos > this.boss.y_offset || enemy.y_offset < this.boss.y_pos))) {
          this.slain_enemies.push(enemy);
          enemy.alive = false;
          this.boss.health -= 20;
        } else {
          this.boss.bullets.forEach((bullet) => {
            if (!((enemy.x_pos > bullet.x_offset || enemy.x_offset < bullet.x_pos) ||
            (enemy.y_pos > bullet.y_offset || enemy.y_offset < bullet.y_pos))) {
              this.slain_enemies.push(enemy);
              enemy.alive = false;
            }
          });
        }
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
      this.boss.shootBullet(e.offsetX, e.offsetY);
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
      }
    });
    if (this.slain_enemies.length === this.enemies.length) {
      this.refresh_enemies();
    }
    this.boss.draw(this.stage);
    this.detectCollisions();
    requestAnimationFrame(this.animate.bind(this));
  }

  refresh_enemies() {
    this.slain_enemies = [];
    this.enemies.forEach((enemy) => {
      enemy.reposition(this.boss.center);
    });
  }




}

export default StageView;
