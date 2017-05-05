import MovingObject from './moving_object';

class Bullet extends MovingObject {

  constructor(caster_pos, bullet_type, target_x, target_y) {
    super();
    this.height = 10;
    this.width = 10;
    this.x_pos = caster_pos[0];
    this.y_pos = caster_pos[1];
    this.bullet_type = bullet_type;
    this.target_x = this.x_pos + this.width;
    this.target_y = this.y_pos + this.height;
    this.set_velocity(this.x_pos - target_x, this.y_pos - target_y);
    this.set_center();
  }

  set_velocity(offset_x, offset_y) {
    let tan_angle = Math.atan2(offset_x, offset_y);
    this.x_vel = Math.sin(tan_angle) * -8;
    this.y_vel = Math.cos(tan_angle) * -8;
  }

  draw(stage) {
    this.move();
    stage.fillStyle = this.bullet_type;
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

}


export default Bullet;
