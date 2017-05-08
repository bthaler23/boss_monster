import Enemy from './enemies';
import Bullet from './bullet';

class Wizard extends Enemy {

  constructor(boss_center) {
    super(boss_center);
    this.height = 130;
    this.width = 145;
    this.update_boss_pos(boss_center);
    this.spells = [];
    this.update_offset();
    setTimeout(() => {
      this.castSpells();
    }, 500);
  }

  castSpells() {
    // debugger
    setInterval(() => {
      if (this.alive) {
        this.spells.push(new Bullet(this.center, 'fireball', this.boss_pos[0], this.boss_pos[1]));
      }
    }, 1500);

  }

  draw(stage) {
    this.bind(stage);
    let mage_img = new Image();
    mage_img.src = "./assets/wizard.png";
    let triangle_x = this.boss_pos[0] - this.center[0];
    let triangle_y = this.boss_pos[1] - this.center[1];
    let tan_angle = Math.atan2(triangle_y, triangle_x);
    stage.save();
    stage.translate(this.center[0], this.center[1]);
    stage.rotate(tan_angle);
    stage.translate(-(this.center[0]), -this.center[1]);
    stage.drawImage(mage_img, this.x_pos, this.y_pos);
    stage.restore();
    this.spells.forEach((spell) => {
      spell.draw(stage);
    });
  }

  update_class_attributes(boss_center) {
    this.spells = [];
    this.update_boss_pos(boss_center);
  }


}

export default Wizard;
