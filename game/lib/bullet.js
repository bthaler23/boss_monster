import MovingObject from './moving_object';

const BULLET_SPEED = -6;

class Bullet extends MovingObject {

  constructor(caster_pos, bullet_type, target_x, target_y) {
    super();
    // debugger
    this.height = 14;
    this.width = 13;
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
    this.x_vel = Math.sin(tan_angle) * BULLET_SPEED;
    this.y_vel = Math.cos(tan_angle) * BULLET_SPEED;
  }

  draw(stage) {
    let spell_img = new Image();
    if (this.bullet_type === 'fireball') {
      spell_img.src = "./assets/fireball.png";
    } else {
      spell_img.src = "./assets/frostball.png";
    }
    this.move();
    this.bind(stage);
    // stage.fillStyle='black';
    stage.drawImage(spell_img, this.x_pos, this.y_pos);
    // stage.fillRect(this.x_pos, this.y_pos, this.width, this.height);
  }

}


export default Bullet;
