"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["content"],{

/***/ "./src/js/checkbox.js":
/*!****************************!*\
  !*** ./src/js/checkbox.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkbox)
/* harmony export */ });
class Checkbox {
    constructor (id) {
        this.checkbox = document.createElement("input");
        this.checkbox.classList.add("checkbox");
        this.checkbox.classList.add("checked");
        this.checkbox.type = "radio";
        this.checkbox.id = id;
    }

    get checkbox () { return this._checkbox; }

    set checkbox (elem) { this._checkbox = elem; }
};

/***/ }),

/***/ "./src/js/content.js":
/*!***************************!*\
  !*** ./src/js/content.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.js */ "./src/js/checkbox.js");
/* harmony import */ var _custom_select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-select.js */ "./src/js/custom-select.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");
/* harmony import */ var _dom_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-element.js */ "./src/js/dom-element.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");
/* harmony import */ var _priorities_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./priorities.js */ "./src/js/priorities.js");
/* harmony import */ var _to_do_table_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./to-do-table.js */ "./src/js/to-do-table.js");








class Content extends _dom_element_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
    /**
     * 
     * @param {Data} data 
     * @param {Popup} popup 
     */
    constructor (data, popup) {
        super("content");

        this.data = data;
        this.popup = popup;

        this.#render();
    }

    get data () { return this._data; }

    set data (arr) { this._data = arr; }

    get popup () { return this._popup; }

    set popup (obj) { this._popup = obj; }

    get title () { return this._title; }

    set title (name) { 
        this._title = name;
        this.#render()
    }

    #submit (name, priority, description, project, date) {
        if (name === "")
            return false;

        this.data.addToDo(name, priority, description, project, date);
        return true;
    }

    #popup () {
        // Create New-To-Do Element for Popup
        const newToDo = document.createElement("div");
        newToDo.classList.add("todo-popup");

        // Add Input with Label for New-To-Do Title
        const titleLabel = document.createElement("label");
        titleLabel.for = "new-to-do-title";
        titleLabel.textContent = "New To-Do Title";
        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.id = "new-to-do-title";

        // Add Priority
        const priorities = new _priorities_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

        // Add Input with Label fro New-To-Do Description
        const descLabel = document.createElement("label");
        descLabel.for = "new-to-do-description";
        descLabel.textContent = "Description";
        const description = document.createElement("textarea");
        description.id = "new-to-do-description";

        // Add Input with Label for Project Selection
        const projectLabel = document.createElement("label");
        projectLabel.for = "project-select";
        projectLabel.textContent = "Project";
        const options = [];
        this.data.projects.forEach(p => { options.push(p.name); });
        const projectSelect = new _custom_select_js__WEBPACK_IMPORTED_MODULE_1__["default"](options);
        this.popup.container.addEventListener("click", (e) => {
            projectSelect.close();
        });

        // Add Enabler for Project Selection
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("todo-enabler-container");
        const projectEnable = new _checkbox_js__WEBPACK_IMPORTED_MODULE_0__["default"]("project-enable");
        projectContainer.appendChild(projectLabel);
        projectContainer.appendChild(projectEnable.checkbox);
        projectEnable.checkbox.addEventListener("click", (e) => {
            projectEnable.checkbox.classList.toggle("checked");
            projectSelect.set();
        });

        // Add Input with Label for New-To-Do Due-Date
        const dueDateLabel = document.createElement("label");
        dueDateLabel.for = "due-date";
        dueDateLabel.textContent = "Due Date";
        const dueDate = document.createElement("input");
        dueDate.type = "date";
        dueDate.id = "due-date";
        dueDate.min = new Date().toISOString().split("T")[0];

        // Add Enabler for Due Date Selection
        const dueDateContainer = document.createElement("div");
        dueDateContainer.classList.add("todo-enabler-container");
        const dueDateEnable = new _checkbox_js__WEBPACK_IMPORTED_MODULE_0__["default"]("due-date-enable");
        dueDateContainer.appendChild(dueDateLabel);
        dueDateContainer.appendChild(dueDateEnable.checkbox);
        dueDateEnable.checkbox.addEventListener("click", (e) => {
            dueDateEnable.checkbox.classList.toggle("checked");
            dueDate.disabled = !dueDateEnable.checkbox.classList.contains("checked");
        });

        // Add Submit Button for New-To-Do
        const submit = document.createElement("button");
        submit.classList.add("popup-submit");
        submit.textContent = "Submit";
        submit.addEventListener("click", (e) => {
            if (this.#submit(titleInput.value, priorities.priority, description.value, projectSelect.value, dueDate.value))
                this.#render();
            this.popup.exit();
        });

        // Append Elements to New-To-Do
        newToDo.appendChild(titleLabel);
        newToDo.appendChild(titleInput);
        newToDo.appendChild(priorities.container);
        newToDo.appendChild(descLabel);
        newToDo.appendChild(description);
        newToDo.appendChild(projectContainer);
        newToDo.appendChild(projectSelect.select);
        newToDo.appendChild(dueDateContainer);
        newToDo.appendChild(dueDate);
        newToDo.appendChild(submit);

        // Enter Popup
        this.popup.enter(newToDo);
        titleInput.focus();
    }

    #render () {
        // Clear Content
        this.container.innerHTML = "";

        // Add Title to Content
        const contentTitle = document.createElement("h1");
        contentTitle.classList.add("content-title");
        contentTitle.textContent = this.title;

        // Add To-Do Table
        const todos = new _to_do_table_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.data.todos);

        // Add Create To-Do Button
        const create  = document.createElement("button");
        create.classList.add("add-to-do");
        create.textContent = "+ To Do";
        create.addEventListener("click", (e) => {
            this.#popup();
        });

        this.container.appendChild(contentTitle);
        this.container.appendChild(todos.table);
        this.container.appendChild(create);
    }
};

