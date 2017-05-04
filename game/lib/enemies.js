

class Enemy {

  constructor(boss_center) {
    this.x_pos = Math.floor(Math.random() * 1200);
    this.y_pos = Math.floor(Math.random() * 400);
    this.height = 50;
    this.width = 50;
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.alive = true;
    this.set_center();
    this.boss_center = boss_center;
    this.calculate_tan(this.boss_center);
  }

  draw(stage) {
    this.update_position();
    this.update_offset();
    stage.fillStyle = "red";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

  set_center() {
    this.center = [(this.x_offset + this.x_pos)/2, (this.y_offset + this.y_pos)/2];
  }

  calculate_tan(boss_center) {
    let triangle_x = boss_center[0]- this.center[0];
    let triangle_y = boss_center[1] - this.center[1];
    let tan_angle = Math.atan2(triangle_y, triangle_x);
    // console.log(tan_angle);
    this.x_vel = Math.cos(tan_angle) * 3;
    this.y_vel = Math.sin(tan_angle) * 3;
    // console.log(this.x_vel);
    // console.log(this.y_vel);
  }

  update_position() {
    this.x_pos += this.x_vel;
    this.y_pos += this.y_vel;

  }

  update_offset() {
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
  }

  reposition(boss_center) {
    this.alive = true;
    this.x_pos = Math.floor(Math.random() * 1200);
    this.y_pos = Math.floor(Math.random() * 400);
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.set_center();
    this.calculate_tan(boss_center);
  }

}

export default Enemy;
