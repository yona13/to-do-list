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
        this.select.classList.add("dropdown");
        this.#build(arr);

        // Add Event Listeners
        this.select.addEventListener("click", (e) => {
            e.stopPropagation();
            this.select.classList.toggle("open");
        });
    }

    get select () { return this._select; }

    set select (elem) { this._select = elem; }

    get placeHolder () { return this._placeHolder; }

    set placeHolder (elem) { this._placeHolder = elem; }

    get id () { return this._select.id; }

    set id (identifier) { this._select.id = identifier; } 

    close () {
        this.select.classList.remove("open");
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
                this.placeHolder.value = e.currentTarget.textContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tU2VsZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxvQkFBb0I7O0FBRXBCLHdCQUF3Qjs7QUFFeEIseUJBQXlCOztBQUV6Qiw2QkFBNkI7O0FBRTdCLGdCQUFnQjs7QUFFaEIsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvY3VzdG9tLXNlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21TZWxlY3Qge1xuICAgIGNvbnN0cnVjdG9yIChhcnIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25cIik7XG4gICAgICAgIHRoaXMuI2J1aWxkKGFycik7XG5cbiAgICAgICAgLy8gQWRkIEV2ZW50IExpc3RlbmVyc1xuICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3Q7IH1cblxuICAgIHNldCBzZWxlY3QgKGVsZW0pIHsgdGhpcy5fc2VsZWN0ID0gZWxlbTsgfVxuXG4gICAgZ2V0IHBsYWNlSG9sZGVyICgpIHsgcmV0dXJuIHRoaXMuX3BsYWNlSG9sZGVyOyB9XG5cbiAgICBzZXQgcGxhY2VIb2xkZXIgKGVsZW0pIHsgdGhpcy5fcGxhY2VIb2xkZXIgPSBlbGVtOyB9XG5cbiAgICBnZXQgaWQgKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0LmlkOyB9XG5cbiAgICBzZXQgaWQgKGlkZW50aWZpZXIpIHsgdGhpcy5fc2VsZWN0LmlkID0gaWRlbnRpZmllcjsgfSBcblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgfVxuXG4gICAgI2J1aWxkIChhcnIpIHtcbiAgICAgICAgLy8gQ3JlYXRlIFBsYWNlaG9sZGVyIElucHV0XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBQcm9qZWN0XCI7XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIucmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgICAgIC8vIENyZWF0ZSBPcHRpb25zIExpc3RcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwib3B0aW9uc1wiKTtcbiAgICAgICAgYXJyLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG87XG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci52YWx1ZSA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgRWxlbWVudHMgdG8gQ3VzdG9tIFNlbGVjdFxuICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlSG9sZGVyKTtcbiAgICAgICAgdGhpcy5zZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG4gICAgfVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=