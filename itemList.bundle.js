"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["itemList"],{

/***/ "./src/js/item-list.js":
/*!*****************************!*\
  !*** ./src/js/item-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemList)
/* harmony export */ });
class ItemList {
    constructor (id) {
        this.list = document.createElement("ul");
        this.list.id = `${id}-list`;
    }

    get list () { return this._list; }

    set list (elem) { this._list = elem; }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/item-list.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbUxpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQSwwQkFBMEIsR0FBRztBQUM3Qjs7QUFFQSxrQkFBa0I7O0FBRWxCLHNCQUFzQjtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvaXRlbS1saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1MaXN0IHtcbiAgICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICB0aGlzLmxpc3QuaWQgPSBgJHtpZH0tbGlzdGA7XG4gICAgfVxuXG4gICAgZ2V0IGxpc3QgKCkgeyByZXR1cm4gdGhpcy5fbGlzdDsgfVxuXG4gICAgc2V0IGxpc3QgKGVsZW0pIHsgdGhpcy5fbGlzdCA9IGVsZW07IH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9