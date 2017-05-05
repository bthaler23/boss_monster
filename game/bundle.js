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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class MovingObject {

  constructor() {    
  }

  move() {
    this.x_pos += this.x_vel;
    this.y_pos += this.y_vel;
    this.update_offset();
  }

  update_offset() {
    this.x_offset = this.x_pos + this.width;
    this.y_offset = this.y_pos + this.height;
    this.set_center();
  }

  set_center() {
    this.center = [(this.x_offset + this.x_pos)/2, (this.y_offset + this.y_pos)/2];
  }

}

/* harmony default export */ __webpack_exports__["a"] = (MovingObject);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_object__ = __webpack_require__(0);


class Bullet extends __WEBPACK_IMPORTED_MODULE_0__moving_object__["a" /* default */] {

  constructor(caster_pos, bullet_type, target_x, target_y) {
    super();
    // debugger
    this.height = 10;
    this.width = 10;
    this.x_pos = caster_pos[0];
    this.y_pos = caster_pos[1];
    this.bullet_type = bullet_type;
    this.hit = false;
    this.target_x = this.x_pos + this.width;
    this.target_y = this.y_pos + this.height;
    this.set_velocity(this.x_pos - target_x, this.y_pos - target_y);
    this.set_center();
  }

  bind(stage) {
    if (this.x_pos >= stage.canvas.width) {
      this.hit = true;
    }
    if (this.x_pos <= 0) {
      this.hit = true;
    }
    if (this.y_pos >= stage.canvas.height) {
      // this.alive = false;
      this.hit = true;
    }
    if (this.y_pos <= 0) {
      // this.alive = false;
      this.hit = true;
    }
  }

  set_velocity(offset_x, offset_y) {
    let tan_angle = Math.atan2(offset_x, offset_y);
    this.x_vel = Math.sin(tan_angle) * -8;
    this.y_vel = Math.cos(tan_angle) * -8;
  }

  draw(stage) {
    this.move();
    this.bind(stage);
    stage.fillStyle = this.bullet_type;
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

}


/* harmony default export */ __webpack_exports__["a"] = (Bullet);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_object__ = __webpack_require__(0);



class Enemy extends __WEBPACK_IMPORTED_MODULE_0__moving_object__["a" /* default */] {

  constructor(boss_pos) {
    super();
    this.update_boss_pos(boss_pos);
    this.x_pos = Math.floor(Math.random() * 1600);
    this.y_pos = Math.floor(Math.random() * 700);
    this.height = 50;
    this.width = 50;
    this.alive = true;
    this.update_offset();
  }

  bind(stage) {
    if (this.x_pos >= stage.canvas.width) {
      this.reposition(this.boss_pos);
    }
    if (this.x_pos <= 0) {
      this.reposition(this.boss_pos);
    }
    if (this.y_pos >= stage.canvas.height) {
      // this.alive = false;
      this.reposition(this.boss_pos);
    }
    if (this.y_pos <= 0) {
      // this.alive = false;
      this.reposition(this.boss_pos);
    }
  }

  collideWith(other_obj) {
    return (!((this.x_pos > other_obj.x_offset || this.x_offset < other_obj.x_pos) ||
      (this.y_pos > other_obj.y_offset || this.y_offset < other_obj.y_pos)));
  }

  update_boss_pos(boss_pos) {
    this.boss_pos = boss_pos;
  }

  reposition(boss_pos) {
    this.alive = true;
    this.x_pos = Math.floor(Math.random() * 1600);
    this.y_pos = Math.floor(Math.random() * 700);
    this.update_offset();
    this.update_class_attributes(boss_pos);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Enemy);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warrior__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard__ = __webpack_require__(7);




class Game {

  constructor(stage) {
    this.stage = stage;
    this.enemies = []; 
    this.slain_enemies = [];
    this.addBoss();
    this.addEnemies();
    this.addKeyEvents();
    this.start();
  }


  addBoss() {
    this.boss = new __WEBPACK_IMPORTED_MODULE_0__boss__["a" /* default */]();
  }

  addEnemies() {
    for (let i = 0; i < 2 ; i++) {
      this.enemies.push(new __WEBPACK_IMPORTED_MODULE_1__warrior__["a" /* default */](this.boss.center));
      this.enemies.push(new __WEBPACK_IMPORTED_MODULE_2__wizard__["a" /* default */](this.boss.center));
    }

  }

