class Bullet {

  constructor(boss_pos) {
    this.height = 10;
    this.width = 10;
    this.x_pos = boss_pos[0];
    this.y_pos = boss_pos[1];
  }

  draw(stage) {
    stage.fillStyle = "red";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

}


export default Bullet;
