import Enemy from './enemies';

const WARRIOR_SPEED = 6;

class Warrior extends Enemy {

  constructor(boss_center) {
    super();
    this.set_velocity(boss_center);
  }

  set_velocity(boss_center) {
    let triangle_x = boss_center[0] - this.center[0];
    let triangle_y = boss_center[1] - this.center[1];
    let tan_angle = Math.atan2(triangle_y, triangle_x);
    this.x_vel = Math.cos(tan_angle) * WARRIOR_SPEED;
    this.y_vel = Math.sin(tan_angle) * WARRIOR_SPEED;
  }

  update_class_attributes(boss_center) {
    this.set_velocity(boss_center);
  }

  draw(stage) {
    this.move();
    stage.fillStyle = "red";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

}

export default Warrior;
