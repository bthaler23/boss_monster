
class Boss {

  constructor(stage) {
    this.x_vel = 0;
    this.y_vel = 0;
    this.keys = {};
    this.x_pos = 100;
    this.y_pos = 100;
    this.draw(stage);
  }

  movement() {
    // console.log(this.keys);
    if (this.keys[37]) {
      this.x_vel -= 0.5;
    }
    if (this.keys[38]) {
      this.y_vel -= 0.5;
    }
    if (this.keys[39]) {
      this.x_vel += 0.5;
    }
    if (this.keys[40]) {
      this.y_vel += 0.5;
    }
  }

  draw(stage) {
    let boss_img = new Image();
    this.movement();
    this.x_vel *= 0.95;
    this.y_vel *= 0.95;
    // console.log(this.x_vel);
    this.x_pos += this.x_vel;
    this.y_pos += this.y_vel;
    if (this.x_pos >= stage.canvas.width - 130) {
      this.x_pos = stage.canvas.width - 130;
    }
    if (this.x_pos <= 0) {
      this.x_pos = 0;
    }
    if (this.y_pos >= stage.canvas.height - 140) {
      this.y_pos = stage.canvas.height - 140;
    }
    if (this.y_pos <= 0) {
      this.y_pos = 0;
    }
    boss_img.src = "./assets/dragon_avenger.gif";
    stage.drawImage(boss_img, this.x_pos, this.y_pos);
  }
}

export default Boss;
