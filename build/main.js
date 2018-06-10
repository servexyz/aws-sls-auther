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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/auth/enticate.js":
/*!******************************!*\
  !*** ./src/auth/enticate.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = authenticate;

var _got = __webpack_require__(/*! got */ "got");

var _got2 = _interopRequireDefault(_got);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function authenticate(_x, _x2) {
  return _authenticate.apply(this, arguments);
}

function _authenticate() {
  _authenticate = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(username, password) {
    var endpoint, _ref, body;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            endpoint = "http://localhost:3000/api".concat("/mock/post/login");
            console.log("endpoint: ".concat(endpoint));
            _context.next = 4;
            return _got2.default.post(endpoint, {
              body: {
                username: username,
                password: password
              },
              json: true
            });

          case 4:
            _ref = _context.sent;
            body = _ref.body;
            return _context.abrupt("return", body.token);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _authenticate.apply(this, arguments);
}

/***/ }),

/***/ "./src/auth/orize.js":
/*!***************************!*\
  !*** ./src/auth/orize.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthorized = isAuthorized;

var _got = __webpack_require__(/*! got */ "got");

var _got2 = _interopRequireDefault(_got);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

//NOTE: Assumption here is that there's only one API (ie. AUTHER_ENDPOINT)
// This would break if there were two endpoints. Or the user would have to
// manually configure AUTHER_ENDPOINT everytime a new API was selected
function isAuthorized(_x) {
  return _isAuthorized.apply(this, arguments);
}

function _isAuthorized() {
  _isAuthorized = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(jwt) {
    var endpoint, _ref, body;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            endpoint = "http://localhost:3000/api".concat("/get/protected");
            _context.next = 3;
            return (0, _got2.default)(endpoint, {
              headers: {
                Authorization: jwt
              }
            });

          case 3:
            _ref = _context.sent;
            body = _ref.body;
            return _context.abrupt("return", body);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _isAuthorized.apply(this, arguments);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enticate = __webpack_require__(/*! ./auth/enticate.js */ "./src/auth/enticate.js");

Object.defineProperty(exports, "authenticate", {
  enumerable: true,
  get: function get() {
    return _enticate.authenticate;
  }
});

var _orize = __webpack_require__(/*! ./auth/orize.js */ "./src/auth/orize.js");

Object.defineProperty(exports, "isAuthorized", {
  enumerable: true,
  get: function get() {
    return _orize.isAuthorized;
  }
});
console.log("Local AWS-SLS-Auther 10");

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi idempotent-babel-polyfill ./src/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! idempotent-babel-polyfill */"idempotent-babel-polyfill");
module.exports = __webpack_require__(/*! /Users/alechp/Code/servexyz/starter/.repositories/prisma-authorized-starter/.repositories/aws-sls-auther/src/index.js */"./src/index.js");


/***/ }),

/***/ "got":
/*!**********************!*\
  !*** external "got" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("got");

/***/ }),

/***/ "idempotent-babel-polyfill":
/*!********************************************!*\
  !*** external "idempotent-babel-polyfill" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("idempotent-babel-polyfill");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map