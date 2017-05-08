import Enemy from './enemies';

const WARRIOR_SPEED = 6;

class Warrior extends Enemy {

  constructor(boss_center) {
    super(boss_center);
    this.set_velocity(this.boss_pos);
    this.height = 200;
    this.width = 200;

  }

  set_velocity() {
    let triangle_x = this.boss_pos[0] - this.center[0];
    let triangle_y = this.boss_pos[1] - this.center[1];
    let tan_angle = Math.atan2(triangle_y, triangle_x);
    this.x_vel = Math.cos(tan_angle) * WARRIOR_SPEED;
    this.y_vel = Math.sin(tan_angle) * WARRIOR_SPEED;
  }

  update_class_attributes(boss_pos) {
      this.update_boss_pos(boss_pos);
      this.set_velocity();
  }

  draw(stage) {
    let warrior_img = new Image();
    warrior_img.src = "./assets/warrior.png";
    // window.warrior = warrior_img;
    this.move();
    this.bind(stage);
    stage.save();
    // stage.translate(stage.canvas.width/2, stage.canvas.height/2);
    // stage.rotate(Math.PI/4);
    stage.drawImage(warrior_img, this.x_pos, this.y_pos);
    stage.restore();
  }

}

export default Warrior;
