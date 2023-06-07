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
        
        // Add Logo
        const logo = document.createElement("div");
        // logo.textContent = String.fromCharCode(10004);
        logo.textContent = "#TODO:"
        logo.classList.add("logo");
        this.nav.appendChild(logo);

        // Add Content Browser


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCLDJCQUEyQjs7QUFFM0IsaUJBQWlCOztBQUVqQixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2xheW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIGdldCBjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udGFpbmVyOyB9XG5cbiAgICBzZXQgY29udGFpbmVyIChlbGVtKSB7IHRoaXMuX2NvbnRhaW5lciA9IGVsZW07IH1cblxuICAgIGdldCBuYXYgKCkgeyByZXR1cm4gdGhpcy5fbmF2OyB9XG5cbiAgICBzZXQgbmF2IChlbGVtKSB7IHRoaXMuX25hdiA9IGVsZW07IH1cblxuICAgICNidWlsZE5hdlBhbmVsICgpIHtcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIExvZ29cbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIC8vIGxvZ28udGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA0KTtcbiAgICAgICAgbG9nby50ZXh0Q29udGVudCA9IFwiI1RPRE86XCJcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICAgICAgLy8gQWRkIENvbnRlbnQgQnJvd3NlclxuXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5uYXYpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIC8vIEJ1aWxkIE5hdmlnYXRpb24gUGFuZWxcbiAgICAgICAgdGhpcy4jYnVpbGROYXZQYW5lbCgpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9