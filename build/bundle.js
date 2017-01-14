/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;
var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(image);
document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var sum = function sum(a, b) {
  return a + b;
};
module.exports = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a922c37289722bc9d38113a7c7fb66d9.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);