  detectCollisions() {
    window.enemies = this.enemies;
    this.enemies.forEach((enemy) => {
      if (enemy.alive) {
        if (enemy.collideWith(this.boss)) {
            this.slain_enemies.push(enemy);
            enemy.alive = false;
            this.boss.health -= 20;
        } else {
          let hit_spells = [];
          //LOOK AT THIS SHIT FIGURE IT OUT
          this.boss.spells.forEach((spell, i) => {
            if (enemy.collideWith(spell)) {
              spell.hit = true;
              this.slain_enemies.push(enemy);
              enemy.alive = false;
              }
            if (spell.hit) {
              hit_spells.push(i);
            }
          });
          hit_spells.forEach((spell_number) => {
            this.boss.spells.splice(spell_number, 1);
          });
        }
        if (enemy.constructor.name === 'Wizard') {
          let hit_spells = [];
          enemy.spells.forEach((spell, i) => {
            if (this.boss.collideWith(spell)) {
              spell.hit = true;
              this.boss.health -= 20;
              if (spell.hit) {
                hit_spells.push(i);
              }
            }
          });
          hit_spells.forEach((spell_number) => {
              enemy.spells.splice(spell_number, 1);
          });
        }
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
    this.stage.canvas.addEventListener('click', (e) => {
      // debugger
      this.boss.castSpell(e.offsetX, e.offsetY);
    });
  }

  start() {
     requestAnimationFrame(this.animate.bind(this));

  }

  animate(time) {
    this.stage.clearRect(0, 0, 1300, 800);
    this.stage.fillStyle = '#fde5c6';
    this.stage.fillRect(0, 0, 1300, 800);

    this.enemies.forEach((enemy) => {
      if (enemy.alive) {
        enemy.draw(this.stage);
        enemy.update_boss_pos(this.boss.center);
      }
    });
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
      // enemy.update_boss_pos(this.boss.center);
      enemy.reposition(this.boss.center);
    });
  }




}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bullet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__status__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moving_object__ = __webpack_require__(0);



const MAX_SPEED = 3;

class Boss extends __WEBPACK_IMPORTED_MODULE_2__moving_object__["a" /* default */] {

  constructor() {
    super();
    this.x_vel = 0;
    this.y_vel = 0;
    this.x_pos = 600;
    this.y_pos = 200;
    this.width = 132;
    this.height = 140;
    this.dir = 'still';
    this.move();
    this.speed = 0.5;
    this.friction = 0.92;
    this.keys = {};
    this.spells = [];
    this.setStatus();
  }


  collideWith(other_obj) {
    return (!((this.x_pos > other_obj.x_offset || this.x_offset < other_obj.x_pos) ||
      (this.y_pos > other_obj.y_offset || this.y_offset < other_obj.y_pos)));
  }
  setStatus() {
    this.health = 100;
    this.energy = 100;
    setInterval(() => {
      if (this.energy < 100) {
        this.energy += 1;
      }
    }, 50);
    this.status = new __WEBPACK_IMPORTED_MODULE_1__status__["a" /* default */]();
  }


