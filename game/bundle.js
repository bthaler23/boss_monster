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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boss__ = __webpack_require__(2);


class StageView {

  constructor(stage) {
    this.stage = stage;
    let boss = new __WEBPACK_IMPORTED_MODULE_0__boss__["a" /* default */](stage);

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

/* harmony default export */ __webpack_exports__["a"] = (StageView);


/***/ }),
/* 1 */
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Boss {

  constructor(stage) {
    this.x_pos = 100;
    this.y_pos = 100;
    this.draw(stage);
  }

  move(x_dir, y_dir) {
    this.x_pos += x_dir;
    this.y_pos += y_dir;
  }

  draw(stage) {
    let boss_img = new Image();
    boss_img.onload = function() {
        stage.drawImage(boss_img, this.x_pos, this.y_pos);
    }.bind(this);
    boss_img.src = "./assets/dragon_avenger.gif";
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Boss);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map