

class MovingObject {

  constructor() {}

  move() {
    this.x_pos += this.x_vel;
    this.y_pos += this.y_vel;
    this.update_offset();
  }

  update_offset() {
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.set_center();
  }

  set_center() {
    this.center = [(this.x_offset + this.x_pos)/2, (this.y_offset + this.y_pos)/2];
  }

}

export default MovingObject;
