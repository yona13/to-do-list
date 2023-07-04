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
    #enabled = true;

    constructor (arr) {
        this.select = document.createElement("div");
        this.select.classList.add("dropdown");
        this.value = "";
        this.#build(arr);

        // Add Event Listeners
        this.select.addEventListener("click", (e) => {
            e.stopPropagation();
            if (this.#enabled)
                this.select.classList.toggle("open");
        });
    }

    get select () { return this._select; }

    set select (elem) { this._select = elem; }

    get placeHolder () { return this._placeHolder; }

    set placeHolder (elem) { this._placeHolder = elem; }

    get value () { return this._value; }

    set value (value) { this._value = value;}

    get id () { return this._select.id; }

    set id (identifier) { this._select.id = identifier; } 

    close () {
        this.select.classList.remove("open");
    }

    set () {
        this.#enabled = !this.#enabled;
        this.select.classList.toggle("disable");
    }

    #build (arr) {
        // Create Placeholder Input
        this.placeHolder = document.createElement("input");
        this.placeHolder.type = "text";
        this.placeHolder.placeholder = "Select a Project";
        this.placeHolder.readOnly = true;

        // Create Options List
        const options = document.createElement("ul");
        options.classList.add("options");
        arr.forEach(o => {
            const option = document.createElement("li");
            option.classList.add("option");
            option.textContent = o;
            option.addEventListener("click", (e) => {
                this.value = e.currentTarget.textContent;
                this.placeHolder.value = this.value;
            });
            options.appendChild(option);
        });

        // Add Elements to Custom Select
        this.select.appendChild(this.placeHolder);
        this.select.appendChild(options);
    }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/custom-select.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tU2VsZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsb0JBQW9COztBQUVwQix3QkFBd0I7O0FBRXhCLHlCQUF5Qjs7QUFFekIsNkJBQTZCOztBQUU3QixtQkFBbUI7O0FBRW5CLHdCQUF3Qjs7QUFFeEIsZ0JBQWdCOztBQUVoQiwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2N1c3RvbS1zZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgICAjZW5hYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvciAoYXJyKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duXCIpO1xuICAgICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy4jYnVpbGQoYXJyKTtcblxuICAgICAgICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzXG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiNlbmFibGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ICgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdDsgfVxuXG4gICAgc2V0IHNlbGVjdCAoZWxlbSkgeyB0aGlzLl9zZWxlY3QgPSBlbGVtOyB9XG5cbiAgICBnZXQgcGxhY2VIb2xkZXIgKCkgeyByZXR1cm4gdGhpcy5fcGxhY2VIb2xkZXI7IH1cblxuICAgIHNldCBwbGFjZUhvbGRlciAoZWxlbSkgeyB0aGlzLl9wbGFjZUhvbGRlciA9IGVsZW07IH1cblxuICAgIGdldCB2YWx1ZSAoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gICAgc2V0IHZhbHVlICh2YWx1ZSkgeyB0aGlzLl92YWx1ZSA9IHZhbHVlO31cblxuICAgIGdldCBpZCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3QuaWQ7IH1cblxuICAgIHNldCBpZCAoaWRlbnRpZmllcikgeyB0aGlzLl9zZWxlY3QuaWQgPSBpZGVudGlmaWVyOyB9IFxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICB9XG5cbiAgICBzZXQgKCkge1xuICAgICAgICB0aGlzLiNlbmFibGVkID0gIXRoaXMuI2VuYWJsZWQ7XG4gICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlXCIpO1xuICAgIH1cblxuICAgICNidWlsZCAoYXJyKSB7XG4gICAgICAgIC8vIENyZWF0ZSBQbGFjZWhvbGRlciBJbnB1dFxuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgUHJvamVjdFwiO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgICAvLyBDcmVhdGUgT3B0aW9ucyBMaXN0XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm9wdGlvbnNcIik7XG4gICAgICAgIGFyci5mb3JFYWNoKG8gPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvO1xuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEVsZW1lbnRzIHRvIEN1c3RvbSBTZWxlY3RcbiAgICAgICAgdGhpcy5zZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy5wbGFjZUhvbGRlcik7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9