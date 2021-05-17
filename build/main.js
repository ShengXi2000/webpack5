/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {sum} = __webpack_require__(/*! ./two */ \"./src/two.js\");\r\n\r\nconsole.log(sum);\r\n\r\n// webpack打包有分 开发模式环境打包 和 生产模式环境打包\r\n// 开发模式环境打包方式 webpack --mode development\r\n// 生产模式环境打包方式 webpack --mode production\r\n\r\n// webpack 可以自定义打包的入口文件和输出位置以及输出文件的命名\r\n\r\n// 自定义格式:\r\n// webpack 入口文件路径 -o 输出文件目录及输出文件名称 打包模式\r\n\r\n// webpack ./src/index.js -o ./build/build.js --mode development\r\n\r\n// 每次打包都需要这样写就太麻烦了，所以可以用更改配置文件的方式来指定入口文件路径与输出文件目录与打包模式等\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/one.js":
/*!********************!*\
  !*** ./src/one.js ***!
  \********************/
/***/ ((module) => {

eval("let n = 100;\r\nfunction add(...a){\r\n    console.log(a);\r\n}\r\nadd(1,2,3,4,5)\r\n\r\nfunction demo(string){\r\n    return string;\r\n}\r\n\r\nmodule.exports = {n,add,demo}\n\n//# sourceURL=webpack://webpack-demo/./src/one.js?");

/***/ }),

/***/ "./src/two.js":
/*!********************!*\
  !*** ./src/two.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {n,add,demo} = __webpack_require__(/*! ./one */ \"./src/one.js\");\r\n\r\nlet b=20;\r\nlet sum = add(n,b);\r\n\r\nmodule.exports = {sum};\n\n//# sourceURL=webpack://webpack-demo/./src/two.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;