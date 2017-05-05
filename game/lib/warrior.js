import Enemy from './enemies';

const WARRIOR_SPEED = 6;

class Warrior extends Enemy {

  constructor(boss_center) {
    super(boss_center);
    this.set_velocity(this.boss_pos);
  }

  set_velocity() {
    let triangle_x = this.boss_pos[0] - this.center[0];
    let triangle_y = this.boss_pos[1] - this.center[1];
    let tan_angle = Math.atan2(triangle_y, triangle_x);
    this.x_vel = Math.cos(tan_angle) * WARRIOR_SPEED;
    this.y_vel = Math.sin(tan_angle) * WARRIOR_SPEED;
  }

  update_class_attributes(boss_pos) {
      this.update_boss_pos(boss_pos);
      this.set_velocity();
  }

  draw(stage) {
    this.move();
    this.bind(stage);
    stage.fillStyle = "red";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

}

export default Warrior;
