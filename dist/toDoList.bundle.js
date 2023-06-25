"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["toDoList"],{

/***/ "./src/js/to-do-list.js":
/*!******************************!*\
  !*** ./src/js/to-do-list.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
class ToDoList {
    constructor (popup) {
        this.popup = popup;

        // Build Content Dom Element
        this.content = document.createElement("div");
        this.content.classList.add("content");

        if (localStorage.getItem("todos")) {
            this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
        } else 
            this.todos = [];
    }

    get todos () { return this._todos; }

    set todos (arr) { this._todos = arr; }

    get selection () { return this._selection; }

    set selection (project) {
        this._selection = project;
        this.#buildContent();
    }

    get content () { return this._content; }

    set content (elem) { this._content = elem; }

    get newTodo () { return this._newTodo; }

    set newTodo (elem) { this._newTodo = elem; }

    #buildContent () {
        this.content.innerHTML = "";

        // Add Title to Content
        const contentTitle = document.createElement("h1");
        contentTitle.textContent = this.selection.name;

        // Add Project Specific List
        // TODO: this

        // Add New-To-Do Button
        const todoButton = document.createElement("button");
        todoButton.classList.add("new-to-do-button");
        todoButton.textContent = "+ To Do";
        todoButton.addEventListener("click", (e) => {
            // TODO: This
        });

        this.content.appendChild(contentTitle);
        this.content.appendChild(todoButton);
    }

    setup () {
        this.#buildContent();
    }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/to-do-list.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb0xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CLHNCQUFzQjs7QUFFdEIsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7O0FBRXJCLHlCQUF5Qjs7QUFFekIscUJBQXFCOztBQUVyQix5QkFBeUI7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3RvLWRvLWxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yIChwb3B1cCkge1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG5cbiAgICAgICAgLy8gQnVpbGQgQ29udGVudCBEb20gRWxlbWVudFxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgfSBlbHNlIFxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGdldCB0b2RvcyAoKSB7IHJldHVybiB0aGlzLl90b2RvczsgfVxuXG4gICAgc2V0IHRvZG9zIChhcnIpIHsgdGhpcy5fdG9kb3MgPSBhcnI7IH1cblxuICAgIGdldCBzZWxlY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0aW9uOyB9XG5cbiAgICBzZXQgc2VsZWN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuI2J1aWxkQ29udGVudCgpO1xuICAgIH1cblxuICAgIGdldCBjb250ZW50ICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7IH1cblxuICAgIHNldCBjb250ZW50IChlbGVtKSB7IHRoaXMuX2NvbnRlbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgbmV3VG9kbyAoKSB7IHJldHVybiB0aGlzLl9uZXdUb2RvOyB9XG5cbiAgICBzZXQgbmV3VG9kbyAoZWxlbSkgeyB0aGlzLl9uZXdUb2RvID0gZWxlbTsgfVxuXG4gICAgI2J1aWxkQ29udGVudCAoKSB7XG4gICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCBUaXRsZSB0byBDb250ZW50XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5zZWxlY3Rpb24ubmFtZTtcblxuICAgICAgICAvLyBBZGQgUHJvamVjdCBTcGVjaWZpYyBMaXN0XG4gICAgICAgIC8vIFRPRE86IHRoaXNcblxuICAgICAgICAvLyBBZGQgTmV3LVRvLURvIEJ1dHRvblxuICAgICAgICBjb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LXRvLWRvLWJ1dHRvblwiKTtcbiAgICAgICAgdG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBUbyBEb1wiO1xuICAgICAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETzogVGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRvZG9CdXR0b24pO1xuICAgIH1cblxuICAgIHNldHVwICgpIHtcbiAgICAgICAgdGhpcy4jYnVpbGRDb250ZW50KCk7XG4gICAgfVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=