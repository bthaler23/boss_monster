import MovingObject from './moving_object';
import Bullet from './bullet';


class Wizard extends MovingObject {

  constructor() {
    super();
    this.x_pos = Math.floor(Math.random() * 1600);
    this.y_pos = Math.floor(Math.random() * 700);
    this.alive = true;
    this.height = 50;
    this.width = 50;
    this.spells = [];
    this.update_offset();
    this.castSpells();
  }

  castSpells() {
    setInterval(() => {
      this.spells.push(new Bullet(this.center, 'blue', this.boss_center[0], this.boss_center[1]));
    }, 1000);
  }

  update_boss_center(boss_center) {
    this.boss_center = boss_center;
  }

  draw(stage) {
    stage.fillStyle = "blue";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
    this.spells.forEach((spell) => {
      spell.draw(stage);
    });
  }

  reposition(boss_center) {
    this.alive = true;
    this.x_pos = Math.floor(Math.random() * 1600);
    this.y_pos = Math.floor(Math.random() * 700);
    this.update_offset();
  }



}

export default Wizard;
