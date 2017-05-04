
class Boss {

  constructor(stage) {
    this.x_pos = 100;
    this.y_pos = 100;
    this.draw(stage);
  }

  move(x_dir, y_dir) {
    this.x_pos += x_dir;
    this.y_pos += y_dir;
  }

  draw(stage) {
    let boss_img = new Image();
    boss_img.onload = function() {
        stage.drawImage(boss_img, this.x_pos, this.y_pos);
    }.bind(this);
    boss_img.src = "./assets/dragon_avenger.gif";
  }

}

export default Boss;
