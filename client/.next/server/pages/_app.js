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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./lib/utils/initApollo.js":
/*!*********************************!*\
  !*** ./lib/utils/initApollo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ \"apollo-boost\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link */ \"apollo-link\");\n/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-ws */ \"apollo-link-ws\");\n/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_ws__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-utilities */ \"apollo-utilities\");\n/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_6__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nlet apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)\n\nif (true) {\n  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default.a;\n}\n\nfunction create(initialState, {\n  getToken\n}) {\n  const httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__[\"createHttpLink\"])({\n    uri: \"http://localhost:4000\" //credentials: \"same-origin\"\n\n  });\n  const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__[\"setContext\"])((_, {\n    headers\n  }) => {\n    const token = getToken();\n    return {\n      headers: _objectSpread(_objectSpread({}, headers), {}, {\n        authorization: token ? `Bearer ${token}` : \"\"\n      })\n    };\n  });\n  let link = authLink.concat(httpLink);\n\n  if (false) {} // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient\n\n\n  return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    connectToDevTools: false,\n    ssrMode: !false,\n    // Disables forceFetch on the server (so queries are only run once)\n    link,\n    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__[\"InMemoryCache\"]().restore(initialState || {})\n  });\n}\n\nconst initApollo = (initialState, options) => {\n  // Make sure to create a new client for every server-side request so that data\n  // isn't shared between connections (which would be bad)\n  if (true) {\n    return create(initialState, options);\n  } // Reuse client on the client-side\n\n\n  if (!apolloClient) {\n    apolloClient = create(initialState, options);\n  }\n\n  return apolloClient;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initApollo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvaW5pdEFwb2xsby5qcz9iNDk0Il0sIm5hbWVzIjpbImFwb2xsb0NsaWVudCIsImdsb2JhbCIsImZldGNoIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwiZ2V0VG9rZW4iLCJodHRwTGluayIsImNyZWF0ZUh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJzZXRDb250ZXh0IiwiXyIsImhlYWRlcnMiLCJ0b2tlbiIsImF1dGhvcml6YXRpb24iLCJsaW5rIiwiY29uY2F0IiwiQXBvbGxvQ2xpZW50IiwiY29ubmVjdFRvRGV2VG9vbHMiLCJzc3JNb2RlIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSIsImluaXRBcG9sbG8iLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFlBQVksR0FBRyxJQUFuQixDLENBRUE7O0FBQ0EsSUFBSSxJQUFKLEVBQXNCO0FBQ3BCQyxRQUFNLENBQUNDLEtBQVAsR0FBZUEseURBQWY7QUFDRDs7QUFFRCxTQUFTQyxNQUFULENBQWdCQyxZQUFoQixFQUE4QjtBQUFFQztBQUFGLENBQTlCLEVBQTRDO0FBQzFDLFFBQU1DLFFBQVEsR0FBR0MsdUVBQWMsQ0FBQztBQUM5QkMsT0FBRyxFQUFFLHVCQUR5QixDQUU5Qjs7QUFGOEIsR0FBRCxDQUEvQjtBQUtBLFFBQU1DLFFBQVEsR0FBR0Msc0VBQVUsQ0FBQyxDQUFDQyxDQUFELEVBQUk7QUFBRUM7QUFBRixHQUFKLEtBQW9CO0FBQzlDLFVBQU1DLEtBQUssR0FBR1IsUUFBUSxFQUF0QjtBQUNBLFdBQU87QUFDTE8sYUFBTyxrQ0FDRkEsT0FERTtBQUVMRSxxQkFBYSxFQUFFRCxLQUFLLEdBQUksVUFBU0EsS0FBTSxFQUFuQixHQUF1QjtBQUZ0QztBQURGLEtBQVA7QUFNRCxHQVIwQixDQUEzQjtBQVVBLE1BQUlFLElBQUksR0FBR04sUUFBUSxDQUFDTyxNQUFULENBQWdCVixRQUFoQixDQUFYOztBQUVBLGFBQXFCLEVBbEJxQixDQXlDMUM7OztBQUNBLFNBQU8sSUFBSVcseURBQUosQ0FBaUI7QUFDdEJDLHFCQUFpQixPQURLO0FBRXRCQyxXQUFPLEVBQUUsTUFGYTtBQUVLO0FBQzNCSixRQUhzQjtBQUl0QkssU0FBSyxFQUFFLElBQUlDLDBEQUFKLEdBQW9CQyxPQUFwQixDQUE0QmxCLFlBQVksSUFBSSxFQUE1QztBQUplLEdBQWpCLENBQVA7QUFNRDs7QUFFRCxNQUFNbUIsVUFBVSxHQUFHLENBQUNuQixZQUFELEVBQWVvQixPQUFmLEtBQTJCO0FBQzVDO0FBQ0E7QUFDQSxNQUFJLElBQUosRUFBc0I7QUFDcEIsV0FBT3JCLE1BQU0sQ0FBQ0MsWUFBRCxFQUFlb0IsT0FBZixDQUFiO0FBQ0QsR0FMMkMsQ0FPNUM7OztBQUNBLE1BQUksQ0FBQ3hCLFlBQUwsRUFBbUI7QUFDakJBLGdCQUFZLEdBQUdHLE1BQU0sQ0FBQ0MsWUFBRCxFQUFlb0IsT0FBZixDQUFyQjtBQUNEOztBQUVELFNBQU94QixZQUFQO0FBQ0QsQ0FiRDs7QUFlZXVCLHlFQUFmIiwiZmlsZSI6Ii4vbGliL3V0aWxzL2luaXRBcG9sbG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG5pbXBvcnQgeyBjcmVhdGVIdHRwTGluayB9IGZyb20gXCJhcG9sbG8tbGluay1odHRwXCI7XG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSBcImFwb2xsby1saW5rLWNvbnRleHRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJhcG9sbG8tbGlua1wiO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gXCJhcG9sbG8tbGluay13c1wiO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tIFwiYXBvbGxvLXV0aWxpdGllc1wiO1xuXG5sZXQgYXBvbGxvQ2xpZW50ID0gbnVsbDtcblxuLy8gUG9seWZpbGwgZmV0Y2goKSBvbiB0aGUgc2VydmVyICh1c2VkIGJ5IGFwb2xsby1jbGllbnQpXG5pZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICBnbG9iYWwuZmV0Y2ggPSBmZXRjaDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKGluaXRpYWxTdGF0ZSwgeyBnZXRUb2tlbiB9KSB7XG4gIGNvbnN0IGh0dHBMaW5rID0gY3JlYXRlSHR0cExpbmsoe1xuICAgIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIixcbiAgICAvL2NyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgfSk7XG5cbiAgY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogXCJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG5cbiAgbGV0IGxpbmsgPSBhdXRoTGluay5jb25jYXQoaHR0cExpbmspO1xuXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XG4gICAgY29uc3Qgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoe1xuICAgICAgdXJpOiBgd3M6Ly9sb2NhbGhvc3Q6NDAwMGAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHJlY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgY29ubmVjdGlvblBhcmFtczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGxpbmsgPSBzcGxpdChcbiAgICAgIC8vIHNwbGl0IGJhc2VkIG9uIG9wZXJhdGlvbiB0eXBlXG4gICAgICAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsga2luZCwgb3BlcmF0aW9uIH0gPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgIHJldHVybiBraW5kID09PSBcIk9wZXJhdGlvbkRlZmluaXRpb25cIiAmJiBvcGVyYXRpb24gPT09IFwic3Vic2NyaXB0aW9uXCI7XG4gICAgICB9LFxuICAgICAgd3NMaW5rLFxuICAgICAgYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKVxuICAgICk7XG4gIH1cblxuICAvLyBDaGVjayBvdXQgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9wdWxsLzQ2MTEgaWYgeW91IHdhbnQgdG8gdXNlIHRoZSBBV1NBcHBTeW5jQ2xpZW50XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBjb25uZWN0VG9EZXZUb29sczogcHJvY2Vzcy5icm93c2VyLFxuICAgIHNzck1vZGU6ICFwcm9jZXNzLmJyb3dzZXIsIC8vIERpc2FibGVzIGZvcmNlRmV0Y2ggb24gdGhlIHNlcnZlciAoc28gcXVlcmllcyBhcmUgb25seSBydW4gb25jZSlcbiAgICBsaW5rLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgfSk7XG59XG5cbmNvbnN0IGluaXRBcG9sbG8gPSAoaW5pdGlhbFN0YXRlLCBvcHRpb25zKSA9PiB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBjcmVhdGUoaW5pdGlhbFN0YXRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8vIFJldXNlIGNsaWVudCBvbiB0aGUgY2xpZW50LXNpZGVcbiAgaWYgKCFhcG9sbG9DbGllbnQpIHtcbiAgICBhcG9sbG9DbGllbnQgPSBjcmVhdGUoaW5pdGlhbFN0YXRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0QXBvbGxvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/utils/initApollo.js\n");

