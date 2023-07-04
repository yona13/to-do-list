"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["menu"],{

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

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ "./src/js/content.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");
/* harmony import */ var _dom_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-element.js */ "./src/js/dom-element.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");





class Menu extends _dom_element_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
    #expanded = false;

    /**
     * 
     * @param {Data} data 
     * @param {Content} content 
     * @param {Popup} popup 
     */
    constructor (data, content, popup) {
        super("sidebar");

        this.data = data;
        this.content = content;
        this.popup = popup;

        this.button = document.createElement("div");
        this.button.classList.add("sidebar-button");
        this.button.addEventListener("click", (e) => {
            this.#toggle();
        });

        // Create bars for Button
        for (var i = 1; i < 3; i++) {
            const bar = document.createElement("div");
            bar.classList.add(`bar${i}`);
            this.button.appendChild(bar);
        }

        this.#render();
        content.title = "Projects"; // default;
    }

    get data () { return this._data; }

    set data (obj) { this._data = obj; }

    get content () { return this._content; }

    set content (obj) { this._content = obj; }

    get popup () { return this._popup; }

    set popup (obj) { this._popup = obj; }

    get button () { return this._button; }

    set button (elem) { this._button = elem; }

    toggle () {
        // If Sidebar is activated, reset Sidebar (tablet view)
        if (this.#expanded) {
            this.#expanded = false;
            this.container.classList.remove("expand");
            this.button.classList.remove("change");
        }
        
        // Otherwise, enable Sidebar
        else if (this.button.classList.contains("change"))
            this.#expanded = true;
    }

    #toggle () {
        this.container.classList.toggle("expand");
        this.button.classList.toggle("change");
    }

    #submit (name, colour) {
        if (name === "")
            return false;
        
        this.data.addProject(name, colour);
        return true;
    }

    #popup () {
        // Create New-Project Element for Popup
        const newProject = document.createElement("div");
        newProject.classList.add("project-popup");

        // Add Input with Label for New-Project Title
        const titleLabel = document.createElement("label");
        titleLabel.for = "new-project-title";
        titleLabel.textContent = "New Project Title";
        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.id = "new-project-title";

        // Add Input and Label for New-Project Colour
        const colourLabel = document.createElement("label");
        colourLabel.for = "new-project-colour";
        colourLabel.textContent = "New Project Colour";
        const colourInput = document.createElement("input");
        colourInput.type = "color";
        colourInput.value = `#${(Math.random() * 0xffffff * 1000000).toString(16).slice(0, 6)}`;
        colourInput.id = "new-project-colour";

        // Add Submit Button for New-Project
        const submit = document.createElement("button");
        submit.classList.add("popup-submit");
        submit.textContent = "Submit";
        submit.addEventListener("click", (e) => {
            if (this.#submit(titleInput.value, colourInput.value))
                this.#render();
            this.popup.exit();
        });

        newProject.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                if (this.#submit(titleInput.value, colourInput.value)) {
                    this.popup.exit();
                    this.#render();
                } else
                    window.alert("Please enter a project title!");
            }
        });

        // Append Elements to New-Project
        newProject.appendChild(titleLabel);
        newProject.appendChild(titleInput);
        newProject.appendChild(colourLabel);
        newProject.appendChild(colourInput);
        newProject.appendChild(submit);

        // Enter Popup
        this.popup.enter(newProject);
        titleInput.focus();
    }

    #render () {
        // Clear Content
        this.container.innerHTML = "";

        // Add Title to Menu
        const title = document.createElement("button");
        title.classList.add("projects-title");
        title.textContent = "Projects";
        title.addEventListener("click", (e) => { this.content.title = "Projects"; });
        this.container.appendChild(title);

        // Add Project-List
        const list = document.createElement("ul");
        list.classList.add("projects-list");
        this.data.projects.forEach(p => {
            const item = document.createElement("div");
            item.classList.add("project-list-select");
            item.addEventListener("click", (e) => { this.content.title = p.name; });

            const colour = document.createElement("div");
            colour.classList.add("project-colour-code");
            colour.setAttribute("style", `background-color: ${p.colour}`);

            const name = document.createElement("div");
            name.textContent = p.name;

            const del = document.createElement("button");
            del.classList.add("project-cross-button");
            del.textContent = "x";
            del.addEventListener("click", (e) => {
                this.data.deleteProject(p.name);
                if (this.content.title === p.name)
                    this.content.title = "Projects";
                e.stopPropagation();
                this.#render();
            });

            // Append Elements to Item & Item to List
            item.appendChild(colour);
            item.appendChild(name);
            item.appendChild(del);
            list.appendChild(item);
        });

        // Add Create Project Button
        const create = document.createElement("button");
        create.classList.add("add-project");
        create.textContent = "+ Project";
        create.addEventListener("click", (e) => {
            this.#popup();
        });

        // Append Elements to Menu Container
        this.container.appendChild(list);
        this.container.appendChild(create);
    }
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7QUFFbkIsdUJBQXVCOztBQUV2QixrQkFBa0I7O0FBRWxCLHFCQUFxQjtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jb250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvY3VzdG9tLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9kb20tZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3ByaW9yaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy90by1kby10YWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCB7XG4gICAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHRoaXMuY2hlY2tib3guaWQgPSBpZDtcbiAgICB9XG5cbiAgICBnZXQgY2hlY2tib3ggKCkgeyByZXR1cm4gdGhpcy5fY2hlY2tib3g7IH1cblxuICAgIHNldCBjaGVja2JveCAoZWxlbSkgeyB0aGlzLl9jaGVja2JveCA9IGVsZW07IH1cbn07IiwiaW1wb3J0IENoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94LmpzXCI7XG5pbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gXCIuL2N1c3RvbS1zZWxlY3QuanNcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCBET01FbGVtZW50IGZyb20gXCIuL2RvbS1lbGVtZW50LmpzXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vcG9wdXAuanNcIjtcbmltcG9ydCBQcmlvcml0aWVzIGZyb20gXCIuL3ByaW9yaXRpZXMuanNcIjtcbmltcG9ydCBUb0RvVGFibGUgZnJvbSBcIi4vdG8tZG8tdGFibGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIERPTUVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7RGF0YX0gZGF0YSBcbiAgICAgKiBAcGFyYW0ge1BvcHVwfSBwb3B1cCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoZGF0YSwgcG9wdXApIHtcbiAgICAgICAgc3VwZXIoXCJjb250ZW50XCIpO1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucG9wdXAgPSBwb3B1cDtcblxuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgICBzZXQgZGF0YSAoYXJyKSB7IHRoaXMuX2RhdGEgPSBhcnI7IH1cblxuICAgIGdldCBwb3B1cCAoKSB7IHJldHVybiB0aGlzLl9wb3B1cDsgfVxuXG4gICAgc2V0IHBvcHVwIChvYmopIHsgdGhpcy5fcG9wdXAgPSBvYmo7IH1cblxuICAgIGdldCB0aXRsZSAoKSB7IHJldHVybiB0aGlzLl90aXRsZTsgfVxuXG4gICAgc2V0IHRpdGxlIChuYW1lKSB7IFxuICAgICAgICB0aGlzLl90aXRsZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuI3JlbmRlcigpXG4gICAgfVxuXG4gICAgI3N1Ym1pdCAobmFtZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkYXRlKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZGF0YS5hZGRUb0RvKG5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZGF0ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgICNwb3B1cCAoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBOZXctVG8tRG8gRWxlbWVudCBmb3IgUG9wdXBcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld1RvRG8uY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZm9yIE5ldy1Uby1EbyBUaXRsZVxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0aXRsZUxhYmVsLmZvciA9IFwibmV3LXRvLWRvLXRpdGxlXCI7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIk5ldyBUby1EbyBUaXRsZVwiO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGl0bGVJbnB1dC5pZCA9IFwibmV3LXRvLWRvLXRpdGxlXCI7XG5cbiAgICAgICAgLy8gQWRkIFByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBuZXcgUHJpb3JpdGllcygpO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZybyBOZXctVG8tRG8gRGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBkZXNjTGFiZWwuZm9yID0gXCJuZXctdG8tZG8tZGVzY3JpcHRpb25cIjtcbiAgICAgICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaWQgPSBcIm5ldy10by1kby1kZXNjcmlwdGlvblwiO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBQcm9qZWN0IFNlbGVjdGlvblxuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByb2plY3RMYWJlbC5mb3IgPSBcInByb2plY3Qtc2VsZWN0XCI7XG4gICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKHAgPT4geyBvcHRpb25zLnB1c2gocC5uYW1lKTsgfSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBuZXcgQ3VzdG9tU2VsZWN0KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnBvcHVwLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEVuYWJsZXIgZm9yIFByb2plY3QgU2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVuYWJsZXItY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RW5hYmxlID0gbmV3IENoZWNrYm94KFwicHJvamVjdC1lbmFibGVcIik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RW5hYmxlLmNoZWNrYm94KTtcbiAgICAgICAgcHJvamVjdEVuYWJsZS5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RFbmFibGUuY2hlY2tib3guY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LnNldCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgSW5wdXQgd2l0aCBMYWJlbCBmb3IgTmV3LVRvLURvIER1ZS1EYXRlXG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmZvciA9IFwiZHVlLWRhdGVcIjtcbiAgICAgICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBkdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICAgICAgZHVlRGF0ZS5pZCA9IFwiZHVlLWRhdGVcIjtcbiAgICAgICAgZHVlRGF0ZS5taW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gICAgICAgIC8vIEFkZCBFbmFibGVyIGZvciBEdWUgRGF0ZSBTZWxlY3Rpb25cbiAgICAgICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZW5hYmxlci1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVFbmFibGUgPSBuZXcgQ2hlY2tib3goXCJkdWUtZGF0ZS1lbmFibGVcIik7XG4gICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlRW5hYmxlLmNoZWNrYm94KTtcbiAgICAgICAgZHVlRGF0ZUVuYWJsZS5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGR1ZURhdGVFbmFibGUuY2hlY2tib3guY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICBkdWVEYXRlLmRpc2FibGVkID0gIWR1ZURhdGVFbmFibGUuY2hlY2tib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIFN1Ym1pdCBCdXR0b24gZm9yIE5ldy1Uby1Eb1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcInBvcHVwLXN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuI3N1Ym1pdCh0aXRsZUlucHV0LnZhbHVlLCBwcmlvcml0aWVzLnByaW9yaXR5LCBkZXNjcmlwdGlvbi52YWx1ZSwgcHJvamVjdFNlbGVjdC52YWx1ZSwgZHVlRGF0ZS52YWx1ZSkpXG4gICAgICAgICAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmV4aXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzIHRvIE5ldy1Uby1Eb1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHByaW9yaXRpZXMuY29udGFpbmVyKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0LnNlbGVjdCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgICAgICAvLyBFbnRlciBQb3B1cFxuICAgICAgICB0aGlzLnBvcHVwLmVudGVyKG5ld1RvRG8pO1xuICAgICAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgI3JlbmRlciAoKSB7XG4gICAgICAgIC8vIENsZWFyIENvbnRlbnRcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBBZGQgVGl0bGUgdG8gQ29udGVudFxuICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudC10aXRsZVwiKTtcbiAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcblxuICAgICAgICAvLyBBZGQgVG8tRG8gVGFibGVcbiAgICAgICAgY29uc3QgdG9kb3MgPSBuZXcgVG9Eb1RhYmxlKHRoaXMuZGF0YS50b2Rvcyk7XG5cbiAgICAgICAgLy8gQWRkIENyZWF0ZSBUby1EbyBCdXR0b25cbiAgICAgICAgY29uc3QgY3JlYXRlICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvLWRvXCIpO1xuICAgICAgICBjcmVhdGUudGV4dENvbnRlbnQgPSBcIisgVG8gRG9cIjtcbiAgICAgICAgY3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jcG9wdXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3MudGFibGUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGUpO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgICAjZW5hYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvciAoYXJyKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duXCIpO1xuICAgICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy4jYnVpbGQoYXJyKTtcblxuICAgICAgICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzXG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiNlbmFibGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ICgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdDsgfVxuXG4gICAgc2V0IHNlbGVjdCAoZWxlbSkgeyB0aGlzLl9zZWxlY3QgPSBlbGVtOyB9XG5cbiAgICBnZXQgcGxhY2VIb2xkZXIgKCkgeyByZXR1cm4gdGhpcy5fcGxhY2VIb2xkZXI7IH1cblxuICAgIHNldCBwbGFjZUhvbGRlciAoZWxlbSkgeyB0aGlzLl9wbGFjZUhvbGRlciA9IGVsZW07IH1cblxuICAgIGdldCB2YWx1ZSAoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gICAgc2V0IHZhbHVlICh2YWx1ZSkgeyB0aGlzLl92YWx1ZSA9IHZhbHVlO31cblxuICAgIGdldCBpZCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3QuaWQ7IH1cblxuICAgIHNldCBpZCAoaWRlbnRpZmllcikgeyB0aGlzLl9zZWxlY3QuaWQgPSBpZGVudGlmaWVyOyB9IFxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICB9XG5cbiAgICBzZXQgKCkge1xuICAgICAgICB0aGlzLiNlbmFibGVkID0gIXRoaXMuI2VuYWJsZWQ7XG4gICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlXCIpO1xuICAgIH1cblxuICAgICNidWlsZCAoYXJyKSB7XG4gICAgICAgIC8vIENyZWF0ZSBQbGFjZWhvbGRlciBJbnB1dFxuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgUHJvamVjdFwiO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgICAvLyBDcmVhdGUgT3B0aW9ucyBMaXN0XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm9wdGlvbnNcIik7XG4gICAgICAgIGFyci5mb3JFYWNoKG8gPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvO1xuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEVsZW1lbnRzIHRvIEN1c3RvbSBTZWxlY3RcbiAgICAgICAgdGhpcy5zZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy5wbGFjZUhvbGRlcik7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKVxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSB8fCBcIltdXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gW107XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b2Rvcyk7XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3RzICgpIHsgcmV0dXJuIHRoaXMuX3Byb2plY3RzOyB9XG5cbiAgICBzZXQgcHJvamVjdHMgKGFycikgeyB0aGlzLl9wcm9qZWN0cyA9IGFycjsgfVxuXG4gICAgZ2V0IHRvZG9zICgpIHsgcmV0dXJuIHRoaXMuX3RvZG9zOyB9XG5cbiAgICBzZXQgdG9kb3MgKGFycikgeyB0aGlzLl90b2RvcyA9IGFycjsgfVxuXG4gICAgI2luZGV4T2ZQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9qZWN0c1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdCAobmFtZSwgY29sb3VyKSB7XG4gICAgICAgIGlmICh0aGlzLiNpbmRleE9mUHJvamVjdChuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh7bmFtZTogbmFtZSwgY29sb3VyOiBjb2xvdXJ9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInByb2plY3RzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdCAobmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2luZGV4T2ZQcm9qZWN0KG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbmRleE9mVG9EbyAobmFtZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKSBcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZG9zW2ldLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGFkZFRvRG8gKG5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZGF0ZSkge1xuICAgICAgICBpZiAodGhpcy4jaW5kZXhPZlRvRG8obmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBHZXQgUHJvamVjdCBkaWN0aW9uYXJ5LCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIGNvbnN0IHBJbmRleCA9IHRoaXMuI2luZGV4T2ZQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY29uc3QgcERpY3QgPSB7bmFtZTogcHJvamVjdCwgY29sb3VyOiBcIlwifTtcbiAgICAgICAgICAgIGlmIChwSW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIHBEaWN0LmNvbG91ciA9IHRoaXMucHJvamVjdHNbcEluZGV4XS5jb2xvdXI7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnB1c2goe25hbWU6IG5hbWUsIHByaW9yaXR5OiBwcmlvcml0eSwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBwcm9qZWN0OiBwRGljdCwgZGF0ZTogZGF0ZX0pO1xuICAgICAgICAgICAgdGhpcy5zYXZlKFwidG9kb3NcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVUb0RvIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jaW5kZXhPZlRvRG8obmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInRvZG9zXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZSAoa2V5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBrZXkgPT09IFwicHJvamVjdHNcIiA/IHRoaXMucHJvamVjdHMgOiB0aGlzLnRvZG9zXG4gICAgICAgICkpO1xuICAgIH0gXG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICB9XG5cbiAgICBnZXQgY29udGFpbmVyICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjsgfVxuXG4gICAgc2V0IGNvbnRhaW5lciAoZWxlbSkgeyB0aGlzLl9jb250YWluZXIgPSBlbGVtOyB9IFxufTsiLCJpbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb250ZW50LmpzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICAjZXhwYW5kZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7RGF0YX0gZGF0YSBcbiAgICAgKiBAcGFyYW0ge0NvbnRlbnR9IGNvbnRlbnQgXG4gICAgICogQHBhcmFtIHtQb3B1cH0gcG9wdXAgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGRhdGEsIGNvbnRlbnQsIHBvcHVwKSB7XG4gICAgICAgIHN1cGVyKFwic2lkZWJhclwiKTtcblxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG5cbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1idXR0b25cIik7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jdG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBiYXJzIGZvciBCdXR0b25cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZChgYmFyJHtpfWApO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uYXBwZW5kQ2hpbGQoYmFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgICAgICBjb250ZW50LnRpdGxlID0gXCJQcm9qZWN0c1wiOyAvLyBkZWZhdWx0O1xuICAgIH1cblxuICAgIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMuX2RhdGE7IH1cblxuICAgIHNldCBkYXRhIChvYmopIHsgdGhpcy5fZGF0YSA9IG9iajsgfVxuXG4gICAgZ2V0IGNvbnRlbnQgKCkgeyByZXR1cm4gdGhpcy5fY29udGVudDsgfVxuXG4gICAgc2V0IGNvbnRlbnQgKG9iaikgeyB0aGlzLl9jb250ZW50ID0gb2JqOyB9XG5cbiAgICBnZXQgcG9wdXAgKCkgeyByZXR1cm4gdGhpcy5fcG9wdXA7IH1cblxuICAgIHNldCBwb3B1cCAob2JqKSB7IHRoaXMuX3BvcHVwID0gb2JqOyB9XG5cbiAgICBnZXQgYnV0dG9uICgpIHsgcmV0dXJuIHRoaXMuX2J1dHRvbjsgfVxuXG4gICAgc2V0IGJ1dHRvbiAoZWxlbSkgeyB0aGlzLl9idXR0b24gPSBlbGVtOyB9XG5cbiAgICB0b2dnbGUgKCkge1xuICAgICAgICAvLyBJZiBTaWRlYmFyIGlzIGFjdGl2YXRlZCwgcmVzZXQgU2lkZWJhciAodGFibGV0IHZpZXcpXG4gICAgICAgIGlmICh0aGlzLiNleHBhbmRlZCkge1xuICAgICAgICAgICAgdGhpcy4jZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRcIik7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBPdGhlcndpc2UsIGVuYWJsZSBTaWRlYmFyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImNoYW5nZVwiKSlcbiAgICAgICAgICAgIHRoaXMuI2V4cGFuZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAjdG9nZ2xlICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZFwiKTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcbiAgICB9XG5cbiAgICAjc3VibWl0IChuYW1lLCBjb2xvdXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEuYWRkUHJvamVjdChuYW1lLCBjb2xvdXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAjcG9wdXAgKCkge1xuICAgICAgICAvLyBDcmVhdGUgTmV3LVByb2plY3QgRWxlbWVudCBmb3IgUG9wdXBcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZm9yIE5ldy1Qcm9qZWN0IFRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHRpdGxlTGFiZWwuZm9yID0gXCJuZXctcHJvamVjdC10aXRsZVwiO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBUaXRsZVwiO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGl0bGVJbnB1dC5pZCA9IFwibmV3LXByb2plY3QtdGl0bGVcIjtcblxuICAgICAgICAvLyBBZGQgSW5wdXQgYW5kIExhYmVsIGZvciBOZXctUHJvamVjdCBDb2xvdXJcbiAgICAgICAgY29uc3QgY29sb3VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGNvbG91ckxhYmVsLmZvciA9IFwibmV3LXByb2plY3QtY29sb3VyXCI7XG4gICAgICAgIGNvbG91ckxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBDb2xvdXJcIjtcbiAgICAgICAgY29uc3QgY29sb3VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNvbG91cklucHV0LnR5cGUgPSBcImNvbG9yXCI7XG4gICAgICAgIGNvbG91cklucHV0LnZhbHVlID0gYCMkeyhNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYgKiAxMDAwMDAwKS50b1N0cmluZygxNikuc2xpY2UoMCwgNil9YDtcbiAgICAgICAgY29sb3VySW5wdXQuaWQgPSBcIm5ldy1wcm9qZWN0LWNvbG91clwiO1xuXG4gICAgICAgIC8vIEFkZCBTdWJtaXQgQnV0dG9uIGZvciBOZXctUHJvamVjdFxuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcInBvcHVwLXN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuI3N1Ym1pdCh0aXRsZUlucHV0LnZhbHVlLCBjb2xvdXJJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmV4aXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI3N1Ym1pdCh0aXRsZUlucHV0LnZhbHVlLCBjb2xvdXJJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cC5leGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBwcm9qZWN0IHRpdGxlIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzIHRvIE5ldy1Qcm9qZWN0XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoY29sb3VyTGFiZWwpO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGNvbG91cklucHV0KTtcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgICAgIC8vIEVudGVyIFBvcHVwXG4gICAgICAgIHRoaXMucG9wdXAuZW50ZXIobmV3UHJvamVjdCk7XG4gICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAjcmVuZGVyICgpIHtcbiAgICAgICAgLy8gQ2xlYXIgQ29udGVudFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCBUaXRsZSB0byBNZW51XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLXRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuY29udGVudC50aXRsZSA9IFwiUHJvamVjdHNcIjsgfSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAvLyBBZGQgUHJvamVjdC1MaXN0XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWxpc3RcIik7XG4gICAgICAgIHRoaXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0XCIpO1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5jb250ZW50LnRpdGxlID0gcC5uYW1lOyB9KTtcblxuICAgICAgICAgICAgY29uc3QgY29sb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbG91ci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb2xvdXItY29kZVwiKTtcbiAgICAgICAgICAgIGNvbG91ci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1jb2xvcjogJHtwLmNvbG91cn1gKTtcblxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcC5uYW1lO1xuXG4gICAgICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNyb3NzLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbC50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgICAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5kZWxldGVQcm9qZWN0KHAubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudC50aXRsZSA9PT0gcC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQudGl0bGUgPSBcIlByb2plY3RzXCI7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gSXRlbSAmIEl0ZW0gdG8gTGlzdFxuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChjb2xvdXIpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBDcmVhdGUgUHJvamVjdCBCdXR0b25cbiAgICAgICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdFwiKTtcbiAgICAgICAgY3JlYXRlLnRleHRDb250ZW50ID0gXCIrIFByb2plY3RcIjtcbiAgICAgICAgY3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jcG9wdXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzIHRvIE1lbnUgQ29udGFpbmVyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGUpO1xuICAgIH1cbn07IiwiaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFwicG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIE92ZXJsYXkgRWxlbWVudFxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5leGl0KCk7IH0pO1xuICAgIH1cblxuICAgIGdldCBvdmVybGF5ICgpIHsgcmV0dXJuIHRoaXMuX292ZXJsYXk7IH1cblxuICAgIHNldCBvdmVybGF5IChlbGVtKSB7IHRoaXMuX292ZXJsYXkgPSBlbGVtOyB9XG5cbiAgICBlbnRlciAoZWxlbSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy4jcmVuZGVyKGVsZW0pO1xuICAgIH1cblxuICAgIGV4aXQgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICAjcmVuZGVyIChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gQWRkIEV4aXQgQnV0dG9uXG4gICAgICAgIGNvbnN0IGV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBleGl0LnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIGV4aXQuY2xhc3NMaXN0LmFkZChcImV4aXQtcG9wdXBcIik7XG4gICAgICAgIGV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuZXhpdCgpOyB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJiBlLmtleSA9PT0gXCJFc2NhcGVcIilcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gUG9wdXAgQ29udGFpbmVyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGV4aXQpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW9yaXRpZXMge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHRoaXMubGlzdFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLiNidWlsZCgpO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSAoKSB7IHJldHVybiB0aGlzLl9wcmlvcml0eTsgfVxuXG4gICAgc2V0IHByaW9yaXR5ICh2YWx1ZSkgeyB0aGlzLl9wcmlvcml0eSA9IHZhbHVlOyB9XG5cbiAgICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0OyB9XG5cbiAgICBzZXQgbGlzdCAoYXJyKSB7IHRoaXMuX2xpc3QgPSBhcnI7IH1cblxuICAgIGdldCBjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udGFpbmVyOyB9XG5cbiAgICBzZXQgY29udGFpbmVyIChlbGVtKSB7IHRoaXMuX2NvbnRhaW5lciA9IGVsZW07IH1cblxuICAgICN1cGRhdGVCdXR0b25zICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b24udmFsdWUgPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU2VsZWN0ZWQgYnV0dG9uOiAke3RoaXMucHJpb3JpdHl9O2ApO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gYnV0dG9uLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuI3VwZGF0ZUJ1dHRvbnMoYnV0dG9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjYnVpbGQgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1jb250YWluZXJcIik7XG4gICAgICAgIFtcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl0uZm9yRWFjaChwcmlvcml0eSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnV0dG9uLnZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25cIik7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHkgPT09IFwiTG93XCIpXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmlkID0gYCR7cHJpb3JpdHkudG9Mb3dlckNhc2UoKX0tcHJpb3JpdHlgO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEV2ZW50IExpc3RlbmVycyBmb3IgQnV0dG9uc1xuICAgICAgICB0aGlzLiNhZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9UYWJsZSB7XG4gICAgY29uc3RydWN0b3IgKGxpc3QpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICAgICAgdGhpcy50YWJsZS5jbGFzc0xpc3QuYWRkKFwidG8tZG8tdGFibGVcIik7XG4gICAgfVxuXG4gICAgZ2V0IHRhYmxlICgpIHsgcmV0dXJuIHRoaXMuX3RhYmxlOyB9XG5cbiAgICBzZXQgdGFibGUgKGVsZW0pIHsgdGhpcy5fdGFibGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0OyB9XG5cbiAgICBzZXQgbGlzdCAoYXJyKSB7IHRoaXMuX2xpc3QgPSBhcnI7IH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9