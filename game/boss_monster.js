import StartScreen from './lib/start_screen';

let game_width = Math.floor(1000);
let game_height = Math.floor(700);


document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("gameScreen");
  canvas.width = game_width;
  canvas.height = game_height;
  const stage = canvas.getContext('2d');
  new StartScreen(stage);
});
