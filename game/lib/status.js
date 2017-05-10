
class Status {

  constructor() {

  }

  draw(stage, health, energy) {
    stage.shadowBlur = 3;
    stage.shadowColor = 'rgba(0, 0, 0, 0.5)';
    stage.shadowOffsetY = 2;
    stage.shadowOffsetX = 2;
    stage.fillStyle = 'red';
    stage.font = '30px Arial';
    stage.strokeText("Health", 10, 40);
    stage.fillText("Health", 10, 40);
    stage.fillStyle = 'black';
    stage.fillRect(9, 49, 302, 22);
    stage.fillStyle = 'red';
    stage.fillRect(10, 50, 3 * health, 20);
    stage.fillStyle = 'green';
    stage.strokeText("Energy", 10, 100);
    stage.fillText("Energy", 10, 100);
    stage.fillStyle = 'black';
    stage.fillRect(9, 109, 302, 22);
    stage.fillStyle = 'green';
    stage.fillRect(10, 110, 3 * energy, 20);
  }

}

export default Status;
