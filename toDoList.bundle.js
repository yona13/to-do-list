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
    constructor (arr, popup) {
        this.select = document.createElement("div");
        this.select.classList.add("dropdown");
        this.#build(arr, popup);

        // Add Event Listeners
        this.select.addEventListener("click", (e) => {
            e.stopPropagation();
            this.select.classList.toggle("open");
        });
        popup.addEventListener("click", (e) => {
            if (this.select.classList.contains("open"))
                this.select.classList.remove("open");
        });
    }

    get select () { return this._select; }

    set select (elem) { this._select = elem; }

    get placeHolder () { return this._placeHolder; }

    set placeHolder (elem) { this._placeHolder = elem; }

    get id () { return this._select.id; }

    set id (identifier) { this._select.id = identifier; } 

    toggle (event) {
        event.stopPropagation();
        this.select.classList.toggle("open");
    }

    #build (arr, popup) {
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
        projectSelectLabel.textContent = "Project";
        const options = [];
        this.projects.forEach(p => { options.push(p.name); });
        const projectSelect = new _custom_select_js__WEBPACK_IMPORTED_MODULE_0__["default"](options, this.popup.popup);
        projectSelect.id = "project-select";

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
        this.newTodo.appendChild(projectSelect.select);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb0xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxvQkFBb0I7O0FBRXBCLHdCQUF3Qjs7QUFFeEIseUJBQXlCOztBQUV6Qiw2QkFBNkI7O0FBRTdCLGdCQUFnQjs7QUFFaEIsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRDhDOztBQUUvQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLG1CQUFtQjs7QUFFbkIsc0JBQXNCOztBQUV0Qix1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjs7QUFFckIseUJBQXlCOztBQUV6QixxQkFBcUI7O0FBRXJCLHlCQUF5Qjs7QUFFekIsc0JBQXNCOztBQUV0Qix5QkFBeUI7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1QkFBdUI7QUFDNUQsa0NBQWtDLHlEQUFZO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2N1c3RvbS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy90by1kby1saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVNlbGVjdCB7XG4gICAgY29uc3RydWN0b3IgKGFyciwgcG9wdXApIHtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25cIik7XG4gICAgICAgIHRoaXMuI2J1aWxkKGFyciwgcG9wdXApO1xuXG4gICAgICAgIC8vIEFkZCBFdmVudCBMaXN0ZW5lcnNcbiAgICAgICAgdGhpcy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICAgIH0pO1xuICAgICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ICgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdDsgfVxuXG4gICAgc2V0IHNlbGVjdCAoZWxlbSkgeyB0aGlzLl9zZWxlY3QgPSBlbGVtOyB9XG5cbiAgICBnZXQgcGxhY2VIb2xkZXIgKCkgeyByZXR1cm4gdGhpcy5fcGxhY2VIb2xkZXI7IH1cblxuICAgIHNldCBwbGFjZUhvbGRlciAoZWxlbSkgeyB0aGlzLl9wbGFjZUhvbGRlciA9IGVsZW07IH1cblxuICAgIGdldCBpZCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3QuaWQ7IH1cblxuICAgIHNldCBpZCAoaWRlbnRpZmllcikgeyB0aGlzLl9zZWxlY3QuaWQgPSBpZGVudGlmaWVyOyB9IFxuXG4gICAgdG9nZ2xlIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgfVxuXG4gICAgI2J1aWxkIChhcnIsIHBvcHVwKSB7XG4gICAgICAgIC8vIENyZWF0ZSBQbGFjZWhvbGRlciBJbnB1dFxuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgUHJvamVjdFwiO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgICAvLyBDcmVhdGUgT3B0aW9ucyBMaXN0XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm9wdGlvbnNcIik7XG4gICAgICAgIGFyci5mb3JFYWNoKG8gPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvO1xuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIudmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEVsZW1lbnRzIHRvIEN1c3RvbSBTZWxlY3RcbiAgICAgICAgdGhpcy5zZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy5wbGFjZUhvbGRlcik7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICAgIH1cbn07IiwiaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tIFwiLi9jdXN0b20tc2VsZWN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvciAocG9wdXApIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHBvcHVwO1xuXG4gICAgICAgIC8vIEJ1aWxkIENvbnRlbnQgRG9tIEVsZW1lbnRcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICAgICAgICBcbiAgICAgICAgLy8gQnVpbGQgTmV3LVRvZG8gUG9wdXAgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5uZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5uZXdUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwXCIpO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpIHx8IFwiW11cIik7XG4gICAgICAgIH0gZWxzZSBcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgdG9kb3MgKCkgeyByZXR1cm4gdGhpcy5fdG9kb3M7IH1cblxuICAgIHNldCB0b2RvcyAoYXJyKSB7IHRoaXMuX3RvZG9zID0gYXJyOyB9XG5cbiAgICBnZXQgc2VsZWN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbjsgfVxuXG4gICAgc2V0IHNlbGVjdGlvbiAocHJvamVjdCkge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLiNidWlsZENvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBnZXQgY29udGVudCAoKSB7IHJldHVybiB0aGlzLl9jb250ZW50OyB9XG5cbiAgICBzZXQgY29udGVudCAoZWxlbSkgeyB0aGlzLl9jb250ZW50ID0gZWxlbTsgfVxuXG4gICAgZ2V0IG5ld1RvZG8gKCkgeyByZXR1cm4gdGhpcy5fbmV3VG9kbzsgfVxuXG4gICAgc2V0IG5ld1RvZG8gKGVsZW0pIHsgdGhpcy5fbmV3VG9kbyA9IGVsZW07IH1cblxuICAgIGdldCBwcm9qZWN0cyAoKSB7IHJldHVybiB0aGlzLl9wcm9qZWN0czsgfVxuXG4gICAgc2V0IHByb2plY3RzIChhcnIpIHsgdGhpcy5fcHJvamVjdHMgPSBhcnI7IH1cblxuICAgICNidWlsZFBvcHVwICgpIHtcbiAgICAgICAgdGhpcy5uZXdUb2RvLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gSW5wdXQgZm9yIFByb2plY3QgT3B0aW9uc1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByb2plY3RTZWxlY3RMYWJlbC5mb3IgPSBcInByb2plY3Qtc2VsZWN0XCI7XG4gICAgICAgIHByb2plY3RTZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwID0+IHsgb3B0aW9ucy5wdXNoKHAubmFtZSk7IH0pO1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gbmV3IEN1c3RvbVNlbGVjdChvcHRpb25zLCB0aGlzLnBvcHVwLnBvcHVwKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5pZCA9IFwicHJvamVjdC1zZWxlY3RcIjtcblxuICAgICAgICAvLyBJbnB1dCBmb3IgRHVlIERhdGUsIGlmIGF2YWlsYWJsZVxuICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5mb3IgPSBcImR1ZS1kYXRlXCI7XG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZHVlRGF0ZS5pZCA9IFwiZHVlLWRhdGVcIjtcbiAgICAgICAgZHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuICAgICAgICBkdWVEYXRlLm1pbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKGR1ZURhdGUubWluKTtcblxuICAgICAgICB0aGlzLm5ld1RvZG8uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdExhYmVsKTtcbiAgICAgICAgdGhpcy5uZXdUb2RvLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Quc2VsZWN0KTtcbiAgICAgICAgdGhpcy5uZXdUb2RvLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIHRoaXMubmV3VG9kby5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICB9XG5cbiAgICAjYnVpbGRDb250ZW50ICgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gQWRkIFRpdGxlIHRvIENvbnRlbnRcbiAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuc2VsZWN0aW9uLm5hbWU7XG5cbiAgICAgICAgLy8gQWRkIFByb2plY3QgU3BlY2lmaWMgTGlzdFxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtbGlzdFwiKTtcbiAgICAgICAgLy8gVE9ETzogUmVwbGFjZSB1bCB3aXRoIHRhYmxlP1xuXG4gICAgICAgIC8vIEFkZCBOZXctVG8tRG8gQnV0dG9uXG4gICAgICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG8tZG9cIik7XG4gICAgICAgIHRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIisgVG8gRG9cIjtcbiAgICAgICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2J1aWxkUG9wdXAoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXAuZW50ZXIodGhpcy5uZXdUb2RvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uKTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMuI2J1aWxkQ29udGVudCgpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9