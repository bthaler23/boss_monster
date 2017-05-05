import Enemy from './enemies';
import Bullet from './bullet';

class Wizard extends Enemy {

  constructor() {
    super();
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

  update_class_attributes(boss_center) {
    this.update_boss_center(boss_center);
  }


}

export default Wizard;
