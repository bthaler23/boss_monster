class Bullet {

  constructor(boss_pos, x_offset, y_offset) {
    this.height = 10;
    this.width = 10;
    this.x_pos = boss_pos[0];
    this.y_pos = boss_pos[1];
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.set_velocity(this.x_pos - x_offset, this.y_pos - y_offset);
    this.set_center();
  }

  set_velocity(x_offset, y_offset) {
    let tan_angle = Math.atan2(x_offset, y_offset);
    // console.log(tan_angle / Math.PI * 180);
    this.x_vel = Math.sin(tan_angle) * -8;
    this.y_vel = Math.cos(tan_angle) * -8;
    // console.log(this.y_vel);
    // debugger
  }

  set_center() {
    this.center = [(this.x_offset + this.x_pos)/2, (this.y_offset + this.y_pos)/2];
  }

  update_offset() {
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.set_center();
    // console.log(this.center);
  }

  update_movement() {
    this.x_pos += this.x_vel;
    this.y_pos += this.y_vel;
  }

  draw(stage) {
    this.update_movement();
    this.update_offset();
    stage.fillStyle = "red";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

}


export default Bullet;
