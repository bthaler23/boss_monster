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
    stage.clearRect(0, 0, 1300, 800);
    stage.font = "100px Arial";
    stage.fillStyle = '#0e1282';
    stage.fillRect(0, 0, 1300, 800);
    stage.fillStyle = 'black';
    stage.textAlign="center";
    stage.fillText("Nexus", 650, 300);
    stage.font = "50px Arial";
    stage.fillText("Press Enter to Play", 650, 500);
    stage.textAlign="start";
  }

}

export default StartScreen;
