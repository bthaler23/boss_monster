const ENEMY_SPEED = 4;
import MovingObject from './moving_object';

class Enemy extends MovingObject {

  constructor(boss_center) {
    super();
    this.x_pos = Math.floor(Math.random() * 1900);
    this.y_pos = Math.floor(Math.random() * 900);
    this.height = 50;
    this.width = 50;
    this.alive = true;
    this.update_offset();
    this.set_velocity(boss_center);
  }

  draw(stage) {
    this.move();
    stage.fillStyle = "red";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

  set_velocity(boss_center) {
    let triangle_x = boss_center[0] - this.center[0];
    let triangle_y = boss_center[1] - this.center[1];
    let tan_angle = Math.atan2(triangle_y, triangle_x);
    this.x_vel = Math.cos(tan_angle) * ENEMY_SPEED;
    this.y_vel = Math.sin(tan_angle) * ENEMY_SPEED;
  }

  reposition(boss_center) {
    this.alive = true;
    this.x_pos = Math.floor(Math.random() * 1900);
    this.y_pos = Math.floor(Math.random() * 900);
    this.update_offset();
    this.set_velocity(boss_center);
  }

  update_boss_center() {

  }

}

export default Enemy;
