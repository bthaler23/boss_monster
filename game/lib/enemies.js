
import MovingObject from './moving_object';

class Enemy extends MovingObject {

  constructor(boss_pos) {
    super();
    this.update_boss_pos(boss_pos);
    this.generate_pos();
    this.height = 200;
    this.width = 200;
    this.alive = true;
    this.update_offset();
  }

  generate_pos() {
    let x_generator = Math.floor(Math.random() * 2);
    if (x_generator === 1) {
      this.x_pos = Math.floor(Math.random() * 1700 - 1500) + 1500;
    } else {
      this.x_pos = Math.floor(Math.random() * 150);
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
      this.reposition(this.boss_pos);
    }
    if (this.x_pos <= -30) {
      this.reposition(this.boss_pos);
    }
    if (this.y_pos >= stage.canvas.height + 30) {
      // this.alive = false;
      this.reposition(this.boss_pos);
    }
    if (this.y_pos <= -30) {
      // this.alive = false;
      this.reposition(this.boss_pos);
    }
  }

  collideWith(other_obj) {
    return (!((this.x_pos > other_obj.x_offset || this.x_offset < other_obj.x_pos) ||
      (this.y_pos > other_obj.y_offset || this.y_offset < other_obj.y_pos)));
  }

  update_boss_pos(boss_pos) {
    this.boss_pos = boss_pos;
  }

  reposition(boss_pos) {
    this.alive = true;
    this.generate_pos();
    this.update_offset();
    this.update_class_attributes(boss_pos);
  }

}

export default Enemy;
