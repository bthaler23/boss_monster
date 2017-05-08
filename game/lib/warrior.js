import Enemy from './enemies';

const WARRIOR_SPEED = 6;

class Warrior extends Enemy {

  constructor(boss_center) {
    super(boss_center);
    this.set_velocity();
    this.height = 120;
    this.width = 120;

  }

  set_velocity() {
    let triangle_x = this.boss_pos[0] - this.center[0];
    let triangle_y = this.boss_pos[1] - this.center[1];
    this.tan_angle = Math.atan2(triangle_y, triangle_x);
    this.x_vel = Math.cos(this.tan_angle) * WARRIOR_SPEED;
    this.y_vel = Math.sin(this.tan_angle) * WARRIOR_SPEED;
  }

  update_class_attributes(boss_pos) {
      this.update_boss_pos(boss_pos);
      this.set_velocity();
  }

  distance_to_boss() {
    return Math.sqrt(Math.pow((this.center[0] - this.boss_pos[0]), 2) + Math.pow((this.center[1] - this.center[1]), 2));
  }

  draw(stage) {
    let warrior_img = new Image();
    warrior_img.src = "./game/assets/warrior.png";
    // window.warrior = warrior_img;
    // console.log(this.distance_to_boss());
    if (this.distance_to_boss() < 375) {
      this.move();
    } else {
      this.set_velocity();
      this.update_offset();
    }
    this.bind(stage);
    stage.save();
    stage.translate(this.center[0], this.center[1]);
    stage.rotate(this.tan_angle);
    stage.translate(-(this.center[0]), -this.center[1]);
    // stage.fillStyle='black';
    // stage.fillRect(this.x_pos, this.y_pos, this.width, this.height);
    // stage.translate(stage.canvas.width/2, stage.canvas.height/2);
    // stage.rotate(Math.PI/4);
    stage.drawImage(warrior_img, this.x_pos, this.y_pos);
    stage.restore();
  }

}

export default Warrior;
