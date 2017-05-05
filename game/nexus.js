import Game from './lib/game';

const GAME_WIDTH = 1300;
const GAME_HEIGHT = 800;

document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("gameScreen");
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  const stage = canvas.getContext('2d');
  new Game(stage);
});
