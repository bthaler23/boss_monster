import Game from './game';

class StartScreen {

  constructor(stage) {
    this.draw(stage);
    this.stage = stage;
    document.addEventListener("keyup", this.startGame());
  }

  startGame() {
    const handler = function(e) {
      if (e.keyCode === 13) {
        document.removeEventListener("keyup", handler);
        new Game(this.stage);
      }
    }.bind(this);

    return handler;
  }

  draw(stage) {
    stage.clearRect(0, 0, stage.canvas.width, stage.canvas.height);
    stage.font = "100px Arial";
    stage.fillStyle = '#0e1282';
    stage.fillRect(0, 0, stage.canvas.width, stage.canvas.height);
    stage.fillStyle = 'black';
    stage.textAlign="center";
    stage.fillText("Boss Monster", stage.canvas.width/2, stage.canvas.height * 2/5);
    stage.font = "50px Arial";
    stage.fillText("Press Enter to Play", stage.canvas.width/2, stage.canvas.height * 3/5);
    stage.textAlign="start";
  }

}

export default StartScreen;
