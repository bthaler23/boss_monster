import Enemy from './enemies';
import Bullet from './bullet';

class Wizard extends Enemy {

  constructor(boss_center) {
    super(boss_center);
    this.update_boss_pos(boss_center);
    this.spells = [];
    this.update_offset();
    this.castSpells();
  }

  castSpells() {
    // debugger
    setInterval(() => {
      // debugger
      this.spells.push(new Bullet(this.center, 'blue', this.boss_pos[0], this.boss_pos[1]));
    }, 1000);
  }

  draw(stage) {
    this.bind(stage);
    stage.fillStyle = "blue";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
    this.spells.forEach((spell) => {
      spell.draw(stage);
    });
  }

  update_class_attributes(boss_center) {
    this.update_boss_pos(boss_center);
  }


}

export default Wizard;