/***/ }),

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

/***/ }),

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
            this.todos.push({name: name, priority: priority, description: description, project: pDict, date: date});
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

/***/ "./src/js/dom-element.js":
/*!*******************************!*\
  !*** ./src/js/dom-element.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMElement)
/* harmony export */ });
class DOMElement {
    constructor (name) {
        this.container = document.createElement("div");
        this.container.classList.add(name);
    }

    get container () { return this._container; }

    set container (elem) { this._container = elem; } 
};

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var _dom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-element.js */ "./src/js/dom-element.js");


class Popup extends _dom_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        super("popup");

        // Add Overlay Element
        this.overlay = document.createElement("div");
        this.overlay.classList.add("overlay");
        this.overlay.addEventListener("click", (e) => { this.exit(); });
    }

    get overlay () { return this._overlay; }

    set overlay (elem) { this._overlay = elem; }

    enter (elem) {
        this.container.classList.add("active");
        this.overlay.classList.add("active");
        this.#render(elem);
    }

    exit () {
        this.container.classList.remove("active");
        this.overlay.classList.remove("active");
    }

    #render (content) {
        this.container.innerHTML = "";

        // Add Exit Button
        const exit = document.createElement("button");
        exit.textContent = "x";
        exit.classList.add("exit-popup");
        exit.addEventListener("click", (e) => { this.exit(); });

        document.addEventListener("keydown", (e) => {
            if (this.container.classList.contains("active") && e.key === "Escape")
                this.exit();
        });
        
        // Append Elements to Popup Container
        this.container.appendChild(exit);
        this.container.appendChild(content);
    }
};

/***/ }),

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
class ToDoTable {
    constructor (list) {
        this.list = list;
        this.table = document.createElement("table");
        this.table.classList.add("to-do-table");
    }

    get table () { return this._table; }

    set table (elem) { this._table = elem; }

    get list () { return this._list; }

