import Boss from './boss';

class StageView {

  constructor(stage) {
    this.stage = stage;
    let boss = new Boss(stage);

    document.getElementsByTagName("body")[0].addEventListener("keydown", (e) => {
      stage.clearRect(0, 0, 1300, 500);
      if (e.key === "ArrowUp" ){
        boss.move(0, -10);
      }
      else if (e.key === "ArrowDown") {
        boss.move(0, 10);
      }
      else if (e.key === "ArrowLeft") {
        boss.move(-10, 0);
      }
      else if (e.key === "ArrowRight") {
        boss.move(10, 0);
      }
      // boss.move(0, -);
      boss.draw(stage);
    });
  }


}

export default StageView;