  update_movement() {
    if (this.keys[65] && this.x_vel >= -1 * MAX_SPEED) {
      this.x_vel -= this.speed;
    }
    if (this.keys[68] && this.x_vel <= MAX_SPEED) {
      this.x_vel += this.speed;
    }
    if (this.keys[87] && this.y_vel >= -1 * MAX_SPEED) {
      this.y_vel -= this.speed;
    }
    if (this.keys[83] && this.y_vel <= MAX_SPEED) {
      this.y_vel += this.speed;
    }
    this.x_vel *= this.friction;
    this.y_vel *= this.friction;
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

  castSpell(x_offSet, y_offSet) {
    // debugger
    if (this.energy >= 10) {
      this.spells.push(new __WEBPACK_IMPORTED_MODULE_0__bullet__["a" /* default */](this.center, 'red', x_offSet, y_offSet));
      this.energy -= 10;
    }
    console.log(this.spells);
    // console.log(this.spells);
  }

  castSpells(stage) {
    this.spells.forEach((spell) => {
      spell.draw(stage);
    });
  }

  draw(stage) {
    let boss_img = new Image();
    this.update_movement();
    this.move();
    this.bind(stage);
    this.update_offset();
    this.get_dir();
    this.castSpells(stage);
    this.status.draw(stage, this.health, this.energy);
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
    // console.log(x_vel);
    // console.log(y_vel);
    if ((x_vel < 0.2 && x_vel > -0.2) && (y_vel < 0.2 && y_vel > -0.2)) {
      this.dir = 'still';
    }
    else if (x_vel > 0) {
      let tan_angle = Math.atan2(x_vel, y_vel) / Math.PI * 180;
      // console.log(tan_angle);
      if (tan_angle <= 22.5) {
        this.dir = 'south';
        //south
      } else if (tan_angle <= 67.5) {
        this.dir = 'east';
        //southeast
      } else if (tan_angle <= 112.5) {
        this.dir = 'east';
        //east
      } else if (tan_angle <= 157.5) {
        this.dir = 'east';
        //northeast
      } else if (tan_angle <= 180) {
        this.dir = 'north';
        //north
      }
    }
    else if (x_vel < 0) {
      let tan_angle = Math.atan2(x_vel, y_vel) / Math.PI * 180;
      if (tan_angle >= -22.5) {
        this.dir = 'south';
        //south
      } else if (tan_angle >= -67.5) {
        this.dir = 'west';
        //southwest
      } else if (tan_angle >= -112.5) {
        this.dir = 'west';
        //west
      } else if (tan_angle >= -157.5) {
        this.dir = 'west';
        //northwest
      } else if (tan_angle >= -180) {
        this.dir = 'north';
        //north
      }
    }
  }
}



/* harmony default export */ __webpack_exports__["a"] = (Boss);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Status {

  constructor() {

  }

  draw(stage, health, energy) {
    stage.fillStyle = 'red';
    stage.font = '30px Arial';
    stage.fillText("Health", 10, 40);
    stage.fillStyle = 'black';
    stage.fillRect(9, 49, 302, 22);
    stage.fillStyle = 'red';
    stage.fillRect(10, 50, 3 * health, 20);
    stage.fillStyle = 'green';
    stage.fillText("Energy", 10, 100);
    stage.fillStyle = 'black';
    stage.fillRect(9, 109, 302, 22);
    stage.fillStyle = 'green';
    stage.fillRect(10, 110, 3 * energy, 20);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Status);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enemies__ = __webpack_require__(2);


const WARRIOR_SPEED = 6;

class Warrior extends __WEBPACK_IMPORTED_MODULE_0__enemies__["a" /* default */] {

  constructor(boss_center) {
    super(boss_center);
    this.set_velocity(this.boss_pos);
  }

  set_velocity() {
    let triangle_x = this.boss_pos[0] - this.center[0];
    let triangle_y = this.boss_pos[1] - this.center[1];
    let tan_angle = Math.atan2(triangle_y, triangle_x);
    this.x_vel = Math.cos(tan_angle) * WARRIOR_SPEED;
    this.y_vel = Math.sin(tan_angle) * WARRIOR_SPEED;
  }

  update_class_attributes(boss_pos) {
      this.update_boss_pos(boss_pos);
      this.set_velocity();
  }

  draw(stage) {
    this.move();
    this.bind(stage);
    stage.fillStyle = "red";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Warrior);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enemies__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bullet__ = __webpack_require__(1);



class Wizard extends __WEBPACK_IMPORTED_MODULE_0__enemies__["a" /* default */] {

  constructor(boss_center) {
    super(boss_center);
    this.update_boss_pos(boss_center);
    this.spells = [];
    this.update_offset();
    this.castSpells();
  }

  castSpells() {
    // debugger
    setInterval(() => {
      // debugger
      this.spells.push(new __WEBPACK_IMPORTED_MODULE_1__bullet__["a" /* default */](this.center, 'blue', this.boss_pos[0], this.boss_pos[1]));
    }, 1000);
  }

  draw(stage) {
    this.bind(stage);
    stage.fillStyle = "blue";
    stage.fillRect(this.x_pos, this.y_pos, this.height, this.width);
    this.spells.forEach((spell) => {
      spell.draw(stage);
    });
  }

  update_class_attributes(boss_center) {
    this.update_boss_pos(boss_center);
  }


}

/* harmony default export */ __webpack_exports__["a"] = (Wizard);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game__ = __webpack_require__(3);


const GAME_WIDTH = 1300;
const GAME_HEIGHT = 800;

document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("gameScreen");
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  const stage = canvas.getContext('2d');
  new __WEBPACK_IMPORTED_MODULE_0__lib_game__["a" /* default */](stage);
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map