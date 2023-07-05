"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["toDoTable"],{

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Data)
/* harmony export */ });
class Data {
    constructor () {
        if (localStorage.getItem("projects"))
            this.projects = JSON.parse(localStorage.getItem("projects") || "[]");
        else
            this.projects = [];

        if (localStorage.getItem("todos"))
            this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
        else
            this.todos = [];

        console.log(this.todos);
    }

    get projects () { return this._projects; }

    set projects (arr) { this._projects = arr; }

    get todos () { return this._todos; }

    set todos (arr) { this._todos = arr; }

    #indexOfProject (name) {
        let index = -1;
        for (var i = 0; i < this.projects.length; i++)
            if (this.projects[i].name === name)
                index = i;

        return index;
    }

    addProject (name, colour) {
        if (this.#indexOfProject(name) === -1) {
            this.projects.push({name: name, colour: colour});
            this.save("projects");
        }
    }

    deleteProject (name) {
        const index = this.#indexOfProject(name);
        if (index !== -1) {
            this.projects.splice(index, 1);
            this.save("projects");
        }
    }

    #indexOfToDo (name) {
        let index = -1;
        for (var i = 0; i < this.todos.length; i++) 
            if (this.todos[i].name === name)
                index = i;
        
        return index;
    }

    addToDo (name, priority, description, project, date) {
        if (this.#indexOfToDo(name) === -1) {
            // Get Project dictionary, if available
            const pIndex = this.#indexOfProject(project);
            const pDict = {name: project, colour: ""};
            if (pIndex !== -1)
                pDict.colour = this.projects[pIndex].colour;
            this.todos.push(
                {
                    name: name, 
                    priority: priority, 
                    description: description, 
                    project: pDict, 
                    date: date
                }
            );
            this.save("todos");
        }
    }

    deleteToDo (name) {
        const index = this.#indexOfToDo(name);
        if (index !== -1) {
            this.todos.splice(index, 1);
            this.save("todos");
        }
    }

    save (key) {
        localStorage.setItem(key, JSON.stringify(
            key === "projects" ? this.projects : this.todos
        ));
    } 
};

/***/ }),

