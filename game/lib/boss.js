import Bullet from './bullet';
import Status from './status';
import MovingObject from './moving_object';
const MAX_SPEED = 3;

class Boss extends MovingObject {

  constructor() {
    super();
    this.x_vel = 0;
    this.y_vel = 0;
    this.x_pos = 600;
    this.y_pos = 200;
    this.width = 132;
    this.height = 140;
    this.dir = 'still';
    this.move();
    this.speed = 0.5;
    this.friction = 0.92;
    this.keys = {};
    this.spells = [];
    this.setStatus();
  }


  collideWith(other_obj) {
    return (!((this.x_pos > other_obj.x_offset || this.x_offset < other_obj.x_pos) ||
      (this.y_pos > other_obj.y_offset || this.y_offset < other_obj.y_pos)));
  }

  setStatus() {
    this.health = 100;
    this.energy = 100;
    setInterval(() => {
      if (this.energy < 100) {
        this.energy += 1;
      }
    }, 50);
    this.status = new Status();
  }


  update_movement() {
    if (this.keys[65] && this.x_vel >= -1 * MAX_SPEED) {
      this.x_vel -= this.speed;
    }
    if (this.keys[68] && this.x_vel <= MAX_SPEED) {
      this.x_vel += this.speed;
    }
    if (this.keys[87] && this.y_vel >= -1 * MAX_SPEED) {
      this.y_vel -= this.speed;
    }
    if (this.keys[83] && this.y_vel <= MAX_SPEED) {
      this.y_vel += this.speed;
    }
    this.x_vel *= this.friction;
    this.y_vel *= this.friction;
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

  castSpell(x_offSet, y_offSet) {
    // debugger
    if (this.energy >= 10) {
      this.spells.push(new Bullet(this.center, 'red', x_offSet, y_offSet));
      this.energy -= 10;
    }
    console.log(this.spells);
    // console.log(this.spells);
  }

  castSpells(stage) {
    this.spells.forEach((spell) => {
      spell.draw(stage);
    });
  }

  draw(stage) {
    let boss_img = new Image();
    this.update_movement();
    this.move();
    this.bind(stage);
    this.update_offset();
    this.get_dir();
    this.castSpells(stage);
    this.status.draw(stage, this.health, this.energy);
    boss_img.src = "./game/assets/dragon_spritesheet.png";
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
    // console.log(x_vel);
    // console.log(y_vel);
    if ((x_vel < 0.2 && x_vel > -0.2) && (y_vel < 0.2 && y_vel > -0.2)) {
      this.dir = 'still';
    }
    else if (x_vel > 0) {
      let tan_angle = Math.atan2(x_vel, y_vel) / Math.PI * 180;
      // console.log(tan_angle);
      if (tan_angle <= 22.5) {
        this.dir = 'south';
        //south
      } else if (tan_angle <= 67.5) {
        this.dir = 'east';
        //southeast
      } else if (tan_angle <= 112.5) {
        this.dir = 'east';
        //east
      } else if (tan_angle <= 157.5) {
        this.dir = 'east';
        //northeast
      } else if (tan_angle <= 180) {
        this.dir = 'north';
        //north
      }
    }
    else if (x_vel < 0) {
      let tan_angle = Math.atan2(x_vel, y_vel) / Math.PI * 180;
      if (tan_angle >= -22.5) {
        this.dir = 'south';
        //south
      } else if (tan_angle >= -67.5) {
        this.dir = 'west';
        //southwest
      } else if (tan_angle >= -112.5) {
        this.dir = 'west';
        //west
      } else if (tan_angle >= -157.5) {
        this.dir = 'west';
        //northwest
      } else if (tan_angle >= -180) {
        this.dir = 'north';
        //north
      }
    }
  }
}



export default Boss;
