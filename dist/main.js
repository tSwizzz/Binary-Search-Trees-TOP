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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* binding */ Node),\n/* harmony export */   \"Tree\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge.js */ \"./src/merge.js\");\n/* harmony import */ var _driver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver.js */ \"./src/driver.js\");\n\n\n\nclass Node {\n    constructor(data = null, left = null, right = null) {\n        this.data = data;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Tree {\n    constructor(arr) {\n        this.sortedArr = (0,_merge_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n        this.root = this.buildTree(this.sortedArr, 0, this.sortedArr.length - 1);\n    }\n\n    buildTree(sortedArr, start, end) {\n        if(start > end) return null;\n\n        const mid = Math.floor((start + end) / 2);\n        const root = new Node(sortedArr[mid]);\n\n        root.left = this.buildTree(sortedArr, start, mid - 1);\n        root.right = this.buildTree(sortedArr, mid + 1, end);\n\n        return root;\n    }\n\n    //accepts a value to insert\n    insert(root, key) {\n        if(root == null) {\n            root = new Node(key);\n\n            //after node is inserted, we re-balance the tree and get a new root\n            this.reBalanceInsert(key);\n        } else if(root.data < key) {\n            root.right = this.insert(root.right, key);\n        } else if(root.data > key) {\n            root.left = this.insert(root.left, key);\n        }\n        if(root.data == key) {\n            return root;\n        }\n        return root;\n    }\n\n    //accepts a value to delete\n    delete(root, key) {\n        if(root.data == key) {\n            if(root.left == null && root.right == null) {\n                root.data = null;\n            } else if(root.left == null && root.right != null) {\n                root.data = root.right.data;\n                root.right = null;\n            } else if(root.right == null && root.left != null) {\n                root.data = root.left.data;\n                root.left = null;\n            } else {\n                let rootToDelete = root;\n                root = root.right;\n\n                while(root.left) {\n                    root = root.left;\n                }\n                rootToDelete.data = root.data;\n                root.data = null;\n            }\n            \n            //after node is deleted, we re-balance the tree and get a new root\n            this.sortedArr = this.reBalanceDelete(this.sortedArr, key);\n            this.root = this.buildTree(this.sortedArr, 0, this.sortedArr.length - 1);\n        }\n\n        if(root.data != key) {\n            if(root.data < key && root.right != null) {\n                this.delete(root.right, key);\n            }\n            if(root.data > key && root.left != null) {\n                this.delete(root.left, key);\n            }\n        }\n\n        return;\n    }\n\n    //accepts a value and returns the node with the given value\n    find(root, key) {\n        if(root == null || root.data == key) {\n            return root;\n        }\n\n        if(root.data < key) {\n            return this.find(root.right, key);\n        } \n        return this.find(root.left, key);\n    }\n\n    levelOrder() {\n        //do this next :)\n    }\n\n    //checks if tree is balanced\n    isBalanced(root) {\n        let originalRoot = root;\n        let lCount = 0;\n        let rCount = 0;\n\n        while(root.left) {\n            root = root.left;\n            lCount++;\n        }\n\n        root = originalRoot;\n\n        while(root.right) {\n            root = root.right;\n            rCount++;\n        }\n\n        if(lCount == rCount || lCount - rCount == -1 || lCount - rCount == 1) {\n            return console.log(\"The tree is balanced!\");\n        }\n\n        return console.log(\"The tree is not balanced!\");\n    }\n\n    reBalanceInsert(key) {\n        this.sortedArr.push(key);\n        this.sortedArr = (0,_merge_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.sortedArr);\n        this.root = this.buildTree(this.sortedArr, 0, this.sortedArr.length - 1);\n    }\n\n    reBalanceDelete(arr, key) {\n        let newArr = [];\n        for(let k = 0; k < arr.length; k++) {\n            if(arr[k] != key) {\n                newArr.push(arr[k]);\n            }\n        }\n        return (0,_merge_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newArr);\n    }\n\n    //bst visual\n    prettyPrint(node, prefix = '', isLeft = true) {\n        if (node.right !== null) {\n        this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);\n        }\n        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);\n        if (node.left !== null) {\n        this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);\n        }\n    }\n}\nlet array = [2,4,6,8,10,12,14];\n(0,_driver_js__WEBPACK_IMPORTED_MODULE_1__.arrayAndRoot)(array);\n(0,_driver_js__WEBPACK_IMPORTED_MODULE_1__.driver)();\n\n\n\n\n\n//# sourceURL=webpack://binary-search-trees-top/./src/bst.js?");

/***/ }),

/***/ "./src/driver.js":
/*!***********************!*\
  !*** ./src/driver.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrayAndRoot\": () => (/* binding */ arrayAndRoot),\n/* harmony export */   \"driver\": () => (/* binding */ driver)\n/* harmony export */ });\n/* harmony import */ var _bst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bst */ \"./src/bst.js\");\n\n\nlet tree;\n\n//sorts array and grabs root as well --> tree.sortedArr and tree.root\nfunction arrayAndRoot(arr) {\n    tree = new _bst__WEBPACK_IMPORTED_MODULE_0__.Tree(arr);\n}\n\n//lets check it all!\nfunction driver() {\n    tree.isBalanced(tree.root);\n    tree.insert(tree.root, 21);\n    tree.insert(tree.root, 25);\n    tree.insert(tree.root, 26);\n    tree.insert(tree.root, 78);\n    tree.insert(tree.root, 281);\n    tree.prettyPrint(tree.root);\n}\n\n\n//# sourceURL=webpack://binary-search-trees-top/./src/driver.js?");

/***/ }),

/***/ "./src/merge.js":
/*!**********************!*\
  !*** ./src/merge.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSortRecursion);\n\n//sorts array via merge sort\nfunction mergeSortRecursion(arr) {\n    if(arr.length == 1 || arr.length == 0) return arr;\n\n    const mid = Math.floor(arr.length / 2);\n    const left = arr.slice(0, mid);\n    const right = arr.slice(mid, arr.length);\n\n    return merge(mergeSortRecursion(left), mergeSortRecursion(right));\n}\n\nfunction merge(leftArr, rightArr) {\n    let result = [];\n    let iL = 0;\n    let iR = 0;\n    \n    while(iL < leftArr.length && iR < rightArr.length) {\n        if(leftArr[iL] < rightArr[iR]) {\n            result.push(leftArr[iL]);\n            iL++\n        } else {\n            result.push(rightArr[iR]);\n            iR++;\n        }\n    }\n\n    while(iL < leftArr.length) {\n        result.push(leftArr[iL]);\n        iL++;\n    }\n\n    while(iR < rightArr.length) {\n        result.push(rightArr[iR]);\n        iR++;\n    }\n\n    return result = removeDuplicates(result);\n}\n\nfunction removeDuplicates(arr) {\n    let newA = [];\n\n    //arr is sorted already\n    for(let k = 0; k < arr.length; k++ ) {\n        if(arr[k] != arr[k + 1]) {\n            newA.push(arr[k]);\n        }\n    }\n    return newA;\n}\n\n\n//# sourceURL=webpack://binary-search-trees-top/./src/merge.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/bst.js");
/******/ 	
/******/ })()
;