/***/ "./src/js/to-do-table.js":
/*!*******************************!*\
  !*** ./src/js/to-do-table.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoTable)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");



class ToDoTable {
    /**
     * 
     * @param {String} project 
     * @param {Data} data 
     */
    constructor (project, data) {
        this.project = project;
        this.data = data;
        this.table = document.createElement("table");
        this.table.classList.add("to-do-table");

        this.#build();
    }

    get project () { return this._project; }

    set project (value) { this._project = value; }

    get table () { return this._table; }

    set table (elem) { this._table = elem; }

    get data () { return this._data; }

    set data (obj) { this._data = obj; }

    #build () {
        // Add Header Element to To-Do Table
        const header = document.createElement("thead");
        const topRow = document.createElement("tr");
        const title = document.createElement("th");
        title.colSpan = 2;  // TODO: Update to include checkbox
        title.textContent = this.project;
        const dateHeader = document.createElement("th");
        dateHeader.classList.add("date-header");
        dateHeader.textContent = "Date";
        topRow.appendChild(title);
        topRow.appendChild(dateHeader);
        header.appendChild(topRow);

        this.table.appendChild(header);

        // Add Body Element to To-Do Table
        const body = document.createElement("tbody");

        this.data.todos.forEach(todo => {
            // Add Row Element to Body
            const row = document.createElement("tr");

            // TODO: Add Checkbox for Completion of Task

            // Add Project Cell to Row
            const projectCell = document.createElement("td");

            // Default Projects Can be left Blank with Default Colour
            if (todo.project.colour !== "")
                projectCell.setAttribute("style", `background-color: ${todo.project.colour}`);
            projectCell.textContent = todo.project.name;

            // Add To-Do Name to Row
            const nameCell = document.createElement("td");
            nameCell.textContent = todo.name;

            // Add Due-Date to Row
            const dateCell = document.createElement("td");
            dateCell.textContent = todo.date;

            // Append Cells to Row
            // TODO: Append Checkbox to Row
            row.appendChild(projectCell);
            row.appendChild(nameCell);
            row.appendChild(dateCell);

            // Append Row to Body
            body.appendChild(row);
        });

        this.table.appendChild(body);
    }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/to-do-table.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb1RhYmxlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCOztBQUV0Qix5QkFBeUI7O0FBRXpCLG1CQUFtQjs7QUFFbkIsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQywyQkFBMkI7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pGOEM7QUFDakI7O0FBRWQ7QUFDZjtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUI7O0FBRXJCLDBCQUEwQjs7QUFFMUIsbUJBQW1COztBQUVuQix1QkFBdUI7O0FBRXZCLGtCQUFrQjs7QUFFbEIscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RSxvQkFBb0I7QUFDM0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3RvLWRvLXRhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpIHx8IFwiW11cIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSlcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9kb3MpO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0cyAoKSB7IHJldHVybiB0aGlzLl9wcm9qZWN0czsgfVxuXG4gICAgc2V0IHByb2plY3RzIChhcnIpIHsgdGhpcy5fcHJvamVjdHMgPSBhcnI7IH1cblxuICAgIGdldCB0b2RvcyAoKSB7IHJldHVybiB0aGlzLl90b2RvczsgfVxuXG4gICAgc2V0IHRvZG9zIChhcnIpIHsgdGhpcy5fdG9kb3MgPSBhcnI7IH1cblxuICAgICNpbmRleE9mUHJvamVjdCAobmFtZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGFkZFByb2plY3QgKG5hbWUsIGNvbG91cikge1xuICAgICAgICBpZiAodGhpcy4jaW5kZXhPZlByb2plY3QobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2goe25hbWU6IG5hbWUsIGNvbG91cjogY29sb3VyfSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNpbmRleE9mUHJvamVjdChuYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5zYXZlKFwicHJvamVjdHNcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5kZXhPZlRvRG8gKG5hbWUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50b2Rvcy5sZW5ndGg7IGkrKykgXG4gICAgICAgICAgICBpZiAodGhpcy50b2Rvc1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBhZGRUb0RvIChuYW1lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGRhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuI2luZGV4T2ZUb0RvKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gR2V0IFByb2plY3QgZGljdGlvbmFyeSwgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBjb25zdCBwSW5kZXggPSB0aGlzLiNpbmRleE9mUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHBEaWN0ID0ge25hbWU6IHByb2plY3QsIGNvbG91cjogXCJcIn07XG4gICAgICAgICAgICBpZiAocEluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBwRGljdC5jb2xvdXIgPSB0aGlzLnByb2plY3RzW3BJbmRleF0uY29sb3VyO1xuICAgICAgICAgICAgdGhpcy50b2Rvcy5wdXNoKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSwgXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSwgXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHBEaWN0LCBcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJ0b2Rvc1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVRvRG8gKG5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNpbmRleE9mVG9EbyhuYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5zYXZlKFwidG9kb3NcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlIChrZXkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIGtleSA9PT0gXCJwcm9qZWN0c1wiID8gdGhpcy5wcm9qZWN0cyA6IHRoaXMudG9kb3NcbiAgICAgICAgKSk7XG4gICAgfSBcbn07IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9UYWJsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb2plY3QgXG4gICAgICogQHBhcmFtIHtEYXRhfSBkYXRhIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChwcm9qZWN0LCBkYXRhKSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgICAgIHRoaXMudGFibGUuY2xhc3NMaXN0LmFkZChcInRvLWRvLXRhYmxlXCIpO1xuXG4gICAgICAgIHRoaXMuI2J1aWxkKCk7XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3QgKCkgeyByZXR1cm4gdGhpcy5fcHJvamVjdDsgfVxuXG4gICAgc2V0IHByb2plY3QgKHZhbHVlKSB7IHRoaXMuX3Byb2plY3QgPSB2YWx1ZTsgfVxuXG4gICAgZ2V0IHRhYmxlICgpIHsgcmV0dXJuIHRoaXMuX3RhYmxlOyB9XG5cbiAgICBzZXQgdGFibGUgKGVsZW0pIHsgdGhpcy5fdGFibGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgICBzZXQgZGF0YSAob2JqKSB7IHRoaXMuX2RhdGEgPSBvYmo7IH1cblxuICAgICNidWlsZCAoKSB7XG4gICAgICAgIC8vIEFkZCBIZWFkZXIgRWxlbWVudCB0byBUby1EbyBUYWJsZVxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgICAgIGNvbnN0IHRvcFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIHRpdGxlLmNvbFNwYW4gPSAyOyAgLy8gVE9ETzogVXBkYXRlIHRvIGluY2x1ZGUgY2hlY2tib3hcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3Q7XG4gICAgICAgIGNvbnN0IGRhdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGRhdGVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtaGVhZGVyXCIpO1xuICAgICAgICBkYXRlSGVhZGVyLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gICAgICAgIHRvcFJvdy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRvcFJvdy5hcHBlbmRDaGlsZChkYXRlSGVhZGVyKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRvcFJvdyk7XG5cbiAgICAgICAgdGhpcy50YWJsZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIC8vIEFkZCBCb2R5IEVsZW1lbnQgdG8gVG8tRG8gVGFibGVcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcblxuICAgICAgICB0aGlzLmRhdGEudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIC8vIEFkZCBSb3cgRWxlbWVudCB0byBCb2R5XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IEFkZCBDaGVja2JveCBmb3IgQ29tcGxldGlvbiBvZiBUYXNrXG5cbiAgICAgICAgICAgIC8vIEFkZCBQcm9qZWN0IENlbGwgdG8gUm93XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgLy8gRGVmYXVsdCBQcm9qZWN0cyBDYW4gYmUgbGVmdCBCbGFuayB3aXRoIERlZmF1bHQgQ29sb3VyXG4gICAgICAgICAgICBpZiAodG9kby5wcm9qZWN0LmNvbG91ciAhPT0gXCJcIilcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q2VsbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1jb2xvcjogJHt0b2RvLnByb2plY3QuY29sb3VyfWApO1xuICAgICAgICAgICAgcHJvamVjdENlbGwudGV4dENvbnRlbnQgPSB0b2RvLnByb2plY3QubmFtZTtcblxuICAgICAgICAgICAgLy8gQWRkIFRvLURvIE5hbWUgdG8gUm93XG4gICAgICAgICAgICBjb25zdCBuYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIG5hbWVDZWxsLnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuXG4gICAgICAgICAgICAvLyBBZGQgRHVlLURhdGUgdG8gUm93XG4gICAgICAgICAgICBjb25zdCBkYXRlQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGRhdGVDZWxsLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgQ2VsbHMgdG8gUm93XG4gICAgICAgICAgICAvLyBUT0RPOiBBcHBlbmQgQ2hlY2tib3ggdG8gUm93XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQocHJvamVjdENlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChkYXRlQ2VsbCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBSb3cgdG8gQm9keVxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9