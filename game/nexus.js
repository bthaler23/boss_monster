import StageView from './lib/stage';

document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("gameScreen");
  canvas.width = 1300;
  canvas.height = 500;
  const stage = canvas.getContext('2d');
  new StageView(stage);
});
