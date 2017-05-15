
import MovingObject from './moving_object';

class Enemy extends MovingObject {

  constructor(boss_pos, stage) {
    super();
    this.update_boss_pos(boss_pos);
    this.generate_pos(stage);
    this.height = 200;
    this.width = 200;
    this.alive = true;
    this.update_offset();
  }

  generate_pos(stage) {
    let x_generator = Math.floor(Math.random() * 2);
    if (x_generator === 1) {
      this.x_pos = Math.floor(Math.random() * stage.canvas.width + 150 - stage.canvas.width - 150) + stage.canvas.width - 150;
    } else {
      this.x_pos = Math.floor(Math.random() * 200);
    }
    let y_generator = Math.floor(Math.random() * 2);
    if (y_generator == 1) {
      this.y_pos = Math.floor(Math.random() * 100);
    } else {
      this.y_pos = Math.floor(Math.random() * 800 - 700) + 700;
    }
  }

  bind(stage) {
    if (this.x_pos >= stage.canvas.width + 30) {
      this.reposition(this.boss_pos, stage);
    }
    if (this.x_pos <= -30) {
      this.reposition(this.boss_pos, stage);
    }
    if (this.y_pos >= stage.canvas.height + 30) {
      // this.alive = false;
      this.reposition(this.boss_pos, stage);
    }
    if (this.y_pos <= -30) {
      // this.alive = false;
      this.reposition(this.boss_pos, stage);
    }
  }

  collideWith(other_obj) {
    return (!((this.x_pos > other_obj.x_offset || this.x_offset < other_obj.x_pos) ||
      (this.y_pos > other_obj.y_offset || this.y_offset < other_obj.y_pos)));
  }

  update_boss_pos(boss_pos) {
    this.boss_pos = boss_pos;
  }

  reposition(boss_pos, stage) {
    this.alive = true;
    this.generate_pos(stage);
    this.update_offset();
    this.update_class_attributes(boss_pos);
  }

}

export default Enemy;
