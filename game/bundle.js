/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enemies__ = __webpack_require__(2);



class StageView {

  constructor(stage) {
    this.stage = stage;
    this.addBoss();
    this.enemies = [];
    this.addEnemies();
    this.slain_enemies = [];
    this.addKeyEvents();
    this.start();
  }

  addBoss() {
    this.boss = new __WEBPACK_IMPORTED_MODULE_0__boss__["a" /* default */]();
  }

  addEnemies() {
    for (let i = 0; i < 5 ; i++) {
      this.enemies.push(new __WEBPACK_IMPORTED_MODULE_1__enemies__["a" /* default */](this.boss.center));
    }
  }

  detectCollisions() {
    this.enemies.forEach((enemy) => {
      if (!((enemy.x_pos > this.boss.x_offset || enemy.x_offset < this.boss.x_pos) ||
      (enemy.y_pos > this.boss.y_offset || enemy.y_offset < this.boss.y_pos))) {
        if (enemy.alive) {this.slain_enemies.push(enemy);}
        enemy.alive = false;
      }
    });
  }

  addKeyEvents() {
    document.getElementsByTagName("body")[0].addEventListener("keydown", (e) => {
      this.boss.keys[e.keyCode] = true;
    });
    document.getElementsByTagName("body")[0].addEventListener("keyup", (e) => {
      this.boss.keys[e.keyCode] = false;
    });
  }

  start() {
     requestAnimationFrame(this.animate.bind(this));

  }

  animate(time) {
    this.stage.clearRect(0, 0, 1300, 500);
    this.enemies.forEach((enemy) => {
      if (enemy.alive) {
        // enemy.calculate_tan(this.boss.center);
        enemy.draw(this.stage);
      }
    });
    // console.log(this.slain_enemies);
    if (this.slain_enemies.length === this.enemies.length) {
      this.refresh_enemies();
    }
    this.boss.draw(this.stage);
    this.detectCollisions();
    requestAnimationFrame(this.animate.bind(this));
  }

  refresh_enemies() {
    this.slain_enemies = [];
    this.enemies.forEach((enemy) => {
      enemy.reposition(this.boss.center);
    });
  }




}

/* harmony default export */ __webpack_exports__["a"] = (StageView);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MAX_SPEED = 4;

class Boss {

  constructor() {
    this.x_vel = 0;
    this.y_vel = 0;
    this.x_pos = 600;
    this.y_pos = 200;
    this.width = 132;
    this.height = 140;
    this.dir = 'still';
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.set_center();
    this.speed = 0.5;
    this.friction = 0.95;
    this.keys = {};
  }

  set_center() {
    this.center = [(this.x_offset + this.x_pos)/2, (this.y_offset + this.y_pos)/2];
  }

  update_movement() {
    if (this.keys[37] && this.x_vel >= -1 * MAX_SPEED) {
      this.x_vel -= this.speed;
    }
    if (this.keys[38] && this.y_vel >= -1 * MAX_SPEED) {
      this.y_vel -= this.speed;
    }
    if (this.keys[39] && this.x_vel <= MAX_SPEED) {
      this.x_vel += this.speed;
    }
    if (this.keys[40] && this.y_vel <= MAX_SPEED) {
      this.y_vel += this.speed;
    }
    this.x_vel *= this.friction;
    this.y_vel *= this.friction;
  }

  move() {
    this.x_pos += this.x_vel;
    this.y_pos += this.y_vel;

  }

  bind(stage) {
    if (this.x_pos >= stage.canvas.width - 132) {
      this.x_pos = stage.canvas.width - 132;
    }
    if (this.x_pos <= 0) {
      this.x_pos = 0;
    }
    if (this.y_pos >= stage.canvas.height - 140) {
      this.y_pos = stage.canvas.height - 140;
    }
    if (this.y_pos <= 0) {
      this.y_pos = 0;
    }
  }

