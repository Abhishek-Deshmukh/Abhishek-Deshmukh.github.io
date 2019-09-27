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
/******/ 	return __webpack_require__(__webpack_require__.s = 190);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(33);
} else {}


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BACKGROUND_OPERATION = 'background.operation';
exports.CONSOLE_UNFOCUS = 'console.unfocus';
exports.CONSOLE_ENTER_COMMAND = 'console.enter.command';
exports.CONSOLE_ENTER_FIND = 'console.enter.find';
exports.CONSOLE_QUERY_COMPLETIONS = 'console.query.completions';
exports.CONSOLE_SHOW_COMMAND = 'console.show.command';
exports.CONSOLE_SHOW_ERROR = 'console.show.error';
exports.CONSOLE_SHOW_INFO = 'console.show.info';
exports.CONSOLE_SHOW_FIND = 'console.show.find';
exports.CONSOLE_HIDE = 'console.hide';
exports.FOLLOW_START = 'follow.start';
exports.FOLLOW_REQUEST_COUNT_TARGETS = 'follow.request.count.targets';
exports.FOLLOW_RESPONSE_COUNT_TARGETS = 'follow.response.count.targets';
exports.FOLLOW_CREATE_HINTS = 'follow.create.hints';
exports.FOLLOW_SHOW_HINTS = 'follow.update.hints';
exports.FOLLOW_REMOVE_HINTS = 'follow.remove.hints';
exports.FOLLOW_ACTIVATE = 'follow.activate';
exports.FOLLOW_KEY_PRESS = 'follow.key.press';
exports.MARK_SET_GLOBAL = 'mark.set.global';
exports.MARK_JUMP_GLOBAL = 'mark.jump.global';
exports.TAB_SCROLL_TO = 'tab.scroll.to';
exports.FIND_NEXT = 'find.next';
exports.FIND_PREV = 'find.prev';
exports.FIND_GET_KEYWORD = 'find.get.keyword';
exports.FIND_SET_KEYWORD = 'find.set.keyword';
exports.ADDON_ENABLED_QUERY = 'addon.enabled.query';
exports.ADDON_ENABLED_RESPONSE = 'addon.enabled.response';
exports.ADDON_TOGGLE_ENABLED = 'addon.toggle.enabled';
exports.OPEN_URL = 'open.url';
exports.SETTINGS_CHANGED = 'settings.changed';
exports.SETTINGS_QUERY = 'settings.query';
exports.CONSOLE_FRAME_MESSAGE = 'console.frame.message';
exports.NAVIGATE_HISTORY_NEXT = 'navigate.history.next';
exports.NAVIGATE_HISTORY_PREV = 'navigate.history.prev';
exports.NAVIGATE_LINK_NEXT = 'navigate.link.next';
exports.NAVIGATE_LINK_PREV = 'navigate.link.prev';
exports.valueOf = (o) => {
    switch (o.type) {
        case exports.CONSOLE_UNFOCUS:
        case exports.CONSOLE_ENTER_COMMAND:
        case exports.CONSOLE_ENTER_FIND:
        case exports.CONSOLE_QUERY_COMPLETIONS:
        case exports.CONSOLE_SHOW_COMMAND:
        case exports.CONSOLE_SHOW_ERROR:
        case exports.CONSOLE_SHOW_INFO:
        case exports.CONSOLE_SHOW_FIND:
        case exports.CONSOLE_HIDE:
        case exports.FOLLOW_START:
        case exports.FOLLOW_REQUEST_COUNT_TARGETS:
        case exports.FOLLOW_RESPONSE_COUNT_TARGETS:
        case exports.FOLLOW_CREATE_HINTS:
        case exports.FOLLOW_SHOW_HINTS:
        case exports.FOLLOW_REMOVE_HINTS:
        case exports.FOLLOW_ACTIVATE:
        case exports.FOLLOW_KEY_PRESS:
        case exports.MARK_SET_GLOBAL:
        case exports.MARK_JUMP_GLOBAL:
        case exports.TAB_SCROLL_TO:
        case exports.FIND_NEXT:
        case exports.FIND_PREV:
        case exports.FIND_GET_KEYWORD:
        case exports.FIND_SET_KEYWORD:
        case exports.ADDON_ENABLED_QUERY:
        case exports.ADDON_ENABLED_RESPONSE:
        case exports.ADDON_TOGGLE_ENABLED:
        case exports.OPEN_URL:
        case exports.SETTINGS_CHANGED:
        case exports.SETTINGS_QUERY:
        case exports.CONSOLE_FRAME_MESSAGE:
        case exports.NAVIGATE_HISTORY_NEXT:
        case exports.NAVIGATE_HISTORY_PREV:
        case exports.NAVIGATE_LINK_NEXT:
        case exports.NAVIGATE_LINK_PREV:
            return o;
    }
    throw new Error('unknown operation type: ' + o.type);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(37)();
}


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(34);
} else {}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(39);
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10), __webpack_require__(42)(module)))

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21),
    getRawTag = __webpack_require__(49),
    objectToString = __webpack_require__(50);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(47);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Context.js

var ReactReduxContext = react_default.a.createContext(null);
/* harmony default export */ var components_Context = (ReactReduxContext);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch_batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch_batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch_batch;
};
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch(); // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?

  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      batch(function () {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      });
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react["useMemo"])(function () {
    var subscription = new Subscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return react_default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

Provider.propTypes = {
  store: prop_types_default.a.shape({
    subscribe: prop_types_default.a.func.isRequired,
    dispatch: prop_types_default.a.func.isRequired,
    getState: prop_types_default.a.func.isRequired
  }),
  context: prop_types_default.a.object,
  children: prop_types_default.a.any
};
/* harmony default export */ var components_Provider = (Provider);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(15);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(4);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/react-redux/node_modules/react-is/index.js
var react_is = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
}; // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect because we want
// `connect` to perform sync updates to a ref to save the latest props after
// a render is actually committed to the DOM.


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react["useLayoutEffect"] : react["useEffect"];
function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  browser_default()(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
  browser_default()(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
  var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
  browser_default()(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (false) {}

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = _objectWithoutPropertiesLoose(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is["isContextConsumer"])(react_default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context

      var didStoreComeFromProps = Boolean(props.store);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      browser_default()(didStoreComeFromProps || didStoreComeFromContext, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      var store = props.store || contextValue.store;
      var childPropsSelector = Object(react["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react["useRef"])();
      var lastWrapperProps = Object(react["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react["useRef"])();
      var renderIsScheduled = Object(react["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffect(function () {
        // We want to capture the wrapper props and child props we used for later comparisons
        lastWrapperProps.current = wrapperProps;
        lastChildProps.current = actualChildProps;
        renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

        if (childPropsFromStoreUpdate.current) {
          childPropsFromStoreUpdate.current = null;
          notifyNestedSubs();
        }
      }); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffect(function () {
        // If we're not subscribed to the store, nothing to do here
        if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

        var didUnsubscribe = false;
        var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

        var checkForUpdates = function checkForUpdates() {
          if (didUnsubscribe) {
            // Don't run stale listeners.
            // Redux doesn't guarantee unsubscriptions happen until next dispatch.
            return;
          }

          var latestStoreState = store.getState();
          var newChildProps, error;

          try {
            // Actually run the selector with the most recent store state and wrapper props
            // to determine what the child props should be
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
          } catch (e) {
            error = e;
            lastThrownError = e;
          }

          if (!error) {
            lastThrownError = null;
          } // If the child props haven't changed, nothing to do here - cascade the subscription update


          if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
              notifyNestedSubs();
            }
          } else {
            // Save references to the new child props.  Note that we track the "child props from store update"
            // as a ref instead of a useState/useReducer because we need a way to determine if that value has
            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
            // forcing another re-render, which we don't want.
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

            forceComponentUpdateDispatch({
              type: 'STORE_UPDATED',
              payload: {
                latestStoreState: latestStoreState,
                error: error
              }
            });
          }
        }; // Actually subscribe to the nearest connected ancestor (or store)


        subscription.onStateChange = checkForUpdates;
        subscription.trySubscribe(); // Pull data from the store after first render in case the store has
        // changed since we began.

        checkForUpdates();

        var unsubscribeWrapper = function unsubscribeWrapper() {
          didUnsubscribe = true;
          subscription.tryUnsubscribe();
          subscription.onStateChange = null;

          if (lastThrownError) {
            // It's possible that we caught an error due to a bad mapState function, but the
            // parent re-rendered without this component and we're about to unmount.
            // This shouldn't happen as long as we do top-down subscriptions correctly, but
            // if we ever do those wrong, this throw will surface the error in our tests.
            // In that case, throw the error from here so it doesn't get lost.
            throw lastThrownError;
          }
        };

        return unsubscribeWrapper;
      }, [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react["useMemo"])(function () {
        return react_default.a.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react_default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react_default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react_default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react_default.a.createElement(Connect, _extends({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/isPlainObject.js
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return Object(redux["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ var connect_connect = (createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useReduxContext.js



/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext_useReduxContext() {
  var contextValue = Object(react["useContext"])(ReactReduxContext);
  browser_default()(contextValue, 'could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  return contextValue;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useStore.js



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(react["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore_useStore = createStoreHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useStore = context === ReactReduxContext ? useStore_useStore : createStoreHook(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = createDispatchHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useSelector.js




 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useSelector_useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react["useLayoutEffect"] : react["useEffect"];

var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react["useMemo"])(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react["useRef"])();
  var latestSelector = Object(react["useRef"])();
  var latestSelectedState = Object(react["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    var errorMessage = "An error occured while selecting the store state: " + err.message + ".";

    if (latestSubscriptionCallbackError.current) {
      errorMessage += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\nOriginal stack trace:";
    }

    throw new Error(errorMessage);
  }

  useSelector_useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useSelector_useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(react["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    browser_default()(selector, "You must pass a selector to useSelectors");

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector_useSelector = createSelectorHook();
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/reactBatchedUpdates.js
/* eslint-disable import/no-unresolved */

// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js
/* concated harmony reexport Provider */__webpack_require__.d(__webpack_exports__, "Provider", function() { return components_Provider; });
/* concated harmony reexport connectAdvanced */__webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return connectAdvanced; });
/* concated harmony reexport ReactReduxContext */__webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* concated harmony reexport connect */__webpack_require__.d(__webpack_exports__, "connect", function() { return connect_connect; });
/* concated harmony reexport batch */__webpack_require__.d(__webpack_exports__, "batch", function() { return react_dom["unstable_batchedUpdates"]; });
/* concated harmony reexport useDispatch */__webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* concated harmony reexport createDispatchHook */__webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* concated harmony reexport useSelector */__webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector_useSelector; });
/* concated harmony reexport createSelectorHook */__webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* concated harmony reexport useStore */__webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore_useStore; });
/* concated harmony reexport createStoreHook */__webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* concated harmony reexport shallowEqual */__webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });










setBatch(react_dom["unstable_batchedUpdates"]);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(41);
} else {}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(19),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.suspense_list"):60120,ba=n?Symbol.for("react.memo"):
60115,ca=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");var z="function"===typeof Symbol&&Symbol.iterator;
function A(a){for(var b=a.message,d="https://reactjs.org/docs/error-decoder.html?invariant="+b,c=1;c<arguments.length;c++)d+="&args[]="+encodeURIComponent(arguments[c]);a.message="Minified React error #"+b+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};
function D(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}D.prototype.isReactComponent={};D.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw A(Error(85));this.updater.enqueueSetState(this,a,b,"setState")};D.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function E(){}E.prototype=D.prototype;function F(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}var G=F.prototype=new E;
G.constructor=F;h(G,D.prototype);G.isPureReactComponent=!0;var H={current:null},I={suspense:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,k=null;if(null!=b)for(c in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:k,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){e=a[k];var f=b+T(e,k);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,k++),g+=S(e,f,d,c);else if("object"===e)throw d=""+a,A(Error(31),"[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,"");return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=H.current;if(null===a)throw A(Error(321));return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw A(Error(143));return a}},createRef:function(){return{current:null}},Component:D,PureComponent:F,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:ca,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:ba,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,unstable_SuspenseList:aa,createElement:M,cloneElement:function(a,b,d){if(null===a||void 0===a)throw A(Error(267),a);var c=void 0,e=
h({},a.props),g=a.key,k=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:k,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);
b.type=a;return b},isValidElement:N,version:"16.9.0",unstable_withSuspenseConfig:function(a,b){var d=I.suspense;I.suspense=void 0===b?null:b;try{a()}finally{I.suspense=d}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:H,ReactCurrentBatchConfig:I,ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(1),m=__webpack_require__(19),q=__webpack_require__(35);function t(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}if(!aa)throw t(Error(227));var ba=null,ca={};
function da(){if(ba)for(var a in ca){var b=ca[a],c=ba.indexOf(a);if(!(-1<c))throw t(Error(96),a);if(!ea[c]){if(!b.extractEvents)throw t(Error(97),a);ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],h=b,g=d;if(fa.hasOwnProperty(g))throw t(Error(99),g);fa[g]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],h,g);e=!0}else f.registrationName?(ha(f.registrationName,h,g),e=!0):e=!1;if(!e)throw t(Error(98),d,a);}}}}
function ha(a,b,c){if(ia[a])throw t(Error(100),a);ia[a]=b;ja[a]=b.eventTypes[c].dependencies}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,h,g,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a}};function qa(a,b,c,d,e,f,h,g,k){la=!1;ma=null;ka.apply(pa,arguments)}
function ra(a,b,c,d,e,f,h,g,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null}else throw t(Error(198));na||(na=!0,oa=l)}}var sa=null,ta=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ra(d,b,void 0,a);a.currentTarget=null}function xa(a,b){if(null==b)throw t(Error(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ba(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a){ya(a,Aa);if(za)throw t(Error(95));if(na)throw a=oa,na=!1,oa=null,a;}}
var Ca={injectEventPluginOrder:function(a){if(ba)throw t(Error(101));ba=Array.prototype.slice.call(a);da()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca.hasOwnProperty(c)||ca[c]!==d){if(ca[c])throw t(Error(102),c);ca[c]=d;b=!0}}b&&da()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw t(Error(231),b,typeof c);
return c}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;throw t(Error(33));}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Ma(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}
function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement);
function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),ab=Wa("transitionend"),bb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=null,db=null,eb=null;
function fb(){if(eb)return eb;var a,b=db,c=b.length,d,e="value"in cb?cb.value:cb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var h=c-a;for(d=1;d<=h&&b[c-d]===e[f-d];d++);return eb=e.slice(a,1<d?1-d:void 0)}function gb(){return!0}function hb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?gb:hb;this.isPropagationStopped=hb;return this}
m(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=gb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=gb)},persist:function(){this.isPersistent=gb},isPersistent:hb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=hb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;m(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=m({},d.Interface,a);c.extend=d.extend;ib(c);return c};ib(y);function jb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function kb(a){if(!(a instanceof this))throw t(Error(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function ib(a){a.eventPool=[];a.getPooled=jb;a.release=kb}var lb=y.extend({data:null}),mb=y.extend({data:null}),nb=[9,13,27,32],ob=Ra&&"CompositionEvent"in window,pb=null;Ra&&"documentMode"in document&&(pb=document.documentMode);
var qb=Ra&&"TextEvent"in window&&!pb,sb=Ra&&(!ob||pb&&8<pb&&11>=pb),tb=String.fromCharCode(32),ub={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vb=!1;
function wb(a,b){switch(a){case "keyup":return-1!==nb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function xb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var yb=!1;function Ab(a,b){switch(a){case "compositionend":return xb(b);case "keypress":if(32!==b.which)return null;vb=!0;return tb;case "textInput":return a=b.data,a===tb&&vb?null:a;default:return null}}
function Bb(a,b){if(yb)return"compositionend"===a||!ob&&wb(a,b)?(a=fb(),eb=db=cb=null,yb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return sb&&"ko"!==b.locale?null:b.data;default:return null}}
var Cb={eventTypes:ub,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(ob)b:{switch(a){case "compositionstart":e=ub.compositionStart;break b;case "compositionend":e=ub.compositionEnd;break b;case "compositionupdate":e=ub.compositionUpdate;break b}e=void 0}else yb?wb(a,c)&&(e=ub.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ub.compositionStart);e?(sb&&"ko"!==c.locale&&(yb||e!==ub.compositionStart?e===ub.compositionEnd&&yb&&(f=fb()):(cb=d,db="value"in cb?cb.value:cb.textContent,yb=
!0)),e=lb.getPooled(e,b,c,d),f?e.data=f:(f=xb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=qb?Ab(a,c):Bb(a,c))?(b=mb.getPooled(ub.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Db=null,Eb=null,Fb=null;function Gb(a){if(a=ta(a)){if("function"!==typeof Db)throw t(Error(280));var b=sa(a.stateNode);Db(a.stateNode,a.type,b)}}function Hb(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function Ib(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;Gb(a);if(b)for(a=0;a<b.length;a++)Gb(b[a])}}
function Jb(a,b){return a(b)}function Kb(a,b,c,d){return a(b,c,d)}function Lb(){}var Mb=Jb,Nb=!1;function Ob(){if(null!==Eb||null!==Fb)Lb(),Ib()}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Pb[a.type]:"textarea"===b?!0:!1}
function Rb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Sb(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Tb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ub(a){var b=Tb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Vb(a){a._valueTracker||(a._valueTracker=Ub(a))}function Wb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Tb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Xb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Xb.hasOwnProperty("ReactCurrentDispatcher")||(Xb.ReactCurrentDispatcher={current:null});Xb.hasOwnProperty("ReactCurrentBatchConfig")||(Xb.ReactCurrentBatchConfig={suspense:null});
var Yb=/^(.*)[\\\/]/,B="function"===typeof Symbol&&Symbol.for,Zb=B?Symbol.for("react.element"):60103,$b=B?Symbol.for("react.portal"):60106,ac=B?Symbol.for("react.fragment"):60107,bc=B?Symbol.for("react.strict_mode"):60108,cc=B?Symbol.for("react.profiler"):60114,dc=B?Symbol.for("react.provider"):60109,ec=B?Symbol.for("react.context"):60110,fc=B?Symbol.for("react.concurrent_mode"):60111,gc=B?Symbol.for("react.forward_ref"):60112,hc=B?Symbol.for("react.suspense"):60113,ic=B?Symbol.for("react.suspense_list"):
60120,jc=B?Symbol.for("react.memo"):60115,kc=B?Symbol.for("react.lazy"):60116;B&&Symbol.for("react.fundamental");B&&Symbol.for("react.responder");var lc="function"===typeof Symbol&&Symbol.iterator;function mc(a){if(null===a||"object"!==typeof a)return null;a=lc&&a[lc]||a["@@iterator"];return"function"===typeof a?a:null}
function oc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ac:return"Fragment";case $b:return"Portal";case cc:return"Profiler";case bc:return"StrictMode";case hc:return"Suspense";case ic:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ec:return"Context.Consumer";case dc:return"Context.Provider";case gc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jc:return oc(a.type);case kc:if(a=1===a._status?a._result:null)return oc(a)}return null}function pc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=oc(a.type);c=null;d&&(c=oc(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Yb,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc=Object.prototype.hasOwnProperty,sc={},tc={};
function uc(a){if(rc.call(tc,a))return!0;if(rc.call(sc,a))return!1;if(qc.test(a))return tc[a]=!0;sc[a]=!0;return!1}function vc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function wc(a,b,c,d){if(null===b||"undefined"===typeof b||vc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function D(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var F={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F[a]=new D(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F[b]=new D(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F[a]=new D(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F[a]=new D(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F[a]=new D(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){F[a]=new D(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){F[a]=new D(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){F[a]=new D(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){F[a]=new D(a,5,!1,a.toLowerCase(),null,!1)});var xc=/[\-:]([a-z])/g;function yc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(xc,
yc);F[b]=new D(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!1)});
F.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!0)});
function zc(a,b,c,d){var e=F.hasOwnProperty(b)?F[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(wc(b,c,e,d)&&(c=null),d||null===e?uc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Ac(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Bc(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Cc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ac(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Dc(a,b){b=b.checked;null!=b&&zc(a,"checked",b,!1)}
function Ec(a,b){Dc(a,b);var c=Ac(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fc(a,b.type,Ac(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Gc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Fc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Hc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ic(a,b,c){a=y.getPooled(Hc.change,a,b,c);a.type="change";Hb(c);Qa(a);return a}var Jc=null,Kc=null;function Lc(a){Ba(a)}
function Mc(a){var b=Ja(a);if(Wb(b))return a}function Nc(a,b){if("change"===a)return b}var Oc=!1;Ra&&(Oc=Sb("input")&&(!document.documentMode||9<document.documentMode));function Pc(){Jc&&(Jc.detachEvent("onpropertychange",Qc),Kc=Jc=null)}function Qc(a){if("value"===a.propertyName&&Mc(Kc))if(a=Ic(Kc,a,Rb(a)),Nb)Ba(a);else{Nb=!0;try{Jb(Lc,a)}finally{Nb=!1,Ob()}}}function Rc(a,b,c){"focus"===a?(Pc(),Jc=b,Kc=c,Jc.attachEvent("onpropertychange",Qc)):"blur"===a&&Pc()}
function Sc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Mc(Kc)}function Tc(a,b){if("click"===a)return Mc(b)}function Uc(a,b){if("input"===a||"change"===a)return Mc(b)}
var Vc={eventTypes:Hc,_isInputEventSupported:Oc,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,h=void 0,g=e.nodeName&&e.nodeName.toLowerCase();"select"===g||"input"===g&&"file"===e.type?f=Nc:Qb(e)?Oc?f=Uc:(f=Sc,h=Rc):(g=e.nodeName)&&"input"===g.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Tc);if(f&&(f=f(a,b)))return Ic(f,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fc(e,"number",e.value)}},Wc=y.extend({view:null,detail:null}),Xc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Xc[a])?!!b[a]:!1}function Zc(){return Yc}
var $c=0,ad=0,bd=!1,cd=!1,dd=Wc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var h=void 0,g=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)h=dd,g=fd.mouseLeave,k=fd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)h=ed,g=fd.pointerLeave,k=fd.pointerEnter,l="pointer";var n=null==f?e:Ja(f);e=null==b?e:Ja(b);a=h.getPooled(g,f,c,d);a.type=l+"leave";a.target=n;a.relatedTarget=e;c=h.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=n;d=b;if(f&&d)a:{b=f;e=d;l=0;for(h=b;h;h=La(h))l++;h=0;for(k=e;k;k=La(k))h++;for(;0<l-h;)b=La(b),l--;for(;0<h-l;)e=La(e),h--;for(;l--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function hd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var id=Object.prototype.hasOwnProperty;
function jd(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!id.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function kd(a,b){return{responder:a,props:b}}new Map;new Map;new Set;new Map;
function ld(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function od(a){if(2!==ld(a))throw t(Error(188));}
function pd(a){var b=a.alternate;if(!b){b=ld(a);if(3===b)throw t(Error(188));return 1===b?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return od(e),a;if(f===d)return od(e),b;f=f.sibling}throw t(Error(188));}if(c.return!==d.return)c=e,d=f;else{for(var h=!1,g=e.child;g;){if(g===c){h=!0;c=e;d=f;break}if(g===d){h=!0;d=e;c=f;break}g=g.sibling}if(!h){for(g=f.child;g;){if(g===
c){h=!0;c=f;d=e;break}if(g===d){h=!0;d=f;c=e;break}g=g.sibling}if(!h)throw t(Error(189));}}if(c.alternate!==d)throw t(Error(190));}if(3!==c.tag)throw t(Error(188));return c.stateNode.current===c?a:b}function qd(a){a=pd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var rd=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),sd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),td=Wc.extend({relatedTarget:null});function ud(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd=Wc.extend({key:function(a){if(a.key){var b=vd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ud(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?wd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zc,charCode:function(a){return"keypress"===
a.type?ud(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ud(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),yd=dd.extend({dataTransfer:null}),zd=Wc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zc}),Ad=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Bd=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Cd=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],
["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",
1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",2],[Xa,"animationEnd",2],[Ya,"animationIteration",2],[Za,"animationStart",2],["canplay","canPlay",2],["canplaythrough",
"canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress","progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",
2],[ab,"transitionEnd",2],["waiting","waiting",2]],Dd={},Ed={},Fd=0;for(;Fd<Cd.length;Fd++){var Gd=Cd[Fd],Hd=Gd[0],Id=Gd[1],Jd=Gd[2],Kd="on"+(Id[0].toUpperCase()+Id.slice(1)),Ld={phasedRegistrationNames:{bubbled:Kd,captured:Kd+"Capture"},dependencies:[Hd],eventPriority:Jd};Dd[Id]=Ld;Ed[Hd]=Ld}
var Md={eventTypes:Dd,getEventPriority:function(a){a=Ed[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=Ed[a];if(!e)return null;switch(a){case "keypress":if(0===ud(c))return null;case "keydown":case "keyup":a=xd;break;case "blur":case "focus":a=td;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
yd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=zd;break;case Xa:case Ya:case Za:a=rd;break;case ab:a=Ad;break;case "scroll":a=Wc;break;case "wheel":a=Bd;break;case "copy":case "cut":case "paste":a=sd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},Nd=Md.getEventPriority,Od=[];
function Pd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Rb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,h=null,g=0;g<ea.length;g++){var k=ea[g];k&&(k=k.extractEvents(d,b,f,e))&&(h=xa(h,k))}Ba(h)}}var Qd=!0;function G(a,b){Rd(b,a,!1)}
function Rd(a,b,c){switch(Nd(b)){case 0:var d=Sd.bind(null,b,1);break;case 1:d=Td.bind(null,b,1);break;default:d=Ud.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Sd(a,b,c){Nb||Lb();var d=Ud,e=Nb;Nb=!0;try{Kb(d,a,b,c)}finally{(Nb=e)||Ob()}}function Td(a,b,c){Ud(a,b,c)}
function Ud(a,b,c){if(Qd){b=Rb(c);b=Ha(b);null===b||"number"!==typeof b.tag||2===ld(b)||(b=null);if(Od.length){var d=Od.pop();d.topLevelType=a;d.nativeEvent=c;d.targetInst=b;a=d}else a={topLevelType:a,nativeEvent:c,targetInst:b,ancestors:[]};try{if(c=a,Nb)Pd(c,void 0);else{Nb=!0;try{Mb(Pd,c,void 0)}finally{Nb=!1,Ob()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Od.length&&Od.push(a)}}}var Vd=new ("function"===typeof WeakMap?WeakMap:Map);
function Wd(a){var b=Vd.get(a);void 0===b&&(b=new Set,Vd.set(a,b));return b}function Xd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Yd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Zd(a,b){var c=Yd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Yd(c)}}function $d(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?$d(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function ae(){for(var a=window,b=Xd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xd(a.document)}return b}function be(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var ce=Ra&&"documentMode"in document&&11>=document.documentMode,de={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ee=null,fe=null,ge=null,he=!1;
function ie(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(he||null==ee||ee!==Xd(c))return null;c=ee;"selectionStart"in c&&be(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return ge&&jd(ge,c)?null:(ge=c,a=y.getPooled(de.select,fe,a,b),a.type="select",a.target=ee,Qa(a),a)}
var je={eventTypes:de,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Wd(e);f=ja.onSelect;for(var h=0;h<f.length;h++)if(!e.has(f[h])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Qb(e)||"true"===e.contentEditable)ee=e,fe=b,ge=null;break;case "blur":ge=fe=ee=null;break;case "mousedown":he=!0;break;case "contextmenu":case "mouseup":case "dragend":return he=!1,ie(c,d);case "selectionchange":if(ce)break;
case "keydown":case "keyup":return ie(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));sa=Ka;ta=Ia;va=Ja;Ca.injectEventPluginsByName({SimpleEventPlugin:Md,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Vc,SelectEventPlugin:je,BeforeInputEventPlugin:Cb});function ke(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function le(a,b){a=m({children:void 0},b);if(b=ke(b.children))a.children=b;return a}function me(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Ac(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw t(Error(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function oe(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw t(Error(92));if(Array.isArray(b)){if(!(1>=b.length))throw t(Error(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:Ac(c)}}
function pe(a,b){var c=Ac(b.value),d=Ac(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function qe(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var re={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function se(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function te(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?se(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ue=void 0,ve=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==re.svg||"innerHTML"in a)a.innerHTML=b;else{ue=ue||document.createElement("div");ue.innerHTML="<svg>"+b+"</svg>";for(b=ue.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function we(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var xe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ye=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(a){ye.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);xe[b]=xe[a]})});function ze(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||xe.hasOwnProperty(a)&&xe[a]?(""+b).trim():b+"px"}
function Ae(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ze(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Ce=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function De(a,b){if(b){if(Ce[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw t(Error(137),a,"");if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw t(Error(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw t(Error(61));}if(null!=b.style&&"object"!==typeof b.style)throw t(Error(62),"");}}
function Ee(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function Fe(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Wd(a);b=ja[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.has(e)){switch(e){case "scroll":Rd(a,"scroll",!0);break;case "focus":case "blur":Rd(a,"focus",!0);Rd(a,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Sb(e)&&Rd(a,e,!0);break;case "invalid":case "submit":case "reset":break;default:-1===bb.indexOf(e)&&G(e,a)}c.add(e)}}}function Ge(){}var He=null,Ie=null;
function Je(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ke(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Le="function"===typeof setTimeout?setTimeout:void 0,Me="function"===typeof clearTimeout?clearTimeout:void 0;
function Ne(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}new Set;var Oe=[],Pe=-1;function H(a){0>Pe||(a.current=Oe[Pe],Oe[Pe]=null,Pe--)}function J(a,b){Pe++;Oe[Pe]=a.current;a.current=b}var Qe={},L={current:Qe},M={current:!1},Re=Qe;
function Se(a,b){var c=a.type.contextTypes;if(!c)return Qe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function N(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Te(a){H(M,a);H(L,a)}function Ue(a){H(M,a);H(L,a)}
function Ve(a,b,c){if(L.current!==Qe)throw t(Error(168));J(L,b,a);J(M,c,a)}function We(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw t(Error(108),oc(b)||"Unknown",e);return m({},c,d)}function Xe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Qe;Re=L.current;J(L,b,a);J(M,M.current,a);return!0}
function Ye(a,b,c){var d=a.stateNode;if(!d)throw t(Error(169));c?(b=We(a,b,Re),d.__reactInternalMemoizedMergedChildContext=b,H(M,a),H(L,a),J(L,b,a)):H(M,a);J(M,c,a)}
var Ze=q.unstable_runWithPriority,$e=q.unstable_scheduleCallback,af=q.unstable_cancelCallback,bf=q.unstable_shouldYield,cf=q.unstable_requestPaint,df=q.unstable_now,ef=q.unstable_getCurrentPriorityLevel,ff=q.unstable_ImmediatePriority,hf=q.unstable_UserBlockingPriority,jf=q.unstable_NormalPriority,kf=q.unstable_LowPriority,lf=q.unstable_IdlePriority,mf={},nf=void 0!==cf?cf:function(){},of=null,pf=null,qf=!1,rf=df(),sf=1E4>rf?df:function(){return df()-rf};
function tf(){switch(ef()){case ff:return 99;case hf:return 98;case jf:return 97;case kf:return 96;case lf:return 95;default:throw t(Error(332));}}function uf(a){switch(a){case 99:return ff;case 98:return hf;case 97:return jf;case 96:return kf;case 95:return lf;default:throw t(Error(332));}}function vf(a,b){a=uf(a);return Ze(a,b)}function wf(a,b,c){a=uf(a);return $e(a,b,c)}function xf(a){null===of?(of=[a],pf=$e(ff,yf)):of.push(a);return mf}function O(){null!==pf&&af(pf);yf()}
function yf(){if(!qf&&null!==of){qf=!0;var a=0;try{var b=of;vf(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});of=null}catch(c){throw null!==of&&(of=of.slice(a+1)),$e(ff,O),c;}finally{qf=!1}}}function zf(a,b){if(1073741823===b)return 99;if(1===b)return 95;a=10*(1073741821-b)-10*(1073741821-a);return 0>=a?99:250>=a?98:5250>=a?97:95}function Af(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function Bf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var Cf={current:null},Df=null,Ef=null,Ff=null;function Gf(){Ff=Ef=Df=null}
function Hf(a,b){var c=a.type._context;J(Cf,c._currentValue,a);c._currentValue=b}function If(a){var b=Cf.current;H(Cf,a);a.type._context._currentValue=b}function Jf(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}
function Kf(a,b){Df=a;Ff=Ef=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(Lf=!0),a.firstContext=null)}function Mf(a,b){if(Ff!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Ff=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===Ef){if(null===Df)throw t(Error(308));Ef=b;Df.dependencies={expirationTime:0,firstContext:b,responders:null}}else Ef=Ef.next=b}return a._currentValue}var Nf=!1;
function Of(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Pf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Qf(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Rf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Sf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Of(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Of(a.memoizedState),e=c.updateQueue=Of(c.memoizedState)):d=a.updateQueue=Pf(e):null===e&&(e=c.updateQueue=Pf(d));null===e||d===e?Rf(d,b):null===d.lastUpdate||null===e.lastUpdate?(Rf(d,b),Rf(e,b)):(Rf(d,b),e.lastUpdate=b)}
function Tf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Of(a.memoizedState):Uf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Uf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Pf(b));return b}
function Vf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return m({},d,e);case 2:Nf=!0}return d}
function Wf(a,b,c,d,e){Nf=!1;b=Uf(a,b);for(var f=b.baseState,h=null,g=0,k=b.firstUpdate,l=f;null!==k;){var n=k.expirationTime;n<e?(null===h&&(h=k,f=l),g<n&&(g=n)):(Xf(n,k.suspenseConfig),l=Vf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}n=null;for(k=b.firstCapturedUpdate;null!==k;){var z=k.expirationTime;z<e?(null===n&&(n=k,null===h&&(f=l)),g<z&&(g=z)):(l=Vf(a,b,k,l,c,d),null!==
k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===h&&(b.lastUpdate=null);null===n?b.lastCapturedUpdate=null:a.effectTag|=32;null===h&&null===n&&(f=l);b.baseState=f;b.firstUpdate=h;b.firstCapturedUpdate=n;a.expirationTime=g;a.memoizedState=l}
function Yf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Zf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Zf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Zf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw t(Error(191),c);c.call(d)}a=a.nextEffect}}
var $f=Xb.ReactCurrentBatchConfig,ag=(new aa.Component).refs;function bg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var fg={isMounted:function(a){return(a=a._reactInternalFiber)?2===ld(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=cg(),e=$f.suspense;d=dg(d,a,e);e=Qf(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf(a,e);eg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=cg(),e=$f.suspense;d=dg(d,a,e);e=Qf(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf(a,e);eg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=cg(),d=$f.suspense;
c=dg(c,a,d);d=Qf(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Sf(a,d);eg(a,c)}};function gg(a,b,c,d,e,f,h){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,h):b.prototype&&b.prototype.isPureReactComponent?!jd(c,d)||!jd(e,f):!0}
function hg(a,b,c){var d=!1,e=Qe;var f=b.contextType;"object"===typeof f&&null!==f?f=Mf(f):(e=N(b)?Re:L.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Se(a,e):Qe);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=fg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function ig(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&fg.enqueueReplaceState(b,b.state,null)}
function jg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=ag;var f=b.contextType;"object"===typeof f&&null!==f?e.context=Mf(f):(f=N(b)?Re:L.current,e.context=Se(a,f));f=a.updateQueue;null!==f&&(Wf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(bg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&fg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Wf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var kg=Array.isArray;
function lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;if(c){if(1!==c.tag)throw t(Error(309));d=c.stateNode}if(!d)throw t(Error(147),a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===ag&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw t(Error(284));if(!c._owner)throw t(Error(290),a);}return a}
function mg(a,b){if("textarea"!==a.type)throw t(Error(31),"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
function ng(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=og(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function h(b){a&&null===b.alternate&&(b.effectTag=2);return b}function g(a,b,c,d){if(null===b||6!==b.tag)return b=pg(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=lg(a,b,c),d.return=a,d;d=qg(c.type,c.key,c.props,null,a.mode,d);d.ref=lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=rg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=sg(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function z(a,b,c){if("string"===typeof b||"number"===typeof b)return b=pg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Zb:return c=qg(b.type,b.key,b.props,null,a.mode,c),c.ref=lg(a,null,b),c.return=a,c;case $b:return b=rg(b,a.mode,c),b.return=a,b}if(kg(b)||
mc(b))return b=sg(b,a.mode,c,null),b.return=a,b;mg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:g(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Zb:return c.key===e?c.type===ac?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case $b:return c.key===e?l(a,b,c,d):null}if(kg(c)||mc(c))return null!==e?null:n(a,b,c,d,null);mg(a,c)}return null}function v(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,g(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Zb:return a=a.get(null===d.key?c:d.key)||null,d.type===ac?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case $b:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(kg(d)||mc(d))return a=a.get(c)||null,n(b,a,d,e,null);mg(b,d)}return null}function rb(e,h,g,k){for(var l=null,u=null,n=h,w=h=0,C=null;null!==n&&w<g.length;w++){n.index>w?(C=n,n=null):C=n.sibling;var p=x(e,n,g[w],k);if(null===p){null===n&&(n=C);break}a&&
n&&null===p.alternate&&b(e,n);h=f(p,h,w);null===u?l=p:u.sibling=p;u=p;n=C}if(w===g.length)return c(e,n),l;if(null===n){for(;w<g.length;w++)n=z(e,g[w],k),null!==n&&(h=f(n,h,w),null===u?l=n:u.sibling=n,u=n);return l}for(n=d(e,n);w<g.length;w++)C=v(n,e,w,g[w],k),null!==C&&(a&&null!==C.alternate&&n.delete(null===C.key?w:C.key),h=f(C,h,w),null===u?l=C:u.sibling=C,u=C);a&&n.forEach(function(a){return b(e,a)});return l}function Be(e,h,g,k){var l=mc(g);if("function"!==typeof l)throw t(Error(150));g=l.call(g);
if(null==g)throw t(Error(151));for(var n=l=null,u=h,w=h=0,C=null,p=g.next();null!==u&&!p.done;w++,p=g.next()){u.index>w?(C=u,u=null):C=u.sibling;var r=x(e,u,p.value,k);if(null===r){null===u&&(u=C);break}a&&u&&null===r.alternate&&b(e,u);h=f(r,h,w);null===n?l=r:n.sibling=r;n=r;u=C}if(p.done)return c(e,u),l;if(null===u){for(;!p.done;w++,p=g.next())p=z(e,p.value,k),null!==p&&(h=f(p,h,w),null===n?l=p:n.sibling=p,n=p);return l}for(u=d(e,u);!p.done;w++,p=g.next())p=v(u,e,w,p.value,k),null!==p&&(a&&null!==
p.alternate&&u.delete(null===p.key?w:p.key),h=f(p,h,w),null===n?l=p:n.sibling=p,n=p);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,g){var k="object"===typeof f&&null!==f&&f.type===ac&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Zb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){if(7===k.tag?f.type===ac:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ac?f.props.children:f.props,g);d.ref=lg(a,k,f);d.return=a;a=d;break a}c(a,
k);break}else b(a,k);k=k.sibling}f.type===ac?(d=sg(f.props.children,a.mode,g,f.key),d.return=a,a=d):(g=qg(f.type,f.key,f.props,null,a.mode,g),g.ref=lg(a,d,f),g.return=a,a=g)}return h(a);case $b:a:{for(k=f.key;null!==d;){if(d.key===k){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],g);d.return=a;a=d;break a}c(a,d);break}else b(a,d);d=d.sibling}d=rg(f,a.mode,g);d.return=a;a=d}return h(a)}if("string"===typeof f||
"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,g),d.return=a,a=d):(c(a,d),d=pg(f,a.mode,g),d.return=a,a=d),h(a);if(kg(f))return rb(a,d,f,g);if(mc(f))return Be(a,d,f,g);l&&mg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,t(Error(152),a.displayName||a.name||"Component");}return c(a,d)}}var tg=ng(!0),ug=ng(!1),vg={},wg={current:vg},xg={current:vg},yg={current:vg};function zg(a){if(a===vg)throw t(Error(174));return a}
function Ag(a,b){J(yg,b,a);J(xg,a,a);J(wg,vg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:te(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=te(b,c)}H(wg,a);J(wg,b,a)}function Bg(a){H(wg,a);H(xg,a);H(yg,a)}function Cg(a){zg(yg.current);var b=zg(wg.current);var c=te(b,a.type);b!==c&&(J(xg,a,a),J(wg,c,a))}function Dg(a){xg.current===a&&(H(wg,a),H(xg,a))}var Eg=1,Fg=1,Gg=2,P={current:0};
function Hg(a){for(var b=a;null!==b;){if(13===b.tag){if(null!==b.memoizedState)return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}
var Ig=0,Jg=2,Kg=4,Lg=8,Mg=16,Ng=32,Og=64,Pg=128,Qg=Xb.ReactCurrentDispatcher,Rg=0,Sg=null,Q=null,Tg=null,Ug=null,R=null,Vg=null,Wg=0,Xg=null,Yg=0,Zg=!1,$g=null,ah=0;function bh(){throw t(Error(321));}function ch(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!hd(a[c],b[c]))return!1;return!0}
function dh(a,b,c,d,e,f){Rg=f;Sg=b;Tg=null!==a?a.memoizedState:null;Qg.current=null===Tg?eh:fh;b=c(d,e);if(Zg){do Zg=!1,ah+=1,Tg=null!==a?a.memoizedState:null,Vg=Ug,Xg=R=Q=null,Qg.current=fh,b=c(d,e);while(Zg);$g=null;ah=0}Qg.current=hh;a=Sg;a.memoizedState=Ug;a.expirationTime=Wg;a.updateQueue=Xg;a.effectTag|=Yg;a=null!==Q&&null!==Q.next;Rg=0;Vg=R=Ug=Tg=Q=Sg=null;Wg=0;Xg=null;Yg=0;if(a)throw t(Error(300));return b}
function ih(){Qg.current=hh;Rg=0;Vg=R=Ug=Tg=Q=Sg=null;Wg=0;Xg=null;Yg=0;Zg=!1;$g=null;ah=0}function jh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===R?Ug=R=a:R=R.next=a;return R}function kh(){if(null!==Vg)R=Vg,Vg=R.next,Q=Tg,Tg=null!==Q?Q.next:null;else{if(null===Tg)throw t(Error(310));Q=Tg;var a={memoizedState:Q.memoizedState,baseState:Q.baseState,queue:Q.queue,baseUpdate:Q.baseUpdate,next:null};R=null===R?Ug=a:R.next=a;Tg=Q.next}return R}
function lh(a,b){return"function"===typeof b?b(a):b}
function mh(a){var b=kh(),c=b.queue;if(null===c)throw t(Error(311));c.lastRenderedReducer=a;if(0<ah){var d=c.dispatch;if(null!==$g){var e=$g.get(c);if(void 0!==e){$g.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var h=b.baseUpdate;f=b.baseState;null!==h?(null!==d&&(d.next=null),d=h.next):d=null!==d?d.next:null;if(null!==
d){var g=e=null,k=d,l=!1;do{var n=k.expirationTime;n<Rg?(l||(l=!0,g=h,e=f),n>Wg&&(Wg=n)):(Xf(n,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));h=k;k=k.next}while(null!==k&&k!==d);l||(g=h,e=f);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate=g;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function nh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===Xg?(Xg={lastEffect:null},Xg.lastEffect=a.next=a):(b=Xg.lastEffect,null===b?Xg.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,Xg.lastEffect=a));return a}function oh(a,b,c,d){var e=jh();Yg|=a;e.memoizedState=nh(b,c,void 0,void 0===d?null:d)}
function ph(a,b,c,d){var e=kh();d=void 0===d?null:d;var f=void 0;if(null!==Q){var h=Q.memoizedState;f=h.destroy;if(null!==d&&ch(d,h.deps)){nh(Ig,c,f,d);return}}Yg|=a;e.memoizedState=nh(b,c,f,d)}function qh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function rh(){}
function sh(a,b,c){if(!(25>ah))throw t(Error(301));var d=a.alternate;if(a===Sg||null!==d&&d===Sg)if(Zg=!0,a={expirationTime:Rg,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===$g&&($g=new Map),c=$g.get(b),void 0===c)$g.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=cg(),f=$f.suspense;e=dg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var h=b.last;if(null===h)f.next=f;else{var g=h.next;null!==g&&
(f.next=g);h.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(hd(l,k))return}catch(n){}finally{}eg(a,e)}}
var hh={readContext:Mf,useCallback:bh,useContext:bh,useEffect:bh,useImperativeHandle:bh,useLayoutEffect:bh,useMemo:bh,useReducer:bh,useRef:bh,useState:bh,useDebugValue:bh,useResponder:bh},eh={readContext:Mf,useCallback:function(a,b){jh().memoizedState=[a,void 0===b?null:b];return a},useContext:Mf,useEffect:function(a,b){return oh(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return oh(4,Kg|Ng,qh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return oh(4,
Kg|Ng,a,b)},useMemo:function(a,b){var c=jh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=jh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=sh.bind(null,Sg,a);return[d.memoizedState,a]},useRef:function(a){var b=jh();a={current:a};return b.memoizedState=a},useState:function(a){var b=jh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue=
{last:null,dispatch:null,lastRenderedReducer:lh,lastRenderedState:a};a=a.dispatch=sh.bind(null,Sg,a);return[b.memoizedState,a]},useDebugValue:rh,useResponder:kd},fh={readContext:Mf,useCallback:function(a,b){var c=kh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ch(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:Mf,useEffect:function(a,b){return ph(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ph(4,Kg|Ng,qh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return ph(4,Kg|Ng,a,b)},useMemo:function(a,b){var c=kh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ch(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:mh,useRef:function(){return kh().memoizedState},useState:function(a){return mh(lh,a)},useDebugValue:rh,useResponder:kd},th=null,uh=null,vh=!1;
function wh(a,b){var c=xh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function yh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function zh(a){if(vh){var b=uh;if(b){var c=b;if(!yh(a,b)){b=Ne(c.nextSibling);if(!b||!yh(a,b)){a.effectTag|=2;vh=!1;th=a;return}wh(th,c)}th=a;uh=Ne(b.firstChild)}else a.effectTag|=2,vh=!1,th=a}}function Ah(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;th=a}
function Bh(a){if(a!==th)return!1;if(!vh)return Ah(a),vh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ke(b,a.memoizedProps))for(b=uh;b;)wh(a,b),b=Ne(b.nextSibling);Ah(a);uh=th?Ne(a.stateNode.nextSibling):null;return!0}function Ch(){uh=th=null;vh=!1}var Dh=Xb.ReactCurrentOwner,Lf=!1;function S(a,b,c,d){b.child=null===a?ug(b,null,c,d):tg(b,a.child,c,d)}
function Eh(a,b,c,d,e){c=c.render;var f=b.ref;Kf(b,e);d=dh(a,b,c,d,f,e);if(null!==a&&!Lf)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Fh(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Gh(a,b,c,d,e,f){if(null===a){var h=c.type;if("function"===typeof h&&!Hh(h)&&void 0===h.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=h,Ih(a,b,h,d,e,f);a=qg(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}h=a.child;if(e<f&&(e=h.memoizedProps,c=c.compare,c=null!==c?c:jd,c(e,d)&&a.ref===b.ref))return Fh(a,b,f);b.effectTag|=1;a=og(h,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Ih(a,b,c,d,e,f){return null!==a&&jd(a.memoizedProps,d)&&a.ref===b.ref&&(Lf=!1,e<f)?Fh(a,b,f):Jh(a,b,c,d,f)}function Kh(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Jh(a,b,c,d,e){var f=N(c)?Re:L.current;f=Se(b,f);Kf(b,e);c=dh(a,b,c,d,f,e);if(null!==a&&!Lf)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Fh(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Lh(a,b,c,d,e){if(N(c)){var f=!0;Xe(b)}else f=!1;Kf(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),hg(b,c,d,e),jg(b,c,d,e),d=!0;else if(null===a){var h=b.stateNode,g=b.memoizedProps;h.props=g;var k=h.context,l=c.contextType;"object"===typeof l&&null!==l?l=Mf(l):(l=N(c)?Re:L.current,l=Se(b,l));var n=c.getDerivedStateFromProps,z="function"===typeof n||"function"===typeof h.getSnapshotBeforeUpdate;z||"function"!==typeof h.UNSAFE_componentWillReceiveProps&&
"function"!==typeof h.componentWillReceiveProps||(g!==d||k!==l)&&ig(b,h,d,l);Nf=!1;var x=b.memoizedState;k=h.state=x;var v=b.updateQueue;null!==v&&(Wf(b,v,d,h,e),k=b.memoizedState);g!==d||x!==k||M.current||Nf?("function"===typeof n&&(bg(b,c,n,d),k=b.memoizedState),(g=Nf||gg(b,c,g,d,x,k,l))?(z||"function"!==typeof h.UNSAFE_componentWillMount&&"function"!==typeof h.componentWillMount||("function"===typeof h.componentWillMount&&h.componentWillMount(),"function"===typeof h.UNSAFE_componentWillMount&&
h.UNSAFE_componentWillMount()),"function"===typeof h.componentDidMount&&(b.effectTag|=4)):("function"===typeof h.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),h.props=d,h.state=k,h.context=l,d=g):("function"===typeof h.componentDidMount&&(b.effectTag|=4),d=!1)}else h=b.stateNode,g=b.memoizedProps,h.props=b.type===b.elementType?g:Af(b.type,g),k=h.context,l=c.contextType,"object"===typeof l&&null!==l?l=Mf(l):(l=N(c)?Re:L.current,l=Se(b,l)),n=c.getDerivedStateFromProps,(z=
"function"===typeof n||"function"===typeof h.getSnapshotBeforeUpdate)||"function"!==typeof h.UNSAFE_componentWillReceiveProps&&"function"!==typeof h.componentWillReceiveProps||(g!==d||k!==l)&&ig(b,h,d,l),Nf=!1,k=b.memoizedState,x=h.state=k,v=b.updateQueue,null!==v&&(Wf(b,v,d,h,e),x=b.memoizedState),g!==d||k!==x||M.current||Nf?("function"===typeof n&&(bg(b,c,n,d),x=b.memoizedState),(n=Nf||gg(b,c,g,d,k,x,l))?(z||"function"!==typeof h.UNSAFE_componentWillUpdate&&"function"!==typeof h.componentWillUpdate||
("function"===typeof h.componentWillUpdate&&h.componentWillUpdate(d,x,l),"function"===typeof h.UNSAFE_componentWillUpdate&&h.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof h.componentDidUpdate&&(b.effectTag|=4),"function"===typeof h.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof h.componentDidUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof h.getSnapshotBeforeUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=x),h.props=d,h.state=x,h.context=l,d=n):("function"!==typeof h.componentDidUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof h.getSnapshotBeforeUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return Mh(a,b,c,d,f,e)}
function Mh(a,b,c,d,e,f){Kh(a,b);var h=0!==(b.effectTag&64);if(!d&&!h)return e&&Ye(b,c,!1),Fh(a,b,f);d=b.stateNode;Dh.current=b;var g=h&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&h?(b.child=tg(b,a.child,null,f),b.child=tg(b,null,g,f)):S(a,b,g,f);b.memoizedState=d.state;e&&Ye(b,c,!0);return b.child}function Nh(a){var b=a.stateNode;b.pendingContext?Ve(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ve(a,b.context,!1);Ag(a,b.containerInfo)}
var Oh={};
function Ph(a,b,c){var d=b.mode,e=b.pendingProps,f=P.current,h=null,g=!1,k;(k=0!==(b.effectTag&64))||(k=0!==(f&Gg)&&(null===a||null!==a.memoizedState));k?(h=Oh,g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=Fg);f&=Eg;J(P,f,b);if(null===a)if(g){e=e.fallback;a=sg(null,d,0,null);a.return=b;if(0===(b.mode&2))for(g=null!==b.memoizedState?b.child.child:b.child,a.child=g;null!==g;)g.return=a,g=g.sibling;c=sg(e,d,c,null);c.return=b;a.sibling=
c;d=a}else d=c=ug(b,null,e.children,c);else{if(null!==a.memoizedState)if(f=a.child,d=f.sibling,g){e=e.fallback;c=og(f,f.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==f.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;e=og(d,e,d.expirationTime);e.return=b;c.sibling=e;d=c;c.childExpirationTime=0;c=e}else d=c=tg(b,f.child,e.children,c);else if(f=a.child,g){g=e.fallback;e=sg(null,d,0,null);e.return=b;e.child=f;null!==f&&(f.return=e);if(0===(b.mode&
2))for(f=null!==b.memoizedState?b.child.child:b.child,e.child=f;null!==f;)f.return=e,f=f.sibling;c=sg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;d=e;e.childExpirationTime=0}else c=d=tg(b,f,e.children,c);b.stateNode=a.stateNode}b.memoizedState=h;b.child=d;return c}function Qh(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.last=d,f.tail=c,f.tailExpiration=0,f.tailMode=e)}
function Rh(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;S(a,b,d.children,c);d=P.current;if(0!==(d&Gg))d=d&Eg|Gg,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag){if(null!==a.memoizedState){a.expirationTime<c&&(a.expirationTime=c);var h=a.alternate;null!==h&&h.expirationTime<c&&(h.expirationTime=c);Jf(a.return,c)}}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===
b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=Eg}J(P,d,b);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)d=c.alternate,null!==d&&null===Hg(d)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Qh(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){d=e.alternate;if(null!==d&&null===Hg(d)){b.child=e;break}d=e.sibling;e.sibling=c;c=e;e=d}Qh(b,!0,c,null,f);break;case "together":Qh(b,
!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function Fh(a,b,c){null!==a&&(b.dependencies=a.dependencies);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw t(Error(153));if(null!==b.child){a=b.child;c=og(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=og(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function Sh(a){a.effectTag|=4}
var Th=void 0,Uh=void 0,Vh=void 0,Wh=void 0;Th=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(20===c.tag)a.appendChild(c.stateNode.instance);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Uh=function(){};
Vh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var h=b.stateNode;zg(wg.current);a=null;switch(c){case "input":f=Bc(h,f);d=Bc(h,d);a=[];break;case "option":f=le(h,f);d=le(h,d);a=[];break;case "select":f=m({},f,{value:void 0});d=m({},d,{value:void 0});a=[];break;case "textarea":f=ne(h,f);d=ne(h,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(h.onclick=Ge)}De(c,d);h=c=void 0;var g=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(h in k)k.hasOwnProperty(h)&&(g||(g={}),g[h]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ia.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(h in k)!k.hasOwnProperty(h)||l&&l.hasOwnProperty(h)||(g||(g={}),g[h]="");for(h in l)l.hasOwnProperty(h)&&k[h]!==l[h]&&(g||
(g={}),g[h]=l[h])}else g||(a||(a=[]),a.push(c,g)),g=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ia.hasOwnProperty(c)?(null!=l&&Fe(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}g&&(a=a||[]).push("style",g);e=a;(b.updateQueue=e)&&Sh(b)}};Wh=function(a,b,c,d){c!==d&&Sh(b)};
function $h(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function ai(a){switch(a.tag){case 1:N(a.type)&&Te(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:Bg(a);Ue(a);b=a.effectTag;if(0!==(b&64))throw t(Error(285));a.effectTag=b&-2049|64;return a;case 5:return Dg(a),null;case 13:return H(P,a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 19:return H(P,a),null;case 4:return Bg(a),null;case 10:return If(a),null;default:return null}}function bi(a,b){return{value:a,source:b,stack:pc(b)}}
var ci="function"===typeof WeakSet?WeakSet:Set;function di(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=pc(c));null!==c&&oc(c.type);b=b.value;null!==a&&1===a.tag&&oc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function ei(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){fi(a,c)}}function gi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){fi(a,c)}else b.current=null}
function hi(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Ig){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Ig&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function ii(a,b){"function"===typeof ji&&ji(a);switch(a.tag){case 0:case 11:case 14:case 15:var c=a.updateQueue;if(null!==c&&(c=c.lastEffect,null!==c)){var d=c.next;vf(97<b?97:b,function(){var b=d;do{var c=b.destroy;if(void 0!==c){var h=a;try{c()}catch(g){fi(h,g)}}b=b.next}while(b!==d)})}break;case 1:gi(a);b=a.stateNode;"function"===typeof b.componentWillUnmount&&ei(a,b);break;case 5:gi(a);break;case 4:ki(a,b)}}
function li(a,b){for(var c=a;;)if(ii(c,b),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}function mi(a){return 5===a.tag||3===a.tag||4===a.tag}
function ni(a){a:{for(var b=a.return;null!==b;){if(mi(b)){var c=b;break a}b=b.return}throw t(Error(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw t(Error(161));}c.effectTag&16&&(we(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||mi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f||20===e.tag){var h=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var g=h;h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(h,c);else d?(g=b,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=Ge)):
b.appendChild(h)}else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function ki(a,b){for(var c=a,d=!1,e=void 0,f=void 0;;){if(!d){d=c.return;a:for(;;){if(null===d)throw t(Error(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag)if(li(c,b),f){var h=e,g=c.stateNode;8===h.nodeType?h.parentNode.removeChild(g):h.removeChild(g)}else e.removeChild(c.stateNode);else if(20===c.tag)g=c.stateNode.instance,li(c,b),f?(h=e,8===h.nodeType?h.parentNode.removeChild(g):
h.removeChild(g)):e.removeChild(g);else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(ii(c,b),null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function oi(a,b){switch(b.tag){case 0:case 11:case 14:case 15:hi(Kg,Lg,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ga]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Dc(c,d);Ee(a,e);b=Ee(a,d);for(e=0;e<f.length;e+=2){var h=f[e],g=f[e+1];"style"===h?Ae(c,g):"dangerouslySetInnerHTML"===h?ve(c,g):"children"===h?we(c,g):zc(c,h,g,b)}switch(a){case "input":Ec(c,d);break;case "textarea":pe(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?me(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?me(c,!!d.multiple,d.defaultValue,!0):me(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw t(Error(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,pi=sf());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=
f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ze("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===
a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}qi(b);break;case 19:qi(b);break;case 17:break;case 20:break;default:throw t(Error(163));}}function qi(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new ci);b.forEach(function(b){var d=ri.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var si="function"===typeof WeakMap?WeakMap:Map;
function ti(a,b,c){c=Qf(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){ui||(ui=!0,vi=d);di(a,b)};return c}
function wi(a,b,c){c=Qf(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){di(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===xi?xi=new Set([this]):xi.add(this),di(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var yi=Math.ceil,zi=Xb.ReactCurrentDispatcher,Ai=Xb.ReactCurrentOwner,T=0,Bi=8,Ci=16,Di=32,Ei=0,Fi=1,Gi=2,Hi=3,Ii=4,U=T,Ji=null,V=null,W=0,X=Ei,Ki=1073741823,Li=1073741823,Mi=null,Ni=!1,pi=0,Oi=500,Y=null,ui=!1,vi=null,xi=null,Pi=!1,Qi=null,Ri=90,Si=0,Ti=null,Ui=0,Vi=null,Wi=0;function cg(){return(U&(Ci|Di))!==T?1073741821-(sf()/10|0):0!==Wi?Wi:Wi=1073741821-(sf()/10|0)}
function dg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=tf();if(0===(b&4))return 99===d?1073741823:1073741822;if((U&Ci)!==T)return W;if(null!==c)a=1073741821-25*(((1073741821-a+(c.timeoutMs|0||5E3)/10)/25|0)+1);else switch(d){case 99:a=1073741823;break;case 98:a=1073741821-10*(((1073741821-a+15)/10|0)+1);break;case 97:case 96:a=1073741821-25*(((1073741821-a+500)/25|0)+1);break;case 95:a=1;break;default:throw t(Error(326));}null!==Ji&&a===W&&--a;return a}var Xi=0;
function eg(a,b){if(50<Ui)throw Ui=0,Vi=null,t(Error(185));a=Yi(a,b);if(null!==a){a.pingTime=0;var c=tf();if(1073741823===b)if((U&Bi)!==T&&(U&(Ci|Di))===T)for(var d=Z(a,1073741823,!0);null!==d;)d=d(!0);else Zi(a,99,1073741823),U===T&&O();else Zi(a,c,b);(U&4)===T||98!==c&&99!==c||(null===Ti?Ti=new Map([[a,b]]):(c=Ti.get(a),(void 0===c||c>b)&&Ti.set(a,b)))}}
function Yi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(b>e.firstPendingTime&&(e.firstPendingTime=b),a=e.lastPendingTime,0===a||b<a)&&(e.lastPendingTime=
b);return e}function Zi(a,b,c){if(a.callbackExpirationTime<c){var d=a.callbackNode;null!==d&&d!==mf&&af(d);a.callbackExpirationTime=c;1073741823===c?a.callbackNode=xf($i.bind(null,a,Z.bind(null,a,c))):(d=null,1!==c&&(d={timeout:10*(1073741821-c)-sf()}),a.callbackNode=wf(b,$i.bind(null,a,Z.bind(null,a,c)),d))}}function $i(a,b,c){var d=a.callbackNode,e=null;try{return e=b(c),null!==e?$i.bind(null,a,e):null}finally{null===e&&d===a.callbackNode&&(a.callbackNode=null,a.callbackExpirationTime=0)}}
function aj(){(U&(1|Ci|Di))===T&&(bj(),cj())}function dj(a,b){var c=a.firstBatch;return null!==c&&c._defer&&c._expirationTime>=b?(wf(97,function(){c._onComplete();return null}),!0):!1}function bj(){if(null!==Ti){var a=Ti;Ti=null;a.forEach(function(a,c){xf(Z.bind(null,c,a))});O()}}function ej(a,b){var c=U;U|=1;try{return a(b)}finally{U=c,U===T&&O()}}function fj(a,b,c,d){var e=U;U|=4;try{return vf(98,a.bind(null,b,c,d))}finally{U=e,U===T&&O()}}
function gj(a,b){var c=U;U&=-2;U|=Bi;try{return a(b)}finally{U=c,U===T&&O()}}
function hj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Me(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Te(d);break;case 3:Bg(d);Ue(d);break;case 5:Dg(d);break;case 4:Bg(d);break;case 13:H(P,d);break;case 19:H(P,d);break;case 10:If(d)}c=c.return}Ji=a;V=og(a.current,null,b);W=b;X=Ei;Li=Ki=1073741823;Mi=null;Ni=!1}
function Z(a,b,c){if((U&(Ci|Di))!==T)throw t(Error(327));if(a.firstPendingTime<b)return null;if(c&&a.finishedExpirationTime===b)return ij.bind(null,a);cj();if(a!==Ji||b!==W)hj(a,b);else if(X===Hi)if(Ni)hj(a,b);else{var d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d)}if(null!==V){d=U;U|=Ci;var e=zi.current;null===e&&(e=hh);zi.current=hh;if(c){if(1073741823!==b){var f=cg();if(f<b)return U=d,Gf(),zi.current=e,Z.bind(null,a,f)}}else Wi=0;do try{if(c)for(;null!==V;)V=jj(V);else for(;null!==V&&!bf();)V=
jj(V);break}catch(rb){Gf();ih();f=V;if(null===f||null===f.return)throw hj(a,b),U=d,rb;a:{var h=a,g=f.return,k=f,l=rb,n=W;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===typeof l&&"function"===typeof l.then){var z=l,x=0!==(P.current&Fg);l=g;do{var v;if(v=13===l.tag)null!==l.memoizedState?v=!1:(v=l.memoizedProps,v=void 0===v.fallback?!1:!0!==v.unstable_avoidThisFallback?!0:x?!1:!0);if(v){g=l.updateQueue;null===g?(g=new Set,g.add(z),l.updateQueue=g):g.add(z);if(0===(l.mode&
2)){l.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(n=Qf(1073741823,null),n.tag=2,Sf(k,n)));k.expirationTime=1073741823;break a}k=h;h=n;x=k.pingCache;null===x?(x=k.pingCache=new si,g=new Set,x.set(z,g)):(g=x.get(z),void 0===g&&(g=new Set,x.set(z,g)));g.has(h)||(g.add(h),k=kj.bind(null,k,z,h),z.then(k,k));l.effectTag|=2048;l.expirationTime=n;break a}l=l.return}while(null!==l);l=Error((oc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
pc(k))}X!==Ii&&(X=Fi);l=bi(l,k);k=g;do{switch(k.tag){case 3:k.effectTag|=2048;k.expirationTime=n;n=ti(k,l,n);Tf(k,n);break a;case 1:if(z=l,h=k.type,g=k.stateNode,0===(k.effectTag&64)&&("function"===typeof h.getDerivedStateFromError||null!==g&&"function"===typeof g.componentDidCatch&&(null===xi||!xi.has(g)))){k.effectTag|=2048;k.expirationTime=n;n=wi(k,z,n);Tf(k,n);break a}}k=k.return}while(null!==k)}V=lj(f)}while(1);U=d;Gf();zi.current=e;if(null!==V)return Z.bind(null,a,b)}a.finishedWork=a.current.alternate;
a.finishedExpirationTime=b;if(dj(a,b))return null;Ji=null;switch(X){case Ei:throw t(Error(328));case Fi:return d=a.lastPendingTime,d<b?Z.bind(null,a,d):c?ij.bind(null,a):(hj(a,b),xf(Z.bind(null,a,b)),null);case Gi:if(1073741823===Ki&&!c&&(c=pi+Oi-sf(),10<c)){if(Ni)return hj(a,b),Z.bind(null,a,b);d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d);a.timeoutHandle=Le(ij.bind(null,a),c);return null}return ij.bind(null,a);case Hi:if(!c){if(Ni)return hj(a,b),Z.bind(null,a,b);c=a.lastPendingTime;if(c<b)return Z.bind(null,
a,c);1073741823!==Li?c=10*(1073741821-Li)-sf():1073741823===Ki?c=0:(c=10*(1073741821-Ki)-5E3,d=sf(),b=10*(1073741821-b)-d,c=d-c,0>c&&(c=0),c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>c?4320:1960*yi(c/1960))-c,b<c&&(c=b));if(10<c)return a.timeoutHandle=Le(ij.bind(null,a),c),null}return ij.bind(null,a);case Ii:return!c&&1073741823!==Ki&&null!==Mi&&(d=Ki,e=Mi,b=e.busyMinDurationMs|0,0>=b?b=0:(c=e.busyDelayMs|0,d=sf()-(10*(1073741821-d)-(e.timeoutMs|0||5E3)),b=d<=c?0:c+b-d),10<b)?(a.timeoutHandle=
Le(ij.bind(null,a),b),null):ij.bind(null,a);default:throw t(Error(329));}}function Xf(a,b){a<Ki&&1<a&&(Ki=a);null!==b&&a<Li&&1<a&&(Li=a,Mi=b)}function jj(a){var b=mj(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=lj(a));Ai.current=null;return b}
function lj(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&1024)){a:{var c=b;b=V;var d=W,e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:N(b.type)&&Te(b);break;case 3:Bg(b);Ue(b);d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===c||null===c.child)Bh(b),b.effectTag&=-3;Uh(b);break;case 5:Dg(b);d=zg(yg.current);var f=b.type;if(null!==c&&null!=b.stateNode)Vh(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var h=
zg(wg.current);if(Bh(b)){c=b;e=void 0;f=c.stateNode;var g=c.type,k=c.memoizedProps;f[Fa]=c;f[Ga]=k;switch(g){case "iframe":case "object":case "embed":G("load",f);break;case "video":case "audio":for(var l=0;l<bb.length;l++)G(bb[l],f);break;case "source":G("error",f);break;case "img":case "image":case "link":G("error",f);G("load",f);break;case "form":G("reset",f);G("submit",f);break;case "details":G("toggle",f);break;case "input":Cc(f,k);G("invalid",f);Fe(d,"onChange");break;case "select":f._wrapperState=
{wasMultiple:!!k.multiple};G("invalid",f);Fe(d,"onChange");break;case "textarea":oe(f,k),G("invalid",f),Fe(d,"onChange")}De(g,k);l=null;for(e in k)k.hasOwnProperty(e)&&(h=k[e],"children"===e?"string"===typeof h?f.textContent!==h&&(l=["children",h]):"number"===typeof h&&f.textContent!==""+h&&(l=["children",""+h]):ia.hasOwnProperty(e)&&null!=h&&Fe(d,e));switch(g){case "input":Vb(f);Gc(f,k,!0);break;case "textarea":Vb(f);qe(f,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
(f.onclick=Ge)}d=l;c.updateQueue=d;null!==d&&Sh(b)}else{k=f;c=e;g=b;l=9===d.nodeType?d:d.ownerDocument;h===re.html&&(h=se(k));h===re.html?"script"===k?(k=l.createElement("div"),k.innerHTML="<script>\x3c/script>",l=k.removeChild(k.firstChild)):"string"===typeof c.is?l=l.createElement(k,{is:c.is}):(l=l.createElement(k),"select"===k&&(k=l,c.multiple?k.multiple=!0:c.size&&(k.size=c.size))):l=l.createElementNS(h,k);k=l;k[Fa]=g;k[Ga]=c;c=k;Th(c,b,!1,!1);g=c;var n=d,z=Ee(f,e);switch(f){case "iframe":case "object":case "embed":G("load",
g);d=e;break;case "video":case "audio":for(d=0;d<bb.length;d++)G(bb[d],g);d=e;break;case "source":G("error",g);d=e;break;case "img":case "image":case "link":G("error",g);G("load",g);d=e;break;case "form":G("reset",g);G("submit",g);d=e;break;case "details":G("toggle",g);d=e;break;case "input":Cc(g,e);d=Bc(g,e);G("invalid",g);Fe(n,"onChange");break;case "option":d=le(g,e);break;case "select":g._wrapperState={wasMultiple:!!e.multiple};d=m({},e,{value:void 0});G("invalid",g);Fe(n,"onChange");break;case "textarea":oe(g,
e);d=ne(g,e);G("invalid",g);Fe(n,"onChange");break;default:d=e}De(f,d);k=void 0;l=f;h=g;var x=d;for(k in x)if(x.hasOwnProperty(k)){var v=x[k];"style"===k?Ae(h,v):"dangerouslySetInnerHTML"===k?(v=v?v.__html:void 0,null!=v&&ve(h,v)):"children"===k?"string"===typeof v?("textarea"!==l||""!==v)&&we(h,v):"number"===typeof v&&we(h,""+v):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ia.hasOwnProperty(k)?null!=v&&Fe(n,k):null!=v&&zc(h,k,v,z))}switch(f){case "input":Vb(g);
Gc(g,e,!1);break;case "textarea":Vb(g);qe(g,e);break;case "option":null!=e.value&&g.setAttribute("value",""+Ac(e.value));break;case "select":d=g;g=e;d.multiple=!!g.multiple;k=g.value;null!=k?me(d,!!g.multiple,k,!1):null!=g.defaultValue&&me(d,!!g.multiple,g.defaultValue,!0);break;default:"function"===typeof d.onClick&&(g.onclick=Ge)}Je(f,e)&&Sh(b);b.stateNode=c}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw t(Error(166));break;case 6:if(c&&null!=b.stateNode)Wh(c,b,c.memoizedProps,
e);else{if("string"!==typeof e&&null===b.stateNode)throw t(Error(166));c=zg(yg.current);zg(wg.current);Bh(b)?(d=b.stateNode,c=b.memoizedProps,d[Fa]=b,d.nodeValue!==c&&Sh(b)):(d=b,c=(9===c.nodeType?c:c.ownerDocument).createTextNode(e),c[Fa]=b,d.stateNode=c)}break;case 11:break;case 13:H(P,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}d=null!==e;e=!1;null===c?Bh(b):(f=c.memoizedState,e=null!==f,d||null===f||(f=c.child.sibling,null!==f&&(g=b.firstEffect,null!==g?(b.firstEffect=
f,f.nextEffect=g):(b.firstEffect=b.lastEffect=f,f.nextEffect=null),f.effectTag=8)));if(d&&!e&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&Fg))X===Ei&&(X=Gi);else if(X===Ei||X===Gi)X=Hi;if(d||e)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Bg(b);Uh(b);break;case 10:If(b);break;case 9:break;case 14:break;case 17:N(b.type)&&Te(b);break;case 18:break;case 19:H(P,b);e=b.memoizedState;if(null===e)break;f=0!==(b.effectTag&64);g=e.rendering;
if(null===g)if(f)$h(e,!1);else{if(X!==Ei||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){g=Hg(c);if(null!==g){b.effectTag|=64;$h(e,!1);c=g.updateQueue;null!==c&&(b.updateQueue=c,b.effectTag|=4);b.firstEffect=b.lastEffect=null;for(c=b.child;null!==c;)e=c,f=d,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,g=e.alternate,null===g?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=
g.childExpirationTime,e.expirationTime=g.expirationTime,e.child=g.child,e.memoizedProps=g.memoizedProps,e.memoizedState=g.memoizedState,e.updateQueue=g.updateQueue,f=g.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),c=c.sibling;J(P,P.current&Eg|Gg,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=Hg(g),null!==c){if(b.effectTag|=64,f=!0,$h(e,!0),null===e.tail&&"hidden"===e.tailMode){d=c.updateQueue;null!==d&&(b.updateQueue=
d,b.effectTag|=4);b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else sf()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,$h(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(g.sibling=b.child,b.child=g):(d=e.last,null!==d?d.sibling=g:b.child=g,e.last=g)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=sf()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=b.lastEffect;d.sibling=null;c=P.current;c=f?c&Eg|Gg:c&Eg;J(P,c,b);b=d;break a}break;case 20:break;
default:throw t(Error(156));}b=null}d=V;if(1===W||1!==d.childExpirationTime){c=0;for(e=d.child;null!==e;)f=e.expirationTime,g=e.childExpirationTime,f>c&&(c=f),g>c&&(c=g),e=e.sibling;d.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&1024)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,
a.lastEffect=V))}else{b=ai(V,W);if(null!==b)return b.effectTag&=1023,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=1024)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===Ei&&(X=Ii);return null}function ij(a){var b=tf();vf(99,nj.bind(null,a,b));null!==Qi&&wf(97,function(){cj();return null});return null}
function nj(a,b){cj();if((U&(Ci|Di))!==T)throw t(Error(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw t(Error(177));a.callbackNode=null;a.callbackExpirationTime=0;var e=c.expirationTime,f=c.childExpirationTime;e=f>e?f:e;a.firstPendingTime=e;e<a.lastPendingTime&&(a.lastPendingTime=e);a===Ji&&(V=Ji=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;
if(null!==e){f=U;U|=Di;Ai.current=null;He=Qd;var h=ae();if(be(h)){if("selectionStart"in h)var g={start:h.selectionStart,end:h.selectionEnd};else a:{g=(g=h.ownerDocument)&&g.defaultView||window;var k=g.getSelection&&g.getSelection();if(k&&0!==k.rangeCount){g=k.anchorNode;var l=k.anchorOffset,n=k.focusNode;k=k.focusOffset;try{g.nodeType,n.nodeType}catch(zb){g=null;break a}var z=0,x=-1,v=-1,rb=0,Be=0,u=h,w=null;b:for(;;){for(var C;;){u!==g||0!==l&&3!==u.nodeType||(x=z+l);u!==n||0!==k&&3!==u.nodeType||
(v=z+k);3===u.nodeType&&(z+=u.nodeValue.length);if(null===(C=u.firstChild))break;w=u;u=C}for(;;){if(u===h)break b;w===g&&++rb===l&&(x=z);w===n&&++Be===k&&(v=z);if(null!==(C=u.nextSibling))break;u=w;w=u.parentNode}u=C}g=-1===x||-1===v?null:{start:x,end:v}}else g=null}g=g||{start:0,end:0}}else g=null;Ie={focusedElem:h,selectionRange:g};Qd=!1;Y=e;do try{for(;null!==Y;){if(0!==(Y.effectTag&256)){var I=Y.alternate;h=Y;switch(h.tag){case 0:case 11:case 15:hi(Jg,Ig,h);break;case 1:if(h.effectTag&256&&null!==
I){var E=I.memoizedProps,ua=I.memoizedState,gh=h.stateNode,oj=gh.getSnapshotBeforeUpdate(h.elementType===h.type?E:Af(h.type,E),ua);gh.__reactInternalSnapshotBeforeUpdate=oj}break;case 3:case 5:case 6:case 4:case 17:break;default:throw t(Error(163));}}Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));fi(Y,zb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(I=b;null!==Y;){var A=Y.effectTag;A&16&&we(Y.stateNode,"");if(A&128){var p=Y.alternate;if(null!==p){var r=p.ref;null!==r&&("function"===typeof r?
r(null):r.current=null)}}switch(A&14){case 2:ni(Y);Y.effectTag&=-3;break;case 6:ni(Y);Y.effectTag&=-3;oi(Y.alternate,Y);break;case 4:oi(Y.alternate,Y);break;case 8:E=Y;ki(E,I);E.return=null;E.child=null;E.memoizedState=null;E.updateQueue=null;E.dependencies=null;var K=E.alternate;null!==K&&(K.return=null,K.child=null,K.memoizedState=null,K.updateQueue=null,K.dependencies=null)}Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));fi(Y,zb);Y=Y.nextEffect}while(null!==Y);r=Ie;p=ae();A=r.focusedElem;
I=r.selectionRange;if(p!==A&&A&&A.ownerDocument&&$d(A.ownerDocument.documentElement,A)){null!==I&&be(A)&&(p=I.start,r=I.end,void 0===r&&(r=p),"selectionStart"in A?(A.selectionStart=p,A.selectionEnd=Math.min(r,A.value.length)):(r=(p=A.ownerDocument||document)&&p.defaultView||window,r.getSelection&&(r=r.getSelection(),E=A.textContent.length,K=Math.min(I.start,E),I=void 0===I.end?K:Math.min(I.end,E),!r.extend&&K>I&&(E=I,I=K,K=E),E=Zd(A,K),ua=Zd(A,I),E&&ua&&(1!==r.rangeCount||r.anchorNode!==E.node||r.anchorOffset!==
E.offset||r.focusNode!==ua.node||r.focusOffset!==ua.offset)&&(p=p.createRange(),p.setStart(E.node,E.offset),r.removeAllRanges(),K>I?(r.addRange(p),r.extend(ua.node,ua.offset)):(p.setEnd(ua.node,ua.offset),r.addRange(p))))));p=[];for(r=A;r=r.parentNode;)1===r.nodeType&&p.push({element:r,left:r.scrollLeft,top:r.scrollTop});"function"===typeof A.focus&&A.focus();for(A=0;A<p.length;A++)r=p[A],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}Ie=null;Qd=!!He;He=null;a.current=c;Y=e;do try{for(A=d;null!==
Y;){var $a=Y.effectTag;if($a&36){var nc=Y.alternate;p=Y;r=A;switch(p.tag){case 0:case 11:case 15:hi(Mg,Ng,p);break;case 1:var md=p.stateNode;if(p.effectTag&4)if(null===nc)md.componentDidMount();else{var Fj=p.elementType===p.type?nc.memoizedProps:Af(p.type,nc.memoizedProps);md.componentDidUpdate(Fj,nc.memoizedState,md.__reactInternalSnapshotBeforeUpdate)}var Xh=p.updateQueue;null!==Xh&&Yf(p,Xh,md,r);break;case 3:var Yh=p.updateQueue;if(null!==Yh){K=null;if(null!==p.child)switch(p.child.tag){case 5:K=
p.child.stateNode;break;case 1:K=p.child.stateNode}Yf(p,Yh,K,r)}break;case 5:var Gj=p.stateNode;null===nc&&p.effectTag&4&&(r=Gj,Je(p.type,p.memoizedProps)&&r.focus());break;case 6:break;case 4:break;case 12:break;case 13:case 19:case 17:case 20:break;default:throw t(Error(163));}}if($a&128){var nd=Y.ref;if(null!==nd){var Zh=Y.stateNode;switch(Y.tag){case 5:var gf=Zh;break;default:gf=Zh}"function"===typeof nd?nd(gf):nd.current=gf}}$a&512&&(Pi=!0);Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));
fi(Y,zb);Y=Y.nextEffect}while(null!==Y);Y=null;nf();U=f}else a.current=c;if(Pi)Pi=!1,Qi=a,Si=d,Ri=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0!==b?($a=cg(),$a=zf($a,b),Zi(a,$a,b)):xi=null;"function"===typeof pj&&pj(c.stateNode,d);1073741823===b?a===Vi?Ui++:(Ui=0,Vi=a):Ui=0;if(ui)throw ui=!1,a=vi,vi=null,a;if((U&Bi)!==T)return null;O();return null}
function cj(){if(null===Qi)return!1;var a=Qi,b=Si,c=Ri;Qi=null;Si=0;Ri=90;return vf(97<c?97:c,qj.bind(null,a,b))}function qj(a){if((U&(Ci|Di))!==T)throw t(Error(331));var b=U;U|=Di;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:hi(Pg,Ig,c),hi(Ig,Og,c)}}catch(d){if(null===a)throw t(Error(330));fi(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}U=b;O();return!0}
function rj(a,b,c){b=bi(c,b);b=ti(a,b,1073741823);Sf(a,b);a=Yi(a,1073741823);null!==a&&Zi(a,99,1073741823)}function fi(a,b){if(3===a.tag)rj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){rj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===xi||!xi.has(d))){a=bi(b,a);a=wi(c,a,1073741823);Sf(c,a);c=Yi(c,1073741823);null!==c&&Zi(c,99,1073741823);break}}c=c.return}}
function kj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);Ji===a&&W===c?X===Hi||X===Gi&&1073741823===Ki&&sf()-pi<Oi?hj(a,W):Ni=!0:a.lastPendingTime<c||(b=a.pingTime,0!==b&&b<c||(a.pingTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),b=cg(),b=zf(b,c),Zi(a,b,c)))}function ri(a,b){var c=a.stateNode;null!==c&&c.delete(b);c=cg();b=dg(c,a,null);c=zf(c,b);a=Yi(a,b);null!==a&&Zi(a,c,b)}var mj=void 0;
mj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||M.current)Lf=!0;else if(d<c){Lf=!1;switch(b.tag){case 3:Nh(b);Ch();break;case 5:Cg(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:N(b.type)&&Xe(b);break;case 4:Ag(b,b.stateNode.containerInfo);break;case 10:Hf(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Ph(a,b,c);J(P,P.current&
Eg,b);b=Fh(a,b,c);return null!==b?b.sibling:null}J(P,P.current&Eg,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Rh(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);J(P,P.current,b);if(!d)return null}return Fh(a,b,c)}}else Lf=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Se(b,L.current);Kf(b,c);e=dh(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&
null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;ih();if(N(d)){var f=!0;Xe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var h=d.getDerivedStateFromProps;"function"===typeof h&&bg(b,d,h,a);e.updater=fg;b.stateNode=e;e._reactInternalFiber=b;jg(b,d,a,c);b=Mh(null,b,d,!0,f,c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Bf(e);b.type=e;f=b.tag=sj(e);
a=Af(e,a);switch(f){case 0:b=Jh(null,b,e,a,c);break;case 1:b=Lh(null,b,e,a,c);break;case 11:b=Eh(null,b,e,a,c);break;case 14:b=Gh(null,b,e,Af(e.type,a),d,c);break;default:throw t(Error(306),e,"");}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Jh(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Lh(a,b,d,e,c);case 3:Nh(b);d=b.updateQueue;if(null===d)throw t(Error(282));e=b.memoizedState;e=null!==e?e.element:null;Wf(b,d,b.pendingProps,
null,c);d=b.memoizedState.element;if(d===e)Ch(),b=Fh(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)uh=Ne(b.stateNode.containerInfo.firstChild),th=b,e=vh=!0;e?(b.effectTag|=2,b.child=ug(b,null,d,c)):(S(a,b,d,c),Ch());b=b.child}return b;case 5:return Cg(b),null===a&&zh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,h=e.children,Ke(d,e)?h=null:null!==f&&Ke(d,f)&&(b.effectTag|=16),Kh(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):
(S(a,b,h,c),b=b.child),b;case 6:return null===a&&zh(b),null;case 13:return Ph(a,b,c);case 4:return Ag(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=tg(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Eh(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;h=b.memoizedProps;
f=e.value;Hf(b,f);if(null!==h){var g=h.value;f=hd(g,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(g,f):1073741823)|0;if(0===f){if(h.children===e.children&&!M.current){b=Fh(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){var k=g.dependencies;if(null!==k){h=g.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===g.tag&&(l=Qf(c,null),l.tag=2,Sf(g,l));g.expirationTime<c&&(g.expirationTime=c);l=g.alternate;null!==l&&l.expirationTime<
c&&(l.expirationTime=c);Jf(g.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else h=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==h)h.return=g;else for(h=g;null!==h;){if(h===b){h=null;break}g=h.sibling;if(null!==g){g.return=h.return;h=g;break}h=h.return}g=h}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Kf(b,c),e=Mf(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=Af(e,b.pendingProps),
f=Af(e.type,f),Gh(a,b,e,f,d,c);case 15:return Ih(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,N(d)?(a=!0,Xe(b)):a=!1,Kf(b,c),hg(b,d,e,c),jg(b,d,e,c),Mh(null,b,d,!0,a,c);case 19:return Rh(a,b,c)}throw t(Error(156));};var pj=null,ji=null;
function tj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);pj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};ji=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function uj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function xh(a,b,c,d){return new uj(a,b,c,d)}
function Hh(a){a=a.prototype;return!(!a||!a.isReactComponent)}function sj(a){if("function"===typeof a)return Hh(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gc)return 11;if(a===jc)return 14}return 2}
function og(a,b){var c=a.alternate;null===c?(c=xh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function qg(a,b,c,d,e,f){var h=2;d=a;if("function"===typeof a)Hh(a)&&(h=1);else if("string"===typeof a)h=5;else a:switch(a){case ac:return sg(c.children,e,f,b);case fc:h=8;e|=7;break;case bc:h=8;e|=1;break;case cc:return a=xh(12,c,b,e|8),a.elementType=cc,a.type=cc,a.expirationTime=f,a;case hc:return a=xh(13,c,b,e),a.type=hc,a.elementType=hc,a.expirationTime=f,a;case ic:return a=xh(19,c,b,e),a.elementType=ic,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case dc:h=
10;break a;case ec:h=9;break a;case gc:h=11;break a;case jc:h=14;break a;case kc:h=16;d=null;break a}throw t(Error(130),null==a?a:typeof a,"");}b=xh(h,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function sg(a,b,c,d){a=xh(7,a,d,b);a.expirationTime=c;return a}function pg(a,b,c){a=xh(6,a,null,b);a.expirationTime=c;return a}
function rg(a,b,c){b=xh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function vj(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=this.firstBatch=null;this.pingTime=this.lastPendingTime=this.firstPendingTime=this.callbackExpirationTime=0}function wj(a,b,c){a=new vj(a,b,c);b=xh(3,null,null,2===b?7:1===b?3:0);a.current=b;return b.stateNode=a}
function xj(a,b,c,d,e,f){var h=b.current;a:if(c){c=c._reactInternalFiber;b:{if(2!==ld(c)||1!==c.tag)throw t(Error(170));var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(N(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);throw t(Error(171));}if(1===c.tag){var k=c.type;if(N(k)){c=We(c,k,g);break a}}c=g}else c=Qe;null===b.context?b.context=c:b.pendingContext=c;b=f;e=Qf(d,e);e.payload={element:a};b=void 0===b?null:b;null!==b&&
(e.callback=b);Sf(h,e);eg(h,d);return d}function yj(a,b,c,d){var e=b.current,f=cg(),h=$f.suspense;e=dg(f,e,h);return xj(a,b,c,e,h,d)}function zj(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Aj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Db=function(a,b,c){switch(b){case "input":Ec(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);if(!e)throw t(Error(90));Wb(d);Ec(d,e)}}}break;case "textarea":pe(a,c);break;case "select":b=c.value,null!=b&&me(a,!!c.multiple,b,!1)}};
function Bj(a){var b=1073741821-25*(((1073741821-cg()+500)/25|0)+1);b<=Xi&&--b;this._expirationTime=Xi=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bj.prototype.render=function(a){if(!this._defer)throw t(Error(250));this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Cj;xj(a,b,null,c,null,d._onCommit);return d};
Bj.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bj.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;if(!this._defer||null===b)throw t(Error(251));if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;if(null===d)throw t(Error(251));d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;if((U&(Ci|Di))!==T)throw t(Error(253));xf(Z.bind(null,a,b));O();b=this._next;this._next=
null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bj.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Cj(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Cj.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Cj.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];if("function"!==typeof c)throw t(Error(191),c);c()}}};function Dj(a,b,c){this._internalRoot=wj(a,b,c)}function Ej(a,b){this._internalRoot=wj(a,2,b)}Ej.prototype.render=Dj.prototype.render=function(a,b){var c=this._internalRoot,d=new Cj;b=void 0===b?null:b;null!==b&&d.then(b);yj(a,c,null,d._onCommit);return d};
Ej.prototype.unmount=Dj.prototype.unmount=function(a){var b=this._internalRoot,c=new Cj;a=void 0===a?null:a;null!==a&&c.then(a);yj(null,b,null,c._onCommit);return c};Ej.prototype.createBatch=function(){var a=new Bj(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};
function Hj(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Jb=ej;Kb=fj;Lb=aj;Mb=function(a,b){var c=U;U|=2;try{return a(b)}finally{U=c,U===T&&O()}};function Ij(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dj(a,0,b)}
function Jj(a,b,c,d,e){var f=c._reactRootContainer,h=void 0;if(f){h=f._internalRoot;if("function"===typeof e){var g=e;e=function(){var a=zj(h);g.call(a)}}yj(b,h,a,e)}else{f=c._reactRootContainer=Ij(c,d);h=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=zj(h);k.call(a)}}gj(function(){yj(b,h,a,e)})}return zj(h)}function Kj(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Hj(b))throw t(Error(200));return Aj(a,b,null,c)}
var Nj={createPortal:Kj,findDOMNode:function(a){if(null==a)a=null;else if(1!==a.nodeType){var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw t(Error(188));throw t(Error(268),Object.keys(a));}a=qd(b);a=null===a?null:a.stateNode}return a},hydrate:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!0,c)},render:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!Hj(c))throw t(Error(200));
if(null==a||void 0===a._reactInternalFiber)throw t(Error(38));return Jj(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!Hj(a))throw t(Error(40));return a._reactRootContainer?(gj(function(){Jj(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Kj.apply(void 0,arguments)},unstable_batchedUpdates:ej,unstable_interactiveUpdates:function(a,b,c,d){aj();return fj(a,b,c,d)},unstable_discreteUpdates:fj,unstable_flushDiscreteUpdates:aj,flushSync:function(a,
b){if((U&(Ci|Di))!==T)throw t(Error(187));var c=U;U|=1;try{return vf(99,a.bind(null,b))}finally{U=c,O()}},unstable_createRoot:Lj,unstable_createSyncRoot:Mj,unstable_flushControlled:function(a){var b=U;U|=1;try{vf(99,a)}finally{U=b,U===T&&O()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ca.injectEventPluginsByName,fa,Qa,function(a){ya(a,Pa)},Hb,Ib,Ud,Ba,cj,{current:!1}]}};
function Lj(a,b){if(!Hj(a))throw t(Error(299),"unstable_createRoot");return new Ej(a,null!=b&&!0===b.hydrate)}function Mj(a,b){if(!Hj(a))throw t(Error(299),"unstable_createRoot");return new Dj(a,1,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return tj(m({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=qd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.9.0",
rendererPackageName:"react-dom"});var Oj={default:Nj},Pj=Oj&&Nj||Oj;module.exports=Pj.default||Pj;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(36);
} else {}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.15.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=void 0,e=void 0,g=void 0,m=void 0,n=void 0;exports.unstable_now=void 0;exports.unstable_forceFrameRate=void 0;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,r=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(r,0),b;}};exports.unstable_now=function(){return Date.now()};d=function(a){null!==p?setTimeout(d,0,a):(p=a,setTimeout(r,0))};e=function(a,b){q=setTimeout(a,b)};g=function(){clearTimeout(q)};m=function(){return!1};n=exports.unstable_forceFrameRate=function(){}}else{var t=window.performance,u=window.Date,v=window.setTimeout,
w=window.clearTimeout,x=window.requestAnimationFrame,y=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof x&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));exports.unstable_now="object"===typeof t&&
"function"===typeof t.now?function(){return t.now()}:function(){return u.now()};var z=!1,A=null,B=-1,C=-1,D=33.33,E=-1,F=-1,G=0,H=!1;m=function(){return exports.unstable_now()>=G};n=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):0<a?(D=Math.floor(1E3/a),H=!0):(D=33.33,H=!1)};var J=function(){if(null!==A){var a=exports.unstable_now(),b=0<G-a;try{A(b,
a)||(A=null)}catch(c){throw I.postMessage(null),c;}}},K=new MessageChannel,I=K.port2;K.port1.onmessage=J;var L=function(a){if(null===A)F=E=-1,z=!1;else{z=!0;x(function(a){w(B);L(a)});var b=function(){G=exports.unstable_now()+D/2;J();B=v(b,3*D)};B=v(b,3*D);if(-1!==E&&.1<a-E){var c=a-E;!H&&-1!==F&&c<D&&F<D&&(D=c<F?F:c,8.33>D&&(D=8.33));F=c}E=a;G=a+D;I.postMessage(null)}};d=function(a){A=a;z||(z=!0,x(function(a){L(a)}))};e=function(a,b){C=v(function(){a(exports.unstable_now())},b)};g=function(){w(C);
C=-1}}var M=null,N=null,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a,b){var c=a.next;if(c===a)M=null;else{a===M&&(M=c);var f=a.previous;f.next=c;c.previous=f}a.next=a.previous=null;c=a.callback;f=P;var l=O;P=a.priorityLevel;O=a;try{var h=a.expirationTime<=b;switch(P){case 1:var k=c(h);break;case 2:k=c(h);break;case 3:k=c(h);break;case 4:k=c(h);break;case 5:k=c(h)}}catch(Z){throw Z;}finally{P=f,O=l}if("function"===typeof k)if(b=a.expirationTime,a.callback=k,null===M)M=a.next=a.previous=a;else{k=null;h=M;do{if(b<=h.expirationTime){k=h;break}h=h.next}while(h!==
M);null===k?k=M:k===M&&(M=a);b=k.previous;b.next=k.previous=a;a.next=k;a.previous=b}}function U(a){if(null!==N&&N.startTime<=a){do{var b=N,c=b.next;if(b===c)N=null;else{N=c;var f=b.previous;f.next=c;c.previous=f}b.next=b.previous=null;V(b,b.expirationTime)}while(null!==N&&N.startTime<=a)}}function W(a){S=!1;U(a);R||(null!==M?(R=!0,d(X)):null!==N&&e(W,N.startTime-a))}
function X(a,b){R=!1;S&&(S=!1,g());U(b);Q=!0;try{if(!a)for(;null!==M&&M.expirationTime<=b;)T(M,b),b=exports.unstable_now(),U(b);else if(null!==M){do T(M,b),b=exports.unstable_now(),U(b);while(null!==M&&!m())}if(null!==M)return!0;null!==N&&e(W,N.startTime-b);return!1}finally{Q=!1}}function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}
function V(a,b){if(null===M)M=a.next=a.previous=a;else{var c=null,f=M;do{if(b<f.expirationTime){c=f;break}f=f.next}while(f!==M);null===c?c=M:c===M&&(M=a);b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}}var aa=n;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var f=exports.unstable_now();if("object"===typeof c&&null!==c){var l=c.delay;l="number"===typeof l&&0<l?f+l:f;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),l=f;c=l+c;a={callback:b,priorityLevel:a,startTime:l,expirationTime:c,next:null,previous:null};if(l>f){c=l;if(null===N)N=a.next=a.previous=a;else{b=null;var h=N;do{if(c<h.startTime){b=h;break}h=h.next}while(h!==N);null===b?b=N:b===N&&(N=a);c=b.previous;c.next=b.previous=a;a.next=b;a.previous=
c}null===M&&N===a&&(S?g():S=!0,e(W,l-f))}else V(a,c),R||Q||(R=!0,d(X));return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(a===b)a===M?M=null:a===N&&(N=null);else{a===M?M=b:a===N&&(N=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};exports.unstable_getCurrentPriorityLevel=function(){return P};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();U(a);return null!==O&&null!==M&&M.startTime<=a&&M.expirationTime<O.expirationTime||m()};exports.unstable_requestPaint=aa;exports.unstable_continueExecution=function(){R||Q||(R=!0,d(X))};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return M};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(38);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(40);
} else {}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118;function x(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function y(a){return x(a)===m}exports.typeOf=x;exports.AsyncMode=l;
exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w)};exports.isAsyncMode=function(a){return y(a)||x(a)===l};exports.isConcurrentMode=y;exports.isContextConsumer=function(a){return x(a)===k};exports.isContextProvider=function(a){return x(a)===h};
exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return x(a)===n};exports.isFragment=function(a){return x(a)===e};exports.isLazy=function(a){return x(a)===t};exports.isMemo=function(a){return x(a)===r};exports.isPortal=function(a){return x(a)===d};exports.isProfiler=function(a){return x(a)===g};exports.isStrictMode=function(a){return x(a)===f};exports.isSuspense=function(a){return x(a)===p};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promiseMiddleware;

var _isPromise = _interopRequireDefault(__webpack_require__(44));

var _fluxStandardAction = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function promiseMiddleware(_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (!(0, _fluxStandardAction.isFSA)(action)) {
        return (0, _isPromise.default)(action) ? action.then(dispatch) : next(action);
      }

      return (0, _isPromise.default)(action.payload) ? action.payload.then(function (result) {
        return dispatch(_objectSpread({}, action, {
          payload: result
        }));
      }).catch(function (error) {
        dispatch(_objectSpread({}, action, {
          payload: error,
          error: true
        }));
        return Promise.reject(error);
      }) : next(action);
    };
  };
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString2 = __webpack_require__(46);

var _isString3 = _interopRequireDefault(_isString2);

var _isPlainObject2 = __webpack_require__(52);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

exports.isFSA = isFSA;
exports.isError = isError;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFSA(action) {
  return (0, _isPlainObject3.default)(action) && (0, _isString3.default)(action.type) && Object.keys(action).every(isValidKey);
}

function isError(action) {
  return isFSA(action) && action.error === true;
}

function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(20),
    isArray = __webpack_require__(51),
    isObjectLike = __webpack_require__(22);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(48);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(20),
    getPrototype = __webpack_require__(53),
    isObjectLike = __webpack_require__(22);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(54);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSOLE_HIDE = 'console.hide';
exports.CONSOLE_SHOW_COMMAND = 'console.show.command';
exports.CONSOLE_SHOW_ERROR = 'console.show.error';
exports.CONSOLE_SHOW_INFO = 'console.show.info';
exports.CONSOLE_HIDE_COMMAND = 'console.hide.command';
exports.CONSOLE_SET_CONSOLE_TEXT = 'console.set.command';
exports.CONSOLE_SET_COMPLETIONS = 'console.set.completions';
exports.CONSOLE_COMPLETION_NEXT = 'console.completion.next';
exports.CONSOLE_COMPLETION_PREV = 'console.completion.prev';
exports.CONSOLE_SHOW_FIND = 'console.show.find';


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
const actions = tslib_1.__importStar(__webpack_require__(72));
const hide = () => {
    return {
        type: actions.CONSOLE_HIDE,
    };
};
exports.hide = hide;
const showCommand = (text) => {
    return {
        type: actions.CONSOLE_SHOW_COMMAND,
        text: text
    };
};
exports.showCommand = showCommand;
const showFind = () => {
    return {
        type: actions.CONSOLE_SHOW_FIND,
    };
};
exports.showFind = showFind;
const showError = (text) => {
    return {
        type: actions.CONSOLE_SHOW_ERROR,
        text: text
    };
};
exports.showError = showError;
const showInfo = (text) => {
    return {
        type: actions.CONSOLE_SHOW_INFO,
        text: text
    };
};
exports.showInfo = showInfo;
const hideCommand = () => {
    window.top.postMessage(JSON.stringify({
        type: messages.CONSOLE_UNFOCUS,
    }), '*');
    return {
        type: actions.CONSOLE_HIDE_COMMAND,
    };
};
exports.hideCommand = hideCommand;
const enterCommand = async (text) => {
    await browser.runtime.sendMessage({
        type: messages.CONSOLE_ENTER_COMMAND,
        text,
    });
    return hideCommand();
};
exports.enterCommand = enterCommand;
const enterFind = (text) => {
    window.top.postMessage(JSON.stringify({
        type: messages.CONSOLE_ENTER_FIND,
        text,
    }), '*');
    return hideCommand();
};
exports.enterFind = enterFind;
const setConsoleText = (consoleText) => {
    return {
        type: actions.CONSOLE_SET_CONSOLE_TEXT,
        consoleText,
    };
};
exports.setConsoleText = setConsoleText;
const getCompletions = async (text) => {
    let completions = await browser.runtime.sendMessage({
        type: messages.CONSOLE_QUERY_COMPLETIONS,
        text,
    });
    return {
        type: actions.CONSOLE_SET_COMPLETIONS,
        completions,
        completionSource: text,
    };
};
exports.getCompletions = getCompletions;
const completionNext = () => {
    return {
        type: actions.CONSOLE_COMPLETION_NEXT,
    };
};
exports.completionNext = completionNext;
const completionPrev = () => {
    return {
        type: actions.CONSOLE_COMPLETION_PREV,
    };
};
exports.completionPrev = completionPrev;


/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
const reducers_1 = tslib_1.__importDefault(__webpack_require__(191));
const redux_1 = __webpack_require__(14);
const redux_promise_1 = tslib_1.__importDefault(__webpack_require__(43));
const consoleActions = tslib_1.__importStar(__webpack_require__(73));
const react_redux_1 = __webpack_require__(24);
const Console_1 = tslib_1.__importDefault(__webpack_require__(192));
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const react_dom_1 = tslib_1.__importDefault(__webpack_require__(13));
const store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(redux_promise_1.default));
window.addEventListener('load', () => {
    let wrapper = document.getElementById('vimvixen-console');
    react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(Console_1.default, null)), wrapper);
});
const onMessage = (message) => {
    let msg = messages.valueOf(message);
    switch (msg.type) {
        case messages.CONSOLE_SHOW_COMMAND:
            return store.dispatch(consoleActions.showCommand(msg.command));
        case messages.CONSOLE_SHOW_FIND:
            return store.dispatch(consoleActions.showFind());
        case messages.CONSOLE_SHOW_ERROR:
            return store.dispatch(consoleActions.showError(msg.text));
        case messages.CONSOLE_SHOW_INFO:
            return store.dispatch(consoleActions.showInfo(msg.text));
        case messages.CONSOLE_HIDE:
            return store.dispatch(consoleActions.hide());
    }
};
browser.runtime.onMessage.addListener(onMessage);
let port = browser.runtime.connect(undefined, { name: 'vimvixen-console' });
port.onMessage.addListener(onMessage);


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const actions = tslib_1.__importStar(__webpack_require__(72));
const defaultState = {
    mode: '',
    messageText: '',
    consoleText: '',
    completionSource: '',
    completions: [],
    select: -1,
    viewIndex: 0,
};
const nextSelection = (state) => {
    if (state.completions.length === 0) {
        return -1;
    }
    if (state.select < 0) {
        return 0;
    }
    let length = state.completions
        .map(g => g.items.length)
        .reduce((x, y) => x + y);
    if (state.select + 1 < length) {
        return state.select + 1;
    }
    return -1;
};
const prevSelection = (state) => {
    let length = state.completions
        .map(g => g.items.length)
        .reduce((x, y) => x + y);
    if (state.select < 0) {
        return length - 1;
    }
    return state.select - 1;
};
const nextConsoleText = (completions, select, defaults) => {
    if (select < 0) {
        return defaults;
    }
    let items = completions.map(g => g.items).reduce((g1, g2) => g1.concat(g2));
    return items[select].content;
};
function reducer(state = defaultState, action) {
    switch (action.type) {
        case actions.CONSOLE_HIDE:
            return Object.assign(Object.assign({}, state), { mode: '' });
        case actions.CONSOLE_SHOW_COMMAND:
            return Object.assign(Object.assign({}, state), { mode: 'command', consoleText: action.text, completions: [] });
        case actions.CONSOLE_SHOW_FIND:
            return Object.assign(Object.assign({}, state), { mode: 'find', consoleText: '', completions: [] });
        case actions.CONSOLE_SHOW_ERROR:
            return Object.assign(Object.assign({}, state), { mode: 'error', messageText: action.text });
        case actions.CONSOLE_SHOW_INFO:
            return Object.assign(Object.assign({}, state), { mode: 'info', messageText: action.text });
        case actions.CONSOLE_HIDE_COMMAND:
            return Object.assign(Object.assign({}, state), { mode: state.mode === 'command' || state.mode === 'find' ? '' : state.mode });
        case actions.CONSOLE_SET_CONSOLE_TEXT:
            return Object.assign(Object.assign({}, state), { consoleText: action.consoleText });
        case actions.CONSOLE_SET_COMPLETIONS:
            return Object.assign(Object.assign({}, state), { completions: action.completions, completionSource: action.completionSource, select: -1 });
        case actions.CONSOLE_COMPLETION_NEXT: {
            let select = nextSelection(state);
            return Object.assign(Object.assign({}, state), { select: select, consoleText: nextConsoleText(state.completions, select, state.completionSource) });
        }
        case actions.CONSOLE_COMPLETION_PREV: {
            let select = prevSelection(state);
            return Object.assign(Object.assign({}, state), { select: select, consoleText: nextConsoleText(state.completions, select, state.completionSource) });
        }
        default:
            return state;
    }
}
exports.default = reducer;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(193);
const react_redux_1 = __webpack_require__(24);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const Input_1 = tslib_1.__importDefault(__webpack_require__(195));
const Completion_1 = tslib_1.__importDefault(__webpack_require__(196));
const Message_1 = tslib_1.__importDefault(__webpack_require__(199));
const consoleActions = tslib_1.__importStar(__webpack_require__(73));
const COMPLETION_MAX_ITEMS = 33;
class Console extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.input = react_1.default.createRef();
    }
    onBlur() {
        if (this.props.mode === 'command' || this.props.mode === 'find') {
            return this.props.dispatch(consoleActions.hideCommand());
        }
    }
    doEnter(e) {
        e.stopPropagation();
        e.preventDefault();
        let value = e.target.value;
        if (this.props.mode === 'command') {
            return this.props.dispatch(consoleActions.enterCommand(value));
        }
        else if (this.props.mode === 'find') {
            return this.props.dispatch(consoleActions.enterFind(value === '' ? undefined : value));
        }
    }
    selectNext(e) {
        this.props.dispatch(consoleActions.completionNext());
        e.stopPropagation();
        e.preventDefault();
    }
    selectPrev(e) {
        this.props.dispatch(consoleActions.completionPrev());
        e.stopPropagation();
        e.preventDefault();
    }
    onKeyDown(e) {
        switch (e.key) {
            case 'Escape':
                return this.props.dispatch(consoleActions.hideCommand());
            case 'Enter':
                return this.doEnter(e);
            case 'Tab':
                if (e.shiftKey) {
                    this.props.dispatch(consoleActions.completionPrev());
                }
                else {
                    this.props.dispatch(consoleActions.completionNext());
                }
                e.stopPropagation();
                e.preventDefault();
                break;
            case '[':
                if (e.ctrlKey) {
                    return this.props.dispatch(consoleActions.hideCommand());
                }
                break;
            case 'm':
                if (e.ctrlKey) {
                    return this.doEnter(e);
                }
                break;
            case 'n':
                if (e.ctrlKey) {
                    this.selectNext(e);
                }
                break;
            case 'p':
                if (e.ctrlKey) {
                    this.selectPrev(e);
                }
                break;
        }
    }
    onChange(e) {
        let text = e.target.value;
        this.props.dispatch(consoleActions.setConsoleText(text));
        if (this.props.mode === 'command') {
            this.props.dispatch(consoleActions.getCompletions(text));
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.mode !== 'command' && this.props.mode === 'command') {
            this.props.dispatch(consoleActions.getCompletions(this.props.consoleText));
            this.focus();
        }
        else if (prevProps.mode !== 'find' && this.props.mode === 'find') {
            this.focus();
        }
    }
    render() {
        switch (this.props.mode) {
            case 'command':
            case 'find':
                return react_1.default.createElement("div", { className: 'vimvixen-console-command-wrapper' },
                    react_1.default.createElement(Completion_1.default, { size: COMPLETION_MAX_ITEMS, completions: this.props.completions, select: this.props.select }),
                    react_1.default.createElement(Input_1.default, { ref: this.input, mode: this.props.mode, onBlur: this.onBlur.bind(this), onKeyDown: this.onKeyDown.bind(this), onChange: this.onChange.bind(this), value: this.props.consoleText }));
            case 'info':
            case 'error':
                return react_1.default.createElement(Message_1.default, { mode: this.props.mode }, this.props.messageText);
            default:
                return null;
        }
    }
    focus() {
        window.focus();
        if (this.input.current) {
            this.input.current.focus();
        }
    }
}
const mapStateToProps = (state) => (Object.assign({}, state));
exports.default = react_redux_1.connect(mapStateToProps)(Console);


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(194);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(9)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, "html,body,*{margin:0;padding:0}body{position:absolute;bottom:0;left:0;right:0;overflow:hidden}.vimvixen-console{bottom:0;margin:0;padding:0}.vimvixen-console-command-wrapper{border-top:1px solid gray}.vimvixen-console-completion{background-color:white;font-style:normal;font-family:monospace;font-size:12px;line-height:16px}.vimvixen-console-completion-title{background-color:lightgray;font-weight:bold;margin:0;padding:0}.vimvixen-console-completion-item{padding-left:1.5rem;background-position:0 center;background-size:contain;background-repeat:no-repeat;white-space:pre}.vimvixen-console-completion-item.vimvixen-completion-selected{background-color:yellow}.vimvixen-console-completion-item-caption{display:inline-block;width:40%;text-overflow:ellipsis;overflow:hidden}.vimvixen-console-completion-item-url{display:inline-block;color:green;width:60%;text-overflow:ellipsis;overflow:hidden}.vimvixen-console-message{font-style:normal;font-family:monospace;font-size:12px;line-height:16px;border-top:1px solid gray}.vimvixen-console-error{background-color:red;font-weight:bold;color:white}.vimvixen-console-info{background-color:white;font-weight:normal;color:green}.vimvixen-console-command{background-color:white;display:flex}.vimvixen-console-command-prompt{font-style:normal;font-family:monospace;font-size:12px;line-height:16px}.vimvixen-console-command-input{border:none;flex-grow:1;font-style:normal;font-family:monospace;font-size:12px;line-height:16px}\n", ""]);


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
class Input extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.input = react_1.default.createRef();
    }
    focus() {
        if (this.input.current) {
            this.input.current.focus();
        }
    }
    render() {
        let prompt = '';
        if (this.props.mode === 'command') {
            prompt = ':';
        }
        else if (this.props.mode === 'find') {
            prompt = '/';
        }
        return (react_1.default.createElement("div", { className: 'vimvixen-console-command' },
            react_1.default.createElement("i", { className: 'vimvixen-console-command-prompt' }, prompt),
            react_1.default.createElement("input", { className: 'vimvixen-console-command-input', ref: this.input, onBlur: this.props.onBlur, onKeyDown: this.props.onKeyDown, onChange: this.props.onChange, value: this.props.value })));
    }
}
exports.default = Input;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const CompletionItem_1 = tslib_1.__importDefault(__webpack_require__(197));
const CompletionTitle_1 = tslib_1.__importDefault(__webpack_require__(198));
class Completion extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = { viewOffset: 0, select: -1 };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.select === nextProps.select) {
            return null;
        }
        let viewSelect = (() => {
            let index = 0;
            for (let i = 0; i < nextProps.completions.length; ++i) {
                ++index;
                let g = nextProps.completions[i];
                if (nextProps.select + i + 1 < index + g.items.length) {
                    return nextProps.select + i + 1;
                }
                index += g.items.length;
            }
            return -1;
        })();
        let viewOffset = 0;
        if (nextProps.select < 0) {
            viewOffset = 0;
        }
        else if (prevState.select < nextProps.select) {
            viewOffset = Math.max(prevState.viewOffset, viewSelect - nextProps.size + 1);
        }
        else if (prevState.select > nextProps.select) {
            viewOffset = Math.min(prevState.viewOffset, viewSelect);
        }
        return { viewOffset, select: nextProps.select };
    }
    render() {
        let eles = [];
        let index = 0;
        for (let group of this.props.completions) {
            eles.push(react_1.default.createElement(CompletionTitle_1.default, { key: `group-${index}`, title: group.name }));
            for (let item of group.items) {
                eles.push(react_1.default.createElement(CompletionItem_1.default, { key: `item-${index}`, icon: item.icon, caption: item.caption, url: item.url, highlight: index === this.props.select }));
                ++index;
            }
        }
        let viewOffset = this.state.viewOffset;
        eles = eles.slice(viewOffset, viewOffset + this.props.size);
        return (react_1.default.createElement("ul", { className: 'vimvixen-console-completion' }, eles));
    }
}
exports.default = Completion;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const prop_types_1 = tslib_1.__importDefault(__webpack_require__(5));
const CompletionItem = (props) => {
    let className = 'vimvixen-console-completion-item';
    if (props.highlight) {
        className += ' vimvixen-completion-selected';
    }
    return react_1.default.createElement("li", { className: className, style: { backgroundImage: 'url(' + props.icon + ')' } },
        react_1.default.createElement("span", { className: 'vimvixen-console-completion-item-caption' }, props.caption),
        react_1.default.createElement("span", { className: 'vimvixen-console-completion-item-url' }, props.url));
};
CompletionItem.propTypes = {
    highlight: prop_types_1.default.bool,
    caption: prop_types_1.default.string,
    url: prop_types_1.default.string,
};
exports.default = CompletionItem;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const CompletionTitle = (props) => {
    return react_1.default.createElement("li", { className: 'vimvixen-console-completion-title' }, props.title);
};
exports.default = CompletionTitle;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const Message = (props) => {
    switch (props.mode) {
        case 'error':
            return (react_1.default.createElement("p", { className: 'vimvixen-console-message vimvixen-console-error' }, props.children));
        case 'info':
            return (react_1.default.createElement("p", { className: 'vimvixen-console-message vimvixen-console-info' }, props.children));
    }
    return null;
};
exports.default = Message;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2JhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9TdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVJlZHV4Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZURpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvcmVhY3RCYXRjaGVkVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXByb21pc2UvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1wcm9taXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbHV4LXN0YW5kYXJkLWFjdGlvbi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9hY3Rpb25zL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBvbmVudHMvQ29uc29sZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcG9uZW50cy9jb25zb2xlLnNjc3M/NGUxOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb21wb25lbnRzL2NvbnNvbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb21wb25lbnRzL2NvbnNvbGUvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBvbmVudHMvY29uc29sZS9Db21wbGV0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb21wb25lbnRzL2NvbnNvbGUvQ29tcGxldGlvbkl0ZW0udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBvbmVudHMvY29uc29sZS9Db21wbGV0aW9uVGl0bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBvbmVudHMvY29uc29s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QUFLLENBQUMsT0FBTyxDQUFRO1FBQ3ZCLHdDQUNFLFNBQVMsRUFBQyxzQ0FBc0MsSUFDaEQsS0FBSyxDQUFDLEdBQUcsQ0FBUSxDQUNoQixDQUFDO0FBQ1IsQ0FBQyxDQUFDO0FBRUYsY0FBYyxDQUFDLFNBQVMsR0FBRztJQUN6QixTQUFTLEVBQUUsb0JBQVMsQ0FBQyxJQUFJO0lBQ3pCLE9BQU8sRUFBRSxvQkFBUyxDQUFDLE1BQU07SUFDekIsR0FBRyxFQUFFLG9CQUFTLENBQUMsTUFBTTtDQUN0QixDQUFDO0FBRUYsa0JBQWUsY0FBYyxDQUFDOzs7Ozs7Ozs7OztBQ2xDOUIsZ0VBQTBCO0FBTTFCLE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7SUFDdkMsT0FBTyxzQ0FBSSxTQUFTLEVBQUMsbUNBQW1DLElBQ3JELEtBQUssQ0FBQyxLQUFLLENBQ1QsQ0FBQztBQUNSLENBQUMsQ0FBQztBQUVGLGtCQUFlLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUNaL0IsZ0VBQTBCO0FBTzFCLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7SUFDL0IsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssT0FBTztZQUNWLE9BQU8sQ0FDTCxxQ0FBRyxTQUFTLEVBQUMsaURBQWlELElBQzFELEtBQUssQ0FBQyxRQUFRLENBQ2QsQ0FDTCxDQUFDO1FBQ0osS0FBSyxNQUFNO1lBQ1QsT0FBTyxDQUNMLHFDQUFHLFNBQVMsRUFBQyxnREFBZ0QsSUFDekQsS0FBSyxDQUFDLFFBQVEsQ0FDZCxDQUNMLENBQUM7S0FDSDtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsT0FBTyxDQUFDIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkwKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gJy4vb3BlcmF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EX09QRVJBVElPTiA9ICdiYWNrZ3JvdW5kLm9wZXJhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBDT05TT0xFX1VORk9DVVMgPSAnY29uc29sZS51bmZvY3VzJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX0VOVEVSX0NPTU1BTkQgPSAnY29uc29sZS5lbnRlci5jb21tYW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX0VOVEVSX0ZJTkQgPSAnY29uc29sZS5lbnRlci5maW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1FVRVJZX0NPTVBMRVRJT05TID0gJ2NvbnNvbGUucXVlcnkuY29tcGxldGlvbnMnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0hPV19DT01NQU5EID0gJ2NvbnNvbGUuc2hvdy5jb21tYW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NIT1dfRVJST1IgPSAnY29uc29sZS5zaG93LmVycm9yJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NIT1dfSU5GTyA9ICdjb25zb2xlLnNob3cuaW5mbyc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9TSE9XX0ZJTkQgPSAnY29uc29sZS5zaG93LmZpbmQnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfSElERSA9ICdjb25zb2xlLmhpZGUnO1xuXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUQVJUID0gJ2ZvbGxvdy5zdGFydCc7XG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1RfQ09VTlRfVEFSR0VUUyA9ICdmb2xsb3cucmVxdWVzdC5jb3VudC50YXJnZXRzJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVTUE9OU0VfQ09VTlRfVEFSR0VUUyA9ICdmb2xsb3cucmVzcG9uc2UuY291bnQudGFyZ2V0cyc7XG5leHBvcnQgY29uc3QgRk9MTE9XX0NSRUFURV9ISU5UUyA9ICdmb2xsb3cuY3JlYXRlLmhpbnRzJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfU0hPV19ISU5UUyA9ICdmb2xsb3cudXBkYXRlLmhpbnRzJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVNT1ZFX0hJTlRTID0gJ2ZvbGxvdy5yZW1vdmUuaGludHMnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19BQ1RJVkFURSA9ICdmb2xsb3cuYWN0aXZhdGUnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19LRVlfUFJFU1MgPSAnZm9sbG93LmtleS5wcmVzcyc7XG5cbmV4cG9ydCBjb25zdCBNQVJLX1NFVF9HTE9CQUwgPSAnbWFyay5zZXQuZ2xvYmFsJztcbmV4cG9ydCBjb25zdCBNQVJLX0pVTVBfR0xPQkFMID0gJ21hcmsuanVtcC5nbG9iYWwnO1xuXG5leHBvcnQgY29uc3QgVEFCX1NDUk9MTF9UTyA9ICd0YWIuc2Nyb2xsLnRvJztcblxuZXhwb3J0IGNvbnN0IEZJTkRfTkVYVCA9ICdmaW5kLm5leHQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfUFJFViA9ICdmaW5kLnByZXYnO1xuZXhwb3J0IGNvbnN0IEZJTkRfR0VUX0tFWVdPUkQgPSAnZmluZC5nZXQua2V5d29yZCc7XG5leHBvcnQgY29uc3QgRklORF9TRVRfS0VZV09SRCA9ICdmaW5kLnNldC5rZXl3b3JkJztcblxuZXhwb3J0IGNvbnN0IEFERE9OX0VOQUJMRURfUVVFUlkgPSAnYWRkb24uZW5hYmxlZC5xdWVyeSc7XG5leHBvcnQgY29uc3QgQURET05fRU5BQkxFRF9SRVNQT05TRSA9ICdhZGRvbi5lbmFibGVkLnJlc3BvbnNlJztcbmV4cG9ydCBjb25zdCBBRERPTl9UT0dHTEVfRU5BQkxFRCA9ICdhZGRvbi50b2dnbGUuZW5hYmxlZCc7XG5cbmV4cG9ydCBjb25zdCBPUEVOX1VSTCA9ICdvcGVuLnVybCc7XG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HU19DSEFOR0VEID0gJ3NldHRpbmdzLmNoYW5nZWQnO1xuZXhwb3J0IGNvbnN0IFNFVFRJTkdTX1FVRVJZID0gJ3NldHRpbmdzLnF1ZXJ5JztcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfRlJBTUVfTUVTU0FHRSA9ICdjb25zb2xlLmZyYW1lLm1lc3NhZ2UnO1xuXG5leHBvcnQgY29uc3QgTkFWSUdBVEVfSElTVE9SWV9ORVhUID0gJ25hdmlnYXRlLmhpc3RvcnkubmV4dCc7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfSElTVE9SWV9QUkVWID0gJ25hdmlnYXRlLmhpc3RvcnkucHJldic7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfTElOS19ORVhUID0gJ25hdmlnYXRlLmxpbmsubmV4dCc7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfTElOS19QUkVWID0gJ25hdmlnYXRlLmxpbmsucHJldic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZE9wZXJhdGlvbk1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQkFDS0dST1VORF9PUEVSQVRJT047XG4gIG9wZXJhdGlvbjogb3BlcmF0aW9ucy5PcGVyYXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZVVuZm9jdXNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfVU5GT0NVUztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlRW50ZXJDb21tYW5kTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0VOVEVSX0NPTU1BTkQ7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlRW50ZXJGaW5kTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0VOVEVSX0ZJTkQ7XG4gIHRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZVF1ZXJ5Q29tcGxldGlvbnNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfUVVFUllfQ09NUExFVElPTlM7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlU2hvd0NvbW1hbmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19DT01NQU5EO1xuICBjb21tYW5kOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZVNob3dFcnJvck1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9TSE9XX0VSUk9SO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZVNob3dJbmZvTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1NIT1dfSU5GTztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVTaG93RmluZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9TSE9XX0ZJTkQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUhpZGVNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfSElERTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dTdGFydE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX1NUQVJUO1xuICBuZXdUYWI6IGJvb2xlYW47XG4gIGJhY2tncm91bmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93UmVxdWVzdENvdW50VGFyZ2V0c01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX1JFUVVFU1RfQ09VTlRfVEFSR0VUUztcbiAgdmlld1NpemU6IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfTtcbiAgZnJhbWVQb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGxvd1Jlc3BvbnNlQ291bnRUYXJnZXRzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGT0xMT1dfUkVTUE9OU0VfQ09VTlRfVEFSR0VUUztcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dDcmVhdGVIaW50c01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX0NSRUFURV9ISU5UUztcbiAgdGFnczogc3RyaW5nW107XG4gIHZpZXdTaXplOiB7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH07XG4gIGZyYW1lUG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dTaG93SGludHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19TSE9XX0hJTlRTO1xuICBwcmVmaXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dSZW1vdmVIaW50c01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX1JFTU9WRV9ISU5UUztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dBY3RpdmF0ZU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX0FDVElWQVRFO1xuICB0YWc6IHN0cmluZztcbiAgbmV3VGFiOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGxvd0tleVByZXNzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGT0xMT1dfS0VZX1BSRVNTO1xuICBrZXk6IHN0cmluZztcbiAgY3RybEtleTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrU2V0R2xvYmFsTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNQVJLX1NFVF9HTE9CQUw7XG4gIGtleTogc3RyaW5nO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrSnVtcEdsb2JhbE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUFSS19KVU1QX0dMT0JBTDtcbiAga2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiU2Nyb2xsVG9NZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9TQ1JPTExfVE87XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmROZXh0TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGSU5EX05FWFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZFByZXZNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZJTkRfUFJFVjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kR2V0S2V5d29yZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRklORF9HRVRfS0VZV09SRDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kU2V0S2V5d29yZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRklORF9TRVRfS0VZV09SRDtcbiAga2V5d29yZDogc3RyaW5nO1xuICBmb3VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRvbkVuYWJsZWRRdWVyeU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQURET05fRU5BQkxFRF9RVUVSWTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRvbkVuYWJsZWRSZXNwb25zZU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQURET05fRU5BQkxFRF9SRVNQT05TRTtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRvblRvZ2dsZUVuYWJsZWRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX1RPR0dMRV9FTkFCTEVEO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5VcmxNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE9QRU5fVVJMO1xuICB1cmw6IHN0cmluZztcbiAgbmV3VGFiOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzQ2hhbmdlZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgU0VUVElOR1NfQ0hBTkdFRDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc1F1ZXJ5TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBTRVRUSU5HU19RVUVSWTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlRnJhbWVNZXNzYWdlTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0ZSQU1FX01FU1NBR0U7XG4gIG1lc3NhZ2U6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUhpc3RvcnlOZXh0TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBOQVZJR0FURV9ISVNUT1JZX05FWFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVIaXN0b3J5UHJldk1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfSElTVE9SWV9QUkVWO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlTGlua05leHQge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfTElOS19ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlTGlua1ByZXYge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfTElOS19QUkVWO1xufVxuXG5leHBvcnQgdHlwZSBNZXNzYWdlID1cbiAgQmFja2dyb3VuZE9wZXJhdGlvbk1lc3NhZ2UgfFxuICBDb25zb2xlVW5mb2N1c01lc3NhZ2UgfFxuICBDb25zb2xlRW50ZXJDb21tYW5kTWVzc2FnZSB8XG4gIENvbnNvbGVFbnRlckZpbmRNZXNzYWdlIHxcbiAgQ29uc29sZVF1ZXJ5Q29tcGxldGlvbnNNZXNzYWdlIHxcbiAgQ29uc29sZVNob3dDb21tYW5kTWVzc2FnZSB8XG4gIENvbnNvbGVTaG93RXJyb3JNZXNzYWdlIHxcbiAgQ29uc29sZVNob3dJbmZvTWVzc2FnZSB8XG4gIENvbnNvbGVTaG93RmluZE1lc3NhZ2UgfFxuICBDb25zb2xlSGlkZU1lc3NhZ2UgfFxuICBGb2xsb3dTdGFydE1lc3NhZ2UgfFxuICBGb2xsb3dSZXF1ZXN0Q291bnRUYXJnZXRzTWVzc2FnZSB8XG4gIEZvbGxvd1Jlc3BvbnNlQ291bnRUYXJnZXRzTWVzc2FnZSB8XG4gIEZvbGxvd0NyZWF0ZUhpbnRzTWVzc2FnZSB8XG4gIEZvbGxvd1Nob3dIaW50c01lc3NhZ2UgfFxuICBGb2xsb3dSZW1vdmVIaW50c01lc3NhZ2UgfFxuICBGb2xsb3dBY3RpdmF0ZU1lc3NhZ2UgfFxuICBGb2xsb3dLZXlQcmVzc01lc3NhZ2UgfFxuICBNYXJrU2V0R2xvYmFsTWVzc2FnZSB8XG4gIE1hcmtKdW1wR2xvYmFsTWVzc2FnZSB8XG4gIFRhYlNjcm9sbFRvTWVzc2FnZSB8XG4gIEZpbmROZXh0TWVzc2FnZSB8XG4gIEZpbmRQcmV2TWVzc2FnZSB8XG4gIEZpbmRHZXRLZXl3b3JkTWVzc2FnZSB8XG4gIEZpbmRTZXRLZXl3b3JkTWVzc2FnZSB8XG4gIEFkZG9uRW5hYmxlZFF1ZXJ5TWVzc2FnZSB8XG4gIEFkZG9uRW5hYmxlZFJlc3BvbnNlTWVzc2FnZSB8XG4gIEFkZG9uVG9nZ2xlRW5hYmxlZE1lc3NhZ2UgfFxuICBPcGVuVXJsTWVzc2FnZSB8XG4gIFNldHRpbmdzQ2hhbmdlZE1lc3NhZ2UgfFxuICBTZXR0aW5nc1F1ZXJ5TWVzc2FnZSB8XG4gIENvbnNvbGVGcmFtZU1lc3NhZ2VNZXNzYWdlIHxcbiAgTmF2aWdhdGVIaXN0b3J5TmV4dE1lc3NhZ2UgfFxuICBOYXZpZ2F0ZUhpc3RvcnlQcmV2TWVzc2FnZSB8XG4gIE5hdmlnYXRlTGlua05leHQgfFxuICBOYXZpZ2F0ZUxpbmtQcmV2O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZXhwb3J0IGNvbnN0IHZhbHVlT2YgPSAobzogYW55KTogTWVzc2FnZSA9PiB7XG4gIHN3aXRjaCAoby50eXBlKSB7XG4gIGNhc2UgQ09OU09MRV9VTkZPQ1VTOlxuICBjYXNlIENPTlNPTEVfRU5URVJfQ09NTUFORDpcbiAgY2FzZSBDT05TT0xFX0VOVEVSX0ZJTkQ6XG4gIGNhc2UgQ09OU09MRV9RVUVSWV9DT01QTEVUSU9OUzpcbiAgY2FzZSBDT05TT0xFX1NIT1dfQ09NTUFORDpcbiAgY2FzZSBDT05TT0xFX1NIT1dfRVJST1I6XG4gIGNhc2UgQ09OU09MRV9TSE9XX0lORk86XG4gIGNhc2UgQ09OU09MRV9TSE9XX0ZJTkQ6XG4gIGNhc2UgQ09OU09MRV9ISURFOlxuICBjYXNlIEZPTExPV19TVEFSVDpcbiAgY2FzZSBGT0xMT1dfUkVRVUVTVF9DT1VOVF9UQVJHRVRTOlxuICBjYXNlIEZPTExPV19SRVNQT05TRV9DT1VOVF9UQVJHRVRTOlxuICBjYXNlIEZPTExPV19DUkVBVEVfSElOVFM6XG4gIGNhc2UgRk9MTE9XX1NIT1dfSElOVFM6XG4gIGNhc2UgRk9MTE9XX1JFTU9WRV9ISU5UUzpcbiAgY2FzZSBGT0xMT1dfQUNUSVZBVEU6XG4gIGNhc2UgRk9MTE9XX0tFWV9QUkVTUzpcbiAgY2FzZSBNQVJLX1NFVF9HTE9CQUw6XG4gIGNhc2UgTUFSS19KVU1QX0dMT0JBTDpcbiAgY2FzZSBUQUJfU0NST0xMX1RPOlxuICBjYXNlIEZJTkRfTkVYVDpcbiAgY2FzZSBGSU5EX1BSRVY6XG4gIGNhc2UgRklORF9HRVRfS0VZV09SRDpcbiAgY2FzZSBGSU5EX1NFVF9LRVlXT1JEOlxuICBjYXNlIEFERE9OX0VOQUJMRURfUVVFUlk6XG4gIGNhc2UgQURET05fRU5BQkxFRF9SRVNQT05TRTpcbiAgY2FzZSBBRERPTl9UT0dHTEVfRU5BQkxFRDpcbiAgY2FzZSBPUEVOX1VSTDpcbiAgY2FzZSBTRVRUSU5HU19DSEFOR0VEOlxuICBjYXNlIFNFVFRJTkdTX1FVRVJZOlxuICBjYXNlIENPTlNPTEVfRlJBTUVfTUVTU0FHRTpcbiAgY2FzZSBOQVZJR0FURV9ISVNUT1JZX05FWFQ6XG4gIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9QUkVWOlxuICBjYXNlIE5BVklHQVRFX0xJTktfTkVYVDpcbiAgY2FzZSBOQVZJR0FURV9MSU5LX1BSRVY6XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIG9wZXJhdGlvbiB0eXBlOiAnICsgby50eXBlKTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xufTtcblxudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBcIkBAcmVkdXgvSU5JVFwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFJFUExBQ0U6IFwiQEByZWR1eC9SRVBMQUNFXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUFJPQkVfVU5LTk9XTl9BQ1RJT046IGZ1bmN0aW9uIFBST0JFX1VOS05PV05fQUNUSU9OKCkge1xuICAgIHJldHVybiBcIkBAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05cIiArIHJhbmRvbVN0cmluZygpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gb2JqO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byAnICsgJ2NyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtICcgKyAndG9nZXRoZXIgdG8gYSBzaW5nbGUgZnVuY3Rpb24uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGlzIG1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGN1cnJlbnRMaXN0ZW5lcnMgc28gd2UgY2FuIHVzZVxuICAgKiBuZXh0TGlzdGVuZXJzIGFzIGEgdGVtcG9yYXJ5IGxpc3Qgd2hpbGUgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJldmVudHMgYW55IGJ1Z3MgYXJvdW5kIGNvbnN1bWVycyBjYWxsaW5nXG4gICAqIHN1YnNjcmliZS91bnN1YnNjcmliZSBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuZ2V0U3RhdGUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiAnICsgJ1Bhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBub3RpZmllZCBhZnRlciB0aGUgc3RvcmUgaGFzIGJlZW4gdXBkYXRlZCwgc3Vic2NyaWJlIGZyb20gYSAnICsgJ2NvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZShsaXN0ZW5lcikgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgdW5zdWJzY3JpYmUgZnJvbSBhIHN0b3JlIGxpc3RlbmVyIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmUobGlzdGVuZXIpIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG5cblxuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjsgLy8gVGhpcyBhY3Rpb24gaGFzIGEgc2ltaWxpYXIgZWZmZWN0IHRvIEFjdGlvblR5cGVzLklOSVQuXG4gICAgLy8gQW55IHJlZHVjZXJzIHRoYXQgZXhpc3RlZCBpbiBib3RoIHRoZSBuZXcgYW5kIG9sZCByb290UmVkdWNlclxuICAgIC8vIHdpbGwgcmVjZWl2ZSB0aGUgcHJldmlvdXMgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gICAgLy8gdGhlIG5ldyBzdGF0ZSB0cmVlIHdpdGggYW55IHJlbGV2YW50IGRhdGEgZnJvbSB0aGUgb2xkIG9uZS5cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFUExBQ0VcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0JyB8fCBvYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwgX3JlZlskJG9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfSAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cblxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gIH0pO1xuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbn1cblxuZnVuY3Rpb24gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pIHtcbiAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gIHZhciBhY3Rpb25EZXNjcmlwdGlvbiA9IGFjdGlvblR5cGUgJiYgXCJhY3Rpb24gXFxcIlwiICsgU3RyaW5nKGFjdGlvblR5cGUpICsgXCJcXFwiXCIgfHwgJ2FuIGFjdGlvbic7XG4gIHJldHVybiBcIkdpdmVuIFwiICsgYWN0aW9uRGVzY3JpcHRpb24gKyBcIiwgcmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiBcIiArIFwiVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiBcIiArIFwiSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCI7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiBcIlRoZSBcIiArIGFyZ3VtZW50TmFtZSArIFwiIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXFxcIlwiICsge30udG9TdHJpbmcuY2FsbChpbnB1dFN0YXRlKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0gKyBcIlxcXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgXCIgKyAoXCJrZXlzOiBcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG4gIGlmIChhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLlJFUExBQ0UpIHJldHVybjtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBcIlVuZXhwZWN0ZWQgXCIgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArIFwiIFwiICsgKFwiXFxcIlwiICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIgZm91bmQgaW4gXCIgKyBhcmd1bWVudE5hbWUgKyBcIi4gXCIpICsgXCJFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6IFwiICsgKFwiXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiBcIiArIFwiSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IFwiICsgXCJleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IFwiICsgXCJub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCBcIiArIFwieW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUFJPQkVfVU5LTk9XTl9BQ1RJT04oKVxuICAgIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gXCIgKyAoXCJEb24ndCB0cnkgdG8gaGFuZGxlIFwiICsgQWN0aW9uVHlwZXMuSU5JVCArIFwiIG9yIG90aGVyIGFjdGlvbnMgaW4gXFxcInJlZHV4LypcXFwiIFwiKSArIFwibmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgXCIgKyBcImN1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsIFwiICsgXCJpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgXCIgKyBcImFjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLlwiKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5cblxuZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZyhcIk5vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7IC8vIFRoaXMgaXMgdXNlZCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Qgd2FybiBhYm91dCB0aGUgc2FtZVxuICAvLyBrZXlzIG11bHRpcGxlIHRpbWVzLlxuXG4gIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzaGFwZUFzc2VydGlvbkVycm9yO1xuXG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG5cbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICB3YXJuaW5nKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuXG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKF9rZXksIGFjdGlvbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhdGVbX2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYW4gYWN0aW9uIGNyZWF0b3IgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGRpc3BhdGNoIHdyYXBwZWQgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cblxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBpbnN0ZWFkIHJlY2VpdmVkIFwiICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArIFwiLiBcIiArIFwiRGlkIHlvdSB3cml0ZSBcXFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiIGluc3RlYWQgb2YgXFxcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiP1wiKTtcbiAgfVxuXG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KSk7XG4gIH1cblxuICBpZiAoZW51bWVyYWJsZU9ubHkpIGtleXMgPSBrZXlzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gIH0pO1xuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG5cbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaXNwYXRjaGluZyB3aGlsZSBjb25zdHJ1Y3RpbmcgeW91ciBtaWRkbGV3YXJlIGlzIG5vdCBhbGxvd2VkLiAnICsgJ090aGVyIG1pZGRsZXdhcmUgd291bGQgbm90IGJlIGFwcGxpZWQgdG8gdGhpcyBkaXNwYXRjaC4nKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh2b2lkIDAsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZDIoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbi8qXG4gKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4gKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4gKi9cblxuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGlzQ3J1c2hlZC5uYW1lID09PSAnc3RyaW5nJyAmJiBpc0NydXNoZWQubmFtZSAhPT0gJ2lzQ3J1c2hlZCcpIHtcbiAgd2FybmluZygnWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgbWluaWZpZWQgY29kZSBvdXRzaWRlIG9mIE5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIi4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIHNldHRpbmcgbW9kZSB0byBwcm9kdWN0aW9uIGluIHdlYnBhY2sgKGh0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uY2VwdHMvbW9kZS8pICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgQWN0aW9uVHlwZXMgYXMgX19ET19OT1RfVVNFX19BY3Rpb25UeXBlcywgYXBwbHlNaWRkbGV3YXJlLCBiaW5kQWN0aW9uQ3JlYXRvcnMsIGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSwgY3JlYXRlU3RvcmUgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGU6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICAgIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgICBtaXhpbnM6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICAgIG5hbWU6IHRydWUsXG4gICAgbGVuZ3RoOiB0cnVlLFxuICAgIHByb3RvdHlwZTogdHJ1ZSxcbiAgICBjYWxsZXI6IHRydWUsXG4gICAgY2FsbGVlOiB0cnVlLFxuICAgIGFyZ3VtZW50czogdHJ1ZSxcbiAgICBhcml0eTogdHJ1ZVxufTtcblxudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgICByZW5kZXI6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZVxufTtcblxudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgICAnJCR0eXBlb2YnOiB0cnVlLFxuICAgIGNvbXBhcmU6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbUmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gICAgaWYgKFJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICAgICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgICB9XG4gICAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcblxuICAgICAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICAgICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwuanMnO1xuXG52YXIgcm9vdDtcblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gcG9ueWZpbGwocm9vdCk7XG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IHZhciBSZWFjdFJlZHV4Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgZGVmYXVsdCBSZWFjdFJlZHV4Q29udGV4dDsiLCIvLyBEZWZhdWx0IHRvIGEgZHVtbXkgXCJiYXRjaFwiIGltcGxlbWVudGF0aW9uIHRoYXQganVzdCBydW5zIHRoZSBjYWxsYmFja1xuZnVuY3Rpb24gZGVmYXVsdE5vb3BCYXRjaChjYWxsYmFjaykge1xuICBjYWxsYmFjaygpO1xufVxuXG52YXIgYmF0Y2ggPSBkZWZhdWx0Tm9vcEJhdGNoOyAvLyBBbGxvdyBpbmplY3RpbmcgYW5vdGhlciBiYXRjaGluZyBmdW5jdGlvbiBsYXRlclxuXG5leHBvcnQgdmFyIHNldEJhdGNoID0gZnVuY3Rpb24gc2V0QmF0Y2gobmV3QmF0Y2gpIHtcbiAgcmV0dXJuIGJhdGNoID0gbmV3QmF0Y2g7XG59OyAvLyBTdXBwbHkgYSBnZXR0ZXIganVzdCB0byBza2lwIGRlYWxpbmcgd2l0aCBFU00gYmluZGluZ3NcblxuZXhwb3J0IHZhciBnZXRCYXRjaCA9IGZ1bmN0aW9uIGdldEJhdGNoKCkge1xuICByZXR1cm4gYmF0Y2g7XG59OyIsImltcG9ydCB7IGdldEJhdGNoIH0gZnJvbSAnLi9iYXRjaCc7IC8vIGVuY2Fwc3VsYXRlcyB0aGUgc3Vic2NyaXB0aW9uIGxvZ2ljIGZvciBjb25uZWN0aW5nIGEgY29tcG9uZW50IHRvIHRoZSByZWR1eCBzdG9yZSwgYXNcbi8vIHdlbGwgYXMgbmVzdGluZyBzdWJzY3JpcHRpb25zIG9mIGRlc2NlbmRhbnQgY29tcG9uZW50cywgc28gdGhhdCB3ZSBjYW4gZW5zdXJlIHRoZVxuLy8gYW5jZXN0b3IgY29tcG9uZW50cyByZS1yZW5kZXIgYmVmb3JlIGRlc2NlbmRhbnRzXG5cbnZhciBDTEVBUkVEID0gbnVsbDtcbnZhciBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHt9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKSB7XG4gIHZhciBiYXRjaCA9IGdldEJhdGNoKCk7IC8vIHRoZSBjdXJyZW50L25leHQgcGF0dGVybiBpcyBjb3BpZWQgZnJvbSByZWR1eCdzIGNyZWF0ZVN0b3JlIGNvZGUuXG4gIC8vIFRPRE86IHJlZmFjdG9yK2V4cG9zZSB0aGF0IGNvZGUgdG8gYmUgcmV1c2FibGUgaGVyZT9cblxuICB2YXIgY3VycmVudCA9IFtdO1xuICB2YXIgbmV4dCA9IFtdO1xuICByZXR1cm4ge1xuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIG5leHQgPSBDTEVBUkVEO1xuICAgICAgY3VycmVudCA9IENMRUFSRUQ7XG4gICAgfSxcbiAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50ID0gbmV4dDtcbiAgICAgIGJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsaXN0ZW5lcnNbaV0oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgaWYgKG5leHQgPT09IGN1cnJlbnQpIG5leHQgPSBjdXJyZW50LnNsaWNlKCk7XG4gICAgICBuZXh0LnB1c2gobGlzdGVuZXIpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIWlzU3Vic2NyaWJlZCB8fCBjdXJyZW50ID09PSBDTEVBUkVEKSByZXR1cm47XG4gICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICBpZiAobmV4dCA9PT0gY3VycmVudCkgbmV4dCA9IGN1cnJlbnQuc2xpY2UoKTtcbiAgICAgICAgbmV4dC5zcGxpY2UobmV4dC5pbmRleE9mKGxpc3RlbmVyKSwgMSk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFN1YnNjcmlwdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMucGFyZW50U3ViID0gcGFyZW50U3ViO1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIgPSB0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdWJzY3JpcHRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGROZXN0ZWRTdWIgPSBmdW5jdGlvbiBhZGROZXN0ZWRTdWIobGlzdGVuZXIpIHtcbiAgICB0aGlzLnRyeVN1YnNjcmliZSgpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnlOZXN0ZWRTdWJzID0gZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlQ2hhbmdlV3JhcHBlciA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVdyYXBwZXIoKSB7XG4gICAgaWYgKHRoaXMub25TdGF0ZUNoYW5nZSkge1xuICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pc1N1YnNjcmliZWQgPSBmdW5jdGlvbiBpc1N1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy51bnN1YnNjcmliZSk7XG4gIH07XG5cbiAgX3Byb3RvLnRyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnBhcmVudFN1YiA/IHRoaXMucGFyZW50U3ViLmFkZE5lc3RlZFN1Yih0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIpIDogdGhpcy5zdG9yZS5zdWJzY3JpYmUodGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50cnlVbnN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTdWJzY3JpcHRpb247XG59KCk7XG5cbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5cbmZ1bmN0aW9uIFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIHN0b3JlID0gX3JlZi5zdG9yZSxcbiAgICAgIGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb250ZXh0VmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicztcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25cbiAgICB9O1xuICB9LCBbc3RvcmVdKTtcbiAgdmFyIHByZXZpb3VzU3RhdGUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgfSwgW3N0b3JlXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb247XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuXG4gICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IHN0b3JlLmdldFN0YXRlKCkpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuICAgIH07XG4gIH0sIFtjb250ZXh0VmFsdWUsIHByZXZpb3VzU3RhdGVdKTtcbiAgdmFyIENvbnRleHQgPSBjb250ZXh0IHx8IFJlYWN0UmVkdXhDb250ZXh0O1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICB9LCBjaGlsZHJlbik7XG59XG5cblByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgc3RvcmU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGdldFN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH0pLFxuICBjb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudFR5cGUsIGlzQ29udGV4dENvbnN1bWVyIH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnOyAvLyBEZWZpbmUgc29tZSBjb25zdGFudCBhcnJheXMganVzdCB0byBhdm9pZCByZS1jcmVhdGluZyB0aGVzZVxuXG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcbnZhciBOT19TVUJTQ1JJUFRJT05fQVJSQVkgPSBbbnVsbCwgbnVsbF07XG5cbnZhciBzdHJpbmdpZnlDb21wb25lbnQgPSBmdW5jdGlvbiBzdHJpbmdpZnlDb21wb25lbnQoQ29tcCkge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhDb21wKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gc3RvcmVTdGF0ZVVwZGF0ZXNSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgdmFyIHVwZGF0ZUNvdW50ID0gc3RhdGVbMV07XG4gIHJldHVybiBbYWN0aW9uLnBheWxvYWQsIHVwZGF0ZUNvdW50ICsgMV07XG59XG5cbnZhciBpbml0U3RhdGVVcGRhdGVzID0gZnVuY3Rpb24gaW5pdFN0YXRlVXBkYXRlcygpIHtcbiAgcmV0dXJuIFtudWxsLCAwXTtcbn07IC8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLiBXZSBuZWVkIHVzZUxheW91dEVmZmVjdCBiZWNhdXNlIHdlIHdhbnRcbi8vIGBjb25uZWN0YCB0byBwZXJmb3JtIHN5bmMgdXBkYXRlcyB0byBhIHJlZiB0byBzYXZlIHRoZSBsYXRlc3QgcHJvcHMgYWZ0ZXJcbi8vIGEgcmVuZGVyIGlzIGFjdHVhbGx5IGNvbW1pdHRlZCB0byB0aGUgRE9NLlxuXG5cbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbm5lY3RBZHZhbmNlZChcbi8qXG4gIHNlbGVjdG9yRmFjdG9yeSBpcyBhIGZ1bmMgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgcmV0dXJuaW5nIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB1c2VkIHRvXG4gIGNvbXB1dGUgbmV3IHByb3BzIGZyb20gc3RhdGUsIHByb3BzLCBhbmQgZGlzcGF0Y2guIEZvciBleGFtcGxlOlxuICAgICBleHBvcnQgZGVmYXVsdCBjb25uZWN0QWR2YW5jZWQoKGRpc3BhdGNoLCBvcHRpb25zKSA9PiAoc3RhdGUsIHByb3BzKSA9PiAoe1xuICAgICAgdGhpbmc6IHN0YXRlLnRoaW5nc1twcm9wcy50aGluZ0lkXSxcbiAgICAgIHNhdmVUaGluZzogZmllbGRzID0+IGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNhdmVUaGluZyhwcm9wcy50aGluZ0lkLCBmaWVsZHMpKSxcbiAgICB9KSkoWW91ckNvbXBvbmVudClcbiAgIEFjY2VzcyB0byBkaXNwYXRjaCBpcyBwcm92aWRlZCB0byB0aGUgZmFjdG9yeSBzbyBzZWxlY3RvckZhY3RvcmllcyBjYW4gYmluZCBhY3Rpb25DcmVhdG9yc1xuICBvdXRzaWRlIG9mIHRoZWlyIHNlbGVjdG9yIGFzIGFuIG9wdGltaXphdGlvbi4gT3B0aW9ucyBwYXNzZWQgdG8gY29ubmVjdEFkdmFuY2VkIGFyZSBwYXNzZWQgdG9cbiAgdGhlIHNlbGVjdG9yRmFjdG9yeSwgYWxvbmcgd2l0aCBkaXNwbGF5TmFtZSBhbmQgV3JhcHBlZENvbXBvbmVudCwgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAgIE5vdGUgdGhhdCBzZWxlY3RvckZhY3RvcnkgaXMgcmVzcG9uc2libGUgZm9yIGFsbCBjYWNoaW5nL21lbW9pemF0aW9uIG9mIGluYm91bmQgYW5kIG91dGJvdW5kXG4gIHByb3BzLiBEbyBub3QgdXNlIGNvbm5lY3RBZHZhbmNlZCBkaXJlY3RseSB3aXRob3V0IG1lbW9pemluZyByZXN1bHRzIGJldHdlZW4gY2FsbHMgdG8geW91clxuICBzZWxlY3Rvciwgb3RoZXJ3aXNlIHRoZSBDb25uZWN0IGNvbXBvbmVudCB3aWxsIHJlLXJlbmRlciBvbiBldmVyeSBzdGF0ZSBvciBwcm9wcyBjaGFuZ2UuXG4qL1xuc2VsZWN0b3JGYWN0b3J5LCAvLyBvcHRpb25zIG9iamVjdDpcbl9yZWYpIHtcbiAgaWYgKF9yZWYgPT09IHZvaWQgMCkge1xuICAgIF9yZWYgPSB7fTtcbiAgfVxuXG4gIHZhciBfcmVmMiA9IF9yZWYsXG4gICAgICBfcmVmMiRnZXREaXNwbGF5TmFtZSA9IF9yZWYyLmdldERpc3BsYXlOYW1lLFxuICAgICAgZ2V0RGlzcGxheU5hbWUgPSBfcmVmMiRnZXREaXNwbGF5TmFtZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gXCJDb25uZWN0QWR2YW5jZWQoXCIgKyBuYW1lICsgXCIpXCI7XG4gIH0gOiBfcmVmMiRnZXREaXNwbGF5TmFtZSxcbiAgICAgIF9yZWYyJG1ldGhvZE5hbWUgPSBfcmVmMi5tZXRob2ROYW1lLFxuICAgICAgbWV0aG9kTmFtZSA9IF9yZWYyJG1ldGhvZE5hbWUgPT09IHZvaWQgMCA/ICdjb25uZWN0QWR2YW5jZWQnIDogX3JlZjIkbWV0aG9kTmFtZSxcbiAgICAgIF9yZWYyJHJlbmRlckNvdW50UHJvcCA9IF9yZWYyLnJlbmRlckNvdW50UHJvcCxcbiAgICAgIHJlbmRlckNvdW50UHJvcCA9IF9yZWYyJHJlbmRlckNvdW50UHJvcCA9PT0gdm9pZCAwID8gdW5kZWZpbmVkIDogX3JlZjIkcmVuZGVyQ291bnRQcm9wLFxuICAgICAgX3JlZjIkc2hvdWxkSGFuZGxlU3RhID0gX3JlZjIuc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gX3JlZjIkc2hvdWxkSGFuZGxlU3RhID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjIkc2hvdWxkSGFuZGxlU3RhLFxuICAgICAgX3JlZjIkc3RvcmVLZXkgPSBfcmVmMi5zdG9yZUtleSxcbiAgICAgIHN0b3JlS2V5ID0gX3JlZjIkc3RvcmVLZXkgPT09IHZvaWQgMCA/ICdzdG9yZScgOiBfcmVmMiRzdG9yZUtleSxcbiAgICAgIF9yZWYyJHdpdGhSZWYgPSBfcmVmMi53aXRoUmVmLFxuICAgICAgd2l0aFJlZiA9IF9yZWYyJHdpdGhSZWYgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkd2l0aFJlZixcbiAgICAgIF9yZWYyJGZvcndhcmRSZWYgPSBfcmVmMi5mb3J3YXJkUmVmLFxuICAgICAgZm9yd2FyZFJlZiA9IF9yZWYyJGZvcndhcmRSZWYgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkZm9yd2FyZFJlZixcbiAgICAgIF9yZWYyJGNvbnRleHQgPSBfcmVmMi5jb250ZXh0LFxuICAgICAgY29udGV4dCA9IF9yZWYyJGNvbnRleHQgPT09IHZvaWQgMCA/IFJlYWN0UmVkdXhDb250ZXh0IDogX3JlZjIkY29udGV4dCxcbiAgICAgIGNvbm5lY3RPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImdldERpc3BsYXlOYW1lXCIsIFwibWV0aG9kTmFtZVwiLCBcInJlbmRlckNvdW50UHJvcFwiLCBcInNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlc1wiLCBcInN0b3JlS2V5XCIsIFwid2l0aFJlZlwiLCBcImZvcndhcmRSZWZcIiwgXCJjb250ZXh0XCJdKTtcblxuICBpbnZhcmlhbnQocmVuZGVyQ291bnRQcm9wID09PSB1bmRlZmluZWQsIFwicmVuZGVyQ291bnRQcm9wIGlzIHJlbW92ZWQuIHJlbmRlciBjb3VudGluZyBpcyBidWlsdCBpbnRvIHRoZSBsYXRlc3QgUmVhY3QgRGV2IFRvb2xzIHByb2ZpbGluZyBleHRlbnNpb25cIik7XG4gIGludmFyaWFudCghd2l0aFJlZiwgJ3dpdGhSZWYgaXMgcmVtb3ZlZC4gVG8gYWNjZXNzIHRoZSB3cmFwcGVkIGluc3RhbmNlLCB1c2UgYSByZWYgb24gdGhlIGNvbm5lY3RlZCBjb21wb25lbnQnKTtcbiAgdmFyIGN1c3RvbVN0b3JlV2FybmluZ01lc3NhZ2UgPSAnVG8gdXNlIGEgY3VzdG9tIFJlZHV4IHN0b3JlIGZvciBzcGVjaWZpYyBjb21wb25lbnRzLCBjcmVhdGUgYSBjdXN0b20gUmVhY3QgY29udGV4dCB3aXRoICcgKyBcIlJlYWN0LmNyZWF0ZUNvbnRleHQoKSwgYW5kIHBhc3MgdGhlIGNvbnRleHQgb2JqZWN0IHRvIFJlYWN0IFJlZHV4J3MgUHJvdmlkZXIgYW5kIHNwZWNpZmljIGNvbXBvbmVudHNcIiArICcgbGlrZTogPFByb3ZpZGVyIGNvbnRleHQ9e015Q29udGV4dH0+PENvbm5lY3RlZENvbXBvbmVudCBjb250ZXh0PXtNeUNvbnRleHR9IC8+PC9Qcm92aWRlcj4uICcgKyAnWW91IG1heSBhbHNvIHBhc3MgYSB7Y29udGV4dCA6IE15Q29udGV4dH0gb3B0aW9uIHRvIGNvbm5lY3QnO1xuICBpbnZhcmlhbnQoc3RvcmVLZXkgPT09ICdzdG9yZScsICdzdG9yZUtleSBoYXMgYmVlbiByZW1vdmVkIGFuZCBkb2VzIG5vdCBkbyBhbnl0aGluZy4gJyArIGN1c3RvbVN0b3JlV2FybmluZ01lc3NhZ2UpO1xuICB2YXIgQ29udGV4dCA9IGNvbnRleHQ7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwV2l0aENvbm5lY3QoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpbnZhcmlhbnQoaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpLCBcIllvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IFwiICsgKG1ldGhvZE5hbWUgKyBcIi4gSW5zdGVhZCByZWNlaXZlZCBcIiArIHN0cmluZ2lmeUNvbXBvbmVudChXcmFwcGVkQ29tcG9uZW50KSkpO1xuICAgIH1cblxuICAgIHZhciB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKHdyYXBwZWRDb21wb25lbnROYW1lKTtcblxuICAgIHZhciBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0gX2V4dGVuZHMoe30sIGNvbm5lY3RPcHRpb25zLCB7XG4gICAgICBnZXREaXNwbGF5TmFtZTogZ2V0RGlzcGxheU5hbWUsXG4gICAgICBtZXRob2ROYW1lOiBtZXRob2ROYW1lLFxuICAgICAgcmVuZGVyQ291bnRQcm9wOiByZW5kZXJDb3VudFByb3AsXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXM6IHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIHN0b3JlS2V5OiBzdG9yZUtleSxcbiAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcbiAgICAgIHdyYXBwZWRDb21wb25lbnROYW1lOiB3cmFwcGVkQ29tcG9uZW50TmFtZSxcbiAgICAgIFdyYXBwZWRDb21wb25lbnQ6IFdyYXBwZWRDb21wb25lbnRcbiAgICB9KTtcblxuICAgIHZhciBwdXJlID0gY29ubmVjdE9wdGlvbnMucHVyZTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkU2VsZWN0b3Ioc3RvcmUpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvckZhY3Rvcnkoc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgIH0gLy8gSWYgd2UgYXJlbid0IHJ1bm5pbmcgaW4gXCJwdXJlXCIgbW9kZSwgd2UgZG9uJ3Qgd2FudCB0byBtZW1vaXplIHZhbHVlcy5cbiAgICAvLyBUbyBhdm9pZCBjb25kaXRpb25hbGx5IGNhbGxpbmcgaG9va3MsIHdlIGZhbGwgYmFjayB0byBhIHRpbnkgd3JhcHBlclxuICAgIC8vIHRoYXQganVzdCBleGVjdXRlcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgaW1tZWRpYXRlbHkuXG5cblxuICAgIHZhciB1c2VQdXJlT25seU1lbW8gPSBwdXJlID8gdXNlTWVtbyA6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcykge1xuICAgICAgdmFyIF91c2VNZW1vID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERpc3Rpbmd1aXNoIGJldHdlZW4gYWN0dWFsIFwiZGF0YVwiIHByb3BzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIHdyYXBwZXIgY29tcG9uZW50LFxuICAgICAgICAvLyBhbmQgdmFsdWVzIG5lZWRlZCB0byBjb250cm9sIGJlaGF2aW9yIChmb3J3YXJkZWQgcmVmcywgYWx0ZXJuYXRlIGNvbnRleHQgaW5zdGFuY2VzKS5cbiAgICAgICAgLy8gVG8gbWFpbnRhaW4gdGhlIHdyYXBwZXJQcm9wcyBvYmplY3QgcmVmZXJlbmNlLCBtZW1vaXplIHRoaXMgZGVzdHJ1Y3R1cmluZy5cbiAgICAgICAgdmFyIGZvcndhcmRlZFJlZiA9IHByb3BzLmZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIHdyYXBwZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJmb3J3YXJkZWRSZWZcIl0pO1xuXG4gICAgICAgIHJldHVybiBbcHJvcHMuY29udGV4dCwgZm9yd2FyZGVkUmVmLCB3cmFwcGVyUHJvcHNdO1xuICAgICAgfSwgW3Byb3BzXSksXG4gICAgICAgICAgcHJvcHNDb250ZXh0ID0gX3VzZU1lbW9bMF0sXG4gICAgICAgICAgZm9yd2FyZGVkUmVmID0gX3VzZU1lbW9bMV0sXG4gICAgICAgICAgd3JhcHBlclByb3BzID0gX3VzZU1lbW9bMl07XG5cbiAgICAgIHZhciBDb250ZXh0VG9Vc2UgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlcnMgbWF5IG9wdGlvbmFsbHkgcGFzcyBpbiBhIGN1c3RvbSBjb250ZXh0IGluc3RhbmNlIHRvIHVzZSBpbnN0ZWFkIG9mIG91ciBSZWFjdFJlZHV4Q29udGV4dC5cbiAgICAgICAgLy8gTWVtb2l6ZSB0aGUgY2hlY2sgdGhhdCBkZXRlcm1pbmVzIHdoaWNoIGNvbnRleHQgaW5zdGFuY2Ugd2Ugc2hvdWxkIHVzZS5cbiAgICAgICAgcmV0dXJuIHByb3BzQ29udGV4dCAmJiBwcm9wc0NvbnRleHQuQ29uc3VtZXIgJiYgaXNDb250ZXh0Q29uc3VtZXIoUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsIG51bGwpKSA/IHByb3BzQ29udGV4dCA6IENvbnRleHQ7XG4gICAgICB9LCBbcHJvcHNDb250ZXh0LCBDb250ZXh0XSk7IC8vIFJldHJpZXZlIHRoZSBzdG9yZSBhbmQgYW5jZXN0b3Igc3Vic2NyaXB0aW9uIHZpYSBjb250ZXh0LCBpZiBhdmFpbGFibGVcblxuICAgICAgdmFyIGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoQ29udGV4dFRvVXNlKTsgLy8gVGhlIHN0b3JlIF9tdXN0XyBleGlzdCBhcyBlaXRoZXIgYSBwcm9wIG9yIGluIGNvbnRleHRcblxuICAgICAgdmFyIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpO1xuICAgICAgdmFyIGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID0gQm9vbGVhbihjb250ZXh0VmFsdWUpICYmIEJvb2xlYW4oY29udGV4dFZhbHVlLnN0b3JlKTtcbiAgICAgIGludmFyaWFudChkaWRTdG9yZUNvbWVGcm9tUHJvcHMgfHwgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQsIFwiQ291bGQgbm90IGZpbmQgXFxcInN0b3JlXFxcIiBpbiB0aGUgY29udGV4dCBvZiBcIiArIChcIlxcXCJcIiArIGRpc3BsYXlOYW1lICsgXCJcXFwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBcIikgKyBcIm9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBcIiArIChcIlJlYWN0IGNvbnRleHQgY29uc3VtZXIgdG8gXCIgKyBkaXNwbGF5TmFtZSArIFwiIGluIGNvbm5lY3Qgb3B0aW9ucy5cIikpO1xuICAgICAgdmFyIHN0b3JlID0gcHJvcHMuc3RvcmUgfHwgY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgdmFyIGNoaWxkUHJvcHNTZWxlY3RvciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUaGUgY2hpbGQgcHJvcHMgc2VsZWN0b3IgbmVlZHMgdGhlIHN0b3JlIHJlZmVyZW5jZSBhcyBhbiBpbnB1dC5cbiAgICAgICAgLy8gUmUtY3JlYXRlIHRoaXMgc2VsZWN0b3Igd2hlbmV2ZXIgdGhlIHN0b3JlIGNoYW5nZXMuXG4gICAgICAgIHJldHVybiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuXG4gICAgICB2YXIgX3VzZU1lbW8yID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZOyAvLyBUaGlzIFN1YnNjcmlwdGlvbidzIHNvdXJjZSBzaG91bGQgbWF0Y2ggd2hlcmUgc3RvcmUgY2FtZSBmcm9tOiBwcm9wcyB2cy4gY29udGV4dC4gQSBjb21wb25lbnRcbiAgICAgICAgLy8gY29ubmVjdGVkIHRvIHRoZSBzdG9yZSB2aWEgcHJvcHMgc2hvdWxkbid0IHVzZSBzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0LCBvciB2aWNlIHZlcnNhLlxuXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHN0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBudWxsIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvbik7IC8vIGBub3RpZnlOZXN0ZWRTdWJzYCBpcyBkdXBsaWNhdGVkIHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCBpblxuICAgICAgICAvLyB0aGUgbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcCwgd2hlcmUgYHN1YnNjcmlwdGlvbmAgd2lsbCB0aGVuIGJlIG51bGwuIFRoaXMgY2FuXG4gICAgICAgIC8vIHByb2JhYmx5IGJlIGF2b2lkZWQgaWYgU3Vic2NyaXB0aW9uJ3MgbGlzdGVuZXJzIGxvZ2ljIGlzIGNoYW5nZWQgdG8gbm90IGNhbGwgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRoYXQgaGF2ZSBiZWVuIHVuc3Vic2NyaWJlZCBpbiB0aGUgIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AuXG5cbiAgICAgICAgdmFyIG5vdGlmeU5lc3RlZFN1YnMgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKSxcbiAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdXNlTWVtbzJbMF0sXG4gICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyA9IF91c2VNZW1vMlsxXTsgLy8gRGV0ZXJtaW5lIHdoYXQge3N0b3JlLCBzdWJzY3JpcHRpb259IHZhbHVlIHNob3VsZCBiZSBwdXQgaW50byBuZXN0ZWQgY29udGV4dCwgaWYgbmVjZXNzYXJ5LFxuICAgICAgLy8gYW5kIG1lbW9pemUgdGhhdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBjb250ZXh0IHVwZGF0ZXMuXG5cblxuICAgICAgdmFyIG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIC8vIFRoaXMgY29tcG9uZW50IGlzIGRpcmVjdGx5IHN1YnNjcmliZWQgdG8gYSBzdG9yZSBmcm9tIHByb3BzLlxuICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgZGVzY2VuZGFudHMgcmVhZGluZyBmcm9tIHRoaXMgc3RvcmUgLSBwYXNzIGRvd24gd2hhdGV2ZXJcbiAgICAgICAgICAvLyB0aGUgZXhpc3RpbmcgY29udGV4dCB2YWx1ZSBpcyBmcm9tIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3Rvci5cbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSwgcHV0IHRoaXMgY29tcG9uZW50J3Mgc3Vic2NyaXB0aW9uIGluc3RhbmNlIGludG8gY29udGV4dCwgc28gdGhhdFxuICAgICAgICAvLyBjb25uZWN0ZWQgZGVzY2VuZGFudHMgd29uJ3QgdXBkYXRlIHVudGlsIGFmdGVyIHRoaXMgY29tcG9uZW50IGlzIGRvbmVcblxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dFZhbHVlLCB7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pOyAvLyBXZSBuZWVkIHRvIGZvcmNlIHRoaXMgd3JhcHBlciBjb21wb25lbnQgdG8gcmUtcmVuZGVyIHdoZW5ldmVyIGEgUmVkdXggc3RvcmUgdXBkYXRlXG4gICAgICAvLyBjYXVzZXMgYSBjaGFuZ2UgdG8gdGhlIGNhbGN1bGF0ZWQgY2hpbGQgY29tcG9uZW50IHByb3BzIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IgaW4gbWFwU3RhdGUpXG5cbiAgICAgIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoc3RvcmVTdGF0ZVVwZGF0ZXNSZWR1Y2VyLCBFTVBUWV9BUlJBWSwgaW5pdFN0YXRlVXBkYXRlcyksXG4gICAgICAgICAgX3VzZVJlZHVjZXIkID0gX3VzZVJlZHVjZXJbMF0sXG4gICAgICAgICAgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCA9IF91c2VSZWR1Y2VyJFswXSxcbiAgICAgICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoID0gX3VzZVJlZHVjZXJbMV07IC8vIFByb3BhZ2F0ZSBhbnkgbWFwU3RhdGUvbWFwRGlzcGF0Y2ggZXJyb3JzIHVwd2FyZHNcblxuXG4gICAgICBpZiAocHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCAmJiBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHRocm93IHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQuZXJyb3I7XG4gICAgICB9IC8vIFNldCB1cCByZWZzIHRvIGNvb3JkaW5hdGUgdmFsdWVzIGJldHdlZW4gdGhlIHN1YnNjcmlwdGlvbiBlZmZlY3QgYW5kIHRoZSByZW5kZXIgbG9naWNcblxuXG4gICAgICB2YXIgbGFzdENoaWxkUHJvcHMgPSB1c2VSZWYoKTtcbiAgICAgIHZhciBsYXN0V3JhcHBlclByb3BzID0gdXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICB2YXIgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IHVzZVJlZigpO1xuICAgICAgdmFyIHJlbmRlcklzU2NoZWR1bGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgIHZhciBhY3R1YWxDaGlsZFByb3BzID0gdXNlUHVyZU9ubHlNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVHJpY2t5IGxvZ2ljIGhlcmU6XG4gICAgICAgIC8vIC0gVGhpcyByZW5kZXIgbWF5IGhhdmUgYmVlbiB0cmlnZ2VyZWQgYnkgYSBSZWR1eCBzdG9yZSB1cGRhdGUgdGhhdCBwcm9kdWNlZCBuZXcgY2hpbGQgcHJvcHNcbiAgICAgICAgLy8gLSBIb3dldmVyLCB3ZSBtYXkgaGF2ZSBnb3R0ZW4gbmV3IHdyYXBwZXIgcHJvcHMgYWZ0ZXIgdGhhdFxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5ldyBjaGlsZCBwcm9wcywgYW5kIHRoZSBzYW1lIHdyYXBwZXIgcHJvcHMsIHdlIGtub3cgd2Ugc2hvdWxkIHVzZSB0aGUgbmV3IGNoaWxkIHByb3BzIGFzLWlzLlxuICAgICAgICAvLyBCdXQsIGlmIHdlIGhhdmUgbmV3IHdyYXBwZXIgcHJvcHMsIHRob3NlIG1pZ2h0IGNoYW5nZSB0aGUgY2hpbGQgcHJvcHMsIHNvIHdlIGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhpbmdzLlxuICAgICAgICAvLyBTbywgd2UnbGwgdXNlIHRoZSBjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZSBvbmx5IGlmIHRoZSB3cmFwcGVyIHByb3BzIGFyZSB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuXG4gICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICB9IC8vIFRPRE8gV2UncmUgcmVhZGluZyB0aGUgc3RvcmUgZGlyZWN0bHkgaW4gcmVuZGVyKCkgaGVyZS4gQmFkIGlkZWE/XG4gICAgICAgIC8vIFRoaXMgd2lsbCBsaWtlbHkgY2F1c2UgQmFkIFRoaW5ncyAoVE0pIHRvIGhhcHBlbiBpbiBDb25jdXJyZW50IE1vZGUuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyB0aGlzIGJlY2F1c2Ugb24gcmVuZGVycyBfbm90XyBjYXVzZWQgYnkgc3RvcmUgdXBkYXRlcywgd2UgbmVlZCB0aGUgbGF0ZXN0IHN0b3JlIHN0YXRlXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmUuXG5cblxuICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICB9LCBbc3RvcmUsIHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQsIHdyYXBwZXJQcm9wc10pOyAvLyBXZSBuZWVkIHRoaXMgdG8gZXhlY3V0ZSBzeW5jaHJvbm91c2x5IGV2ZXJ5IHRpbWUgd2UgcmUtcmVuZGVyLiBIb3dldmVyLCBSZWFjdCB3YXJuc1xuICAgICAgLy8gYWJvdXQgdXNlTGF5b3V0RWZmZWN0IGluIFNTUiwgc28gd2UgdHJ5IHRvIGRldGVjdCBlbnZpcm9ubWVudCBhbmQgZmFsbCBiYWNrIHRvXG4gICAgICAvLyBqdXN0IHVzZUVmZmVjdCBpbnN0ZWFkIHRvIGF2b2lkIHRoZSB3YXJuaW5nLCBzaW5jZSBuZWl0aGVyIHdpbGwgcnVuIGFueXdheS5cblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFdlIHdhbnQgdG8gY2FwdHVyZSB0aGUgd3JhcHBlciBwcm9wcyBhbmQgY2hpbGQgcHJvcHMgd2UgdXNlZCBmb3IgbGF0ZXIgY29tcGFyaXNvbnNcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICAgICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlOyAvLyBJZiB0aGUgcmVuZGVyIHdhcyBmcm9tIGEgc3RvcmUgdXBkYXRlLCBjbGVhciBvdXQgdGhhdCByZWZlcmVuY2UgYW5kIGNhc2NhZGUgdGhlIHN1YnNjcmliZXIgdXBkYXRlXG5cbiAgICAgICAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gT3VyIHJlLXN1YnNjcmliZSBsb2dpYyBvbmx5IHJ1bnMgd2hlbiB0aGUgc3RvcmUvc3Vic2NyaXB0aW9uIHNldHVwIGNoYW5nZXNcblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElmIHdlJ3JlIG5vdCBzdWJzY3JpYmVkIHRvIHRoZSBzdG9yZSwgbm90aGluZyB0byBkbyBoZXJlXG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm47IC8vIENhcHR1cmUgdmFsdWVzIGZvciBjaGVja2luZyBpZiBhbmQgd2hlbiB0aGlzIGNvbXBvbmVudCB1bm1vdW50c1xuXG4gICAgICAgIHZhciBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuICAgICAgICB2YXIgbGFzdFRocm93bkVycm9yID0gbnVsbDsgLy8gV2UnbGwgcnVuIHRoaXMgY2FsbGJhY2sgZXZlcnkgdGltZSBhIHN0b3JlIHN1YnNjcmlwdGlvbiB1cGRhdGUgcHJvcGFnYXRlcyB0byB0aGlzIGNvbXBvbmVudFxuXG4gICAgICAgIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiBjaGVja0ZvclVwZGF0ZXMoKSB7XG4gICAgICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBydW4gc3RhbGUgbGlzdGVuZXJzLlxuICAgICAgICAgICAgLy8gUmVkdXggZG9lc24ndCBndWFyYW50ZWUgdW5zdWJzY3JpcHRpb25zIGhhcHBlbiB1bnRpbCBuZXh0IGRpc3BhdGNoLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBsYXRlc3RTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICB2YXIgbmV3Q2hpbGRQcm9wcywgZXJyb3I7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQWN0dWFsbHkgcnVuIHRoZSBzZWxlY3RvciB3aXRoIHRoZSBtb3N0IHJlY2VudCBzdG9yZSBzdGF0ZSBhbmQgd3JhcHBlciBwcm9wc1xuICAgICAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHdoYXQgdGhlIGNoaWxkIHByb3BzIHNob3VsZCBiZVxuICAgICAgICAgICAgbmV3Q2hpbGRQcm9wcyA9IGNoaWxkUHJvcHNTZWxlY3RvcihsYXRlc3RTdG9yZVN0YXRlLCBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIGxhc3RUaHJvd25FcnJvciA9IGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgICAgICAgICB9IC8vIElmIHRoZSBjaGlsZCBwcm9wcyBoYXZlbid0IGNoYW5nZWQsIG5vdGhpbmcgdG8gZG8gaGVyZSAtIGNhc2NhZGUgdGhlIHN1YnNjcmlwdGlvbiB1cGRhdGVcblxuXG4gICAgICAgICAgaWYgKG5ld0NoaWxkUHJvcHMgPT09IGxhc3RDaGlsZFByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmICghcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCkge1xuICAgICAgICAgICAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNhdmUgcmVmZXJlbmNlcyB0byB0aGUgbmV3IGNoaWxkIHByb3BzLiAgTm90ZSB0aGF0IHdlIHRyYWNrIHRoZSBcImNoaWxkIHByb3BzIGZyb20gc3RvcmUgdXBkYXRlXCJcbiAgICAgICAgICAgIC8vIGFzIGEgcmVmIGluc3RlYWQgb2YgYSB1c2VTdGF0ZS91c2VSZWR1Y2VyIGJlY2F1c2Ugd2UgbmVlZCBhIHdheSB0byBkZXRlcm1pbmUgaWYgdGhhdCB2YWx1ZSBoYXNcbiAgICAgICAgICAgIC8vIGJlZW4gcHJvY2Vzc2VkLiAgSWYgdGhpcyB3ZW50IGludG8gdXNlU3RhdGUvdXNlUmVkdWNlciwgd2UgY291bGRuJ3QgY2xlYXIgb3V0IHRoZSB2YWx1ZSB3aXRob3V0XG4gICAgICAgICAgICAvLyBmb3JjaW5nIGFub3RoZXIgcmUtcmVuZGVyLCB3aGljaCB3ZSBkb24ndCB3YW50LlxuICAgICAgICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IHRydWU7IC8vIElmIHRoZSBjaGlsZCBwcm9wcyBfZGlkXyBjaGFuZ2UgKG9yIHdlIGNhdWdodCBhbiBlcnJvciksIHRoaXMgd3JhcHBlciBjb21wb25lbnQgbmVlZHMgdG8gcmUtcmVuZGVyXG5cbiAgICAgICAgICAgIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiAnU1RPUkVfVVBEQVRFRCcsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBsYXRlc3RTdG9yZVN0YXRlOiBsYXRlc3RTdG9yZVN0YXRlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07IC8vIEFjdHVhbGx5IHN1YnNjcmliZSB0byB0aGUgbmVhcmVzdCBjb25uZWN0ZWQgYW5jZXN0b3IgKG9yIHN0b3JlKVxuXG5cbiAgICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gICAgICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTsgLy8gUHVsbCBkYXRhIGZyb20gdGhlIHN0b3JlIGFmdGVyIGZpcnN0IHJlbmRlciBpbiBjYXNlIHRoZSBzdG9yZSBoYXNcbiAgICAgICAgLy8gY2hhbmdlZCBzaW5jZSB3ZSBiZWdhbi5cblxuICAgICAgICBjaGVja0ZvclVwZGF0ZXMoKTtcblxuICAgICAgICB2YXIgdW5zdWJzY3JpYmVXcmFwcGVyID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVXcmFwcGVyKCkge1xuICAgICAgICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IG51bGw7XG5cbiAgICAgICAgICBpZiAobGFzdFRocm93bkVycm9yKSB7XG4gICAgICAgICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgd2UgY2F1Z2h0IGFuIGVycm9yIGR1ZSB0byBhIGJhZCBtYXBTdGF0ZSBmdW5jdGlvbiwgYnV0IHRoZVxuICAgICAgICAgICAgLy8gcGFyZW50IHJlLXJlbmRlcmVkIHdpdGhvdXQgdGhpcyBjb21wb25lbnQgYW5kIHdlJ3JlIGFib3V0IHRvIHVubW91bnQuXG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gYXMgbG9uZyBhcyB3ZSBkbyB0b3AtZG93biBzdWJzY3JpcHRpb25zIGNvcnJlY3RseSwgYnV0XG4gICAgICAgICAgICAvLyBpZiB3ZSBldmVyIGRvIHRob3NlIHdyb25nLCB0aGlzIHRocm93IHdpbGwgc3VyZmFjZSB0aGUgZXJyb3IgaW4gb3VyIHRlc3RzLlxuICAgICAgICAgICAgLy8gSW4gdGhhdCBjYXNlLCB0aHJvdyB0aGUgZXJyb3IgZnJvbSBoZXJlIHNvIGl0IGRvZXNuJ3QgZ2V0IGxvc3QuXG4gICAgICAgICAgICB0aHJvdyBsYXN0VGhyb3duRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB1bnN1YnNjcmliZVdyYXBwZXI7XG4gICAgICB9LCBbc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yXSk7IC8vIE5vdyB0aGF0IGFsbCB0aGF0J3MgZG9uZSwgd2UgY2FuIGZpbmFsbHkgdHJ5IHRvIGFjdHVhbGx5IHJlbmRlciB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgbWVtb2l6ZSB0aGUgZWxlbWVudHMgZm9yIHRoZSByZW5kZXJlZCBjaGlsZCBjb21wb25lbnQgYXMgYW4gb3B0aW1pemF0aW9uLlxuXG4gICAgICB2YXIgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBhY3R1YWxDaGlsZFByb3BzLCB7XG4gICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWZcbiAgICAgICAgfSkpO1xuICAgICAgfSwgW2ZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pOyAvLyBJZiBSZWFjdCBzZWVzIHRoZSBleGFjdCBzYW1lIGVsZW1lbnQgcmVmZXJlbmNlIGFzIGxhc3QgdGltZSwgaXQgYmFpbHMgb3V0IG9mIHJlLXJlbmRlcmluZ1xuICAgICAgLy8gdGhhdCBjaGlsZCwgc2FtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBSZWFjdC5tZW1vKCkgb3IgcmV0dXJuZWQgZmFsc2UgZnJvbSBzaG91bGRDb21wb25lbnRVcGRhdGUuXG5cbiAgICAgIHZhciByZW5kZXJlZENoaWxkID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICAvLyBJZiB0aGlzIGNvbXBvbmVudCBpcyBzdWJzY3JpYmVkIHRvIHN0b3JlIHVwZGF0ZXMsIHdlIG5lZWQgdG8gcGFzcyBpdHMgb3duXG4gICAgICAgICAgLy8gc3Vic2NyaXB0aW9uIGluc3RhbmNlIGRvd24gdG8gb3VyIGRlc2NlbmRhbnRzLiBUaGF0IG1lYW5zIHJlbmRlcmluZyB0aGUgc2FtZVxuICAgICAgICAgIC8vIENvbnRleHQgaW5zdGFuY2UsIGFuZCBwdXR0aW5nIGEgZGlmZmVyZW50IHZhbHVlIGludG8gdGhlIGNvbnRleHQuXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dFRvVXNlLlByb3ZpZGVyLCB7XG4gICAgICAgICAgICB2YWx1ZTogb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZVxuICAgICAgICAgIH0sIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgfSwgW0NvbnRleHRUb1VzZSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50LCBvdmVycmlkZGVuQ29udGV4dFZhbHVlXSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZDtcbiAgICB9IC8vIElmIHdlJ3JlIGluIFwicHVyZVwiIG1vZGUsIGVuc3VyZSBvdXIgd3JhcHBlciBjb21wb25lbnQgb25seSByZS1yZW5kZXJzIHdoZW4gaW5jb21pbmcgcHJvcHMgaGF2ZSBjaGFuZ2VkLlxuXG5cbiAgICB2YXIgQ29ubmVjdCA9IHB1cmUgPyBSZWFjdC5tZW1vKENvbm5lY3RGdW5jdGlvbikgOiBDb25uZWN0RnVuY3Rpb247XG4gICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG5cbiAgICBpZiAoZm9yd2FyZFJlZikge1xuICAgICAgdmFyIGZvcndhcmRlZCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gZm9yd2FyZENvbm5lY3RSZWYocHJvcHMsIHJlZikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICAgIGZvcndhcmRlZC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgZm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIGhvaXN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBob2lzdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59IiwidmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFoYXNPd24uY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCIvKipcclxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gIGlmIChwcm90byA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIHZhciBiYXNlUHJvdG8gPSBwcm90bztcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcbiAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xufSIsIi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xuXG59IiwiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnLi9pc1BsYWluT2JqZWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vd2FybmluZyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQbGFpbk9iamVjdCh2YWx1ZSwgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm5pbmcobWV0aG9kTmFtZSArIFwiKCkgaW4gXCIgKyBkaXNwbGF5TmFtZSArIFwiIG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkIFwiICsgdmFsdWUgKyBcIi5cIik7XG4gIH1cbn0iLCJpbXBvcnQgdmVyaWZ5UGxhaW5PYmplY3QgZnJvbSAnLi4vdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZ2V0Q29uc3RhbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRDb25zdGFudFNlbGVjdG9yKGRpc3BhdGNoLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnN0YW50ID0gZ2V0Q29uc3RhbnQoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gY29uc3RhbnRTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBjb25zdGFudDtcbiAgICB9XG5cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59IC8vIGRlcGVuZHNPbk93blByb3BzIGlzIHVzZWQgYnkgY3JlYXRlTWFwVG9Qcm9wc1Byb3h5IHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHBhc3MgcHJvcHMgYXMgYXJnc1xuLy8gdG8gdGhlIG1hcFRvUHJvcHMgZnVuY3Rpb24gYmVpbmcgd3JhcHBlZC4gSXQgaXMgYWxzbyB1c2VkIGJ5IG1ha2VQdXJlUHJvcHNTZWxlY3RvciB0byBkZXRlcm1pbmVcbi8vIHdoZXRoZXIgbWFwVG9Qcm9wcyBuZWVkcyB0byBiZSBpbnZva2VkIHdoZW4gcHJvcHMgaGF2ZSBjaGFuZ2VkLlxuLy9cbi8vIEEgbGVuZ3RoIG9mIG9uZSBzaWduYWxzIHRoYXQgbWFwVG9Qcm9wcyBkb2VzIG5vdCBkZXBlbmQgb24gcHJvcHMgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudC5cbi8vIEEgbGVuZ3RoIG9mIHplcm8gaXMgYXNzdW1lZCB0byBtZWFuIG1hcFRvUHJvcHMgaXMgZ2V0dGluZyBhcmdzIHZpYSBhcmd1bWVudHMgb3IgLi4uYXJncyBhbmRcbi8vIHRoZXJlZm9yZSBub3QgcmVwb3J0aW5nIGl0cyBsZW5ndGggYWNjdXJhdGVseS4uXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzICE9PSBudWxsICYmIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgIT09IHVuZGVmaW5lZCA/IEJvb2xlYW4obWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgOiBtYXBUb1Byb3BzLmxlbmd0aCAhPT0gMTtcbn0gLy8gVXNlZCBieSB3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbiBhbmQgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24sXG4vLyB0aGlzIGZ1bmN0aW9uIHdyYXBzIG1hcFRvUHJvcHMgaW4gYSBwcm94eSBmdW5jdGlvbiB3aGljaCBkb2VzIHNldmVyYWwgdGhpbmdzOlxuLy9cbi8vICAqIERldGVjdHMgd2hldGhlciB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyBjYWxsZWQgZGVwZW5kcyBvbiBwcm9wcywgd2hpY2hcbi8vICAgIGlzIHVzZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHRvIGRlY2lkZSBpZiBpdCBzaG91bGQgcmVpbnZva2Ugb24gcHJvcHMgY2hhbmdlcy5cbi8vXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCBoYW5kbGVzIG1hcFRvUHJvcHMgaWYgcmV0dXJucyBhbm90aGVyIGZ1bmN0aW9uLCBhbmQgdHJlYXRzIHRoYXRcbi8vICAgIG5ldyBmdW5jdGlvbiBhcyB0aGUgdHJ1ZSBtYXBUb1Byb3BzIGZvciBzdWJzZXF1ZW50IGNhbGxzLlxuLy9cbi8vICAqIE9uIGZpcnN0IGNhbGwsIHZlcmlmaWVzIHRoZSBmaXJzdCByZXN1bHQgaXMgYSBwbGFpbiBvYmplY3QsIGluIG9yZGVyIHRvIHdhcm5cbi8vICAgIHRoZSBkZXZlbG9wZXIgdGhhdCB0aGVpciBtYXBUb1Byb3BzIGZ1bmN0aW9uIGlzIG5vdCByZXR1cm5pbmcgYSB2YWxpZCByZXN1bHQuXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZTtcblxuICAgIHZhciBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gpO1xuICAgIH07IC8vIGFsbG93IGRldGVjdEZhY3RvcnlBbmRWZXJpZnkgdG8gZ2V0IG93blByb3BzXG5cblxuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcblxuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIHZhciBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuXG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59IiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgd3JhcE1hcFRvUHJvcHNDb25zdGFudCwgd3JhcE1hcFRvUHJvcHNGdW5jIH0gZnJvbSAnLi93cmFwTWFwVG9Qcm9wcyc7XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24obWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc01pc3NpbmcobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwRGlzcGF0Y2hUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoXG4gICAgfTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdvYmplY3QnID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpO1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbiwgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZywgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0XTsiLCJpbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbihtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJykgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcFN0YXRlVG9Qcm9wc0lzTWlzc2luZyhtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge307XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nXTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvd25Qcm9wcywge30sIHN0YXRlUHJvcHMsIHt9LCBkaXNwYXRjaFByb3BzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdE1lcmdlUHJvcHNQcm94eShkaXNwYXRjaCwgX3JlZikge1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IF9yZWYuZGlzcGxheU5hbWUsXG4gICAgICAgIHB1cmUgPSBfcmVmLnB1cmUsXG4gICAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBfcmVmLmFyZU1lcmdlZFByb3BzRXF1YWw7XG4gICAgdmFyIGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICB2YXIgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgdmFyIG5leHRNZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuXG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIXB1cmUgfHwgIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzUnVuT25jZSA9IHRydWU7XG4gICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgdmVyaWZ5UGxhaW5PYmplY3QobWVyZ2VkUHJvcHMsIGRpc3BsYXlOYW1lLCAnbWVyZ2VQcm9wcycpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gICAgfTtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWVyZ2VQcm9wc0lzRnVuY3Rpb24obWVyZ2VQcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1lcmdlUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc09taXR0ZWQobWVyZ2VQcm9wcykge1xuICByZXR1cm4gIW1lcmdlUHJvcHMgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNZXJnZVByb3BzO1xuICB9IDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGRlZmF1bHQgW3doZW5NZXJnZVByb3BzSXNGdW5jdGlvbiwgd2hlbk1lcmdlUHJvcHNJc09taXR0ZWRdOyIsImltcG9ydCB3YXJuaW5nIGZyb20gJy4uL3V0aWxzL3dhcm5pbmcnO1xuXG5mdW5jdGlvbiB2ZXJpZnkoc2VsZWN0b3IsIG1ldGhvZE5hbWUsIGRpc3BsYXlOYW1lKSB7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHZhbHVlIGZvciBcIiArIG1ldGhvZE5hbWUgKyBcIiBpbiBcIiArIGRpc3BsYXlOYW1lICsgXCIuXCIpO1xuICB9IGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09ICdtYXBTdGF0ZVRvUHJvcHMnIHx8IG1ldGhvZE5hbWUgPT09ICdtYXBEaXNwYXRjaFRvUHJvcHMnKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2VsZWN0b3IsICdkZXBlbmRzT25Pd25Qcm9wcycpKSB7XG4gICAgICB3YXJuaW5nKFwiVGhlIHNlbGVjdG9yIGZvciBcIiArIG1ldGhvZE5hbWUgKyBcIiBvZiBcIiArIGRpc3BsYXlOYW1lICsgXCIgZGlkIG5vdCBzcGVjaWZ5IGEgdmFsdWUgZm9yIGRlcGVuZHNPbk93blByb3BzLlwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2ZXJpZnkobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJywgZGlzcGxheU5hbWUpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJywgZGlzcGxheU5hbWUpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgJ21lcmdlUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG59IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgdmVyaWZ5U3Vic2VsZWN0b3JzIGZyb20gJy4vdmVyaWZ5U3Vic2VsZWN0b3JzJztcbmV4cG9ydCBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW1wdXJlRmluYWxQcm9wc1NlbGVjdG9yKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiBtZXJnZVByb3BzKG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpLCBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKSwgb3duUHJvcHMpO1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgX3JlZikge1xuICB2YXIgYXJlU3RhdGVzRXF1YWwgPSBfcmVmLmFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbCA9IF9yZWYuYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCA9IF9yZWYuYXJlU3RhdGVQcm9wc0VxdWFsO1xuICB2YXIgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgdmFyIHN0YXRlO1xuICB2YXIgb3duUHJvcHM7XG4gIHZhciBzdGF0ZVByb3BzO1xuICB2YXIgZGlzcGF0Y2hQcm9wcztcbiAgdmFyIG1lcmdlZFByb3BzO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLCBmaXJzdE93blByb3BzKSB7XG4gICAgc3RhdGUgPSBmaXJzdFN0YXRlO1xuICAgIG93blByb3BzID0gZmlyc3RPd25Qcm9wcztcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgaGFzUnVuQXRMZWFzdE9uY2UgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKSB7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzKCkge1xuICAgIGlmIChtYXBTdGF0ZVRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdTdGF0ZSgpIHtcbiAgICB2YXIgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICB2YXIgc3RhdGVQcm9wc0NoYW5nZWQgPSAhYXJlU3RhdGVQcm9wc0VxdWFsKG5leHRTdGF0ZVByb3BzLCBzdGF0ZVByb3BzKTtcbiAgICBzdGF0ZVByb3BzID0gbmV4dFN0YXRlUHJvcHM7XG4gICAgaWYgKHN0YXRlUHJvcHNDaGFuZ2VkKSBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHZhciBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICB2YXIgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKG5leHRTdGF0ZSwgc3RhdGUpO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuICAgIGlmIChwcm9wc0NoYW5nZWQgJiYgc3RhdGVDaGFuZ2VkKSByZXR1cm4gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpO1xuICAgIGlmIChwcm9wc0NoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgcmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlID8gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA6IGhhbmRsZUZpcnN0Q2FsbChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcyk7XG4gIH07XG59IC8vIFRPRE86IEFkZCBtb3JlIGNvbW1lbnRzXG4vLyBJZiBwdXJlIGlzIHRydWUsIHRoZSBzZWxlY3RvciByZXR1cm5lZCBieSBzZWxlY3RvckZhY3Rvcnkgd2lsbCBtZW1vaXplIGl0cyByZXN1bHRzLFxuLy8gYWxsb3dpbmcgY29ubmVjdEFkdmFuY2VkJ3Mgc2hvdWxkQ29tcG9uZW50VXBkYXRlIHRvIHJldHVybiBmYWxzZSBpZiBmaW5hbFxuLy8gcHJvcHMgaGF2ZSBub3QgY2hhbmdlZC4gSWYgZmFsc2UsIHRoZSBzZWxlY3RvciB3aWxsIGFsd2F5cyByZXR1cm4gYSBuZXdcbi8vIG9iamVjdCBhbmQgc2hvdWxkQ29tcG9uZW50VXBkYXRlIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KGRpc3BhdGNoLCBfcmVmMikge1xuICB2YXIgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IF9yZWYyLmluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gX3JlZjIuaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzID0gX3JlZjIuaW5pdE1lcmdlUHJvcHMsXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImluaXRNYXBTdGF0ZVRvUHJvcHNcIiwgXCJpbml0TWFwRGlzcGF0Y2hUb1Byb3BzXCIsIFwiaW5pdE1lcmdlUHJvcHNcIl0pO1xuXG4gIHZhciBtYXBTdGF0ZVRvUHJvcHMgPSBpbml0TWFwU3RhdGVUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgdmFyIG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWVyZ2VQcm9wcyA9IGluaXRNZXJnZVByb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgb3B0aW9ucy5kaXNwbGF5TmFtZSk7XG4gIH1cblxuICB2YXIgc2VsZWN0b3JGYWN0b3J5ID0gb3B0aW9ucy5wdXJlID8gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkgOiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5O1xuICByZXR1cm4gc2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjb25uZWN0QWR2YW5jZWQgZnJvbSAnLi4vY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuLi91dGlscy9zaGFsbG93RXF1YWwnO1xuaW1wb3J0IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tYXBEaXNwYXRjaFRvUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tYXBTdGF0ZVRvUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRNZXJnZVByb3BzRmFjdG9yaWVzIGZyb20gJy4vbWVyZ2VQcm9wcyc7XG5pbXBvcnQgZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuL3NlbGVjdG9yRmFjdG9yeSc7XG4vKlxuICBjb25uZWN0IGlzIGEgZmFjYWRlIG92ZXIgY29ubmVjdEFkdmFuY2VkLiBJdCB0dXJucyBpdHMgYXJncyBpbnRvIGEgY29tcGF0aWJsZVxuICBzZWxlY3RvckZhY3RvcnksIHdoaWNoIGhhcyB0aGUgc2lnbmF0dXJlOlxuXG4gICAgKGRpc3BhdGNoLCBvcHRpb25zKSA9PiAobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpID0+IG5leHRGaW5hbFByb3BzXG4gIFxuICBjb25uZWN0IHBhc3NlcyBpdHMgYXJncyB0byBjb25uZWN0QWR2YW5jZWQgYXMgb3B0aW9ucywgd2hpY2ggd2lsbCBpbiB0dXJuIHBhc3MgdGhlbSB0b1xuICBzZWxlY3RvckZhY3RvcnkgZWFjaCB0aW1lIGEgQ29ubmVjdCBjb21wb25lbnQgaW5zdGFuY2UgaXMgaW5zdGFudGlhdGVkIG9yIGhvdCByZWxvYWRlZC5cblxuICBzZWxlY3RvckZhY3RvcnkgcmV0dXJucyBhIGZpbmFsIHByb3BzIHNlbGVjdG9yIGZyb20gaXRzIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcywgbWVyZ2VQcm9wcyxcbiAgbWVyZ2VQcm9wc0ZhY3RvcmllcywgYW5kIHB1cmUgYXJncy5cblxuICBUaGUgcmVzdWx0aW5nIGZpbmFsIHByb3BzIHNlbGVjdG9yIGlzIGNhbGxlZCBieSB0aGUgQ29ubmVjdCBjb21wb25lbnQgaW5zdGFuY2Ugd2hlbmV2ZXJcbiAgaXQgcmVjZWl2ZXMgbmV3IHByb3BzIG9yIHN0b3JlIHN0YXRlLlxuICovXG5cbmZ1bmN0aW9uIG1hdGNoKGFyZywgZmFjdG9yaWVzLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSBmYWN0b3JpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFjdG9yaWVzW2ldKGFyZyk7XG4gICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gsIG9wdGlvbnMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIG9mIHR5cGUgXCIgKyB0eXBlb2YgYXJnICsgXCIgZm9yIFwiICsgbmFtZSArIFwiIGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgXCIgKyBvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lICsgXCIuXCIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufSAvLyBjcmVhdGVDb25uZWN0IHdpdGggZGVmYXVsdCBhcmdzIGJ1aWxkcyB0aGUgJ29mZmljaWFsJyBjb25uZWN0IGJlaGF2aW9yLiBDYWxsaW5nIGl0IHdpdGhcbi8vIGRpZmZlcmVudCBvcHRpb25zIG9wZW5zIHVwIHNvbWUgdGVzdGluZyBhbmQgZXh0ZW5zaWJpbGl0eSBzY2VuYXJpb3NcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29ubmVjdChfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRjb25uZWN0SE9DID0gX3JlZi5jb25uZWN0SE9DLFxuICAgICAgY29ubmVjdEhPQyA9IF9yZWYkY29ubmVjdEhPQyA9PT0gdm9pZCAwID8gY29ubmVjdEFkdmFuY2VkIDogX3JlZiRjb25uZWN0SE9DLFxuICAgICAgX3JlZiRtYXBTdGF0ZVRvUHJvcHNGID0gX3JlZi5tYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YgPT09IHZvaWQgMCA/IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YsXG4gICAgICBfcmVmJG1hcERpc3BhdGNoVG9Qcm8gPSBfcmVmLm1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWFwRGlzcGF0Y2hUb1BybyA9PT0gdm9pZCAwID8gZGVmYXVsdE1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWFwRGlzcGF0Y2hUb1BybyxcbiAgICAgIF9yZWYkbWVyZ2VQcm9wc0ZhY3RvciA9IF9yZWYubWVyZ2VQcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1lcmdlUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1lcmdlUHJvcHNGYWN0b3IgPT09IHZvaWQgMCA/IGRlZmF1bHRNZXJnZVByb3BzRmFjdG9yaWVzIDogX3JlZiRtZXJnZVByb3BzRmFjdG9yLFxuICAgICAgX3JlZiRzZWxlY3RvckZhY3RvcnkgPSBfcmVmLnNlbGVjdG9yRmFjdG9yeSxcbiAgICAgIHNlbGVjdG9yRmFjdG9yeSA9IF9yZWYkc2VsZWN0b3JGYWN0b3J5ID09PSB2b2lkIDAgPyBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5IDogX3JlZiRzZWxlY3RvckZhY3Rvcnk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIF9yZWYyKSB7XG4gICAgaWYgKF9yZWYyID09PSB2b2lkIDApIHtcbiAgICAgIF9yZWYyID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9yZWYzID0gX3JlZjIsXG4gICAgICAgIF9yZWYzJHB1cmUgPSBfcmVmMy5wdXJlLFxuICAgICAgICBwdXJlID0gX3JlZjMkcHVyZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYzJHB1cmUsXG4gICAgICAgIF9yZWYzJGFyZVN0YXRlc0VxdWFsID0gX3JlZjMuYXJlU3RhdGVzRXF1YWwsXG4gICAgICAgIGFyZVN0YXRlc0VxdWFsID0gX3JlZjMkYXJlU3RhdGVzRXF1YWwgPT09IHZvaWQgMCA/IHN0cmljdEVxdWFsIDogX3JlZjMkYXJlU3RhdGVzRXF1YWwsXG4gICAgICAgIF9yZWYzJGFyZU93blByb3BzRXF1YSA9IF9yZWYzLmFyZU93blByb3BzRXF1YWwsXG4gICAgICAgIGFyZU93blByb3BzRXF1YWwgPSBfcmVmMyRhcmVPd25Qcm9wc0VxdWEgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZU93blByb3BzRXF1YSxcbiAgICAgICAgX3JlZjMkYXJlU3RhdGVQcm9wc0VxID0gX3JlZjMuYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBfcmVmMyRhcmVTdGF0ZVByb3BzRXEgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZVN0YXRlUHJvcHNFcSxcbiAgICAgICAgX3JlZjMkYXJlTWVyZ2VkUHJvcHNFID0gX3JlZjMuYXJlTWVyZ2VkUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IF9yZWYzJGFyZU1lcmdlZFByb3BzRSA9PT0gdm9pZCAwID8gc2hhbGxvd0VxdWFsIDogX3JlZjMkYXJlTWVyZ2VkUHJvcHNFLFxuICAgICAgICBleHRyYU9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wicHVyZVwiLCBcImFyZVN0YXRlc0VxdWFsXCIsIFwiYXJlT3duUHJvcHNFcXVhbFwiLCBcImFyZVN0YXRlUHJvcHNFcXVhbFwiLCBcImFyZU1lcmdlZFByb3BzRXF1YWxcIl0pO1xuXG4gICAgdmFyIGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBtYXRjaChtYXBTdGF0ZVRvUHJvcHMsIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgJ21hcFN0YXRlVG9Qcm9wcycpO1xuICAgIHZhciBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWF0Y2gobWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsICdtYXBEaXNwYXRjaFRvUHJvcHMnKTtcbiAgICB2YXIgaW5pdE1lcmdlUHJvcHMgPSBtYXRjaChtZXJnZVByb3BzLCBtZXJnZVByb3BzRmFjdG9yaWVzLCAnbWVyZ2VQcm9wcycpO1xuICAgIHJldHVybiBjb25uZWN0SE9DKHNlbGVjdG9yRmFjdG9yeSwgX2V4dGVuZHMoe1xuICAgICAgLy8gdXNlZCBpbiBlcnJvciBtZXNzYWdlc1xuICAgICAgbWV0aG9kTmFtZTogJ2Nvbm5lY3QnLFxuICAgICAgLy8gdXNlZCB0byBjb21wdXRlIENvbm5lY3QncyBkaXNwbGF5TmFtZSBmcm9tIHRoZSB3cmFwcGVkIGNvbXBvbmVudCdzIGRpc3BsYXlOYW1lLlxuICAgICAgZ2V0RGlzcGxheU5hbWU6IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiQ29ubmVjdChcIiArIG5hbWUgKyBcIilcIjtcbiAgICAgIH0sXG4gICAgICAvLyBpZiBtYXBTdGF0ZVRvUHJvcHMgaXMgZmFsc3ksIHRoZSBDb25uZWN0IGNvbXBvbmVudCBkb2Vzbid0IHN1YnNjcmliZSB0byBzdG9yZSBzdGF0ZSBjaGFuZ2VzXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXM6IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKSxcbiAgICAgIC8vIHBhc3NlZCB0aHJvdWdoIHRvIHNlbGVjdG9yRmFjdG9yeVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wczogaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHM6IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wczogaW5pdE1lcmdlUHJvcHMsXG4gICAgICBwdXJlOiBwdXJlLFxuICAgICAgYXJlU3RhdGVzRXF1YWw6IGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbDogYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbDogYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbDogYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICAgIH0sIGV4dHJhT3B0aW9ucykpO1xuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29ubmVjdCgpOyIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG4vKipcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHZhbHVlIG9mIHRoZSBgUmVhY3RSZWR1eENvbnRleHRgLiBUaGlzIGlzIGEgbG93LWxldmVsXG4gKiBob29rIHRoYXQgeW91IHNob3VsZCB1c3VhbGx5IG5vdCBuZWVkIHRvIGNhbGwgZGlyZWN0bHkuXG4gKlxuICogQHJldHVybnMge2FueX0gdGhlIHZhbHVlIG9mIHRoZSBgUmVhY3RSZWR1eENvbnRleHRgXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4gKiBpbXBvcnQgeyB1c2VSZWR1eENvbnRleHQgfSBmcm9tICdyZWFjdC1yZWR1eCdcbiAqXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcbiAqICAgY29uc3QgeyBzdG9yZSB9ID0gdXNlUmVkdXhDb250ZXh0KClcbiAqICAgcmV0dXJuIDxkaXY+e3N0b3JlLmdldFN0YXRlKCl9PC9kaXY+XG4gKiB9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHV4Q29udGV4dCgpIHtcbiAgdmFyIGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoUmVhY3RSZWR1eENvbnRleHQpO1xuICBpbnZhcmlhbnQoY29udGV4dFZhbHVlLCAnY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+Jyk7XG4gIHJldHVybiBjb250ZXh0VmFsdWU7XG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0JztcbmltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCBhcyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi91c2VSZWR1eENvbnRleHQnO1xuLyoqXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlU3RvcmVgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb250ZXh0PVJlYWN0UmVkdXhDb250ZXh0XSBDb250ZXh0IHBhc3NlZCB0byB5b3VyIGA8UHJvdmlkZXI+YC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlU3RvcmVgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0O1xuICB9XG5cbiAgdmFyIHVzZVJlZHV4Q29udGV4dCA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFJlZHV4Q29udGV4dCA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChjb250ZXh0KTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVN0b3JlKCkge1xuICAgIHZhciBfdXNlUmVkdXhDb250ZXh0ID0gdXNlUmVkdXhDb250ZXh0KCksXG4gICAgICAgIHN0b3JlID0gX3VzZVJlZHV4Q29udGV4dC5zdG9yZTtcblxuICAgIHJldHVybiBzdG9yZTtcbiAgfTtcbn1cbi8qKlxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggc3RvcmUuXG4gKlxuICogQHJldHVybnMge2FueX0gdGhlIHJlZHV4IHN0b3JlXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4gKiBpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuICpcbiAqIGV4cG9ydCBjb25zdCBFeGFtcGxlQ29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKClcbiAqICAgcmV0dXJuIDxkaXY+e3N0b3JlLmdldFN0YXRlKCl9PC9kaXY+XG4gKiB9XG4gKi9cblxuZXhwb3J0IHZhciB1c2VTdG9yZSA9IGNyZWF0ZVN0b3JlSG9vaygpOyIsImltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0JztcbmltcG9ydCB7IHVzZVN0b3JlIGFzIHVzZURlZmF1bHRTdG9yZSwgY3JlYXRlU3RvcmVIb29rIH0gZnJvbSAnLi91c2VTdG9yZSc7XG4vKipcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQ7XG4gIH1cblxuICB2YXIgdXNlU3RvcmUgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZURpc3BhdGNoKCkge1xuICAgIHZhciBzdG9yZSA9IHVzZVN0b3JlKCk7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xufVxuLyoqXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBgZGlzcGF0Y2hgIGZ1bmN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHthbnl8ZnVuY3Rpb259IHJlZHV4IHN0b3JlJ3MgYGRpc3BhdGNoYCBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG4gKiBpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuICpcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKHsgdmFsdWUgfSkgPT4ge1xuICogICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAqICAgY29uc3QgaW5jcmVhc2VDb3VudGVyID0gdXNlQ2FsbGJhY2soKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnaW5jcmVhc2UtY291bnRlcicgfSksIFtdKVxuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZWFzZUNvdW50ZXJ9PkluY3JlYXNlIGNvdW50ZXI8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKVxuICogfVxuICovXG5cbmV4cG9ydCB2YXIgdXNlRGlzcGF0Y2ggPSBjcmVhdGVEaXNwYXRjaEhvb2soKTsiLCJpbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlTGF5b3V0RWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IGFzIHVzZURlZmF1bHRSZWR1eENvbnRleHQgfSBmcm9tICcuL3VzZVJlZHV4Q29udGV4dCc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7IC8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLiBXZSBuZWVkIHVzZUxheW91dEVmZmVjdCB0byBlbnN1cmUgdGhlIHN0b3JlXG4vLyBzdWJzY3JpcHRpb24gY2FsbGJhY2sgYWx3YXlzIGhhcyB0aGUgc2VsZWN0b3IgZnJvbSB0aGUgbGF0ZXN0IHJlbmRlciBjb21taXRcbi8vIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGEgc3RvcmUgdXBkYXRlIG1heSBoYXBwZW4gYmV0d2VlbiByZW5kZXIgYW5kIHRoZSBlZmZlY3QsXG4vLyB3aGljaCBtYXkgY2F1c2UgbWlzc2VkIHVwZGF0ZXM7IHdlIGFsc28gbXVzdCBlbnN1cmUgdGhlIHN0b3JlIHN1YnNjcmlwdGlvblxuLy8gaXMgY3JlYXRlZCBzeW5jaHJvbm91c2x5LCBvdGhlcndpc2UgYSBzdG9yZSB1cGRhdGUgbWF5IG9jY3VyIGJlZm9yZSB0aGVcbi8vIHN1YnNjcmlwdGlvbiBpcyBjcmVhdGVkIGFuZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUgbWF5IGJlIG9ic2VydmVkXG5cbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5cbnZhciByZWZFcXVhbGl0eSA9IGZ1bmN0aW9uIHJlZkVxdWFsaXR5KGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5mdW5jdGlvbiB1c2VTZWxlY3RvcldpdGhTdG9yZUFuZFN1YnNjcmlwdGlvbihzZWxlY3RvciwgZXF1YWxpdHlGbiwgc3RvcmUsIGNvbnRleHRTdWIpIHtcbiAgdmFyIF91c2VSZWR1Y2VyID0gdXNlUmVkdWNlcihmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzICsgMTtcbiAgfSwgMCksXG4gICAgICBmb3JjZVJlbmRlciA9IF91c2VSZWR1Y2VyWzFdO1xuXG4gIHZhciBzdWJzY3JpcHRpb24gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbihzdG9yZSwgY29udGV4dFN1Yik7XG4gIH0sIFtzdG9yZSwgY29udGV4dFN1Yl0pO1xuICB2YXIgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvciA9IHVzZVJlZigpO1xuICB2YXIgbGF0ZXN0U2VsZWN0b3IgPSB1c2VSZWYoKTtcbiAgdmFyIGxhdGVzdFNlbGVjdGVkU3RhdGUgPSB1c2VSZWYoKTtcbiAgdmFyIHNlbGVjdGVkU3RhdGU7XG5cbiAgdHJ5IHtcbiAgICBpZiAoc2VsZWN0b3IgIT09IGxhdGVzdFNlbGVjdG9yLmN1cnJlbnQgfHwgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICBzZWxlY3RlZFN0YXRlID0gc2VsZWN0b3Ioc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkU3RhdGUgPSBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQ7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJBbiBlcnJvciBvY2N1cmVkIHdoaWxlIHNlbGVjdGluZyB0aGUgc3RvcmUgc3RhdGU6IFwiICsgZXJyLm1lc3NhZ2UgKyBcIi5cIjtcblxuICAgIGlmIChsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpIHtcbiAgICAgIGVycm9yTWVzc2FnZSArPSBcIlxcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XFxuXCIgKyBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQuc3RhY2sgKyBcIlxcblxcbk9yaWdpbmFsIHN0YWNrIHRyYWNlOlwiO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbGF0ZXN0U2VsZWN0b3IuY3VycmVudCA9IHNlbGVjdG9yO1xuICAgIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCA9IHNlbGVjdGVkU3RhdGU7XG4gICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICB9KTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5ld1NlbGVjdGVkU3RhdGUgPSBsYXRlc3RTZWxlY3Rvci5jdXJyZW50KHN0b3JlLmdldFN0YXRlKCkpO1xuXG4gICAgICAgIGlmIChlcXVhbGl0eUZuKG5ld1NlbGVjdGVkU3RhdGUsIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQgPSBuZXdTZWxlY3RlZFN0YXRlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHdlIGlnbm9yZSBhbGwgZXJyb3JzIGhlcmUsIHNpbmNlIHdoZW4gdGhlIGNvbXBvbmVudFxuICAgICAgICAvLyBpcyByZS1yZW5kZXJlZCwgdGhlIHNlbGVjdG9ycyBhcmUgY2FsbGVkIGFnYWluLCBhbmRcbiAgICAgICAgLy8gd2lsbCB0aHJvdyBhZ2FpbiwgaWYgbmVpdGhlciBwcm9wcyBub3Igc3RvcmUgc3RhdGVcbiAgICAgICAgLy8gY2hhbmdlZFxuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSBlcnI7XG4gICAgICB9XG5cbiAgICAgIGZvcmNlUmVuZGVyKHt9KTtcbiAgICB9XG5cbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gICAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbc3RvcmUsIHN1YnNjcmlwdGlvbl0pO1xuICByZXR1cm4gc2VsZWN0ZWRTdGF0ZTtcbn1cbi8qKlxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVNlbGVjdG9yYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVNlbGVjdG9yYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3Rvckhvb2soY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0O1xuICB9XG5cbiAgdmFyIHVzZVJlZHV4Q29udGV4dCA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFJlZHV4Q29udGV4dCA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChjb250ZXh0KTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVNlbGVjdG9yKHNlbGVjdG9yLCBlcXVhbGl0eUZuKSB7XG4gICAgaWYgKGVxdWFsaXR5Rm4gPT09IHZvaWQgMCkge1xuICAgICAgZXF1YWxpdHlGbiA9IHJlZkVxdWFsaXR5O1xuICAgIH1cblxuICAgIGludmFyaWFudChzZWxlY3RvciwgXCJZb3UgbXVzdCBwYXNzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JzXCIpO1xuXG4gICAgdmFyIF91c2VSZWR1eENvbnRleHQgPSB1c2VSZWR1eENvbnRleHQoKSxcbiAgICAgICAgc3RvcmUgPSBfdXNlUmVkdXhDb250ZXh0LnN0b3JlLFxuICAgICAgICBjb250ZXh0U3ViID0gX3VzZVJlZHV4Q29udGV4dC5zdWJzY3JpcHRpb247XG5cbiAgICByZXR1cm4gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKTtcbiAgfTtcbn1cbi8qKlxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggc3RvcmUncyBzdGF0ZS4gVGhpcyBob29rIHRha2VzIGEgc2VsZWN0b3IgZnVuY3Rpb25cbiAqIGFzIGFuIGFyZ3VtZW50LiBUaGUgc2VsZWN0b3IgaXMgY2FsbGVkIHdpdGggdGhlIHN0b3JlIHN0YXRlLlxuICpcbiAqIFRoaXMgaG9vayB0YWtlcyBhbiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJpc29uIGZ1bmN0aW9uIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyXG4gKiB0aGF0IGFsbG93cyB5b3UgdG8gY3VzdG9taXplIHRoZSB3YXkgdGhlIHNlbGVjdGVkIHN0YXRlIGlzIGNvbXBhcmVkIHRvIGRldGVybWluZVxuICogd2hldGhlciB0aGUgY29tcG9uZW50IG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNlbGVjdG9yIHRoZSBzZWxlY3RvciBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbj19IGVxdWFsaXR5Rm4gdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBlcXVhbGl0eVxuICpcbiAqIEByZXR1cm5zIHthbnl9IHRoZSBzZWxlY3RlZCBzdGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICogaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbiAqXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3QgY291bnRlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNvdW50ZXIpXG4gKiAgIHJldHVybiA8ZGl2Pntjb3VudGVyfTwvZGl2PlxuICogfVxuICovXG5cbmV4cG9ydCB2YXIgdXNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvckhvb2soKTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuZXhwb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgfSBmcm9tICdyZWFjdC1kb20nOyIsImltcG9ydCBQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJvdmlkZXInO1xuaW1wb3J0IGNvbm5lY3RBZHZhbmNlZCBmcm9tICcuL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkJztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIGNyZWF0ZURpc3BhdGNoSG9vayB9IGZyb20gJy4vaG9va3MvdXNlRGlzcGF0Y2gnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9ySG9vayB9IGZyb20gJy4vaG9va3MvdXNlU2VsZWN0b3InO1xuaW1wb3J0IHsgdXNlU3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vaG9va3MvdXNlU3RvcmUnO1xuaW1wb3J0IHsgc2V0QmF0Y2ggfSBmcm9tICcuL3V0aWxzL2JhdGNoJztcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIGFzIGJhdGNoIH0gZnJvbSAnLi91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi91dGlscy9zaGFsbG93RXF1YWwnO1xuc2V0QmF0Y2goYmF0Y2gpO1xuZXhwb3J0IHsgUHJvdmlkZXIsIGNvbm5lY3RBZHZhbmNlZCwgUmVhY3RSZWR1eENvbnRleHQsIGNvbm5lY3QsIGJhdGNoLCB1c2VEaXNwYXRjaCwgY3JlYXRlRGlzcGF0Y2hIb29rLCB1c2VTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3JIb29rLCB1c2VTdG9yZSwgY3JlYXRlU3RvcmVIb29rLCBzaGFsbG93RXF1YWwgfTsiLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChTeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0U3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjkuMFxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7dmFyIGg9cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksbj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLHA9bj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxxPW4/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixyPW4/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LHQ9bj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsdT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCx2PW4/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LHc9bj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCx4PW4/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHk9bj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMsYWE9bj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTo2MDEyMCxiYT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOlxuNjAxMTUsY2E9bj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNjtuJiZTeW1ib2wuZm9yKFwicmVhY3QuZnVuZGFtZW50YWxcIik7biYmU3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKTt2YXIgej1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7XG5mdW5jdGlvbiBBKGEpe2Zvcih2YXIgYj1hLm1lc3NhZ2UsZD1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2IsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspZCs9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO2EubWVzc2FnZT1cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIitiK1wiOyB2aXNpdCBcIitkK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4gXCI7cmV0dXJuIGF9dmFyIEI9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEM9e307XG5mdW5jdGlvbiBEKGEsYixkKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUM7dGhpcy51cGRhdGVyPWR8fEJ9RC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtELnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWEpdGhyb3cgQShFcnJvcig4NSkpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07RC5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gRSgpe31FLnByb3RvdHlwZT1ELnByb3RvdHlwZTtmdW5jdGlvbiBGKGEsYixkKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUM7dGhpcy51cGRhdGVyPWR8fEJ9dmFyIEc9Ri5wcm90b3R5cGU9bmV3IEU7XG5HLmNvbnN0cnVjdG9yPUY7aChHLEQucHJvdG90eXBlKTtHLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBIPXtjdXJyZW50Om51bGx9LEk9e3N1c3BlbnNlOm51bGx9LEo9e2N1cnJlbnQ6bnVsbH0sSz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEw9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIE0oYSxiLGQpe3ZhciBjPXZvaWQgMCxlPXt9LGc9bnVsbCxrPW51bGw7aWYobnVsbCE9Yilmb3IoYyBpbiB2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoZz1cIlwiK2Iua2V5KSxiKUsuY2FsbChiLGMpJiYhTC5oYXNPd25Qcm9wZXJ0eShjKSYmKGVbY109YltjXSk7dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWUuY2hpbGRyZW49ZDtlbHNlIGlmKDE8Zil7Zm9yKHZhciBsPUFycmF5KGYpLG09MDttPGY7bSsrKWxbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1sfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihjIGluIGY9YS5kZWZhdWx0UHJvcHMsZil2b2lkIDA9PT1lW2NdJiYoZVtjXT1mW2NdKTtyZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEsa2V5OmcscmVmOmsscHJvcHM6ZSxfb3duZXI6Si5jdXJyZW50fX1cbmZ1bmN0aW9uIGRhKGEsYil7cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBOKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1wfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrKFwiXCIrYSkucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE89L1xcLysvZyxQPVtdO2Z1bmN0aW9uIFEoYSxiLGQsYyl7aWYoUC5sZW5ndGgpe3ZhciBlPVAucG9wKCk7ZS5yZXN1bHQ9YTtlLmtleVByZWZpeD1iO2UuZnVuYz1kO2UuY29udGV4dD1jO2UuY291bnQ9MDtyZXR1cm4gZX1yZXR1cm57cmVzdWx0OmEsa2V5UHJlZml4OmIsZnVuYzpkLGNvbnRleHQ6Yyxjb3VudDowfX1cbmZ1bmN0aW9uIFIoYSl7YS5yZXN1bHQ9bnVsbDthLmtleVByZWZpeD1udWxsO2EuZnVuYz1udWxsO2EuY29udGV4dD1udWxsO2EuY291bnQ9MDsxMD5QLmxlbmd0aCYmUC5wdXNoKGEpfVxuZnVuY3Rpb24gUyhhLGIsZCxjKXt2YXIgZT10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09ZXx8XCJib29sZWFuXCI9PT1lKWE9bnVsbDt2YXIgZz0hMTtpZihudWxsPT09YSlnPSEwO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6Zz0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgcDpjYXNlIHE6Zz0hMH19aWYoZylyZXR1cm4gZChjLGEsXCJcIj09PWI/XCIuXCIrVChhLDApOmIpLDE7Zz0wO2I9XCJcIj09PWI/XCIuXCI6YitcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgaz0wO2s8YS5sZW5ndGg7aysrKXtlPWFba107dmFyIGY9YitUKGUsayk7Zys9UyhlLGYsZCxjKX1lbHNlIGlmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGE/Zj1udWxsOihmPXomJmFbel18fGFbXCJAQGl0ZXJhdG9yXCJdLGY9XCJmdW5jdGlvblwiPT09dHlwZW9mIGY/ZjpudWxsKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksaz1cbjA7IShlPWEubmV4dCgpKS5kb25lOyllPWUudmFsdWUsZj1iK1QoZSxrKyspLGcrPVMoZSxmLGQsYyk7ZWxzZSBpZihcIm9iamVjdFwiPT09ZSl0aHJvdyBkPVwiXCIrYSxBKEVycm9yKDMxKSxcIltvYmplY3QgT2JqZWN0XVwiPT09ZD9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpkLFwiXCIpO3JldHVybiBnfWZ1bmN0aW9uIFUoYSxiLGQpe3JldHVybiBudWxsPT1hPzA6UyhhLFwiXCIsYixkKX1mdW5jdGlvbiBUKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKGEua2V5KTpiLnRvU3RyaW5nKDM2KX1mdW5jdGlvbiBlYShhLGIpe2EuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyl9XG5mdW5jdGlvbiBmYShhLGIsZCl7dmFyIGM9YS5yZXN1bHQsZT1hLmtleVByZWZpeDthPWEuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyk7QXJyYXkuaXNBcnJheShhKT9WKGEsYyxkLGZ1bmN0aW9uKGEpe3JldHVybiBhfSk6bnVsbCE9YSYmKE4oYSkmJihhPWRhKGEsZSsoIWEua2V5fHxiJiZiLmtleT09PWEua2V5P1wiXCI6KFwiXCIrYS5rZXkpLnJlcGxhY2UoTyxcIiQmL1wiKStcIi9cIikrZCkpLGMucHVzaChhKSl9ZnVuY3Rpb24gVihhLGIsZCxjLGUpe3ZhciBnPVwiXCI7bnVsbCE9ZCYmKGc9KFwiXCIrZCkucmVwbGFjZShPLFwiJCYvXCIpK1wiL1wiKTtiPVEoYixnLGMsZSk7VShhLGZhLGIpO1IoYil9ZnVuY3Rpb24gVygpe3ZhciBhPUguY3VycmVudDtpZihudWxsPT09YSl0aHJvdyBBKEVycm9yKDMyMSkpO3JldHVybiBhfVxudmFyIFg9e0NoaWxkcmVuOnttYXA6ZnVuY3Rpb24oYSxiLGQpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGM9W107VihhLGMsbnVsbCxiLGQpO3JldHVybiBjfSxmb3JFYWNoOmZ1bmN0aW9uKGEsYixkKXtpZihudWxsPT1hKXJldHVybiBhO2I9UShudWxsLG51bGwsYixkKTtVKGEsZWEsYik7UihiKX0sY291bnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFUoYSxmdW5jdGlvbigpe3JldHVybiBudWxsfSxudWxsKX0sdG9BcnJheTpmdW5jdGlvbihhKXt2YXIgYj1bXTtWKGEsYixudWxsLGZ1bmN0aW9uKGEpe3JldHVybiBhfSk7cmV0dXJuIGJ9LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIU4oYSkpdGhyb3cgQShFcnJvcigxNDMpKTtyZXR1cm4gYX19LGNyZWF0ZVJlZjpmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fSxDb21wb25lbnQ6RCxQdXJlQ29tcG9uZW50OkYsY3JlYXRlQ29udGV4dDpmdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPW51bGwpO2E9eyQkdHlwZW9mOncsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsXG5fY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnYsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX0sZm9yd2FyZFJlZjpmdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6eCxyZW5kZXI6YX19LGxhenk6ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOmNhLF9jdG9yOmEsX3N0YXR1czotMSxfcmVzdWx0Om51bGx9fSxtZW1vOmZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOmJhLHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX0sdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUNhbGxiYWNrKGEsYil9LHVzZUNvbnRleHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUNvbnRleHQoYSxiKX0sdXNlRWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VFZmZlY3QoYSxiKX0sdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLFxuYixkKXtyZXR1cm4gVygpLnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGQpfSx1c2VEZWJ1Z1ZhbHVlOmZ1bmN0aW9uKCl7fSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUxheW91dEVmZmVjdChhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VNZW1vKGEsYil9LHVzZVJlZHVjZXI6ZnVuY3Rpb24oYSxiLGQpe3JldHVybiBXKCkudXNlUmVkdWNlcihhLGIsZCl9LHVzZVJlZjpmdW5jdGlvbihhKXtyZXR1cm4gVygpLnVzZVJlZihhKX0sdXNlU3RhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIFcoKS51c2VTdGF0ZShhKX0sRnJhZ21lbnQ6cixQcm9maWxlcjp1LFN0cmljdE1vZGU6dCxTdXNwZW5zZTp5LHVuc3RhYmxlX1N1c3BlbnNlTGlzdDphYSxjcmVhdGVFbGVtZW50Ok0sY2xvbmVFbGVtZW50OmZ1bmN0aW9uKGEsYixkKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBBKEVycm9yKDI2NyksYSk7dmFyIGM9dm9pZCAwLGU9XG5oKHt9LGEucHJvcHMpLGc9YS5rZXksaz1hLnJlZixmPWEuX293bmVyO2lmKG51bGwhPWIpe3ZvaWQgMCE9PWIucmVmJiYoaz1iLnJlZixmPUouY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihnPVwiXCIrYi5rZXkpO3ZhciBsPXZvaWQgMDthLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMmJihsPWEudHlwZS5kZWZhdWx0UHJvcHMpO2ZvcihjIGluIGIpSy5jYWxsKGIsYykmJiFMLmhhc093blByb3BlcnR5KGMpJiYoZVtjXT12b2lkIDA9PT1iW2NdJiZ2b2lkIDAhPT1sP2xbY106YltjXSl9Yz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWMpZS5jaGlsZHJlbj1kO2Vsc2UgaWYoMTxjKXtsPUFycmF5KGMpO2Zvcih2YXIgbT0wO208YzttKyspbFttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWx9cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLnR5cGUsa2V5OmcscmVmOmsscHJvcHM6ZSxfb3duZXI6Zn19LGNyZWF0ZUZhY3Rvcnk6ZnVuY3Rpb24oYSl7dmFyIGI9TS5iaW5kKG51bGwsYSk7XG5iLnR5cGU9YTtyZXR1cm4gYn0saXNWYWxpZEVsZW1lbnQ6Tix2ZXJzaW9uOlwiMTYuOS4wXCIsdW5zdGFibGVfd2l0aFN1c3BlbnNlQ29uZmlnOmZ1bmN0aW9uKGEsYil7dmFyIGQ9SS5zdXNwZW5zZTtJLnN1c3BlbnNlPXZvaWQgMD09PWI/bnVsbDpiO3RyeXthKCl9ZmluYWxseXtJLnN1c3BlbnNlPWR9fSxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDp7UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpILFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOkksUmVhY3RDdXJyZW50T3duZXI6SixJc1NvbWVSZW5kZXJlckFjdGluZzp7Y3VycmVudDohMX0sYXNzaWduOmh9fSxZPXtkZWZhdWx0Olh9LFo9WSYmWHx8WTttb2R1bGUuZXhwb3J0cz1aLmRlZmF1bHR8fFo7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjkuMFxuICogcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLypcbiBNb2Rlcm5penIgMy4wLjBwcmUgKEN1c3RvbSBCdWlsZCkgfCBNSVRcbiovXG4ndXNlIHN0cmljdCc7dmFyIGFhPXJlcXVpcmUoXCJyZWFjdFwiKSxtPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLHE9cmVxdWlyZShcInNjaGVkdWxlclwiKTtmdW5jdGlvbiB0KGEpe2Zvcih2YXIgYj1hLm1lc3NhZ2UsYz1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2IsZD0xO2Q8YXJndW1lbnRzLmxlbmd0aDtkKyspYys9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbZF0pO2EubWVzc2FnZT1cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIitiK1wiOyB2aXNpdCBcIitjK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4gXCI7cmV0dXJuIGF9aWYoIWFhKXRocm93IHQoRXJyb3IoMjI3KSk7dmFyIGJhPW51bGwsY2E9e307XG5mdW5jdGlvbiBkYSgpe2lmKGJhKWZvcih2YXIgYSBpbiBjYSl7dmFyIGI9Y2FbYV0sYz1iYS5pbmRleE9mKGEpO2lmKCEoLTE8YykpdGhyb3cgdChFcnJvcig5NiksYSk7aWYoIWVhW2NdKXtpZighYi5leHRyYWN0RXZlbnRzKXRocm93IHQoRXJyb3IoOTcpLGEpO2VhW2NdPWI7Yz1iLmV2ZW50VHlwZXM7Zm9yKHZhciBkIGluIGMpe3ZhciBlPXZvaWQgMDt2YXIgZj1jW2RdLGg9YixnPWQ7aWYoZmEuaGFzT3duUHJvcGVydHkoZykpdGhyb3cgdChFcnJvcig5OSksZyk7ZmFbZ109Zjt2YXIgaz1mLnBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzO2lmKGspe2ZvcihlIGluIGspay5oYXNPd25Qcm9wZXJ0eShlKSYmaGEoa1tlXSxoLGcpO2U9ITB9ZWxzZSBmLnJlZ2lzdHJhdGlvbk5hbWU/KGhhKGYucmVnaXN0cmF0aW9uTmFtZSxoLGcpLGU9ITApOmU9ITE7aWYoIWUpdGhyb3cgdChFcnJvcig5OCksZCxhKTt9fX19XG5mdW5jdGlvbiBoYShhLGIsYyl7aWYoaWFbYV0pdGhyb3cgdChFcnJvcigxMDApLGEpO2lhW2FdPWI7amFbYV09Yi5ldmVudFR5cGVzW2NdLmRlcGVuZGVuY2llc312YXIgZWE9W10sZmE9e30saWE9e30samE9e307ZnVuY3Rpb24ga2EoYSxiLGMsZCxlLGYsaCxnLGspe3ZhciBsPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywzKTt0cnl7Yi5hcHBseShjLGwpfWNhdGNoKG4pe3RoaXMub25FcnJvcihuKX19dmFyIGxhPSExLG1hPW51bGwsbmE9ITEsb2E9bnVsbCxwYT17b25FcnJvcjpmdW5jdGlvbihhKXtsYT0hMDttYT1hfX07ZnVuY3Rpb24gcWEoYSxiLGMsZCxlLGYsaCxnLGspe2xhPSExO21hPW51bGw7a2EuYXBwbHkocGEsYXJndW1lbnRzKX1cbmZ1bmN0aW9uIHJhKGEsYixjLGQsZSxmLGgsZyxrKXtxYS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7aWYobGEpe2lmKGxhKXt2YXIgbD1tYTtsYT0hMTttYT1udWxsfWVsc2UgdGhyb3cgdChFcnJvcigxOTgpKTtuYXx8KG5hPSEwLG9hPWwpfX12YXIgc2E9bnVsbCx0YT1udWxsLHZhPW51bGw7ZnVuY3Rpb24gd2EoYSxiLGMpe3ZhciBkPWEudHlwZXx8XCJ1bmtub3duLWV2ZW50XCI7YS5jdXJyZW50VGFyZ2V0PXZhKGMpO3JhKGQsYix2b2lkIDAsYSk7YS5jdXJyZW50VGFyZ2V0PW51bGx9ZnVuY3Rpb24geGEoYSxiKXtpZihudWxsPT1iKXRocm93IHQoRXJyb3IoMzApKTtpZihudWxsPT1hKXJldHVybiBiO2lmKEFycmF5LmlzQXJyYXkoYSkpe2lmKEFycmF5LmlzQXJyYXkoYikpcmV0dXJuIGEucHVzaC5hcHBseShhLGIpLGE7YS5wdXNoKGIpO3JldHVybiBhfXJldHVybiBBcnJheS5pc0FycmF5KGIpP1thXS5jb25jYXQoYik6W2EsYl19XG5mdW5jdGlvbiB5YShhLGIsYyl7QXJyYXkuaXNBcnJheShhKT9hLmZvckVhY2goYixjKTphJiZiLmNhbGwoYyxhKX12YXIgemE9bnVsbDtmdW5jdGlvbiBBYShhKXtpZihhKXt2YXIgYj1hLl9kaXNwYXRjaExpc3RlbmVycyxjPWEuX2Rpc3BhdGNoSW5zdGFuY2VzO2lmKEFycmF5LmlzQXJyYXkoYikpZm9yKHZhciBkPTA7ZDxiLmxlbmd0aCYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKTtkKyspd2EoYSxiW2RdLGNbZF0pO2Vsc2UgYiYmd2EoYSxiLGMpO2EuX2Rpc3BhdGNoTGlzdGVuZXJzPW51bGw7YS5fZGlzcGF0Y2hJbnN0YW5jZXM9bnVsbDthLmlzUGVyc2lzdGVudCgpfHxhLmNvbnN0cnVjdG9yLnJlbGVhc2UoYSl9fWZ1bmN0aW9uIEJhKGEpe251bGwhPT1hJiYoemE9eGEoemEsYSkpO2E9emE7emE9bnVsbDtpZihhKXt5YShhLEFhKTtpZih6YSl0aHJvdyB0KEVycm9yKDk1KSk7aWYobmEpdGhyb3cgYT1vYSxuYT0hMSxvYT1udWxsLGE7fX1cbnZhciBDYT17aW5qZWN0RXZlbnRQbHVnaW5PcmRlcjpmdW5jdGlvbihhKXtpZihiYSl0aHJvdyB0KEVycm9yKDEwMSkpO2JhPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpO2RhKCl9LGluamVjdEV2ZW50UGx1Z2luc0J5TmFtZTpmdW5jdGlvbihhKXt2YXIgYj0hMSxjO2ZvcihjIGluIGEpaWYoYS5oYXNPd25Qcm9wZXJ0eShjKSl7dmFyIGQ9YVtjXTtpZighY2EuaGFzT3duUHJvcGVydHkoYyl8fGNhW2NdIT09ZCl7aWYoY2FbY10pdGhyb3cgdChFcnJvcigxMDIpLGMpO2NhW2NdPWQ7Yj0hMH19YiYmZGEoKX19O1xuZnVuY3Rpb24gRGEoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZighYylyZXR1cm4gbnVsbDt2YXIgZD1zYShjKTtpZighZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6KGQ9IWQuZGlzYWJsZWQpfHwoYT1hLnR5cGUsZD0hKFwiYnV0dG9uXCI9PT1hfHxcImlucHV0XCI9PT1hfHxcInNlbGVjdFwiPT09YXx8XCJ0ZXh0YXJlYVwiPT09YSkpO2E9IWQ7YnJlYWsgYTtkZWZhdWx0OmE9ITF9aWYoYSlyZXR1cm4gbnVsbDtpZihjJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYyl0aHJvdyB0KEVycm9yKDIzMSksYix0eXBlb2YgYyk7XG5yZXR1cm4gY312YXIgRWE9TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksRmE9XCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSRcIitFYSxHYT1cIl9fcmVhY3RFdmVudEhhbmRsZXJzJFwiK0VhO2Z1bmN0aW9uIEhhKGEpe2lmKGFbRmFdKXJldHVybiBhW0ZhXTtmb3IoOyFhW0ZhXTspaWYoYS5wYXJlbnROb2RlKWE9YS5wYXJlbnROb2RlO2Vsc2UgcmV0dXJuIG51bGw7YT1hW0ZhXTtyZXR1cm4gNT09PWEudGFnfHw2PT09YS50YWc/YTpudWxsfWZ1bmN0aW9uIElhKGEpe2E9YVtGYV07cmV0dXJuIWF8fDUhPT1hLnRhZyYmNiE9PWEudGFnP251bGw6YX1mdW5jdGlvbiBKYShhKXtpZig1PT09YS50YWd8fDY9PT1hLnRhZylyZXR1cm4gYS5zdGF0ZU5vZGU7dGhyb3cgdChFcnJvcigzMykpO31mdW5jdGlvbiBLYShhKXtyZXR1cm4gYVtHYV18fG51bGx9ZnVuY3Rpb24gTGEoYSl7ZG8gYT1hLnJldHVybjt3aGlsZShhJiY1IT09YS50YWcpO3JldHVybiBhP2E6bnVsbH1cbmZ1bmN0aW9uIE1hKGEsYixjKXtpZihiPURhKGEsYy5kaXNwYXRjaENvbmZpZy5waGFzZWRSZWdpc3RyYXRpb25OYW1lc1tiXSkpYy5fZGlzcGF0Y2hMaXN0ZW5lcnM9eGEoYy5fZGlzcGF0Y2hMaXN0ZW5lcnMsYiksYy5fZGlzcGF0Y2hJbnN0YW5jZXM9eGEoYy5fZGlzcGF0Y2hJbnN0YW5jZXMsYSl9ZnVuY3Rpb24gTmEoYSl7aWYoYSYmYS5kaXNwYXRjaENvbmZpZy5waGFzZWRSZWdpc3RyYXRpb25OYW1lcyl7Zm9yKHZhciBiPWEuX3RhcmdldEluc3QsYz1bXTtiOyljLnB1c2goYiksYj1MYShiKTtmb3IoYj1jLmxlbmd0aDswPGItLTspTWEoY1tiXSxcImNhcHR1cmVkXCIsYSk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKylNYShjW2JdLFwiYnViYmxlZFwiLGEpfX1cbmZ1bmN0aW9uIE9hKGEsYixjKXthJiZjJiZjLmRpc3BhdGNoQ29uZmlnLnJlZ2lzdHJhdGlvbk5hbWUmJihiPURhKGEsYy5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lKSkmJihjLl9kaXNwYXRjaExpc3RlbmVycz14YShjLl9kaXNwYXRjaExpc3RlbmVycyxiKSxjLl9kaXNwYXRjaEluc3RhbmNlcz14YShjLl9kaXNwYXRjaEluc3RhbmNlcyxhKSl9ZnVuY3Rpb24gUGEoYSl7YSYmYS5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lJiZPYShhLl90YXJnZXRJbnN0LG51bGwsYSl9ZnVuY3Rpb24gUWEoYSl7eWEoYSxOYSl9dmFyIFJhPSEoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmZ1bmN0aW9uIFNhKGEsYil7dmFyIGM9e307Y1thLnRvTG93ZXJDYXNlKCldPWIudG9Mb3dlckNhc2UoKTtjW1wiV2Via2l0XCIrYV09XCJ3ZWJraXRcIitiO2NbXCJNb3pcIithXT1cIm1velwiK2I7cmV0dXJuIGN9dmFyIFRhPXthbmltYXRpb25lbmQ6U2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkVuZFwiKSxhbmltYXRpb25pdGVyYXRpb246U2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkl0ZXJhdGlvblwiKSxhbmltYXRpb25zdGFydDpTYShcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uU3RhcnRcIiksdHJhbnNpdGlvbmVuZDpTYShcIlRyYW5zaXRpb25cIixcIlRyYW5zaXRpb25FbmRcIil9LFVhPXt9LFZhPXt9O1xuUmEmJihWYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiQW5pbWF0aW9uRXZlbnRcImluIHdpbmRvd3x8KGRlbGV0ZSBUYS5hbmltYXRpb25lbmQuYW5pbWF0aW9uLGRlbGV0ZSBUYS5hbmltYXRpb25pdGVyYXRpb24uYW5pbWF0aW9uLGRlbGV0ZSBUYS5hbmltYXRpb25zdGFydC5hbmltYXRpb24pLFwiVHJhbnNpdGlvbkV2ZW50XCJpbiB3aW5kb3d8fGRlbGV0ZSBUYS50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb24pO2Z1bmN0aW9uIFdhKGEpe2lmKFVhW2FdKXJldHVybiBVYVthXTtpZighVGFbYV0pcmV0dXJuIGE7dmFyIGI9VGFbYV0sYztmb3IoYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykmJmMgaW4gVmEpcmV0dXJuIFVhW2FdPWJbY107cmV0dXJuIGF9XG52YXIgWGE9V2EoXCJhbmltYXRpb25lbmRcIiksWWE9V2EoXCJhbmltYXRpb25pdGVyYXRpb25cIiksWmE9V2EoXCJhbmltYXRpb25zdGFydFwiKSxhYj1XYShcInRyYW5zaXRpb25lbmRcIiksYmI9XCJhYm9ydCBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIGR1cmF0aW9uY2hhbmdlIGVtcHRpZWQgZW5jcnlwdGVkIGVuZGVkIGVycm9yIGxvYWRlZGRhdGEgbG9hZGVkbWV0YWRhdGEgbG9hZHN0YXJ0IHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHNlZWtlZCBzZWVraW5nIHN0YWxsZWQgc3VzcGVuZCB0aW1ldXBkYXRlIHZvbHVtZWNoYW5nZSB3YWl0aW5nXCIuc3BsaXQoXCIgXCIpLGNiPW51bGwsZGI9bnVsbCxlYj1udWxsO1xuZnVuY3Rpb24gZmIoKXtpZihlYilyZXR1cm4gZWI7dmFyIGEsYj1kYixjPWIubGVuZ3RoLGQsZT1cInZhbHVlXCJpbiBjYj9jYi52YWx1ZTpjYi50ZXh0Q29udGVudCxmPWUubGVuZ3RoO2ZvcihhPTA7YTxjJiZiW2FdPT09ZVthXTthKyspO3ZhciBoPWMtYTtmb3IoZD0xO2Q8PWgmJmJbYy1kXT09PWVbZi1kXTtkKyspO3JldHVybiBlYj1lLnNsaWNlKGEsMTxkPzEtZDp2b2lkIDApfWZ1bmN0aW9uIGdiKCl7cmV0dXJuITB9ZnVuY3Rpb24gaGIoKXtyZXR1cm4hMX1cbmZ1bmN0aW9uIHkoYSxiLGMsZCl7dGhpcy5kaXNwYXRjaENvbmZpZz1hO3RoaXMuX3RhcmdldEluc3Q9Yjt0aGlzLm5hdGl2ZUV2ZW50PWM7YT10aGlzLmNvbnN0cnVjdG9yLkludGVyZmFjZTtmb3IodmFyIGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiYoKGI9YVtlXSk/dGhpc1tlXT1iKGMpOlwidGFyZ2V0XCI9PT1lP3RoaXMudGFyZ2V0PWQ6dGhpc1tlXT1jW2VdKTt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0obnVsbCE9Yy5kZWZhdWx0UHJldmVudGVkP2MuZGVmYXVsdFByZXZlbnRlZDohMT09PWMucmV0dXJuVmFsdWUpP2diOmhiO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9aGI7cmV0dXJuIHRoaXN9XG5tKHkucHJvdG90eXBlLHtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMDt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTpcInVua25vd25cIiE9PXR5cGVvZiBhLnJldHVyblZhbHVlJiYoYS5yZXR1cm5WYWx1ZT0hMSksdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9Z2IpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnN0b3BQcm9wYWdhdGlvbj9hLnN0b3BQcm9wYWdhdGlvbigpOlwidW5rbm93blwiIT09dHlwZW9mIGEuY2FuY2VsQnViYmxlJiYoYS5jYW5jZWxCdWJibGU9ITApLHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9Z2IpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7dGhpcy5pc1BlcnNpc3RlbnQ9Z2J9LGlzUGVyc2lzdGVudDpoYixkZXN0cnVjdG9yOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jb25zdHJ1Y3Rvci5JbnRlcmZhY2UsXG5iO2ZvcihiIGluIGEpdGhpc1tiXT1udWxsO3RoaXMubmF0aXZlRXZlbnQ9dGhpcy5fdGFyZ2V0SW5zdD10aGlzLmRpc3BhdGNoQ29uZmlnPW51bGw7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD10aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1oYjt0aGlzLl9kaXNwYXRjaEluc3RhbmNlcz10aGlzLl9kaXNwYXRjaExpc3RlbmVycz1udWxsfX0pO3kuSW50ZXJmYWNlPXt0eXBlOm51bGwsdGFyZ2V0Om51bGwsY3VycmVudFRhcmdldDpmdW5jdGlvbigpe3JldHVybiBudWxsfSxldmVudFBoYXNlOm51bGwsYnViYmxlczpudWxsLGNhbmNlbGFibGU6bnVsbCx0aW1lU3RhbXA6ZnVuY3Rpb24oYSl7cmV0dXJuIGEudGltZVN0YW1wfHxEYXRlLm5vdygpfSxkZWZhdWx0UHJldmVudGVkOm51bGwsaXNUcnVzdGVkOm51bGx9O1xueS5leHRlbmQ9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe31mdW5jdGlvbiBjKCl7cmV0dXJuIGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBkPXRoaXM7Yi5wcm90b3R5cGU9ZC5wcm90b3R5cGU7dmFyIGU9bmV3IGI7bShlLGMucHJvdG90eXBlKTtjLnByb3RvdHlwZT1lO2MucHJvdG90eXBlLmNvbnN0cnVjdG9yPWM7Yy5JbnRlcmZhY2U9bSh7fSxkLkludGVyZmFjZSxhKTtjLmV4dGVuZD1kLmV4dGVuZDtpYihjKTtyZXR1cm4gY307aWIoeSk7ZnVuY3Rpb24gamIoYSxiLGMsZCl7aWYodGhpcy5ldmVudFBvb2wubGVuZ3RoKXt2YXIgZT10aGlzLmV2ZW50UG9vbC5wb3AoKTt0aGlzLmNhbGwoZSxhLGIsYyxkKTtyZXR1cm4gZX1yZXR1cm4gbmV3IHRoaXMoYSxiLGMsZCl9XG5mdW5jdGlvbiBrYihhKXtpZighKGEgaW5zdGFuY2VvZiB0aGlzKSl0aHJvdyB0KEVycm9yKDI3OSkpO2EuZGVzdHJ1Y3RvcigpOzEwPnRoaXMuZXZlbnRQb29sLmxlbmd0aCYmdGhpcy5ldmVudFBvb2wucHVzaChhKX1mdW5jdGlvbiBpYihhKXthLmV2ZW50UG9vbD1bXTthLmdldFBvb2xlZD1qYjthLnJlbGVhc2U9a2J9dmFyIGxiPXkuZXh0ZW5kKHtkYXRhOm51bGx9KSxtYj15LmV4dGVuZCh7ZGF0YTpudWxsfSksbmI9WzksMTMsMjcsMzJdLG9iPVJhJiZcIkNvbXBvc2l0aW9uRXZlbnRcImluIHdpbmRvdyxwYj1udWxsO1JhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJihwYj1kb2N1bWVudC5kb2N1bWVudE1vZGUpO1xudmFyIHFiPVJhJiZcIlRleHRFdmVudFwiaW4gd2luZG93JiYhcGIsc2I9UmEmJighb2J8fHBiJiY4PHBiJiYxMT49cGIpLHRiPVN0cmluZy5mcm9tQ2hhckNvZGUoMzIpLHViPXtiZWZvcmVJbnB1dDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkJlZm9yZUlucHV0XCIsY2FwdHVyZWQ6XCJvbkJlZm9yZUlucHV0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6W1wiY29tcG9zaXRpb25lbmRcIixcImtleXByZXNzXCIsXCJ0ZXh0SW5wdXRcIixcInBhc3RlXCJdfSxjb21wb3NpdGlvbkVuZDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNvbXBvc2l0aW9uRW5kXCIsY2FwdHVyZWQ6XCJvbkNvbXBvc2l0aW9uRW5kQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbXBvc2l0aW9uZW5kIGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpfSxjb21wb3NpdGlvblN0YXJ0OntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ29tcG9zaXRpb25TdGFydFwiLFxuY2FwdHVyZWQ6XCJvbkNvbXBvc2l0aW9uU3RhcnRDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29tcG9zaXRpb25zdGFydCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKX0sY29tcG9zaXRpb25VcGRhdGU6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25Db21wb3NpdGlvblVwZGF0ZVwiLGNhcHR1cmVkOlwib25Db21wb3NpdGlvblVwZGF0ZUNhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb21wb3NpdGlvbnVwZGF0ZSBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKX19LHZiPSExO1xuZnVuY3Rpb24gd2IoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImtleXVwXCI6cmV0dXJuLTEhPT1uYi5pbmRleE9mKGIua2V5Q29kZSk7Y2FzZSBcImtleWRvd25cIjpyZXR1cm4gMjI5IT09Yi5rZXlDb2RlO2Nhc2UgXCJrZXlwcmVzc1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwiYmx1clwiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIHhiKGEpe2E9YS5kZXRhaWw7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZcImRhdGFcImluIGE/YS5kYXRhOm51bGx9dmFyIHliPSExO2Z1bmN0aW9uIEFiKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiB4YihiKTtjYXNlIFwia2V5cHJlc3NcIjppZigzMiE9PWIud2hpY2gpcmV0dXJuIG51bGw7dmI9ITA7cmV0dXJuIHRiO2Nhc2UgXCJ0ZXh0SW5wdXRcIjpyZXR1cm4gYT1iLmRhdGEsYT09PXRiJiZ2Yj9udWxsOmE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBCYihhLGIpe2lmKHliKXJldHVyblwiY29tcG9zaXRpb25lbmRcIj09PWF8fCFvYiYmd2IoYSxiKT8oYT1mYigpLGViPWRiPWNiPW51bGwseWI9ITEsYSk6bnVsbDtzd2l0Y2goYSl7Y2FzZSBcInBhc3RlXCI6cmV0dXJuIG51bGw7Y2FzZSBcImtleXByZXNzXCI6aWYoIShiLmN0cmxLZXl8fGIuYWx0S2V5fHxiLm1ldGFLZXkpfHxiLmN0cmxLZXkmJmIuYWx0S2V5KXtpZihiLmNoYXImJjE8Yi5jaGFyLmxlbmd0aClyZXR1cm4gYi5jaGFyO2lmKGIud2hpY2gpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYi53aGljaCl9cmV0dXJuIG51bGw7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIHNiJiZcImtvXCIhPT1iLmxvY2FsZT9udWxsOmIuZGF0YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbnZhciBDYj17ZXZlbnRUeXBlczp1YixleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXZvaWQgMDt2YXIgZj12b2lkIDA7aWYob2IpYjp7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6ZT11Yi5jb21wb3NpdGlvblN0YXJ0O2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6ZT11Yi5jb21wb3NpdGlvbkVuZDticmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbnVwZGF0ZVwiOmU9dWIuY29tcG9zaXRpb25VcGRhdGU7YnJlYWsgYn1lPXZvaWQgMH1lbHNlIHliP3diKGEsYykmJihlPXViLmNvbXBvc2l0aW9uRW5kKTpcImtleWRvd25cIj09PWEmJjIyOT09PWMua2V5Q29kZSYmKGU9dWIuY29tcG9zaXRpb25TdGFydCk7ZT8oc2ImJlwia29cIiE9PWMubG9jYWxlJiYoeWJ8fGUhPT11Yi5jb21wb3NpdGlvblN0YXJ0P2U9PT11Yi5jb21wb3NpdGlvbkVuZCYmeWImJihmPWZiKCkpOihjYj1kLGRiPVwidmFsdWVcImluIGNiP2NiLnZhbHVlOmNiLnRleHRDb250ZW50LHliPVxuITApKSxlPWxiLmdldFBvb2xlZChlLGIsYyxkKSxmP2UuZGF0YT1mOihmPXhiKGMpLG51bGwhPT1mJiYoZS5kYXRhPWYpKSxRYShlKSxmPWUpOmY9bnVsbDsoYT1xYj9BYihhLGMpOkJiKGEsYykpPyhiPW1iLmdldFBvb2xlZCh1Yi5iZWZvcmVJbnB1dCxiLGMsZCksYi5kYXRhPWEsUWEoYikpOmI9bnVsbDtyZXR1cm4gbnVsbD09PWY/YjpudWxsPT09Yj9mOltmLGJdfX0sRGI9bnVsbCxFYj1udWxsLEZiPW51bGw7ZnVuY3Rpb24gR2IoYSl7aWYoYT10YShhKSl7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIERiKXRocm93IHQoRXJyb3IoMjgwKSk7dmFyIGI9c2EoYS5zdGF0ZU5vZGUpO0RiKGEuc3RhdGVOb2RlLGEudHlwZSxiKX19ZnVuY3Rpb24gSGIoYSl7RWI/RmI/RmIucHVzaChhKTpGYj1bYV06RWI9YX1mdW5jdGlvbiBJYigpe2lmKEViKXt2YXIgYT1FYixiPUZiO0ZiPUViPW51bGw7R2IoYSk7aWYoYilmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKUdiKGJbYV0pfX1cbmZ1bmN0aW9uIEpiKGEsYil7cmV0dXJuIGEoYil9ZnVuY3Rpb24gS2IoYSxiLGMsZCl7cmV0dXJuIGEoYixjLGQpfWZ1bmN0aW9uIExiKCl7fXZhciBNYj1KYixOYj0hMTtmdW5jdGlvbiBPYigpe2lmKG51bGwhPT1FYnx8bnVsbCE9PUZiKUxiKCksSWIoKX12YXIgUGI9e2NvbG9yOiEwLGRhdGU6ITAsZGF0ZXRpbWU6ITAsXCJkYXRldGltZS1sb2NhbFwiOiEwLGVtYWlsOiEwLG1vbnRoOiEwLG51bWJlcjohMCxwYXNzd29yZDohMCxyYW5nZTohMCxzZWFyY2g6ITAsdGVsOiEwLHRleHQ6ITAsdGltZTohMCx1cmw6ITAsd2VlazohMH07ZnVuY3Rpb24gUWIoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWI/ISFQYlthLnR5cGVdOlwidGV4dGFyZWFcIj09PWI/ITA6ITF9XG5mdW5jdGlvbiBSYihhKXthPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnR8fHdpbmRvdzthLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50JiYoYT1hLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50KTtyZXR1cm4gMz09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmF9ZnVuY3Rpb24gU2IoYSl7aWYoIVJhKXJldHVybiExO2E9XCJvblwiK2E7dmFyIGI9YSBpbiBkb2N1bWVudDtifHwoYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGIuc2V0QXR0cmlidXRlKGEsXCJyZXR1cm47XCIpLGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIGJbYV0pO3JldHVybiBifWZ1bmN0aW9uIFRiKGEpe3ZhciBiPWEudHlwZTtyZXR1cm4oYT1hLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09YS50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09Ynx8XCJyYWRpb1wiPT09Yil9XG5mdW5jdGlvbiBVYihhKXt2YXIgYj1UYihhKT9cImNoZWNrZWRcIjpcInZhbHVlXCIsYz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEuY29uc3RydWN0b3IucHJvdG90eXBlLGIpLGQ9XCJcIithW2JdO2lmKCFhLmhhc093blByb3BlcnR5KGIpJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmdldCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuc2V0KXt2YXIgZT1jLmdldCxmPWMuc2V0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7ZD1cIlwiK2E7Zi5jYWxsKHRoaXMsYSl9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGV9KTtyZXR1cm57Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7ZD1cIlwiK2F9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpe2EuX3ZhbHVlVHJhY2tlcj1cbm51bGw7ZGVsZXRlIGFbYl19fX19ZnVuY3Rpb24gVmIoYSl7YS5fdmFsdWVUcmFja2VyfHwoYS5fdmFsdWVUcmFja2VyPVViKGEpKX1mdW5jdGlvbiBXYihhKXtpZighYSlyZXR1cm4hMTt2YXIgYj1hLl92YWx1ZVRyYWNrZXI7aWYoIWIpcmV0dXJuITA7dmFyIGM9Yi5nZXRWYWx1ZSgpO3ZhciBkPVwiXCI7YSYmKGQ9VGIoYSk/YS5jaGVja2VkP1widHJ1ZVwiOlwiZmFsc2VcIjphLnZhbHVlKTthPWQ7cmV0dXJuIGEhPT1jPyhiLnNldFZhbHVlKGEpLCEwKTohMX12YXIgWGI9YWEuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7WGIuaGFzT3duUHJvcGVydHkoXCJSZWFjdEN1cnJlbnREaXNwYXRjaGVyXCIpfHwoWGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcj17Y3VycmVudDpudWxsfSk7WGIuaGFzT3duUHJvcGVydHkoXCJSZWFjdEN1cnJlbnRCYXRjaENvbmZpZ1wiKXx8KFhiLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnPXtzdXNwZW5zZTpudWxsfSk7XG52YXIgWWI9L14oLiopW1xcXFxcXC9dLyxCPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsWmI9Qj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMywkYj1CP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsYWM9Qj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsYmM9Qj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsY2M9Qj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsZGM9Qj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksZWM9Qj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxmYz1CP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsZ2M9Qj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIsaGM9Qj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMsaWM9Qj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTpcbjYwMTIwLGpjPUI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6NjAxMTUsa2M9Qj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNjtCJiZTeW1ib2wuZm9yKFwicmVhY3QuZnVuZGFtZW50YWxcIik7QiYmU3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKTt2YXIgbGM9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIG1jKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT1sYyYmYVtsY118fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1cbmZ1bmN0aW9uIG9jKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGEuZGlzcGxheU5hbWV8fGEubmFtZXx8bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuIGE7c3dpdGNoKGEpe2Nhc2UgYWM6cmV0dXJuXCJGcmFnbWVudFwiO2Nhc2UgJGI6cmV0dXJuXCJQb3J0YWxcIjtjYXNlIGNjOnJldHVyblwiUHJvZmlsZXJcIjtjYXNlIGJjOnJldHVyblwiU3RyaWN0TW9kZVwiO2Nhc2UgaGM6cmV0dXJuXCJTdXNwZW5zZVwiO2Nhc2UgaWM6cmV0dXJuXCJTdXNwZW5zZUxpc3RcIn1pZihcIm9iamVjdFwiPT09dHlwZW9mIGEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgZWM6cmV0dXJuXCJDb250ZXh0LkNvbnN1bWVyXCI7Y2FzZSBkYzpyZXR1cm5cIkNvbnRleHQuUHJvdmlkZXJcIjtjYXNlIGdjOnZhciBiPWEucmVuZGVyO2I9Yi5kaXNwbGF5TmFtZXx8Yi5uYW1lfHxcIlwiO3JldHVybiBhLmRpc3BsYXlOYW1lfHwoXCJcIiE9PWI/XCJGb3J3YXJkUmVmKFwiK2IrXCIpXCI6XG5cIkZvcndhcmRSZWZcIik7Y2FzZSBqYzpyZXR1cm4gb2MoYS50eXBlKTtjYXNlIGtjOmlmKGE9MT09PWEuX3N0YXR1cz9hLl9yZXN1bHQ6bnVsbClyZXR1cm4gb2MoYSl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gcGMoYSl7dmFyIGI9XCJcIjtkb3thOnN3aXRjaChhLnRhZyl7Y2FzZSAzOmNhc2UgNDpjYXNlIDY6Y2FzZSA3OmNhc2UgMTA6Y2FzZSA5OnZhciBjPVwiXCI7YnJlYWsgYTtkZWZhdWx0OnZhciBkPWEuX2RlYnVnT3duZXIsZT1hLl9kZWJ1Z1NvdXJjZSxmPW9jKGEudHlwZSk7Yz1udWxsO2QmJihjPW9jKGQudHlwZSkpO2Q9ZjtmPVwiXCI7ZT9mPVwiIChhdCBcIitlLmZpbGVOYW1lLnJlcGxhY2UoWWIsXCJcIikrXCI6XCIrZS5saW5lTnVtYmVyK1wiKVwiOmMmJihmPVwiIChjcmVhdGVkIGJ5IFwiK2MrXCIpXCIpO2M9XCJcXG4gICAgaW4gXCIrKGR8fFwiVW5rbm93blwiKStmfWIrPWM7YT1hLnJldHVybn13aGlsZShhKTtyZXR1cm4gYn1cbnZhciBxYz0vXls6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF1bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRcXC0uMC05XFx1MDBCN1xcdTAzMDAtXFx1MDM2RlxcdTIwM0YtXFx1MjA0MF0qJC8scmM9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxzYz17fSx0Yz17fTtcbmZ1bmN0aW9uIHVjKGEpe2lmKHJjLmNhbGwodGMsYSkpcmV0dXJuITA7aWYocmMuY2FsbChzYyxhKSlyZXR1cm4hMTtpZihxYy50ZXN0KGEpKXJldHVybiB0Y1thXT0hMDtzY1thXT0hMDtyZXR1cm4hMX1mdW5jdGlvbiB2YyhhLGIsYyxkKXtpZihudWxsIT09YyYmMD09PWMudHlwZSlyZXR1cm4hMTtzd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJmdW5jdGlvblwiOmNhc2UgXCJzeW1ib2xcIjpyZXR1cm4hMDtjYXNlIFwiYm9vbGVhblwiOmlmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpcmV0dXJuIWMuYWNjZXB0c0Jvb2xlYW5zO2E9YS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsNSk7cmV0dXJuXCJkYXRhLVwiIT09YSYmXCJhcmlhLVwiIT09YTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIHdjKGEsYixjLGQpe2lmKG51bGw9PT1ifHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ8fHZjKGEsYixjLGQpKXJldHVybiEwO2lmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpc3dpdGNoKGMudHlwZSl7Y2FzZSAzOnJldHVybiFiO2Nhc2UgNDpyZXR1cm4hMT09PWI7Y2FzZSA1OnJldHVybiBpc05hTihiKTtjYXNlIDY6cmV0dXJuIGlzTmFOKGIpfHwxPmJ9cmV0dXJuITF9ZnVuY3Rpb24gRChhLGIsYyxkLGUsZil7dGhpcy5hY2NlcHRzQm9vbGVhbnM9Mj09PWJ8fDM9PT1ifHw0PT09Yjt0aGlzLmF0dHJpYnV0ZU5hbWU9ZDt0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZT1lO3RoaXMubXVzdFVzZVByb3BlcnR5PWM7dGhpcy5wcm9wZXJ0eU5hbWU9YTt0aGlzLnR5cGU9Yjt0aGlzLnNhbml0aXplVVJMPWZ9dmFyIEY9e307XG5cImNoaWxkcmVuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIGRlZmF1bHRWYWx1ZSBkZWZhdWx0Q2hlY2tlZCBpbm5lckhUTUwgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZyBzdHlsZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0ZbYV09bmV3IEQoYSwwLCExLGEsbnVsbCwhMSl9KTtbW1wiYWNjZXB0Q2hhcnNldFwiLFwiYWNjZXB0LWNoYXJzZXRcIl0sW1wiY2xhc3NOYW1lXCIsXCJjbGFzc1wiXSxbXCJodG1sRm9yXCIsXCJmb3JcIl0sW1wiaHR0cEVxdWl2XCIsXCJodHRwLWVxdWl2XCJdXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWFbMF07RltiXT1uZXcgRChiLDEsITEsYVsxXSxudWxsLCExKX0pO1tcImNvbnRlbnRFZGl0YWJsZVwiLFwiZHJhZ2dhYmxlXCIsXCJzcGVsbENoZWNrXCIsXCJ2YWx1ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0ZbYV09bmV3IEQoYSwyLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExKX0pO1xuW1wiYXV0b1JldmVyc2VcIixcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcImZvY3VzYWJsZVwiLFwicHJlc2VydmVBbHBoYVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0ZbYV09bmV3IEQoYSwyLCExLGEsbnVsbCwhMSl9KTtcImFsbG93RnVsbFNjcmVlbiBhc3luYyBhdXRvRm9jdXMgYXV0b1BsYXkgY29udHJvbHMgZGVmYXVsdCBkZWZlciBkaXNhYmxlZCBkaXNhYmxlUGljdHVyZUluUGljdHVyZSBmb3JtTm9WYWxpZGF0ZSBoaWRkZW4gbG9vcCBub01vZHVsZSBub1ZhbGlkYXRlIG9wZW4gcGxheXNJbmxpbmUgcmVhZE9ubHkgcmVxdWlyZWQgcmV2ZXJzZWQgc2NvcGVkIHNlYW1sZXNzIGl0ZW1TY29wZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0ZbYV09bmV3IEQoYSwzLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExKX0pO1xuW1wiY2hlY2tlZFwiLFwibXVsdGlwbGVcIixcIm11dGVkXCIsXCJzZWxlY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0ZbYV09bmV3IEQoYSwzLCEwLGEsbnVsbCwhMSl9KTtbXCJjYXB0dXJlXCIsXCJkb3dubG9hZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0ZbYV09bmV3IEQoYSw0LCExLGEsbnVsbCwhMSl9KTtbXCJjb2xzXCIsXCJyb3dzXCIsXCJzaXplXCIsXCJzcGFuXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RlthXT1uZXcgRChhLDYsITEsYSxudWxsLCExKX0pO1tcInJvd1NwYW5cIixcInN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RlthXT1uZXcgRChhLDUsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEpfSk7dmFyIHhjPS9bXFwtOl0oW2Etel0pL2c7ZnVuY3Rpb24geWMoYSl7cmV0dXJuIGFbMV0udG9VcHBlckNhc2UoKX1cblwiYWNjZW50LWhlaWdodCBhbGlnbm1lbnQtYmFzZWxpbmUgYXJhYmljLWZvcm0gYmFzZWxpbmUtc2hpZnQgY2FwLWhlaWdodCBjbGlwLXBhdGggY2xpcC1ydWxlIGNvbG9yLWludGVycG9sYXRpb24gY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzIGNvbG9yLXByb2ZpbGUgY29sb3ItcmVuZGVyaW5nIGRvbWluYW50LWJhc2VsaW5lIGVuYWJsZS1iYWNrZ3JvdW5kIGZpbGwtb3BhY2l0eSBmaWxsLXJ1bGUgZmxvb2QtY29sb3IgZmxvb2Qtb3BhY2l0eSBmb250LWZhbWlseSBmb250LXNpemUgZm9udC1zaXplLWFkanVzdCBmb250LXN0cmV0Y2ggZm9udC1zdHlsZSBmb250LXZhcmlhbnQgZm9udC13ZWlnaHQgZ2x5cGgtbmFtZSBnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsIGdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsIGhvcml6LWFkdi14IGhvcml6LW9yaWdpbi14IGltYWdlLXJlbmRlcmluZyBsZXR0ZXItc3BhY2luZyBsaWdodGluZy1jb2xvciBtYXJrZXItZW5kIG1hcmtlci1taWQgbWFya2VyLXN0YXJ0IG92ZXJsaW5lLXBvc2l0aW9uIG92ZXJsaW5lLXRoaWNrbmVzcyBwYWludC1vcmRlciBwYW5vc2UtMSBwb2ludGVyLWV2ZW50cyByZW5kZXJpbmctaW50ZW50IHNoYXBlLXJlbmRlcmluZyBzdG9wLWNvbG9yIHN0b3Atb3BhY2l0eSBzdHJpa2V0aHJvdWdoLXBvc2l0aW9uIHN0cmlrZXRocm91Z2gtdGhpY2tuZXNzIHN0cm9rZS1kYXNoYXJyYXkgc3Ryb2tlLWRhc2hvZmZzZXQgc3Ryb2tlLWxpbmVjYXAgc3Ryb2tlLWxpbmVqb2luIHN0cm9rZS1taXRlcmxpbWl0IHN0cm9rZS1vcGFjaXR5IHN0cm9rZS13aWR0aCB0ZXh0LWFuY2hvciB0ZXh0LWRlY29yYXRpb24gdGV4dC1yZW5kZXJpbmcgdW5kZXJsaW5lLXBvc2l0aW9uIHVuZGVybGluZS10aGlja25lc3MgdW5pY29kZS1iaWRpIHVuaWNvZGUtcmFuZ2UgdW5pdHMtcGVyLWVtIHYtYWxwaGFiZXRpYyB2LWhhbmdpbmcgdi1pZGVvZ3JhcGhpYyB2LW1hdGhlbWF0aWNhbCB2ZWN0b3ItZWZmZWN0IHZlcnQtYWR2LXkgdmVydC1vcmlnaW4teCB2ZXJ0LW9yaWdpbi15IHdvcmQtc3BhY2luZyB3cml0aW5nLW1vZGUgeG1sbnM6eGxpbmsgeC1oZWlnaHRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoeGMsXG55Yyk7RltiXT1uZXcgRChiLDEsITEsYSxudWxsLCExKX0pO1wieGxpbms6YWN0dWF0ZSB4bGluazphcmNyb2xlIHhsaW5rOnJvbGUgeGxpbms6c2hvdyB4bGluazp0aXRsZSB4bGluazp0eXBlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHhjLHljKTtGW2JdPW5ldyBEKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCExKX0pO1tcInhtbDpiYXNlXCIsXCJ4bWw6bGFuZ1wiLFwieG1sOnNwYWNlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHhjLHljKTtGW2JdPW5ldyBEKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsITEpfSk7W1widGFiSW5kZXhcIixcImNyb3NzT3JpZ2luXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RlthXT1uZXcgRChhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEpfSk7XG5GLnhsaW5rSHJlZj1uZXcgRChcInhsaW5rSHJlZlwiLDEsITEsXCJ4bGluazpocmVmXCIsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITApO1tcInNyY1wiLFwiaHJlZlwiLFwiYWN0aW9uXCIsXCJmb3JtQWN0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RlthXT1uZXcgRChhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITApfSk7XG5mdW5jdGlvbiB6YyhhLGIsYyxkKXt2YXIgZT1GLmhhc093blByb3BlcnR5KGIpP0ZbYl06bnVsbDt2YXIgZj1udWxsIT09ZT8wPT09ZS50eXBlOmQ/ITE6ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdPyExOiEwO2Z8fCh3YyhiLGMsZSxkKSYmKGM9bnVsbCksZHx8bnVsbD09PWU/dWMoYikmJihudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTphLnNldEF0dHJpYnV0ZShiLFwiXCIrYykpOmUubXVzdFVzZVByb3BlcnR5P2FbZS5wcm9wZXJ0eU5hbWVdPW51bGw9PT1jPzM9PT1lLnR5cGU/ITE6XCJcIjpjOihiPWUuYXR0cmlidXRlTmFtZSxkPWUuYXR0cmlidXRlTmFtZXNwYWNlLG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOihlPWUudHlwZSxjPTM9PT1lfHw0PT09ZSYmITA9PT1jP1wiXCI6XCJcIitjLGQ/YS5zZXRBdHRyaWJ1dGVOUyhkLGIsYyk6YS5zZXRBdHRyaWJ1dGUoYixjKSkpKX1cbmZ1bmN0aW9uIEFjKGEpe3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwidW5kZWZpbmVkXCI6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1mdW5jdGlvbiBCYyhhLGIpe3ZhciBjPWIuY2hlY2tlZDtyZXR1cm4gbSh7fSxiLHtkZWZhdWx0Q2hlY2tlZDp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCx2YWx1ZTp2b2lkIDAsY2hlY2tlZDpudWxsIT1jP2M6YS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkfSl9XG5mdW5jdGlvbiBDYyhhLGIpe3ZhciBjPW51bGw9PWIuZGVmYXVsdFZhbHVlP1wiXCI6Yi5kZWZhdWx0VmFsdWUsZD1udWxsIT1iLmNoZWNrZWQ/Yi5jaGVja2VkOmIuZGVmYXVsdENoZWNrZWQ7Yz1BYyhudWxsIT1iLnZhbHVlP2IudmFsdWU6Yyk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsQ2hlY2tlZDpkLGluaXRpYWxWYWx1ZTpjLGNvbnRyb2xsZWQ6XCJjaGVja2JveFwiPT09Yi50eXBlfHxcInJhZGlvXCI9PT1iLnR5cGU/bnVsbCE9Yi5jaGVja2VkOm51bGwhPWIudmFsdWV9fWZ1bmN0aW9uIERjKGEsYil7Yj1iLmNoZWNrZWQ7bnVsbCE9YiYmemMoYSxcImNoZWNrZWRcIixiLCExKX1cbmZ1bmN0aW9uIEVjKGEsYil7RGMoYSxiKTt2YXIgYz1BYyhiLnZhbHVlKSxkPWIudHlwZTtpZihudWxsIT1jKWlmKFwibnVtYmVyXCI9PT1kKXtpZigwPT09YyYmXCJcIj09PWEudmFsdWV8fGEudmFsdWUhPWMpYS52YWx1ZT1cIlwiK2N9ZWxzZSBhLnZhbHVlIT09XCJcIitjJiYoYS52YWx1ZT1cIlwiK2MpO2Vsc2UgaWYoXCJzdWJtaXRcIj09PWR8fFwicmVzZXRcIj09PWQpe2EucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJufWIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKT9GYyhhLGIudHlwZSxjKTpiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpJiZGYyhhLGIudHlwZSxBYyhiLmRlZmF1bHRWYWx1ZSkpO251bGw9PWIuY2hlY2tlZCYmbnVsbCE9Yi5kZWZhdWx0Q2hlY2tlZCYmKGEuZGVmYXVsdENoZWNrZWQ9ISFiLmRlZmF1bHRDaGVja2VkKX1cbmZ1bmN0aW9uIEdjKGEsYixjKXtpZihiLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fGIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpe3ZhciBkPWIudHlwZTtpZighKFwic3VibWl0XCIhPT1kJiZcInJlc2V0XCIhPT1kfHx2b2lkIDAhPT1iLnZhbHVlJiZudWxsIT09Yi52YWx1ZSkpcmV0dXJuO2I9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO2N8fGI9PT1hLnZhbHVlfHwoYS52YWx1ZT1iKTthLmRlZmF1bHRWYWx1ZT1ifWM9YS5uYW1lO1wiXCIhPT1jJiYoYS5uYW1lPVwiXCIpO2EuZGVmYXVsdENoZWNrZWQ9IWEuZGVmYXVsdENoZWNrZWQ7YS5kZWZhdWx0Q2hlY2tlZD0hIWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZDtcIlwiIT09YyYmKGEubmFtZT1jKX1cbmZ1bmN0aW9uIEZjKGEsYixjKXtpZihcIm51bWJlclwiIT09Ynx8YS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQhPT1hKW51bGw9PWM/YS5kZWZhdWx0VmFsdWU9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlOmEuZGVmYXVsdFZhbHVlIT09XCJcIitjJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitjKX12YXIgSGM9e2NoYW5nZTp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNoYW5nZVwiLGNhcHR1cmVkOlwib25DaGFuZ2VDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY2hhbmdlIGNsaWNrIGZvY3VzIGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpfX07ZnVuY3Rpb24gSWMoYSxiLGMpe2E9eS5nZXRQb29sZWQoSGMuY2hhbmdlLGEsYixjKTthLnR5cGU9XCJjaGFuZ2VcIjtIYihjKTtRYShhKTtyZXR1cm4gYX12YXIgSmM9bnVsbCxLYz1udWxsO2Z1bmN0aW9uIExjKGEpe0JhKGEpfVxuZnVuY3Rpb24gTWMoYSl7dmFyIGI9SmEoYSk7aWYoV2IoYikpcmV0dXJuIGF9ZnVuY3Rpb24gTmMoYSxiKXtpZihcImNoYW5nZVwiPT09YSlyZXR1cm4gYn12YXIgT2M9ITE7UmEmJihPYz1TYihcImlucHV0XCIpJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8OTxkb2N1bWVudC5kb2N1bWVudE1vZGUpKTtmdW5jdGlvbiBQYygpe0pjJiYoSmMuZGV0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsUWMpLEtjPUpjPW51bGwpfWZ1bmN0aW9uIFFjKGEpe2lmKFwidmFsdWVcIj09PWEucHJvcGVydHlOYW1lJiZNYyhLYykpaWYoYT1JYyhLYyxhLFJiKGEpKSxOYilCYShhKTtlbHNle05iPSEwO3RyeXtKYihMYyxhKX1maW5hbGx5e05iPSExLE9iKCl9fX1mdW5jdGlvbiBSYyhhLGIsYyl7XCJmb2N1c1wiPT09YT8oUGMoKSxKYz1iLEtjPWMsSmMuYXR0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsUWMpKTpcImJsdXJcIj09PWEmJlBjKCl9XG5mdW5jdGlvbiBTYyhhKXtpZihcInNlbGVjdGlvbmNoYW5nZVwiPT09YXx8XCJrZXl1cFwiPT09YXx8XCJrZXlkb3duXCI9PT1hKXJldHVybiBNYyhLYyl9ZnVuY3Rpb24gVGMoYSxiKXtpZihcImNsaWNrXCI9PT1hKXJldHVybiBNYyhiKX1mdW5jdGlvbiBVYyhhLGIpe2lmKFwiaW5wdXRcIj09PWF8fFwiY2hhbmdlXCI9PT1hKXJldHVybiBNYyhiKX1cbnZhciBWYz17ZXZlbnRUeXBlczpIYyxfaXNJbnB1dEV2ZW50U3VwcG9ydGVkOk9jLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9Yj9KYShiKTp3aW5kb3csZj12b2lkIDAsaD12b2lkIDAsZz1lLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJzZWxlY3RcIj09PWd8fFwiaW5wdXRcIj09PWcmJlwiZmlsZVwiPT09ZS50eXBlP2Y9TmM6UWIoZSk/T2M/Zj1VYzooZj1TYyxoPVJjKTooZz1lLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09Zy50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09ZS50eXBlfHxcInJhZGlvXCI9PT1lLnR5cGUpJiYoZj1UYyk7aWYoZiYmKGY9ZihhLGIpKSlyZXR1cm4gSWMoZixjLGQpO2gmJmgoYSxlLGIpO1wiYmx1clwiPT09YSYmKGE9ZS5fd3JhcHBlclN0YXRlKSYmYS5jb250cm9sbGVkJiZcIm51bWJlclwiPT09ZS50eXBlJiZGYyhlLFwibnVtYmVyXCIsZS52YWx1ZSl9fSxXYz15LmV4dGVuZCh7dmlldzpudWxsLGRldGFpbDpudWxsfSksWGM9e0FsdDpcImFsdEtleVwiLFxuQ29udHJvbDpcImN0cmxLZXlcIixNZXRhOlwibWV0YUtleVwiLFNoaWZ0Olwic2hpZnRLZXlcIn07ZnVuY3Rpb24gWWMoYSl7dmFyIGI9dGhpcy5uYXRpdmVFdmVudDtyZXR1cm4gYi5nZXRNb2RpZmllclN0YXRlP2IuZ2V0TW9kaWZpZXJTdGF0ZShhKTooYT1YY1thXSk/ISFiW2FdOiExfWZ1bmN0aW9uIFpjKCl7cmV0dXJuIFljfVxudmFyICRjPTAsYWQ9MCxiZD0hMSxjZD0hMSxkZD1XYy5leHRlbmQoe3NjcmVlblg6bnVsbCxzY3JlZW5ZOm51bGwsY2xpZW50WDpudWxsLGNsaWVudFk6bnVsbCxwYWdlWDpudWxsLHBhZ2VZOm51bGwsY3RybEtleTpudWxsLHNoaWZ0S2V5Om51bGwsYWx0S2V5Om51bGwsbWV0YUtleTpudWxsLGdldE1vZGlmaWVyU3RhdGU6WmMsYnV0dG9uOm51bGwsYnV0dG9uczpudWxsLHJlbGF0ZWRUYXJnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVsYXRlZFRhcmdldHx8KGEuZnJvbUVsZW1lbnQ9PT1hLnNyY0VsZW1lbnQ/YS50b0VsZW1lbnQ6YS5mcm9tRWxlbWVudCl9LG1vdmVtZW50WDpmdW5jdGlvbihhKXtpZihcIm1vdmVtZW50WFwiaW4gYSlyZXR1cm4gYS5tb3ZlbWVudFg7dmFyIGI9JGM7JGM9YS5zY3JlZW5YO3JldHVybiBiZD9cIm1vdXNlbW92ZVwiPT09YS50eXBlP2Euc2NyZWVuWC1iOjA6KGJkPSEwLDApfSxtb3ZlbWVudFk6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFlcImluIGEpcmV0dXJuIGEubW92ZW1lbnRZO1xudmFyIGI9YWQ7YWQ9YS5zY3JlZW5ZO3JldHVybiBjZD9cIm1vdXNlbW92ZVwiPT09YS50eXBlP2Euc2NyZWVuWS1iOjA6KGNkPSEwLDApfX0pLGVkPWRkLmV4dGVuZCh7cG9pbnRlcklkOm51bGwsd2lkdGg6bnVsbCxoZWlnaHQ6bnVsbCxwcmVzc3VyZTpudWxsLHRhbmdlbnRpYWxQcmVzc3VyZTpudWxsLHRpbHRYOm51bGwsdGlsdFk6bnVsbCx0d2lzdDpudWxsLHBvaW50ZXJUeXBlOm51bGwsaXNQcmltYXJ5Om51bGx9KSxmZD17bW91c2VFbnRlcjp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uTW91c2VFbnRlclwiLGRlcGVuZGVuY2llczpbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdfSxtb3VzZUxlYXZlOntyZWdpc3RyYXRpb25OYW1lOlwib25Nb3VzZUxlYXZlXCIsZGVwZW5kZW5jaWVzOltcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl19LHBvaW50ZXJFbnRlcjp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uUG9pbnRlckVudGVyXCIsZGVwZW5kZW5jaWVzOltcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdfSxwb2ludGVyTGVhdmU6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvblBvaW50ZXJMZWF2ZVwiLFxuZGVwZW5kZW5jaWVzOltcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdfX0sZ2Q9e2V2ZW50VHlwZXM6ZmQsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1cIm1vdXNlb3ZlclwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YSxmPVwibW91c2VvdXRcIj09PWF8fFwicG9pbnRlcm91dFwiPT09YTtpZihlJiYoYy5yZWxhdGVkVGFyZ2V0fHxjLmZyb21FbGVtZW50KXx8IWYmJiFlKXJldHVybiBudWxsO2U9ZC53aW5kb3c9PT1kP2Q6KGU9ZC5vd25lckRvY3VtZW50KT9lLmRlZmF1bHRWaWV3fHxlLnBhcmVudFdpbmRvdzp3aW5kb3c7Zj8oZj1iLGI9KGI9Yy5yZWxhdGVkVGFyZ2V0fHxjLnRvRWxlbWVudCk/SGEoYik6bnVsbCk6Zj1udWxsO2lmKGY9PT1iKXJldHVybiBudWxsO3ZhciBoPXZvaWQgMCxnPXZvaWQgMCxrPXZvaWQgMCxsPXZvaWQgMDtpZihcIm1vdXNlb3V0XCI9PT1hfHxcIm1vdXNlb3ZlclwiPT09YSloPWRkLGc9ZmQubW91c2VMZWF2ZSxrPWZkLm1vdXNlRW50ZXIsbD1cIm1vdXNlXCI7XG5lbHNlIGlmKFwicG9pbnRlcm91dFwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YSloPWVkLGc9ZmQucG9pbnRlckxlYXZlLGs9ZmQucG9pbnRlckVudGVyLGw9XCJwb2ludGVyXCI7dmFyIG49bnVsbD09Zj9lOkphKGYpO2U9bnVsbD09Yj9lOkphKGIpO2E9aC5nZXRQb29sZWQoZyxmLGMsZCk7YS50eXBlPWwrXCJsZWF2ZVwiO2EudGFyZ2V0PW47YS5yZWxhdGVkVGFyZ2V0PWU7Yz1oLmdldFBvb2xlZChrLGIsYyxkKTtjLnR5cGU9bCtcImVudGVyXCI7Yy50YXJnZXQ9ZTtjLnJlbGF0ZWRUYXJnZXQ9bjtkPWI7aWYoZiYmZClhOntiPWY7ZT1kO2w9MDtmb3IoaD1iO2g7aD1MYShoKSlsKys7aD0wO2ZvcihrPWU7aztrPUxhKGspKWgrKztmb3IoOzA8bC1oOyliPUxhKGIpLGwtLTtmb3IoOzA8aC1sOyllPUxhKGUpLGgtLTtmb3IoO2wtLTspe2lmKGI9PT1lfHxiPT09ZS5hbHRlcm5hdGUpYnJlYWsgYTtiPUxhKGIpO2U9TGEoZSl9Yj1udWxsfWVsc2UgYj1udWxsO2U9Yjtmb3IoYj1bXTtmJiZmIT09ZTspe2w9XG5mLmFsdGVybmF0ZTtpZihudWxsIT09bCYmbD09PWUpYnJlYWs7Yi5wdXNoKGYpO2Y9TGEoZil9Zm9yKGY9W107ZCYmZCE9PWU7KXtsPWQuYWx0ZXJuYXRlO2lmKG51bGwhPT1sJiZsPT09ZSlicmVhaztmLnB1c2goZCk7ZD1MYShkKX1mb3IoZD0wO2Q8Yi5sZW5ndGg7ZCsrKU9hKGJbZF0sXCJidWJibGVkXCIsYSk7Zm9yKGQ9Zi5sZW5ndGg7MDxkLS07KU9hKGZbZF0sXCJjYXB0dXJlZFwiLGMpO3JldHVyblthLGNdfX07ZnVuY3Rpb24gaGQoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBpZD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gamQoYSxiKXtpZihoZChhLGIpKXJldHVybiEwO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYXx8bnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYnx8bnVsbD09PWIpcmV0dXJuITE7dmFyIGM9T2JqZWN0LmtleXMoYSksZD1PYmplY3Qua2V5cyhiKTtpZihjLmxlbmd0aCE9PWQubGVuZ3RoKXJldHVybiExO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspaWYoIWlkLmNhbGwoYixjW2RdKXx8IWhkKGFbY1tkXV0sYltjW2RdXSkpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24ga2QoYSxiKXtyZXR1cm57cmVzcG9uZGVyOmEscHJvcHM6Yn19bmV3IE1hcDtuZXcgTWFwO25ldyBTZXQ7bmV3IE1hcDtcbmZ1bmN0aW9uIGxkKGEpe3ZhciBiPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2lmKDAhPT0oYi5lZmZlY3RUYWcmMikpcmV0dXJuIDE7Zm9yKDtiLnJldHVybjspaWYoYj1iLnJldHVybiwwIT09KGIuZWZmZWN0VGFnJjIpKXJldHVybiAxfXJldHVybiAzPT09Yi50YWc/MjozfWZ1bmN0aW9uIG9kKGEpe2lmKDIhPT1sZChhKSl0aHJvdyB0KEVycm9yKDE4OCkpO31cbmZ1bmN0aW9uIHBkKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXtiPWxkKGEpO2lmKDM9PT1iKXRocm93IHQoRXJyb3IoMTg4KSk7cmV0dXJuIDE9PT1iP251bGw6YX1mb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm47aWYobnVsbD09PWUpYnJlYWs7dmFyIGY9ZS5hbHRlcm5hdGU7aWYobnVsbD09PWYpe2Q9ZS5yZXR1cm47aWYobnVsbCE9PWQpe2M9ZDtjb250aW51ZX1icmVha31pZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKGY9ZS5jaGlsZDtmOyl7aWYoZj09PWMpcmV0dXJuIG9kKGUpLGE7aWYoZj09PWQpcmV0dXJuIG9kKGUpLGI7Zj1mLnNpYmxpbmd9dGhyb3cgdChFcnJvcigxODgpKTt9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zm9yKHZhciBoPSExLGc9ZS5jaGlsZDtnOyl7aWYoZz09PWMpe2g9ITA7Yz1lO2Q9ZjticmVha31pZihnPT09ZCl7aD0hMDtkPWU7Yz1mO2JyZWFrfWc9Zy5zaWJsaW5nfWlmKCFoKXtmb3IoZz1mLmNoaWxkO2c7KXtpZihnPT09XG5jKXtoPSEwO2M9ZjtkPWU7YnJlYWt9aWYoZz09PWQpe2g9ITA7ZD1mO2M9ZTticmVha31nPWcuc2libGluZ31pZighaCl0aHJvdyB0KEVycm9yKDE4OSkpO319aWYoYy5hbHRlcm5hdGUhPT1kKXRocm93IHQoRXJyb3IoMTkwKSk7fWlmKDMhPT1jLnRhZyl0aHJvdyB0KEVycm9yKDE4OCkpO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gcWQoYSl7YT1wZChhKTtpZighYSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9YTs7KXtpZig1PT09Yi50YWd8fDY9PT1iLnRhZylyZXR1cm4gYjtpZihiLmNoaWxkKWIuY2hpbGQucmV0dXJuPWIsYj1iLmNoaWxkO2Vsc2V7aWYoYj09PWEpYnJlYWs7Zm9yKDshYi5zaWJsaW5nOyl7aWYoIWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1yZXR1cm4gbnVsbH1cbnZhciByZD15LmV4dGVuZCh7YW5pbWF0aW9uTmFtZTpudWxsLGVsYXBzZWRUaW1lOm51bGwscHNldWRvRWxlbWVudDpudWxsfSksc2Q9eS5leHRlbmQoe2NsaXBib2FyZERhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuXCJjbGlwYm9hcmREYXRhXCJpbiBhP2EuY2xpcGJvYXJkRGF0YTp3aW5kb3cuY2xpcGJvYXJkRGF0YX19KSx0ZD1XYy5leHRlbmQoe3JlbGF0ZWRUYXJnZXQ6bnVsbH0pO2Z1bmN0aW9uIHVkKGEpe3ZhciBiPWEua2V5Q29kZTtcImNoYXJDb2RlXCJpbiBhPyhhPWEuY2hhckNvZGUsMD09PWEmJjEzPT09YiYmKGE9MTMpKTphPWI7MTA9PT1hJiYoYT0xMyk7cmV0dXJuIDMyPD1hfHwxMz09PWE/YTowfVxudmFyIHZkPXtFc2M6XCJFc2NhcGVcIixTcGFjZWJhcjpcIiBcIixMZWZ0OlwiQXJyb3dMZWZ0XCIsVXA6XCJBcnJvd1VwXCIsUmlnaHQ6XCJBcnJvd1JpZ2h0XCIsRG93bjpcIkFycm93RG93blwiLERlbDpcIkRlbGV0ZVwiLFdpbjpcIk9TXCIsTWVudTpcIkNvbnRleHRNZW51XCIsQXBwczpcIkNvbnRleHRNZW51XCIsU2Nyb2xsOlwiU2Nyb2xsTG9ja1wiLE1velByaW50YWJsZUtleTpcIlVuaWRlbnRpZmllZFwifSx3ZD17ODpcIkJhY2tzcGFjZVwiLDk6XCJUYWJcIiwxMjpcIkNsZWFyXCIsMTM6XCJFbnRlclwiLDE2OlwiU2hpZnRcIiwxNzpcIkNvbnRyb2xcIiwxODpcIkFsdFwiLDE5OlwiUGF1c2VcIiwyMDpcIkNhcHNMb2NrXCIsMjc6XCJFc2NhcGVcIiwzMjpcIiBcIiwzMzpcIlBhZ2VVcFwiLDM0OlwiUGFnZURvd25cIiwzNTpcIkVuZFwiLDM2OlwiSG9tZVwiLDM3OlwiQXJyb3dMZWZ0XCIsMzg6XCJBcnJvd1VwXCIsMzk6XCJBcnJvd1JpZ2h0XCIsNDA6XCJBcnJvd0Rvd25cIiw0NTpcIkluc2VydFwiLDQ2OlwiRGVsZXRlXCIsMTEyOlwiRjFcIiwxMTM6XCJGMlwiLDExNDpcIkYzXCIsMTE1OlwiRjRcIixcbjExNjpcIkY1XCIsMTE3OlwiRjZcIiwxMTg6XCJGN1wiLDExOTpcIkY4XCIsMTIwOlwiRjlcIiwxMjE6XCJGMTBcIiwxMjI6XCJGMTFcIiwxMjM6XCJGMTJcIiwxNDQ6XCJOdW1Mb2NrXCIsMTQ1OlwiU2Nyb2xsTG9ja1wiLDIyNDpcIk1ldGFcIn0seGQ9V2MuZXh0ZW5kKHtrZXk6ZnVuY3Rpb24oYSl7aWYoYS5rZXkpe3ZhciBiPXZkW2Eua2V5XXx8YS5rZXk7aWYoXCJVbmlkZW50aWZpZWRcIiE9PWIpcmV0dXJuIGJ9cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlPyhhPXVkKGEpLDEzPT09YT9cIkVudGVyXCI6U3RyaW5nLmZyb21DaGFyQ29kZShhKSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT93ZFthLmtleUNvZGVdfHxcIlVuaWRlbnRpZmllZFwiOlwiXCJ9LGxvY2F0aW9uOm51bGwsY3RybEtleTpudWxsLHNoaWZ0S2V5Om51bGwsYWx0S2V5Om51bGwsbWV0YUtleTpudWxsLHJlcGVhdDpudWxsLGxvY2FsZTpudWxsLGdldE1vZGlmaWVyU3RhdGU6WmMsY2hhckNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09XG5hLnR5cGU/dWQoYSk6MH0sa2V5Q29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfSx3aGljaDpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/dWQoYSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH19KSx5ZD1kZC5leHRlbmQoe2RhdGFUcmFuc2ZlcjpudWxsfSksemQ9V2MuZXh0ZW5kKHt0b3VjaGVzOm51bGwsdGFyZ2V0VG91Y2hlczpudWxsLGNoYW5nZWRUb3VjaGVzOm51bGwsYWx0S2V5Om51bGwsbWV0YUtleTpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGdldE1vZGlmaWVyU3RhdGU6WmN9KSxBZD15LmV4dGVuZCh7cHJvcGVydHlOYW1lOm51bGwsZWxhcHNlZFRpbWU6bnVsbCxwc2V1ZG9FbGVtZW50Om51bGx9KSxCZD1kZC5leHRlbmQoe2RlbHRhWDpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWFwiaW4gYT9hLmRlbHRhWDpcIndoZWVsRGVsdGFYXCJpblxuYT8tYS53aGVlbERlbHRhWDowfSxkZWx0YVk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVlcImluIGE/YS5kZWx0YVk6XCJ3aGVlbERlbHRhWVwiaW4gYT8tYS53aGVlbERlbHRhWTpcIndoZWVsRGVsdGFcImluIGE/LWEud2hlZWxEZWx0YTowfSxkZWx0YVo6bnVsbCxkZWx0YU1vZGU6bnVsbH0pLENkPVtbXCJibHVyXCIsXCJibHVyXCIsMF0sW1wiY2FuY2VsXCIsXCJjYW5jZWxcIiwwXSxbXCJjbGlja1wiLFwiY2xpY2tcIiwwXSxbXCJjbG9zZVwiLFwiY2xvc2VcIiwwXSxbXCJjb250ZXh0bWVudVwiLFwiY29udGV4dE1lbnVcIiwwXSxbXCJjb3B5XCIsXCJjb3B5XCIsMF0sW1wiY3V0XCIsXCJjdXRcIiwwXSxbXCJhdXhjbGlja1wiLFwiYXV4Q2xpY2tcIiwwXSxbXCJkYmxjbGlja1wiLFwiZG91YmxlQ2xpY2tcIiwwXSxbXCJkcmFnZW5kXCIsXCJkcmFnRW5kXCIsMF0sW1wiZHJhZ3N0YXJ0XCIsXCJkcmFnU3RhcnRcIiwwXSxbXCJkcm9wXCIsXCJkcm9wXCIsMF0sW1wiZm9jdXNcIixcImZvY3VzXCIsMF0sW1wiaW5wdXRcIixcImlucHV0XCIsMF0sW1wiaW52YWxpZFwiLFwiaW52YWxpZFwiLDBdLFxuW1wia2V5ZG93blwiLFwia2V5RG93blwiLDBdLFtcImtleXByZXNzXCIsXCJrZXlQcmVzc1wiLDBdLFtcImtleXVwXCIsXCJrZXlVcFwiLDBdLFtcIm1vdXNlZG93blwiLFwibW91c2VEb3duXCIsMF0sW1wibW91c2V1cFwiLFwibW91c2VVcFwiLDBdLFtcInBhc3RlXCIsXCJwYXN0ZVwiLDBdLFtcInBhdXNlXCIsXCJwYXVzZVwiLDBdLFtcInBsYXlcIixcInBsYXlcIiwwXSxbXCJwb2ludGVyY2FuY2VsXCIsXCJwb2ludGVyQ2FuY2VsXCIsMF0sW1wicG9pbnRlcmRvd25cIixcInBvaW50ZXJEb3duXCIsMF0sW1wicG9pbnRlcnVwXCIsXCJwb2ludGVyVXBcIiwwXSxbXCJyYXRlY2hhbmdlXCIsXCJyYXRlQ2hhbmdlXCIsMF0sW1wicmVzZXRcIixcInJlc2V0XCIsMF0sW1wic2Vla2VkXCIsXCJzZWVrZWRcIiwwXSxbXCJzdWJtaXRcIixcInN1Ym1pdFwiLDBdLFtcInRvdWNoY2FuY2VsXCIsXCJ0b3VjaENhbmNlbFwiLDBdLFtcInRvdWNoZW5kXCIsXCJ0b3VjaEVuZFwiLDBdLFtcInRvdWNoc3RhcnRcIixcInRvdWNoU3RhcnRcIiwwXSxbXCJ2b2x1bWVjaGFuZ2VcIixcInZvbHVtZUNoYW5nZVwiLDBdLFtcImRyYWdcIixcImRyYWdcIixcbjFdLFtcImRyYWdlbnRlclwiLFwiZHJhZ0VudGVyXCIsMV0sW1wiZHJhZ2V4aXRcIixcImRyYWdFeGl0XCIsMV0sW1wiZHJhZ2xlYXZlXCIsXCJkcmFnTGVhdmVcIiwxXSxbXCJkcmFnb3ZlclwiLFwiZHJhZ092ZXJcIiwxXSxbXCJtb3VzZW1vdmVcIixcIm1vdXNlTW92ZVwiLDFdLFtcIm1vdXNlb3V0XCIsXCJtb3VzZU91dFwiLDFdLFtcIm1vdXNlb3ZlclwiLFwibW91c2VPdmVyXCIsMV0sW1wicG9pbnRlcm1vdmVcIixcInBvaW50ZXJNb3ZlXCIsMV0sW1wicG9pbnRlcm91dFwiLFwicG9pbnRlck91dFwiLDFdLFtcInBvaW50ZXJvdmVyXCIsXCJwb2ludGVyT3ZlclwiLDFdLFtcInNjcm9sbFwiLFwic2Nyb2xsXCIsMV0sW1widG9nZ2xlXCIsXCJ0b2dnbGVcIiwxXSxbXCJ0b3VjaG1vdmVcIixcInRvdWNoTW92ZVwiLDFdLFtcIndoZWVsXCIsXCJ3aGVlbFwiLDFdLFtcImFib3J0XCIsXCJhYm9ydFwiLDJdLFtYYSxcImFuaW1hdGlvbkVuZFwiLDJdLFtZYSxcImFuaW1hdGlvbkl0ZXJhdGlvblwiLDJdLFtaYSxcImFuaW1hdGlvblN0YXJ0XCIsMl0sW1wiY2FucGxheVwiLFwiY2FuUGxheVwiLDJdLFtcImNhbnBsYXl0aHJvdWdoXCIsXG5cImNhblBsYXlUaHJvdWdoXCIsMl0sW1wiZHVyYXRpb25jaGFuZ2VcIixcImR1cmF0aW9uQ2hhbmdlXCIsMl0sW1wiZW1wdGllZFwiLFwiZW1wdGllZFwiLDJdLFtcImVuY3J5cHRlZFwiLFwiZW5jcnlwdGVkXCIsMl0sW1wiZW5kZWRcIixcImVuZGVkXCIsMl0sW1wiZXJyb3JcIixcImVycm9yXCIsMl0sW1wiZ290cG9pbnRlcmNhcHR1cmVcIixcImdvdFBvaW50ZXJDYXB0dXJlXCIsMl0sW1wibG9hZFwiLFwibG9hZFwiLDJdLFtcImxvYWRlZGRhdGFcIixcImxvYWRlZERhdGFcIiwyXSxbXCJsb2FkZWRtZXRhZGF0YVwiLFwibG9hZGVkTWV0YWRhdGFcIiwyXSxbXCJsb2Fkc3RhcnRcIixcImxvYWRTdGFydFwiLDJdLFtcImxvc3Rwb2ludGVyY2FwdHVyZVwiLFwibG9zdFBvaW50ZXJDYXB0dXJlXCIsMl0sW1wicGxheWluZ1wiLFwicGxheWluZ1wiLDJdLFtcInByb2dyZXNzXCIsXCJwcm9ncmVzc1wiLDJdLFtcInNlZWtpbmdcIixcInNlZWtpbmdcIiwyXSxbXCJzdGFsbGVkXCIsXCJzdGFsbGVkXCIsMl0sW1wic3VzcGVuZFwiLFwic3VzcGVuZFwiLDJdLFtcInRpbWV1cGRhdGVcIixcInRpbWVVcGRhdGVcIixcbjJdLFthYixcInRyYW5zaXRpb25FbmRcIiwyXSxbXCJ3YWl0aW5nXCIsXCJ3YWl0aW5nXCIsMl1dLERkPXt9LEVkPXt9LEZkPTA7Zm9yKDtGZDxDZC5sZW5ndGg7RmQrKyl7dmFyIEdkPUNkW0ZkXSxIZD1HZFswXSxJZD1HZFsxXSxKZD1HZFsyXSxLZD1cIm9uXCIrKElkWzBdLnRvVXBwZXJDYXNlKCkrSWQuc2xpY2UoMSkpLExkPXtwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpLZCxjYXB0dXJlZDpLZCtcIkNhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOltIZF0sZXZlbnRQcmlvcml0eTpKZH07RGRbSWRdPUxkO0VkW0hkXT1MZH1cbnZhciBNZD17ZXZlbnRUeXBlczpEZCxnZXRFdmVudFByaW9yaXR5OmZ1bmN0aW9uKGEpe2E9RWRbYV07cmV0dXJuIHZvaWQgMCE9PWE/YS5ldmVudFByaW9yaXR5OjJ9LGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9RWRbYV07aWYoIWUpcmV0dXJuIG51bGw7c3dpdGNoKGEpe2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDA9PT11ZChjKSlyZXR1cm4gbnVsbDtjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOmE9eGQ7YnJlYWs7Y2FzZSBcImJsdXJcIjpjYXNlIFwiZm9jdXNcIjphPXRkO2JyZWFrO2Nhc2UgXCJjbGlja1wiOmlmKDI9PT1jLmJ1dHRvbilyZXR1cm4gbnVsbDtjYXNlIFwiYXV4Y2xpY2tcIjpjYXNlIFwiZGJsY2xpY2tcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcIm1vdXNlbW92ZVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJjb250ZXh0bWVudVwiOmE9ZGQ7YnJlYWs7Y2FzZSBcImRyYWdcIjpjYXNlIFwiZHJhZ2VuZFwiOmNhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2V4aXRcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6Y2FzZSBcImRyYWdvdmVyXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6YT1cbnlkO2JyZWFrO2Nhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaG1vdmVcIjpjYXNlIFwidG91Y2hzdGFydFwiOmE9emQ7YnJlYWs7Y2FzZSBYYTpjYXNlIFlhOmNhc2UgWmE6YT1yZDticmVhaztjYXNlIGFiOmE9QWQ7YnJlYWs7Y2FzZSBcInNjcm9sbFwiOmE9V2M7YnJlYWs7Y2FzZSBcIndoZWVsXCI6YT1CZDticmVhaztjYXNlIFwiY29weVwiOmNhc2UgXCJjdXRcIjpjYXNlIFwicGFzdGVcIjphPXNkO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJ1cFwiOmE9ZWQ7YnJlYWs7ZGVmYXVsdDphPXl9Yj1hLmdldFBvb2xlZChlLGIsYyxkKTtRYShiKTtyZXR1cm4gYn19LE5kPU1kLmdldEV2ZW50UHJpb3JpdHksT2Q9W107XG5mdW5jdGlvbiBQZChhKXt2YXIgYj1hLnRhcmdldEluc3QsYz1iO2Rve2lmKCFjKXthLmFuY2VzdG9ycy5wdXNoKGMpO2JyZWFrfXZhciBkO2ZvcihkPWM7ZC5yZXR1cm47KWQ9ZC5yZXR1cm47ZD0zIT09ZC50YWc/bnVsbDpkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2lmKCFkKWJyZWFrO2EuYW5jZXN0b3JzLnB1c2goYyk7Yz1IYShkKX13aGlsZShjKTtmb3IoYz0wO2M8YS5hbmNlc3RvcnMubGVuZ3RoO2MrKyl7Yj1hLmFuY2VzdG9yc1tjXTt2YXIgZT1SYihhLm5hdGl2ZUV2ZW50KTtkPWEudG9wTGV2ZWxUeXBlO2Zvcih2YXIgZj1hLm5hdGl2ZUV2ZW50LGg9bnVsbCxnPTA7ZzxlYS5sZW5ndGg7ZysrKXt2YXIgaz1lYVtnXTtrJiYoaz1rLmV4dHJhY3RFdmVudHMoZCxiLGYsZSkpJiYoaD14YShoLGspKX1CYShoKX19dmFyIFFkPSEwO2Z1bmN0aW9uIEcoYSxiKXtSZChiLGEsITEpfVxuZnVuY3Rpb24gUmQoYSxiLGMpe3N3aXRjaChOZChiKSl7Y2FzZSAwOnZhciBkPVNkLmJpbmQobnVsbCxiLDEpO2JyZWFrO2Nhc2UgMTpkPVRkLmJpbmQobnVsbCxiLDEpO2JyZWFrO2RlZmF1bHQ6ZD1VZC5iaW5kKG51bGwsYiwxKX1jP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGQsITApOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGQsITEpfWZ1bmN0aW9uIFNkKGEsYixjKXtOYnx8TGIoKTt2YXIgZD1VZCxlPU5iO05iPSEwO3RyeXtLYihkLGEsYixjKX1maW5hbGx5eyhOYj1lKXx8T2IoKX19ZnVuY3Rpb24gVGQoYSxiLGMpe1VkKGEsYixjKX1cbmZ1bmN0aW9uIFVkKGEsYixjKXtpZihRZCl7Yj1SYihjKTtiPUhhKGIpO251bGw9PT1ifHxcIm51bWJlclwiIT09dHlwZW9mIGIudGFnfHwyPT09bGQoYil8fChiPW51bGwpO2lmKE9kLmxlbmd0aCl7dmFyIGQ9T2QucG9wKCk7ZC50b3BMZXZlbFR5cGU9YTtkLm5hdGl2ZUV2ZW50PWM7ZC50YXJnZXRJbnN0PWI7YT1kfWVsc2UgYT17dG9wTGV2ZWxUeXBlOmEsbmF0aXZlRXZlbnQ6Yyx0YXJnZXRJbnN0OmIsYW5jZXN0b3JzOltdfTt0cnl7aWYoYz1hLE5iKVBkKGMsdm9pZCAwKTtlbHNle05iPSEwO3RyeXtNYihQZCxjLHZvaWQgMCl9ZmluYWxseXtOYj0hMSxPYigpfX19ZmluYWxseXthLnRvcExldmVsVHlwZT1udWxsLGEubmF0aXZlRXZlbnQ9bnVsbCxhLnRhcmdldEluc3Q9bnVsbCxhLmFuY2VzdG9ycy5sZW5ndGg9MCwxMD5PZC5sZW5ndGgmJk9kLnB1c2goYSl9fX12YXIgVmQ9bmV3IChcImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha01hcD9XZWFrTWFwOk1hcCk7XG5mdW5jdGlvbiBXZChhKXt2YXIgYj1WZC5nZXQoYSk7dm9pZCAwPT09YiYmKGI9bmV3IFNldCxWZC5zZXQoYSxiKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gWGQoYSl7YT1hfHwoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudD9kb2N1bWVudDp2b2lkIDApO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIGEuYWN0aXZlRWxlbWVudHx8YS5ib2R5fWNhdGNoKGIpe3JldHVybiBhLmJvZHl9fWZ1bmN0aW9uIFlkKGEpe2Zvcig7YSYmYS5maXJzdENoaWxkOylhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX1cbmZ1bmN0aW9uIFpkKGEsYil7dmFyIGM9WWQoYSk7YT0wO2Zvcih2YXIgZDtjOyl7aWYoMz09PWMubm9kZVR5cGUpe2Q9YStjLnRleHRDb250ZW50Lmxlbmd0aDtpZihhPD1iJiZkPj1iKXJldHVybntub2RlOmMsb2Zmc2V0OmItYX07YT1kfWE6e2Zvcig7Yzspe2lmKGMubmV4dFNpYmxpbmcpe2M9Yy5uZXh0U2libGluZzticmVhayBhfWM9Yy5wYXJlbnROb2RlfWM9dm9pZCAwfWM9WWQoYyl9fWZ1bmN0aW9uICRkKGEsYil7cmV0dXJuIGEmJmI/YT09PWI/ITA6YSYmMz09PWEubm9kZVR5cGU/ITE6YiYmMz09PWIubm9kZVR5cGU/JGQoYSxiLnBhcmVudE5vZGUpOlwiY29udGFpbnNcImluIGE/YS5jb250YWlucyhiKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPyEhKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikmMTYpOiExOiExfVxuZnVuY3Rpb24gYWUoKXtmb3IodmFyIGE9d2luZG93LGI9WGQoKTtiIGluc3RhbmNlb2YgYS5IVE1MSUZyYW1lRWxlbWVudDspe3RyeXt2YXIgYz1cInN0cmluZ1wiPT09dHlwZW9mIGIuY29udGVudFdpbmRvdy5sb2NhdGlvbi5ocmVmfWNhdGNoKGQpe2M9ITF9aWYoYylhPWIuY29udGVudFdpbmRvdztlbHNlIGJyZWFrO2I9WGQoYS5kb2N1bWVudCl9cmV0dXJuIGJ9ZnVuY3Rpb24gYmUoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBiJiYoXCJpbnB1dFwiPT09YiYmKFwidGV4dFwiPT09YS50eXBlfHxcInNlYXJjaFwiPT09YS50eXBlfHxcInRlbFwiPT09YS50eXBlfHxcInVybFwiPT09YS50eXBlfHxcInBhc3N3b3JkXCI9PT1hLnR5cGUpfHxcInRleHRhcmVhXCI9PT1ifHxcInRydWVcIj09PWEuY29udGVudEVkaXRhYmxlKX1cbnZhciBjZT1SYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYxMT49ZG9jdW1lbnQuZG9jdW1lbnRNb2RlLGRlPXtzZWxlY3Q6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25TZWxlY3RcIixjYXB0dXJlZDpcIm9uU2VsZWN0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbnRleHRtZW51IGRyYWdlbmQgZm9jdXMga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIil9fSxlZT1udWxsLGZlPW51bGwsZ2U9bnVsbCxoZT0hMTtcbmZ1bmN0aW9uIGllKGEsYil7dmFyIGM9Yi53aW5kb3c9PT1iP2IuZG9jdW1lbnQ6OT09PWIubm9kZVR5cGU/YjpiLm93bmVyRG9jdW1lbnQ7aWYoaGV8fG51bGw9PWVlfHxlZSE9PVhkKGMpKXJldHVybiBudWxsO2M9ZWU7XCJzZWxlY3Rpb25TdGFydFwiaW4gYyYmYmUoYyk/Yz17c3RhcnQ6Yy5zZWxlY3Rpb25TdGFydCxlbmQ6Yy5zZWxlY3Rpb25FbmR9OihjPShjLm93bmVyRG9jdW1lbnQmJmMub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld3x8d2luZG93KS5nZXRTZWxlY3Rpb24oKSxjPXthbmNob3JOb2RlOmMuYW5jaG9yTm9kZSxhbmNob3JPZmZzZXQ6Yy5hbmNob3JPZmZzZXQsZm9jdXNOb2RlOmMuZm9jdXNOb2RlLGZvY3VzT2Zmc2V0OmMuZm9jdXNPZmZzZXR9KTtyZXR1cm4gZ2UmJmpkKGdlLGMpP251bGw6KGdlPWMsYT15LmdldFBvb2xlZChkZS5zZWxlY3QsZmUsYSxiKSxhLnR5cGU9XCJzZWxlY3RcIixhLnRhcmdldD1lZSxRYShhKSxhKX1cbnZhciBqZT17ZXZlbnRUeXBlczpkZSxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWQud2luZG93PT09ZD9kLmRvY3VtZW50Ojk9PT1kLm5vZGVUeXBlP2Q6ZC5vd25lckRvY3VtZW50LGY7aWYoIShmPSFlKSl7YTp7ZT1XZChlKTtmPWphLm9uU2VsZWN0O2Zvcih2YXIgaD0wO2g8Zi5sZW5ndGg7aCsrKWlmKCFlLmhhcyhmW2hdKSl7ZT0hMTticmVhayBhfWU9ITB9Zj0hZX1pZihmKXJldHVybiBudWxsO2U9Yj9KYShiKTp3aW5kb3c7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c1wiOmlmKFFiKGUpfHxcInRydWVcIj09PWUuY29udGVudEVkaXRhYmxlKWVlPWUsZmU9YixnZT1udWxsO2JyZWFrO2Nhc2UgXCJibHVyXCI6Z2U9ZmU9ZWU9bnVsbDticmVhaztjYXNlIFwibW91c2Vkb3duXCI6aGU9ITA7YnJlYWs7Y2FzZSBcImNvbnRleHRtZW51XCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwiZHJhZ2VuZFwiOnJldHVybiBoZT0hMSxpZShjLGQpO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihjZSlicmVhaztcbmNhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6cmV0dXJuIGllKGMsZCl9cmV0dXJuIG51bGx9fTtDYS5pbmplY3RFdmVudFBsdWdpbk9yZGVyKFwiUmVzcG9uZGVyRXZlbnRQbHVnaW4gU2ltcGxlRXZlbnRQbHVnaW4gRW50ZXJMZWF2ZUV2ZW50UGx1Z2luIENoYW5nZUV2ZW50UGx1Z2luIFNlbGVjdEV2ZW50UGx1Z2luIEJlZm9yZUlucHV0RXZlbnRQbHVnaW5cIi5zcGxpdChcIiBcIikpO3NhPUthO3RhPUlhO3ZhPUphO0NhLmluamVjdEV2ZW50UGx1Z2luc0J5TmFtZSh7U2ltcGxlRXZlbnRQbHVnaW46TWQsRW50ZXJMZWF2ZUV2ZW50UGx1Z2luOmdkLENoYW5nZUV2ZW50UGx1Z2luOlZjLFNlbGVjdEV2ZW50UGx1Z2luOmplLEJlZm9yZUlucHV0RXZlbnRQbHVnaW46Q2J9KTtmdW5jdGlvbiBrZShhKXt2YXIgYj1cIlwiO2FhLkNoaWxkcmVuLmZvckVhY2goYSxmdW5jdGlvbihhKXtudWxsIT1hJiYoYis9YSl9KTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGxlKGEsYil7YT1tKHtjaGlsZHJlbjp2b2lkIDB9LGIpO2lmKGI9a2UoYi5jaGlsZHJlbikpYS5jaGlsZHJlbj1iO3JldHVybiBhfWZ1bmN0aW9uIG1lKGEsYixjLGQpe2E9YS5vcHRpb25zO2lmKGIpe2I9e307Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYltcIiRcIitjW2VdXT0hMDtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWU9Yi5oYXNPd25Qcm9wZXJ0eShcIiRcIithW2NdLnZhbHVlKSxhW2NdLnNlbGVjdGVkIT09ZSYmKGFbY10uc2VsZWN0ZWQ9ZSksZSYmZCYmKGFbY10uZGVmYXVsdFNlbGVjdGVkPSEwKX1lbHNle2M9XCJcIitBYyhjKTtiPW51bGw7Zm9yKGU9MDtlPGEubGVuZ3RoO2UrKyl7aWYoYVtlXS52YWx1ZT09PWMpe2FbZV0uc2VsZWN0ZWQ9ITA7ZCYmKGFbZV0uZGVmYXVsdFNlbGVjdGVkPSEwKTtyZXR1cm59bnVsbCE9PWJ8fGFbZV0uZGlzYWJsZWR8fChiPWFbZV0pfW51bGwhPT1iJiYoYi5zZWxlY3RlZD0hMCl9fVxuZnVuY3Rpb24gbmUoYSxiKXtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXRocm93IHQoRXJyb3IoOTEpKTtyZXR1cm4gbSh7fSxiLHt2YWx1ZTp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCxjaGlsZHJlbjpcIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWV9KX1mdW5jdGlvbiBvZShhLGIpe3ZhciBjPWIudmFsdWU7aWYobnVsbD09Yyl7Yz1iLmRlZmF1bHRWYWx1ZTtiPWIuY2hpbGRyZW47aWYobnVsbCE9Yil7aWYobnVsbCE9Yyl0aHJvdyB0KEVycm9yKDkyKSk7aWYoQXJyYXkuaXNBcnJheShiKSl7aWYoISgxPj1iLmxlbmd0aCkpdGhyb3cgdChFcnJvcig5MykpO2I9YlswXX1jPWJ9bnVsbD09YyYmKGM9XCJcIil9YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsVmFsdWU6QWMoYyl9fVxuZnVuY3Rpb24gcGUoYSxiKXt2YXIgYz1BYyhiLnZhbHVlKSxkPUFjKGIuZGVmYXVsdFZhbHVlKTtudWxsIT1jJiYoYz1cIlwiK2MsYyE9PWEudmFsdWUmJihhLnZhbHVlPWMpLG51bGw9PWIuZGVmYXVsdFZhbHVlJiZhLmRlZmF1bHRWYWx1ZSE9PWMmJihhLmRlZmF1bHRWYWx1ZT1jKSk7bnVsbCE9ZCYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrZCl9ZnVuY3Rpb24gcWUoYSl7dmFyIGI9YS50ZXh0Q29udGVudDtiPT09YS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSYmKGEudmFsdWU9Yil9dmFyIHJlPXtodG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLG1hdGhtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIixzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifTtcbmZ1bmN0aW9uIHNlKGEpe3N3aXRjaChhKXtjYXNlIFwic3ZnXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO2Nhc2UgXCJtYXRoXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7ZGVmYXVsdDpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIn19ZnVuY3Rpb24gdGUoYSxiKXtyZXR1cm4gbnVsbD09YXx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1hP3NlKGIpOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09PWEmJlwiZm9yZWlnbk9iamVjdFwiPT09Yj9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjphfVxudmFyIHVlPXZvaWQgMCx2ZT1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1TQXBwJiZNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbj9mdW5jdGlvbihiLGMsZCxlKXtNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbihmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9OmF9KGZ1bmN0aW9uKGEsYil7aWYoYS5uYW1lc3BhY2VVUkkhPT1yZS5zdmd8fFwiaW5uZXJIVE1MXCJpbiBhKWEuaW5uZXJIVE1MPWI7ZWxzZXt1ZT11ZXx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt1ZS5pbm5lckhUTUw9XCI8c3ZnPlwiK2IrXCI8L3N2Zz5cIjtmb3IoYj11ZS5maXJzdENoaWxkO2EuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO2Zvcig7Yi5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGIuZmlyc3RDaGlsZCl9fSk7XG5mdW5jdGlvbiB3ZShhLGIpe2lmKGIpe3ZhciBjPWEuZmlyc3RDaGlsZDtpZihjJiZjPT09YS5sYXN0Q2hpbGQmJjM9PT1jLm5vZGVUeXBlKXtjLm5vZGVWYWx1ZT1iO3JldHVybn19YS50ZXh0Q29udGVudD1ifVxudmFyIHhlPXthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxib3JkZXJJbWFnZU91dHNldDohMCxib3JkZXJJbWFnZVNsaWNlOiEwLGJvcmRlckltYWdlV2lkdGg6ITAsYm94RmxleDohMCxib3hGbGV4R3JvdXA6ITAsYm94T3JkaW5hbEdyb3VwOiEwLGNvbHVtbkNvdW50OiEwLGNvbHVtbnM6ITAsZmxleDohMCxmbGV4R3JvdzohMCxmbGV4UG9zaXRpdmU6ITAsZmxleFNocmluazohMCxmbGV4TmVnYXRpdmU6ITAsZmxleE9yZGVyOiEwLGdyaWRBcmVhOiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3BhbjohMCxncmlkUm93U3RhcnQ6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TcGFuOiEwLGdyaWRDb2x1bW5TdGFydDohMCxmb250V2VpZ2h0OiEwLGxpbmVDbGFtcDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx0YWJTaXplOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMCxmaWxsT3BhY2l0eTohMCxcbmZsb29kT3BhY2l0eTohMCxzdG9wT3BhY2l0eTohMCxzdHJva2VEYXNoYXJyYXk6ITAsc3Ryb2tlRGFzaG9mZnNldDohMCxzdHJva2VNaXRlcmxpbWl0OiEwLHN0cm9rZU9wYWNpdHk6ITAsc3Ryb2tlV2lkdGg6ITB9LHllPVtcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXTtPYmplY3Qua2V5cyh4ZSkuZm9yRWFjaChmdW5jdGlvbihhKXt5ZS5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9YithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyaW5nKDEpO3hlW2JdPXhlW2FdfSl9KTtmdW5jdGlvbiB6ZShhLGIsYyl7cmV0dXJuIG51bGw9PWJ8fFwiYm9vbGVhblwiPT09dHlwZW9mIGJ8fFwiXCI9PT1iP1wiXCI6Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBifHwwPT09Ynx8eGUuaGFzT3duUHJvcGVydHkoYSkmJnhlW2FdPyhcIlwiK2IpLnRyaW0oKTpiK1wicHhcIn1cbmZ1bmN0aW9uIEFlKGEsYil7YT1hLnN0eWxlO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPTA9PT1jLmluZGV4T2YoXCItLVwiKSxlPXplKGMsYltjXSxkKTtcImZsb2F0XCI9PT1jJiYoYz1cImNzc0Zsb2F0XCIpO2Q/YS5zZXRQcm9wZXJ0eShjLGUpOmFbY109ZX19dmFyIENlPW0oe21lbnVpdGVtOiEwfSx7YXJlYTohMCxiYXNlOiEwLGJyOiEwLGNvbDohMCxlbWJlZDohMCxocjohMCxpbWc6ITAsaW5wdXQ6ITAsa2V5Z2VuOiEwLGxpbms6ITAsbWV0YTohMCxwYXJhbTohMCxzb3VyY2U6ITAsdHJhY2s6ITAsd2JyOiEwfSk7XG5mdW5jdGlvbiBEZShhLGIpe2lmKGIpe2lmKENlW2FdJiYobnVsbCE9Yi5jaGlsZHJlbnx8bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgdChFcnJvcigxMzcpLGEsXCJcIik7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl7aWYobnVsbCE9Yi5jaGlsZHJlbil0aHJvdyB0KEVycm9yKDYwKSk7aWYoIShcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJlwiX19odG1sXCJpbiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSl0aHJvdyB0KEVycm9yKDYxKSk7fWlmKG51bGwhPWIuc3R5bGUmJlwib2JqZWN0XCIhPT10eXBlb2YgYi5zdHlsZSl0aHJvdyB0KEVycm9yKDYyKSxcIlwiKTt9fVxuZnVuY3Rpb24gRWUoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fVxuZnVuY3Rpb24gRmUoYSxiKXthPTk9PT1hLm5vZGVUeXBlfHwxMT09PWEubm9kZVR5cGU/YTphLm93bmVyRG9jdW1lbnQ7dmFyIGM9V2QoYSk7Yj1qYVtiXTtmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKyl7dmFyIGU9YltkXTtpZighYy5oYXMoZSkpe3N3aXRjaChlKXtjYXNlIFwic2Nyb2xsXCI6UmQoYSxcInNjcm9sbFwiLCEwKTticmVhaztjYXNlIFwiZm9jdXNcIjpjYXNlIFwiYmx1clwiOlJkKGEsXCJmb2N1c1wiLCEwKTtSZChhLFwiYmx1clwiLCEwKTtjLmFkZChcImJsdXJcIik7Yy5hZGQoXCJmb2N1c1wiKTticmVhaztjYXNlIFwiY2FuY2VsXCI6Y2FzZSBcImNsb3NlXCI6U2IoZSkmJlJkKGEsZSwhMCk7YnJlYWs7Y2FzZSBcImludmFsaWRcIjpjYXNlIFwic3VibWl0XCI6Y2FzZSBcInJlc2V0XCI6YnJlYWs7ZGVmYXVsdDotMT09PWJiLmluZGV4T2YoZSkmJkcoZSxhKX1jLmFkZChlKX19fWZ1bmN0aW9uIEdlKCl7fXZhciBIZT1udWxsLEllPW51bGw7XG5mdW5jdGlvbiBKZShhLGIpe3N3aXRjaChhKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOnJldHVybiEhYi5hdXRvRm9jdXN9cmV0dXJuITF9ZnVuY3Rpb24gS2UoYSxiKXtyZXR1cm5cInRleHRhcmVhXCI9PT1hfHxcIm9wdGlvblwiPT09YXx8XCJub3NjcmlwdFwiPT09YXx8XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm51bWJlclwiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9PWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfXZhciBMZT1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnZvaWQgMCxNZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDp2b2lkIDA7XG5mdW5jdGlvbiBOZShhKXtmb3IoO251bGwhPWE7YT1hLm5leHRTaWJsaW5nKXt2YXIgYj1hLm5vZGVUeXBlO2lmKDE9PT1ifHwzPT09YilicmVha31yZXR1cm4gYX1uZXcgU2V0O3ZhciBPZT1bXSxQZT0tMTtmdW5jdGlvbiBIKGEpezA+UGV8fChhLmN1cnJlbnQ9T2VbUGVdLE9lW1BlXT1udWxsLFBlLS0pfWZ1bmN0aW9uIEooYSxiKXtQZSsrO09lW1BlXT1hLmN1cnJlbnQ7YS5jdXJyZW50PWJ9dmFyIFFlPXt9LEw9e2N1cnJlbnQ6UWV9LE09e2N1cnJlbnQ6ITF9LFJlPVFlO1xuZnVuY3Rpb24gU2UoYSxiKXt2YXIgYz1hLnR5cGUuY29udGV4dFR5cGVzO2lmKCFjKXJldHVybiBRZTt2YXIgZD1hLnN0YXRlTm9kZTtpZihkJiZkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9PT1iKXJldHVybiBkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0O3ZhciBlPXt9LGY7Zm9yKGYgaW4gYyllW2ZdPWJbZl07ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWIsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1lKTtyZXR1cm4gZX1mdW5jdGlvbiBOKGEpe2E9YS5jaGlsZENvbnRleHRUeXBlcztyZXR1cm4gbnVsbCE9PWEmJnZvaWQgMCE9PWF9ZnVuY3Rpb24gVGUoYSl7SChNLGEpO0goTCxhKX1mdW5jdGlvbiBVZShhKXtIKE0sYSk7SChMLGEpfVxuZnVuY3Rpb24gVmUoYSxiLGMpe2lmKEwuY3VycmVudCE9PVFlKXRocm93IHQoRXJyb3IoMTY4KSk7SihMLGIsYSk7SihNLGMsYSl9ZnVuY3Rpb24gV2UoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2E9Yi5jaGlsZENvbnRleHRUeXBlcztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZC5nZXRDaGlsZENvbnRleHQpcmV0dXJuIGM7ZD1kLmdldENoaWxkQ29udGV4dCgpO2Zvcih2YXIgZSBpbiBkKWlmKCEoZSBpbiBhKSl0aHJvdyB0KEVycm9yKDEwOCksb2MoYil8fFwiVW5rbm93blwiLGUpO3JldHVybiBtKHt9LGMsZCl9ZnVuY3Rpb24gWGUoYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yj1iJiZiLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxRZTtSZT1MLmN1cnJlbnQ7SihMLGIsYSk7SihNLE0uY3VycmVudCxhKTtyZXR1cm4hMH1cbmZ1bmN0aW9uIFllKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTtpZighZCl0aHJvdyB0KEVycm9yKDE2OSkpO2M/KGI9V2UoYSxiLFJlKSxkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0PWIsSChNLGEpLEgoTCxhKSxKKEwsYixhKSk6SChNLGEpO0ooTSxjLGEpfVxudmFyIFplPXEudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LCRlPXEudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxhZj1xLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrLGJmPXEudW5zdGFibGVfc2hvdWxkWWllbGQsY2Y9cS51bnN0YWJsZV9yZXF1ZXN0UGFpbnQsZGY9cS51bnN0YWJsZV9ub3csZWY9cS51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCxmZj1xLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LGhmPXEudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksamY9cS51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxrZj1xLnVuc3RhYmxlX0xvd1ByaW9yaXR5LGxmPXEudW5zdGFibGVfSWRsZVByaW9yaXR5LG1mPXt9LG5mPXZvaWQgMCE9PWNmP2NmOmZ1bmN0aW9uKCl7fSxvZj1udWxsLHBmPW51bGwscWY9ITEscmY9ZGYoKSxzZj0xRTQ+cmY/ZGY6ZnVuY3Rpb24oKXtyZXR1cm4gZGYoKS1yZn07XG5mdW5jdGlvbiB0Zigpe3N3aXRjaChlZigpKXtjYXNlIGZmOnJldHVybiA5OTtjYXNlIGhmOnJldHVybiA5ODtjYXNlIGpmOnJldHVybiA5NztjYXNlIGtmOnJldHVybiA5NjtjYXNlIGxmOnJldHVybiA5NTtkZWZhdWx0OnRocm93IHQoRXJyb3IoMzMyKSk7fX1mdW5jdGlvbiB1ZihhKXtzd2l0Y2goYSl7Y2FzZSA5OTpyZXR1cm4gZmY7Y2FzZSA5ODpyZXR1cm4gaGY7Y2FzZSA5NzpyZXR1cm4gamY7Y2FzZSA5NjpyZXR1cm4ga2Y7Y2FzZSA5NTpyZXR1cm4gbGY7ZGVmYXVsdDp0aHJvdyB0KEVycm9yKDMzMikpO319ZnVuY3Rpb24gdmYoYSxiKXthPXVmKGEpO3JldHVybiBaZShhLGIpfWZ1bmN0aW9uIHdmKGEsYixjKXthPXVmKGEpO3JldHVybiAkZShhLGIsYyl9ZnVuY3Rpb24geGYoYSl7bnVsbD09PW9mPyhvZj1bYV0scGY9JGUoZmYseWYpKTpvZi5wdXNoKGEpO3JldHVybiBtZn1mdW5jdGlvbiBPKCl7bnVsbCE9PXBmJiZhZihwZik7eWYoKX1cbmZ1bmN0aW9uIHlmKCl7aWYoIXFmJiZudWxsIT09b2Ype3FmPSEwO3ZhciBhPTA7dHJ5e3ZhciBiPW9mO3ZmKDk5LGZ1bmN0aW9uKCl7Zm9yKDthPGIubGVuZ3RoO2ErKyl7dmFyIGM9YlthXTtkbyBjPWMoITApO3doaWxlKG51bGwhPT1jKX19KTtvZj1udWxsfWNhdGNoKGMpe3Rocm93IG51bGwhPT1vZiYmKG9mPW9mLnNsaWNlKGErMSkpLCRlKGZmLE8pLGM7fWZpbmFsbHl7cWY9ITF9fX1mdW5jdGlvbiB6ZihhLGIpe2lmKDEwNzM3NDE4MjM9PT1iKXJldHVybiA5OTtpZigxPT09YilyZXR1cm4gOTU7YT0xMCooMTA3Mzc0MTgyMS1iKS0xMCooMTA3Mzc0MTgyMS1hKTtyZXR1cm4gMD49YT85OToyNTA+PWE/OTg6NTI1MD49YT85Nzo5NX1mdW5jdGlvbiBBZihhLGIpe2lmKGEmJmEuZGVmYXVsdFByb3BzKXtiPW0oe30sYik7YT1hLmRlZmF1bHRQcm9wcztmb3IodmFyIGMgaW4gYSl2b2lkIDA9PT1iW2NdJiYoYltjXT1hW2NdKX1yZXR1cm4gYn1cbmZ1bmN0aW9uIEJmKGEpe3ZhciBiPWEuX3Jlc3VsdDtzd2l0Y2goYS5fc3RhdHVzKXtjYXNlIDE6cmV0dXJuIGI7Y2FzZSAyOnRocm93IGI7Y2FzZSAwOnRocm93IGI7ZGVmYXVsdDphLl9zdGF0dXM9MDtiPWEuX2N0b3I7Yj1iKCk7Yi50aGVuKGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihiPWIuZGVmYXVsdCxhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yil9LGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yil9KTtzd2l0Y2goYS5fc3RhdHVzKXtjYXNlIDE6cmV0dXJuIGEuX3Jlc3VsdDtjYXNlIDI6dGhyb3cgYS5fcmVzdWx0O31hLl9yZXN1bHQ9Yjt0aHJvdyBiO319dmFyIENmPXtjdXJyZW50Om51bGx9LERmPW51bGwsRWY9bnVsbCxGZj1udWxsO2Z1bmN0aW9uIEdmKCl7RmY9RWY9RGY9bnVsbH1cbmZ1bmN0aW9uIEhmKGEsYil7dmFyIGM9YS50eXBlLl9jb250ZXh0O0ooQ2YsYy5fY3VycmVudFZhbHVlLGEpO2MuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIElmKGEpe3ZhciBiPUNmLmN1cnJlbnQ7SChDZixhKTthLnR5cGUuX2NvbnRleHQuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIEpmKGEsYil7Zm9yKDtudWxsIT09YTspe3ZhciBjPWEuYWx0ZXJuYXRlO2lmKGEuY2hpbGRFeHBpcmF0aW9uVGltZTxiKWEuY2hpbGRFeHBpcmF0aW9uVGltZT1iLG51bGwhPT1jJiZjLmNoaWxkRXhwaXJhdGlvblRpbWU8YiYmKGMuY2hpbGRFeHBpcmF0aW9uVGltZT1iKTtlbHNlIGlmKG51bGwhPT1jJiZjLmNoaWxkRXhwaXJhdGlvblRpbWU8YiljLmNoaWxkRXhwaXJhdGlvblRpbWU9YjtlbHNlIGJyZWFrO2E9YS5yZXR1cm59fVxuZnVuY3Rpb24gS2YoYSxiKXtEZj1hO0ZmPUVmPW51bGw7YT1hLmRlcGVuZGVuY2llcztudWxsIT09YSYmbnVsbCE9PWEuZmlyc3RDb250ZXh0JiYoYS5leHBpcmF0aW9uVGltZT49YiYmKExmPSEwKSxhLmZpcnN0Q29udGV4dD1udWxsKX1mdW5jdGlvbiBNZihhLGIpe2lmKEZmIT09YSYmITEhPT1iJiYwIT09Yil7aWYoXCJudW1iZXJcIiE9PXR5cGVvZiBifHwxMDczNzQxODIzPT09YilGZj1hLGI9MTA3Mzc0MTgyMztiPXtjb250ZXh0OmEsb2JzZXJ2ZWRCaXRzOmIsbmV4dDpudWxsfTtpZihudWxsPT09RWYpe2lmKG51bGw9PT1EZil0aHJvdyB0KEVycm9yKDMwOCkpO0VmPWI7RGYuZGVwZW5kZW5jaWVzPXtleHBpcmF0aW9uVGltZTowLGZpcnN0Q29udGV4dDpiLHJlc3BvbmRlcnM6bnVsbH19ZWxzZSBFZj1FZi5uZXh0PWJ9cmV0dXJuIGEuX2N1cnJlbnRWYWx1ZX12YXIgTmY9ITE7XG5mdW5jdGlvbiBPZihhKXtyZXR1cm57YmFzZVN0YXRlOmEsZmlyc3RVcGRhdGU6bnVsbCxsYXN0VXBkYXRlOm51bGwsZmlyc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGxhc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGZpcnN0RWZmZWN0Om51bGwsbGFzdEVmZmVjdDpudWxsLGZpcnN0Q2FwdHVyZWRFZmZlY3Q6bnVsbCxsYXN0Q2FwdHVyZWRFZmZlY3Q6bnVsbH19ZnVuY3Rpb24gUGYoYSl7cmV0dXJue2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdFVwZGF0ZTphLmZpcnN0VXBkYXRlLGxhc3RVcGRhdGU6YS5sYXN0VXBkYXRlLGZpcnN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxsYXN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxmaXJzdEVmZmVjdDpudWxsLGxhc3RFZmZlY3Q6bnVsbCxmaXJzdENhcHR1cmVkRWZmZWN0Om51bGwsbGFzdENhcHR1cmVkRWZmZWN0Om51bGx9fVxuZnVuY3Rpb24gUWYoYSxiKXtyZXR1cm57ZXhwaXJhdGlvblRpbWU6YSxzdXNwZW5zZUNvbmZpZzpiLHRhZzowLHBheWxvYWQ6bnVsbCxjYWxsYmFjazpudWxsLG5leHQ6bnVsbCxuZXh0RWZmZWN0Om51bGx9fWZ1bmN0aW9uIFJmKGEsYil7bnVsbD09PWEubGFzdFVwZGF0ZT9hLmZpcnN0VXBkYXRlPWEubGFzdFVwZGF0ZT1iOihhLmxhc3RVcGRhdGUubmV4dD1iLGEubGFzdFVwZGF0ZT1iKX1cbmZ1bmN0aW9uIFNmKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7aWYobnVsbD09PWMpe3ZhciBkPWEudXBkYXRlUXVldWU7dmFyIGU9bnVsbDtudWxsPT09ZCYmKGQ9YS51cGRhdGVRdWV1ZT1PZihhLm1lbW9pemVkU3RhdGUpKX1lbHNlIGQ9YS51cGRhdGVRdWV1ZSxlPWMudXBkYXRlUXVldWUsbnVsbD09PWQ/bnVsbD09PWU/KGQ9YS51cGRhdGVRdWV1ZT1PZihhLm1lbW9pemVkU3RhdGUpLGU9Yy51cGRhdGVRdWV1ZT1PZihjLm1lbW9pemVkU3RhdGUpKTpkPWEudXBkYXRlUXVldWU9UGYoZSk6bnVsbD09PWUmJihlPWMudXBkYXRlUXVldWU9UGYoZCkpO251bGw9PT1lfHxkPT09ZT9SZihkLGIpOm51bGw9PT1kLmxhc3RVcGRhdGV8fG51bGw9PT1lLmxhc3RVcGRhdGU/KFJmKGQsYiksUmYoZSxiKSk6KFJmKGQsYiksZS5sYXN0VXBkYXRlPWIpfVxuZnVuY3Rpb24gVGYoYSxiKXt2YXIgYz1hLnVwZGF0ZVF1ZXVlO2M9bnVsbD09PWM/YS51cGRhdGVRdWV1ZT1PZihhLm1lbW9pemVkU3RhdGUpOlVmKGEsYyk7bnVsbD09PWMubGFzdENhcHR1cmVkVXBkYXRlP2MuZmlyc3RDYXB0dXJlZFVwZGF0ZT1jLmxhc3RDYXB0dXJlZFVwZGF0ZT1iOihjLmxhc3RDYXB0dXJlZFVwZGF0ZS5uZXh0PWIsYy5sYXN0Q2FwdHVyZWRVcGRhdGU9Yil9ZnVuY3Rpb24gVWYoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmYj09PWMudXBkYXRlUXVldWUmJihiPWEudXBkYXRlUXVldWU9UGYoYikpO3JldHVybiBifVxuZnVuY3Rpb24gVmYoYSxiLGMsZCxlLGYpe3N3aXRjaChjLnRhZyl7Y2FzZSAxOnJldHVybiBhPWMucGF5bG9hZCxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hLmNhbGwoZixkLGUpOmE7Y2FzZSAzOmEuZWZmZWN0VGFnPWEuZWZmZWN0VGFnJi0yMDQ5fDY0O2Nhc2UgMDphPWMucGF5bG9hZDtlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2EuY2FsbChmLGQsZSk6YTtpZihudWxsPT09ZXx8dm9pZCAwPT09ZSlicmVhaztyZXR1cm4gbSh7fSxkLGUpO2Nhc2UgMjpOZj0hMH1yZXR1cm4gZH1cbmZ1bmN0aW9uIFdmKGEsYixjLGQsZSl7TmY9ITE7Yj1VZihhLGIpO2Zvcih2YXIgZj1iLmJhc2VTdGF0ZSxoPW51bGwsZz0wLGs9Yi5maXJzdFVwZGF0ZSxsPWY7bnVsbCE9PWs7KXt2YXIgbj1rLmV4cGlyYXRpb25UaW1lO248ZT8obnVsbD09PWgmJihoPWssZj1sKSxnPG4mJihnPW4pKTooWGYobixrLnN1c3BlbnNlQ29uZmlnKSxsPVZmKGEsYixrLGwsYyxkKSxudWxsIT09ay5jYWxsYmFjayYmKGEuZWZmZWN0VGFnfD0zMixrLm5leHRFZmZlY3Q9bnVsbCxudWxsPT09Yi5sYXN0RWZmZWN0P2IuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWs6KGIubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWssYi5sYXN0RWZmZWN0PWspKSk7az1rLm5leHR9bj1udWxsO2ZvcihrPWIuZmlyc3RDYXB0dXJlZFVwZGF0ZTtudWxsIT09azspe3ZhciB6PWsuZXhwaXJhdGlvblRpbWU7ejxlPyhudWxsPT09biYmKG49ayxudWxsPT09aCYmKGY9bCkpLGc8eiYmKGc9eikpOihsPVZmKGEsYixrLGwsYyxkKSxudWxsIT09XG5rLmNhbGxiYWNrJiYoYS5lZmZlY3RUYWd8PTMyLGsubmV4dEVmZmVjdD1udWxsLG51bGw9PT1iLmxhc3RDYXB0dXJlZEVmZmVjdD9iLmZpcnN0Q2FwdHVyZWRFZmZlY3Q9Yi5sYXN0Q2FwdHVyZWRFZmZlY3Q9azooYi5sYXN0Q2FwdHVyZWRFZmZlY3QubmV4dEVmZmVjdD1rLGIubGFzdENhcHR1cmVkRWZmZWN0PWspKSk7az1rLm5leHR9bnVsbD09PWgmJihiLmxhc3RVcGRhdGU9bnVsbCk7bnVsbD09PW4/Yi5sYXN0Q2FwdHVyZWRVcGRhdGU9bnVsbDphLmVmZmVjdFRhZ3w9MzI7bnVsbD09PWgmJm51bGw9PT1uJiYoZj1sKTtiLmJhc2VTdGF0ZT1mO2IuZmlyc3RVcGRhdGU9aDtiLmZpcnN0Q2FwdHVyZWRVcGRhdGU9bjthLmV4cGlyYXRpb25UaW1lPWc7YS5tZW1vaXplZFN0YXRlPWx9XG5mdW5jdGlvbiBZZihhLGIsYyl7bnVsbCE9PWIuZmlyc3RDYXB0dXJlZFVwZGF0ZSYmKG51bGwhPT1iLmxhc3RVcGRhdGUmJihiLmxhc3RVcGRhdGUubmV4dD1iLmZpcnN0Q2FwdHVyZWRVcGRhdGUsYi5sYXN0VXBkYXRlPWIubGFzdENhcHR1cmVkVXBkYXRlKSxiLmZpcnN0Q2FwdHVyZWRVcGRhdGU9Yi5sYXN0Q2FwdHVyZWRVcGRhdGU9bnVsbCk7WmYoYi5maXJzdEVmZmVjdCxjKTtiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1udWxsO1pmKGIuZmlyc3RDYXB0dXJlZEVmZmVjdCxjKTtiLmZpcnN0Q2FwdHVyZWRFZmZlY3Q9Yi5sYXN0Q2FwdHVyZWRFZmZlY3Q9bnVsbH1mdW5jdGlvbiBaZihhLGIpe2Zvcig7bnVsbCE9PWE7KXt2YXIgYz1hLmNhbGxiYWNrO2lmKG51bGwhPT1jKXthLmNhbGxiYWNrPW51bGw7dmFyIGQ9YjtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgYyl0aHJvdyB0KEVycm9yKDE5MSksYyk7Yy5jYWxsKGQpfWE9YS5uZXh0RWZmZWN0fX1cbnZhciAkZj1YYi5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxhZz0obmV3IGFhLkNvbXBvbmVudCkucmVmcztmdW5jdGlvbiBiZyhhLGIsYyxkKXtiPWEubWVtb2l6ZWRTdGF0ZTtjPWMoZCxiKTtjPW51bGw9PT1jfHx2b2lkIDA9PT1jP2I6bSh7fSxiLGMpO2EubWVtb2l6ZWRTdGF0ZT1jO2Q9YS51cGRhdGVRdWV1ZTtudWxsIT09ZCYmMD09PWEuZXhwaXJhdGlvblRpbWUmJihkLmJhc2VTdGF0ZT1jKX1cbnZhciBmZz17aXNNb3VudGVkOmZ1bmN0aW9uKGEpe3JldHVybihhPWEuX3JlYWN0SW50ZXJuYWxGaWJlcik/Mj09PWxkKGEpOiExfSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBkPWNnKCksZT0kZi5zdXNwZW5zZTtkPWRnKGQsYSxlKTtlPVFmKGQsZSk7ZS5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihlLmNhbGxiYWNrPWMpO1NmKGEsZSk7ZWcoYSxkKX0sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsRmliZXI7dmFyIGQ9Y2coKSxlPSRmLnN1c3BlbnNlO2Q9ZGcoZCxhLGUpO2U9UWYoZCxlKTtlLnRhZz0xO2UucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZS5jYWxsYmFjaz1jKTtTZihhLGUpO2VnKGEsZCl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBjPWNnKCksZD0kZi5zdXNwZW5zZTtcbmM9ZGcoYyxhLGQpO2Q9UWYoYyxkKTtkLnRhZz0yO3ZvaWQgMCE9PWImJm51bGwhPT1iJiYoZC5jYWxsYmFjaz1iKTtTZihhLGQpO2VnKGEsYyl9fTtmdW5jdGlvbiBnZyhhLGIsYyxkLGUsZixoKXthPWEuc3RhdGVOb2RlO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnNob3VsZENvbXBvbmVudFVwZGF0ZT9hLnNob3VsZENvbXBvbmVudFVwZGF0ZShkLGYsaCk6Yi5wcm90b3R5cGUmJmIucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50PyFqZChjLGQpfHwhamQoZSxmKTohMH1cbmZ1bmN0aW9uIGhnKGEsYixjKXt2YXIgZD0hMSxlPVFlO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9mPU1mKGYpOihlPU4oYik/UmU6TC5jdXJyZW50LGQ9Yi5jb250ZXh0VHlwZXMsZj0oZD1udWxsIT09ZCYmdm9pZCAwIT09ZCk/U2UoYSxlKTpRZSk7Yj1uZXcgYihjLGYpO2EubWVtb2l6ZWRTdGF0ZT1udWxsIT09Yi5zdGF0ZSYmdm9pZCAwIT09Yi5zdGF0ZT9iLnN0YXRlOm51bGw7Yi51cGRhdGVyPWZnO2Euc3RhdGVOb2RlPWI7Yi5fcmVhY3RJbnRlcm5hbEZpYmVyPWE7ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1mKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGlnKGEsYixjLGQpe2E9Yi5zdGF0ZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO2Iuc3RhdGUhPT1hJiZmZy5lbnF1ZXVlUmVwbGFjZVN0YXRlKGIsYi5zdGF0ZSxudWxsKX1cbmZ1bmN0aW9uIGpnKGEsYixjLGQpe3ZhciBlPWEuc3RhdGVOb2RlO2UucHJvcHM9YztlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtlLnJlZnM9YWc7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2UuY29udGV4dD1NZihmKTooZj1OKGIpP1JlOkwuY3VycmVudCxlLmNvbnRleHQ9U2UoYSxmKSk7Zj1hLnVwZGF0ZVF1ZXVlO251bGwhPT1mJiYoV2YoYSxmLGMsZSxkKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7Zj1iLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZiYmKGJnKGEsYixmLGMpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHN8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT1cbnR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudHx8KGI9ZS5zdGF0ZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnQmJmUuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCksYiE9PWUuc3RhdGUmJmZnLmVucXVldWVSZXBsYWNlU3RhdGUoZSxlLnN0YXRlLG51bGwpLGY9YS51cGRhdGVRdWV1ZSxudWxsIT09ZiYmKFdmKGEsZixjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnREaWRNb3VudCYmKGEuZWZmZWN0VGFnfD00KX12YXIga2c9QXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIGxnKGEsYixjKXthPWMucmVmO2lmKG51bGwhPT1hJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmXCJvYmplY3RcIiE9PXR5cGVvZiBhKXtpZihjLl9vd25lcil7Yz1jLl9vd25lcjt2YXIgZD12b2lkIDA7aWYoYyl7aWYoMSE9PWMudGFnKXRocm93IHQoRXJyb3IoMzA5KSk7ZD1jLnN0YXRlTm9kZX1pZighZCl0aHJvdyB0KEVycm9yKDE0NyksYSk7dmFyIGU9XCJcIithO2lmKG51bGwhPT1iJiZudWxsIT09Yi5yZWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlZiYmYi5yZWYuX3N0cmluZ1JlZj09PWUpcmV0dXJuIGIucmVmO2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZC5yZWZzO2I9PT1hZyYmKGI9ZC5yZWZzPXt9KTtudWxsPT09YT9kZWxldGUgYltlXTpiW2VdPWF9O2IuX3N0cmluZ1JlZj1lO3JldHVybiBifWlmKFwic3RyaW5nXCIhPT10eXBlb2YgYSl0aHJvdyB0KEVycm9yKDI4NCkpO2lmKCFjLl9vd25lcil0aHJvdyB0KEVycm9yKDI5MCksYSk7fXJldHVybiBhfVxuZnVuY3Rpb24gbWcoYSxiKXtpZihcInRleHRhcmVhXCIhPT1hLnR5cGUpdGhyb3cgdChFcnJvcigzMSksXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiKT9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGIpLmpvaW4oXCIsIFwiKStcIn1cIjpiLFwiXCIpO31cbmZ1bmN0aW9uIG5nKGEpe2Z1bmN0aW9uIGIoYixjKXtpZihhKXt2YXIgZD1iLmxhc3RFZmZlY3Q7bnVsbCE9PWQ/KGQubmV4dEVmZmVjdD1jLGIubGFzdEVmZmVjdD1jKTpiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1jO2MubmV4dEVmZmVjdD1udWxsO2MuZWZmZWN0VGFnPTh9fWZ1bmN0aW9uIGMoYyxkKXtpZighYSlyZXR1cm4gbnVsbDtmb3IoO251bGwhPT1kOyliKGMsZCksZD1kLnNpYmxpbmc7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZChhLGIpe2ZvcihhPW5ldyBNYXA7bnVsbCE9PWI7KW51bGwhPT1iLmtleT9hLnNldChiLmtleSxiKTphLnNldChiLmluZGV4LGIpLGI9Yi5zaWJsaW5nO3JldHVybiBhfWZ1bmN0aW9uIGUoYSxiLGMpe2E9b2coYSxiLGMpO2EuaW5kZXg9MDthLnNpYmxpbmc9bnVsbDtyZXR1cm4gYX1mdW5jdGlvbiBmKGIsYyxkKXtiLmluZGV4PWQ7aWYoIWEpcmV0dXJuIGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5lZmZlY3RUYWc9XG4yLGMpOmQ7Yi5lZmZlY3RUYWc9MjtyZXR1cm4gY31mdW5jdGlvbiBoKGIpe2EmJm51bGw9PT1iLmFsdGVybmF0ZSYmKGIuZWZmZWN0VGFnPTIpO3JldHVybiBifWZ1bmN0aW9uIGcoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDYhPT1iLnRhZylyZXR1cm4gYj1wZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyxkKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIGsoYSxiLGMsZCl7aWYobnVsbCE9PWImJmIuZWxlbWVudFR5cGU9PT1jLnR5cGUpcmV0dXJuIGQ9ZShiLGMucHJvcHMsZCksZC5yZWY9bGcoYSxiLGMpLGQucmV0dXJuPWEsZDtkPXFnKGMudHlwZSxjLmtleSxjLnByb3BzLG51bGwsYS5tb2RlLGQpO2QucmVmPWxnKGEsYixjKTtkLnJldHVybj1hO3JldHVybiBkfWZ1bmN0aW9uIGwoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDQhPT1iLnRhZ3x8Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyE9PWMuY29udGFpbmVySW5mb3x8Yi5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb24hPT1cbmMuaW1wbGVtZW50YXRpb24pcmV0dXJuIGI9cmcoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMuY2hpbGRyZW58fFtdLGQpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbihhLGIsYyxkLGYpe2lmKG51bGw9PT1ifHw3IT09Yi50YWcpcmV0dXJuIGI9c2coYyxhLm1vZGUsZCxmKSxiLnJldHVybj1hLGI7Yj1lKGIsYyxkKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIHooYSxiLGMpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYnx8XCJudW1iZXJcIj09PXR5cGVvZiBiKXJldHVybiBiPXBnKFwiXCIrYixhLm1vZGUsYyksYi5yZXR1cm49YSxiO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYiYmbnVsbCE9PWIpe3N3aXRjaChiLiQkdHlwZW9mKXtjYXNlIFpiOnJldHVybiBjPXFnKGIudHlwZSxiLmtleSxiLnByb3BzLG51bGwsYS5tb2RlLGMpLGMucmVmPWxnKGEsbnVsbCxiKSxjLnJldHVybj1hLGM7Y2FzZSAkYjpyZXR1cm4gYj1yZyhiLGEubW9kZSxjKSxiLnJldHVybj1hLGJ9aWYoa2coYil8fFxubWMoYikpcmV0dXJuIGI9c2coYixhLm1vZGUsYyxudWxsKSxiLnJldHVybj1hLGI7bWcoYSxiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB4KGEsYixjLGQpe3ZhciBlPW51bGwhPT1iP2Iua2V5Om51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBjfHxcIm51bWJlclwiPT09dHlwZW9mIGMpcmV0dXJuIG51bGwhPT1lP251bGw6ZyhhLGIsXCJcIitjLGQpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWMpe3N3aXRjaChjLiQkdHlwZW9mKXtjYXNlIFpiOnJldHVybiBjLmtleT09PWU/Yy50eXBlPT09YWM/bihhLGIsYy5wcm9wcy5jaGlsZHJlbixkLGUpOmsoYSxiLGMsZCk6bnVsbDtjYXNlICRiOnJldHVybiBjLmtleT09PWU/bChhLGIsYyxkKTpudWxsfWlmKGtnKGMpfHxtYyhjKSlyZXR1cm4gbnVsbCE9PWU/bnVsbDpuKGEsYixjLGQsbnVsbCk7bWcoYSxjKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB2KGEsYixjLGQsZSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkfHxcIm51bWJlclwiPT09dHlwZW9mIGQpcmV0dXJuIGE9XG5hLmdldChjKXx8bnVsbCxnKGIsYSxcIlwiK2QsZSk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBkJiZudWxsIT09ZCl7c3dpdGNoKGQuJCR0eXBlb2Ype2Nhc2UgWmI6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGQudHlwZT09PWFjP24oYixhLGQucHJvcHMuY2hpbGRyZW4sZSxkLmtleSk6ayhiLGEsZCxlKTtjYXNlICRiOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxsKGIsYSxkLGUpfWlmKGtnKGQpfHxtYyhkKSlyZXR1cm4gYT1hLmdldChjKXx8bnVsbCxuKGIsYSxkLGUsbnVsbCk7bWcoYixkKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiByYihlLGgsZyxrKXtmb3IodmFyIGw9bnVsbCx1PW51bGwsbj1oLHc9aD0wLEM9bnVsbDtudWxsIT09biYmdzxnLmxlbmd0aDt3Kyspe24uaW5kZXg+dz8oQz1uLG49bnVsbCk6Qz1uLnNpYmxpbmc7dmFyIHA9eChlLG4sZ1t3XSxrKTtpZihudWxsPT09cCl7bnVsbD09PW4mJihuPUMpO2JyZWFrfWEmJlxubiYmbnVsbD09PXAuYWx0ZXJuYXRlJiZiKGUsbik7aD1mKHAsaCx3KTtudWxsPT09dT9sPXA6dS5zaWJsaW5nPXA7dT1wO249Q31pZih3PT09Zy5sZW5ndGgpcmV0dXJuIGMoZSxuKSxsO2lmKG51bGw9PT1uKXtmb3IoO3c8Zy5sZW5ndGg7dysrKW49eihlLGdbd10sayksbnVsbCE9PW4mJihoPWYobixoLHcpLG51bGw9PT11P2w9bjp1LnNpYmxpbmc9bix1PW4pO3JldHVybiBsfWZvcihuPWQoZSxuKTt3PGcubGVuZ3RoO3crKylDPXYobixlLHcsZ1t3XSxrKSxudWxsIT09QyYmKGEmJm51bGwhPT1DLmFsdGVybmF0ZSYmbi5kZWxldGUobnVsbD09PUMua2V5P3c6Qy5rZXkpLGg9ZihDLGgsdyksbnVsbD09PXU/bD1DOnUuc2libGluZz1DLHU9Qyk7YSYmbi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1mdW5jdGlvbiBCZShlLGgsZyxrKXt2YXIgbD1tYyhnKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgbCl0aHJvdyB0KEVycm9yKDE1MCkpO2c9bC5jYWxsKGcpO1xuaWYobnVsbD09Zyl0aHJvdyB0KEVycm9yKDE1MSkpO2Zvcih2YXIgbj1sPW51bGwsdT1oLHc9aD0wLEM9bnVsbCxwPWcubmV4dCgpO251bGwhPT11JiYhcC5kb25lO3crKyxwPWcubmV4dCgpKXt1LmluZGV4Pnc/KEM9dSx1PW51bGwpOkM9dS5zaWJsaW5nO3ZhciByPXgoZSx1LHAudmFsdWUsayk7aWYobnVsbD09PXIpe251bGw9PT11JiYodT1DKTticmVha31hJiZ1JiZudWxsPT09ci5hbHRlcm5hdGUmJmIoZSx1KTtoPWYocixoLHcpO251bGw9PT1uP2w9cjpuLnNpYmxpbmc9cjtuPXI7dT1DfWlmKHAuZG9uZSlyZXR1cm4gYyhlLHUpLGw7aWYobnVsbD09PXUpe2Zvcig7IXAuZG9uZTt3KysscD1nLm5leHQoKSlwPXooZSxwLnZhbHVlLGspLG51bGwhPT1wJiYoaD1mKHAsaCx3KSxudWxsPT09bj9sPXA6bi5zaWJsaW5nPXAsbj1wKTtyZXR1cm4gbH1mb3IodT1kKGUsdSk7IXAuZG9uZTt3KysscD1nLm5leHQoKSlwPXYodSxlLHcscC52YWx1ZSxrKSxudWxsIT09cCYmKGEmJm51bGwhPT1cbnAuYWx0ZXJuYXRlJiZ1LmRlbGV0ZShudWxsPT09cC5rZXk/dzpwLmtleSksaD1mKHAsaCx3KSxudWxsPT09bj9sPXA6bi5zaWJsaW5nPXAsbj1wKTthJiZ1LmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfXJldHVybiBmdW5jdGlvbihhLGQsZixnKXt2YXIgaz1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mJiZmLnR5cGU9PT1hYyYmbnVsbD09PWYua2V5O2smJihmPWYucHJvcHMuY2hpbGRyZW4pO3ZhciBsPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY7aWYobClzd2l0Y2goZi4kJHR5cGVvZil7Y2FzZSBaYjphOntsPWYua2V5O2ZvcihrPWQ7bnVsbCE9PWs7KXtpZihrLmtleT09PWwpe2lmKDc9PT1rLnRhZz9mLnR5cGU9PT1hYzprLmVsZW1lbnRUeXBlPT09Zi50eXBlKXtjKGEsay5zaWJsaW5nKTtkPWUoayxmLnR5cGU9PT1hYz9mLnByb3BzLmNoaWxkcmVuOmYucHJvcHMsZyk7ZC5yZWY9bGcoYSxrLGYpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9YyhhLFxuayk7YnJlYWt9ZWxzZSBiKGEsayk7az1rLnNpYmxpbmd9Zi50eXBlPT09YWM/KGQ9c2coZi5wcm9wcy5jaGlsZHJlbixhLm1vZGUsZyxmLmtleSksZC5yZXR1cm49YSxhPWQpOihnPXFnKGYudHlwZSxmLmtleSxmLnByb3BzLG51bGwsYS5tb2RlLGcpLGcucmVmPWxnKGEsZCxmKSxnLnJldHVybj1hLGE9Zyl9cmV0dXJuIGgoYSk7Y2FzZSAkYjphOntmb3Ioaz1mLmtleTtudWxsIT09ZDspe2lmKGQua2V5PT09ayl7aWYoND09PWQudGFnJiZkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvPT09Zi5jb250YWluZXJJbmZvJiZkLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbj09PWYuaW1wbGVtZW50YXRpb24pe2MoYSxkLnNpYmxpbmcpO2Q9ZShkLGYuY2hpbGRyZW58fFtdLGcpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9YyhhLGQpO2JyZWFrfWVsc2UgYihhLGQpO2Q9ZC5zaWJsaW5nfWQ9cmcoZixhLm1vZGUsZyk7ZC5yZXR1cm49YTthPWR9cmV0dXJuIGgoYSl9aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBmfHxcblwibnVtYmVyXCI9PT10eXBlb2YgZilyZXR1cm4gZj1cIlwiK2YsbnVsbCE9PWQmJjY9PT1kLnRhZz8oYyhhLGQuc2libGluZyksZD1lKGQsZixnKSxkLnJldHVybj1hLGE9ZCk6KGMoYSxkKSxkPXBnKGYsYS5tb2RlLGcpLGQucmV0dXJuPWEsYT1kKSxoKGEpO2lmKGtnKGYpKXJldHVybiByYihhLGQsZixnKTtpZihtYyhmKSlyZXR1cm4gQmUoYSxkLGYsZyk7bCYmbWcoYSxmKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGYmJiFrKXN3aXRjaChhLnRhZyl7Y2FzZSAxOmNhc2UgMDp0aHJvdyBhPWEudHlwZSx0KEVycm9yKDE1MiksYS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxcIkNvbXBvbmVudFwiKTt9cmV0dXJuIGMoYSxkKX19dmFyIHRnPW5nKCEwKSx1Zz1uZyghMSksdmc9e30sd2c9e2N1cnJlbnQ6dmd9LHhnPXtjdXJyZW50OnZnfSx5Zz17Y3VycmVudDp2Z307ZnVuY3Rpb24gemcoYSl7aWYoYT09PXZnKXRocm93IHQoRXJyb3IoMTc0KSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBBZyhhLGIpe0ooeWcsYixhKTtKKHhnLGEsYSk7Sih3Zyx2ZyxhKTt2YXIgYz1iLm5vZGVUeXBlO3N3aXRjaChjKXtjYXNlIDk6Y2FzZSAxMTpiPShiPWIuZG9jdW1lbnRFbGVtZW50KT9iLm5hbWVzcGFjZVVSSTp0ZShudWxsLFwiXCIpO2JyZWFrO2RlZmF1bHQ6Yz04PT09Yz9iLnBhcmVudE5vZGU6YixiPWMubmFtZXNwYWNlVVJJfHxudWxsLGM9Yy50YWdOYW1lLGI9dGUoYixjKX1IKHdnLGEpO0ood2csYixhKX1mdW5jdGlvbiBCZyhhKXtIKHdnLGEpO0goeGcsYSk7SCh5ZyxhKX1mdW5jdGlvbiBDZyhhKXt6Zyh5Zy5jdXJyZW50KTt2YXIgYj16Zyh3Zy5jdXJyZW50KTt2YXIgYz10ZShiLGEudHlwZSk7YiE9PWMmJihKKHhnLGEsYSksSih3ZyxjLGEpKX1mdW5jdGlvbiBEZyhhKXt4Zy5jdXJyZW50PT09YSYmKEgod2csYSksSCh4ZyxhKSl9dmFyIEVnPTEsRmc9MSxHZz0yLFA9e2N1cnJlbnQ6MH07XG5mdW5jdGlvbiBIZyhhKXtmb3IodmFyIGI9YTtudWxsIT09Yjspe2lmKDEzPT09Yi50YWcpe2lmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpcmV0dXJuIGJ9ZWxzZSBpZigxOT09PWIudGFnJiZ2b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMucmV2ZWFsT3JkZXIpe2lmKDAhPT0oYi5lZmZlY3RUYWcmNjQpKXJldHVybiBifWVsc2UgaWYobnVsbCE9PWIuY2hpbGQpe2IuY2hpbGQucmV0dXJuPWI7Yj1iLmNoaWxkO2NvbnRpbnVlfWlmKGI9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWIuc2libGluZzspe2lmKG51bGw9PT1iLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ31yZXR1cm4gbnVsbH1cbnZhciBJZz0wLEpnPTIsS2c9NCxMZz04LE1nPTE2LE5nPTMyLE9nPTY0LFBnPTEyOCxRZz1YYi5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLFJnPTAsU2c9bnVsbCxRPW51bGwsVGc9bnVsbCxVZz1udWxsLFI9bnVsbCxWZz1udWxsLFdnPTAsWGc9bnVsbCxZZz0wLFpnPSExLCRnPW51bGwsYWg9MDtmdW5jdGlvbiBiaCgpe3Rocm93IHQoRXJyb3IoMzIxKSk7fWZ1bmN0aW9uIGNoKGEsYil7aWYobnVsbD09PWIpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aCYmYzxhLmxlbmd0aDtjKyspaWYoIWhkKGFbY10sYltjXSkpcmV0dXJuITE7cmV0dXJuITB9XG5mdW5jdGlvbiBkaChhLGIsYyxkLGUsZil7Umc9ZjtTZz1iO1RnPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsO1FnLmN1cnJlbnQ9bnVsbD09PVRnP2VoOmZoO2I9YyhkLGUpO2lmKFpnKXtkbyBaZz0hMSxhaCs9MSxUZz1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbCxWZz1VZyxYZz1SPVE9bnVsbCxRZy5jdXJyZW50PWZoLGI9YyhkLGUpO3doaWxlKFpnKTskZz1udWxsO2FoPTB9UWcuY3VycmVudD1oaDthPVNnO2EubWVtb2l6ZWRTdGF0ZT1VZzthLmV4cGlyYXRpb25UaW1lPVdnO2EudXBkYXRlUXVldWU9WGc7YS5lZmZlY3RUYWd8PVlnO2E9bnVsbCE9PVEmJm51bGwhPT1RLm5leHQ7Umc9MDtWZz1SPVVnPVRnPVE9U2c9bnVsbDtXZz0wO1hnPW51bGw7WWc9MDtpZihhKXRocm93IHQoRXJyb3IoMzAwKSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBpaCgpe1FnLmN1cnJlbnQ9aGg7Umc9MDtWZz1SPVVnPVRnPVE9U2c9bnVsbDtXZz0wO1hnPW51bGw7WWc9MDtaZz0hMTskZz1udWxsO2FoPTB9ZnVuY3Rpb24gamgoKXt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpudWxsLGJhc2VTdGF0ZTpudWxsLHF1ZXVlOm51bGwsYmFzZVVwZGF0ZTpudWxsLG5leHQ6bnVsbH07bnVsbD09PVI/VWc9Uj1hOlI9Ui5uZXh0PWE7cmV0dXJuIFJ9ZnVuY3Rpb24ga2goKXtpZihudWxsIT09VmcpUj1WZyxWZz1SLm5leHQsUT1UZyxUZz1udWxsIT09UT9RLm5leHQ6bnVsbDtlbHNle2lmKG51bGw9PT1UZyl0aHJvdyB0KEVycm9yKDMxMCkpO1E9VGc7dmFyIGE9e21lbW9pemVkU3RhdGU6US5tZW1vaXplZFN0YXRlLGJhc2VTdGF0ZTpRLmJhc2VTdGF0ZSxxdWV1ZTpRLnF1ZXVlLGJhc2VVcGRhdGU6US5iYXNlVXBkYXRlLG5leHQ6bnVsbH07Uj1udWxsPT09Uj9VZz1hOlIubmV4dD1hO1RnPVEubmV4dH1yZXR1cm4gUn1cbmZ1bmN0aW9uIGxoKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihhKTpifVxuZnVuY3Rpb24gbWgoYSl7dmFyIGI9a2goKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgdChFcnJvcigzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTtpZigwPGFoKXt2YXIgZD1jLmRpc3BhdGNoO2lmKG51bGwhPT0kZyl7dmFyIGU9JGcuZ2V0KGMpO2lmKHZvaWQgMCE9PWUpeyRnLmRlbGV0ZShjKTt2YXIgZj1iLm1lbW9pemVkU3RhdGU7ZG8gZj1hKGYsZS5hY3Rpb24pLGU9ZS5uZXh0O3doaWxlKG51bGwhPT1lKTtoZChmLGIubWVtb2l6ZWRTdGF0ZSl8fChMZj0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7Yi5iYXNlVXBkYXRlPT09Yy5sYXN0JiYoYi5iYXNlU3RhdGU9Zik7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mO3JldHVybltmLGRdfX1yZXR1cm5bYi5tZW1vaXplZFN0YXRlLGRdfWQ9Yy5sYXN0O3ZhciBoPWIuYmFzZVVwZGF0ZTtmPWIuYmFzZVN0YXRlO251bGwhPT1oPyhudWxsIT09ZCYmKGQubmV4dD1udWxsKSxkPWgubmV4dCk6ZD1udWxsIT09ZD9kLm5leHQ6bnVsbDtpZihudWxsIT09XG5kKXt2YXIgZz1lPW51bGwsaz1kLGw9ITE7ZG97dmFyIG49ay5leHBpcmF0aW9uVGltZTtuPFJnPyhsfHwobD0hMCxnPWgsZT1mKSxuPldnJiYoV2c9bikpOihYZihuLGsuc3VzcGVuc2VDb25maWcpLGY9ay5lYWdlclJlZHVjZXI9PT1hP2suZWFnZXJTdGF0ZTphKGYsay5hY3Rpb24pKTtoPWs7az1rLm5leHR9d2hpbGUobnVsbCE9PWsmJmshPT1kKTtsfHwoZz1oLGU9Zik7aGQoZixiLm1lbW9pemVkU3RhdGUpfHwoTGY9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO2IuYmFzZVVwZGF0ZT1nO2IuYmFzZVN0YXRlPWU7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mfXJldHVybltiLm1lbW9pemVkU3RhdGUsYy5kaXNwYXRjaF19XG5mdW5jdGlvbiBuaChhLGIsYyxkKXthPXt0YWc6YSxjcmVhdGU6YixkZXN0cm95OmMsZGVwczpkLG5leHQ6bnVsbH07bnVsbD09PVhnPyhYZz17bGFzdEVmZmVjdDpudWxsfSxYZy5sYXN0RWZmZWN0PWEubmV4dD1hKTooYj1YZy5sYXN0RWZmZWN0LG51bGw9PT1iP1hnLmxhc3RFZmZlY3Q9YS5uZXh0PWE6KGM9Yi5uZXh0LGIubmV4dD1hLGEubmV4dD1jLFhnLmxhc3RFZmZlY3Q9YSkpO3JldHVybiBhfWZ1bmN0aW9uIG9oKGEsYixjLGQpe3ZhciBlPWpoKCk7WWd8PWE7ZS5tZW1vaXplZFN0YXRlPW5oKGIsYyx2b2lkIDAsdm9pZCAwPT09ZD9udWxsOmQpfVxuZnVuY3Rpb24gcGgoYSxiLGMsZCl7dmFyIGU9a2goKTtkPXZvaWQgMD09PWQ/bnVsbDpkO3ZhciBmPXZvaWQgMDtpZihudWxsIT09USl7dmFyIGg9US5tZW1vaXplZFN0YXRlO2Y9aC5kZXN0cm95O2lmKG51bGwhPT1kJiZjaChkLGguZGVwcykpe25oKElnLGMsZixkKTtyZXR1cm59fVlnfD1hO2UubWVtb2l6ZWRTdGF0ZT1uaChiLGMsZixkKX1mdW5jdGlvbiBxaChhLGIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBhPWEoKSxiKGEpLGZ1bmN0aW9uKCl7YihudWxsKX07aWYobnVsbCE9PWImJnZvaWQgMCE9PWIpcmV0dXJuIGE9YSgpLGIuY3VycmVudD1hLGZ1bmN0aW9uKCl7Yi5jdXJyZW50PW51bGx9fWZ1bmN0aW9uIHJoKCl7fVxuZnVuY3Rpb24gc2goYSxiLGMpe2lmKCEoMjU+YWgpKXRocm93IHQoRXJyb3IoMzAxKSk7dmFyIGQ9YS5hbHRlcm5hdGU7aWYoYT09PVNnfHxudWxsIT09ZCYmZD09PVNnKWlmKFpnPSEwLGE9e2V4cGlyYXRpb25UaW1lOlJnLHN1c3BlbnNlQ29uZmlnOm51bGwsYWN0aW9uOmMsZWFnZXJSZWR1Y2VyOm51bGwsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH0sbnVsbD09PSRnJiYoJGc9bmV3IE1hcCksYz0kZy5nZXQoYiksdm9pZCAwPT09YykkZy5zZXQoYixhKTtlbHNle2ZvcihiPWM7bnVsbCE9PWIubmV4dDspYj1iLm5leHQ7Yi5uZXh0PWF9ZWxzZXt2YXIgZT1jZygpLGY9JGYuc3VzcGVuc2U7ZT1kZyhlLGEsZik7Zj17ZXhwaXJhdGlvblRpbWU6ZSxzdXNwZW5zZUNvbmZpZzpmLGFjdGlvbjpjLGVhZ2VyUmVkdWNlcjpudWxsLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9O3ZhciBoPWIubGFzdDtpZihudWxsPT09aClmLm5leHQ9ZjtlbHNle3ZhciBnPWgubmV4dDtudWxsIT09ZyYmXG4oZi5uZXh0PWcpO2gubmV4dD1mfWIubGFzdD1mO2lmKDA9PT1hLmV4cGlyYXRpb25UaW1lJiYobnVsbD09PWR8fDA9PT1kLmV4cGlyYXRpb25UaW1lKSYmKGQ9Yi5sYXN0UmVuZGVyZWRSZWR1Y2VyLG51bGwhPT1kKSl0cnl7dmFyIGs9Yi5sYXN0UmVuZGVyZWRTdGF0ZSxsPWQoayxjKTtmLmVhZ2VyUmVkdWNlcj1kO2YuZWFnZXJTdGF0ZT1sO2lmKGhkKGwsaykpcmV0dXJufWNhdGNoKG4pe31maW5hbGx5e31lZyhhLGUpfX1cbnZhciBoaD17cmVhZENvbnRleHQ6TWYsdXNlQ2FsbGJhY2s6YmgsdXNlQ29udGV4dDpiaCx1c2VFZmZlY3Q6YmgsdXNlSW1wZXJhdGl2ZUhhbmRsZTpiaCx1c2VMYXlvdXRFZmZlY3Q6YmgsdXNlTWVtbzpiaCx1c2VSZWR1Y2VyOmJoLHVzZVJlZjpiaCx1c2VTdGF0ZTpiaCx1c2VEZWJ1Z1ZhbHVlOmJoLHVzZVJlc3BvbmRlcjpiaH0sZWg9e3JlYWRDb250ZXh0Ok1mLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7amgoKS5tZW1vaXplZFN0YXRlPVthLHZvaWQgMD09PWI/bnVsbDpiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDpNZix1c2VFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gb2goNTE2LFBnfE9nLGEsYil9LHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBvaCg0LEtnfE5nLHFoLmJpbmQobnVsbCxiLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gb2goNCxcbktnfE5nLGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1qaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1qaCgpO2I9dm9pZCAwIT09Yz9jKGIpOmI7ZC5tZW1vaXplZFN0YXRlPWQuYmFzZVN0YXRlPWI7YT1kLnF1ZXVlPXtsYXN0Om51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07YT1hLmRpc3BhdGNoPXNoLmJpbmQobnVsbCxTZyxhKTtyZXR1cm5bZC5tZW1vaXplZFN0YXRlLGFdfSx1c2VSZWY6ZnVuY3Rpb24oYSl7dmFyIGI9amgoKTthPXtjdXJyZW50OmF9O3JldHVybiBiLm1lbW9pemVkU3RhdGU9YX0sdXNlU3RhdGU6ZnVuY3Rpb24oYSl7dmFyIGI9amgoKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSYmKGE9YSgpKTtiLm1lbW9pemVkU3RhdGU9Yi5iYXNlU3RhdGU9YTthPWIucXVldWU9XG57bGFzdDpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpsaCxsYXN0UmVuZGVyZWRTdGF0ZTphfTthPWEuZGlzcGF0Y2g9c2guYmluZChudWxsLFNnLGEpO3JldHVybltiLm1lbW9pemVkU3RhdGUsYV19LHVzZURlYnVnVmFsdWU6cmgsdXNlUmVzcG9uZGVyOmtkfSxmaD17cmVhZENvbnRleHQ6TWYsdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXt2YXIgYz1raCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmY2goYixkWzFdKSlyZXR1cm4gZFswXTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZUNvbnRleHQ6TWYsdXNlRWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHBoKDUxNixQZ3xPZyxhLGIpfSx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gcGgoNCxLZ3xOZyxxaC5iaW5kKG51bGwsXG5iLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gcGgoNCxLZ3xOZyxhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9a2goKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJmNoKGIsZFsxXSkpcmV0dXJuIGRbMF07YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOm1oLHVzZVJlZjpmdW5jdGlvbigpe3JldHVybiBraCgpLm1lbW9pemVkU3RhdGV9LHVzZVN0YXRlOmZ1bmN0aW9uKGEpe3JldHVybiBtaChsaCxhKX0sdXNlRGVidWdWYWx1ZTpyaCx1c2VSZXNwb25kZXI6a2R9LHRoPW51bGwsdWg9bnVsbCx2aD0hMTtcbmZ1bmN0aW9uIHdoKGEsYil7dmFyIGM9eGgoNSxudWxsLG51bGwsMCk7Yy5lbGVtZW50VHlwZT1cIkRFTEVURURcIjtjLnR5cGU9XCJERUxFVEVEXCI7Yy5zdGF0ZU5vZGU9YjtjLnJldHVybj1hO2MuZWZmZWN0VGFnPTg7bnVsbCE9PWEubGFzdEVmZmVjdD8oYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxhLmxhc3RFZmZlY3Q9Yyk6YS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9Y31mdW5jdGlvbiB5aChhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSA2OnJldHVybiBiPVwiXCI9PT1hLnBlbmRpbmdQcm9wc3x8MyE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDEzOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gemgoYSl7aWYodmgpe3ZhciBiPXVoO2lmKGIpe3ZhciBjPWI7aWYoIXloKGEsYikpe2I9TmUoYy5uZXh0U2libGluZyk7aWYoIWJ8fCF5aChhLGIpKXthLmVmZmVjdFRhZ3w9Mjt2aD0hMTt0aD1hO3JldHVybn13aCh0aCxjKX10aD1hO3VoPU5lKGIuZmlyc3RDaGlsZCl9ZWxzZSBhLmVmZmVjdFRhZ3w9Mix2aD0hMSx0aD1hfX1mdW5jdGlvbiBBaChhKXtmb3IoYT1hLnJldHVybjtudWxsIT09YSYmNSE9PWEudGFnJiYzIT09YS50YWcmJjE4IT09YS50YWc7KWE9YS5yZXR1cm47dGg9YX1cbmZ1bmN0aW9uIEJoKGEpe2lmKGEhPT10aClyZXR1cm4hMTtpZighdmgpcmV0dXJuIEFoKGEpLHZoPSEwLCExO3ZhciBiPWEudHlwZTtpZig1IT09YS50YWd8fFwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYhS2UoYixhLm1lbW9pemVkUHJvcHMpKWZvcihiPXVoO2I7KXdoKGEsYiksYj1OZShiLm5leHRTaWJsaW5nKTtBaChhKTt1aD10aD9OZShhLnN0YXRlTm9kZS5uZXh0U2libGluZyk6bnVsbDtyZXR1cm4hMH1mdW5jdGlvbiBDaCgpe3VoPXRoPW51bGw7dmg9ITF9dmFyIERoPVhiLlJlYWN0Q3VycmVudE93bmVyLExmPSExO2Z1bmN0aW9uIFMoYSxiLGMsZCl7Yi5jaGlsZD1udWxsPT09YT91ZyhiLG51bGwsYyxkKTp0ZyhiLGEuY2hpbGQsYyxkKX1cbmZ1bmN0aW9uIEVoKGEsYixjLGQsZSl7Yz1jLnJlbmRlcjt2YXIgZj1iLnJlZjtLZihiLGUpO2Q9ZGgoYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhTGYpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmVmZmVjdFRhZyY9LTUxNyxhLmV4cGlyYXRpb25UaW1lPD1lJiYoYS5leHBpcmF0aW9uVGltZT0wKSxGaChhLGIsZSk7Yi5lZmZlY3RUYWd8PTE7UyhhLGIsZCxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIEdoKGEsYixjLGQsZSxmKXtpZihudWxsPT09YSl7dmFyIGg9Yy50eXBlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoJiYhSGgoaCkmJnZvaWQgMD09PWguZGVmYXVsdFByb3BzJiZudWxsPT09Yy5jb21wYXJlJiZ2b2lkIDA9PT1jLmRlZmF1bHRQcm9wcylyZXR1cm4gYi50YWc9MTUsYi50eXBlPWgsSWgoYSxiLGgsZCxlLGYpO2E9cWcoYy50eXBlLG51bGwsZCxudWxsLGIubW9kZSxmKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9aD1hLmNoaWxkO2lmKGU8ZiYmKGU9aC5tZW1vaXplZFByb3BzLGM9Yy5jb21wYXJlLGM9bnVsbCE9PWM/YzpqZCxjKGUsZCkmJmEucmVmPT09Yi5yZWYpKXJldHVybiBGaChhLGIsZik7Yi5lZmZlY3RUYWd8PTE7YT1vZyhoLGQsZik7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfVxuZnVuY3Rpb24gSWgoYSxiLGMsZCxlLGYpe3JldHVybiBudWxsIT09YSYmamQoYS5tZW1vaXplZFByb3BzLGQpJiZhLnJlZj09PWIucmVmJiYoTGY9ITEsZTxmKT9GaChhLGIsZik6SmgoYSxiLGMsZCxmKX1mdW5jdGlvbiBLaChhLGIpe3ZhciBjPWIucmVmO2lmKG51bGw9PT1hJiZudWxsIT09Y3x8bnVsbCE9PWEmJmEucmVmIT09YyliLmVmZmVjdFRhZ3w9MTI4fWZ1bmN0aW9uIEpoKGEsYixjLGQsZSl7dmFyIGY9TihjKT9SZTpMLmN1cnJlbnQ7Zj1TZShiLGYpO0tmKGIsZSk7Yz1kaChhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiFMZilyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZWZmZWN0VGFnJj0tNTE3LGEuZXhwaXJhdGlvblRpbWU8PWUmJihhLmV4cGlyYXRpb25UaW1lPTApLEZoKGEsYixlKTtiLmVmZmVjdFRhZ3w9MTtTKGEsYixjLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gTGgoYSxiLGMsZCxlKXtpZihOKGMpKXt2YXIgZj0hMDtYZShiKX1lbHNlIGY9ITE7S2YoYixlKTtpZihudWxsPT09Yi5zdGF0ZU5vZGUpbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5lZmZlY3RUYWd8PTIpLGhnKGIsYyxkLGUpLGpnKGIsYyxkLGUpLGQ9ITA7ZWxzZSBpZihudWxsPT09YSl7dmFyIGg9Yi5zdGF0ZU5vZGUsZz1iLm1lbW9pemVkUHJvcHM7aC5wcm9wcz1nO3ZhciBrPWguY29udGV4dCxsPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBsJiZudWxsIT09bD9sPU1mKGwpOihsPU4oYyk/UmU6TC5jdXJyZW50LGw9U2UoYixsKSk7dmFyIG49Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMsej1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygbnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGU7enx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGguVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlxuXCJmdW5jdGlvblwiIT09dHlwZW9mIGguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGchPT1kfHxrIT09bCkmJmlnKGIsaCxkLGwpO05mPSExO3ZhciB4PWIubWVtb2l6ZWRTdGF0ZTtrPWguc3RhdGU9eDt2YXIgdj1iLnVwZGF0ZVF1ZXVlO251bGwhPT12JiYoV2YoYix2LGQsaCxlKSxrPWIubWVtb2l6ZWRTdGF0ZSk7ZyE9PWR8fHghPT1rfHxNLmN1cnJlbnR8fE5mPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgbiYmKGJnKGIsYyxuLGQpLGs9Yi5tZW1vaXplZFN0YXRlKSwoZz1OZnx8Z2coYixjLGcsZCx4LGssbCkpPyh6fHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgaC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgaC5jb21wb25lbnRXaWxsTW91bnR8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgaC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGguVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXG5oLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGguY29tcG9uZW50RGlkTW91bnQmJihiLmVmZmVjdFRhZ3w9NCkpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgaC5jb21wb25lbnREaWRNb3VudCYmKGIuZWZmZWN0VGFnfD00KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9ayksaC5wcm9wcz1kLGguc3RhdGU9ayxoLmNvbnRleHQ9bCxkPWcpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgaC5jb21wb25lbnREaWRNb3VudCYmKGIuZWZmZWN0VGFnfD00KSxkPSExKX1lbHNlIGg9Yi5zdGF0ZU5vZGUsZz1iLm1lbW9pemVkUHJvcHMsaC5wcm9wcz1iLnR5cGU9PT1iLmVsZW1lbnRUeXBlP2c6QWYoYi50eXBlLGcpLGs9aC5jb250ZXh0LGw9Yy5jb250ZXh0VHlwZSxcIm9iamVjdFwiPT09dHlwZW9mIGwmJm51bGwhPT1sP2w9TWYobCk6KGw9TihjKT9SZTpMLmN1cnJlbnQsbD1TZShiLGwpKSxuPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLCh6PVxuXCJmdW5jdGlvblwiPT09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGguVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChnIT09ZHx8ayE9PWwpJiZpZyhiLGgsZCxsKSxOZj0hMSxrPWIubWVtb2l6ZWRTdGF0ZSx4PWguc3RhdGU9ayx2PWIudXBkYXRlUXVldWUsbnVsbCE9PXYmJihXZihiLHYsZCxoLGUpLHg9Yi5tZW1vaXplZFN0YXRlKSxnIT09ZHx8ayE9PXh8fE0uY3VycmVudHx8TmY/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBuJiYoYmcoYixjLG4sZCkseD1iLm1lbW9pemVkU3RhdGUpLChuPU5mfHxnZyhiLGMsZyxkLGsseCxsKSk/KHp8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBoLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgaC5jb21wb25lbnRXaWxsVXBkYXRlfHxcbihcImZ1bmN0aW9uXCI9PT10eXBlb2YgaC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUoZCx4LGwpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZoLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlKGQseCxsKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGguY29tcG9uZW50RGlkVXBkYXRlJiYoYi5lZmZlY3RUYWd8PTQpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoYi5lZmZlY3RUYWd8PTI1NikpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgaC5jb21wb25lbnREaWRVcGRhdGV8fGc9PT1hLm1lbW9pemVkUHJvcHMmJms9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGc9PT1hLm1lbW9pemVkUHJvcHMmJms9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9MjU2KSxiLm1lbW9pemVkUHJvcHM9XG5kLGIubWVtb2l6ZWRTdGF0ZT14KSxoLnByb3BzPWQsaC5zdGF0ZT14LGguY29udGV4dD1sLGQ9bik6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBoLmNvbXBvbmVudERpZFVwZGF0ZXx8Zz09PWEubWVtb2l6ZWRQcm9wcyYmaz09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZWZmZWN0VGFnfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgaC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8Zz09PWEubWVtb2l6ZWRQcm9wcyYmaz09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZWZmZWN0VGFnfD0yNTYpLGQ9ITEpO3JldHVybiBNaChhLGIsYyxkLGYsZSl9XG5mdW5jdGlvbiBNaChhLGIsYyxkLGUsZil7S2goYSxiKTt2YXIgaD0wIT09KGIuZWZmZWN0VGFnJjY0KTtpZighZCYmIWgpcmV0dXJuIGUmJlllKGIsYywhMSksRmgoYSxiLGYpO2Q9Yi5zdGF0ZU5vZGU7RGguY3VycmVudD1iO3ZhciBnPWgmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcj9udWxsOmQucmVuZGVyKCk7Yi5lZmZlY3RUYWd8PTE7bnVsbCE9PWEmJmg/KGIuY2hpbGQ9dGcoYixhLmNoaWxkLG51bGwsZiksYi5jaGlsZD10ZyhiLG51bGwsZyxmKSk6UyhhLGIsZyxmKTtiLm1lbW9pemVkU3RhdGU9ZC5zdGF0ZTtlJiZZZShiLGMsITApO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIE5oKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2IucGVuZGluZ0NvbnRleHQ/VmUoYSxiLnBlbmRpbmdDb250ZXh0LGIucGVuZGluZ0NvbnRleHQhPT1iLmNvbnRleHQpOmIuY29udGV4dCYmVmUoYSxiLmNvbnRleHQsITEpO0FnKGEsYi5jb250YWluZXJJbmZvKX1cbnZhciBPaD17fTtcbmZ1bmN0aW9uIFBoKGEsYixjKXt2YXIgZD1iLm1vZGUsZT1iLnBlbmRpbmdQcm9wcyxmPVAuY3VycmVudCxoPW51bGwsZz0hMSxrOyhrPTAhPT0oYi5lZmZlY3RUYWcmNjQpKXx8KGs9MCE9PShmJkdnKSYmKG51bGw9PT1hfHxudWxsIT09YS5tZW1vaXplZFN0YXRlKSk7az8oaD1PaCxnPSEwLGIuZWZmZWN0VGFnJj0tNjUpOm51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlfHx2b2lkIDA9PT1lLmZhbGxiYWNrfHwhMD09PWUudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fChmfD1GZyk7ZiY9RWc7SihQLGYsYik7aWYobnVsbD09PWEpaWYoZyl7ZT1lLmZhbGxiYWNrO2E9c2cobnVsbCxkLDAsbnVsbCk7YS5yZXR1cm49YjtpZigwPT09KGIubW9kZSYyKSlmb3IoZz1udWxsIT09Yi5tZW1vaXplZFN0YXRlP2IuY2hpbGQuY2hpbGQ6Yi5jaGlsZCxhLmNoaWxkPWc7bnVsbCE9PWc7KWcucmV0dXJuPWEsZz1nLnNpYmxpbmc7Yz1zZyhlLGQsYyxudWxsKTtjLnJldHVybj1iO2Euc2libGluZz1cbmM7ZD1hfWVsc2UgZD1jPXVnKGIsbnVsbCxlLmNoaWxkcmVuLGMpO2Vsc2V7aWYobnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSlpZihmPWEuY2hpbGQsZD1mLnNpYmxpbmcsZyl7ZT1lLmZhbGxiYWNrO2M9b2coZixmLnBlbmRpbmdQcm9wcywwKTtjLnJldHVybj1iO2lmKDA9PT0oYi5tb2RlJjIpJiYoZz1udWxsIT09Yi5tZW1vaXplZFN0YXRlP2IuY2hpbGQuY2hpbGQ6Yi5jaGlsZCxnIT09Zi5jaGlsZCkpZm9yKGMuY2hpbGQ9ZztudWxsIT09ZzspZy5yZXR1cm49YyxnPWcuc2libGluZztlPW9nKGQsZSxkLmV4cGlyYXRpb25UaW1lKTtlLnJldHVybj1iO2Muc2libGluZz1lO2Q9YztjLmNoaWxkRXhwaXJhdGlvblRpbWU9MDtjPWV9ZWxzZSBkPWM9dGcoYixmLmNoaWxkLGUuY2hpbGRyZW4sYyk7ZWxzZSBpZihmPWEuY2hpbGQsZyl7Zz1lLmZhbGxiYWNrO2U9c2cobnVsbCxkLDAsbnVsbCk7ZS5yZXR1cm49YjtlLmNoaWxkPWY7bnVsbCE9PWYmJihmLnJldHVybj1lKTtpZigwPT09KGIubW9kZSZcbjIpKWZvcihmPW51bGwhPT1iLm1lbW9pemVkU3RhdGU/Yi5jaGlsZC5jaGlsZDpiLmNoaWxkLGUuY2hpbGQ9ZjtudWxsIT09ZjspZi5yZXR1cm49ZSxmPWYuc2libGluZztjPXNnKGcsZCxjLG51bGwpO2MucmV0dXJuPWI7ZS5zaWJsaW5nPWM7Yy5lZmZlY3RUYWd8PTI7ZD1lO2UuY2hpbGRFeHBpcmF0aW9uVGltZT0wfWVsc2UgYz1kPXRnKGIsZixlLmNoaWxkcmVuLGMpO2Iuc3RhdGVOb2RlPWEuc3RhdGVOb2RlfWIubWVtb2l6ZWRTdGF0ZT1oO2IuY2hpbGQ9ZDtyZXR1cm4gY31mdW5jdGlvbiBRaChhLGIsYyxkLGUpe3ZhciBmPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09Zj9hLm1lbW9pemVkU3RhdGU9e2lzQmFja3dhcmRzOmIscmVuZGVyaW5nOm51bGwsbGFzdDpkLHRhaWw6Yyx0YWlsRXhwaXJhdGlvbjowLHRhaWxNb2RlOmV9OihmLmlzQmFja3dhcmRzPWIsZi5yZW5kZXJpbmc9bnVsbCxmLmxhc3Q9ZCxmLnRhaWw9YyxmLnRhaWxFeHBpcmF0aW9uPTAsZi50YWlsTW9kZT1lKX1cbmZ1bmN0aW9uIFJoKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQucmV2ZWFsT3JkZXIsZj1kLnRhaWw7UyhhLGIsZC5jaGlsZHJlbixjKTtkPVAuY3VycmVudDtpZigwIT09KGQmR2cpKWQ9ZCZFZ3xHZyxiLmVmZmVjdFRhZ3w9NjQ7ZWxzZXtpZihudWxsIT09YSYmMCE9PShhLmVmZmVjdFRhZyY2NCkpYTpmb3IoYT1iLmNoaWxkO251bGwhPT1hOyl7aWYoMTM9PT1hLnRhZyl7aWYobnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSl7YS5leHBpcmF0aW9uVGltZTxjJiYoYS5leHBpcmF0aW9uVGltZT1jKTt2YXIgaD1hLmFsdGVybmF0ZTtudWxsIT09aCYmaC5leHBpcmF0aW9uVGltZTxjJiYoaC5leHBpcmF0aW9uVGltZT1jKTtKZihhLnJldHVybixjKX19ZWxzZSBpZihudWxsIT09YS5jaGlsZCl7YS5jaGlsZC5yZXR1cm49YTthPWEuY2hpbGQ7Y29udGludWV9aWYoYT09PWIpYnJlYWsgYTtmb3IoO251bGw9PT1hLnNpYmxpbmc7KXtpZihudWxsPT09YS5yZXR1cm58fGEucmV0dXJuPT09XG5iKWJyZWFrIGE7YT1hLnJldHVybn1hLnNpYmxpbmcucmV0dXJuPWEucmV0dXJuO2E9YS5zaWJsaW5nfWQmPUVnfUooUCxkLGIpO2lmKDA9PT0oYi5tb2RlJjIpKWIubWVtb2l6ZWRTdGF0ZT1udWxsO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJmb3J3YXJkc1wiOmM9Yi5jaGlsZDtmb3IoZT1udWxsO251bGwhPT1jOylkPWMuYWx0ZXJuYXRlLG51bGwhPT1kJiZudWxsPT09SGcoZCkmJihlPWMpLGM9Yy5zaWJsaW5nO2M9ZTtudWxsPT09Yz8oZT1iLmNoaWxkLGIuY2hpbGQ9bnVsbCk6KGU9Yy5zaWJsaW5nLGMuc2libGluZz1udWxsKTtRaChiLCExLGUsYyxmKTticmVhaztjYXNlIFwiYmFja3dhcmRzXCI6Yz1udWxsO2U9Yi5jaGlsZDtmb3IoYi5jaGlsZD1udWxsO251bGwhPT1lOyl7ZD1lLmFsdGVybmF0ZTtpZihudWxsIT09ZCYmbnVsbD09PUhnKGQpKXtiLmNoaWxkPWU7YnJlYWt9ZD1lLnNpYmxpbmc7ZS5zaWJsaW5nPWM7Yz1lO2U9ZH1RaChiLCEwLGMsbnVsbCxmKTticmVhaztjYXNlIFwidG9nZXRoZXJcIjpRaChiLFxuITEsbnVsbCxudWxsLHZvaWQgMCk7YnJlYWs7ZGVmYXVsdDpiLm1lbW9pemVkU3RhdGU9bnVsbH1yZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiBGaChhLGIsYyl7bnVsbCE9PWEmJihiLmRlcGVuZGVuY2llcz1hLmRlcGVuZGVuY2llcyk7aWYoYi5jaGlsZEV4cGlyYXRpb25UaW1lPGMpcmV0dXJuIG51bGw7aWYobnVsbCE9PWEmJmIuY2hpbGQhPT1hLmNoaWxkKXRocm93IHQoRXJyb3IoMTUzKSk7aWYobnVsbCE9PWIuY2hpbGQpe2E9Yi5jaGlsZDtjPW9nKGEsYS5wZW5kaW5nUHJvcHMsYS5leHBpcmF0aW9uVGltZSk7Yi5jaGlsZD1jO2ZvcihjLnJldHVybj1iO251bGwhPT1hLnNpYmxpbmc7KWE9YS5zaWJsaW5nLGM9Yy5zaWJsaW5nPW9nKGEsYS5wZW5kaW5nUHJvcHMsYS5leHBpcmF0aW9uVGltZSksYy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbH1yZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiBTaChhKXthLmVmZmVjdFRhZ3w9NH1cbnZhciBUaD12b2lkIDAsVWg9dm9pZCAwLFZoPXZvaWQgMCxXaD12b2lkIDA7VGg9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9Yi5jaGlsZDtudWxsIT09Yzspe2lmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKWEuYXBwZW5kQ2hpbGQoYy5zdGF0ZU5vZGUpO2Vsc2UgaWYoMjA9PT1jLnRhZylhLmFwcGVuZENoaWxkKGMuc3RhdGVOb2RlLmluc3RhbmNlKTtlbHNlIGlmKDQhPT1jLnRhZyYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fTtVaD1mdW5jdGlvbigpe307XG5WaD1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWEubWVtb2l6ZWRQcm9wcztpZihmIT09ZCl7dmFyIGg9Yi5zdGF0ZU5vZGU7emcod2cuY3VycmVudCk7YT1udWxsO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpmPUJjKGgsZik7ZD1CYyhoLGQpO2E9W107YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmY9bGUoaCxmKTtkPWxlKGgsZCk7YT1bXTticmVhaztjYXNlIFwic2VsZWN0XCI6Zj1tKHt9LGYse3ZhbHVlOnZvaWQgMH0pO2Q9bSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTthPVtdO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmY9bmUoaCxmKTtkPW5lKGgsZCk7YT1bXTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBmLm9uQ2xpY2smJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLm9uQ2xpY2smJihoLm9uY2xpY2s9R2UpfURlKGMsZCk7aD1jPXZvaWQgMDt2YXIgZz1udWxsO2ZvcihjIGluIGYpaWYoIWQuaGFzT3duUHJvcGVydHkoYykmJmYuaGFzT3duUHJvcGVydHkoYykmJm51bGwhPWZbY10paWYoXCJzdHlsZVwiPT09XG5jKXt2YXIgaz1mW2NdO2ZvcihoIGluIGspay5oYXNPd25Qcm9wZXJ0eShoKSYmKGd8fChnPXt9KSxnW2hdPVwiXCIpfWVsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1jJiZcImNoaWxkcmVuXCIhPT1jJiZcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09YyYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWMmJlwiYXV0b0ZvY3VzXCIhPT1jJiYoaWEuaGFzT3duUHJvcGVydHkoYyk/YXx8KGE9W10pOihhPWF8fFtdKS5wdXNoKGMsbnVsbCkpO2ZvcihjIGluIGQpe3ZhciBsPWRbY107az1udWxsIT1mP2ZbY106dm9pZCAwO2lmKGQuaGFzT3duUHJvcGVydHkoYykmJmwhPT1rJiYobnVsbCE9bHx8bnVsbCE9aykpaWYoXCJzdHlsZVwiPT09YylpZihrKXtmb3IoaCBpbiBrKSFrLmhhc093blByb3BlcnR5KGgpfHxsJiZsLmhhc093blByb3BlcnR5KGgpfHwoZ3x8KGc9e30pLGdbaF09XCJcIik7Zm9yKGggaW4gbClsLmhhc093blByb3BlcnR5KGgpJiZrW2hdIT09bFtoXSYmKGd8fFxuKGc9e30pLGdbaF09bFtoXSl9ZWxzZSBnfHwoYXx8KGE9W10pLGEucHVzaChjLGcpKSxnPWw7ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWM/KGw9bD9sLl9faHRtbDp2b2lkIDAsaz1rP2suX19odG1sOnZvaWQgMCxudWxsIT1sJiZrIT09bCYmKGE9YXx8W10pLnB1c2goYyxcIlwiK2wpKTpcImNoaWxkcmVuXCI9PT1jP2s9PT1sfHxcInN0cmluZ1wiIT09dHlwZW9mIGwmJlwibnVtYmVyXCIhPT10eXBlb2YgbHx8KGE9YXx8W10pLnB1c2goYyxcIlwiK2wpOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1jJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09YyYmKGlhLmhhc093blByb3BlcnR5KGMpPyhudWxsIT1sJiZGZShlLGMpLGF8fGs9PT1sfHwoYT1bXSkpOihhPWF8fFtdKS5wdXNoKGMsbCkpfWcmJihhPWF8fFtdKS5wdXNoKFwic3R5bGVcIixnKTtlPWE7KGIudXBkYXRlUXVldWU9ZSkmJlNoKGIpfX07V2g9ZnVuY3Rpb24oYSxiLGMsZCl7YyE9PWQmJlNoKGIpfTtcbmZ1bmN0aW9uICRoKGEsYil7c3dpdGNoKGEudGFpbE1vZGUpe2Nhc2UgXCJoaWRkZW5cIjpiPWEudGFpbDtmb3IodmFyIGM9bnVsbDtudWxsIT09YjspbnVsbCE9PWIuYWx0ZXJuYXRlJiYoYz1iKSxiPWIuc2libGluZztudWxsPT09Yz9hLnRhaWw9bnVsbDpjLnNpYmxpbmc9bnVsbDticmVhaztjYXNlIFwiY29sbGFwc2VkXCI6Yz1hLnRhaWw7Zm9yKHZhciBkPW51bGw7bnVsbCE9PWM7KW51bGwhPT1jLmFsdGVybmF0ZSYmKGQ9YyksYz1jLnNpYmxpbmc7bnVsbD09PWQ/Ynx8bnVsbD09PWEudGFpbD9hLnRhaWw9bnVsbDphLnRhaWwuc2libGluZz1udWxsOmQuc2libGluZz1udWxsfX1cbmZ1bmN0aW9uIGFpKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSAxOk4oYS50eXBlKSYmVGUoYSk7dmFyIGI9YS5lZmZlY3RUYWc7cmV0dXJuIGImMjA0OD8oYS5lZmZlY3RUYWc9YiYtMjA0OXw2NCxhKTpudWxsO2Nhc2UgMzpCZyhhKTtVZShhKTtiPWEuZWZmZWN0VGFnO2lmKDAhPT0oYiY2NCkpdGhyb3cgdChFcnJvcigyODUpKTthLmVmZmVjdFRhZz1iJi0yMDQ5fDY0O3JldHVybiBhO2Nhc2UgNTpyZXR1cm4gRGcoYSksbnVsbDtjYXNlIDEzOnJldHVybiBIKFAsYSksYj1hLmVmZmVjdFRhZyxiJjIwNDg/KGEuZWZmZWN0VGFnPWImLTIwNDl8NjQsYSk6bnVsbDtjYXNlIDE4OnJldHVybiBudWxsO2Nhc2UgMTk6cmV0dXJuIEgoUCxhKSxudWxsO2Nhc2UgNDpyZXR1cm4gQmcoYSksbnVsbDtjYXNlIDEwOnJldHVybiBJZihhKSxudWxsO2RlZmF1bHQ6cmV0dXJuIG51bGx9fWZ1bmN0aW9uIGJpKGEsYil7cmV0dXJue3ZhbHVlOmEsc291cmNlOmIsc3RhY2s6cGMoYil9fVxudmFyIGNpPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrU2V0P1dlYWtTZXQ6U2V0O2Z1bmN0aW9uIGRpKGEsYil7dmFyIGM9Yi5zb3VyY2UsZD1iLnN0YWNrO251bGw9PT1kJiZudWxsIT09YyYmKGQ9cGMoYykpO251bGwhPT1jJiZvYyhjLnR5cGUpO2I9Yi52YWx1ZTtudWxsIT09YSYmMT09PWEudGFnJiZvYyhhLnR5cGUpO3RyeXtjb25zb2xlLmVycm9yKGIpfWNhdGNoKGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlO30pfX1mdW5jdGlvbiBlaShhLGIpe3RyeXtiLnByb3BzPWEubWVtb2l6ZWRQcm9wcyxiLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSxiLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goYyl7ZmkoYSxjKX19ZnVuY3Rpb24gZ2koYSl7dmFyIGI9YS5yZWY7aWYobnVsbCE9PWIpaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpdHJ5e2IobnVsbCl9Y2F0Y2goYyl7ZmkoYSxjKX1lbHNlIGIuY3VycmVudD1udWxsfVxuZnVuY3Rpb24gaGkoYSxiLGMpe2M9Yy51cGRhdGVRdWV1ZTtjPW51bGwhPT1jP2MubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1jKXt2YXIgZD1jPWMubmV4dDtkb3tpZigoZC50YWcmYSkhPT1JZyl7dmFyIGU9ZC5kZXN0cm95O2QuZGVzdHJveT12b2lkIDA7dm9pZCAwIT09ZSYmZSgpfShkLnRhZyZiKSE9PUlnJiYoZT1kLmNyZWF0ZSxkLmRlc3Ryb3k9ZSgpKTtkPWQubmV4dH13aGlsZShkIT09Yyl9fVxuZnVuY3Rpb24gaWkoYSxiKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgamkmJmppKGEpO3N3aXRjaChhLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OnZhciBjPWEudXBkYXRlUXVldWU7aWYobnVsbCE9PWMmJihjPWMubGFzdEVmZmVjdCxudWxsIT09Yykpe3ZhciBkPWMubmV4dDt2Zig5NzxiPzk3OmIsZnVuY3Rpb24oKXt2YXIgYj1kO2Rve3ZhciBjPWIuZGVzdHJveTtpZih2b2lkIDAhPT1jKXt2YXIgaD1hO3RyeXtjKCl9Y2F0Y2goZyl7ZmkoaCxnKX19Yj1iLm5leHR9d2hpbGUoYiE9PWQpfSl9YnJlYWs7Y2FzZSAxOmdpKGEpO2I9YS5zdGF0ZU5vZGU7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFVubW91bnQmJmVpKGEsYik7YnJlYWs7Y2FzZSA1OmdpKGEpO2JyZWFrO2Nhc2UgNDpraShhLGIpfX1cbmZ1bmN0aW9uIGxpKGEsYil7Zm9yKHZhciBjPWE7OylpZihpaShjLGIpLG51bGwhPT1jLmNoaWxkJiY0IT09Yy50YWcpYy5jaGlsZC5yZXR1cm49YyxjPWMuY2hpbGQ7ZWxzZXtpZihjPT09YSlicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YSlyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX1mdW5jdGlvbiBtaShhKXtyZXR1cm4gNT09PWEudGFnfHwzPT09YS50YWd8fDQ9PT1hLnRhZ31cbmZ1bmN0aW9uIG5pKGEpe2E6e2Zvcih2YXIgYj1hLnJldHVybjtudWxsIT09Yjspe2lmKG1pKGIpKXt2YXIgYz1iO2JyZWFrIGF9Yj1iLnJldHVybn10aHJvdyB0KEVycm9yKDE2MCkpO31iPWMuc3RhdGVOb2RlO3N3aXRjaChjLnRhZyl7Y2FzZSA1OnZhciBkPSExO2JyZWFrO2Nhc2UgMzpiPWIuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2Nhc2UgNDpiPWIuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2RlZmF1bHQ6dGhyb3cgdChFcnJvcigxNjEpKTt9Yy5lZmZlY3RUYWcmMTYmJih3ZShiLFwiXCIpLGMuZWZmZWN0VGFnJj0tMTcpO2E6Yjpmb3IoYz1hOzspe2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8bWkoYy5yZXR1cm4pKXtjPW51bGw7YnJlYWsgYX1jPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Zm9yKGM9Yy5zaWJsaW5nOzUhPT1jLnRhZyYmNiE9PWMudGFnJiYxOCE9PWMudGFnOyl7aWYoYy5lZmZlY3RUYWcmMiljb250aW51ZSBiO1xuaWYobnVsbD09PWMuY2hpbGR8fDQ9PT1jLnRhZyljb250aW51ZSBiO2Vsc2UgYy5jaGlsZC5yZXR1cm49YyxjPWMuY2hpbGR9aWYoIShjLmVmZmVjdFRhZyYyKSl7Yz1jLnN0YXRlTm9kZTticmVhayBhfX1mb3IodmFyIGU9YTs7KXt2YXIgZj01PT09ZS50YWd8fDY9PT1lLnRhZztpZihmfHwyMD09PWUudGFnKXt2YXIgaD1mP2Uuc3RhdGVOb2RlOmUuc3RhdGVOb2RlLmluc3RhbmNlO2lmKGMpaWYoZCl7Zj1iO3ZhciBnPWg7aD1jOzg9PT1mLm5vZGVUeXBlP2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZyxoKTpmLmluc2VydEJlZm9yZShnLGgpfWVsc2UgYi5pbnNlcnRCZWZvcmUoaCxjKTtlbHNlIGQ/KGc9Yiw4PT09Zy5ub2RlVHlwZT8oZj1nLnBhcmVudE5vZGUsZi5pbnNlcnRCZWZvcmUoaCxnKSk6KGY9ZyxmLmFwcGVuZENoaWxkKGgpKSxnPWcuX3JlYWN0Um9vdENvbnRhaW5lcixudWxsIT09ZyYmdm9pZCAwIT09Z3x8bnVsbCE9PWYub25jbGlja3x8KGYub25jbGljaz1HZSkpOlxuYi5hcHBlbmRDaGlsZChoKX1lbHNlIGlmKDQhPT1lLnRhZyYmbnVsbCE9PWUuY2hpbGQpe2UuY2hpbGQucmV0dXJuPWU7ZT1lLmNoaWxkO2NvbnRpbnVlfWlmKGU9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWUuc2libGluZzspe2lmKG51bGw9PT1lLnJldHVybnx8ZS5yZXR1cm49PT1hKXJldHVybjtlPWUucmV0dXJufWUuc2libGluZy5yZXR1cm49ZS5yZXR1cm47ZT1lLnNpYmxpbmd9fVxuZnVuY3Rpb24ga2koYSxiKXtmb3IodmFyIGM9YSxkPSExLGU9dm9pZCAwLGY9dm9pZCAwOzspe2lmKCFkKXtkPWMucmV0dXJuO2E6Zm9yKDs7KXtpZihudWxsPT09ZCl0aHJvdyB0KEVycm9yKDE2MCkpO2U9ZC5zdGF0ZU5vZGU7c3dpdGNoKGQudGFnKXtjYXNlIDU6Zj0hMTticmVhayBhO2Nhc2UgMzplPWUuY29udGFpbmVySW5mbztmPSEwO2JyZWFrIGE7Y2FzZSA0OmU9ZS5jb250YWluZXJJbmZvO2Y9ITA7YnJlYWsgYX1kPWQucmV0dXJufWQ9ITB9aWYoNT09PWMudGFnfHw2PT09Yy50YWcpaWYobGkoYyxiKSxmKXt2YXIgaD1lLGc9Yy5zdGF0ZU5vZGU7OD09PWgubm9kZVR5cGU/aC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGcpOmgucmVtb3ZlQ2hpbGQoZyl9ZWxzZSBlLnJlbW92ZUNoaWxkKGMuc3RhdGVOb2RlKTtlbHNlIGlmKDIwPT09Yy50YWcpZz1jLnN0YXRlTm9kZS5pbnN0YW5jZSxsaShjLGIpLGY/KGg9ZSw4PT09aC5ub2RlVHlwZT9oLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZyk6XG5oLnJlbW92ZUNoaWxkKGcpKTplLnJlbW92ZUNoaWxkKGcpO2Vsc2UgaWYoND09PWMudGFnKXtpZihudWxsIT09Yy5jaGlsZCl7ZT1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2Y9ITA7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9fWVsc2UgaWYoaWkoYyxiKSxudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWEpcmV0dXJuO2M9Yy5yZXR1cm47ND09PWMudGFnJiYoZD0hMSl9Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319XG5mdW5jdGlvbiBvaShhLGIpe3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OmhpKEtnLExnLGIpO2JyZWFrO2Nhc2UgMTpicmVhaztjYXNlIDU6dmFyIGM9Yi5zdGF0ZU5vZGU7aWYobnVsbCE9Yyl7dmFyIGQ9Yi5tZW1vaXplZFByb3BzLGU9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOmQ7YT1iLnR5cGU7dmFyIGY9Yi51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYobnVsbCE9PWYpe2NbR2FdPWQ7XCJpbnB1dFwiPT09YSYmXCJyYWRpb1wiPT09ZC50eXBlJiZudWxsIT1kLm5hbWUmJkRjKGMsZCk7RWUoYSxlKTtiPUVlKGEsZCk7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrPTIpe3ZhciBoPWZbZV0sZz1mW2UrMV07XCJzdHlsZVwiPT09aD9BZShjLGcpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWg/dmUoYyxnKTpcImNoaWxkcmVuXCI9PT1oP3dlKGMsZyk6emMoYyxoLGcsYil9c3dpdGNoKGEpe2Nhc2UgXCJpbnB1dFwiOkVjKGMsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6cGUoYyxcbmQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZSxjLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFkLm11bHRpcGxlLGE9ZC52YWx1ZSxudWxsIT1hP21lKGMsISFkLm11bHRpcGxlLGEsITEpOmIhPT0hIWQubXVsdGlwbGUmJihudWxsIT1kLmRlZmF1bHRWYWx1ZT9tZShjLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk6bWUoYywhIWQubXVsdGlwbGUsZC5tdWx0aXBsZT9bXTpcIlwiLCExKSl9fX1icmVhaztjYXNlIDY6aWYobnVsbD09PWIuc3RhdGVOb2RlKXRocm93IHQoRXJyb3IoMTYyKSk7Yi5zdGF0ZU5vZGUubm9kZVZhbHVlPWIubWVtb2l6ZWRQcm9wczticmVhaztjYXNlIDM6YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDEzOmM9YjtudWxsPT09Yi5tZW1vaXplZFN0YXRlP2Q9ITE6KGQ9ITAsYz1iLmNoaWxkLHBpPXNmKCkpO2lmKG51bGwhPT1jKWE6Zm9yKGE9Yzs7KXtpZig1PT09YS50YWcpZj1hLnN0YXRlTm9kZSxkPyhmPVxuZi5zdHlsZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5zZXRQcm9wZXJ0eT9mLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLFwibm9uZVwiLFwiaW1wb3J0YW50XCIpOmYuZGlzcGxheT1cIm5vbmVcIik6KGY9YS5zdGF0ZU5vZGUsZT1hLm1lbW9pemVkUHJvcHMuc3R5bGUsZT12b2lkIDAhPT1lJiZudWxsIT09ZSYmZS5oYXNPd25Qcm9wZXJ0eShcImRpc3BsYXlcIik/ZS5kaXNwbGF5Om51bGwsZi5zdHlsZS5kaXNwbGF5PXplKFwiZGlzcGxheVwiLGUpKTtlbHNlIGlmKDY9PT1hLnRhZylhLnN0YXRlTm9kZS5ub2RlVmFsdWU9ZD9cIlwiOmEubWVtb2l6ZWRQcm9wcztlbHNlIGlmKDEzPT09YS50YWcmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUpe2Y9YS5jaGlsZC5zaWJsaW5nO2YucmV0dXJuPWE7YT1mO2NvbnRpbnVlfWVsc2UgaWYobnVsbCE9PWEuY2hpbGQpe2EuY2hpbGQucmV0dXJuPWE7YT1hLmNoaWxkO2NvbnRpbnVlfWlmKGE9PT1jKWJyZWFrIGE7Zm9yKDtudWxsPT09YS5zaWJsaW5nOyl7aWYobnVsbD09PVxuYS5yZXR1cm58fGEucmV0dXJuPT09YylicmVhayBhO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjthPWEuc2libGluZ31xaShiKTticmVhaztjYXNlIDE5OnFpKGIpO2JyZWFrO2Nhc2UgMTc6YnJlYWs7Y2FzZSAyMDpicmVhaztkZWZhdWx0OnRocm93IHQoRXJyb3IoMTYzKSk7fX1mdW5jdGlvbiBxaShhKXt2YXIgYj1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iKXthLnVwZGF0ZVF1ZXVlPW51bGw7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbD09PWMmJihjPWEuc3RhdGVOb2RlPW5ldyBjaSk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPXJpLmJpbmQobnVsbCxhLGIpO2MuaGFzKGIpfHwoYy5hZGQoYiksYi50aGVuKGQsZCkpfSl9fXZhciBzaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha01hcD9XZWFrTWFwOk1hcDtcbmZ1bmN0aW9uIHRpKGEsYixjKXtjPVFmKGMsbnVsbCk7Yy50YWc9MztjLnBheWxvYWQ9e2VsZW1lbnQ6bnVsbH07dmFyIGQ9Yi52YWx1ZTtjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7dWl8fCh1aT0hMCx2aT1kKTtkaShhLGIpfTtyZXR1cm4gY31cbmZ1bmN0aW9uIHdpKGEsYixjKXtjPVFmKGMsbnVsbCk7Yy50YWc9Mzt2YXIgZD1hLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgZT1iLnZhbHVlO2MucGF5bG9hZD1mdW5jdGlvbigpe2RpKGEsYik7cmV0dXJuIGQoZSl9fXZhciBmPWEuc3RhdGVOb2RlO251bGwhPT1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5jb21wb25lbnREaWRDYXRjaCYmKGMuY2FsbGJhY2s9ZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCIhPT10eXBlb2YgZCYmKG51bGw9PT14aT94aT1uZXcgU2V0KFt0aGlzXSk6eGkuYWRkKHRoaXMpLGRpKGEsYikpO3ZhciBjPWIuc3RhY2s7dGhpcy5jb21wb25lbnREaWRDYXRjaChiLnZhbHVlLHtjb21wb25lbnRTdGFjazpudWxsIT09Yz9jOlwiXCJ9KX0pO3JldHVybiBjfVxudmFyIHlpPU1hdGguY2VpbCx6aT1YYi5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLEFpPVhiLlJlYWN0Q3VycmVudE93bmVyLFQ9MCxCaT04LENpPTE2LERpPTMyLEVpPTAsRmk9MSxHaT0yLEhpPTMsSWk9NCxVPVQsSmk9bnVsbCxWPW51bGwsVz0wLFg9RWksS2k9MTA3Mzc0MTgyMyxMaT0xMDczNzQxODIzLE1pPW51bGwsTmk9ITEscGk9MCxPaT01MDAsWT1udWxsLHVpPSExLHZpPW51bGwseGk9bnVsbCxQaT0hMSxRaT1udWxsLFJpPTkwLFNpPTAsVGk9bnVsbCxVaT0wLFZpPW51bGwsV2k9MDtmdW5jdGlvbiBjZygpe3JldHVybihVJihDaXxEaSkpIT09VD8xMDczNzQxODIxLShzZigpLzEwfDApOjAhPT1XaT9XaTpXaT0xMDczNzQxODIxLShzZigpLzEwfDApfVxuZnVuY3Rpb24gZGcoYSxiLGMpe2I9Yi5tb2RlO2lmKDA9PT0oYiYyKSlyZXR1cm4gMTA3Mzc0MTgyMzt2YXIgZD10ZigpO2lmKDA9PT0oYiY0KSlyZXR1cm4gOTk9PT1kPzEwNzM3NDE4MjM6MTA3Mzc0MTgyMjtpZigoVSZDaSkhPT1UKXJldHVybiBXO2lmKG51bGwhPT1jKWE9MTA3Mzc0MTgyMS0yNSooKCgxMDczNzQxODIxLWErKGMudGltZW91dE1zfDB8fDVFMykvMTApLzI1fDApKzEpO2Vsc2Ugc3dpdGNoKGQpe2Nhc2UgOTk6YT0xMDczNzQxODIzO2JyZWFrO2Nhc2UgOTg6YT0xMDczNzQxODIxLTEwKigoKDEwNzM3NDE4MjEtYSsxNSkvMTB8MCkrMSk7YnJlYWs7Y2FzZSA5NzpjYXNlIDk2OmE9MTA3Mzc0MTgyMS0yNSooKCgxMDczNzQxODIxLWErNTAwKS8yNXwwKSsxKTticmVhaztjYXNlIDk1OmE9MTticmVhaztkZWZhdWx0OnRocm93IHQoRXJyb3IoMzI2KSk7fW51bGwhPT1KaSYmYT09PVcmJi0tYTtyZXR1cm4gYX12YXIgWGk9MDtcbmZ1bmN0aW9uIGVnKGEsYil7aWYoNTA8VWkpdGhyb3cgVWk9MCxWaT1udWxsLHQoRXJyb3IoMTg1KSk7YT1ZaShhLGIpO2lmKG51bGwhPT1hKXthLnBpbmdUaW1lPTA7dmFyIGM9dGYoKTtpZigxMDczNzQxODIzPT09YilpZigoVSZCaSkhPT1UJiYoVSYoQ2l8RGkpKT09PVQpZm9yKHZhciBkPVooYSwxMDczNzQxODIzLCEwKTtudWxsIT09ZDspZD1kKCEwKTtlbHNlIFppKGEsOTksMTA3Mzc0MTgyMyksVT09PVQmJk8oKTtlbHNlIFppKGEsYyxiKTsoVSY0KT09PVR8fDk4IT09YyYmOTkhPT1jfHwobnVsbD09PVRpP1RpPW5ldyBNYXAoW1thLGJdXSk6KGM9VGkuZ2V0KGEpLCh2b2lkIDA9PT1jfHxjPmIpJiZUaS5zZXQoYSxiKSkpfX1cbmZ1bmN0aW9uIFlpKGEsYil7YS5leHBpcmF0aW9uVGltZTxiJiYoYS5leHBpcmF0aW9uVGltZT1iKTt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmYy5leHBpcmF0aW9uVGltZTxiJiYoYy5leHBpcmF0aW9uVGltZT1iKTt2YXIgZD1hLnJldHVybixlPW51bGw7aWYobnVsbD09PWQmJjM9PT1hLnRhZyllPWEuc3RhdGVOb2RlO2Vsc2UgZm9yKDtudWxsIT09ZDspe2M9ZC5hbHRlcm5hdGU7ZC5jaGlsZEV4cGlyYXRpb25UaW1lPGImJihkLmNoaWxkRXhwaXJhdGlvblRpbWU9Yik7bnVsbCE9PWMmJmMuY2hpbGRFeHBpcmF0aW9uVGltZTxiJiYoYy5jaGlsZEV4cGlyYXRpb25UaW1lPWIpO2lmKG51bGw9PT1kLnJldHVybiYmMz09PWQudGFnKXtlPWQuc3RhdGVOb2RlO2JyZWFrfWQ9ZC5yZXR1cm59bnVsbCE9PWUmJihiPmUuZmlyc3RQZW5kaW5nVGltZSYmKGUuZmlyc3RQZW5kaW5nVGltZT1iKSxhPWUubGFzdFBlbmRpbmdUaW1lLDA9PT1hfHxiPGEpJiYoZS5sYXN0UGVuZGluZ1RpbWU9XG5iKTtyZXR1cm4gZX1mdW5jdGlvbiBaaShhLGIsYyl7aWYoYS5jYWxsYmFja0V4cGlyYXRpb25UaW1lPGMpe3ZhciBkPWEuY2FsbGJhY2tOb2RlO251bGwhPT1kJiZkIT09bWYmJmFmKGQpO2EuY2FsbGJhY2tFeHBpcmF0aW9uVGltZT1jOzEwNzM3NDE4MjM9PT1jP2EuY2FsbGJhY2tOb2RlPXhmKCRpLmJpbmQobnVsbCxhLFouYmluZChudWxsLGEsYykpKTooZD1udWxsLDEhPT1jJiYoZD17dGltZW91dDoxMCooMTA3Mzc0MTgyMS1jKS1zZigpfSksYS5jYWxsYmFja05vZGU9d2YoYiwkaS5iaW5kKG51bGwsYSxaLmJpbmQobnVsbCxhLGMpKSxkKSl9fWZ1bmN0aW9uICRpKGEsYixjKXt2YXIgZD1hLmNhbGxiYWNrTm9kZSxlPW51bGw7dHJ5e3JldHVybiBlPWIoYyksbnVsbCE9PWU/JGkuYmluZChudWxsLGEsZSk6bnVsbH1maW5hbGx5e251bGw9PT1lJiZkPT09YS5jYWxsYmFja05vZGUmJihhLmNhbGxiYWNrTm9kZT1udWxsLGEuY2FsbGJhY2tFeHBpcmF0aW9uVGltZT0wKX19XG5mdW5jdGlvbiBhaigpeyhVJigxfENpfERpKSk9PT1UJiYoYmooKSxjaigpKX1mdW5jdGlvbiBkaihhLGIpe3ZhciBjPWEuZmlyc3RCYXRjaDtyZXR1cm4gbnVsbCE9PWMmJmMuX2RlZmVyJiZjLl9leHBpcmF0aW9uVGltZT49Yj8od2YoOTcsZnVuY3Rpb24oKXtjLl9vbkNvbXBsZXRlKCk7cmV0dXJuIG51bGx9KSwhMCk6ITF9ZnVuY3Rpb24gYmooKXtpZihudWxsIT09VGkpe3ZhciBhPVRpO1RpPW51bGw7YS5mb3JFYWNoKGZ1bmN0aW9uKGEsYyl7eGYoWi5iaW5kKG51bGwsYyxhKSl9KTtPKCl9fWZ1bmN0aW9uIGVqKGEsYil7dmFyIGM9VTtVfD0xO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1U9YyxVPT09VCYmTygpfX1mdW5jdGlvbiBmaihhLGIsYyxkKXt2YXIgZT1VO1V8PTQ7dHJ5e3JldHVybiB2Zig5OCxhLmJpbmQobnVsbCxiLGMsZCkpfWZpbmFsbHl7VT1lLFU9PT1UJiZPKCl9fVxuZnVuY3Rpb24gZ2ooYSxiKXt2YXIgYz1VO1UmPS0yO1V8PUJpO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1U9YyxVPT09VCYmTygpfX1cbmZ1bmN0aW9uIGhqKGEsYil7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9MDt2YXIgYz1hLnRpbWVvdXRIYW5kbGU7LTEhPT1jJiYoYS50aW1lb3V0SGFuZGxlPS0xLE1lKGMpKTtpZihudWxsIT09Vilmb3IoYz1WLnJldHVybjtudWxsIT09Yzspe3ZhciBkPWM7c3dpdGNoKGQudGFnKXtjYXNlIDE6dmFyIGU9ZC50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1lJiZ2b2lkIDAhPT1lJiZUZShkKTticmVhaztjYXNlIDM6QmcoZCk7VWUoZCk7YnJlYWs7Y2FzZSA1OkRnKGQpO2JyZWFrO2Nhc2UgNDpCZyhkKTticmVhaztjYXNlIDEzOkgoUCxkKTticmVhaztjYXNlIDE5OkgoUCxkKTticmVhaztjYXNlIDEwOklmKGQpfWM9Yy5yZXR1cm59Smk9YTtWPW9nKGEuY3VycmVudCxudWxsLGIpO1c9YjtYPUVpO0xpPUtpPTEwNzM3NDE4MjM7TWk9bnVsbDtOaT0hMX1cbmZ1bmN0aW9uIFooYSxiLGMpe2lmKChVJihDaXxEaSkpIT09VCl0aHJvdyB0KEVycm9yKDMyNykpO2lmKGEuZmlyc3RQZW5kaW5nVGltZTxiKXJldHVybiBudWxsO2lmKGMmJmEuZmluaXNoZWRFeHBpcmF0aW9uVGltZT09PWIpcmV0dXJuIGlqLmJpbmQobnVsbCxhKTtjaigpO2lmKGEhPT1KaXx8YiE9PVcpaGooYSxiKTtlbHNlIGlmKFg9PT1IaSlpZihOaSloaihhLGIpO2Vsc2V7dmFyIGQ9YS5sYXN0UGVuZGluZ1RpbWU7aWYoZDxiKXJldHVybiBaLmJpbmQobnVsbCxhLGQpfWlmKG51bGwhPT1WKXtkPVU7VXw9Q2k7dmFyIGU9emkuY3VycmVudDtudWxsPT09ZSYmKGU9aGgpO3ppLmN1cnJlbnQ9aGg7aWYoYyl7aWYoMTA3Mzc0MTgyMyE9PWIpe3ZhciBmPWNnKCk7aWYoZjxiKXJldHVybiBVPWQsR2YoKSx6aS5jdXJyZW50PWUsWi5iaW5kKG51bGwsYSxmKX19ZWxzZSBXaT0wO2RvIHRyeXtpZihjKWZvcig7bnVsbCE9PVY7KVY9amooVik7ZWxzZSBmb3IoO251bGwhPT1WJiYhYmYoKTspVj1cbmpqKFYpO2JyZWFrfWNhdGNoKHJiKXtHZigpO2loKCk7Zj1WO2lmKG51bGw9PT1mfHxudWxsPT09Zi5yZXR1cm4pdGhyb3cgaGooYSxiKSxVPWQscmI7YTp7dmFyIGg9YSxnPWYucmV0dXJuLGs9ZixsPXJiLG49VztrLmVmZmVjdFRhZ3w9MTAyNDtrLmZpcnN0RWZmZWN0PWsubGFzdEVmZmVjdD1udWxsO2lmKG51bGwhPT1sJiZcIm9iamVjdFwiPT09dHlwZW9mIGwmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBsLnRoZW4pe3ZhciB6PWwseD0wIT09KFAuY3VycmVudCZGZyk7bD1nO2Rve3ZhciB2O2lmKHY9MTM9PT1sLnRhZyludWxsIT09bC5tZW1vaXplZFN0YXRlP3Y9ITE6KHY9bC5tZW1vaXplZFByb3BzLHY9dm9pZCAwPT09di5mYWxsYmFjaz8hMTohMCE9PXYudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2s/ITA6eD8hMTohMCk7aWYodil7Zz1sLnVwZGF0ZVF1ZXVlO251bGw9PT1nPyhnPW5ldyBTZXQsZy5hZGQoeiksbC51cGRhdGVRdWV1ZT1nKTpnLmFkZCh6KTtpZigwPT09KGwubW9kZSZcbjIpKXtsLmVmZmVjdFRhZ3w9NjQ7ay5lZmZlY3RUYWcmPS0xOTU3OzE9PT1rLnRhZyYmKG51bGw9PT1rLmFsdGVybmF0ZT9rLnRhZz0xNzoobj1RZigxMDczNzQxODIzLG51bGwpLG4udGFnPTIsU2YoayxuKSkpO2suZXhwaXJhdGlvblRpbWU9MTA3Mzc0MTgyMzticmVhayBhfWs9aDtoPW47eD1rLnBpbmdDYWNoZTtudWxsPT09eD8oeD1rLnBpbmdDYWNoZT1uZXcgc2ksZz1uZXcgU2V0LHguc2V0KHosZykpOihnPXguZ2V0KHopLHZvaWQgMD09PWcmJihnPW5ldyBTZXQseC5zZXQoeixnKSkpO2cuaGFzKGgpfHwoZy5hZGQoaCksaz1rai5iaW5kKG51bGwsayx6LGgpLHoudGhlbihrLGspKTtsLmVmZmVjdFRhZ3w9MjA0ODtsLmV4cGlyYXRpb25UaW1lPW47YnJlYWsgYX1sPWwucmV0dXJufXdoaWxlKG51bGwhPT1sKTtsPUVycm9yKChvYyhrLnR5cGUpfHxcIkEgUmVhY3QgY29tcG9uZW50XCIpK1wiIHN1c3BlbmRlZCB3aGlsZSByZW5kZXJpbmcsIGJ1dCBubyBmYWxsYmFjayBVSSB3YXMgc3BlY2lmaWVkLlxcblxcbkFkZCBhIDxTdXNwZW5zZSBmYWxsYmFjaz0uLi4+IGNvbXBvbmVudCBoaWdoZXIgaW4gdGhlIHRyZWUgdG8gcHJvdmlkZSBhIGxvYWRpbmcgaW5kaWNhdG9yIG9yIHBsYWNlaG9sZGVyIHRvIGRpc3BsYXkuXCIrXG5wYyhrKSl9WCE9PUlpJiYoWD1GaSk7bD1iaShsLGspO2s9Zztkb3tzd2l0Y2goay50YWcpe2Nhc2UgMzprLmVmZmVjdFRhZ3w9MjA0ODtrLmV4cGlyYXRpb25UaW1lPW47bj10aShrLGwsbik7VGYoayxuKTticmVhayBhO2Nhc2UgMTppZih6PWwsaD1rLnR5cGUsZz1rLnN0YXRlTm9kZSwwPT09KGsuZWZmZWN0VGFnJjY0KSYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8bnVsbCE9PWcmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PXhpfHwheGkuaGFzKGcpKSkpe2suZWZmZWN0VGFnfD0yMDQ4O2suZXhwaXJhdGlvblRpbWU9bjtuPXdpKGsseixuKTtUZihrLG4pO2JyZWFrIGF9fWs9ay5yZXR1cm59d2hpbGUobnVsbCE9PWspfVY9bGooZil9d2hpbGUoMSk7VT1kO0dmKCk7emkuY3VycmVudD1lO2lmKG51bGwhPT1WKXJldHVybiBaLmJpbmQobnVsbCxhLGIpfWEuZmluaXNoZWRXb3JrPWEuY3VycmVudC5hbHRlcm5hdGU7XG5hLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9YjtpZihkaihhLGIpKXJldHVybiBudWxsO0ppPW51bGw7c3dpdGNoKFgpe2Nhc2UgRWk6dGhyb3cgdChFcnJvcigzMjgpKTtjYXNlIEZpOnJldHVybiBkPWEubGFzdFBlbmRpbmdUaW1lLGQ8Yj9aLmJpbmQobnVsbCxhLGQpOmM/aWouYmluZChudWxsLGEpOihoaihhLGIpLHhmKFouYmluZChudWxsLGEsYikpLG51bGwpO2Nhc2UgR2k6aWYoMTA3Mzc0MTgyMz09PUtpJiYhYyYmKGM9cGkrT2ktc2YoKSwxMDxjKSl7aWYoTmkpcmV0dXJuIGhqKGEsYiksWi5iaW5kKG51bGwsYSxiKTtkPWEubGFzdFBlbmRpbmdUaW1lO2lmKGQ8YilyZXR1cm4gWi5iaW5kKG51bGwsYSxkKTthLnRpbWVvdXRIYW5kbGU9TGUoaWouYmluZChudWxsLGEpLGMpO3JldHVybiBudWxsfXJldHVybiBpai5iaW5kKG51bGwsYSk7Y2FzZSBIaTppZighYyl7aWYoTmkpcmV0dXJuIGhqKGEsYiksWi5iaW5kKG51bGwsYSxiKTtjPWEubGFzdFBlbmRpbmdUaW1lO2lmKGM8YilyZXR1cm4gWi5iaW5kKG51bGwsXG5hLGMpOzEwNzM3NDE4MjMhPT1MaT9jPTEwKigxMDczNzQxODIxLUxpKS1zZigpOjEwNzM3NDE4MjM9PT1LaT9jPTA6KGM9MTAqKDEwNzM3NDE4MjEtS2kpLTVFMyxkPXNmKCksYj0xMCooMTA3Mzc0MTgyMS1iKS1kLGM9ZC1jLDA+YyYmKGM9MCksYz0oMTIwPmM/MTIwOjQ4MD5jPzQ4MDoxMDgwPmM/MTA4MDoxOTIwPmM/MTkyMDozRTM+Yz8zRTM6NDMyMD5jPzQzMjA6MTk2MCp5aShjLzE5NjApKS1jLGI8YyYmKGM9YikpO2lmKDEwPGMpcmV0dXJuIGEudGltZW91dEhhbmRsZT1MZShpai5iaW5kKG51bGwsYSksYyksbnVsbH1yZXR1cm4gaWouYmluZChudWxsLGEpO2Nhc2UgSWk6cmV0dXJuIWMmJjEwNzM3NDE4MjMhPT1LaSYmbnVsbCE9PU1pJiYoZD1LaSxlPU1pLGI9ZS5idXN5TWluRHVyYXRpb25Nc3wwLDA+PWI/Yj0wOihjPWUuYnVzeURlbGF5TXN8MCxkPXNmKCktKDEwKigxMDczNzQxODIxLWQpLShlLnRpbWVvdXRNc3wwfHw1RTMpKSxiPWQ8PWM/MDpjK2ItZCksMTA8Yik/KGEudGltZW91dEhhbmRsZT1cbkxlKGlqLmJpbmQobnVsbCxhKSxiKSxudWxsKTppai5iaW5kKG51bGwsYSk7ZGVmYXVsdDp0aHJvdyB0KEVycm9yKDMyOSkpO319ZnVuY3Rpb24gWGYoYSxiKXthPEtpJiYxPGEmJihLaT1hKTtudWxsIT09YiYmYTxMaSYmMTxhJiYoTGk9YSxNaT1iKX1mdW5jdGlvbiBqaihhKXt2YXIgYj1taihhLmFsdGVybmF0ZSxhLFcpO2EubWVtb2l6ZWRQcm9wcz1hLnBlbmRpbmdQcm9wcztudWxsPT09YiYmKGI9bGooYSkpO0FpLmN1cnJlbnQ9bnVsbDtyZXR1cm4gYn1cbmZ1bmN0aW9uIGxqKGEpe1Y9YTtkb3t2YXIgYj1WLmFsdGVybmF0ZTthPVYucmV0dXJuO2lmKDA9PT0oVi5lZmZlY3RUYWcmMTAyNCkpe2E6e3ZhciBjPWI7Yj1WO3ZhciBkPVcsZT1iLnBlbmRpbmdQcm9wcztzd2l0Y2goYi50YWcpe2Nhc2UgMjpicmVhaztjYXNlIDE2OmJyZWFrO2Nhc2UgMTU6Y2FzZSAwOmJyZWFrO2Nhc2UgMTpOKGIudHlwZSkmJlRlKGIpO2JyZWFrO2Nhc2UgMzpCZyhiKTtVZShiKTtkPWIuc3RhdGVOb2RlO2QucGVuZGluZ0NvbnRleHQmJihkLmNvbnRleHQ9ZC5wZW5kaW5nQ29udGV4dCxkLnBlbmRpbmdDb250ZXh0PW51bGwpO2lmKG51bGw9PT1jfHxudWxsPT09Yy5jaGlsZClCaChiKSxiLmVmZmVjdFRhZyY9LTM7VWgoYik7YnJlYWs7Y2FzZSA1OkRnKGIpO2Q9emcoeWcuY3VycmVudCk7dmFyIGY9Yi50eXBlO2lmKG51bGwhPT1jJiZudWxsIT1iLnN0YXRlTm9kZSlWaChjLGIsZixlLGQpLGMucmVmIT09Yi5yZWYmJihiLmVmZmVjdFRhZ3w9MTI4KTtlbHNlIGlmKGUpe3ZhciBoPVxuemcod2cuY3VycmVudCk7aWYoQmgoYikpe2M9YjtlPXZvaWQgMDtmPWMuc3RhdGVOb2RlO3ZhciBnPWMudHlwZSxrPWMubWVtb2l6ZWRQcm9wcztmW0ZhXT1jO2ZbR2FdPWs7c3dpdGNoKGcpe2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RyhcImxvYWRcIixmKTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IodmFyIGw9MDtsPGJiLmxlbmd0aDtsKyspRyhiYltsXSxmKTticmVhaztjYXNlIFwic291cmNlXCI6RyhcImVycm9yXCIsZik7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsZik7RyhcImxvYWRcIixmKTticmVhaztjYXNlIFwiZm9ybVwiOkcoXCJyZXNldFwiLGYpO0coXCJzdWJtaXRcIixmKTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkcoXCJ0b2dnbGVcIixmKTticmVhaztjYXNlIFwiaW5wdXRcIjpDYyhmLGspO0coXCJpbnZhbGlkXCIsZik7RmUoZCxcIm9uQ2hhbmdlXCIpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpmLl93cmFwcGVyU3RhdGU9XG57d2FzTXVsdGlwbGU6ISFrLm11bHRpcGxlfTtHKFwiaW52YWxpZFwiLGYpO0ZlKGQsXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpvZShmLGspLEcoXCJpbnZhbGlkXCIsZiksRmUoZCxcIm9uQ2hhbmdlXCIpfURlKGcsayk7bD1udWxsO2ZvcihlIGluIGspay5oYXNPd25Qcm9wZXJ0eShlKSYmKGg9a1tlXSxcImNoaWxkcmVuXCI9PT1lP1wic3RyaW5nXCI9PT10eXBlb2YgaD9mLnRleHRDb250ZW50IT09aCYmKGw9W1wiY2hpbGRyZW5cIixoXSk6XCJudW1iZXJcIj09PXR5cGVvZiBoJiZmLnRleHRDb250ZW50IT09XCJcIitoJiYobD1bXCJjaGlsZHJlblwiLFwiXCIraF0pOmlhLmhhc093blByb3BlcnR5KGUpJiZudWxsIT1oJiZGZShkLGUpKTtzd2l0Y2goZyl7Y2FzZSBcImlucHV0XCI6VmIoZik7R2MoZixrLCEwKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYihmKTtxZShmLGspO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpjYXNlIFwib3B0aW9uXCI6YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay5vbkNsaWNrJiZcbihmLm9uY2xpY2s9R2UpfWQ9bDtjLnVwZGF0ZVF1ZXVlPWQ7bnVsbCE9PWQmJlNoKGIpfWVsc2V7az1mO2M9ZTtnPWI7bD05PT09ZC5ub2RlVHlwZT9kOmQub3duZXJEb2N1bWVudDtoPT09cmUuaHRtbCYmKGg9c2UoaykpO2g9PT1yZS5odG1sP1wic2NyaXB0XCI9PT1rPyhrPWwuY3JlYXRlRWxlbWVudChcImRpdlwiKSxrLmlubmVySFRNTD1cIjxzY3JpcHQ+XFx4M2Mvc2NyaXB0PlwiLGw9ay5yZW1vdmVDaGlsZChrLmZpcnN0Q2hpbGQpKTpcInN0cmluZ1wiPT09dHlwZW9mIGMuaXM/bD1sLmNyZWF0ZUVsZW1lbnQoayx7aXM6Yy5pc30pOihsPWwuY3JlYXRlRWxlbWVudChrKSxcInNlbGVjdFwiPT09ayYmKGs9bCxjLm11bHRpcGxlP2subXVsdGlwbGU9ITA6Yy5zaXplJiYoay5zaXplPWMuc2l6ZSkpKTpsPWwuY3JlYXRlRWxlbWVudE5TKGgsayk7az1sO2tbRmFdPWc7a1tHYV09YztjPWs7VGgoYyxiLCExLCExKTtnPWM7dmFyIG49ZCx6PUVlKGYsZSk7c3dpdGNoKGYpe2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RyhcImxvYWRcIixcbmcpO2Q9ZTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoZD0wO2Q8YmIubGVuZ3RoO2QrKylHKGJiW2RdLGcpO2Q9ZTticmVhaztjYXNlIFwic291cmNlXCI6RyhcImVycm9yXCIsZyk7ZD1lO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkcoXCJlcnJvclwiLGcpO0coXCJsb2FkXCIsZyk7ZD1lO2JyZWFrO2Nhc2UgXCJmb3JtXCI6RyhcInJlc2V0XCIsZyk7RyhcInN1Ym1pdFwiLGcpO2Q9ZTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkcoXCJ0b2dnbGVcIixnKTtkPWU7YnJlYWs7Y2FzZSBcImlucHV0XCI6Q2MoZyxlKTtkPUJjKGcsZSk7RyhcImludmFsaWRcIixnKTtGZShuLFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmQ9bGUoZyxlKTticmVhaztjYXNlIFwic2VsZWN0XCI6Zy5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIWUubXVsdGlwbGV9O2Q9bSh7fSxlLHt2YWx1ZTp2b2lkIDB9KTtHKFwiaW52YWxpZFwiLGcpO0ZlKG4sXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpvZShnLFxuZSk7ZD1uZShnLGUpO0coXCJpbnZhbGlkXCIsZyk7RmUobixcIm9uQ2hhbmdlXCIpO2JyZWFrO2RlZmF1bHQ6ZD1lfURlKGYsZCk7az12b2lkIDA7bD1mO2g9Zzt2YXIgeD1kO2ZvcihrIGluIHgpaWYoeC5oYXNPd25Qcm9wZXJ0eShrKSl7dmFyIHY9eFtrXTtcInN0eWxlXCI9PT1rP0FlKGgsdik6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09az8odj12P3YuX19odG1sOnZvaWQgMCxudWxsIT12JiZ2ZShoLHYpKTpcImNoaWxkcmVuXCI9PT1rP1wic3RyaW5nXCI9PT10eXBlb2Ygdj8oXCJ0ZXh0YXJlYVwiIT09bHx8XCJcIiE9PXYpJiZ3ZShoLHYpOlwibnVtYmVyXCI9PT10eXBlb2YgdiYmd2UoaCxcIlwiK3YpOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1rJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09ayYmXCJhdXRvRm9jdXNcIiE9PWsmJihpYS5oYXNPd25Qcm9wZXJ0eShrKT9udWxsIT12JiZGZShuLGspOm51bGwhPXYmJnpjKGgsayx2LHopKX1zd2l0Y2goZil7Y2FzZSBcImlucHV0XCI6VmIoZyk7XG5HYyhnLGUsITEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZiKGcpO3FlKGcsZSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOm51bGwhPWUudmFsdWUmJmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiK0FjKGUudmFsdWUpKTticmVhaztjYXNlIFwic2VsZWN0XCI6ZD1nO2c9ZTtkLm11bHRpcGxlPSEhZy5tdWx0aXBsZTtrPWcudmFsdWU7bnVsbCE9az9tZShkLCEhZy5tdWx0aXBsZSxrLCExKTpudWxsIT1nLmRlZmF1bHRWYWx1ZSYmbWUoZCwhIWcubXVsdGlwbGUsZy5kZWZhdWx0VmFsdWUsITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGcub25jbGljaz1HZSl9SmUoZixlKSYmU2goYik7Yi5zdGF0ZU5vZGU9Y31udWxsIT09Yi5yZWYmJihiLmVmZmVjdFRhZ3w9MTI4KX1lbHNlIGlmKG51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyB0KEVycm9yKDE2NikpO2JyZWFrO2Nhc2UgNjppZihjJiZudWxsIT1iLnN0YXRlTm9kZSlXaChjLGIsYy5tZW1vaXplZFByb3BzLFxuZSk7ZWxzZXtpZihcInN0cmluZ1wiIT09dHlwZW9mIGUmJm51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyB0KEVycm9yKDE2NikpO2M9emcoeWcuY3VycmVudCk7emcod2cuY3VycmVudCk7QmgoYik/KGQ9Yi5zdGF0ZU5vZGUsYz1iLm1lbW9pemVkUHJvcHMsZFtGYV09YixkLm5vZGVWYWx1ZSE9PWMmJlNoKGIpKTooZD1iLGM9KDk9PT1jLm5vZGVUeXBlP2M6Yy5vd25lckRvY3VtZW50KS5jcmVhdGVUZXh0Tm9kZShlKSxjW0ZhXT1iLGQuc3RhdGVOb2RlPWMpfWJyZWFrO2Nhc2UgMTE6YnJlYWs7Y2FzZSAxMzpIKFAsYik7ZT1iLm1lbW9pemVkU3RhdGU7aWYoMCE9PShiLmVmZmVjdFRhZyY2NCkpe2IuZXhwaXJhdGlvblRpbWU9ZDticmVhayBhfWQ9bnVsbCE9PWU7ZT0hMTtudWxsPT09Yz9CaChiKTooZj1jLm1lbW9pemVkU3RhdGUsZT1udWxsIT09ZixkfHxudWxsPT09Znx8KGY9Yy5jaGlsZC5zaWJsaW5nLG51bGwhPT1mJiYoZz1iLmZpcnN0RWZmZWN0LG51bGwhPT1nPyhiLmZpcnN0RWZmZWN0PVxuZixmLm5leHRFZmZlY3Q9Zyk6KGIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWYsZi5uZXh0RWZmZWN0PW51bGwpLGYuZWZmZWN0VGFnPTgpKSk7aWYoZCYmIWUmJjAhPT0oYi5tb2RlJjIpKWlmKG51bGw9PT1jJiYhMCE9PWIubWVtb2l6ZWRQcm9wcy51bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFja3x8MCE9PShQLmN1cnJlbnQmRmcpKVg9PT1FaSYmKFg9R2kpO2Vsc2UgaWYoWD09PUVpfHxYPT09R2kpWD1IaTtpZihkfHxlKWIuZWZmZWN0VGFnfD00O2JyZWFrO2Nhc2UgNzpicmVhaztjYXNlIDg6YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDQ6QmcoYik7VWgoYik7YnJlYWs7Y2FzZSAxMDpJZihiKTticmVhaztjYXNlIDk6YnJlYWs7Y2FzZSAxNDpicmVhaztjYXNlIDE3Ok4oYi50eXBlKSYmVGUoYik7YnJlYWs7Y2FzZSAxODpicmVhaztjYXNlIDE5OkgoUCxiKTtlPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsPT09ZSlicmVhaztmPTAhPT0oYi5lZmZlY3RUYWcmNjQpO2c9ZS5yZW5kZXJpbmc7XG5pZihudWxsPT09ZylpZihmKSRoKGUsITEpO2Vsc2V7aWYoWCE9PUVpfHxudWxsIT09YyYmMCE9PShjLmVmZmVjdFRhZyY2NCkpZm9yKGM9Yi5jaGlsZDtudWxsIT09Yzspe2c9SGcoYyk7aWYobnVsbCE9PWcpe2IuZWZmZWN0VGFnfD02NDskaChlLCExKTtjPWcudXBkYXRlUXVldWU7bnVsbCE9PWMmJihiLnVwZGF0ZVF1ZXVlPWMsYi5lZmZlY3RUYWd8PTQpO2IuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PW51bGw7Zm9yKGM9Yi5jaGlsZDtudWxsIT09YzspZT1jLGY9ZCxlLmVmZmVjdFRhZyY9MixlLm5leHRFZmZlY3Q9bnVsbCxlLmZpcnN0RWZmZWN0PW51bGwsZS5sYXN0RWZmZWN0PW51bGwsZz1lLmFsdGVybmF0ZSxudWxsPT09Zz8oZS5jaGlsZEV4cGlyYXRpb25UaW1lPTAsZS5leHBpcmF0aW9uVGltZT1mLGUuY2hpbGQ9bnVsbCxlLm1lbW9pemVkUHJvcHM9bnVsbCxlLm1lbW9pemVkU3RhdGU9bnVsbCxlLnVwZGF0ZVF1ZXVlPW51bGwsZS5kZXBlbmRlbmNpZXM9bnVsbCk6KGUuY2hpbGRFeHBpcmF0aW9uVGltZT1cbmcuY2hpbGRFeHBpcmF0aW9uVGltZSxlLmV4cGlyYXRpb25UaW1lPWcuZXhwaXJhdGlvblRpbWUsZS5jaGlsZD1nLmNoaWxkLGUubWVtb2l6ZWRQcm9wcz1nLm1lbW9pemVkUHJvcHMsZS5tZW1vaXplZFN0YXRlPWcubWVtb2l6ZWRTdGF0ZSxlLnVwZGF0ZVF1ZXVlPWcudXBkYXRlUXVldWUsZj1nLmRlcGVuZGVuY2llcyxlLmRlcGVuZGVuY2llcz1udWxsPT09Zj9udWxsOntleHBpcmF0aW9uVGltZTpmLmV4cGlyYXRpb25UaW1lLGZpcnN0Q29udGV4dDpmLmZpcnN0Q29udGV4dCxyZXNwb25kZXJzOmYucmVzcG9uZGVyc30pLGM9Yy5zaWJsaW5nO0ooUCxQLmN1cnJlbnQmRWd8R2csYik7Yj1iLmNoaWxkO2JyZWFrIGF9Yz1jLnNpYmxpbmd9fWVsc2V7aWYoIWYpaWYoYz1IZyhnKSxudWxsIT09Yyl7aWYoYi5lZmZlY3RUYWd8PTY0LGY9ITAsJGgoZSwhMCksbnVsbD09PWUudGFpbCYmXCJoaWRkZW5cIj09PWUudGFpbE1vZGUpe2Q9Yy51cGRhdGVRdWV1ZTtudWxsIT09ZCYmKGIudXBkYXRlUXVldWU9XG5kLGIuZWZmZWN0VGFnfD00KTtiPWIubGFzdEVmZmVjdD1lLmxhc3RFZmZlY3Q7bnVsbCE9PWImJihiLm5leHRFZmZlY3Q9bnVsbCk7YnJlYWt9fWVsc2Ugc2YoKT5lLnRhaWxFeHBpcmF0aW9uJiYxPGQmJihiLmVmZmVjdFRhZ3w9NjQsZj0hMCwkaChlLCExKSxiLmV4cGlyYXRpb25UaW1lPWIuY2hpbGRFeHBpcmF0aW9uVGltZT1kLTEpO2UuaXNCYWNrd2FyZHM/KGcuc2libGluZz1iLmNoaWxkLGIuY2hpbGQ9Zyk6KGQ9ZS5sYXN0LG51bGwhPT1kP2Quc2libGluZz1nOmIuY2hpbGQ9ZyxlLmxhc3Q9Zyl9aWYobnVsbCE9PWUudGFpbCl7MD09PWUudGFpbEV4cGlyYXRpb24mJihlLnRhaWxFeHBpcmF0aW9uPXNmKCkrNTAwKTtkPWUudGFpbDtlLnJlbmRlcmluZz1kO2UudGFpbD1kLnNpYmxpbmc7ZS5sYXN0RWZmZWN0PWIubGFzdEVmZmVjdDtkLnNpYmxpbmc9bnVsbDtjPVAuY3VycmVudDtjPWY/YyZFZ3xHZzpjJkVnO0ooUCxjLGIpO2I9ZDticmVhayBhfWJyZWFrO2Nhc2UgMjA6YnJlYWs7XG5kZWZhdWx0OnRocm93IHQoRXJyb3IoMTU2KSk7fWI9bnVsbH1kPVY7aWYoMT09PVd8fDEhPT1kLmNoaWxkRXhwaXJhdGlvblRpbWUpe2M9MDtmb3IoZT1kLmNoaWxkO251bGwhPT1lOylmPWUuZXhwaXJhdGlvblRpbWUsZz1lLmNoaWxkRXhwaXJhdGlvblRpbWUsZj5jJiYoYz1mKSxnPmMmJihjPWcpLGU9ZS5zaWJsaW5nO2QuY2hpbGRFeHBpcmF0aW9uVGltZT1jfWlmKG51bGwhPT1iKXJldHVybiBiO251bGwhPT1hJiYwPT09KGEuZWZmZWN0VGFnJjEwMjQpJiYobnVsbD09PWEuZmlyc3RFZmZlY3QmJihhLmZpcnN0RWZmZWN0PVYuZmlyc3RFZmZlY3QpLG51bGwhPT1WLmxhc3RFZmZlY3QmJihudWxsIT09YS5sYXN0RWZmZWN0JiYoYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9Vi5maXJzdEVmZmVjdCksYS5sYXN0RWZmZWN0PVYubGFzdEVmZmVjdCksMTxWLmVmZmVjdFRhZyYmKG51bGwhPT1hLmxhc3RFZmZlY3Q/YS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9VjphLmZpcnN0RWZmZWN0PVYsXG5hLmxhc3RFZmZlY3Q9VikpfWVsc2V7Yj1haShWLFcpO2lmKG51bGwhPT1iKXJldHVybiBiLmVmZmVjdFRhZyY9MTAyMyxiO251bGwhPT1hJiYoYS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9bnVsbCxhLmVmZmVjdFRhZ3w9MTAyNCl9Yj1WLnNpYmxpbmc7aWYobnVsbCE9PWIpcmV0dXJuIGI7Vj1hfXdoaWxlKG51bGwhPT1WKTtYPT09RWkmJihYPUlpKTtyZXR1cm4gbnVsbH1mdW5jdGlvbiBpaihhKXt2YXIgYj10ZigpO3ZmKDk5LG5qLmJpbmQobnVsbCxhLGIpKTtudWxsIT09UWkmJndmKDk3LGZ1bmN0aW9uKCl7Y2ooKTtyZXR1cm4gbnVsbH0pO3JldHVybiBudWxsfVxuZnVuY3Rpb24gbmooYSxiKXtjaigpO2lmKChVJihDaXxEaSkpIT09VCl0aHJvdyB0KEVycm9yKDMyNykpO3ZhciBjPWEuZmluaXNoZWRXb3JrLGQ9YS5maW5pc2hlZEV4cGlyYXRpb25UaW1lO2lmKG51bGw9PT1jKXJldHVybiBudWxsO2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZEV4cGlyYXRpb25UaW1lPTA7aWYoYz09PWEuY3VycmVudCl0aHJvdyB0KEVycm9yKDE3NykpO2EuY2FsbGJhY2tOb2RlPW51bGw7YS5jYWxsYmFja0V4cGlyYXRpb25UaW1lPTA7dmFyIGU9Yy5leHBpcmF0aW9uVGltZSxmPWMuY2hpbGRFeHBpcmF0aW9uVGltZTtlPWY+ZT9mOmU7YS5maXJzdFBlbmRpbmdUaW1lPWU7ZTxhLmxhc3RQZW5kaW5nVGltZSYmKGEubGFzdFBlbmRpbmdUaW1lPWUpO2E9PT1KaSYmKFY9Smk9bnVsbCxXPTApOzE8Yy5lZmZlY3RUYWc/bnVsbCE9PWMubGFzdEVmZmVjdD8oYy5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxlPWMuZmlyc3RFZmZlY3QpOmU9YzplPWMuZmlyc3RFZmZlY3Q7XG5pZihudWxsIT09ZSl7Zj1VO1V8PURpO0FpLmN1cnJlbnQ9bnVsbDtIZT1RZDt2YXIgaD1hZSgpO2lmKGJlKGgpKXtpZihcInNlbGVjdGlvblN0YXJ0XCJpbiBoKXZhciBnPXtzdGFydDpoLnNlbGVjdGlvblN0YXJ0LGVuZDpoLnNlbGVjdGlvbkVuZH07ZWxzZSBhOntnPShnPWgub3duZXJEb2N1bWVudCkmJmcuZGVmYXVsdFZpZXd8fHdpbmRvdzt2YXIgaz1nLmdldFNlbGVjdGlvbiYmZy5nZXRTZWxlY3Rpb24oKTtpZihrJiYwIT09ay5yYW5nZUNvdW50KXtnPWsuYW5jaG9yTm9kZTt2YXIgbD1rLmFuY2hvck9mZnNldCxuPWsuZm9jdXNOb2RlO2s9ay5mb2N1c09mZnNldDt0cnl7Zy5ub2RlVHlwZSxuLm5vZGVUeXBlfWNhdGNoKHpiKXtnPW51bGw7YnJlYWsgYX12YXIgej0wLHg9LTEsdj0tMSxyYj0wLEJlPTAsdT1oLHc9bnVsbDtiOmZvcig7Oyl7Zm9yKHZhciBDOzspe3UhPT1nfHwwIT09bCYmMyE9PXUubm9kZVR5cGV8fCh4PXorbCk7dSE9PW58fDAhPT1rJiYzIT09dS5ub2RlVHlwZXx8XG4odj16K2spOzM9PT11Lm5vZGVUeXBlJiYoeis9dS5ub2RlVmFsdWUubGVuZ3RoKTtpZihudWxsPT09KEM9dS5maXJzdENoaWxkKSlicmVhazt3PXU7dT1DfWZvcig7Oyl7aWYodT09PWgpYnJlYWsgYjt3PT09ZyYmKytyYj09PWwmJih4PXopO3c9PT1uJiYrK0JlPT09ayYmKHY9eik7aWYobnVsbCE9PShDPXUubmV4dFNpYmxpbmcpKWJyZWFrO3U9dzt3PXUucGFyZW50Tm9kZX11PUN9Zz0tMT09PXh8fC0xPT09dj9udWxsOntzdGFydDp4LGVuZDp2fX1lbHNlIGc9bnVsbH1nPWd8fHtzdGFydDowLGVuZDowfX1lbHNlIGc9bnVsbDtJZT17Zm9jdXNlZEVsZW06aCxzZWxlY3Rpb25SYW5nZTpnfTtRZD0hMTtZPWU7ZG8gdHJ5e2Zvcig7bnVsbCE9PVk7KXtpZigwIT09KFkuZWZmZWN0VGFnJjI1Nikpe3ZhciBJPVkuYWx0ZXJuYXRlO2g9WTtzd2l0Y2goaC50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6aGkoSmcsSWcsaCk7YnJlYWs7Y2FzZSAxOmlmKGguZWZmZWN0VGFnJjI1NiYmbnVsbCE9PVxuSSl7dmFyIEU9SS5tZW1vaXplZFByb3BzLHVhPUkubWVtb2l6ZWRTdGF0ZSxnaD1oLnN0YXRlTm9kZSxvaj1naC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShoLmVsZW1lbnRUeXBlPT09aC50eXBlP0U6QWYoaC50eXBlLEUpLHVhKTtnaC5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZT1van1icmVhaztjYXNlIDM6Y2FzZSA1OmNhc2UgNjpjYXNlIDQ6Y2FzZSAxNzpicmVhaztkZWZhdWx0OnRocm93IHQoRXJyb3IoMTYzKSk7fX1ZPVkubmV4dEVmZmVjdH19Y2F0Y2goemIpe2lmKG51bGw9PT1ZKXRocm93IHQoRXJyb3IoMzMwKSk7ZmkoWSx6Yik7WT1ZLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVkpO1k9ZTtkbyB0cnl7Zm9yKEk9YjtudWxsIT09WTspe3ZhciBBPVkuZWZmZWN0VGFnO0EmMTYmJndlKFkuc3RhdGVOb2RlLFwiXCIpO2lmKEEmMTI4KXt2YXIgcD1ZLmFsdGVybmF0ZTtpZihudWxsIT09cCl7dmFyIHI9cC5yZWY7bnVsbCE9PXImJihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygcj9cbnIobnVsbCk6ci5jdXJyZW50PW51bGwpfX1zd2l0Y2goQSYxNCl7Y2FzZSAyOm5pKFkpO1kuZWZmZWN0VGFnJj0tMzticmVhaztjYXNlIDY6bmkoWSk7WS5lZmZlY3RUYWcmPS0zO29pKFkuYWx0ZXJuYXRlLFkpO2JyZWFrO2Nhc2UgNDpvaShZLmFsdGVybmF0ZSxZKTticmVhaztjYXNlIDg6RT1ZO2tpKEUsSSk7RS5yZXR1cm49bnVsbDtFLmNoaWxkPW51bGw7RS5tZW1vaXplZFN0YXRlPW51bGw7RS51cGRhdGVRdWV1ZT1udWxsO0UuZGVwZW5kZW5jaWVzPW51bGw7dmFyIEs9RS5hbHRlcm5hdGU7bnVsbCE9PUsmJihLLnJldHVybj1udWxsLEsuY2hpbGQ9bnVsbCxLLm1lbW9pemVkU3RhdGU9bnVsbCxLLnVwZGF0ZVF1ZXVlPW51bGwsSy5kZXBlbmRlbmNpZXM9bnVsbCl9WT1ZLm5leHRFZmZlY3R9fWNhdGNoKHpiKXtpZihudWxsPT09WSl0aHJvdyB0KEVycm9yKDMzMCkpO2ZpKFksemIpO1k9WS5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1ZKTtyPUllO3A9YWUoKTtBPXIuZm9jdXNlZEVsZW07XG5JPXIuc2VsZWN0aW9uUmFuZ2U7aWYocCE9PUEmJkEmJkEub3duZXJEb2N1bWVudCYmJGQoQS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxBKSl7bnVsbCE9PUkmJmJlKEEpJiYocD1JLnN0YXJ0LHI9SS5lbmQsdm9pZCAwPT09ciYmKHI9cCksXCJzZWxlY3Rpb25TdGFydFwiaW4gQT8oQS5zZWxlY3Rpb25TdGFydD1wLEEuc2VsZWN0aW9uRW5kPU1hdGgubWluKHIsQS52YWx1ZS5sZW5ndGgpKToocj0ocD1BLm93bmVyRG9jdW1lbnR8fGRvY3VtZW50KSYmcC5kZWZhdWx0Vmlld3x8d2luZG93LHIuZ2V0U2VsZWN0aW9uJiYocj1yLmdldFNlbGVjdGlvbigpLEU9QS50ZXh0Q29udGVudC5sZW5ndGgsSz1NYXRoLm1pbihJLnN0YXJ0LEUpLEk9dm9pZCAwPT09SS5lbmQ/SzpNYXRoLm1pbihJLmVuZCxFKSwhci5leHRlbmQmJks+SSYmKEU9SSxJPUssSz1FKSxFPVpkKEEsSyksdWE9WmQoQSxJKSxFJiZ1YSYmKDEhPT1yLnJhbmdlQ291bnR8fHIuYW5jaG9yTm9kZSE9PUUubm9kZXx8ci5hbmNob3JPZmZzZXQhPT1cbkUub2Zmc2V0fHxyLmZvY3VzTm9kZSE9PXVhLm5vZGV8fHIuZm9jdXNPZmZzZXQhPT11YS5vZmZzZXQpJiYocD1wLmNyZWF0ZVJhbmdlKCkscC5zZXRTdGFydChFLm5vZGUsRS5vZmZzZXQpLHIucmVtb3ZlQWxsUmFuZ2VzKCksSz5JPyhyLmFkZFJhbmdlKHApLHIuZXh0ZW5kKHVhLm5vZGUsdWEub2Zmc2V0KSk6KHAuc2V0RW5kKHVhLm5vZGUsdWEub2Zmc2V0KSxyLmFkZFJhbmdlKHApKSkpKSk7cD1bXTtmb3Iocj1BO3I9ci5wYXJlbnROb2RlOykxPT09ci5ub2RlVHlwZSYmcC5wdXNoKHtlbGVtZW50OnIsbGVmdDpyLnNjcm9sbExlZnQsdG9wOnIuc2Nyb2xsVG9wfSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIEEuZm9jdXMmJkEuZm9jdXMoKTtmb3IoQT0wO0E8cC5sZW5ndGg7QSsrKXI9cFtBXSxyLmVsZW1lbnQuc2Nyb2xsTGVmdD1yLmxlZnQsci5lbGVtZW50LnNjcm9sbFRvcD1yLnRvcH1JZT1udWxsO1FkPSEhSGU7SGU9bnVsbDthLmN1cnJlbnQ9YztZPWU7ZG8gdHJ5e2ZvcihBPWQ7bnVsbCE9PVxuWTspe3ZhciAkYT1ZLmVmZmVjdFRhZztpZigkYSYzNil7dmFyIG5jPVkuYWx0ZXJuYXRlO3A9WTtyPUE7c3dpdGNoKHAudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmhpKE1nLE5nLHApO2JyZWFrO2Nhc2UgMTp2YXIgbWQ9cC5zdGF0ZU5vZGU7aWYocC5lZmZlY3RUYWcmNClpZihudWxsPT09bmMpbWQuY29tcG9uZW50RGlkTW91bnQoKTtlbHNle3ZhciBGaj1wLmVsZW1lbnRUeXBlPT09cC50eXBlP25jLm1lbW9pemVkUHJvcHM6QWYocC50eXBlLG5jLm1lbW9pemVkUHJvcHMpO21kLmNvbXBvbmVudERpZFVwZGF0ZShGaixuYy5tZW1vaXplZFN0YXRlLG1kLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlKX12YXIgWGg9cC51cGRhdGVRdWV1ZTtudWxsIT09WGgmJllmKHAsWGgsbWQscik7YnJlYWs7Y2FzZSAzOnZhciBZaD1wLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1ZaCl7Sz1udWxsO2lmKG51bGwhPT1wLmNoaWxkKXN3aXRjaChwLmNoaWxkLnRhZyl7Y2FzZSA1Oks9XG5wLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDE6Sz1wLmNoaWxkLnN0YXRlTm9kZX1ZZihwLFloLEsscil9YnJlYWs7Y2FzZSA1OnZhciBHaj1wLnN0YXRlTm9kZTtudWxsPT09bmMmJnAuZWZmZWN0VGFnJjQmJihyPUdqLEplKHAudHlwZSxwLm1lbW9pemVkUHJvcHMpJiZyLmZvY3VzKCkpO2JyZWFrO2Nhc2UgNjpicmVhaztjYXNlIDQ6YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDEzOmNhc2UgMTk6Y2FzZSAxNzpjYXNlIDIwOmJyZWFrO2RlZmF1bHQ6dGhyb3cgdChFcnJvcigxNjMpKTt9fWlmKCRhJjEyOCl7dmFyIG5kPVkucmVmO2lmKG51bGwhPT1uZCl7dmFyIFpoPVkuc3RhdGVOb2RlO3N3aXRjaChZLnRhZyl7Y2FzZSA1OnZhciBnZj1aaDticmVhaztkZWZhdWx0OmdmPVpofVwiZnVuY3Rpb25cIj09PXR5cGVvZiBuZD9uZChnZik6bmQuY3VycmVudD1nZn19JGEmNTEyJiYoUGk9ITApO1k9WS5uZXh0RWZmZWN0fX1jYXRjaCh6Yil7aWYobnVsbD09PVkpdGhyb3cgdChFcnJvcigzMzApKTtcbmZpKFksemIpO1k9WS5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1ZKTtZPW51bGw7bmYoKTtVPWZ9ZWxzZSBhLmN1cnJlbnQ9YztpZihQaSlQaT0hMSxRaT1hLFNpPWQsUmk9YjtlbHNlIGZvcihZPWU7bnVsbCE9PVk7KWI9WS5uZXh0RWZmZWN0LFkubmV4dEVmZmVjdD1udWxsLFk9YjtiPWEuZmlyc3RQZW5kaW5nVGltZTswIT09Yj8oJGE9Y2coKSwkYT16ZigkYSxiKSxaaShhLCRhLGIpKTp4aT1udWxsO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBwaiYmcGooYy5zdGF0ZU5vZGUsZCk7MTA3Mzc0MTgyMz09PWI/YT09PVZpP1VpKys6KFVpPTAsVmk9YSk6VWk9MDtpZih1aSl0aHJvdyB1aT0hMSxhPXZpLHZpPW51bGwsYTtpZigoVSZCaSkhPT1UKXJldHVybiBudWxsO08oKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGNqKCl7aWYobnVsbD09PVFpKXJldHVybiExO3ZhciBhPVFpLGI9U2ksYz1SaTtRaT1udWxsO1NpPTA7Umk9OTA7cmV0dXJuIHZmKDk3PGM/OTc6Yyxxai5iaW5kKG51bGwsYSxiKSl9ZnVuY3Rpb24gcWooYSl7aWYoKFUmKENpfERpKSkhPT1UKXRocm93IHQoRXJyb3IoMzMxKSk7dmFyIGI9VTtVfD1EaTtmb3IoYT1hLmN1cnJlbnQuZmlyc3RFZmZlY3Q7bnVsbCE9PWE7KXt0cnl7dmFyIGM9YTtpZigwIT09KGMuZWZmZWN0VGFnJjUxMikpc3dpdGNoKGMudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmhpKFBnLElnLGMpLGhpKElnLE9nLGMpfX1jYXRjaChkKXtpZihudWxsPT09YSl0aHJvdyB0KEVycm9yKDMzMCkpO2ZpKGEsZCl9Yz1hLm5leHRFZmZlY3Q7YS5uZXh0RWZmZWN0PW51bGw7YT1jfVU9YjtPKCk7cmV0dXJuITB9XG5mdW5jdGlvbiByaihhLGIsYyl7Yj1iaShjLGIpO2I9dGkoYSxiLDEwNzM3NDE4MjMpO1NmKGEsYik7YT1ZaShhLDEwNzM3NDE4MjMpO251bGwhPT1hJiZaaShhLDk5LDEwNzM3NDE4MjMpfWZ1bmN0aW9uIGZpKGEsYil7aWYoMz09PWEudGFnKXJqKGEsYSxiKTtlbHNlIGZvcih2YXIgYz1hLnJldHVybjtudWxsIT09Yzspe2lmKDM9PT1jLnRhZyl7cmooYyxhLGIpO2JyZWFrfWVsc2UgaWYoMT09PWMudGFnKXt2YXIgZD1jLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09eGl8fCF4aS5oYXMoZCkpKXthPWJpKGIsYSk7YT13aShjLGEsMTA3Mzc0MTgyMyk7U2YoYyxhKTtjPVlpKGMsMTA3Mzc0MTgyMyk7bnVsbCE9PWMmJlppKGMsOTksMTA3Mzc0MTgyMyk7YnJlYWt9fWM9Yy5yZXR1cm59fVxuZnVuY3Rpb24ga2ooYSxiLGMpe3ZhciBkPWEucGluZ0NhY2hlO251bGwhPT1kJiZkLmRlbGV0ZShiKTtKaT09PWEmJlc9PT1jP1g9PT1IaXx8WD09PUdpJiYxMDczNzQxODIzPT09S2kmJnNmKCktcGk8T2k/aGooYSxXKTpOaT0hMDphLmxhc3RQZW5kaW5nVGltZTxjfHwoYj1hLnBpbmdUaW1lLDAhPT1iJiZiPGN8fChhLnBpbmdUaW1lPWMsYS5maW5pc2hlZEV4cGlyYXRpb25UaW1lPT09YyYmKGEuZmluaXNoZWRFeHBpcmF0aW9uVGltZT0wLGEuZmluaXNoZWRXb3JrPW51bGwpLGI9Y2coKSxiPXpmKGIsYyksWmkoYSxiLGMpKSl9ZnVuY3Rpb24gcmkoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtudWxsIT09YyYmYy5kZWxldGUoYik7Yz1jZygpO2I9ZGcoYyxhLG51bGwpO2M9emYoYyxiKTthPVlpKGEsYik7bnVsbCE9PWEmJlppKGEsYyxiKX12YXIgbWo9dm9pZCAwO1xubWo9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWIuZXhwaXJhdGlvblRpbWU7aWYobnVsbCE9PWEpe3ZhciBlPWIucGVuZGluZ1Byb3BzO2lmKGEubWVtb2l6ZWRQcm9wcyE9PWV8fE0uY3VycmVudClMZj0hMDtlbHNlIGlmKGQ8Yyl7TGY9ITE7c3dpdGNoKGIudGFnKXtjYXNlIDM6TmgoYik7Q2goKTticmVhaztjYXNlIDU6Q2coYik7aWYoYi5tb2RlJjQmJjEhPT1jJiZlLmhpZGRlbilyZXR1cm4gYi5leHBpcmF0aW9uVGltZT1iLmNoaWxkRXhwaXJhdGlvblRpbWU9MSxudWxsO2JyZWFrO2Nhc2UgMTpOKGIudHlwZSkmJlhlKGIpO2JyZWFrO2Nhc2UgNDpBZyhiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO2JyZWFrO2Nhc2UgMTA6SGYoYixiLm1lbW9pemVkUHJvcHMudmFsdWUpO2JyZWFrO2Nhc2UgMTM6aWYobnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSl7ZD1iLmNoaWxkLmNoaWxkRXhwaXJhdGlvblRpbWU7aWYoMCE9PWQmJmQ+PWMpcmV0dXJuIFBoKGEsYixjKTtKKFAsUC5jdXJyZW50JlxuRWcsYik7Yj1GaChhLGIsYyk7cmV0dXJuIG51bGwhPT1iP2Iuc2libGluZzpudWxsfUooUCxQLmN1cnJlbnQmRWcsYik7YnJlYWs7Y2FzZSAxOTpkPWIuY2hpbGRFeHBpcmF0aW9uVGltZT49YztpZigwIT09KGEuZWZmZWN0VGFnJjY0KSl7aWYoZClyZXR1cm4gUmgoYSxiLGMpO2IuZWZmZWN0VGFnfD02NH1lPWIubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZSYmKGUucmVuZGVyaW5nPW51bGwsZS50YWlsPW51bGwpO0ooUCxQLmN1cnJlbnQsYik7aWYoIWQpcmV0dXJuIG51bGx9cmV0dXJuIEZoKGEsYixjKX19ZWxzZSBMZj0hMTtiLmV4cGlyYXRpb25UaW1lPTA7c3dpdGNoKGIudGFnKXtjYXNlIDI6ZD1iLnR5cGU7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5lZmZlY3RUYWd8PTIpO2E9Yi5wZW5kaW5nUHJvcHM7ZT1TZShiLEwuY3VycmVudCk7S2YoYixjKTtlPWRoKG51bGwsYixkLGEsZSxjKTtiLmVmZmVjdFRhZ3w9MTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGUmJlxubnVsbCE9PWUmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLnJlbmRlciYmdm9pZCAwPT09ZS4kJHR5cGVvZil7Yi50YWc9MTtpaCgpO2lmKE4oZCkpe3ZhciBmPSEwO1hlKGIpfWVsc2UgZj0hMTtiLm1lbW9pemVkU3RhdGU9bnVsbCE9PWUuc3RhdGUmJnZvaWQgMCE9PWUuc3RhdGU/ZS5zdGF0ZTpudWxsO3ZhciBoPWQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBoJiZiZyhiLGQsaCxhKTtlLnVwZGF0ZXI9Zmc7Yi5zdGF0ZU5vZGU9ZTtlLl9yZWFjdEludGVybmFsRmliZXI9YjtqZyhiLGQsYSxjKTtiPU1oKG51bGwsYixkLCEwLGYsYyl9ZWxzZSBiLnRhZz0wLFMobnVsbCxiLGUsYyksYj1iLmNoaWxkO3JldHVybiBiO2Nhc2UgMTY6ZT1iLmVsZW1lbnRUeXBlO251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKTthPWIucGVuZGluZ1Byb3BzO2U9QmYoZSk7Yi50eXBlPWU7Zj1iLnRhZz1zaihlKTtcbmE9QWYoZSxhKTtzd2l0Y2goZil7Y2FzZSAwOmI9SmgobnVsbCxiLGUsYSxjKTticmVhaztjYXNlIDE6Yj1MaChudWxsLGIsZSxhLGMpO2JyZWFrO2Nhc2UgMTE6Yj1FaChudWxsLGIsZSxhLGMpO2JyZWFrO2Nhc2UgMTQ6Yj1HaChudWxsLGIsZSxBZihlLnR5cGUsYSksZCxjKTticmVhaztkZWZhdWx0OnRocm93IHQoRXJyb3IoMzA2KSxlLFwiXCIpO31yZXR1cm4gYjtjYXNlIDA6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkFmKGQsZSksSmgoYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkFmKGQsZSksTGgoYSxiLGQsZSxjKTtjYXNlIDM6TmgoYik7ZD1iLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT1kKXRocm93IHQoRXJyb3IoMjgyKSk7ZT1iLm1lbW9pemVkU3RhdGU7ZT1udWxsIT09ZT9lLmVsZW1lbnQ6bnVsbDtXZihiLGQsYi5wZW5kaW5nUHJvcHMsXG5udWxsLGMpO2Q9Yi5tZW1vaXplZFN0YXRlLmVsZW1lbnQ7aWYoZD09PWUpQ2goKSxiPUZoKGEsYixjKTtlbHNle2U9Yi5zdGF0ZU5vZGU7aWYoZT0obnVsbD09PWF8fG51bGw9PT1hLmNoaWxkKSYmZS5oeWRyYXRlKXVoPU5lKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8uZmlyc3RDaGlsZCksdGg9YixlPXZoPSEwO2U/KGIuZWZmZWN0VGFnfD0yLGIuY2hpbGQ9dWcoYixudWxsLGQsYykpOihTKGEsYixkLGMpLENoKCkpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDU6cmV0dXJuIENnKGIpLG51bGw9PT1hJiZ6aChiKSxkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGY9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOm51bGwsaD1lLmNoaWxkcmVuLEtlKGQsZSk/aD1udWxsOm51bGwhPT1mJiZLZShkLGYpJiYoYi5lZmZlY3RUYWd8PTE2KSxLaChhLGIpLGIubW9kZSY0JiYxIT09YyYmZS5oaWRkZW4/KGIuZXhwaXJhdGlvblRpbWU9Yi5jaGlsZEV4cGlyYXRpb25UaW1lPTEsYj1udWxsKTpcbihTKGEsYixoLGMpLGI9Yi5jaGlsZCksYjtjYXNlIDY6cmV0dXJuIG51bGw9PT1hJiZ6aChiKSxudWxsO2Nhc2UgMTM6cmV0dXJuIFBoKGEsYixjKTtjYXNlIDQ6cmV0dXJuIEFnKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksZD1iLnBlbmRpbmdQcm9wcyxudWxsPT09YT9iLmNoaWxkPXRnKGIsbnVsbCxkLGMpOlMoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDExOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpBZihkLGUpLEVoKGEsYixkLGUsYyk7Y2FzZSA3OnJldHVybiBTKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gUyhhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBTKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixjKSxiLmNoaWxkO2Nhc2UgMTA6YTp7ZD1iLnR5cGUuX2NvbnRleHQ7ZT1iLnBlbmRpbmdQcm9wcztoPWIubWVtb2l6ZWRQcm9wcztcbmY9ZS52YWx1ZTtIZihiLGYpO2lmKG51bGwhPT1oKXt2YXIgZz1oLnZhbHVlO2Y9aGQoZyxmKT8wOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHM/ZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHMoZyxmKToxMDczNzQxODIzKXwwO2lmKDA9PT1mKXtpZihoLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIU0uY3VycmVudCl7Yj1GaChhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoZz1iLmNoaWxkLG51bGwhPT1nJiYoZy5yZXR1cm49Yik7bnVsbCE9PWc7KXt2YXIgaz1nLmRlcGVuZGVuY2llcztpZihudWxsIT09ayl7aD1nLmNoaWxkO2Zvcih2YXIgbD1rLmZpcnN0Q29udGV4dDtudWxsIT09bDspe2lmKGwuY29udGV4dD09PWQmJjAhPT0obC5vYnNlcnZlZEJpdHMmZikpezE9PT1nLnRhZyYmKGw9UWYoYyxudWxsKSxsLnRhZz0yLFNmKGcsbCkpO2cuZXhwaXJhdGlvblRpbWU8YyYmKGcuZXhwaXJhdGlvblRpbWU9Yyk7bD1nLmFsdGVybmF0ZTtudWxsIT09bCYmbC5leHBpcmF0aW9uVGltZTxcbmMmJihsLmV4cGlyYXRpb25UaW1lPWMpO0pmKGcucmV0dXJuLGMpO2suZXhwaXJhdGlvblRpbWU8YyYmKGsuZXhwaXJhdGlvblRpbWU9Yyk7YnJlYWt9bD1sLm5leHR9fWVsc2UgaD0xMD09PWcudGFnP2cudHlwZT09PWIudHlwZT9udWxsOmcuY2hpbGQ6Zy5jaGlsZDtpZihudWxsIT09aCloLnJldHVybj1nO2Vsc2UgZm9yKGg9ZztudWxsIT09aDspe2lmKGg9PT1iKXtoPW51bGw7YnJlYWt9Zz1oLnNpYmxpbmc7aWYobnVsbCE9PWcpe2cucmV0dXJuPWgucmV0dXJuO2g9ZzticmVha31oPWgucmV0dXJufWc9aH19UyhhLGIsZS5jaGlsZHJlbixjKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA5OnJldHVybiBlPWIudHlwZSxmPWIucGVuZGluZ1Byb3BzLGQ9Zi5jaGlsZHJlbixLZihiLGMpLGU9TWYoZSxmLnVuc3RhYmxlX29ic2VydmVkQml0cyksZD1kKGUpLGIuZWZmZWN0VGFnfD0xLFMoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDE0OnJldHVybiBlPWIudHlwZSxmPUFmKGUsYi5wZW5kaW5nUHJvcHMpLFxuZj1BZihlLnR5cGUsZiksR2goYSxiLGUsZixkLGMpO2Nhc2UgMTU6cmV0dXJuIEloKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsZCxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpBZihkLGUpLG51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKSxiLnRhZz0xLE4oZCk/KGE9ITAsWGUoYikpOmE9ITEsS2YoYixjKSxoZyhiLGQsZSxjKSxqZyhiLGQsZSxjKSxNaChudWxsLGIsZCwhMCxhLGMpO2Nhc2UgMTk6cmV0dXJuIFJoKGEsYixjKX10aHJvdyB0KEVycm9yKDE1NikpO307dmFyIHBqPW51bGwsamk9bnVsbDtcbmZ1bmN0aW9uIHRqKGEpe2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKXJldHVybiExO3ZhciBiPV9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihiLmlzRGlzYWJsZWR8fCFiLnN1cHBvcnRzRmliZXIpcmV0dXJuITA7dHJ5e3ZhciBjPWIuaW5qZWN0KGEpO3BqPWZ1bmN0aW9uKGEpe3RyeXtiLm9uQ29tbWl0RmliZXJSb290KGMsYSx2b2lkIDAsNjQ9PT0oYS5jdXJyZW50LmVmZmVjdFRhZyY2NCkpfWNhdGNoKGUpe319O2ppPWZ1bmN0aW9uKGEpe3RyeXtiLm9uQ29tbWl0RmliZXJVbm1vdW50KGMsYSl9Y2F0Y2goZSl7fX19Y2F0Y2goZCl7fXJldHVybiEwfVxuZnVuY3Rpb24gdWooYSxiLGMsZCl7dGhpcy50YWc9YTt0aGlzLmtleT1jO3RoaXMuc2libGluZz10aGlzLmNoaWxkPXRoaXMucmV0dXJuPXRoaXMuc3RhdGVOb2RlPXRoaXMudHlwZT10aGlzLmVsZW1lbnRUeXBlPW51bGw7dGhpcy5pbmRleD0wO3RoaXMucmVmPW51bGw7dGhpcy5wZW5kaW5nUHJvcHM9Yjt0aGlzLmRlcGVuZGVuY2llcz10aGlzLm1lbW9pemVkU3RhdGU9dGhpcy51cGRhdGVRdWV1ZT10aGlzLm1lbW9pemVkUHJvcHM9bnVsbDt0aGlzLm1vZGU9ZDt0aGlzLmVmZmVjdFRhZz0wO3RoaXMubGFzdEVmZmVjdD10aGlzLmZpcnN0RWZmZWN0PXRoaXMubmV4dEVmZmVjdD1udWxsO3RoaXMuY2hpbGRFeHBpcmF0aW9uVGltZT10aGlzLmV4cGlyYXRpb25UaW1lPTA7dGhpcy5hbHRlcm5hdGU9bnVsbH1mdW5jdGlvbiB4aChhLGIsYyxkKXtyZXR1cm4gbmV3IHVqKGEsYixjLGQpfVxuZnVuY3Rpb24gSGgoYSl7YT1hLnByb3RvdHlwZTtyZXR1cm4hKCFhfHwhYS5pc1JlYWN0Q29tcG9uZW50KX1mdW5jdGlvbiBzaihhKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gSGgoYSk/MTowO2lmKHZvaWQgMCE9PWEmJm51bGwhPT1hKXthPWEuJCR0eXBlb2Y7aWYoYT09PWdjKXJldHVybiAxMTtpZihhPT09amMpcmV0dXJuIDE0fXJldHVybiAyfVxuZnVuY3Rpb24gb2coYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsPT09Yz8oYz14aChhLnRhZyxiLGEua2V5LGEubW9kZSksYy5lbGVtZW50VHlwZT1hLmVsZW1lbnRUeXBlLGMudHlwZT1hLnR5cGUsYy5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGUsYy5hbHRlcm5hdGU9YSxhLmFsdGVybmF0ZT1jKTooYy5wZW5kaW5nUHJvcHM9YixjLmVmZmVjdFRhZz0wLGMubmV4dEVmZmVjdD1udWxsLGMuZmlyc3RFZmZlY3Q9bnVsbCxjLmxhc3RFZmZlY3Q9bnVsbCk7Yy5jaGlsZEV4cGlyYXRpb25UaW1lPWEuY2hpbGRFeHBpcmF0aW9uVGltZTtjLmV4cGlyYXRpb25UaW1lPWEuZXhwaXJhdGlvblRpbWU7Yy5jaGlsZD1hLmNoaWxkO2MubWVtb2l6ZWRQcm9wcz1hLm1lbW9pemVkUHJvcHM7Yy5tZW1vaXplZFN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtjLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWU7Yj1hLmRlcGVuZGVuY2llcztjLmRlcGVuZGVuY2llcz1udWxsPT09Yj9udWxsOntleHBpcmF0aW9uVGltZTpiLmV4cGlyYXRpb25UaW1lLFxuZmlyc3RDb250ZXh0OmIuZmlyc3RDb250ZXh0LHJlc3BvbmRlcnM6Yi5yZXNwb25kZXJzfTtjLnNpYmxpbmc9YS5zaWJsaW5nO2MuaW5kZXg9YS5pbmRleDtjLnJlZj1hLnJlZjtyZXR1cm4gY31cbmZ1bmN0aW9uIHFnKGEsYixjLGQsZSxmKXt2YXIgaD0yO2Q9YTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlIaChhKSYmKGg9MSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpaD01O2Vsc2UgYTpzd2l0Y2goYSl7Y2FzZSBhYzpyZXR1cm4gc2coYy5jaGlsZHJlbixlLGYsYik7Y2FzZSBmYzpoPTg7ZXw9NzticmVhaztjYXNlIGJjOmg9ODtlfD0xO2JyZWFrO2Nhc2UgY2M6cmV0dXJuIGE9eGgoMTIsYyxiLGV8OCksYS5lbGVtZW50VHlwZT1jYyxhLnR5cGU9Y2MsYS5leHBpcmF0aW9uVGltZT1mLGE7Y2FzZSBoYzpyZXR1cm4gYT14aCgxMyxjLGIsZSksYS50eXBlPWhjLGEuZWxlbWVudFR5cGU9aGMsYS5leHBpcmF0aW9uVGltZT1mLGE7Y2FzZSBpYzpyZXR1cm4gYT14aCgxOSxjLGIsZSksYS5lbGVtZW50VHlwZT1pYyxhLmV4cGlyYXRpb25UaW1lPWYsYTtkZWZhdWx0OmlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgZGM6aD1cbjEwO2JyZWFrIGE7Y2FzZSBlYzpoPTk7YnJlYWsgYTtjYXNlIGdjOmg9MTE7YnJlYWsgYTtjYXNlIGpjOmg9MTQ7YnJlYWsgYTtjYXNlIGtjOmg9MTY7ZD1udWxsO2JyZWFrIGF9dGhyb3cgdChFcnJvcigxMzApLG51bGw9PWE/YTp0eXBlb2YgYSxcIlwiKTt9Yj14aChoLGMsYixlKTtiLmVsZW1lbnRUeXBlPWE7Yi50eXBlPWQ7Yi5leHBpcmF0aW9uVGltZT1mO3JldHVybiBifWZ1bmN0aW9uIHNnKGEsYixjLGQpe2E9eGgoNyxhLGQsYik7YS5leHBpcmF0aW9uVGltZT1jO3JldHVybiBhfWZ1bmN0aW9uIHBnKGEsYixjKXthPXhoKDYsYSxudWxsLGIpO2EuZXhwaXJhdGlvblRpbWU9YztyZXR1cm4gYX1cbmZ1bmN0aW9uIHJnKGEsYixjKXtiPXhoKDQsbnVsbCE9PWEuY2hpbGRyZW4/YS5jaGlsZHJlbjpbXSxhLmtleSxiKTtiLmV4cGlyYXRpb25UaW1lPWM7Yi5zdGF0ZU5vZGU9e2NvbnRhaW5lckluZm86YS5jb250YWluZXJJbmZvLHBlbmRpbmdDaGlsZHJlbjpudWxsLGltcGxlbWVudGF0aW9uOmEuaW1wbGVtZW50YXRpb259O3JldHVybiBifVxuZnVuY3Rpb24gdmooYSxiLGMpe3RoaXMudGFnPWI7dGhpcy5jdXJyZW50PW51bGw7dGhpcy5jb250YWluZXJJbmZvPWE7dGhpcy5waW5nQ2FjaGU9dGhpcy5wZW5kaW5nQ2hpbGRyZW49bnVsbDt0aGlzLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9MDt0aGlzLmZpbmlzaGVkV29yaz1udWxsO3RoaXMudGltZW91dEhhbmRsZT0tMTt0aGlzLnBlbmRpbmdDb250ZXh0PXRoaXMuY29udGV4dD1udWxsO3RoaXMuaHlkcmF0ZT1jO3RoaXMuY2FsbGJhY2tOb2RlPXRoaXMuZmlyc3RCYXRjaD1udWxsO3RoaXMucGluZ1RpbWU9dGhpcy5sYXN0UGVuZGluZ1RpbWU9dGhpcy5maXJzdFBlbmRpbmdUaW1lPXRoaXMuY2FsbGJhY2tFeHBpcmF0aW9uVGltZT0wfWZ1bmN0aW9uIHdqKGEsYixjKXthPW5ldyB2aihhLGIsYyk7Yj14aCgzLG51bGwsbnVsbCwyPT09Yj83OjE9PT1iPzM6MCk7YS5jdXJyZW50PWI7cmV0dXJuIGIuc3RhdGVOb2RlPWF9XG5mdW5jdGlvbiB4aihhLGIsYyxkLGUsZil7dmFyIGg9Yi5jdXJyZW50O2E6aWYoYyl7Yz1jLl9yZWFjdEludGVybmFsRmliZXI7Yjp7aWYoMiE9PWxkKGMpfHwxIT09Yy50YWcpdGhyb3cgdChFcnJvcigxNzApKTt2YXIgZz1jO2Rve3N3aXRjaChnLnRhZyl7Y2FzZSAzOmc9Zy5zdGF0ZU5vZGUuY29udGV4dDticmVhayBiO2Nhc2UgMTppZihOKGcudHlwZSkpe2c9Zy5zdGF0ZU5vZGUuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ7YnJlYWsgYn19Zz1nLnJldHVybn13aGlsZShudWxsIT09Zyk7dGhyb3cgdChFcnJvcigxNzEpKTt9aWYoMT09PWMudGFnKXt2YXIgaz1jLnR5cGU7aWYoTihrKSl7Yz1XZShjLGssZyk7YnJlYWsgYX19Yz1nfWVsc2UgYz1RZTtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPWY7ZT1RZihkLGUpO2UucGF5bG9hZD17ZWxlbWVudDphfTtiPXZvaWQgMD09PWI/bnVsbDpiO251bGwhPT1iJiZcbihlLmNhbGxiYWNrPWIpO1NmKGgsZSk7ZWcoaCxkKTtyZXR1cm4gZH1mdW5jdGlvbiB5aihhLGIsYyxkKXt2YXIgZT1iLmN1cnJlbnQsZj1jZygpLGg9JGYuc3VzcGVuc2U7ZT1kZyhmLGUsaCk7cmV0dXJuIHhqKGEsYixjLGUsaCxkKX1mdW5jdGlvbiB6aihhKXthPWEuY3VycmVudDtpZighYS5jaGlsZClyZXR1cm4gbnVsbDtzd2l0Y2goYS5jaGlsZC50YWcpe2Nhc2UgNTpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGU7ZGVmYXVsdDpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGV9fWZ1bmN0aW9uIEFqKGEsYixjKXt2YXIgZD0zPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtyZXR1cm57JCR0eXBlb2Y6JGIsa2V5Om51bGw9PWQ/bnVsbDpcIlwiK2QsY2hpbGRyZW46YSxjb250YWluZXJJbmZvOmIsaW1wbGVtZW50YXRpb246Y319XG5EYj1mdW5jdGlvbihhLGIsYyl7c3dpdGNoKGIpe2Nhc2UgXCJpbnB1dFwiOkVjKGEsYyk7Yj1jLm5hbWU7aWYoXCJyYWRpb1wiPT09Yy50eXBlJiZudWxsIT1iKXtmb3IoYz1hO2MucGFyZW50Tm9kZTspYz1jLnBhcmVudE5vZGU7Yz1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVwiK0pTT04uc3RyaW5naWZ5KFwiXCIrYikrJ11bdHlwZT1cInJhZGlvXCJdJyk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTtpZihkIT09YSYmZC5mb3JtPT09YS5mb3JtKXt2YXIgZT1LYShkKTtpZighZSl0aHJvdyB0KEVycm9yKDkwKSk7V2IoZCk7RWMoZCxlKX19fWJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOnBlKGEsYyk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmI9Yy52YWx1ZSxudWxsIT1iJiZtZShhLCEhYy5tdWx0aXBsZSxiLCExKX19O1xuZnVuY3Rpb24gQmooYSl7dmFyIGI9MTA3Mzc0MTgyMS0yNSooKCgxMDczNzQxODIxLWNnKCkrNTAwKS8yNXwwKSsxKTtiPD1YaSYmLS1iO3RoaXMuX2V4cGlyYXRpb25UaW1lPVhpPWI7dGhpcy5fcm9vdD1hO3RoaXMuX2NhbGxiYWNrcz10aGlzLl9uZXh0PW51bGw7dGhpcy5faGFzQ2hpbGRyZW49dGhpcy5fZGlkQ29tcGxldGU9ITE7dGhpcy5fY2hpbGRyZW49bnVsbDt0aGlzLl9kZWZlcj0hMH1Cai5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGEpe2lmKCF0aGlzLl9kZWZlcil0aHJvdyB0KEVycm9yKDI1MCkpO3RoaXMuX2hhc0NoaWxkcmVuPSEwO3RoaXMuX2NoaWxkcmVuPWE7dmFyIGI9dGhpcy5fcm9vdC5faW50ZXJuYWxSb290LGM9dGhpcy5fZXhwaXJhdGlvblRpbWUsZD1uZXcgQ2o7eGooYSxiLG51bGwsYyxudWxsLGQuX29uQ29tbWl0KTtyZXR1cm4gZH07XG5Cai5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihhKXtpZih0aGlzLl9kaWRDb21wbGV0ZSlhKCk7ZWxzZXt2YXIgYj10aGlzLl9jYWxsYmFja3M7bnVsbD09PWImJihiPXRoaXMuX2NhbGxiYWNrcz1bXSk7Yi5wdXNoKGEpfX07XG5Cai5wcm90b3R5cGUuY29tbWl0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fcm9vdC5faW50ZXJuYWxSb290LGI9YS5maXJzdEJhdGNoO2lmKCF0aGlzLl9kZWZlcnx8bnVsbD09PWIpdGhyb3cgdChFcnJvcigyNTEpKTtpZih0aGlzLl9oYXNDaGlsZHJlbil7dmFyIGM9dGhpcy5fZXhwaXJhdGlvblRpbWU7aWYoYiE9PXRoaXMpe3RoaXMuX2hhc0NoaWxkcmVuJiYoYz10aGlzLl9leHBpcmF0aW9uVGltZT1iLl9leHBpcmF0aW9uVGltZSx0aGlzLnJlbmRlcih0aGlzLl9jaGlsZHJlbikpO2Zvcih2YXIgZD1udWxsLGU9YjtlIT09dGhpczspZD1lLGU9ZS5fbmV4dDtpZihudWxsPT09ZCl0aHJvdyB0KEVycm9yKDI1MSkpO2QuX25leHQ9ZS5fbmV4dDt0aGlzLl9uZXh0PWI7YS5maXJzdEJhdGNoPXRoaXN9dGhpcy5fZGVmZXI9ITE7Yj1jO2lmKChVJihDaXxEaSkpIT09VCl0aHJvdyB0KEVycm9yKDI1MykpO3hmKFouYmluZChudWxsLGEsYikpO08oKTtiPXRoaXMuX25leHQ7dGhpcy5fbmV4dD1cbm51bGw7Yj1hLmZpcnN0QmF0Y2g9YjtudWxsIT09YiYmYi5faGFzQ2hpbGRyZW4mJmIucmVuZGVyKGIuX2NoaWxkcmVuKX1lbHNlIHRoaXMuX25leHQ9bnVsbCx0aGlzLl9kZWZlcj0hMX07QmoucHJvdG90eXBlLl9vbkNvbXBsZXRlPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2RpZENvbXBsZXRlKXt0aGlzLl9kaWRDb21wbGV0ZT0hMDt2YXIgYT10aGlzLl9jYWxsYmFja3M7aWYobnVsbCE9PWEpZm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspKDAsYVtiXSkoKX19O2Z1bmN0aW9uIENqKCl7dGhpcy5fY2FsbGJhY2tzPW51bGw7dGhpcy5fZGlkQ29tbWl0PSExO3RoaXMuX29uQ29tbWl0PXRoaXMuX29uQ29tbWl0LmJpbmQodGhpcyl9Q2oucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSl7aWYodGhpcy5fZGlkQ29tbWl0KWEoKTtlbHNle3ZhciBiPXRoaXMuX2NhbGxiYWNrcztudWxsPT09YiYmKGI9dGhpcy5fY2FsbGJhY2tzPVtdKTtiLnB1c2goYSl9fTtcbkNqLnByb3RvdHlwZS5fb25Db21taXQ9ZnVuY3Rpb24oKXtpZighdGhpcy5fZGlkQ29tbWl0KXt0aGlzLl9kaWRDb21taXQ9ITA7dmFyIGE9dGhpcy5fY2FsbGJhY2tzO2lmKG51bGwhPT1hKWZvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjKXRocm93IHQoRXJyb3IoMTkxKSxjKTtjKCl9fX07ZnVuY3Rpb24gRGooYSxiLGMpe3RoaXMuX2ludGVybmFsUm9vdD13aihhLGIsYyl9ZnVuY3Rpb24gRWooYSxiKXt0aGlzLl9pbnRlcm5hbFJvb3Q9d2ooYSwyLGIpfUVqLnByb3RvdHlwZS5yZW5kZXI9RGoucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuX2ludGVybmFsUm9vdCxkPW5ldyBDajtiPXZvaWQgMD09PWI/bnVsbDpiO251bGwhPT1iJiZkLnRoZW4oYik7eWooYSxjLG51bGwsZC5fb25Db21taXQpO3JldHVybiBkfTtcbkVqLnByb3RvdHlwZS51bm1vdW50PURqLnByb3RvdHlwZS51bm1vdW50PWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuX2ludGVybmFsUm9vdCxjPW5ldyBDajthPXZvaWQgMD09PWE/bnVsbDphO251bGwhPT1hJiZjLnRoZW4oYSk7eWoobnVsbCxiLG51bGwsYy5fb25Db21taXQpO3JldHVybiBjfTtFai5wcm90b3R5cGUuY3JlYXRlQmF0Y2g9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgQmoodGhpcyksYj1hLl9leHBpcmF0aW9uVGltZSxjPXRoaXMuX2ludGVybmFsUm9vdCxkPWMuZmlyc3RCYXRjaDtpZihudWxsPT09ZCljLmZpcnN0QmF0Y2g9YSxhLl9uZXh0PW51bGw7ZWxzZXtmb3IoYz1udWxsO251bGwhPT1kJiZkLl9leHBpcmF0aW9uVGltZT49YjspYz1kLGQ9ZC5fbmV4dDthLl9uZXh0PWQ7bnVsbCE9PWMmJihjLl9uZXh0PWEpfXJldHVybiBhfTtcbmZ1bmN0aW9uIEhqKGEpe3JldHVybiEoIWF8fDEhPT1hLm5vZGVUeXBlJiY5IT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlJiYoOCE9PWEubm9kZVR5cGV8fFwiIHJlYWN0LW1vdW50LXBvaW50LXVuc3RhYmxlIFwiIT09YS5ub2RlVmFsdWUpKX1KYj1lajtLYj1majtMYj1hajtNYj1mdW5jdGlvbihhLGIpe3ZhciBjPVU7VXw9Mjt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtVPWMsVT09PVQmJk8oKX19O2Z1bmN0aW9uIElqKGEsYil7Ynx8KGI9YT85PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLmZpcnN0Q2hpbGQ6bnVsbCxiPSEoIWJ8fDEhPT1iLm5vZGVUeXBlfHwhYi5oYXNBdHRyaWJ1dGUoXCJkYXRhLXJlYWN0cm9vdFwiKSkpO2lmKCFiKWZvcih2YXIgYztjPWEubGFzdENoaWxkOylhLnJlbW92ZUNoaWxkKGMpO3JldHVybiBuZXcgRGooYSwwLGIpfVxuZnVuY3Rpb24gSmooYSxiLGMsZCxlKXt2YXIgZj1jLl9yZWFjdFJvb3RDb250YWluZXIsaD12b2lkIDA7aWYoZil7aD1mLl9pbnRlcm5hbFJvb3Q7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBnPWU7ZT1mdW5jdGlvbigpe3ZhciBhPXpqKGgpO2cuY2FsbChhKX19eWooYixoLGEsZSl9ZWxzZXtmPWMuX3JlYWN0Um9vdENvbnRhaW5lcj1JaihjLGQpO2g9Zi5faW50ZXJuYWxSb290O2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaz1lO2U9ZnVuY3Rpb24oKXt2YXIgYT16aihoKTtrLmNhbGwoYSl9fWdqKGZ1bmN0aW9uKCl7eWooYixoLGEsZSl9KX1yZXR1cm4gemooaCl9ZnVuY3Rpb24gS2ooYSxiKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtpZighSGooYikpdGhyb3cgdChFcnJvcigyMDApKTtyZXR1cm4gQWooYSxiLG51bGwsYyl9XG52YXIgTmo9e2NyZWF0ZVBvcnRhbDpLaixmaW5kRE9NTm9kZTpmdW5jdGlvbihhKXtpZihudWxsPT1hKWE9bnVsbDtlbHNlIGlmKDEhPT1hLm5vZGVUeXBlKXt2YXIgYj1hLl9yZWFjdEludGVybmFsRmliZXI7aWYodm9pZCAwPT09Yil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEucmVuZGVyKXRocm93IHQoRXJyb3IoMTg4KSk7dGhyb3cgdChFcnJvcigyNjgpLE9iamVjdC5rZXlzKGEpKTt9YT1xZChiKTthPW51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGV9cmV0dXJuIGF9LGh5ZHJhdGU6ZnVuY3Rpb24oYSxiLGMpe2lmKCFIaihiKSl0aHJvdyB0KEVycm9yKDIwMCkpO3JldHVybiBKaihudWxsLGEsYiwhMCxjKX0scmVuZGVyOmZ1bmN0aW9uKGEsYixjKXtpZighSGooYikpdGhyb3cgdChFcnJvcigyMDApKTtyZXR1cm4gSmoobnVsbCxhLGIsITEsYyl9LHVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyOmZ1bmN0aW9uKGEsYixjLGQpe2lmKCFIaihjKSl0aHJvdyB0KEVycm9yKDIwMCkpO1xuaWYobnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbEZpYmVyKXRocm93IHQoRXJyb3IoMzgpKTtyZXR1cm4gSmooYSxiLGMsITEsZCl9LHVubW91bnRDb21wb25lbnRBdE5vZGU6ZnVuY3Rpb24oYSl7aWYoIUhqKGEpKXRocm93IHQoRXJyb3IoNDApKTtyZXR1cm4gYS5fcmVhY3RSb290Q29udGFpbmVyPyhnaihmdW5jdGlvbigpe0pqKG51bGwsbnVsbCxhLCExLGZ1bmN0aW9uKCl7YS5fcmVhY3RSb290Q29udGFpbmVyPW51bGx9KX0pLCEwKTohMX0sdW5zdGFibGVfY3JlYXRlUG9ydGFsOmZ1bmN0aW9uKCl7cmV0dXJuIEtqLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpfSx1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczplaix1bnN0YWJsZV9pbnRlcmFjdGl2ZVVwZGF0ZXM6ZnVuY3Rpb24oYSxiLGMsZCl7YWooKTtyZXR1cm4gZmooYSxiLGMsZCl9LHVuc3RhYmxlX2Rpc2NyZXRlVXBkYXRlczpmaix1bnN0YWJsZV9mbHVzaERpc2NyZXRlVXBkYXRlczphaixmbHVzaFN5bmM6ZnVuY3Rpb24oYSxcbmIpe2lmKChVJihDaXxEaSkpIT09VCl0aHJvdyB0KEVycm9yKDE4NykpO3ZhciBjPVU7VXw9MTt0cnl7cmV0dXJuIHZmKDk5LGEuYmluZChudWxsLGIpKX1maW5hbGx5e1U9YyxPKCl9fSx1bnN0YWJsZV9jcmVhdGVSb290OkxqLHVuc3RhYmxlX2NyZWF0ZVN5bmNSb290Ok1qLHVuc3RhYmxlX2ZsdXNoQ29udHJvbGxlZDpmdW5jdGlvbihhKXt2YXIgYj1VO1V8PTE7dHJ5e3ZmKDk5LGEpfWZpbmFsbHl7VT1iLFU9PT1UJiZPKCl9fSxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDp7RXZlbnRzOltJYSxKYSxLYSxDYS5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWUsZmEsUWEsZnVuY3Rpb24oYSl7eWEoYSxQYSl9LEhiLEliLFVkLEJhLGNqLHtjdXJyZW50OiExfV19fTtcbmZ1bmN0aW9uIExqKGEsYil7aWYoIUhqKGEpKXRocm93IHQoRXJyb3IoMjk5KSxcInVuc3RhYmxlX2NyZWF0ZVJvb3RcIik7cmV0dXJuIG5ldyBFaihhLG51bGwhPWImJiEwPT09Yi5oeWRyYXRlKX1mdW5jdGlvbiBNaihhLGIpe2lmKCFIaihhKSl0aHJvdyB0KEVycm9yKDI5OSksXCJ1bnN0YWJsZV9jcmVhdGVSb290XCIpO3JldHVybiBuZXcgRGooYSwxLG51bGwhPWImJiEwPT09Yi5oeWRyYXRlKX1cbihmdW5jdGlvbihhKXt2YXIgYj1hLmZpbmRGaWJlckJ5SG9zdEluc3RhbmNlO3JldHVybiB0aihtKHt9LGEse292ZXJyaWRlSG9va1N0YXRlOm51bGwsb3ZlcnJpZGVQcm9wczpudWxsLHNldFN1c3BlbnNlSGFuZGxlcjpudWxsLHNjaGVkdWxlVXBkYXRlOm51bGwsY3VycmVudERpc3BhdGNoZXJSZWY6WGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixmaW5kSG9zdEluc3RhbmNlQnlGaWJlcjpmdW5jdGlvbihhKXthPXFkKGEpO3JldHVybiBudWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfSxmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTpmdW5jdGlvbihhKXtyZXR1cm4gYj9iKGEpOm51bGx9LGZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaDpudWxsLHNjaGVkdWxlUmVmcmVzaDpudWxsLHNjaGVkdWxlUm9vdDpudWxsLHNldFJlZnJlc2hIYW5kbGVyOm51bGwsZ2V0Q3VycmVudEZpYmVyOm51bGx9KSl9KSh7ZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6SGEsYnVuZGxlVHlwZTowLHZlcnNpb246XCIxNi45LjBcIixcbnJlbmRlcmVyUGFja2FnZU5hbWU6XCJyZWFjdC1kb21cIn0pO3ZhciBPaj17ZGVmYXVsdDpOan0sUGo9T2omJk5qfHxPajttb2R1bGUuZXhwb3J0cz1Qai5kZWZhdWx0fHxQajtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMTUuMFxuICogc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBkPXZvaWQgMCxlPXZvaWQgMCxnPXZvaWQgMCxtPXZvaWQgMCxuPXZvaWQgMDtleHBvcnRzLnVuc3RhYmxlX25vdz12b2lkIDA7ZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT12b2lkIDA7XG5pZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgcD1udWxsLHE9bnVsbCxyPWZ1bmN0aW9uKCl7aWYobnVsbCE9PXApdHJ5e3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7cCghMCxhKTtwPW51bGx9Y2F0Y2goYil7dGhyb3cgc2V0VGltZW91dChyLDApLGI7fX07ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3coKX07ZD1mdW5jdGlvbihhKXtudWxsIT09cD9zZXRUaW1lb3V0KGQsMCxhKToocD1hLHNldFRpbWVvdXQociwwKSl9O2U9ZnVuY3Rpb24oYSxiKXtxPXNldFRpbWVvdXQoYSxiKX07Zz1mdW5jdGlvbigpe2NsZWFyVGltZW91dChxKX07bT1mdW5jdGlvbigpe3JldHVybiExfTtuPWV4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oKXt9fWVsc2V7dmFyIHQ9d2luZG93LnBlcmZvcm1hbmNlLHU9d2luZG93LkRhdGUsdj13aW5kb3cuc2V0VGltZW91dCxcbnc9d2luZG93LmNsZWFyVGltZW91dCx4PXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUseT13aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlJiYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHgmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHNcIiksXCJmdW5jdGlvblwiIT09dHlwZW9mIHkmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxsc1wiKSk7ZXhwb3J0cy51bnN0YWJsZV9ub3c9XCJvYmplY3RcIj09PXR5cGVvZiB0JiZcblwiZnVuY3Rpb25cIj09PXR5cGVvZiB0Lm5vdz9mdW5jdGlvbigpe3JldHVybiB0Lm5vdygpfTpmdW5jdGlvbigpe3JldHVybiB1Lm5vdygpfTt2YXIgej0hMSxBPW51bGwsQj0tMSxDPS0xLEQ9MzMuMzMsRT0tMSxGPS0xLEc9MCxIPSExO209ZnVuY3Rpb24oKXtyZXR1cm4gZXhwb3J0cy51bnN0YWJsZV9ub3coKT49R307bj1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbihhKXswPmF8fDEyNTxhP2NvbnNvbGUuZXJyb3IoXCJmb3JjZUZyYW1lUmF0ZSB0YWtlcyBhIHBvc2l0aXZlIGludCBiZXR3ZWVuIDAgYW5kIDEyNSwgZm9yY2luZyBmcmFtZXJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHVuc3VwcG9ydGVkXCIpOjA8YT8oRD1NYXRoLmZsb29yKDFFMy9hKSxIPSEwKTooRD0zMy4zMyxIPSExKX07dmFyIEo9ZnVuY3Rpb24oKXtpZihudWxsIT09QSl7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKSxiPTA8Ry1hO3RyeXtBKGIsXG5hKXx8KEE9bnVsbCl9Y2F0Y2goYyl7dGhyb3cgSS5wb3N0TWVzc2FnZShudWxsKSxjO319fSxLPW5ldyBNZXNzYWdlQ2hhbm5lbCxJPUsucG9ydDI7Sy5wb3J0MS5vbm1lc3NhZ2U9Sjt2YXIgTD1mdW5jdGlvbihhKXtpZihudWxsPT09QSlGPUU9LTEsej0hMTtlbHNle3o9ITA7eChmdW5jdGlvbihhKXt3KEIpO0woYSl9KTt2YXIgYj1mdW5jdGlvbigpe0c9ZXhwb3J0cy51bnN0YWJsZV9ub3coKStELzI7SigpO0I9dihiLDMqRCl9O0I9dihiLDMqRCk7aWYoLTEhPT1FJiYuMTxhLUUpe3ZhciBjPWEtRTshSCYmLTEhPT1GJiZjPEQmJkY8RCYmKEQ9YzxGP0Y6Yyw4LjMzPkQmJihEPTguMzMpKTtGPWN9RT1hO0c9YStEO0kucG9zdE1lc3NhZ2UobnVsbCl9fTtkPWZ1bmN0aW9uKGEpe0E9YTt6fHwoej0hMCx4KGZ1bmN0aW9uKGEpe0woYSl9KSl9O2U9ZnVuY3Rpb24oYSxiKXtDPXYoZnVuY3Rpb24oKXthKGV4cG9ydHMudW5zdGFibGVfbm93KCkpfSxiKX07Zz1mdW5jdGlvbigpe3coQyk7XG5DPS0xfX12YXIgTT1udWxsLE49bnVsbCxPPW51bGwsUD0zLFE9ITEsUj0hMSxTPSExO1xuZnVuY3Rpb24gVChhLGIpe3ZhciBjPWEubmV4dDtpZihjPT09YSlNPW51bGw7ZWxzZXthPT09TSYmKE09Yyk7dmFyIGY9YS5wcmV2aW91cztmLm5leHQ9YztjLnByZXZpb3VzPWZ9YS5uZXh0PWEucHJldmlvdXM9bnVsbDtjPWEuY2FsbGJhY2s7Zj1QO3ZhciBsPU87UD1hLnByaW9yaXR5TGV2ZWw7Tz1hO3RyeXt2YXIgaD1hLmV4cGlyYXRpb25UaW1lPD1iO3N3aXRjaChQKXtjYXNlIDE6dmFyIGs9YyhoKTticmVhaztjYXNlIDI6az1jKGgpO2JyZWFrO2Nhc2UgMzprPWMoaCk7YnJlYWs7Y2FzZSA0Oms9YyhoKTticmVhaztjYXNlIDU6az1jKGgpfX1jYXRjaChaKXt0aHJvdyBaO31maW5hbGx5e1A9ZixPPWx9aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGspaWYoYj1hLmV4cGlyYXRpb25UaW1lLGEuY2FsbGJhY2s9ayxudWxsPT09TSlNPWEubmV4dD1hLnByZXZpb3VzPWE7ZWxzZXtrPW51bGw7aD1NO2Rve2lmKGI8PWguZXhwaXJhdGlvblRpbWUpe2s9aDticmVha31oPWgubmV4dH13aGlsZShoIT09XG5NKTtudWxsPT09az9rPU06az09PU0mJihNPWEpO2I9ay5wcmV2aW91cztiLm5leHQ9ay5wcmV2aW91cz1hO2EubmV4dD1rO2EucHJldmlvdXM9Yn19ZnVuY3Rpb24gVShhKXtpZihudWxsIT09TiYmTi5zdGFydFRpbWU8PWEpe2Rve3ZhciBiPU4sYz1iLm5leHQ7aWYoYj09PWMpTj1udWxsO2Vsc2V7Tj1jO3ZhciBmPWIucHJldmlvdXM7Zi5uZXh0PWM7Yy5wcmV2aW91cz1mfWIubmV4dD1iLnByZXZpb3VzPW51bGw7VihiLGIuZXhwaXJhdGlvblRpbWUpfXdoaWxlKG51bGwhPT1OJiZOLnN0YXJ0VGltZTw9YSl9fWZ1bmN0aW9uIFcoYSl7Uz0hMTtVKGEpO1J8fChudWxsIT09TT8oUj0hMCxkKFgpKTpudWxsIT09TiYmZShXLE4uc3RhcnRUaW1lLWEpKX1cbmZ1bmN0aW9uIFgoYSxiKXtSPSExO1MmJihTPSExLGcoKSk7VShiKTtRPSEwO3RyeXtpZighYSlmb3IoO251bGwhPT1NJiZNLmV4cGlyYXRpb25UaW1lPD1iOylUKE0sYiksYj1leHBvcnRzLnVuc3RhYmxlX25vdygpLFUoYik7ZWxzZSBpZihudWxsIT09TSl7ZG8gVChNLGIpLGI9ZXhwb3J0cy51bnN0YWJsZV9ub3coKSxVKGIpO3doaWxlKG51bGwhPT1NJiYhbSgpKX1pZihudWxsIT09TSlyZXR1cm4hMDtudWxsIT09TiYmZShXLE4uc3RhcnRUaW1lLWIpO3JldHVybiExfWZpbmFsbHl7UT0hMX19ZnVuY3Rpb24gWShhKXtzd2l0Y2goYSl7Y2FzZSAxOnJldHVybi0xO2Nhc2UgMjpyZXR1cm4gMjUwO2Nhc2UgNTpyZXR1cm4gMTA3Mzc0MTgyMztjYXNlIDQ6cmV0dXJuIDFFNDtkZWZhdWx0OnJldHVybiA1RTN9fVxuZnVuY3Rpb24gVihhLGIpe2lmKG51bGw9PT1NKU09YS5uZXh0PWEucHJldmlvdXM9YTtlbHNle3ZhciBjPW51bGwsZj1NO2Rve2lmKGI8Zi5leHBpcmF0aW9uVGltZSl7Yz1mO2JyZWFrfWY9Zi5uZXh0fXdoaWxlKGYhPT1NKTtudWxsPT09Yz9jPU06Yz09PU0mJihNPWEpO2I9Yy5wcmV2aW91cztiLm5leHQ9Yy5wcmV2aW91cz1hO2EubmV4dD1jO2EucHJldmlvdXM9Yn19dmFyIGFhPW47ZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eT0xO2V4cG9ydHMudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHk9MjtleHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5PTM7ZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHk9NTtleHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5PTQ7XG5leHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OmJyZWFrO2RlZmF1bHQ6YT0zfXZhciBjPVA7UD1hO3RyeXtyZXR1cm4gYigpfWZpbmFsbHl7UD1jfX07ZXhwb3J0cy51bnN0YWJsZV9uZXh0PWZ1bmN0aW9uKGEpe3N3aXRjaChQKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzp2YXIgYj0zO2JyZWFrO2RlZmF1bHQ6Yj1QfXZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYSgpfWZpbmFsbHl7UD1jfX07XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBmPWV4cG9ydHMudW5zdGFibGVfbm93KCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yyl7dmFyIGw9Yy5kZWxheTtsPVwibnVtYmVyXCI9PT10eXBlb2YgbCYmMDxsP2YrbDpmO2M9XCJudW1iZXJcIj09PXR5cGVvZiBjLnRpbWVvdXQ/Yy50aW1lb3V0OlkoYSl9ZWxzZSBjPVkoYSksbD1mO2M9bCtjO2E9e2NhbGxiYWNrOmIscHJpb3JpdHlMZXZlbDphLHN0YXJ0VGltZTpsLGV4cGlyYXRpb25UaW1lOmMsbmV4dDpudWxsLHByZXZpb3VzOm51bGx9O2lmKGw+Zil7Yz1sO2lmKG51bGw9PT1OKU49YS5uZXh0PWEucHJldmlvdXM9YTtlbHNle2I9bnVsbDt2YXIgaD1OO2Rve2lmKGM8aC5zdGFydFRpbWUpe2I9aDticmVha31oPWgubmV4dH13aGlsZShoIT09Tik7bnVsbD09PWI/Yj1OOmI9PT1OJiYoTj1hKTtjPWIucHJldmlvdXM7Yy5uZXh0PWIucHJldmlvdXM9YTthLm5leHQ9YjthLnByZXZpb3VzPVxuY31udWxsPT09TSYmTj09PWEmJihTP2coKTpTPSEwLGUoVyxsLWYpKX1lbHNlIFYoYSxjKSxSfHxRfHwoUj0hMCxkKFgpKTtyZXR1cm4gYX07ZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLm5leHQ7aWYobnVsbCE9PWIpe2lmKGE9PT1iKWE9PT1NP009bnVsbDphPT09TiYmKE49bnVsbCk7ZWxzZXthPT09TT9NPWI6YT09PU4mJihOPWIpO3ZhciBjPWEucHJldmlvdXM7Yy5uZXh0PWI7Yi5wcmV2aW91cz1jfWEubmV4dD1hLnByZXZpb3VzPW51bGx9fTtleHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1QO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXtQPWN9fX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiBQfTtcbmV4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQ9ZnVuY3Rpb24oKXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO1UoYSk7cmV0dXJuIG51bGwhPT1PJiZudWxsIT09TSYmTS5zdGFydFRpbWU8PWEmJk0uZXhwaXJhdGlvblRpbWU8Ty5leHBpcmF0aW9uVGltZXx8bSgpfTtleHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludD1hYTtleHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7Unx8UXx8KFI9ITAsZChYKSl9O2V4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb249ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU9ZnVuY3Rpb24oKXtyZXR1cm4gTX07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguNlxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7XG52YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTpcbjYwMTE1LHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNjtmdW5jdGlvbiB0KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSBoOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHV9fWNhc2UgcjpjYXNlIHE6Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24gdihhKXtyZXR1cm4gdChhKT09PW19ZXhwb3J0cy50eXBlT2Y9dDtleHBvcnRzLkFzeW5jTW9kZT1sO2V4cG9ydHMuQ29uY3VycmVudE1vZGU9bTtleHBvcnRzLkNvbnRleHRDb25zdW1lcj1rO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWg7ZXhwb3J0cy5FbGVtZW50PWM7ZXhwb3J0cy5Gb3J3YXJkUmVmPW47XG5leHBvcnRzLkZyYWdtZW50PWU7ZXhwb3J0cy5MYXp5PXI7ZXhwb3J0cy5NZW1vPXE7ZXhwb3J0cy5Qb3J0YWw9ZDtleHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO2V4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8XCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmKGEuJCR0eXBlb2Y9PT1yfHxhLiQkdHlwZW9mPT09cXx8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1rfHxhLiQkdHlwZW9mPT09bil9O2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSl8fHQoYSk9PT1sfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9djtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09a307XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09aH07ZXhwb3J0cy5pc0VsZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWN9O2V4cG9ydHMuaXNGb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09bn07ZXhwb3J0cy5pc0ZyYWdtZW50PWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09ZX07ZXhwb3J0cy5pc0xhenk9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1yfTtleHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXF9O2V4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1kfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1nfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWZ9O1xuZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cH07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjkuMFxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7XG52YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTpcbjYwMTIwLHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSx0PWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsdj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKTo2MDExNyx3PWI/U3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKTo2MDExODtmdW5jdGlvbiB4KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSBoOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHV9fWNhc2UgdDpjYXNlIHI6Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24geShhKXtyZXR1cm4geChhKT09PW19ZXhwb3J0cy50eXBlT2Y9eDtleHBvcnRzLkFzeW5jTW9kZT1sO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtleHBvcnRzLkZyYWdtZW50PWU7ZXhwb3J0cy5MYXp5PXQ7ZXhwb3J0cy5NZW1vPXI7ZXhwb3J0cy5Qb3J0YWw9ZDtleHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxhPT09cXx8XCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmKGEuJCR0eXBlb2Y9PT10fHxhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1rfHxhLiQkdHlwZW9mPT09bnx8YS4kJHR5cGVvZj09PXZ8fGEuJCR0eXBlb2Y9PT13KX07ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4geShhKXx8eChhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT15O2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHgoYSk9PT1rfTtleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB4KGEpPT09aH07XG5leHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHgoYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHgoYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4geChhKT09PXR9O2V4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB4KGEpPT09cn07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4geChhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4geChhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB4KGEpPT09Zn07ZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB4KGEpPT09cH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwcm9taXNlTWlkZGxld2FyZTtcblxudmFyIF9pc1Byb21pc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJpcy1wcm9taXNlXCIpKTtcblxudmFyIF9mbHV4U3RhbmRhcmRBY3Rpb24gPSByZXF1aXJlKFwiZmx1eC1zdGFuZGFyZC1hY3Rpb25cIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gcHJvbWlzZU1pZGRsZXdhcmUoX3JlZikge1xuICB2YXIgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoO1xuICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgaWYgKCEoMCwgX2ZsdXhTdGFuZGFyZEFjdGlvbi5pc0ZTQSkoYWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gKDAsIF9pc1Byb21pc2UuZGVmYXVsdCkoYWN0aW9uKSA/IGFjdGlvbi50aGVuKGRpc3BhdGNoKSA6IG5leHQoYWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfaXNQcm9taXNlLmRlZmF1bHQpKGFjdGlvbi5wYXlsb2FkKSA/IGFjdGlvbi5wYXlsb2FkLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goX29iamVjdFNwcmVhZCh7fSwgYWN0aW9uLCB7XG4gICAgICAgICAgcGF5bG9hZDogcmVzdWx0XG4gICAgICAgIH0pKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBkaXNwYXRjaChfb2JqZWN0U3ByZWFkKHt9LCBhY3Rpb24sIHtcbiAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICB9KSA6IG5leHQoYWN0aW9uKTtcbiAgICB9O1xuICB9O1xufSIsIm1vZHVsZS5leHBvcnRzID0gaXNQcm9taXNlO1xuXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzU3RyaW5nMiA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuXG52YXIgX2lzU3RyaW5nMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzU3RyaW5nMik7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdDIpO1xuXG5leHBvcnRzLmlzRlNBID0gaXNGU0E7XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0ZTQShhY3Rpb24pIHtcbiAgcmV0dXJuICgwLCBfaXNQbGFpbk9iamVjdDMuZGVmYXVsdCkoYWN0aW9uKSAmJiAoMCwgX2lzU3RyaW5nMy5kZWZhdWx0KShhY3Rpb24udHlwZSkgJiYgT2JqZWN0LmtleXMoYWN0aW9uKS5ldmVyeShpc1ZhbGlkS2V5KTtcbn1cblxuZnVuY3Rpb24gaXNFcnJvcihhY3Rpb24pIHtcbiAgcmV0dXJuIGlzRlNBKGFjdGlvbikgJiYgYWN0aW9uLmVycm9yID09PSB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xuICByZXR1cm4gWyd0eXBlJywgJ3BheWxvYWQnLCAnZXJyb3InLCAnbWV0YSddLmluZGV4T2Yoa2V5KSA+IC0xO1xufSIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N0cmluZygnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N0cmluZygxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHxcbiAgICAoIWlzQXJyYXkodmFsdWUpICYmIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3RyaW5nVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmluZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCIvLyBjb25zb2xlIGNvbW1hbmRzXG5leHBvcnQgY29uc3QgQ09OU09MRV9ISURFID0gJ2NvbnNvbGUuaGlkZSc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9TSE9XX0NPTU1BTkQgPSAnY29uc29sZS5zaG93LmNvbW1hbmQnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0hPV19FUlJPUiA9ICdjb25zb2xlLnNob3cuZXJyb3InO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0hPV19JTkZPID0gJ2NvbnNvbGUuc2hvdy5pbmZvJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX0hJREVfQ09NTUFORCA9ICdjb25zb2xlLmhpZGUuY29tbWFuZCc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9TRVRfQ09OU09MRV9URVhUID0gJ2NvbnNvbGUuc2V0LmNvbW1hbmQnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0VUX0NPTVBMRVRJT05TID0gJ2NvbnNvbGUuc2V0LmNvbXBsZXRpb25zJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX0NPTVBMRVRJT05fTkVYVCA9ICdjb25zb2xlLmNvbXBsZXRpb24ubmV4dCc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9DT01QTEVUSU9OX1BSRVYgPSAnY29uc29sZS5jb21wbGV0aW9uLnByZXYnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0hPV19GSU5EID0gJ2NvbnNvbGUuc2hvdy5maW5kJztcblxuaW50ZXJmYWNlIEhpZGVBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9ISURFO1xufVxuXG5pbnRlcmZhY2UgU2hvd0NvbW1hbmQge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9TSE9XX0NPTU1BTkQ7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNob3dGaW5kQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19GSU5EO1xufVxuXG5pbnRlcmZhY2UgU2hvd0Vycm9yQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19FUlJPUjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU2hvd0luZm9BY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9TSE9XX0lORk87XG4gIHRleHQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEhpZGVDb21tYW5kQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfSElERV9DT01NQU5EO1xufVxuXG5pbnRlcmZhY2UgU2V0Q29uc29sZVRleHRBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9TRVRfQ09OU09MRV9URVhUO1xuICBjb25zb2xlVGV4dDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU2V0Q29tcGxldGlvbnNBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9TRVRfQ09NUExFVElPTlM7XG4gIGNvbXBsZXRpb25zOiBhbnlbXTtcbiAgY29tcGxldGlvblNvdXJjZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ29tcGxldGlvbk5leHRBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9DT01QTEVUSU9OX05FWFQ7XG59XG5cbmludGVyZmFjZSBDb21wbGV0aW9uUHJldkFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0NPTVBMRVRJT05fUFJFVjtcbn1cblxuZXhwb3J0IHR5cGUgQ29uc29sZUFjdGlvbiA9XG4gIEhpZGVBY3Rpb24gfCBTaG93Q29tbWFuZCB8IFNob3dGaW5kQWN0aW9uIHwgU2hvd0Vycm9yQWN0aW9uIHxcbiAgU2hvd0luZm9BY3Rpb24gfCBIaWRlQ29tbWFuZEFjdGlvbiB8IFNldENvbnNvbGVUZXh0QWN0aW9uIHxcbiAgU2V0Q29tcGxldGlvbnNBY3Rpb24gfCBDb21wbGV0aW9uTmV4dEFjdGlvbiB8IENvbXBsZXRpb25QcmV2QWN0aW9uO1xuXG4iLCJpbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2luZGV4JztcblxuY29uc3QgaGlkZSA9ICgpOiBhY3Rpb25zLkNvbnNvbGVBY3Rpb24gPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ09OU09MRV9ISURFLFxuICB9O1xufTtcblxuY29uc3Qgc2hvd0NvbW1hbmQgPSAodGV4dDogc3RyaW5nKTogYWN0aW9ucy5Db25zb2xlQWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNPTlNPTEVfU0hPV19DT01NQU5ELFxuICAgIHRleHQ6IHRleHRcbiAgfTtcbn07XG5cbmNvbnN0IHNob3dGaW5kID0gKCk6IGFjdGlvbnMuQ29uc29sZUFjdGlvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5DT05TT0xFX1NIT1dfRklORCxcbiAgfTtcbn07XG5cbmNvbnN0IHNob3dFcnJvciA9ICh0ZXh0OiBzdHJpbmcpOiBhY3Rpb25zLkNvbnNvbGVBY3Rpb24gPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ09OU09MRV9TSE9XX0VSUk9SLFxuICAgIHRleHQ6IHRleHRcbiAgfTtcbn07XG5cbmNvbnN0IHNob3dJbmZvID0gKHRleHQ6IHN0cmluZyk6IGFjdGlvbnMuQ29uc29sZUFjdGlvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5DT05TT0xFX1NIT1dfSU5GTyxcbiAgICB0ZXh0OiB0ZXh0XG4gIH07XG59O1xuXG5jb25zdCBoaWRlQ29tbWFuZCA9ICgpOiBhY3Rpb25zLkNvbnNvbGVBY3Rpb24gPT4ge1xuICB3aW5kb3cudG9wLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICB0eXBlOiBtZXNzYWdlcy5DT05TT0xFX1VORk9DVVMsXG4gIH0pLCAnKicpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ09OU09MRV9ISURFX0NPTU1BTkQsXG4gIH07XG59O1xuXG5jb25zdCBlbnRlckNvbW1hbmQgPSBhc3luYyhcbiAgdGV4dDogc3RyaW5nLFxuKTogUHJvbWlzZTxhY3Rpb25zLkNvbnNvbGVBY3Rpb24+ID0+IHtcbiAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICB0eXBlOiBtZXNzYWdlcy5DT05TT0xFX0VOVEVSX0NPTU1BTkQsXG4gICAgdGV4dCxcbiAgfSk7XG4gIHJldHVybiBoaWRlQ29tbWFuZCgpO1xufTtcblxuY29uc3QgZW50ZXJGaW5kID0gKHRleHQ/OiBzdHJpbmcpOiBhY3Rpb25zLkNvbnNvbGVBY3Rpb24gPT4ge1xuICB3aW5kb3cudG9wLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICB0eXBlOiBtZXNzYWdlcy5DT05TT0xFX0VOVEVSX0ZJTkQsXG4gICAgdGV4dCxcbiAgfSksICcqJyk7XG4gIHJldHVybiBoaWRlQ29tbWFuZCgpO1xufTtcblxuY29uc3Qgc2V0Q29uc29sZVRleHQgPSAoY29uc29sZVRleHQ6IHN0cmluZyk6IGFjdGlvbnMuQ29uc29sZUFjdGlvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5DT05TT0xFX1NFVF9DT05TT0xFX1RFWFQsXG4gICAgY29uc29sZVRleHQsXG4gIH07XG59O1xuXG5jb25zdCBnZXRDb21wbGV0aW9ucyA9IGFzeW5jKHRleHQ6IHN0cmluZyk6IFByb21pc2U8YWN0aW9ucy5Db25zb2xlQWN0aW9uPiA9PiB7XG4gIGxldCBjb21wbGV0aW9ucyA9IGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogbWVzc2FnZXMuQ09OU09MRV9RVUVSWV9DT01QTEVUSU9OUyxcbiAgICB0ZXh0LFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNPTlNPTEVfU0VUX0NPTVBMRVRJT05TLFxuICAgIGNvbXBsZXRpb25zLFxuICAgIGNvbXBsZXRpb25Tb3VyY2U6IHRleHQsXG4gIH07XG59O1xuXG5jb25zdCBjb21wbGV0aW9uTmV4dCA9ICgpOiBhY3Rpb25zLkNvbnNvbGVBY3Rpb24gPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ09OU09MRV9DT01QTEVUSU9OX05FWFQsXG4gIH07XG59O1xuXG5jb25zdCBjb21wbGV0aW9uUHJldiA9ICgpOiBhY3Rpb25zLkNvbnNvbGVBY3Rpb24gPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ09OU09MRV9DT01QTEVUSU9OX1BSRVYsXG4gIH07XG59O1xuXG5leHBvcnQge1xuICBoaWRlLCBzaG93Q29tbWFuZCwgc2hvd0ZpbmQsIHNob3dFcnJvciwgc2hvd0luZm8sIGhpZGVDb21tYW5kLCBzZXRDb25zb2xlVGV4dCxcbiAgZW50ZXJDb21tYW5kLCBlbnRlckZpbmQsIGdldENvbXBsZXRpb25zLCBjb21wbGV0aW9uTmV4dCwgY29tcGxldGlvblByZXYsXG59O1xuIiwiaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSAnLi4vc2hhcmVkL21lc3NhZ2VzJztcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcbmltcG9ydCAqIGFzIGNvbnNvbGVBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9jb25zb2xlJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IENvbnNvbGUgZnJvbSAnLi9jb21wb25lbnRzL0NvbnNvbGUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByZWR1Y2VycyxcbiAgYXBwbHlNaWRkbGV3YXJlKHByb21pc2UpLFxuKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpbXZpeGVuLWNvbnNvbGUnKTtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9ID5cbiAgICAgIDxDb25zb2xlPjwvQ29uc29sZT5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICB3cmFwcGVyKTtcbn0pO1xuXG5jb25zdCBvbk1lc3NhZ2UgPSAobWVzc2FnZTogYW55KTogYW55ID0+IHtcbiAgbGV0IG1zZyA9IG1lc3NhZ2VzLnZhbHVlT2YobWVzc2FnZSk7XG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgY2FzZSBtZXNzYWdlcy5DT05TT0xFX1NIT1dfQ09NTUFORDpcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuc2hvd0NvbW1hbmQobXNnLmNvbW1hbmQpKTtcbiAgY2FzZSBtZXNzYWdlcy5DT05TT0xFX1NIT1dfRklORDpcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuc2hvd0ZpbmQoKSk7XG4gIGNhc2UgbWVzc2FnZXMuQ09OU09MRV9TSE9XX0VSUk9SOlxuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5zaG93RXJyb3IobXNnLnRleHQpKTtcbiAgY2FzZSBtZXNzYWdlcy5DT05TT0xFX1NIT1dfSU5GTzpcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuc2hvd0luZm8obXNnLnRleHQpKTtcbiAgY2FzZSBtZXNzYWdlcy5DT05TT0xFX0hJREU6XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGNvbnNvbGVBY3Rpb25zLmhpZGUoKSk7XG4gIH1cbn07XG5cbmJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIob25NZXNzYWdlKTtcbmxldCBwb3J0ID0gYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QodW5kZWZpbmVkLCB7IG5hbWU6ICd2aW12aXhlbi1jb25zb2xlJyB9KTtcbnBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uTWVzc2FnZSk7XG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgbW9kZTogc3RyaW5nO1xuICBtZXNzYWdlVGV4dDogc3RyaW5nO1xuICBjb25zb2xlVGV4dDogc3RyaW5nO1xuICBjb21wbGV0aW9uU291cmNlOiBzdHJpbmc7XG4gIGNvbXBsZXRpb25zOiBhbnlbXSxcbiAgc2VsZWN0OiBudW1iZXI7XG4gIHZpZXdJbmRleDogbnVtYmVyO1xufVxuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIG1vZGU6ICcnLFxuICBtZXNzYWdlVGV4dDogJycsXG4gIGNvbnNvbGVUZXh0OiAnJyxcbiAgY29tcGxldGlvblNvdXJjZTogJycsXG4gIGNvbXBsZXRpb25zOiBbXSxcbiAgc2VsZWN0OiAtMSxcbiAgdmlld0luZGV4OiAwLFxufTtcblxuY29uc3QgbmV4dFNlbGVjdGlvbiA9IChzdGF0ZTogU3RhdGUpOiBudW1iZXIgPT4ge1xuICBpZiAoc3RhdGUuY29tcGxldGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChzdGF0ZS5zZWxlY3QgPCAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBsZXQgbGVuZ3RoID0gc3RhdGUuY29tcGxldGlvbnNcbiAgICAubWFwKGcgPT4gZy5pdGVtcy5sZW5ndGgpXG4gICAgLnJlZHVjZSgoeCwgeSkgPT4geCArIHkpO1xuICBpZiAoc3RhdGUuc2VsZWN0ICsgMSA8IGxlbmd0aCkge1xuICAgIHJldHVybiBzdGF0ZS5zZWxlY3QgKyAxO1xuICB9XG4gIHJldHVybiAtMTtcbn07XG5cbmNvbnN0IHByZXZTZWxlY3Rpb24gPSAoc3RhdGU6IFN0YXRlKTogbnVtYmVyID0+IHtcbiAgbGV0IGxlbmd0aCA9IHN0YXRlLmNvbXBsZXRpb25zXG4gICAgLm1hcChnID0+IGcuaXRlbXMubGVuZ3RoKVxuICAgIC5yZWR1Y2UoKHgsIHkpID0+IHggKyB5KTtcbiAgaWYgKHN0YXRlLnNlbGVjdCA8IDApIHtcbiAgICByZXR1cm4gbGVuZ3RoIC0gMTtcbiAgfVxuICByZXR1cm4gc3RhdGUuc2VsZWN0IC0gMTtcbn07XG5cbmNvbnN0IG5leHRDb25zb2xlVGV4dCA9IChjb21wbGV0aW9uczogYW55W10sIHNlbGVjdDogbnVtYmVyLCBkZWZhdWx0czogYW55KSA9PiB7XG4gIGlmIChzZWxlY3QgPCAwKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG4gIGxldCBpdGVtcyA9IGNvbXBsZXRpb25zLm1hcChnID0+IGcuaXRlbXMpLnJlZHVjZSgoZzEsIGcyKSA9PiBnMS5jb25jYXQoZzIpKTtcbiAgcmV0dXJuIGl0ZW1zW3NlbGVjdF0uY29udGVudDtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZTogU3RhdGUgPSBkZWZhdWx0U3RhdGUsXG4gIGFjdGlvbjogYWN0aW9ucy5Db25zb2xlQWN0aW9uLFxuKTogU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgYWN0aW9ucy5DT05TT0xFX0hJREU6XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICBtb2RlOiAnJywgfTtcbiAgY2FzZSBhY3Rpb25zLkNPTlNPTEVfU0hPV19DT01NQU5EOlxuICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgbW9kZTogJ2NvbW1hbmQnLFxuICAgICAgY29uc29sZVRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgY29tcGxldGlvbnM6IFtdfTtcbiAgY2FzZSBhY3Rpb25zLkNPTlNPTEVfU0hPV19GSU5EOlxuICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgbW9kZTogJ2ZpbmQnLFxuICAgICAgY29uc29sZVRleHQ6ICcnLFxuICAgICAgY29tcGxldGlvbnM6IFtdfTtcbiAgY2FzZSBhY3Rpb25zLkNPTlNPTEVfU0hPV19FUlJPUjpcbiAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgIG1vZGU6ICdlcnJvcicsXG4gICAgICBtZXNzYWdlVGV4dDogYWN0aW9uLnRleHQsIH07XG4gIGNhc2UgYWN0aW9ucy5DT05TT0xFX1NIT1dfSU5GTzpcbiAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgIG1vZGU6ICdpbmZvJyxcbiAgICAgIG1lc3NhZ2VUZXh0OiBhY3Rpb24udGV4dCwgfTtcbiAgY2FzZSBhY3Rpb25zLkNPTlNPTEVfSElERV9DT01NQU5EOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG1vZGU6IHN0YXRlLm1vZGUgPT09ICdjb21tYW5kJyB8fCBzdGF0ZS5tb2RlID09PSAnZmluZCcgPyAnJyA6IHN0YXRlLm1vZGUsXG4gICAgfTtcbiAgY2FzZSBhY3Rpb25zLkNPTlNPTEVfU0VUX0NPTlNPTEVfVEVYVDpcbiAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgIGNvbnNvbGVUZXh0OiBhY3Rpb24uY29uc29sZVRleHQsIH07XG4gIGNhc2UgYWN0aW9ucy5DT05TT0xFX1NFVF9DT01QTEVUSU9OUzpcbiAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgIGNvbXBsZXRpb25zOiBhY3Rpb24uY29tcGxldGlvbnMsXG4gICAgICBjb21wbGV0aW9uU291cmNlOiBhY3Rpb24uY29tcGxldGlvblNvdXJjZSxcbiAgICAgIHNlbGVjdDogLTEgfTtcbiAgY2FzZSBhY3Rpb25zLkNPTlNPTEVfQ09NUExFVElPTl9ORVhUOiB7XG4gICAgbGV0IHNlbGVjdCA9IG5leHRTZWxlY3Rpb24oc3RhdGUpO1xuICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgc2VsZWN0OiBzZWxlY3QsXG4gICAgICBjb25zb2xlVGV4dDogbmV4dENvbnNvbGVUZXh0KFxuICAgICAgICBzdGF0ZS5jb21wbGV0aW9ucywgc2VsZWN0LCBzdGF0ZS5jb21wbGV0aW9uU291cmNlKSB9O1xuICB9XG4gIGNhc2UgYWN0aW9ucy5DT05TT0xFX0NPTVBMRVRJT05fUFJFVjoge1xuICAgIGxldCBzZWxlY3QgPSBwcmV2U2VsZWN0aW9uKHN0YXRlKTtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdDogc2VsZWN0LFxuICAgICAgY29uc29sZVRleHQ6IG5leHRDb25zb2xlVGV4dChcbiAgICAgICAgc3RhdGUuY29tcGxldGlvbnMsIHNlbGVjdCwgc3RhdGUuY29tcGxldGlvblNvdXJjZSkgfTtcbiAgfVxuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL2NvbnNvbGUuc2Nzcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbnNvbGUvSW5wdXQnO1xuaW1wb3J0IENvbXBsZXRpb24gZnJvbSAnLi9jb25zb2xlL0NvbXBsZXRpb24nO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9jb25zb2xlL01lc3NhZ2UnO1xuaW1wb3J0ICogYXMgY29uc29sZUFjdGlvbnMgZnJvbSAnLi4vLi4vY29uc29sZS9hY3Rpb25zL2NvbnNvbGUnO1xuaW1wb3J0IHsgU3RhdGUgYXMgQXBwU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IENPTVBMRVRJT05fTUFYX0lURU1TID0gMzM7XG5cbnR5cGUgU3RhdGVQcm9wcyA9IFJldHVyblR5cGU8dHlwZW9mIG1hcFN0YXRlVG9Qcm9wcz47XG5pbnRlcmZhY2UgRGlzcGF0Y2hQcm9wcyB7XG4gIGRpc3BhdGNoOiAoYWN0aW9uOiBhbnkpID0+IHZvaWQsXG59XG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHM7XG5cbmNsYXNzIENvbnNvbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcHJpdmF0ZSBpbnB1dDogUmVhY3QuUmVmT2JqZWN0PElucHV0PjtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gJ2NvbW1hbmQnIHx8IHRoaXMucHJvcHMubW9kZSA9PT0gJ2ZpbmQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5oaWRlQ29tbWFuZCgpKTtcbiAgICB9XG4gIH1cblxuICBkb0VudGVyKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCB2YWx1ZSA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSAnY29tbWFuZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmRpc3BhdGNoKGNvbnNvbGVBY3Rpb25zLmVudGVyQ29tbWFuZCh2YWx1ZSkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tb2RlID09PSAnZmluZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmRpc3BhdGNoKGNvbnNvbGVBY3Rpb25zLmVudGVyRmluZChcbiAgICAgICAgdmFsdWUgPT09ICcnID8gdW5kZWZpbmVkIDogdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3ROZXh0KGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNvbnNvbGVBY3Rpb25zLmNvbXBsZXRpb25OZXh0KCkpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc2VsZWN0UHJldihlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5jb21wbGV0aW9uUHJldigpKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5oaWRlQ29tbWFuZCgpKTtcbiAgICBjYXNlICdFbnRlcic6XG4gICAgICByZXR1cm4gdGhpcy5kb0VudGVyKGUpO1xuICAgIGNhc2UgJ1RhYic6XG4gICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNvbnNvbGVBY3Rpb25zLmNvbXBsZXRpb25QcmV2KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5jb21wbGV0aW9uTmV4dCgpKTtcbiAgICAgIH1cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdbJzpcbiAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuaGlkZUNvbW1hbmQoKSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtJzpcbiAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9FbnRlcihlKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ24nOlxuICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICB0aGlzLnNlbGVjdE5leHQoZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwJzpcbiAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RQcmV2KGUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBsZXQgdGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY29uc29sZUFjdGlvbnMuc2V0Q29uc29sZVRleHQodGV4dCkpO1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09ICdjb21tYW5kJykge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjb25zb2xlQWN0aW9ucy5nZXRDb21wbGV0aW9ucyh0ZXh0KSk7XG4gICAgfVxuICB9XG5cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMubW9kZSAhPT0gJ2NvbW1hbmQnICYmIHRoaXMucHJvcHMubW9kZSA9PT0gJ2NvbW1hbmQnKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgICBjb25zb2xlQWN0aW9ucy5nZXRDb21wbGV0aW9ucyh0aGlzLnByb3BzLmNvbnNvbGVUZXh0KSk7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChwcmV2UHJvcHMubW9kZSAhPT0gJ2ZpbmQnICYmIHRoaXMucHJvcHMubW9kZSA9PT0gJ2ZpbmQnKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5tb2RlKSB7XG4gICAgY2FzZSAnY29tbWFuZCc6XG4gICAgY2FzZSAnZmluZCc6XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3ZpbXZpeGVuLWNvbnNvbGUtY29tbWFuZC13cmFwcGVyJz5cbiAgICAgICAgPENvbXBsZXRpb25cbiAgICAgICAgICBzaXplPXtDT01QTEVUSU9OX01BWF9JVEVNU31cbiAgICAgICAgICBjb21wbGV0aW9ucz17dGhpcy5wcm9wcy5jb21wbGV0aW9uc31cbiAgICAgICAgICBzZWxlY3Q9e3RoaXMucHJvcHMuc2VsZWN0fVxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICByZWY9e3RoaXMuaW5wdXR9XG4gICAgICAgICAgbW9kZT17dGhpcy5wcm9wcy5tb2RlfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jb25zb2xlVGV4dH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PjtcbiAgICBjYXNlICdpbmZvJzpcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICByZXR1cm4gPE1lc3NhZ2UgbW9kZT17IHRoaXMucHJvcHMubW9kZSB9ID5cbiAgICAgICAgeyB0aGlzLnByb3BzLm1lc3NhZ2VUZXh0IH1cbiAgICAgIDwvTWVzc2FnZT47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHdpbmRvdy5mb2N1cygpO1xuICAgIGlmICh0aGlzLmlucHV0LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuaW5wdXQuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PiAoeyAuLi5zdGF0ZSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuKShDb25zb2xlKTtcbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vY29uc29sZS5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxib2R5LCp7bWFyZ2luOjA7cGFkZGluZzowfWJvZHl7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVufS52aW12aXhlbi1jb25zb2xle2JvdHRvbTowO21hcmdpbjowO3BhZGRpbmc6MH0udmltdml4ZW4tY29uc29sZS1jb21tYW5kLXdyYXBwZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgZ3JheX0udmltdml4ZW4tY29uc29sZS1jb21wbGV0aW9ue2JhY2tncm91bmQtY29sb3I6d2hpdGU7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC1mYW1pbHk6bW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE2cHh9LnZpbXZpeGVuLWNvbnNvbGUtY29tcGxldGlvbi10aXRsZXtiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTtmb250LXdlaWdodDpib2xkO21hcmdpbjowO3BhZGRpbmc6MH0udmltdml4ZW4tY29uc29sZS1jb21wbGV0aW9uLWl0ZW17cGFkZGluZy1sZWZ0OjEuNXJlbTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgY2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb250YWluO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDt3aGl0ZS1zcGFjZTpwcmV9LnZpbXZpeGVuLWNvbnNvbGUtY29tcGxldGlvbi1pdGVtLnZpbXZpeGVuLWNvbXBsZXRpb24tc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjp5ZWxsb3d9LnZpbXZpeGVuLWNvbnNvbGUtY29tcGxldGlvbi1pdGVtLWNhcHRpb257ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6NDAlO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVufS52aW12aXhlbi1jb25zb2xlLWNvbXBsZXRpb24taXRlbS11cmx7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y29sb3I6Z3JlZW47d2lkdGg6NjAlO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVufS52aW12aXhlbi1jb25zb2xlLW1lc3NhZ2V7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC1mYW1pbHk6bW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE2cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgZ3JheX0udmltdml4ZW4tY29uc29sZS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO2NvbG9yOndoaXRlfS52aW12aXhlbi1jb25zb2xlLWluZm97YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtmb250LXdlaWdodDpub3JtYWw7Y29sb3I6Z3JlZW59LnZpbXZpeGVuLWNvbnNvbGUtY29tbWFuZHtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2Rpc3BsYXk6ZmxleH0udmltdml4ZW4tY29uc29sZS1jb21tYW5kLXByb21wdHtmb250LXN0eWxlOm5vcm1hbDtmb250LWZhbWlseTptb25vc3BhY2U7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTZweH0udmltdml4ZW4tY29uc29sZS1jb21tYW5kLWlucHV0e2JvcmRlcjpub25lO2ZsZXgtZ3JvdzoxO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtZmFtaWx5Om1vbm9zcGFjZTtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxNnB4fVxcblwiLCBcIlwiXSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtb2RlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG9uQmx1cjogKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG4gIG9uS2V5RG93bjogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG4gIG9uQ2hhbmdlOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHByaXZhdGUgaW5wdXQ6IFJlYWN0LlJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICBpZiAodGhpcy5pbnB1dC5jdXJyZW50KSB7XG4gICAgICB0aGlzLmlucHV0LmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHByb21wdCA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09ICdjb21tYW5kJykge1xuICAgICAgcHJvbXB0ID0gJzonO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tb2RlID09PSAnZmluZCcpIHtcbiAgICAgIHByb21wdCA9ICcvJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpbXZpeGVuLWNvbnNvbGUtY29tbWFuZCc+XG4gICAgICAgIDxpIGNsYXNzTmFtZT0ndmltdml4ZW4tY29uc29sZS1jb21tYW5kLXByb21wdCc+XG4gICAgICAgICAgeyBwcm9tcHQgfVxuICAgICAgICA8L2k+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT0ndmltdml4ZW4tY29uc29sZS1jb21tYW5kLWlucHV0J1xuICAgICAgICAgIHJlZj17dGhpcy5pbnB1dH1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMucHJvcHMub25CbHVyfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5wcm9wcy5vbktleURvd259XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wbGV0aW9uSXRlbSBmcm9tICcuL0NvbXBsZXRpb25JdGVtJztcbmltcG9ydCBDb21wbGV0aW9uVGl0bGUgZnJvbSAnLi9Db21wbGV0aW9uVGl0bGUnO1xuXG5pbnRlcmZhY2UgSXRlbSB7XG4gIGljb24/OiBzdHJpbmc7XG4gIGNhcHRpb24/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEdyb3VwIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpdGVtczogSXRlbVtdO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZWxlY3Q6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICBjb21wbGV0aW9uczogR3JvdXBbXTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgdmlld09mZnNldDogbnVtYmVyO1xuICBzZWxlY3Q6IG51bWJlcjtcbn1cblxuY2xhc3MgQ29tcGxldGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHZpZXdPZmZzZXQ6IDAsIHNlbGVjdDogLTEgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzOiBQcm9wcywgcHJldlN0YXRlOiBTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuc2VsZWN0ID09PSBuZXh0UHJvcHMuc2VsZWN0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgdmlld1NlbGVjdCA9ICgoKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXh0UHJvcHMuY29tcGxldGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgKytpbmRleDtcbiAgICAgICAgbGV0IGcgPSBuZXh0UHJvcHMuY29tcGxldGlvbnNbaV07XG4gICAgICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0ICsgaSArIDEgPCBpbmRleCArIGcuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5zZWxlY3QgKyBpICsgMTtcbiAgICAgICAgfVxuICAgICAgICBpbmRleCArPSBnLml0ZW1zLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9KSgpO1xuXG4gICAgbGV0IHZpZXdPZmZzZXQgPSAwO1xuICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0IDwgMCkge1xuICAgICAgdmlld09mZnNldCA9IDA7XG4gICAgfSBlbHNlIGlmIChwcmV2U3RhdGUuc2VsZWN0IDwgbmV4dFByb3BzLnNlbGVjdCkge1xuICAgICAgdmlld09mZnNldCA9IE1hdGgubWF4KHByZXZTdGF0ZS52aWV3T2Zmc2V0LFxuICAgICAgICB2aWV3U2VsZWN0IC0gbmV4dFByb3BzLnNpemUgKyAxKTtcbiAgICB9IGVsc2UgaWYgKHByZXZTdGF0ZS5zZWxlY3QgPiBuZXh0UHJvcHMuc2VsZWN0KSB7XG4gICAgICB2aWV3T2Zmc2V0ID0gTWF0aC5taW4ocHJldlN0YXRlLnZpZXdPZmZzZXQsIHZpZXdTZWxlY3QpO1xuICAgIH1cbiAgICByZXR1cm4geyB2aWV3T2Zmc2V0LCBzZWxlY3Q6IG5leHRQcm9wcy5zZWxlY3QgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZWxlcyA9IFtdO1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBmb3IgKGxldCBncm91cCBvZiB0aGlzLnByb3BzLmNvbXBsZXRpb25zKSB7XG4gICAgICBlbGVzLnB1c2goPENvbXBsZXRpb25UaXRsZVxuICAgICAgICBrZXk9e2Bncm91cC0ke2luZGV4fWB9XG4gICAgICAgIHRpdGxlPXsgZ3JvdXAubmFtZSB9XG4gICAgICAvPik7XG4gICAgICBmb3IgKGxldCBpdGVtIG9mIGdyb3VwLml0ZW1zKSB7XG4gICAgICAgIGVsZXMucHVzaCg8Q29tcGxldGlvbkl0ZW1cbiAgICAgICAgICBrZXk9e2BpdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICBpY29uPXtpdGVtLmljb259XG4gICAgICAgICAgY2FwdGlvbj17aXRlbS5jYXB0aW9ufVxuICAgICAgICAgIHVybD17aXRlbS51cmx9XG4gICAgICAgICAgaGlnaGxpZ2h0PXtpbmRleCA9PT0gdGhpcy5wcm9wcy5zZWxlY3R9XG4gICAgICAgIC8gPik7XG4gICAgICAgICsraW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHZpZXdPZmZzZXQgPSB0aGlzLnN0YXRlLnZpZXdPZmZzZXQ7XG4gICAgZWxlcyA9IGVsZXMuc2xpY2Uodmlld09mZnNldCwgdmlld09mZnNldCArIHRoaXMucHJvcHMuc2l6ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT0ndmltdml4ZW4tY29uc29sZS1jb21wbGV0aW9uJz5cbiAgICAgICAgeyBlbGVzIH1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGhpZ2hsaWdodDogYm9vbGVhbjtcbiAgY2FwdGlvbj86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xufVxuXG5jb25zdCBDb21wbGV0aW9uSXRlbSA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgbGV0IGNsYXNzTmFtZSA9ICd2aW12aXhlbi1jb25zb2xlLWNvbXBsZXRpb24taXRlbSc7XG4gIGlmIChwcm9wcy5oaWdobGlnaHQpIHtcbiAgICBjbGFzc05hbWUgKz0gJyB2aW12aXhlbi1jb21wbGV0aW9uLXNlbGVjdGVkJztcbiAgfVxuICByZXR1cm4gPGxpXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBwcm9wcy5pY29uICsgJyknIH19XG4gID5cbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPSd2aW12aXhlbi1jb25zb2xlLWNvbXBsZXRpb24taXRlbS1jYXB0aW9uJ1xuICAgID57cHJvcHMuY2FwdGlvbn08L3NwYW4+XG4gICAgPHNwYW5cbiAgICAgIGNsYXNzTmFtZT0ndmltdml4ZW4tY29uc29sZS1jb21wbGV0aW9uLWl0ZW0tdXJsJ1xuICAgID57cHJvcHMudXJsfTwvc3Bhbj5cbiAgPC9saT47XG59O1xuXG5Db21wbGV0aW9uSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGhpZ2hsaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBsZXRpb25JdGVtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgQ29tcGxldGlvblRpdGxlID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICByZXR1cm4gPGxpIGNsYXNzTmFtZT0ndmltdml4ZW4tY29uc29sZS1jb21wbGV0aW9uLXRpdGxlJz5cbiAgICB7cHJvcHMudGl0bGV9XG4gIDwvbGk+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGxldGlvblRpdGxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbW9kZTogc3RyaW5nO1xuICBjaGlsZHJlbjogc3RyaW5nO1xufVxuXG5jb25zdCBNZXNzYWdlID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBzd2l0Y2ggKHByb3BzLm1vZGUpIHtcbiAgY2FzZSAnZXJyb3InOlxuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9J3ZpbXZpeGVuLWNvbnNvbGUtbWVzc2FnZSB2aW12aXhlbi1jb25zb2xlLWVycm9yJz5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L3A+XG4gICAgKTtcbiAgY2FzZSAnaW5mbyc6XG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGNsYXNzTmFtZT0ndmltdml4ZW4tY29uc29sZS1tZXNzYWdlIHZpbXZpeGVuLWNvbnNvbGUtaW5mbyc+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9wPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==