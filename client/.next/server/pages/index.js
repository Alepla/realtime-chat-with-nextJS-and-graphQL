module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Footer.js":
/*!*************************************!*\
  !*** ./components/common/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/alejandro/Escritorio/realtime-chat-with-nextJS-and-graphQL/client/components/common/Footer.js\";\n\nconst Footer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(\"footer\")`\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Footer, {\n  children: [\"Powered by\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    href: \"https://twitter.com/AlejandroPla98\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    children: \"Alex Pla\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 13,\n  columnNumber: 3\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9Gb290ZXIuanM/NjQ3YSJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0Msc0RBQU0sQ0FBQyxRQUFELENBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTtBQVNlLGtGQUNiLHFFQUFDLE1BQUQ7QUFBQSwyQkFDYSxHQURiLGVBRUU7QUFDRSxRQUFJLEVBQUMsb0NBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb21tb24vRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IEZvb3RlciA9IHN0eWxlZChcImZvb3RlclwiKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEZvb3Rlcj5cbiAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgIDxhXG4gICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9BbGVqYW5kcm9QbGE5OFwiXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgPlxuICAgICAgQWxleCBQbGFcbiAgICA8L2E+XG4gIDwvRm9vdGVyPlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/Footer.js\n");

/***/ }),

/***/ "./lib/utils/checkLogin.js":
/*!*********************************!*\
  !*** ./lib/utils/checkLogin.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apolloClient => apolloClient.query({\n  query: graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n        query me {\n          me {\n            id\n            username\n          }\n        }\n      `\n}).then(({\n  data\n}) => {\n  return {\n    me: data.me\n  };\n}).catch(() => {\n  return {\n    me: null\n  };\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvY2hlY2tMb2dpbi5qcz8wMzMyIl0sIm5hbWVzIjpbImFwb2xsb0NsaWVudCIsInF1ZXJ5IiwiZ3FsIiwidGhlbiIsImRhdGEiLCJtZSIsImNhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVnQkEsMkVBQUQsSUFDYkEsWUFBWSxDQUNUQyxLQURILENBQ1M7QUFDTEEsT0FBSyxFQUFFQyxrREFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJXLENBRFQsRUFXR0MsSUFYSCxDQVdRLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDbEIsU0FBTztBQUFFQyxNQUFFLEVBQUVELElBQUksQ0FBQ0M7QUFBWCxHQUFQO0FBQ0QsQ0FiSCxFQWNHQyxLQWRILENBY1MsTUFBTTtBQUNYLFNBQU87QUFBRUQsTUFBRSxFQUFFO0FBQU4sR0FBUDtBQUNELENBaEJILENBREYiLCJmaWxlIjoiLi9saWIvdXRpbHMvY2hlY2tMb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChhcG9sbG9DbGllbnQpID0+XG4gIGFwb2xsb0NsaWVudFxuICAgIC5xdWVyeSh7XG4gICAgICBxdWVyeTogZ3FsYFxuICAgICAgICBxdWVyeSBtZSB7XG4gICAgICAgICAgbWUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHVzZXJuYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgIH0pXG4gICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICByZXR1cm4geyBtZTogZGF0YS5tZSB9O1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHJldHVybiB7IG1lOiBudWxsIH07XG4gICAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/utils/checkLogin.js\n");

/***/ }),

