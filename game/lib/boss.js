const MAX_SPEED = 4;

class Boss {

  constructor() {
    this.x_vel = 0;
    this.y_vel = 0;
    this.x_pos = 600;
    this.y_pos = 200;
    this.width = 132;
    this.height = 140;
    this.dir = 'still';
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.set_center();
    this.speed = 0.5;
    this.friction = 0.95;
    this.keys = {};
  }

  set_center() {
    this.center = [(this.x_offset + this.x_pos)/2, (this.y_offset + this.y_pos)/2];
  }

  update_movement() {
    if (this.keys[37] && this.x_vel >= -1 * MAX_SPEED) {
      this.x_vel -= this.speed;
    }
    if (this.keys[38] && this.y_vel >= -1 * MAX_SPEED) {
      this.y_vel -= this.speed;
    }
    if (this.keys[39] && this.x_vel <= MAX_SPEED) {
      this.x_vel += this.speed;
    }
    if (this.keys[40] && this.y_vel <= MAX_SPEED) {
      this.y_vel += this.speed;
    }
    this.x_vel *= this.friction;
    this.y_vel *= this.friction;
  }

  move() {
    this.x_pos += this.x_vel;
    this.y_pos += this.y_vel;

  }

  bind(stage) {
    if (this.x_pos >= stage.canvas.width - 132) {
      this.x_pos = stage.canvas.width - 132;
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
  }

  update_offset() {
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.set_center();
    // console.log(this.center);
  }

  draw(stage) {
    let boss_img = new Image();
    this.update_movement();
    this.move();
    this.bind(stage);
    this.update_offset();
    this.get_dir();
    // console.log(this.dir);
    boss_img.src = "./assets/dragon_spritesheet.png";
    if (this.dir === 'east') {
      stage.drawImage(boss_img, 0, 0, 102, 134, this.x_pos, this.y_pos, 102, 134);
    }
    else if (this.dir === 'west') {
      stage.drawImage(boss_img, 103, 0, 102, 134, this.x_pos, this.y_pos, 102, 134);
    }
    else {
      stage.drawImage(boss_img, 0, 135, 132, 140, this.x_pos, this.y_pos, 132, 140);
    }
  }

  get_dir() {
    let x_vel = this.x_vel;
    let y_vel = this.y_vel;
    if ((x_vel < 0.3 && x_vel > -0.3) && (y_vel < 0.3 && y_vel > -0.3)){
      this.dir = 'still';
    }
    else if (x_vel > 0.5 && y_vel < -0.5)
      this.dir = 'east';
      //northeast
    else if (x_vel > 0.5 && (y_vel > -0.3 && y_vel < 0.3)) {
      this.dir = 'east';
      //east
    }
    else if (x_vel > 0.5 && (y_vel > 0.5)) {
      this.dir = 'east';
      //southeast
    }
    else if ((x_vel < 0.3 && x_vel > -0.3) && y_vel > 0.5) {
      this.dir = 'south';
      //south
    }
    else if (x_vel < -0.5 && y_vel > 0.5) {
      this.dir = 'west';
      //southwest
    }
    else if (x_vel < -0.5 && (y_vel < 0.3 && y_vel > -0.3)) {
      this.dir = 'west';
      //west
    }
    else if (x_vel < -0.5 && y_vel < -0.5) {
      this.dir = 'west';
      //northwest
    }
    else if ((x_vel < 0.5 && x_vel > -0.5) && y_vel < -0.5) {
      this.dir = 'north';
      //north
    }


  }

}

export default Boss;
