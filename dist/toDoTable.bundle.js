"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["toDoTable"],{

/***/ "./src/js/to-do-table.js":
/*!*******************************!*\
  !*** ./src/js/to-do-table.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoTable)
/* harmony export */ });
class ToDoTable {
    constructor (list) {
        this.list = list;
        this.table = document.createElement("table");
        this.table.classList.add("to-do-table");
    }

    get table () { return this._table; }

    set table (elem) { this._table = elem; }

    get list () { return this._list; }

    set list (arr) { this._list = arr; }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/to-do-table.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb1RhYmxlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7QUFFbkIsdUJBQXVCOztBQUV2QixrQkFBa0I7O0FBRWxCLHFCQUFxQjtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdG8tZG8tdGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb1RhYmxlIHtcbiAgICBjb25zdHJ1Y3RvciAobGlzdCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgICAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgICAgICB0aGlzLnRhYmxlLmNsYXNzTGlzdC5hZGQoXCJ0by1kby10YWJsZVwiKTtcbiAgICB9XG5cbiAgICBnZXQgdGFibGUgKCkgeyByZXR1cm4gdGhpcy5fdGFibGU7IH1cblxuICAgIHNldCB0YWJsZSAoZWxlbSkgeyB0aGlzLl90YWJsZSA9IGVsZW07IH1cblxuICAgIGdldCBsaXN0ICgpIHsgcmV0dXJuIHRoaXMuX2xpc3Q7IH1cblxuICAgIHNldCBsaXN0IChhcnIpIHsgdGhpcy5fbGlzdCA9IGFycjsgfVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=