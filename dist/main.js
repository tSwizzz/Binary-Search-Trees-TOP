/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bst.js":
/*!********************!*\
  !*** ./src/bst.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* binding */ Node),\n/* harmony export */   \"Tree\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge */ \"./src/merge.js\");\n\n\nclass Node {\n    constructor(data = null, left = null, right = null) {\n        this.data = data;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Tree {\n    constructor(arr) {\n        this.sortedArr = (0,_merge__WEBPACK_IMPORTED_MODULE_0__.mergeSortRecursion)(arr);\n        this.root = this.buildTree(this.sortedArr, 0, this.sortedArr.length - 1);\n    }\n\n    buildTree(sortedArr, start, end) {\n        if(start > end) return null;\n\n        const mid = Math.floor((start + end) / 2);\n        const root = new Node(sortedArr[mid]);\n\n        root.left = this.buildTree(sortedArr, start, mid - 1);\n        root.right = this.buildTree(sortedArr, mid + 1, end);\n\n        return root;\n\n    }\n\n    //accepts a value to insert\n    insert(root, key) {\n        if(root == null) {\n            return root = new Node(key);\n        }\n\n        if(root.data < key) {\n            root.right = this.insert(root.right, key);\n        } else {\n            root.left = this.insert(root.left, key);\n        }\n\n        return root;\n    }\n\n    //accepts a value to delete\n    delete() {\n        //\n    }\n\n    //accepts a value and returns the node with the given value\n    find(root, key) {\n        if(root == null || root.data == key) {\n            return root;\n        }\n\n        if(root.data < key) {\n            return this.find(root.right, key);\n        } \n        return this.find(root.left, key);\n    }\n}\n\nconst tree = new Tree([1,2,3,4,5]);\nconsole.log(tree.insert(tree.root, 15))\n\n//bst visual\nconst prettyPrint = (node, prefix = '', isLeft = true) => {\n    if (node.right !== null) {\n      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);\n    }\n    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);\n    if (node.left !== null) {\n      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);\n    }\n  }\n\nprettyPrint(tree.root);\n\n\n\n\n//# sourceURL=webpack://binary-search-trees-top/./src/bst.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bst */ \"./src/bst.js\");\n \n\n//# sourceURL=webpack://binary-search-trees-top/./src/index.js?");

/***/ }),

/***/ "./src/merge.js":
/*!**********************!*\
  !*** ./src/merge.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeSortRecursion\": () => (/* binding */ mergeSortRecursion),\n/* harmony export */   \"removeDuplicates\": () => (/* binding */ removeDuplicates)\n/* harmony export */ });\n//sorts array via merge sort\nfunction mergeSortRecursion(arr) {\n    if(arr.length == 1 || arr.length == 0) return arr;\n\n    const mid = Math.floor(arr.length / 2);\n    const left = arr.slice(0, mid);\n    const right = arr.slice(mid, arr.length);\n\n    return merge(mergeSortRecursion(left), mergeSortRecursion(right));\n}\n\nfunction merge(leftArr, rightArr) {\n    let result = [];\n    let iL = 0;\n    let iR = 0;\n    \n    while(iL < leftArr.length && iR < rightArr.length) {\n        if(leftArr[iL] < rightArr[iR]) {\n            result.push(leftArr[iL]);\n            iL++\n        } else {\n            result.push(rightArr[iR]);\n            iR++;\n        }\n    }\n\n    while(iL < leftArr.length) {\n        result.push(leftArr[iL]);\n        iL++;\n    }\n\n    while(iR < rightArr.length) {\n        result.push(rightArr[iR]);\n        iR++;\n    }\n\n    return result = removeDuplicates(result);\n}\n\nfunction removeDuplicates(arr) {\n    let newA = [];\n\n    //arr is sorted already\n    for(let k = 0; k < arr.length; k++ ) {\n        if(arr[k] != arr[k + 1]) {\n            newA.push(arr[k]);\n        }\n    }\n    return newA;\n}\n\n\n//# sourceURL=webpack://binary-search-trees-top/./src/merge.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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