/***/ "./lib/utils/redirect.js":
/*!*******************************!*\
  !*** ./lib/utils/redirect.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Redirect = (ctx, target) => {\n  if (ctx.res) {\n    ctx.res.writeHead(303, {\n      Location: target\n    });\n    ctx.res.end();\n  } else {\n    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace(target);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Redirect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvcmVkaXJlY3QuanM/MDc4YiJdLCJuYW1lcyI6WyJSZWRpcmVjdCIsImN0eCIsInRhcmdldCIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiUm91dGVyIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUNDLEdBQUQsRUFBTUMsTUFBTixLQUFpQjtBQUNoQyxNQUFJRCxHQUFHLENBQUNFLEdBQVIsRUFBYTtBQUNYRixPQUFHLENBQUNFLEdBQUosQ0FBUUMsU0FBUixDQUFrQixHQUFsQixFQUF1QjtBQUFFQyxjQUFRLEVBQUVIO0FBQVosS0FBdkI7QUFDQUQsT0FBRyxDQUFDRSxHQUFKLENBQVFHLEdBQVI7QUFDRCxHQUhELE1BR087QUFDTEMsc0RBQU0sQ0FBQ0MsT0FBUCxDQUFlTixNQUFmO0FBQ0Q7QUFDRixDQVBEOztBQVNlRix1RUFBZiIsImZpbGUiOiIuL2xpYi91dGlscy9yZWRpcmVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IFJlZGlyZWN0ID0gKGN0eCwgdGFyZ2V0KSA9PiB7XG4gIGlmIChjdHgucmVzKSB7XG4gICAgY3R4LnJlcy53cml0ZUhlYWQoMzAzLCB7IExvY2F0aW9uOiB0YXJnZXQgfSk7XG4gICAgY3R4LnJlcy5lbmQoKTtcbiAgfSBlbHNlIHtcbiAgICBSb3V0ZXIucmVwbGFjZSh0YXJnZXQpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWRpcmVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/utils/redirect.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_utils_checkLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils/checkLogin */ \"./lib/utils/checkLogin.js\");\n/* harmony import */ var _lib_utils_redirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/utils/redirect */ \"./lib/utils/redirect.js\");\n/* harmony import */ var _components_common_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Footer */ \"./components/common/Footer.js\");\n\nvar _jsxFileName = \"/home/alejandro/Escritorio/realtime-chat-with-nextJS-and-graphQL/client/pages/index.js\";\n\n\n\n\n\n\nconst BodyWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(\"div\")`\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n`;\nconst UserInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(\"div\")`\n  grid-column: 3 / 6;\n  grid-row: 1;\n  border: 1px solid #eaeaea;\n`;\nconst Chat = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(\"div\")`\n  grid-column: 3 / 6;\n  grid-row: 2 / 8;\n  border: 1px solid #eaeaea;\n`;\nconst ChatsList = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(\"div\")`\n  grid-column: 1 / 3;\n  grid-row: 2 / 8;\n  border: 1px solid #eaeaea;\n`;\nconst Search = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(\"div\")`\n  grid-column: 1 / 3;\n  grid-row: 1;\n  border: 1px solid #eaeaea;\n`;\n\nclass IndexPage extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  static async getInitialProps(ctx) {\n    const {\n      me\n    } = await Object(_lib_utils_checkLogin__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ctx.apolloClient);\n    if (!me) Object(_lib_utils_redirect__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ctx, \"/user/login\");\n    return {\n      me\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"Realtime Chat\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n          rel: \"icon\",\n          href: \"/favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BodyWrapper, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserInfo, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Search, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChatsList, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chat, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_common_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkJvZHlXcmFwcGVyIiwic3R5bGVkIiwiVXNlckluZm8iLCJDaGF0IiwiQ2hhdHNMaXN0IiwiU2VhcmNoIiwiSW5kZXhQYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJtZSIsImNoZWNrTG9naW4iLCJhcG9sbG9DbGllbnQiLCJyZWRpcmVjdCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLHNEQUFNLENBQUMsS0FBRCxDQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtBQU9BLE1BQU1DLFFBQVEsR0FBR0Qsc0RBQU0sQ0FBQyxLQUFELENBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1BLE1BQU1FLElBQUksR0FBR0Ysc0RBQU0sQ0FBQyxLQUFELENBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1BLE1BQU1HLFNBQVMsR0FBR0gsc0RBQU0sQ0FBQyxLQUFELENBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1BLE1BQU1JLE1BQU0sR0FBR0osc0RBQU0sQ0FBQyxLQUFELENBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsQ0FKQTs7QUFNQSxNQUFNSyxTQUFOLFNBQXdCQyw0Q0FBSyxDQUFDQyxTQUE5QixDQUF3QztBQUN0QyxlQUFhQyxlQUFiLENBQTZCQyxHQUE3QixFQUFrQztBQUNoQyxVQUFNO0FBQUVDO0FBQUYsUUFBUyxNQUFNQyxxRUFBVSxDQUFDRixHQUFHLENBQUNHLFlBQUwsQ0FBL0I7QUFFQSxRQUFJLENBQUNGLEVBQUwsRUFBU0csbUVBQVEsQ0FBQ0osR0FBRCxFQUFNLGFBQU4sQ0FBUjtBQUVULFdBQU87QUFBRUM7QUFBRixLQUFQO0FBQ0Q7O0FBRURJLFFBQU0sR0FBRztBQUNQLHdCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxhQUFHLEVBQUMsTUFBVjtBQUFpQixjQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFLHFFQUFDLFdBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRSxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFXRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFlRDs7QUF6QnFDOztBQTRCekJULHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuaW1wb3J0IGNoZWNrTG9naW4gZnJvbSBcIi4uL2xpYi91dGlscy9jaGVja0xvZ2luXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL2xpYi91dGlscy9yZWRpcmVjdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vRm9vdGVyXCI7XG5cbmNvbnN0IEJvZHlXcmFwcGVyID0gc3R5bGVkKFwiZGl2XCIpYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLWdhcDogMTBweDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XG5gO1xuXG5jb25zdCBVc2VySW5mbyA9IHN0eWxlZChcImRpdlwiKWBcbiAgZ3JpZC1jb2x1bW46IDMgLyA2O1xuICBncmlkLXJvdzogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbmA7XG5cbmNvbnN0IENoYXQgPSBzdHlsZWQoXCJkaXZcIilgXG4gIGdyaWQtY29sdW1uOiAzIC8gNjtcbiAgZ3JpZC1yb3c6IDIgLyA4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuYDtcblxuY29uc3QgQ2hhdHNMaXN0ID0gc3R5bGVkKFwiZGl2XCIpYFxuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGdyaWQtcm93OiAyIC8gODtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbmA7XG5cbmNvbnN0IFNlYXJjaCA9IHN0eWxlZChcImRpdlwiKWBcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICBncmlkLXJvdzogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbmA7XG5cbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG4gICAgY29uc3QgeyBtZSB9ID0gYXdhaXQgY2hlY2tMb2dpbihjdHguYXBvbGxvQ2xpZW50KTtcblxuICAgIGlmICghbWUpIHJlZGlyZWN0KGN0eCwgXCIvdXNlci9sb2dpblwiKTtcblxuICAgIHJldHVybiB7IG1lIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5SZWFsdGltZSBDaGF0PC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEJvZHlXcmFwcGVyPlxuICAgICAgICAgIDxVc2VySW5mbz48L1VzZXJJbmZvPlxuICAgICAgICAgIDxTZWFyY2g+PC9TZWFyY2g+XG4gICAgICAgICAgPENoYXRzTGlzdD48L0NoYXRzTGlzdD5cbiAgICAgICAgICA8Q2hhdD48L0NoYXQ+XG4gICAgICAgIDwvQm9keVdyYXBwZXI+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });