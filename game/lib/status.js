
class Status {

  constructor() {

  }

  draw(stage, health) {
    stage.font = '30px Arial';
    stage.fillText("Health", 10, 40);
    stage.fillStyle = 'black';
    stage.fillRect(9, 49, 302, 22);
    stage.fillStyle = 'red';
    stage.fillRect(10, 50, 3 * health, 20);
  }

}

export default Status;
