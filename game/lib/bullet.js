import MovingObject from './moving_object';

class Bullet extends MovingObject {

  constructor(caster_pos, bullet_type, target_x, target_y) {
    super();
    // debugger
    this.height = 10;
    this.width = 10;
    this.x_pos = caster_pos[0];
    this.y_pos = caster_pos[1];
    this.bullet_type = bullet_type;
    this.hit = false;
    this.target_x = this.x_pos + this.width;
    this.target_y = this.y_pos + this.height;
    this.set_velocity(this.x_pos - target_x, this.y_pos - target_y);
    this.set_center();
  }

  bind(stage) {
    if (this.x_pos >= stage.canvas.width) {
      this.hit = true;
    }
    if (this.x_pos <= 0) {
      this.hit = true;
    }
    if (this.y_pos >= stage.canvas.height) {
      // this.alive = false;
      this.hit = true;
    }
    if (this.y_pos <= 0) {
      // this.alive = false;
      this.hit = true;
    }
  }

  set_velocity(offset_x, offset_y) {
    let tan_angle = Math.atan2(offset_x, offset_y);
    this.x_vel = Math.sin(tan_angle) * -8;
    this.y_vel = Math.cos(tan_angle) * -8;
  }

  draw(stage) {
    this.move();
    this.bind(stage);
    stage.fillStyle = this.bullet_type;
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

}


export default Bullet;
