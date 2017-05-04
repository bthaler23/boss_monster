import Boss from './boss';

class StageView {

  constructor(stage) {
    this.stage = stage;
    this.boss = new Boss(stage);
    document.getElementsByTagName("body")[0].addEventListener("keydown", (e) => {
      this.boss.keys[e.keyCode] = true;
    });
    document.getElementsByTagName("body")[0].addEventListener("keyup", (e) => {
      this.boss.keys[e.keyCode] = false;
    });
    this.start();
  }

  start() {
     requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    this.stage.clearRect(0, 0, 1300, 500);
    // this.stage.fillStyle = "red";
    // this.stage.fillRect(0, 0, 1300, 500);
    this.boss.draw(this.stage);
    requestAnimationFrame(this.animate.bind(this));
  }



}

export default StageView;
