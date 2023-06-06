"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["layout"],{

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
class Layout {
    constructor () {
        this.container = document.createElement("div");
        this.container.classList.add("container");

        document.body.appendChild(this.container);
    }

    get container () { return this._container; }

    set container (elem) { this._container = elem; }

    get nav () { return this._nav; }

    set nav (elem) { this._nav = elem; }

    #buildNavPanel () {
        this.nav = document.createElement("div");
        this.nav.classList.add("nav");
        
        // Add Title
        const navTitle = document.createElement("h1");
        navTitle.textContent = "To Do List";
        this.nav.appendChild(navTitle);

        this.container.appendChild(this.nav);
    }

    render () {
        // Build Navigation Panel
        this.#buildNavPanel();
    }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/layout.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCLDJCQUEyQjs7QUFFM0IsaUJBQWlCOztBQUVqQixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9sYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBnZXQgY29udGFpbmVyICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjsgfVxuXG4gICAgc2V0IGNvbnRhaW5lciAoZWxlbSkgeyB0aGlzLl9jb250YWluZXIgPSBlbGVtOyB9XG5cbiAgICBnZXQgbmF2ICgpIHsgcmV0dXJuIHRoaXMuX25hdjsgfVxuXG4gICAgc2V0IG5hdiAoZWxlbSkgeyB0aGlzLl9uYXYgPSBlbGVtOyB9XG5cbiAgICAjYnVpbGROYXZQYW5lbCAoKSB7XG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5uYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBUaXRsZVxuICAgICAgICBjb25zdCBuYXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgbmF2VGl0bGUudGV4dENvbnRlbnQgPSBcIlRvIERvIExpc3RcIjtcbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQobmF2VGl0bGUpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubmF2KTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICAvLyBCdWlsZCBOYXZpZ2F0aW9uIFBhbmVsXG4gICAgICAgIHRoaXMuI2J1aWxkTmF2UGFuZWwoKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==