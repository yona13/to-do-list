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
/* harmony import */ var _navigator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigator.js */ "./src/js/navigator.js");


class Layout {
    constructor () {
        // Generate Container for all DOM Elements
        this.container = document.createElement("div");
        this.container.classList.add("container");

        // Generate Main Element
        this.main = document.createElement("div");
        this.main.classList.add("main");

        this.nav = new _navigator_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

        document.body.appendChild(this.container);
    }

    /**
     * Get Container Element
     * 
     * @returns {Object} Container HTML Element
     */
    get container () { return this._container; }

    /**
     * Set Container Element
     * 
     * @param {Object} elem - HTML Element for the Container
     */
    set container (elem) { this._container = elem; }

    get nav () { return this._nav; }

    set nav (obj) { this._nav = obj; }

    /**
     * Get Main Element
     * 
     * @returns {Object} Main HTML Element
     */
    get main () { return this._main; }

    /**
     * Set Main Element
     * 
     * @param {Object} elem - HTML Element for Main Element
     */
    set main (elem) { this._main = elem; }

    /**
     * Render Function
     * 
     * Function Used for Render To-Do-List Page
     */
    render () {
        this.container.innerHTML = "";

        this.container.appendChild(this.nav.container);
    }
};

/***/ }),

/***/ "./src/js/navigator.js":
/*!*****************************!*\
  !*** ./src/js/navigator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigator)
/* harmony export */ });
class Navigator {
    #searching = false;
    #expanded = false;

    constructor () {
        this.container = document.createElement("div");
        this.container.classList.add("nav");
    }

    get container () { return this._container; }

    set container (elem) { this._container = elem; }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/layout.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1Qzs7QUFFeEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHFEQUFTOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSwyQkFBMkI7O0FBRTNCLGlCQUFpQjs7QUFFakIsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0RlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCLDJCQUEyQjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbGF5b3V0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbmF2aWdhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4vbmF2aWdhdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBDb250YWluZXIgZm9yIGFsbCBET00gRWxlbWVudHNcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIE1haW4gRWxlbWVudFxuICAgICAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgICAgICAgdGhpcy5uYXYgPSBuZXcgTmF2aWdhdG9yKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IENvbnRhaW5lciBFbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybnMge09iamVjdH0gQ29udGFpbmVyIEhUTUwgRWxlbWVudFxuICAgICAqL1xuICAgIGdldCBjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udGFpbmVyOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgQ29udGFpbmVyIEVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIEhUTUwgRWxlbWVudCBmb3IgdGhlIENvbnRhaW5lclxuICAgICAqL1xuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfVxuXG4gICAgZ2V0IG5hdiAoKSB7IHJldHVybiB0aGlzLl9uYXY7IH1cblxuICAgIHNldCBuYXYgKG9iaikgeyB0aGlzLl9uYXYgPSBvYmo7IH1cblxuICAgIC8qKlxuICAgICAqIEdldCBNYWluIEVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBNYWluIEhUTUwgRWxlbWVudFxuICAgICAqL1xuICAgIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW47IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBNYWluIEVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIEhUTUwgRWxlbWVudCBmb3IgTWFpbiBFbGVtZW50XG4gICAgICovXG4gICAgc2V0IG1haW4gKGVsZW0pIHsgdGhpcy5fbWFpbiA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEZ1bmN0aW9uIFVzZWQgZm9yIFJlbmRlciBUby1Eby1MaXN0IFBhZ2VcbiAgICAgKi9cbiAgICByZW5kZXIgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubmF2LmNvbnRhaW5lcik7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0b3Ige1xuICAgICNzZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAjZXhwYW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICAgIH1cblxuICAgIGdldCBjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udGFpbmVyOyB9XG5cbiAgICBzZXQgY29udGFpbmVyIChlbGVtKSB7IHRoaXMuX2NvbnRhaW5lciA9IGVsZW07IH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9