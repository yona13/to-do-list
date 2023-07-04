"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["navigator"],{

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

/***/ "./src/js/navigator.js":
/*!*****************************!*\
  !*** ./src/js/navigator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigator)
/* harmony export */ });
/* harmony import */ var _dom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-element.js */ "./src/js/dom-element.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.js */ "./src/js/search.js");




class Navigator extends _dom_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    
    /**
     * 
     * @param {Search} search 
     * @param {Menu} menu 
     */
    constructor (search, menu) {
        super("nav");

        // Add Title with "Logo" to Navigation Panel
        const logo = document.createElement("div");
        logo.textContent = "#TODO:"
        logo.classList.add("logo");
        this.container.appendChild(logo);

        // Create Toolbar
        const toolbar = document.createElement("div");
        toolbar.classList.add("toolbar");

        // Add Elements to Toolbar
        toolbar.appendChild(search.container);
        toolbar.appendChild(menu.button);

        // Add Elements to Container
        this.container.appendChild(toolbar);
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

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _dom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-element.js */ "./src/js/dom-element.js");


class Search extends _dom_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #searching = false;

    constructor () {
        super("search-block");
        
        const glass = document.createElement("i");
        glass.classList.add("fa-solid");
        glass.classList.add("fa-magnifying-glass");

        this.searchbar = document.createElement("input");
        this.searchbar.classList.add("searchbar");

        // Add Event Listeners
        this.container.addEventListener("click", (e) => {
            this.container.classList.toggle("find");
            this.searchbar.classList.toggle("searching");
            if (this.searchbar.classList.contains("searching"))
                this.searchbar.focus();
        });

        this.searchbar.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.#searching = true;
                console.log(`Searching for ${this.searchbar.value};`);
                // TODO: Implement Search..
                this.toggle();
                this.searchbar.value = "";
            }
        });

        document.addEventListener("keydown", (e) => {
            if (this.container.classList.contains("find") && e.key === "Escape") {
                this.#searching = true;
                this.toggle();
                this.searchbar.value = "";
            }
        });

        this.container.appendChild(glass);
        this.container.appendChild(this.searchbar);
    }

    get searchbar () { return this._searchbar; }

    set searchbar (elem) { this._searchbar = elem; }

    toggle () {
        // If Searchbar is activated, reset Searchbar
        if (this.#searching) {
            this.#searching = false;
            this.container.classList.remove("find");
            this.searchbar.classList.remove("searching");
        } 
        
        // Otherwise, enable Searchbar
        else if (this.container.classList.contains("find"))
            this.#searching = true;
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/navigator.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCOztBQUVsQixxQkFBcUI7O0FBRXJCLHVCQUF1Qjs7QUFFdkIsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZUFBZTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RDBDOztBQUUzQixxQkFBcUIsdURBQVU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsc0JBQXNCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CLHVCQUF1Qjs7QUFFdkIsa0JBQWtCOztBQUVsQixxQkFBcUI7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NoZWNrYm94LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2N1c3RvbS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9kYXRhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbmF2aWdhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcmlvcml0aWVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvc2VhcmNoLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdG8tZG8tdGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3gge1xuICAgIGNvbnN0cnVjdG9yIChpZCkge1xuICAgICAgICB0aGlzLmNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmlkID0gaWQ7XG4gICAgfVxuXG4gICAgZ2V0IGNoZWNrYm94ICgpIHsgcmV0dXJuIHRoaXMuX2NoZWNrYm94OyB9XG5cbiAgICBzZXQgY2hlY2tib3ggKGVsZW0pIHsgdGhpcy5fY2hlY2tib3ggPSBlbGVtOyB9XG59OyIsImltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC5qc1wiO1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tIFwiLi9jdXN0b20tc2VsZWN0LmpzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwLmpzXCI7XG5pbXBvcnQgUHJpb3JpdGllcyBmcm9tIFwiLi9wcmlvcml0aWVzLmpzXCI7XG5pbXBvcnQgVG9Eb1RhYmxlIGZyb20gXCIuL3RvLWRvLXRhYmxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0RhdGF9IGRhdGEgXG4gICAgICogQHBhcmFtIHtQb3B1cH0gcG9wdXAgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGRhdGEsIHBvcHVwKSB7XG4gICAgICAgIHN1cGVyKFwiY29udGVudFwiKTtcblxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG5cbiAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5fZGF0YTsgfVxuXG4gICAgc2V0IGRhdGEgKGFycikgeyB0aGlzLl9kYXRhID0gYXJyOyB9XG5cbiAgICBnZXQgcG9wdXAgKCkgeyByZXR1cm4gdGhpcy5fcG9wdXA7IH1cblxuICAgIHNldCBwb3B1cCAob2JqKSB7IHRoaXMuX3BvcHVwID0gb2JqOyB9XG5cbiAgICBnZXQgdGl0bGUgKCkgeyByZXR1cm4gdGhpcy5fdGl0bGU7IH1cblxuICAgIHNldCB0aXRsZSAobmFtZSkgeyBcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBuYW1lO1xuICAgICAgICB0aGlzLiNyZW5kZXIoKVxuICAgIH1cblxuICAgICNzdWJtaXQgKG5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZGF0ZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLmRhdGEuYWRkVG9EbyhuYW1lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGRhdGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAjcG9wdXAgKCkge1xuICAgICAgICAvLyBDcmVhdGUgTmV3LVRvLURvIEVsZW1lbnQgZm9yIFBvcHVwXG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdUb0RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwXCIpO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBOZXctVG8tRG8gVGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgdGl0bGVMYWJlbC5mb3IgPSBcIm5ldy10by1kby10aXRsZVwiO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgVG8tRG8gVGl0bGVcIjtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSBcIm5ldy10by1kby10aXRsZVwiO1xuXG4gICAgICAgIC8vIEFkZCBQcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0aWVzID0gbmV3IFByaW9yaXRpZXMoKTtcblxuICAgICAgICAvLyBBZGQgSW5wdXQgd2l0aCBMYWJlbCBmcm8gTmV3LVRvLURvIERlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgZGVzY0xhYmVsLmZvciA9IFwibmV3LXRvLWRvLWRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlkID0gXCJuZXctdG8tZG8tZGVzY3JpcHRpb25cIjtcblxuICAgICAgICAvLyBBZGQgSW5wdXQgd2l0aCBMYWJlbCBmb3IgUHJvamVjdCBTZWxlY3Rpb25cbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuZm9yID0gXCJwcm9qZWN0LXNlbGVjdFwiO1xuICAgICAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEucHJvamVjdHMuZm9yRWFjaChwID0+IHsgb3B0aW9ucy5wdXNoKHAubmFtZSk7IH0pO1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gbmV3IEN1c3RvbVNlbGVjdChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5wb3B1cC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBFbmFibGVyIGZvciBQcm9qZWN0IFNlbGVjdGlvblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1lbmFibGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEVuYWJsZSA9IG5ldyBDaGVja2JveChcInByb2plY3QtZW5hYmxlXCIpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVuYWJsZS5jaGVja2JveCk7XG4gICAgICAgIHByb2plY3RFbmFibGUuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0RW5hYmxlLmNoZWNrYm94LmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5zZXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZm9yIE5ldy1Uby1EbyBEdWUtRGF0ZVxuICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5mb3IgPSBcImR1ZS1kYXRlXCI7XG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGR1ZURhdGUuaWQgPSBcImR1ZS1kYXRlXCI7XG4gICAgICAgIGR1ZURhdGUubWluID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICAgICAgICAvLyBBZGQgRW5hYmxlciBmb3IgRHVlIERhdGUgU2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVuYWJsZXItY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBkdWVEYXRlRW5hYmxlID0gbmV3IENoZWNrYm94KFwiZHVlLWRhdGUtZW5hYmxlXCIpO1xuICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVuYWJsZS5jaGVja2JveCk7XG4gICAgICAgIGR1ZURhdGVFbmFibGUuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkdWVEYXRlRW5hYmxlLmNoZWNrYm94LmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgZHVlRGF0ZS5kaXNhYmxlZCA9ICFkdWVEYXRlRW5hYmxlLmNoZWNrYm94LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBTdWJtaXQgQnV0dG9uIGZvciBOZXctVG8tRG9cbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1zdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNzdWJtaXQodGl0bGVJbnB1dC52YWx1ZSwgcHJpb3JpdGllcy5wcmlvcml0eSwgZGVzY3JpcHRpb24udmFsdWUsIHByb2plY3RTZWxlY3QudmFsdWUsIGR1ZURhdGUudmFsdWUpKVxuICAgICAgICAgICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5leGl0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBOZXctVG8tRG9cbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChwcmlvcml0aWVzLmNvbnRhaW5lcik7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdC5zZWxlY3QpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKGR1ZURhdGVDb250YWluZXIpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICAgICAgLy8gRW50ZXIgUG9wdXBcbiAgICAgICAgdGhpcy5wb3B1cC5lbnRlcihuZXdUb0RvKTtcbiAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgICNyZW5kZXIgKCkge1xuICAgICAgICAvLyBDbGVhciBDb250ZW50XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gQWRkIFRpdGxlIHRvIENvbnRlbnRcbiAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG5cbiAgICAgICAgLy8gQWRkIFRvLURvIFRhYmxlXG4gICAgICAgIGNvbnN0IHRvZG9zID0gbmV3IFRvRG9UYWJsZSh0aGlzLmRhdGEudG9kb3MpO1xuXG4gICAgICAgIC8vIEFkZCBDcmVhdGUgVG8tRG8gQnV0dG9uXG4gICAgICAgIGNvbnN0IGNyZWF0ZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjcmVhdGUuY2xhc3NMaXN0LmFkZChcImFkZC10by1kb1wiKTtcbiAgICAgICAgY3JlYXRlLnRleHRDb250ZW50ID0gXCIrIFRvIERvXCI7XG4gICAgICAgIGNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3BvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9zLnRhYmxlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlKTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVNlbGVjdCB7XG4gICAgI2VuYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IgKGFycikge1xuICAgICAgICB0aGlzLnNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93blwiKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuI2J1aWxkKGFycik7XG5cbiAgICAgICAgLy8gQWRkIEV2ZW50IExpc3RlbmVyc1xuICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy4jZW5hYmxlZClcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3Q7IH1cblxuICAgIHNldCBzZWxlY3QgKGVsZW0pIHsgdGhpcy5fc2VsZWN0ID0gZWxlbTsgfVxuXG4gICAgZ2V0IHBsYWNlSG9sZGVyICgpIHsgcmV0dXJuIHRoaXMuX3BsYWNlSG9sZGVyOyB9XG5cbiAgICBzZXQgcGxhY2VIb2xkZXIgKGVsZW0pIHsgdGhpcy5fcGxhY2VIb2xkZXIgPSBlbGVtOyB9XG5cbiAgICBnZXQgdmFsdWUgKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICAgIHNldCB2YWx1ZSAodmFsdWUpIHsgdGhpcy5fdmFsdWUgPSB2YWx1ZTt9XG5cbiAgICBnZXQgaWQgKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0LmlkOyB9XG5cbiAgICBzZXQgaWQgKGlkZW50aWZpZXIpIHsgdGhpcy5fc2VsZWN0LmlkID0gaWRlbnRpZmllcjsgfSBcblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgfVxuXG4gICAgc2V0ICgpIHtcbiAgICAgICAgdGhpcy4jZW5hYmxlZCA9ICF0aGlzLiNlbmFibGVkO1xuICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZVwiKTtcbiAgICB9XG5cbiAgICAjYnVpbGQgKGFycikge1xuICAgICAgICAvLyBDcmVhdGUgUGxhY2Vob2xkZXIgSW5wdXRcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlci50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIFByb2plY3RcIjtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5yZWFkT25seSA9IHRydWU7XG5cbiAgICAgICAgLy8gQ3JlYXRlIE9wdGlvbnMgTGlzdFxuICAgICAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25zXCIpO1xuICAgICAgICBhcnIuZm9yRWFjaChvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbztcbiAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBFbGVtZW50cyB0byBDdXN0b20gU2VsZWN0XG4gICAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZENoaWxkKHRoaXMucGxhY2VIb2xkZXIpO1xuICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpIHx8IFwiW11cIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSlcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9kb3MpO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0cyAoKSB7IHJldHVybiB0aGlzLl9wcm9qZWN0czsgfVxuXG4gICAgc2V0IHByb2plY3RzIChhcnIpIHsgdGhpcy5fcHJvamVjdHMgPSBhcnI7IH1cblxuICAgIGdldCB0b2RvcyAoKSB7IHJldHVybiB0aGlzLl90b2RvczsgfVxuXG4gICAgc2V0IHRvZG9zIChhcnIpIHsgdGhpcy5fdG9kb3MgPSBhcnI7IH1cblxuICAgICNpbmRleE9mUHJvamVjdCAobmFtZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGFkZFByb2plY3QgKG5hbWUsIGNvbG91cikge1xuICAgICAgICBpZiAodGhpcy4jaW5kZXhPZlByb2plY3QobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2goe25hbWU6IG5hbWUsIGNvbG91cjogY29sb3VyfSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNpbmRleE9mUHJvamVjdChuYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5zYXZlKFwicHJvamVjdHNcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5kZXhPZlRvRG8gKG5hbWUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50b2Rvcy5sZW5ndGg7IGkrKykgXG4gICAgICAgICAgICBpZiAodGhpcy50b2Rvc1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBhZGRUb0RvIChuYW1lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGRhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuI2luZGV4T2ZUb0RvKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gR2V0IFByb2plY3QgZGljdGlvbmFyeSwgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBjb25zdCBwSW5kZXggPSB0aGlzLiNpbmRleE9mUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHBEaWN0ID0ge25hbWU6IHByb2plY3QsIGNvbG91cjogXCJcIn07XG4gICAgICAgICAgICBpZiAocEluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBwRGljdC5jb2xvdXIgPSB0aGlzLnByb2plY3RzW3BJbmRleF0uY29sb3VyO1xuICAgICAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHtuYW1lOiBuYW1lLCBwcmlvcml0eTogcHJpb3JpdHksIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgcHJvamVjdDogcERpY3QsIGRhdGU6IGRhdGV9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInRvZG9zXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlVG9EbyAobmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2luZGV4T2ZUb0RvKG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJ0b2Rvc1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmUgKGtleSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAga2V5ID09PSBcInByb2plY3RzXCIgPyB0aGlzLnByb2plY3RzIDogdGhpcy50b2Rvc1xuICAgICAgICApKTtcbiAgICB9IFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfSBcbn07IiwiaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9wb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgRE9NRWxlbWVudCB7XG4gICAgI2V4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0RhdGF9IGRhdGEgXG4gICAgICogQHBhcmFtIHtDb250ZW50fSBjb250ZW50IFxuICAgICAqIEBwYXJhbSB7UG9wdXB9IHBvcHVwIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChkYXRhLCBjb250ZW50LCBwb3B1cCkge1xuICAgICAgICBzdXBlcihcInNpZGViYXJcIik7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHBvcHVwO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3RvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgYmFycyBmb3IgQnV0dG9uXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoYGJhciR7aX1gKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmFwcGVuZENoaWxkKGJhcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgY29udGVudC50aXRsZSA9IFwiUHJvamVjdHNcIjsgLy8gZGVmYXVsdDtcbiAgICB9XG5cbiAgICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgICBzZXQgZGF0YSAob2JqKSB7IHRoaXMuX2RhdGEgPSBvYmo7IH1cblxuICAgIGdldCBjb250ZW50ICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7IH1cblxuICAgIHNldCBjb250ZW50IChvYmopIHsgdGhpcy5fY29udGVudCA9IG9iajsgfVxuXG4gICAgZ2V0IHBvcHVwICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwOyB9XG5cbiAgICBzZXQgcG9wdXAgKG9iaikgeyB0aGlzLl9wb3B1cCA9IG9iajsgfVxuXG4gICAgZ2V0IGJ1dHRvbiAoKSB7IHJldHVybiB0aGlzLl9idXR0b247IH1cblxuICAgIHNldCBidXR0b24gKGVsZW0pIHsgdGhpcy5fYnV0dG9uID0gZWxlbTsgfVxuXG4gICAgdG9nZ2xlICgpIHtcbiAgICAgICAgLy8gSWYgU2lkZWJhciBpcyBhY3RpdmF0ZWQsIHJlc2V0IFNpZGViYXIgKHRhYmxldCB2aWV3KVxuICAgICAgICBpZiAodGhpcy4jZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuI2V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kXCIpO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBlbmFibGUgU2lkZWJhclxuICAgICAgICBlbHNlIGlmICh0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGFuZ2VcIikpXG4gICAgICAgICAgICB0aGlzLiNleHBhbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgI3RvZ2dsZSAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRcIik7XG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XG4gICAgfVxuXG4gICAgI3N1Ym1pdCAobmFtZSwgY29sb3VyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhLmFkZFByb2plY3QobmFtZSwgY29sb3VyKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgI3BvcHVwICgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIE5ldy1Qcm9qZWN0IEVsZW1lbnQgZm9yIFBvcHVwXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXBvcHVwXCIpO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBOZXctUHJvamVjdCBUaXRsZVxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0aXRsZUxhYmVsLmZvciA9IFwibmV3LXByb2plY3QtdGl0bGVcIjtcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgVGl0bGVcIjtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSBcIm5ldy1wcm9qZWN0LXRpdGxlXCI7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IGFuZCBMYWJlbCBmb3IgTmV3LVByb2plY3QgQ29sb3VyXG4gICAgICAgIGNvbnN0IGNvbG91ckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBjb2xvdXJMYWJlbC5mb3IgPSBcIm5ldy1wcm9qZWN0LWNvbG91clwiO1xuICAgICAgICBjb2xvdXJMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgQ29sb3VyXCI7XG4gICAgICAgIGNvbnN0IGNvbG91cklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjb2xvdXJJbnB1dC50eXBlID0gXCJjb2xvclwiO1xuICAgICAgICBjb2xvdXJJbnB1dC52YWx1ZSA9IGAjJHsoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmICogMTAwMDAwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDAsIDYpfWA7XG4gICAgICAgIGNvbG91cklucHV0LmlkID0gXCJuZXctcHJvamVjdC1jb2xvdXJcIjtcblxuICAgICAgICAvLyBBZGQgU3VibWl0IEJ1dHRvbiBmb3IgTmV3LVByb2plY3RcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1zdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNzdWJtaXQodGl0bGVJbnB1dC52YWx1ZSwgY29sb3VySW5wdXQudmFsdWUpKVxuICAgICAgICAgICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5leGl0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNzdWJtaXQodGl0bGVJbnB1dC52YWx1ZSwgY29sb3VySW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXAuZXhpdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgcHJvamVjdCB0aXRsZSFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBOZXctUHJvamVjdFxuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGNvbG91ckxhYmVsKTtcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChjb2xvdXJJbnB1dCk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgICAgICAvLyBFbnRlciBQb3B1cFxuICAgICAgICB0aGlzLnBvcHVwLmVudGVyKG5ld1Byb2plY3QpO1xuICAgICAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgI3JlbmRlciAoKSB7XG4gICAgICAgIC8vIENsZWFyIENvbnRlbnRcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBBZGQgVGl0bGUgdG8gTWVudVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmNvbnRlbnQudGl0bGUgPSBcIlByb2plY3RzXCI7IH0pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgLy8gQWRkIFByb2plY3QtTGlzdFxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1saXN0XCIpO1xuICAgICAgICB0aGlzLmRhdGEucHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXNlbGVjdFwiKTtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuY29udGVudC50aXRsZSA9IHAubmFtZTsgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb2xvdXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29sb3VyLWNvZGVcIik7XG4gICAgICAgICAgICBjb2xvdXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQtY29sb3I6ICR7cC5jb2xvdXJ9YCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHAubmFtZTtcblxuICAgICAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jcm9zcy1idXR0b25cIik7XG4gICAgICAgICAgICBkZWwudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZGVsZXRlUHJvamVjdChwLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQudGl0bGUgPT09IHAubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnRpdGxlID0gXCJQcm9qZWN0c1wiO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzIHRvIEl0ZW0gJiBJdGVtIHRvIExpc3RcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY29sb3VyKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgQ3JlYXRlIFByb2plY3QgQnV0dG9uXG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3RcIik7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IFwiKyBQcm9qZWN0XCI7XG4gICAgICAgIGNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3BvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBNZW51IENvbnRhaW5lclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlKTtcbiAgICB9XG59OyIsImltcG9ydCBET01FbGVtZW50IGZyb20gXCIuL2RvbS1lbGVtZW50LmpzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL3NlYXJjaC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0b3IgZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICBcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1NlYXJjaH0gc2VhcmNoIFxuICAgICAqIEBwYXJhbSB7TWVudX0gbWVudSBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoc2VhcmNoLCBtZW51KSB7XG4gICAgICAgIHN1cGVyKFwibmF2XCIpO1xuXG4gICAgICAgIC8vIEFkZCBUaXRsZSB3aXRoIFwiTG9nb1wiIHRvIE5hdmlnYXRpb24gUGFuZWxcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIiNUT0RPOlwiXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBUb29sYmFyXG4gICAgICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b29sYmFyLmNsYXNzTGlzdC5hZGQoXCJ0b29sYmFyXCIpO1xuXG4gICAgICAgIC8vIEFkZCBFbGVtZW50cyB0byBUb29sYmFyXG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VhcmNoLmNvbnRhaW5lcik7XG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQobWVudS5idXR0b24pO1xuXG4gICAgICAgIC8vIEFkZCBFbGVtZW50cyB0byBDb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodG9vbGJhcik7XG4gICAgfVxufTsiLCJpbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIERPTUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoXCJwb3B1cFwiKTtcblxuICAgICAgICAvLyBBZGQgT3ZlcmxheSBFbGVtZW50XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmV4aXQoKTsgfSk7XG4gICAgfVxuXG4gICAgZ2V0IG92ZXJsYXkgKCkgeyByZXR1cm4gdGhpcy5fb3ZlcmxheTsgfVxuXG4gICAgc2V0IG92ZXJsYXkgKGVsZW0pIHsgdGhpcy5fb3ZlcmxheSA9IGVsZW07IH1cblxuICAgIGVudGVyIChlbGVtKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLiNyZW5kZXIoZWxlbSk7XG4gICAgfVxuXG4gICAgZXhpdCAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgICNyZW5kZXIgKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBBZGQgRXhpdCBCdXR0b25cbiAgICAgICAgY29uc3QgZXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGV4aXQudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgZXhpdC5jbGFzc0xpc3QuYWRkKFwiZXhpdC1wb3B1cFwiKTtcbiAgICAgICAgZXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5leGl0KCk7IH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmIGUua2V5ID09PSBcIkVzY2FwZVwiKVxuICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBQb3B1cCBDb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZXhpdCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpb3JpdGllcyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gdGhpcy5saXN0WzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuI2J1aWxkKCk7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5ICgpIHsgcmV0dXJuIHRoaXMuX3ByaW9yaXR5OyB9XG5cbiAgICBzZXQgcHJpb3JpdHkgKHZhbHVlKSB7IHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7IH1cblxuICAgIGdldCBsaXN0ICgpIHsgcmV0dXJuIHRoaXMuX2xpc3Q7IH1cblxuICAgIHNldCBsaXN0IChhcnIpIHsgdGhpcy5fbGlzdCA9IGFycjsgfVxuXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfVxuXG4gICAgI3VwZGF0ZUJ1dHRvbnMgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi52YWx1ZSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCBidXR0b246ICR7dGhpcy5wcmlvcml0eX07YCk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgI2FkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlQnV0dG9ucyhidXR0b24udmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNidWlsZCAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWNvbnRhaW5lclwiKTtcbiAgICAgICAgW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXS5mb3JFYWNoKHByaW9yaXR5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBidXR0b24udmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGlmIChwcmlvcml0eSA9PT0gXCJMb3dcIilcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgICAgICBidXR0b24uaWQgPSBgJHtwcmlvcml0eS50b0xvd2VyQ2FzZSgpfS1wcmlvcml0eWA7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzIGZvciBCdXR0b25zXG4gICAgICAgIHRoaXMuI2FkZExpc3RlbmVycygpO1xuICAgIH1cbn07IiwiaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgRE9NRWxlbWVudCB7XG4gICAgI3NlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcInNlYXJjaC1ibG9ja1wiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdsYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIGdsYXNzLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgICAgZ2xhc3MuY2xhc3NMaXN0LmFkZChcImZhLW1hZ25pZnlpbmctZ2xhc3NcIik7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hiYXJcIik7XG5cbiAgICAgICAgLy8gQWRkIEV2ZW50IExpc3RlbmVyc1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LnRvZ2dsZShcInNlYXJjaGluZ1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWFyY2hpbmdcIikpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNlYXJjaGluZyBmb3IgJHt0aGlzLnNlYXJjaGJhci52YWx1ZX07YCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IFNlYXJjaC4uXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmluZFwiKSAmJiBlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGdsYXNzKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2hiYXIpO1xuICAgIH1cblxuICAgIGdldCBzZWFyY2hiYXIgKCkgeyByZXR1cm4gdGhpcy5fc2VhcmNoYmFyOyB9XG5cbiAgICBzZXQgc2VhcmNoYmFyIChlbGVtKSB7IHRoaXMuX3NlYXJjaGJhciA9IGVsZW07IH1cblxuICAgIHRvZ2dsZSAoKSB7XG4gICAgICAgIC8vIElmIFNlYXJjaGJhciBpcyBhY3RpdmF0ZWQsIHJlc2V0IFNlYXJjaGJhclxuICAgICAgICBpZiAodGhpcy4jc2VhcmNoaW5nKSB7XG4gICAgICAgICAgICB0aGlzLiNzZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaGluZ1wiKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vIE90aGVyd2lzZSwgZW5hYmxlIFNlYXJjaGJhclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJmaW5kXCIpKVxuICAgICAgICAgICAgdGhpcy4jc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9UYWJsZSB7XG4gICAgY29uc3RydWN0b3IgKGxpc3QpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICAgICAgdGhpcy50YWJsZS5jbGFzc0xpc3QuYWRkKFwidG8tZG8tdGFibGVcIik7XG4gICAgfVxuXG4gICAgZ2V0IHRhYmxlICgpIHsgcmV0dXJuIHRoaXMuX3RhYmxlOyB9XG5cbiAgICBzZXQgdGFibGUgKGVsZW0pIHsgdGhpcy5fdGFibGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0OyB9XG5cbiAgICBzZXQgbGlzdCAoYXJyKSB7IHRoaXMuX2xpc3QgPSBhcnI7IH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9