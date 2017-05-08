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
    let mage_img = new Image();
    mage_img.src = "./assets/wizard.png";
    stage.drawImage(mage_img, this.x_pos, this.y_pos);
    this.spells.forEach((spell) => {
      spell.draw(stage);
    });
  }

  update_class_attributes(boss_center) {
    this.update_boss_pos(boss_center);
  }


}

export default Wizard;
