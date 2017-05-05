
import MovingObject from './moving_object';

class Enemy extends MovingObject {

  constructor(boss_pos) {
    super();
    this.update_boss_pos(boss_pos);
    this.x_pos = Math.floor(Math.random() * 1600);
    this.y_pos = Math.floor(Math.random() * 700);
    this.height = 50;
    this.width = 50;
    this.alive = true;
    this.update_offset();
  }

  bind(stage) {
    if (this.x_pos >= stage.canvas.width) {
      this.reposition(this.boss_pos);
    }
    if (this.x_pos <= 0) {
      this.reposition(this.boss_pos);
    }
    if (this.y_pos >= stage.canvas.height) {
      // this.alive = false;
      this.reposition(this.boss_pos);
    }
    if (this.y_pos <= 0) {
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
    this.x_pos = Math.floor(Math.random() * 1600);
    this.y_pos = Math.floor(Math.random() * 700);
    this.update_offset();
    this.update_class_attributes(boss_pos);
  }

}

export default Enemy;