    set list (arr) { this._list = arr; }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/content.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jdXN0b20tc2VsZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2RvbS1lbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcmlvcml0aWVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdG8tZG8tdGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3gge1xuICAgIGNvbnN0cnVjdG9yIChpZCkge1xuICAgICAgICB0aGlzLmNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmlkID0gaWQ7XG4gICAgfVxuXG4gICAgZ2V0IGNoZWNrYm94ICgpIHsgcmV0dXJuIHRoaXMuX2NoZWNrYm94OyB9XG5cbiAgICBzZXQgY2hlY2tib3ggKGVsZW0pIHsgdGhpcy5fY2hlY2tib3ggPSBlbGVtOyB9XG59OyIsImltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC5qc1wiO1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tIFwiLi9jdXN0b20tc2VsZWN0LmpzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwLmpzXCI7XG5pbXBvcnQgUHJpb3JpdGllcyBmcm9tIFwiLi9wcmlvcml0aWVzLmpzXCI7XG5pbXBvcnQgVG9Eb1RhYmxlIGZyb20gXCIuL3RvLWRvLXRhYmxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0RhdGF9IGRhdGEgXG4gICAgICogQHBhcmFtIHtQb3B1cH0gcG9wdXAgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGRhdGEsIHBvcHVwKSB7XG4gICAgICAgIHN1cGVyKFwiY29udGVudFwiKTtcblxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG5cbiAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5fZGF0YTsgfVxuXG4gICAgc2V0IGRhdGEgKGFycikgeyB0aGlzLl9kYXRhID0gYXJyOyB9XG5cbiAgICBnZXQgcG9wdXAgKCkgeyByZXR1cm4gdGhpcy5fcG9wdXA7IH1cblxuICAgIHNldCBwb3B1cCAob2JqKSB7IHRoaXMuX3BvcHVwID0gb2JqOyB9XG5cbiAgICBnZXQgdGl0bGUgKCkgeyByZXR1cm4gdGhpcy5fdGl0bGU7IH1cblxuICAgIHNldCB0aXRsZSAobmFtZSkgeyBcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBuYW1lO1xuICAgICAgICB0aGlzLiNyZW5kZXIoKVxuICAgIH1cblxuICAgICNzdWJtaXQgKG5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZGF0ZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLmRhdGEuYWRkVG9EbyhuYW1lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGRhdGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAjcG9wdXAgKCkge1xuICAgICAgICAvLyBDcmVhdGUgTmV3LVRvLURvIEVsZW1lbnQgZm9yIFBvcHVwXG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdUb0RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwXCIpO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBOZXctVG8tRG8gVGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgdGl0bGVMYWJlbC5mb3IgPSBcIm5ldy10by1kby10aXRsZVwiO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgVG8tRG8gVGl0bGVcIjtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSBcIm5ldy10by1kby10aXRsZVwiO1xuXG4gICAgICAgIC8vIEFkZCBQcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0aWVzID0gbmV3IFByaW9yaXRpZXMoKTtcblxuICAgICAgICAvLyBBZGQgSW5wdXQgd2l0aCBMYWJlbCBmcm8gTmV3LVRvLURvIERlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgZGVzY0xhYmVsLmZvciA9IFwibmV3LXRvLWRvLWRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlkID0gXCJuZXctdG8tZG8tZGVzY3JpcHRpb25cIjtcblxuICAgICAgICAvLyBBZGQgSW5wdXQgd2l0aCBMYWJlbCBmb3IgUHJvamVjdCBTZWxlY3Rpb25cbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuZm9yID0gXCJwcm9qZWN0LXNlbGVjdFwiO1xuICAgICAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEucHJvamVjdHMuZm9yRWFjaChwID0+IHsgb3B0aW9ucy5wdXNoKHAubmFtZSk7IH0pO1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gbmV3IEN1c3RvbVNlbGVjdChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5wb3B1cC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBFbmFibGVyIGZvciBQcm9qZWN0IFNlbGVjdGlvblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1lbmFibGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEVuYWJsZSA9IG5ldyBDaGVja2JveChcInByb2plY3QtZW5hYmxlXCIpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVuYWJsZS5jaGVja2JveCk7XG4gICAgICAgIHByb2plY3RFbmFibGUuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0RW5hYmxlLmNoZWNrYm94LmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5zZXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZm9yIE5ldy1Uby1EbyBEdWUtRGF0ZVxuICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5mb3IgPSBcImR1ZS1kYXRlXCI7XG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGR1ZURhdGUuaWQgPSBcImR1ZS1kYXRlXCI7XG4gICAgICAgIGR1ZURhdGUubWluID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICAgICAgICAvLyBBZGQgRW5hYmxlciBmb3IgRHVlIERhdGUgU2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVuYWJsZXItY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBkdWVEYXRlRW5hYmxlID0gbmV3IENoZWNrYm94KFwiZHVlLWRhdGUtZW5hYmxlXCIpO1xuICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVuYWJsZS5jaGVja2JveCk7XG4gICAgICAgIGR1ZURhdGVFbmFibGUuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkdWVEYXRlRW5hYmxlLmNoZWNrYm94LmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgZHVlRGF0ZS5kaXNhYmxlZCA9ICFkdWVEYXRlRW5hYmxlLmNoZWNrYm94LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBTdWJtaXQgQnV0dG9uIGZvciBOZXctVG8tRG9cbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1zdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNzdWJtaXQodGl0bGVJbnB1dC52YWx1ZSwgcHJpb3JpdGllcy5wcmlvcml0eSwgZGVzY3JpcHRpb24udmFsdWUsIHByb2plY3RTZWxlY3QudmFsdWUsIGR1ZURhdGUudmFsdWUpKVxuICAgICAgICAgICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5leGl0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBOZXctVG8tRG9cbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChwcmlvcml0aWVzLmNvbnRhaW5lcik7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdC5zZWxlY3QpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKGR1ZURhdGVDb250YWluZXIpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICAgICAgLy8gRW50ZXIgUG9wdXBcbiAgICAgICAgdGhpcy5wb3B1cC5lbnRlcihuZXdUb0RvKTtcbiAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgICNyZW5kZXIgKCkge1xuICAgICAgICAvLyBDbGVhciBDb250ZW50XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gQWRkIFRpdGxlIHRvIENvbnRlbnRcbiAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG5cbiAgICAgICAgLy8gQWRkIFRvLURvIFRhYmxlXG4gICAgICAgIGNvbnN0IHRvZG9zID0gbmV3IFRvRG9UYWJsZSh0aGlzLmRhdGEudG9kb3MpO1xuXG4gICAgICAgIC8vIEFkZCBDcmVhdGUgVG8tRG8gQnV0dG9uXG4gICAgICAgIGNvbnN0IGNyZWF0ZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjcmVhdGUuY2xhc3NMaXN0LmFkZChcImFkZC10by1kb1wiKTtcbiAgICAgICAgY3JlYXRlLnRleHRDb250ZW50ID0gXCIrIFRvIERvXCI7XG4gICAgICAgIGNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3BvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9zLnRhYmxlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlKTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVNlbGVjdCB7XG4gICAgI2VuYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IgKGFycikge1xuICAgICAgICB0aGlzLnNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93blwiKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuI2J1aWxkKGFycik7XG5cbiAgICAgICAgLy8gQWRkIEV2ZW50IExpc3RlbmVyc1xuICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy4jZW5hYmxlZClcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3Q7IH1cblxuICAgIHNldCBzZWxlY3QgKGVsZW0pIHsgdGhpcy5fc2VsZWN0ID0gZWxlbTsgfVxuXG4gICAgZ2V0IHBsYWNlSG9sZGVyICgpIHsgcmV0dXJuIHRoaXMuX3BsYWNlSG9sZGVyOyB9XG5cbiAgICBzZXQgcGxhY2VIb2xkZXIgKGVsZW0pIHsgdGhpcy5fcGxhY2VIb2xkZXIgPSBlbGVtOyB9XG5cbiAgICBnZXQgdmFsdWUgKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICAgIHNldCB2YWx1ZSAodmFsdWUpIHsgdGhpcy5fdmFsdWUgPSB2YWx1ZTt9XG5cbiAgICBnZXQgaWQgKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0LmlkOyB9XG5cbiAgICBzZXQgaWQgKGlkZW50aWZpZXIpIHsgdGhpcy5fc2VsZWN0LmlkID0gaWRlbnRpZmllcjsgfSBcblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgfVxuXG4gICAgc2V0ICgpIHtcbiAgICAgICAgdGhpcy4jZW5hYmxlZCA9ICF0aGlzLiNlbmFibGVkO1xuICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZVwiKTtcbiAgICB9XG5cbiAgICAjYnVpbGQgKGFycikge1xuICAgICAgICAvLyBDcmVhdGUgUGxhY2Vob2xkZXIgSW5wdXRcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlci50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIFByb2plY3RcIjtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5yZWFkT25seSA9IHRydWU7XG5cbiAgICAgICAgLy8gQ3JlYXRlIE9wdGlvbnMgTGlzdFxuICAgICAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25zXCIpO1xuICAgICAgICBhcnIuZm9yRWFjaChvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbztcbiAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBFbGVtZW50cyB0byBDdXN0b20gU2VsZWN0XG4gICAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZENoaWxkKHRoaXMucGxhY2VIb2xkZXIpO1xuICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpIHx8IFwiW11cIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSlcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9kb3MpO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0cyAoKSB7IHJldHVybiB0aGlzLl9wcm9qZWN0czsgfVxuXG4gICAgc2V0IHByb2plY3RzIChhcnIpIHsgdGhpcy5fcHJvamVjdHMgPSBhcnI7IH1cblxuICAgIGdldCB0b2RvcyAoKSB7IHJldHVybiB0aGlzLl90b2RvczsgfVxuXG4gICAgc2V0IHRvZG9zIChhcnIpIHsgdGhpcy5fdG9kb3MgPSBhcnI7IH1cblxuICAgICNpbmRleE9mUHJvamVjdCAobmFtZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGFkZFByb2plY3QgKG5hbWUsIGNvbG91cikge1xuICAgICAgICBpZiAodGhpcy4jaW5kZXhPZlByb2plY3QobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2goe25hbWU6IG5hbWUsIGNvbG91cjogY29sb3VyfSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNpbmRleE9mUHJvamVjdChuYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5zYXZlKFwicHJvamVjdHNcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5kZXhPZlRvRG8gKG5hbWUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50b2Rvcy5sZW5ndGg7IGkrKykgXG4gICAgICAgICAgICBpZiAodGhpcy50b2Rvc1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBhZGRUb0RvIChuYW1lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGRhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuI2luZGV4T2ZUb0RvKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gR2V0IFByb2plY3QgZGljdGlvbmFyeSwgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBjb25zdCBwSW5kZXggPSB0aGlzLiNpbmRleE9mUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHBEaWN0ID0ge25hbWU6IHByb2plY3QsIGNvbG91cjogXCJcIn07XG4gICAgICAgICAgICBpZiAocEluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBwRGljdC5jb2xvdXIgPSB0aGlzLnByb2plY3RzW3BJbmRleF0uY29sb3VyO1xuICAgICAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHtuYW1lOiBuYW1lLCBwcmlvcml0eTogcHJpb3JpdHksIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgcHJvamVjdDogcERpY3QsIGRhdGU6IGRhdGV9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInRvZG9zXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlVG9EbyAobmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2luZGV4T2ZUb0RvKG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJ0b2Rvc1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmUgKGtleSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAga2V5ID09PSBcInByb2plY3RzXCIgPyB0aGlzLnByb2plY3RzIDogdGhpcy50b2Rvc1xuICAgICAgICApKTtcbiAgICB9IFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfSBcbn07IiwiaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFwicG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIE92ZXJsYXkgRWxlbWVudFxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5leGl0KCk7IH0pO1xuICAgIH1cblxuICAgIGdldCBvdmVybGF5ICgpIHsgcmV0dXJuIHRoaXMuX292ZXJsYXk7IH1cblxuICAgIHNldCBvdmVybGF5IChlbGVtKSB7IHRoaXMuX292ZXJsYXkgPSBlbGVtOyB9XG5cbiAgICBlbnRlciAoZWxlbSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy4jcmVuZGVyKGVsZW0pO1xuICAgIH1cblxuICAgIGV4aXQgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICAjcmVuZGVyIChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gQWRkIEV4aXQgQnV0dG9uXG4gICAgICAgIGNvbnN0IGV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBleGl0LnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIGV4aXQuY2xhc3NMaXN0LmFkZChcImV4aXQtcG9wdXBcIik7XG4gICAgICAgIGV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuZXhpdCgpOyB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJiBlLmtleSA9PT0gXCJFc2NhcGVcIilcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gUG9wdXAgQ29udGFpbmVyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGV4aXQpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW9yaXRpZXMge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHRoaXMubGlzdFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLiNidWlsZCgpO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSAoKSB7IHJldHVybiB0aGlzLl9wcmlvcml0eTsgfVxuXG4gICAgc2V0IHByaW9yaXR5ICh2YWx1ZSkgeyB0aGlzLl9wcmlvcml0eSA9IHZhbHVlOyB9XG5cbiAgICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0OyB9XG5cbiAgICBzZXQgbGlzdCAoYXJyKSB7IHRoaXMuX2xpc3QgPSBhcnI7IH1cblxuICAgIGdldCBjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udGFpbmVyOyB9XG5cbiAgICBzZXQgY29udGFpbmVyIChlbGVtKSB7IHRoaXMuX2NvbnRhaW5lciA9IGVsZW07IH1cblxuICAgICN1cGRhdGVCdXR0b25zICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b24udmFsdWUgPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU2VsZWN0ZWQgYnV0dG9uOiAke3RoaXMucHJpb3JpdHl9O2ApO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gYnV0dG9uLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuI3VwZGF0ZUJ1dHRvbnMoYnV0dG9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjYnVpbGQgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1jb250YWluZXJcIik7XG4gICAgICAgIFtcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl0uZm9yRWFjaChwcmlvcml0eSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnV0dG9uLnZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25cIik7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHkgPT09IFwiTG93XCIpXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmlkID0gYCR7cHJpb3JpdHkudG9Mb3dlckNhc2UoKX0tcHJpb3JpdHlgO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEV2ZW50IExpc3RlbmVycyBmb3IgQnV0dG9uc1xuICAgICAgICB0aGlzLiNhZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9UYWJsZSB7XG4gICAgY29uc3RydWN0b3IgKGxpc3QpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICAgICAgdGhpcy50YWJsZS5jbGFzc0xpc3QuYWRkKFwidG8tZG8tdGFibGVcIik7XG4gICAgfVxuXG4gICAgZ2V0IHRhYmxlICgpIHsgcmV0dXJuIHRoaXMuX3RhYmxlOyB9XG5cbiAgICBzZXQgdGFibGUgKGVsZW0pIHsgdGhpcy5fdGFibGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0OyB9XG5cbiAgICBzZXQgbGlzdCAoYXJyKSB7IHRoaXMuX2xpc3QgPSBhcnI7IH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9