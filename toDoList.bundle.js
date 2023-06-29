"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["toDoList"],{

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

/***/ }),

/***/ "./src/js/to-do-list.js":
/*!******************************!*\
  !*** ./src/js/to-do-list.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var _custom_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-select.js */ "./src/js/custom-select.js");


class ToDoList {
    constructor (popup) {
        this.popup = popup;

        // Build Content Dom Element
        this.content = document.createElement("div");
        this.content.classList.add("content");
        
        // Build New-Todo Popup DOM Element
        this.newTodo = document.createElement("div");
        this.newTodo.classList.add("todo-popup");

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

    get projects () { return this._projects; }

    set projects (arr) { this._projects = arr; }

    #buildPopup () {
        this.newTodo.innerHTML = "";

        // Input for Project Options
        const projectSelectLabel = document.createElement("label");
        projectSelectLabel.for = "project-select";
        projectSelectLabel.textContent = "Choose a Project";
        const options = [];
        this.projects.forEach(p => { options.push(p.name); });
        const projectSelect = new _custom_select_js__WEBPACK_IMPORTED_MODULE_0__["default"](options);
        projectSelect.setID("project-select");
        // const projectSelect = document.createElement("select");
        // projectSelect.id = "project-select";
        // projectSelect.classList.add("project-select");
        // this.projects.forEach(p => {
        //     const projectOption = document.createElement("option");
        //     projectOption.textContent = p.name;
        //     projectSelect.appendChild(projectOption);
        // });

        // Input for Due Date, if available
        const dueDateLabel = document.createElement("label");
        dueDateLabel.for = "due-date";
        dueDateLabel.textContent = "Due Date";
        const dueDate = document.createElement("input");
        dueDate.id = "due-date";
        dueDate.type = "date";
        dueDate.classList.add("due-date");
        dueDate.min = new Date().toISOString().split("T")[0];
        console.log(dueDate.min);

        this.newTodo.appendChild(projectSelectLabel);
        this.newTodo.appendChild(projectSelect);
        this.newTodo.appendChild(dueDateLabel);
        this.newTodo.appendChild(dueDate);
    }

    #buildContent () {
        this.content.innerHTML = "";

        // Add Title to Content
        const contentTitle = document.createElement("h1");
        contentTitle.classList.add("content-title");
        contentTitle.textContent = this.selection.name;

        // Add Project Specific List
        const projectList = document.createElement("ul");
        projectList.classList.add("content-list");
        // TODO: Replace ul with table?

        // Add New-To-Do Button
        const todoButton = document.createElement("button");
        todoButton.classList.add("add-to-do");
        todoButton.textContent = "+ To Do";
        todoButton.addEventListener("click", (e) => {
            this.#buildPopup();
            this.popup.enter(this.newTodo);
        });

