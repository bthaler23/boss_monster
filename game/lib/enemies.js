
import MovingObject from './moving_object';

class Enemy extends MovingObject {

  constructor() {
    super();
    this.x_pos = Math.floor(Math.random() * 1600);
    this.y_pos = Math.floor(Math.random() * 700);
    this.height = 50;
    this.width = 50;
    this.alive = true;
    this.update_offset();
  }

  reposition(boss_center) {
    this.alive = true;
    this.x_pos = Math.floor(Math.random() * 1600);
    this.y_pos = Math.floor(Math.random() * 700);
    this.update_offset();
    this.update_class_attributes(boss_center);
  }

}

export default Enemy;
