import StartScreen from './lib/start_screen';

let game_width = window.innerWidth * 4/5;
let game_height = window.innerHeight * 3/4;


document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("gameScreen");
  canvas.width = game_width;
  canvas.height = game_height;
  const stage = canvas.getContext('2d');
  new StartScreen(stage);
});
