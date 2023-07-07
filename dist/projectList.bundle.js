"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["projectList"],{

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

        // Add Priority Elements for New To-Do
        const priorityTitle = document.createElement("label");
        priorityTitle.textContent = "Priority";
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
        newToDo.appendChild(priorityTitle);
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
        // const contentTitle = document.createElement("h1");
        // contentTitle.classList.add("content-title");
        // contentTitle.textContent = this.title;

        // Add To-Do Table
        const todos = new _to_do_table_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.title, this.data);

        // Add Create To-Do Button
        const create  = document.createElement("button");
        create.classList.add("add-to-do");
        create.textContent = "+ To Do";
        create.addEventListener("click", (e) => {
            this.#popup();
        });

        // this.container.appendChild(contentTitle);
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
                    date: new Date(date)
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

/***/ "./src/js/item-list.js":
/*!*****************************!*\
  !*** ./src/js/item-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemList)
/* harmony export */ });
class ItemList {
    constructor (id) {
        this.list = document.createElement("ul");
        this.list.id = `${id}-list`;
    }

    get list () { return this._list; }

    set list (elem) { this._list = elem; }
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
        // Build the Container for the Buttons
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

/***/ "./src/js/project-list.js":
/*!********************************!*\
  !*** ./src/js/project-list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ "./src/js/content.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");
/* harmony import */ var _item_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-list.js */ "./src/js/item-list.js");