/***/ }),

/***/ "./lib/utils/withApollo.js":
/*!*********************************!*\
  !*** ./lib/utils/withApollo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _initApollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initApollo */ \"./lib/utils/initApollo.js\");\n\nvar _jsxFileName = \"/home/alejandro/Escritorio/realtime-chat-with-nextJS-and-graphQL/client/lib/utils/withApollo.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction parseCookies(req, options = {}) {\n  return cookie__WEBPACK_IMPORTED_MODULE_2___default.a.parse(req ? req.headers.cookie || \"\" : document.cookie, options);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App => {\n  var _class, _temp;\n\n  return _temp = _class = class WithData extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n    static async getInitialProps(ctx) {\n      const {\n        Component,\n        router,\n        ctx: {\n          req,\n          res\n        }\n      } = ctx;\n      const apollo = Object(_initApollo__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, {\n        getToken: () => parseCookies(req).token\n      });\n      ctx.ctx.apolloClient = apollo;\n      let appProps = {};\n\n      if (App.getInitialProps) {\n        appProps = await App.getInitialProps(ctx);\n      }\n\n      if (res && res.finished) {\n        // When redirecting, the response is finished.\n        // No point in continuing to render\n        return {};\n      } // Run all graphql queries in the component tree\n      // and extract the resulting data\n\n\n      try {\n        // Run all GraphQL queries\n        await Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__[\"getDataFromTree\"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, appProps), {}, {\n          Component: Component,\n          router: router,\n          apolloClient: apollo\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this));\n      } catch (error) {\n        // Prevent Apollo Client GraphQL errors from crashing SSR.\n        // Handle them in components via the data.error prop:\n        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error\n        console.error(\"Error while running `getDataFromTree`\", error);\n      }\n\n      if (true) {\n        // getDataFromTree does not call componentWillUnmount\n        // head side effect therefore need to be cleared manually\n        next_head__WEBPACK_IMPORTED_MODULE_5___default.a.rewind();\n      } // Extract query data from the Apollo's store\n\n\n      const apolloState = apollo.cache.extract();\n      return _objectSpread(_objectSpread({}, appProps), {}, {\n        apolloState\n      });\n    }\n\n    constructor(props) {\n      super(props); // `getDataFromTree` renders the component first, the client is passed off as a property.\n      // After that rendering is done using Next's normal rendering pipeline\n\n      this.apolloClient = Object(_initApollo__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(props.apolloState, {\n        getToken: () => parseCookies().token\n      });\n    }\n\n    render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, this.props), {}, {\n        apolloClient: this.apolloClient\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 14\n      }, this);\n    }\n\n  }, _defineProperty(_class, \"displayName\", `WithData(${App.displayName})`), _defineProperty(_class, \"propTypes\", {\n    apolloState: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n  }), _temp;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvd2l0aEFwb2xsby5qcz85OGFhIl0sIm5hbWVzIjpbInBhcnNlQ29va2llcyIsInJlcSIsIm9wdGlvbnMiLCJjb29raWUiLCJwYXJzZSIsImhlYWRlcnMiLCJkb2N1bWVudCIsIkFwcCIsIldpdGhEYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyb3V0ZXIiLCJyZXMiLCJhcG9sbG8iLCJpbml0QXBvbGxvIiwiZ2V0VG9rZW4iLCJ0b2tlbiIsImFwb2xsb0NsaWVudCIsImFwcFByb3BzIiwiZmluaXNoZWQiLCJnZXREYXRhRnJvbVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJIZWFkIiwicmV3aW5kIiwiYXBvbGxvU3RhdGUiLCJjYWNoZSIsImV4dHJhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiZGlzcGxheU5hbWUiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsT0FBTyxHQUFHLEVBQXJDLEVBQXlDO0FBQ3ZDLFNBQU9DLDZDQUFNLENBQUNDLEtBQVAsQ0FDTEgsR0FBRyxHQUFHQSxHQUFHLENBQUNJLE9BQUosQ0FBWUYsTUFBWixJQUFzQixFQUF6QixHQUE4QkcsUUFBUSxDQUFDSCxNQURyQyxFQUVMRCxPQUZLLENBQVA7QUFJRDs7QUFFZUssa0VBQUQsSUFBUztBQUFBOztBQUN0QiwwQkFBTyxNQUFNQyxRQUFOLFNBQXVCQyw0Q0FBSyxDQUFDQyxTQUE3QixDQUF1QztBQU01QyxpQkFBYUMsZUFBYixDQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEMsWUFBTTtBQUNKRixpQkFESTtBQUVKRyxjQUZJO0FBR0pELFdBQUcsRUFBRTtBQUFFWCxhQUFGO0FBQU9hO0FBQVA7QUFIRCxVQUlGRixHQUpKO0FBS0EsWUFBTUcsTUFBTSxHQUFHQywyREFBVSxDQUN2QixFQUR1QixFQUV2QjtBQUNFQyxnQkFBUSxFQUFFLE1BQU1qQixZQUFZLENBQUNDLEdBQUQsQ0FBWixDQUFrQmlCO0FBRHBDLE9BRnVCLENBQXpCO0FBT0FOLFNBQUcsQ0FBQ0EsR0FBSixDQUFRTyxZQUFSLEdBQXVCSixNQUF2QjtBQUVBLFVBQUlLLFFBQVEsR0FBRyxFQUFmOztBQUNBLFVBQUliLEdBQUcsQ0FBQ0ksZUFBUixFQUF5QjtBQUN2QlMsZ0JBQVEsR0FBRyxNQUFNYixHQUFHLENBQUNJLGVBQUosQ0FBb0JDLEdBQXBCLENBQWpCO0FBQ0Q7O0FBRUQsVUFBSUUsR0FBRyxJQUFJQSxHQUFHLENBQUNPLFFBQWYsRUFBeUI7QUFDdkI7QUFDQTtBQUNBLGVBQU8sRUFBUDtBQUNELE9BeEIrQixDQTBCaEM7QUFDQTs7O0FBQ0EsVUFBSTtBQUNGO0FBQ0EsY0FBTUMsb0VBQWUsZUFDbkIscUVBQUMsR0FBRCxrQ0FDTUYsUUFETjtBQUVFLG1CQUFTLEVBQUVWLFNBRmI7QUFHRSxnQkFBTSxFQUFFRyxNQUhWO0FBSUUsc0JBQVksRUFBRUU7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEbUIsQ0FBckI7QUFRRCxPQVZELENBVUUsT0FBT1EsS0FBUCxFQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0FDLGVBQU8sQ0FBQ0QsS0FBUixDQUFjLHVDQUFkLEVBQXVEQSxLQUF2RDtBQUNEOztBQUVELFVBQUksSUFBSixFQUFzQjtBQUNwQjtBQUNBO0FBQ0FFLHdEQUFJLENBQUNDLE1BQUw7QUFDRCxPQWpEK0IsQ0FtRGhDOzs7QUFDQSxZQUFNQyxXQUFXLEdBQUdaLE1BQU0sQ0FBQ2EsS0FBUCxDQUFhQyxPQUFiLEVBQXBCO0FBRUEsNkNBQ0tULFFBREw7QUFFRU87QUFGRjtBQUlEOztBQUVERyxlQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixZQUFNQSxLQUFOLEVBRGlCLENBRWpCO0FBQ0E7O0FBQ0EsV0FBS1osWUFBTCxHQUFvQkgsMkRBQVUsQ0FBQ2UsS0FBSyxDQUFDSixXQUFQLEVBQW9CO0FBQ2hEVixnQkFBUSxFQUFFLE1BQU1qQixZQUFZLEdBQUdrQjtBQURpQixPQUFwQixDQUE5QjtBQUdEOztBQUVEYyxVQUFNLEdBQUc7QUFDUCwwQkFBTyxxRUFBQyxHQUFELGtDQUFTLEtBQUtELEtBQWQ7QUFBcUIsb0JBQVksRUFBRSxLQUFLWjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRDs7QUE3RTJDLEdBQTlDLHlDQUN3QixZQUFXWixHQUFHLENBQUMwQixXQUFZLEdBRG5ELHdDQUVxQjtBQUNqQk4sZUFBVyxFQUFFTyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURiLEdBRnJCO0FBK0VELENBaEZEIiwiZmlsZSI6Ii4vbGliL3V0aWxzL3dpdGhBcG9sbG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IGdldERhdGFGcm9tVHJlZSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IGluaXRBcG9sbG8gZnJvbSBcIi4vaW5pdEFwb2xsb1wiO1xuXG5mdW5jdGlvbiBwYXJzZUNvb2tpZXMocmVxLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIGNvb2tpZS5wYXJzZShcbiAgICByZXEgPyByZXEuaGVhZGVycy5jb29raWUgfHwgXCJcIiA6IGRvY3VtZW50LmNvb2tpZSxcbiAgICBvcHRpb25zXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChBcHApID0+IHtcbiAgcmV0dXJuIGNsYXNzIFdpdGhEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgV2l0aERhdGEoJHtBcHAuZGlzcGxheU5hbWV9KWA7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGFwb2xsb1N0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgfTtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBjdHg6IHsgcmVxLCByZXMgfSxcbiAgICAgIH0gPSBjdHg7XG4gICAgICBjb25zdCBhcG9sbG8gPSBpbml0QXBvbGxvKFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIGdldFRva2VuOiAoKSA9PiBwYXJzZUNvb2tpZXMocmVxKS50b2tlbixcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgY3R4LmN0eC5hcG9sbG9DbGllbnQgPSBhcG9sbG87XG5cbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9O1xuICAgICAgaWYgKEFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXMgJiYgcmVzLmZpbmlzaGVkKSB7XG4gICAgICAgIC8vIFdoZW4gcmVkaXJlY3RpbmcsIHRoZSByZXNwb25zZSBpcyBmaW5pc2hlZC5cbiAgICAgICAgLy8gTm8gcG9pbnQgaW4gY29udGludWluZyB0byByZW5kZXJcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuXG4gICAgICAvLyBSdW4gYWxsIGdyYXBocWwgcXVlcmllcyBpbiB0aGUgY29tcG9uZW50IHRyZWVcbiAgICAgIC8vIGFuZCBleHRyYWN0IHRoZSByZXN1bHRpbmcgZGF0YVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gUnVuIGFsbCBHcmFwaFFMIHF1ZXJpZXNcbiAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKFxuICAgICAgICAgIDxBcHBcbiAgICAgICAgICAgIHsuLi5hcHBQcm9wc31cbiAgICAgICAgICAgIENvbXBvbmVudD17Q29tcG9uZW50fVxuICAgICAgICAgICAgcm91dGVyPXtyb3V0ZXJ9XG4gICAgICAgICAgICBhcG9sbG9DbGllbnQ9e2Fwb2xsb31cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxuICAgICAgICAvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxuICAgICAgICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1hcG9sbG8uaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIHJ1bm5pbmcgYGdldERhdGFGcm9tVHJlZWBcIiwgZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxuICAgICAgICAvLyBoZWFkIHNpZGUgZWZmZWN0IHRoZXJlZm9yZSBuZWVkIHRvIGJlIGNsZWFyZWQgbWFudWFsbHlcbiAgICAgICAgSGVhZC5yZXdpbmQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbydzIHN0b3JlXG4gICAgICBjb25zdCBhcG9sbG9TdGF0ZSA9IGFwb2xsby5jYWNoZS5leHRyYWN0KCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFwcFByb3BzLFxuICAgICAgICBhcG9sbG9TdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIC8vIGBnZXREYXRhRnJvbVRyZWVgIHJlbmRlcnMgdGhlIGNvbXBvbmVudCBmaXJzdCwgdGhlIGNsaWVudCBpcyBwYXNzZWQgb2ZmIGFzIGEgcHJvcGVydHkuXG4gICAgICAvLyBBZnRlciB0aGF0IHJlbmRlcmluZyBpcyBkb25lIHVzaW5nIE5leHQncyBub3JtYWwgcmVuZGVyaW5nIHBpcGVsaW5lXG4gICAgICB0aGlzLmFwb2xsb0NsaWVudCA9IGluaXRBcG9sbG8ocHJvcHMuYXBvbGxvU3RhdGUsIHtcbiAgICAgICAgZ2V0VG9rZW46ICgpID0+IHBhcnNlQ29va2llcygpLnRva2VuLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9IGFwb2xsb0NsaWVudD17dGhpcy5hcG9sbG9DbGllbnR9IC8+O1xuICAgIH1cbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/utils/withApollo.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFQyxTQUFHLEVBQUVDLFNBQVMsQ0FBeEMsTUFBd0M7QUFBaEIsS0FBeEIsR0FOVixFQUNFLEVBREY7QUFmRjs7QUFBQTs7O0FBSG1CQyxHLENBSVpDLG1CQUpZRCxHQUlVRSxrQkFKVkY7QUFBQUEsRyxDQUtaRyxlQUxZSCxHQUtNRSxrQkFMTkY7QUErQnJCO0FBQ0E7O0FBRUEsVUFBMkM7QUFDekNJLGVBQWEsR0FBRyxxQkFBUyxNQUFNO0FBQzdCQyxXQUFPLENBQVBBO0FBREZELEdBQWdCLENBQWhCQTtBQU1BRSxTQUFPLEdBQUcscUJBQVMsTUFBTTtBQUN2QkQsV0FBTyxDQUFQQTtBQURGQyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNGLGFBQWE7QUFDeEQsU0FBT0csQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xERyxZQUFNLENBQU5BO0FBZkc7QUFpQkxDLFFBQUksRUFBRSxhQUE4QjtBQUNsQyxnQkFBMkNKLE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxVQUFQLEVBQU9BLENBQVA7QUFuQkc7QUFxQkxFLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNMLE9BQU87QUFDbEQsWUFBTU0sU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJMTSxXQUFPLEVBQUUsYUFBOEI7QUFDckMsZ0JBQTJDVCxPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMTyxhQUFTLEVBQUUsY0FBK0I7QUFDeEMsZ0JBQTJDVixPQUFPO0FBQ2xELFlBQU1XLFlBQVksR0FBR0osRUFBRSxVQUF2QjtBQUNBLFlBQU1LLFVBQVUsR0FBR0wsRUFBRSxJQUFyQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsc0JBQVAsVUFBT0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_utils_withApollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils/withApollo */ \"./lib/utils/withApollo.js\");\n\n\nvar _jsxFileName = \"/home/alejandro/Escritorio/realtime-chat-with-nextJS-and-graphQL/client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {\n  render() {\n    const {\n      Component,\n      pageProps,\n      apolloClient\n    } = this.props;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n        client: apolloClient,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)\n    }, void 0, false);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_utils_withApollo__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9DbGllbnQiLCJwcm9wcyIsIndpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBTixTQUFvQkMsK0NBQXBCLENBQXdCO0FBQ3RCQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDLGVBQUY7QUFBYUMsZUFBYjtBQUF3QkM7QUFBeEIsUUFBeUMsS0FBS0MsS0FBcEQ7QUFDQSx3QkFDRTtBQUFBLDZCQUNFLHFFQUFDLDJEQUFEO0FBQWdCLGNBQU0sRUFBRUQsWUFBeEI7QUFBQSwrQkFDRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBREY7QUFPRDs7QUFWcUI7O0FBYVRHLG9JQUFVLENBQUNQLEtBQUQsQ0FBekIiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIi4uL2xpYi91dGlscy93aXRoQXBvbGxvXCI7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGFwb2xsb0NsaWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oTXlBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-boost\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIj8wNTlmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1ib29zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-boost\n");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGlua1wiPzcxNGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXBvbGxvLWxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGlua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link\n");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-context\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1jb250ZXh0XCI/YmQ1MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1jb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstY29udGV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-context\n");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1odHRwXCI/MTExMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1odHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-http\n");

/***/ }),

/***/ "apollo-link-ws":
/*!*********************************!*\
  !*** external "apollo-link-ws" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-ws\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay13c1wiP2Q5Y2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXBvbGxvLWxpbmstd3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay13c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-ws\n");

/***/ }),

/***/ "apollo-utilities":
/*!***********************************!*\
  !*** external "apollo-utilities" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-utilities\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tdXRpbGl0aWVzXCI/Y2JkMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tdXRpbGl0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXV0aWxpdGllc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-utilities\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIj8yZDIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

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