  update_offset() {
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.set_center();
    // console.log(this.center);
  }

  draw(stage) {
    let boss_img = new Image();
    this.update_movement();
    this.move();
    this.bind(stage);
    this.update_offset();
    this.get_dir();
    // console.log(this.dir);
    boss_img.src = "./assets/dragon_spritesheet.png";
    if (this.dir === 'east') {
      stage.drawImage(boss_img, 0, 0, 102, 134, this.x_pos, this.y_pos, 102, 134);
    }
    else if (this.dir === 'west') {
      stage.drawImage(boss_img, 103, 0, 102, 134, this.x_pos, this.y_pos, 102, 134);
    }
    else {
      stage.drawImage(boss_img, 0, 135, 132, 140, this.x_pos, this.y_pos, 132, 140);
    }
  }

  get_dir() {
    let x_vel = this.x_vel;
    let y_vel = this.y_vel;
    if ((x_vel < 0.3 && x_vel > -0.3) && (y_vel < 0.3 && y_vel > -0.3)){
      this.dir = 'still';
    }
    else if (x_vel > 0.5 && y_vel < -0.5)
      this.dir = 'east';
      //northeast
    else if (x_vel > 0.5 && (y_vel > -0.3 && y_vel < 0.3)) {
      this.dir = 'east';
      //east
    }
    else if (x_vel > 0.5 && (y_vel > 0.5)) {
      this.dir = 'east';
      //southeast
    }
    else if ((x_vel < 0.3 && x_vel > -0.3) && y_vel > 0.5) {
      this.dir = 'south';
      //south
    }
    else if (x_vel < -0.5 && y_vel > 0.5) {
      this.dir = 'west';
      //southwest
    }
    else if (x_vel < -0.5 && (y_vel < 0.3 && y_vel > -0.3)) {
      this.dir = 'west';
      //west
    }
    else if (x_vel < -0.5 && y_vel < -0.5) {
      this.dir = 'west';
      //northwest
    }
    else if ((x_vel < 0.5 && x_vel > -0.5) && y_vel < -0.5) {
      this.dir = 'north';
      //north
    }


  }

}

/* harmony default export */ __webpack_exports__["a"] = (Boss);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Enemy {

  constructor(boss_center) {
    this.x_pos = Math.floor(Math.random() * 1200);
    this.y_pos = Math.floor(Math.random() * 400);
    this.height = 50;
    this.width = 50;
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.alive = true;
    this.set_center();
    this.boss_center = boss_center;
    this.calculate_tan(this.boss_center);
  }

  draw(stage) {
    this.update_position();
    this.update_offset();
    stage.fillStyle = "red";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

  set_center() {
    this.center = [(this.x_offset + this.x_pos)/2, (this.y_offset + this.y_pos)/2];
  }

  calculate_tan(boss_center) {
    let triangle_x = boss_center[0]- this.center[0];
    let triangle_y = boss_center[1] - this.center[1];
    let tan_angle = Math.atan2(triangle_y, triangle_x);
    // console.log(tan_angle);
    this.x_vel = Math.cos(tan_angle) * 3;
    this.y_vel = Math.sin(tan_angle) * 3;
    // console.log(this.x_vel);
    // console.log(this.y_vel);
  }

  update_position() {
    this.x_pos += this.x_vel;
    this.y_pos += this.y_vel;

  }

  update_offset() {
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
  }

  reposition(boss_center) {
    this.alive = true;
    this.x_pos = Math.floor(Math.random() * 1200);
    this.y_pos = Math.floor(Math.random() * 400);
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.set_center();
    this.calculate_tan(boss_center);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Enemy);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_stage__ = __webpack_require__(0);


const GAME_WIDTH = 1300;
const GAME_HEIGHT = 500;

document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("gameScreen");
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  const stage = canvas.getContext('2d');
  new __WEBPACK_IMPORTED_MODULE_0__lib_stage__["a" /* default */](stage);
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map