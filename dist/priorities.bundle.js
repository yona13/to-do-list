"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["priorities"],{

/***/ "./src/js/priorities.js":
/*!******************************!*\
  !*** ./src/js/priorities.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Priorities)
/* harmony export */ });
class Priorities {
    constructor () {
        this.list = ["Low", "Medium", "High"];
        this.priority = this.list[0].toLowerCase();
        this.#build();
    }

    get priority () { return this._priority; }

    set priority (value) { this._priority = value; }

    get list () { return this._list; }

    set list (arr) { this._list = arr; }

    get container () { return this._container; }

    set container (elem) { this._container = elem; }

    #updateButtons (value) {
        this.container.childNodes.forEach(button => {
            if (button.value === value){
                console.log(`Selected button: ${this.priority};`);
                button.classList.add("clicked");
            }
            else
                button.classList.remove("clicked");
        });
    }

    #addListeners () {
        this.container.childNodes.forEach(button => {
            button.addEventListener("click", (e) => {
                this.priority = button.value;
                this.#updateButtons(button.value);
            });
        });
    }

    #build () {
        this.container = document.createElement("div");
        this.container.classList.add("priority-container");
        ["Low", "Medium", "High"].forEach(priority => {
            const button = document.createElement("button");
            button.value = priority.toLowerCase();
            button.textContent = priority;
            button.classList.add("priority-button");
            if (priority === "Low")
                button.classList.add("clicked");
            button.id = `${priority.toLowerCase()}-priority`;
            this.container.appendChild(button);
        });

        // Add Event Listeners for Buttons
        this.#addListeners();
    }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/priorities.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdGllcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCLDJCQUEyQjs7QUFFM0Isa0JBQWtCOztBQUVsQixxQkFBcUI7O0FBRXJCLHVCQUF1Qjs7QUFFdkIsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZUFBZTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcmlvcml0aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW9yaXRpZXMge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHRoaXMubGlzdFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLiNidWlsZCgpO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSAoKSB7IHJldHVybiB0aGlzLl9wcmlvcml0eTsgfVxuXG4gICAgc2V0IHByaW9yaXR5ICh2YWx1ZSkgeyB0aGlzLl9wcmlvcml0eSA9IHZhbHVlOyB9XG5cbiAgICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0OyB9XG5cbiAgICBzZXQgbGlzdCAoYXJyKSB7IHRoaXMuX2xpc3QgPSBhcnI7IH1cblxuICAgIGdldCBjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udGFpbmVyOyB9XG5cbiAgICBzZXQgY29udGFpbmVyIChlbGVtKSB7IHRoaXMuX2NvbnRhaW5lciA9IGVsZW07IH1cblxuICAgICN1cGRhdGVCdXR0b25zICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b24udmFsdWUgPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU2VsZWN0ZWQgYnV0dG9uOiAke3RoaXMucHJpb3JpdHl9O2ApO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gYnV0dG9uLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuI3VwZGF0ZUJ1dHRvbnMoYnV0dG9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjYnVpbGQgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1jb250YWluZXJcIik7XG4gICAgICAgIFtcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl0uZm9yRWFjaChwcmlvcml0eSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnV0dG9uLnZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25cIik7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHkgPT09IFwiTG93XCIpXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmlkID0gYCR7cHJpb3JpdHkudG9Mb3dlckNhc2UoKX0tcHJpb3JpdHlgO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEV2ZW50IExpc3RlbmVycyBmb3IgQnV0dG9uc1xuICAgICAgICB0aGlzLiNhZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==