        this.content.appendChild(contentTitle);
        this.content.appendChild(projectList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb0xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9COztBQUVwQix3QkFBd0I7O0FBRXhCLHFCQUFxQjs7QUFFckIsd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUI4Qzs7QUFFL0I7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CLHNCQUFzQjs7QUFFdEIsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7O0FBRXJCLHlCQUF5Qjs7QUFFekIscUJBQXFCOztBQUVyQix5QkFBeUI7O0FBRXpCLHNCQUFzQjs7QUFFdEIseUJBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUJBQXVCO0FBQzVELGtDQUFrQyx5REFBWTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jdXN0b20tc2VsZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdG8tZG8tbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21TZWxlY3Qge1xuICAgIGNvbnN0cnVjdG9yIChhcnIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBhcnI7XG4gICAgICAgIHRoaXMuI2NyZWF0ZU9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ICgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdDsgfVxuXG4gICAgc2V0IHNlbGVjdCAoZWxlbSkgeyB0aGlzLl9zZWxlY3QgPSBlbGVtOyB9XG5cbiAgICBnZXQgb3B0aW9ucyAoKSB7IHJldHVybiB0aGlzLl9vcHRpb25zOyB9XG5cbiAgICBzZXQgb3B0aW9ucyAoYXJyKSB7IHRoaXMuX29wdGlvbnMgPSBhcnI7IH1cblxuICAgICNjcmVhdGVPcHRpb25zICgpIHtcbiAgICAgICAgY29uc3Qgc2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gbztcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG87XG4gICAgICAgICAgICBzZWwuYXBwZW5kQ2hpbGQobyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZENoaWxkKHNlbCk7XG4gICAgfVxuXG4gICAgc2V0SUQgKGlkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmlkID0gaWQ7XG4gICAgfVxufTsiLCJpbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gXCIuL2N1c3RvbS1zZWxlY3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yIChwb3B1cCkge1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG5cbiAgICAgICAgLy8gQnVpbGQgQ29udGVudCBEb20gRWxlbWVudFxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gICAgICAgIFxuICAgICAgICAvLyBCdWlsZCBOZXctVG9kbyBQb3B1cCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLm5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm5ld1RvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wdXBcIik7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgfSBlbHNlIFxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGdldCB0b2RvcyAoKSB7IHJldHVybiB0aGlzLl90b2RvczsgfVxuXG4gICAgc2V0IHRvZG9zIChhcnIpIHsgdGhpcy5fdG9kb3MgPSBhcnI7IH1cblxuICAgIGdldCBzZWxlY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0aW9uOyB9XG5cbiAgICBzZXQgc2VsZWN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuI2J1aWxkQ29udGVudCgpO1xuICAgIH1cblxuICAgIGdldCBjb250ZW50ICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7IH1cblxuICAgIHNldCBjb250ZW50IChlbGVtKSB7IHRoaXMuX2NvbnRlbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgbmV3VG9kbyAoKSB7IHJldHVybiB0aGlzLl9uZXdUb2RvOyB9XG5cbiAgICBzZXQgbmV3VG9kbyAoZWxlbSkgeyB0aGlzLl9uZXdUb2RvID0gZWxlbTsgfVxuXG4gICAgZ2V0IHByb2plY3RzICgpIHsgcmV0dXJuIHRoaXMuX3Byb2plY3RzOyB9XG5cbiAgICBzZXQgcHJvamVjdHMgKGFycikgeyB0aGlzLl9wcm9qZWN0cyA9IGFycjsgfVxuXG4gICAgI2J1aWxkUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm5ld1RvZG8uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBJbnB1dCBmb3IgUHJvamVjdCBPcHRpb25zXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdExhYmVsLmZvciA9IFwicHJvamVjdC1zZWxlY3RcIjtcbiAgICAgICAgcHJvamVjdFNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSBQcm9qZWN0XCI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHAgPT4geyBvcHRpb25zLnB1c2gocC5uYW1lKTsgfSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBuZXcgQ3VzdG9tU2VsZWN0KG9wdGlvbnMpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnNldElEKFwicHJvamVjdC1zZWxlY3RcIik7XG4gICAgICAgIC8vIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAvLyBwcm9qZWN0U2VsZWN0LmlkID0gXCJwcm9qZWN0LXNlbGVjdFwiO1xuICAgICAgICAvLyBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNlbGVjdFwiKTtcbiAgICAgICAgLy8gdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIC8vICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcC5uYW1lO1xuICAgICAgICAvLyAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gSW5wdXQgZm9yIER1ZSBEYXRlLCBpZiBhdmFpbGFibGVcbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBkdWVEYXRlTGFiZWwuZm9yID0gXCJkdWUtZGF0ZVwiO1xuICAgICAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGR1ZURhdGUuaWQgPSBcImR1ZS1kYXRlXCI7XG4gICAgICAgIGR1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZS5taW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhkdWVEYXRlLm1pbik7XG5cbiAgICAgICAgdGhpcy5uZXdUb2RvLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3RMYWJlbCk7XG4gICAgICAgIHRoaXMubmV3VG9kby5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICAgICAgdGhpcy5uZXdUb2RvLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIHRoaXMubmV3VG9kby5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICB9XG5cbiAgICAjYnVpbGRDb250ZW50ICgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gQWRkIFRpdGxlIHRvIENvbnRlbnRcbiAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuc2VsZWN0aW9uLm5hbWU7XG5cbiAgICAgICAgLy8gQWRkIFByb2plY3QgU3BlY2lmaWMgTGlzdFxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtbGlzdFwiKTtcbiAgICAgICAgLy8gVE9ETzogUmVwbGFjZSB1bCB3aXRoIHRhYmxlP1xuXG4gICAgICAgIC8vIEFkZCBOZXctVG8tRG8gQnV0dG9uXG4gICAgICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG8tZG9cIik7XG4gICAgICAgIHRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIisgVG8gRG9cIjtcbiAgICAgICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2J1aWxkUG9wdXAoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXAuZW50ZXIodGhpcy5uZXdUb2RvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uKTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMuI2J1aWxkQ29udGVudCgpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9