class ProjectList extends _item_list_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor (id) {
        super(id);
    }

    /**
     * 
     * @param {Data} data 
     * @param {Content} content
     * @param {boolean} add 
     */
    render (data, content, add=false) {
        this.list.innerHTML = "";

        // Iterate through Projects and build List
        data.projects.forEach(p => {
            // Create Project Item for List
            const item = document.createElement("div");
            item.classList.add("project-item");
            item.addEventListener("click", (e) => { content.title = p.name; });

            // Add Colour Tag for Project Item
            const tag = document.createElement("div");
            tag.textContent = "#";
            tag.classList.add("tag-colour");
            tag.setAttribute("style", `color: ${p.colour}`);

            // Add Name for Project Item
            const name = document.createElement("div");
            name.textContent = p.name;

            // Add Delete Button for Project Item
            const del = document.createElement("div");
            del.classList.add("tag-delete");
            del.textContent = "x";
            del.addEventListener("click", (e) => {
                data.deleteProject(p.name);
                if (content.title === p.name)
                    content.title = "To-Dos";
                e.stopPropagation();
                this.render(data, content);
            });

            // Append Elements to Project Item
            item.appendChild(tag);
            item.appendChild(name);
            item.append(del);

            // Append Item to List
            this.list.append(item);
        });

        // Create Element for Adding a New Project
        if (add) {
            // Create New-Project Item
            const newProject = document.createElement("div");
            newProject.classList.add("new-project");

            // Add Colour Input for New-Project Item
            const colour = document.createElement("input");
            colour.type = "color";
            colour.value = `#${(Math.random() * 0xffffff * 1000000).toString(16).slice(0, 6)}`;
            colour.classList.add("new-project-colour");

            // Add Name Input for New-Project Item
            const name = document.createElement("input");
            name.type = "text";
            name.value = "New-Project";
            name.classList.add("new-project-name");

            // Add Confirm Button for New-Project Item
            const confirm = document.createElement("button");
            confirm.textContent = "Confirm";
            confirm.classList.add("new-project-confirm");
            confirm.addEventListener("click", (e) => {
                if (name === "")
                    window.alert("Please add a name for your new project.");
                else {
                    data.addProject(name.value, colour.value);
                    this.render(data, content);
                }
            });

            // Add Cancel Button for New-Project Item
            const cancel = document.createElement("button");
            cancel.textContent = "Cancel";
            cancel.classList.add("new-project-cancel");
            cancel.addEventListener("click", (e) => { this.render(data, content); });

            // Append Elements to New-Project Item
            newProject.appendChild(colour);
            newProject.appendChild(name);
            newProject.appendChild(confirm);
            newProject.appendChild(cancel);

            // Append New-Project Item to List
            this.list.appendChild(newProject);
        }
    }
}

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

    #generateDateList () {
        const list = [];
        this.data.todos.forEach(todo => {
            if (list.indexOf(todo.date) === -1)
                list.push(todo.date);
        });
        console.log(list);
    }

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
        const dateList = this.#generateDateList();

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/project-list.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsb0JBQW9CO0FBQzNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NoZWNrYm94LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2N1c3RvbS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9kYXRhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9pdGVtLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3ByaW9yaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcm9qZWN0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy90by1kby10YWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCB7XG4gICAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHRoaXMuY2hlY2tib3guaWQgPSBpZDtcbiAgICB9XG5cbiAgICBnZXQgY2hlY2tib3ggKCkgeyByZXR1cm4gdGhpcy5fY2hlY2tib3g7IH1cblxuICAgIHNldCBjaGVja2JveCAoZWxlbSkgeyB0aGlzLl9jaGVja2JveCA9IGVsZW07IH1cbn07IiwiaW1wb3J0IENoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94LmpzXCI7XG5pbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gXCIuL2N1c3RvbS1zZWxlY3QuanNcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCBET01FbGVtZW50IGZyb20gXCIuL2RvbS1lbGVtZW50LmpzXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vcG9wdXAuanNcIjtcbmltcG9ydCBQcmlvcml0aWVzIGZyb20gXCIuL3ByaW9yaXRpZXMuanNcIjtcbmltcG9ydCBUb0RvVGFibGUgZnJvbSBcIi4vdG8tZG8tdGFibGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIERPTUVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7RGF0YX0gZGF0YSBcbiAgICAgKiBAcGFyYW0ge1BvcHVwfSBwb3B1cCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoZGF0YSwgcG9wdXApIHtcbiAgICAgICAgc3VwZXIoXCJjb250ZW50XCIpO1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucG9wdXAgPSBwb3B1cDtcblxuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgICBzZXQgZGF0YSAoYXJyKSB7IHRoaXMuX2RhdGEgPSBhcnI7IH1cblxuICAgIGdldCBwb3B1cCAoKSB7IHJldHVybiB0aGlzLl9wb3B1cDsgfVxuXG4gICAgc2V0IHBvcHVwIChvYmopIHsgdGhpcy5fcG9wdXAgPSBvYmo7IH1cblxuICAgIGdldCB0aXRsZSAoKSB7IHJldHVybiB0aGlzLl90aXRsZTsgfVxuXG4gICAgc2V0IHRpdGxlIChuYW1lKSB7IFxuICAgICAgICB0aGlzLl90aXRsZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuI3JlbmRlcigpXG4gICAgfVxuXG4gICAgI3N1Ym1pdCAobmFtZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkYXRlKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZGF0YS5hZGRUb0RvKG5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZGF0ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgICNwb3B1cCAoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBOZXctVG8tRG8gRWxlbWVudCBmb3IgUG9wdXBcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld1RvRG8uY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZm9yIE5ldy1Uby1EbyBUaXRsZVxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0aXRsZUxhYmVsLmZvciA9IFwibmV3LXRvLWRvLXRpdGxlXCI7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIk5ldyBUby1EbyBUaXRsZVwiO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGl0bGVJbnB1dC5pZCA9IFwibmV3LXRvLWRvLXRpdGxlXCI7XG5cbiAgICAgICAgLy8gQWRkIFByaW9yaXR5IEVsZW1lbnRzIGZvciBOZXcgVG8tRG9cbiAgICAgICAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IG5ldyBQcmlvcml0aWVzKCk7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZnJvIE5ldy1Uby1EbyBEZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGRlc2NMYWJlbC5mb3IgPSBcIm5ldy10by1kby1kZXNjcmlwdGlvblwiO1xuICAgICAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pZCA9IFwibmV3LXRvLWRvLWRlc2NyaXB0aW9uXCI7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZm9yIFByb2plY3QgU2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcHJvamVjdExhYmVsLmZvciA9IFwicHJvamVjdC1zZWxlY3RcIjtcbiAgICAgICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhLnByb2plY3RzLmZvckVhY2gocCA9PiB7IG9wdGlvbnMucHVzaChwLm5hbWUpOyB9KTtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IG5ldyBDdXN0b21TZWxlY3Qob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucG9wdXAuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5jbG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgRW5hYmxlciBmb3IgUHJvamVjdCBTZWxlY3Rpb25cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZW5hYmxlci1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RFbmFibGUgPSBuZXcgQ2hlY2tib3goXCJwcm9qZWN0LWVuYWJsZVwiKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbmFibGUuY2hlY2tib3gpO1xuICAgICAgICBwcm9qZWN0RW5hYmxlLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEVuYWJsZS5jaGVja2JveC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Quc2V0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBOZXctVG8tRG8gRHVlLURhdGVcbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBkdWVEYXRlTGFiZWwuZm9yID0gXCJkdWUtZGF0ZVwiO1xuICAgICAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGR1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgICBkdWVEYXRlLmlkID0gXCJkdWUtZGF0ZVwiO1xuICAgICAgICBkdWVEYXRlLm1pbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cbiAgICAgICAgLy8gQWRkIEVuYWJsZXIgZm9yIER1ZSBEYXRlIFNlbGVjdGlvblxuICAgICAgICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1lbmFibGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUVuYWJsZSA9IG5ldyBDaGVja2JveChcImR1ZS1kYXRlLWVuYWJsZVwiKTtcbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVFbmFibGUuY2hlY2tib3gpO1xuICAgICAgICBkdWVEYXRlRW5hYmxlLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZHVlRGF0ZUVuYWJsZS5jaGVja2JveC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIGR1ZURhdGUuZGlzYWJsZWQgPSAhZHVlRGF0ZUVuYWJsZS5jaGVja2JveC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2VkXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgU3VibWl0IEJ1dHRvbiBmb3IgTmV3LVRvLURvXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtc3VibWl0XCIpO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4jc3VibWl0KHRpdGxlSW5wdXQudmFsdWUsIHByaW9yaXRpZXMucHJpb3JpdHksIGRlc2NyaXB0aW9uLnZhbHVlLCBwcm9qZWN0U2VsZWN0LnZhbHVlLCBkdWVEYXRlLnZhbHVlKSlcbiAgICAgICAgICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXAuZXhpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gTmV3LVRvLURvXG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQocHJpb3JpdGllcy5jb250YWluZXIpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Quc2VsZWN0KTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgICAgIC8vIEVudGVyIFBvcHVwXG4gICAgICAgIHRoaXMucG9wdXAuZW50ZXIobmV3VG9Ebyk7XG4gICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAjcmVuZGVyICgpIHtcbiAgICAgICAgLy8gQ2xlYXIgQ29udGVudFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCBUaXRsZSB0byBDb250ZW50XG4gICAgICAgIC8vIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgLy8gY29udGVudFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXRpdGxlXCIpO1xuICAgICAgICAvLyBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuXG4gICAgICAgIC8vIEFkZCBUby1EbyBUYWJsZVxuICAgICAgICBjb25zdCB0b2RvcyA9IG5ldyBUb0RvVGFibGUodGhpcy50aXRsZSwgdGhpcy5kYXRhKTtcblxuICAgICAgICAvLyBBZGQgQ3JlYXRlIFRvLURvIEJ1dHRvblxuICAgICAgICBjb25zdCBjcmVhdGUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG8tZG9cIik7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IFwiKyBUbyBEb1wiO1xuICAgICAgICBjcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNwb3B1cCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Rvcy50YWJsZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZSk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21TZWxlY3Qge1xuICAgICNlbmFibGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yIChhcnIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25cIik7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLiNidWlsZChhcnIpO1xuXG4gICAgICAgIC8vIEFkZCBFdmVudCBMaXN0ZW5lcnNcbiAgICAgICAgdGhpcy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuI2VuYWJsZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3QgKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0OyB9XG5cbiAgICBzZXQgc2VsZWN0IChlbGVtKSB7IHRoaXMuX3NlbGVjdCA9IGVsZW07IH1cblxuICAgIGdldCBwbGFjZUhvbGRlciAoKSB7IHJldHVybiB0aGlzLl9wbGFjZUhvbGRlcjsgfVxuXG4gICAgc2V0IHBsYWNlSG9sZGVyIChlbGVtKSB7IHRoaXMuX3BsYWNlSG9sZGVyID0gZWxlbTsgfVxuXG4gICAgZ2V0IHZhbHVlICgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgICBzZXQgdmFsdWUgKHZhbHVlKSB7IHRoaXMuX3ZhbHVlID0gdmFsdWU7fVxuXG4gICAgZ2V0IGlkICgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdC5pZDsgfVxuXG4gICAgc2V0IGlkIChpZGVudGlmaWVyKSB7IHRoaXMuX3NlbGVjdC5pZCA9IGlkZW50aWZpZXI7IH0gXG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgIH1cblxuICAgIHNldCAoKSB7XG4gICAgICAgIHRoaXMuI2VuYWJsZWQgPSAhdGhpcy4jZW5hYmxlZDtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcImRpc2FibGVcIik7XG4gICAgfVxuXG4gICAgI2J1aWxkIChhcnIpIHtcbiAgICAgICAgLy8gQ3JlYXRlIFBsYWNlaG9sZGVyIElucHV0XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBQcm9qZWN0XCI7XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIucmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgICAgIC8vIENyZWF0ZSBPcHRpb25zIExpc3RcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwib3B0aW9uc1wiKTtcbiAgICAgICAgYXJyLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG87XG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgRWxlbWVudHMgdG8gQ3VzdG9tIFNlbGVjdFxuICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlSG9sZGVyKTtcbiAgICAgICAgdGhpcy5zZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSB8fCBcIltdXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpXG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpIHx8IFwiW11cIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdHMgKCkgeyByZXR1cm4gdGhpcy5fcHJvamVjdHM7IH1cblxuICAgIHNldCBwcm9qZWN0cyAoYXJyKSB7IHRoaXMuX3Byb2plY3RzID0gYXJyOyB9XG5cbiAgICBnZXQgdG9kb3MgKCkgeyByZXR1cm4gdGhpcy5fdG9kb3M7IH1cblxuICAgIHNldCB0b2RvcyAoYXJyKSB7IHRoaXMuX3RvZG9zID0gYXJyOyB9XG5cbiAgICAjaW5kZXhPZlByb2plY3QgKG5hbWUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0IChuYW1lLCBjb2xvdXIpIHtcbiAgICAgICAgaWYgKHRoaXMuI2luZGV4T2ZQcm9qZWN0KG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHtuYW1lOiBuYW1lLCBjb2xvdXI6IGNvbG91cn0pO1xuICAgICAgICAgICAgdGhpcy5zYXZlKFwicHJvamVjdHNcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jaW5kZXhPZlByb2plY3QobmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInByb2plY3RzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2luZGV4T2ZUb0RvIChuYW1lKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudG9kb3MubGVuZ3RoOyBpKyspIFxuICAgICAgICAgICAgaWYgKHRoaXMudG9kb3NbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgYWRkVG9EbyAobmFtZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLiNpbmRleE9mVG9EbyhuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEdldCBQcm9qZWN0IGRpY3Rpb25hcnksIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgY29uc3QgcEluZGV4ID0gdGhpcy4jaW5kZXhPZlByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBjb25zdCBwRGljdCA9IHtuYW1lOiBwcm9qZWN0LCBjb2xvdXI6IFwiXCJ9O1xuICAgICAgICAgICAgaWYgKHBJbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgcERpY3QuY29sb3VyID0gdGhpcy5wcm9qZWN0c1twSW5kZXhdLmNvbG91cjtcbiAgICAgICAgICAgIHRoaXMudG9kb3MucHVzaChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsIFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksIFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBwRGljdCwgXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInRvZG9zXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlVG9EbyAobmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2luZGV4T2ZUb0RvKG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJ0b2Rvc1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmUgKGtleSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAga2V5ID09PSBcInByb2plY3RzXCIgPyB0aGlzLnByb2plY3RzIDogdGhpcy50b2Rvc1xuICAgICAgICApKTtcbiAgICB9IFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfSBcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUxpc3Qge1xuICAgIGNvbnN0cnVjdG9yIChpZCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIHRoaXMubGlzdC5pZCA9IGAke2lkfS1saXN0YDtcbiAgICB9XG5cbiAgICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0OyB9XG5cbiAgICBzZXQgbGlzdCAoZWxlbSkgeyB0aGlzLl9saXN0ID0gZWxlbTsgfVxufTsiLCJpbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIERPTUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoXCJwb3B1cFwiKTtcblxuICAgICAgICAvLyBBZGQgT3ZlcmxheSBFbGVtZW50XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmV4aXQoKTsgfSk7XG4gICAgfVxuXG4gICAgZ2V0IG92ZXJsYXkgKCkgeyByZXR1cm4gdGhpcy5fb3ZlcmxheTsgfVxuXG4gICAgc2V0IG92ZXJsYXkgKGVsZW0pIHsgdGhpcy5fb3ZlcmxheSA9IGVsZW07IH1cblxuICAgIGVudGVyIChlbGVtKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLiNyZW5kZXIoZWxlbSk7XG4gICAgfVxuXG4gICAgZXhpdCAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgICNyZW5kZXIgKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBBZGQgRXhpdCBCdXR0b25cbiAgICAgICAgY29uc3QgZXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGV4aXQudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgZXhpdC5jbGFzc0xpc3QuYWRkKFwiZXhpdC1wb3B1cFwiKTtcbiAgICAgICAgZXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5leGl0KCk7IH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmIGUua2V5ID09PSBcIkVzY2FwZVwiKVxuICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBQb3B1cCBDb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZXhpdCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpb3JpdGllcyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gdGhpcy5saXN0WzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuI2J1aWxkKCk7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5ICgpIHsgcmV0dXJuIHRoaXMuX3ByaW9yaXR5OyB9XG5cbiAgICBzZXQgcHJpb3JpdHkgKHZhbHVlKSB7IHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7IH1cblxuICAgIGdldCBsaXN0ICgpIHsgcmV0dXJuIHRoaXMuX2xpc3Q7IH1cblxuICAgIHNldCBsaXN0IChhcnIpIHsgdGhpcy5fbGlzdCA9IGFycjsgfVxuXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfVxuXG4gICAgI3VwZGF0ZUJ1dHRvbnMgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi52YWx1ZSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCBidXR0b246ICR7dGhpcy5wcmlvcml0eX07YCk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgI2FkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlQnV0dG9ucyhidXR0b24udmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNidWlsZCAoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBDb250YWluZXIgZm9yIHRoZSBCdXR0b25zXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWNvbnRhaW5lclwiKTtcbiAgICAgICAgW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXS5mb3JFYWNoKHByaW9yaXR5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBidXR0b24udmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGlmIChwcmlvcml0eSA9PT0gXCJMb3dcIilcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgICAgICBidXR0b24uaWQgPSBgJHtwcmlvcml0eS50b0xvd2VyQ2FzZSgpfS1wcmlvcml0eWA7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzIGZvciBCdXR0b25zXG4gICAgICAgIHRoaXMuI2FkZExpc3RlbmVycygpO1xuICAgIH1cbn07IiwiaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IEl0ZW1MaXN0IGZyb20gXCIuL2l0ZW0tbGlzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TGlzdCBleHRlbmRzIEl0ZW1MaXN0IHtcbiAgICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICAgICAgc3VwZXIoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7RGF0YX0gZGF0YSBcbiAgICAgKiBAcGFyYW0ge0NvbnRlbnR9IGNvbnRlbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFkZCBcbiAgICAgKi9cbiAgICByZW5kZXIgKGRhdGEsIGNvbnRlbnQsIGFkZD1mYWxzZSkge1xuICAgICAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggUHJvamVjdHMgYW5kIGJ1aWxkIExpc3RcbiAgICAgICAgZGF0YS5wcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIFByb2plY3QgSXRlbSBmb3IgTGlzdFxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBjb250ZW50LnRpdGxlID0gcC5uYW1lOyB9KTtcblxuICAgICAgICAgICAgLy8gQWRkIENvbG91ciBUYWcgZm9yIFByb2plY3QgSXRlbVxuICAgICAgICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRhZy50ZXh0Q29udGVudCA9IFwiI1wiO1xuICAgICAgICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoXCJ0YWctY29sb3VyXCIpO1xuICAgICAgICAgICAgdGFnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBjb2xvcjogJHtwLmNvbG91cn1gKTtcblxuICAgICAgICAgICAgLy8gQWRkIE5hbWUgZm9yIFByb2plY3QgSXRlbVxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcC5uYW1lO1xuXG4gICAgICAgICAgICAvLyBBZGQgRGVsZXRlIEJ1dHRvbiBmb3IgUHJvamVjdCBJdGVtXG4gICAgICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoXCJ0YWctZGVsZXRlXCIpO1xuICAgICAgICAgICAgZGVsLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS5kZWxldGVQcm9qZWN0KHAubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQudGl0bGUgPT09IHAubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC50aXRsZSA9IFwiVG8tRG9zXCI7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcihkYXRhLCBjb250ZW50KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gUHJvamVjdCBJdGVtXG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHRhZyk7XG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmQoZGVsKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIEl0ZW0gdG8gTGlzdFxuICAgICAgICAgICAgdGhpcy5saXN0LmFwcGVuZChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIEVsZW1lbnQgZm9yIEFkZGluZyBhIE5ldyBQcm9qZWN0XG4gICAgICAgIGlmIChhZGQpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBOZXctUHJvamVjdCBJdGVtXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0XCIpO1xuXG4gICAgICAgICAgICAvLyBBZGQgQ29sb3VyIElucHV0IGZvciBOZXctUHJvamVjdCBJdGVtXG4gICAgICAgICAgICBjb25zdCBjb2xvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb2xvdXIudHlwZSA9IFwiY29sb3JcIjtcbiAgICAgICAgICAgIGNvbG91ci52YWx1ZSA9IGAjJHsoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmICogMTAwMDAwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDAsIDYpfWA7XG4gICAgICAgICAgICBjb2xvdXIuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWNvbG91clwiKTtcblxuICAgICAgICAgICAgLy8gQWRkIE5hbWUgSW5wdXQgZm9yIE5ldy1Qcm9qZWN0IEl0ZW1cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBuYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgIG5hbWUudmFsdWUgPSBcIk5ldy1Qcm9qZWN0XCI7XG4gICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1uYW1lXCIpO1xuXG4gICAgICAgICAgICAvLyBBZGQgQ29uZmlybSBCdXR0b24gZm9yIE5ldy1Qcm9qZWN0IEl0ZW1cbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgY29uZmlybS50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICAgICAgICAgICAgY29uZmlybS5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtY29uZmlybVwiKTtcbiAgICAgICAgICAgIGNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBhZGQgYSBuYW1lIGZvciB5b3VyIG5ldyBwcm9qZWN0LlwiKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hZGRQcm9qZWN0KG5hbWUudmFsdWUsIGNvbG91ci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKGRhdGEsIGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBZGQgQ2FuY2VsIEJ1dHRvbiBmb3IgTmV3LVByb2plY3QgSXRlbVxuICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWNhbmNlbFwiKTtcbiAgICAgICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5yZW5kZXIoZGF0YSwgY29udGVudCk7IH0pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gTmV3LVByb2plY3QgSXRlbVxuICAgICAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChjb2xvdXIpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoY29uZmlybSk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBOZXctUHJvamVjdCBJdGVtIHRvIExpc3RcbiAgICAgICAgICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb1RhYmxlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvamVjdCBcbiAgICAgKiBAcGFyYW0ge0RhdGF9IGRhdGEgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHByb2plY3QsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICAgICAgdGhpcy50YWJsZS5jbGFzc0xpc3QuYWRkKFwidG8tZG8tdGFibGVcIik7XG5cbiAgICAgICAgdGhpcy4jYnVpbGQoKTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdCAoKSB7IHJldHVybiB0aGlzLl9wcm9qZWN0OyB9XG5cbiAgICBzZXQgcHJvamVjdCAodmFsdWUpIHsgdGhpcy5fcHJvamVjdCA9IHZhbHVlOyB9XG5cbiAgICBnZXQgdGFibGUgKCkgeyByZXR1cm4gdGhpcy5fdGFibGU7IH1cblxuICAgIHNldCB0YWJsZSAoZWxlbSkgeyB0aGlzLl90YWJsZSA9IGVsZW07IH1cblxuICAgIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMuX2RhdGE7IH1cblxuICAgIHNldCBkYXRhIChvYmopIHsgdGhpcy5fZGF0YSA9IG9iajsgfVxuXG4gICAgI2dlbmVyYXRlRGF0ZUxpc3QgKCkge1xuICAgICAgICBjb25zdCBsaXN0ID0gW107XG4gICAgICAgIHRoaXMuZGF0YS50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3QuaW5kZXhPZih0b2RvLmRhdGUpID09PSAtMSlcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2godG9kby5kYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3QpO1xuICAgIH1cblxuICAgICNidWlsZCAoKSB7XG4gICAgICAgIC8vIEFkZCBIZWFkZXIgRWxlbWVudCB0byBUby1EbyBUYWJsZVxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgICAgIGNvbnN0IHRvcFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIHRpdGxlLmNvbFNwYW4gPSAyOyAgLy8gVE9ETzogVXBkYXRlIHRvIGluY2x1ZGUgY2hlY2tib3hcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3Q7XG4gICAgICAgIGNvbnN0IGRhdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGRhdGVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtaGVhZGVyXCIpO1xuICAgICAgICBkYXRlSGVhZGVyLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gICAgICAgIHRvcFJvdy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRvcFJvdy5hcHBlbmRDaGlsZChkYXRlSGVhZGVyKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRvcFJvdyk7XG5cbiAgICAgICAgdGhpcy50YWJsZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIC8vIEFkZCBCb2R5IEVsZW1lbnQgdG8gVG8tRG8gVGFibGVcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbiAgICAgICAgY29uc3QgZGF0ZUxpc3QgPSB0aGlzLiNnZW5lcmF0ZURhdGVMaXN0KCk7XG5cbiAgICAgICAgdGhpcy5kYXRhLnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICAvLyBBZGQgUm93IEVsZW1lbnQgdG8gQm9keVxuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBBZGQgQ2hlY2tib3ggZm9yIENvbXBsZXRpb24gb2YgVGFza1xuXG4gICAgICAgICAgICAvLyBBZGQgUHJvamVjdCBDZWxsIHRvIFJvd1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIC8vIERlZmF1bHQgUHJvamVjdHMgQ2FuIGJlIGxlZnQgQmxhbmsgd2l0aCBEZWZhdWx0IENvbG91clxuICAgICAgICAgICAgaWYgKHRvZG8ucHJvamVjdC5jb2xvdXIgIT09IFwiXCIpXG4gICAgICAgICAgICAgICAgcHJvamVjdENlbGwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQtY29sb3I6ICR7dG9kby5wcm9qZWN0LmNvbG91cn1gKTtcbiAgICAgICAgICAgIHByb2plY3RDZWxsLnRleHRDb250ZW50ID0gdG9kby5wcm9qZWN0Lm5hbWU7XG5cbiAgICAgICAgICAgIC8vIEFkZCBUby1EbyBOYW1lIHRvIFJvd1xuICAgICAgICAgICAgY29uc3QgbmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBuYW1lQ2VsbC50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcblxuICAgICAgICAgICAgLy8gQWRkIER1ZS1EYXRlIHRvIFJvd1xuICAgICAgICAgICAgY29uc3QgZGF0ZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBkYXRlQ2VsbC50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIENlbGxzIHRvIFJvd1xuICAgICAgICAgICAgLy8gVE9ETzogQXBwZW5kIENoZWNrYm94IHRvIFJvd1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHByb2plY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChuYW1lQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGF0ZUNlbGwpO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgUm93IHRvIEJvZHlcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50YWJsZS5hcHBlbmRDaGlsZChib2R5KTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==