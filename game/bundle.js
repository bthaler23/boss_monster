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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boss__ = __webpack_require__(1);


class StageView {

  constructor(stage) {
    this.stage = stage;
    this.boss = new __WEBPACK_IMPORTED_MODULE_0__boss__["a" /* default */](stage);
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

/* harmony default export */ __webpack_exports__["a"] = (StageView);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Boss {

  constructor(stage) {
    this.x_vel = 0;
    this.y_vel = 0;
    this.keys = {};
    this.x_pos = 100;
    this.y_pos = 100;
    this.draw(stage);
  }

  movement() {
    // console.log(this.keys);
    if (this.keys[37]) {
      this.x_vel -= 0.5;
    }
    if (this.keys[38]) {
      this.y_vel -= 0.5;
    }
    if (this.keys[39]) {
      this.x_vel += 0.5;
    }
    if (this.keys[40]) {
      this.y_vel += 0.5;
    }
  }

  draw(stage) {
    let boss_img = new Image();
    this.movement();
    this.x_vel *= 0.95;
    this.y_vel *= 0.95;
    // console.log(this.x_vel);
    this.x_pos += this.x_vel;
    this.y_pos += this.y_vel;
    if (this.x_pos >= stage.canvas.width - 130) {
      this.x_pos = stage.canvas.width - 130;
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
    boss_img.src = "./assets/dragon_avenger.gif";
    stage.drawImage(boss_img, this.x_pos, this.y_pos);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Boss);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_stage__ = __webpack_require__(0);


document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("gameScreen");
  canvas.width = 1300;
  canvas.height = 500;
  const stage = canvas.getContext('2d');
  new __WEBPACK_IMPORTED_MODULE_0__lib_stage__["a" /* default */](stage);
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map