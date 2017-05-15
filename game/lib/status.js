
class Status {

  constructor() {

  }

  draw(stage, health, energy) {
    stage.shadowBlur = 3;
    stage.shadowColor = 'rgba(0, 0, 0, 0.5)';
    stage.shadowOffsetY = 2;
    stage.shadowOffsetX = 2;
    stage.fillStyle = 'red';
    stage.font = '40px Arial';
    stage.fillText("Health", 20, 50);
    stage.strokeText("Health", 20, 50);
    stage.fillStyle = 'black';
    stage.fillRect(19, 59, 302, 22);
    stage.fillStyle = 'red';
    stage.fillRect(20, 60, 3 * health, 20);
    stage.fillStyle = 'green';
    stage.fillText("Energy", 20, 120);
    stage.strokeText("Energy", 20, 120);
    stage.fillStyle = 'black';
    stage.fillRect(19, 129, 302, 22);
    stage.fillStyle = 'green';
    stage.fillRect(20, 130, 3 * energy, 20);
  }

}

export default Status;
