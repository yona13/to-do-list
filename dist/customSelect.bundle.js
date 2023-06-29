"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["customSelect"],{

/***/ "./src/js/custom-select.js":
/*!*********************************!*\
  !*** ./src/js/custom-select.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomSelect)
/* harmony export */ });
class CustomSelect {
    constructor (arr) {
        this.select = document.createElement("div");
        this.options = arr;
        this.#createOptions();
    }

    get select () { return this._select; }

    set select (elem) { this._select = elem; }

    get options () { return this._options; }

    set options (arr) { this._options = arr; }

    #createOptions () {
        const sel = document.createElement("select");
        this.options.forEach(o => {
            const option = document.createElement("option");
            option.value = o;
            option.textContent = o;
            sel.appendChild(o);
        });

        this.select.appendChild(sel);
    }

    setID (id) {
        this.select.id = id;
    }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/custom-select.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tU2VsZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEIsd0JBQXdCOztBQUV4QixxQkFBcUI7O0FBRXJCLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2N1c3RvbS1zZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAoYXJyKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gYXJyO1xuICAgICAgICB0aGlzLiNjcmVhdGVPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3Q7IH1cblxuICAgIHNldCBzZWxlY3QgKGVsZW0pIHsgdGhpcy5fc2VsZWN0ID0gZWxlbTsgfVxuXG4gICAgZ2V0IG9wdGlvbnMgKCkgeyByZXR1cm4gdGhpcy5fb3B0aW9uczsgfVxuXG4gICAgc2V0IG9wdGlvbnMgKGFycikgeyB0aGlzLl9vcHRpb25zID0gYXJyOyB9XG5cbiAgICAjY3JlYXRlT3B0aW9ucyAoKSB7XG4gICAgICAgIGNvbnN0IHNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG8gPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IG87XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvO1xuICAgICAgICAgICAgc2VsLmFwcGVuZENoaWxkKG8pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmRDaGlsZChzZWwpO1xuICAgIH1cblxuICAgIHNldElEIChpZCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5pZCA9IGlkO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9