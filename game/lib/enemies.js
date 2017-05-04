

class Enemy {

  constructor() {
    this.x_pos = Math.floor(Math.random() * 1200);
    this.y_pos = Math.floor(Math.random() * 400);
    this.height = 50;
    this.width = 50;
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.alive = true;
  }

  draw(stage) {
    stage.fillStyle = "red";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

  reposition() {
    this.alive = true;
    this.x_pos = Math.floor(Math.random() * 1200);
    this.y_pos = Math.floor(Math.random() * 400);
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
  }

}

export default Enemy;
