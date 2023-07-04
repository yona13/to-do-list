"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["layout"],{

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

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ "./src/js/content.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");
/* harmony import */ var _dom_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-element.js */ "./src/js/dom-element.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _navigator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigator.js */ "./src/js/navigator.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.js */ "./src/js/search.js");








class Layout extends _dom_element_js__WEBPACK_IMPORTED_MODULE_2__["default"]{
    constructor () {
        super("container");
        this.#addFontAwesome();

        this.main = document.createElement("div");
        this.main.classList.add("main");

        this.data = new _data_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.search = new _search_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.popup = new _popup_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.content = new _content_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.data, this.popup);
        this.menu = new _menu_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.data, this.content, this.popup);
        this.nav = new _navigator_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.search, this.menu);

        this.container.addEventListener("click", (e) => {
            this.menu.toggle();
            this.search.toggle();
        });

        document.body.appendChild(this.container);
    }

    get nav () { return this._nav; }

    set nav (obj) { this._nav = obj; }

    #addFontAwesome () {
        // Add Font-Awesome Script to Head
        const fontAwesomeScript = document.createElement("script");
        fontAwesomeScript.src = "https://kit.fontawesome.com/9c11ce4a9b.js";
        fontAwesomeScript.crossorigin = "anonymous";
        document.head.appendChild(fontAwesomeScript);
    }

    /**
     * Render Function
     * 
     * Function Used for Render To-Do-List Page
     */
    render () {
        this.container.innerHTML = "";

        this.container.appendChild(this.nav.container);
        this.main.appendChild(this.menu.container);
        this.main.appendChild(this.content.container);
        this.container.append(this.main);
        document.body.append(this.popup.overlay);
        document.body.append(this.popup.container);
    }
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/layout.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QiwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdEZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1COztBQUVuQix1QkFBdUI7O0FBRXZCLGtCQUFrQjs7QUFFbEIscUJBQXFCO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jdXN0b20tc2VsZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2RvbS1lbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbGF5b3V0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL25hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3BvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvcHJpb3JpdGllcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3RvLWRvLXRhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IHtcbiAgICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgICAgIHRoaXMuY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICAgIHRoaXMuY2hlY2tib3gudHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgdGhpcy5jaGVja2JveC5pZCA9IGlkO1xuICAgIH1cblxuICAgIGdldCBjaGVja2JveCAoKSB7IHJldHVybiB0aGlzLl9jaGVja2JveDsgfVxuXG4gICAgc2V0IGNoZWNrYm94IChlbGVtKSB7IHRoaXMuX2NoZWNrYm94ID0gZWxlbTsgfVxufTsiLCJpbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3guanNcIjtcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSBcIi4vY3VzdG9tLXNlbGVjdC5qc1wiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9wb3B1cC5qc1wiO1xuaW1wb3J0IFByaW9yaXRpZXMgZnJvbSBcIi4vcHJpb3JpdGllcy5qc1wiO1xuaW1wb3J0IFRvRG9UYWJsZSBmcm9tIFwiLi90by1kby10YWJsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgRE9NRWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtEYXRhfSBkYXRhIFxuICAgICAqIEBwYXJhbSB7UG9wdXB9IHBvcHVwIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChkYXRhLCBwb3B1cCkge1xuICAgICAgICBzdXBlcihcImNvbnRlbnRcIik7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHBvcHVwO1xuXG4gICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgIH1cblxuICAgIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMuX2RhdGE7IH1cblxuICAgIHNldCBkYXRhIChhcnIpIHsgdGhpcy5fZGF0YSA9IGFycjsgfVxuXG4gICAgZ2V0IHBvcHVwICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwOyB9XG5cbiAgICBzZXQgcG9wdXAgKG9iaikgeyB0aGlzLl9wb3B1cCA9IG9iajsgfVxuXG4gICAgZ2V0IHRpdGxlICgpIHsgcmV0dXJuIHRoaXMuX3RpdGxlOyB9XG5cbiAgICBzZXQgdGl0bGUgKG5hbWUpIHsgXG4gICAgICAgIHRoaXMuX3RpdGxlID0gbmFtZTtcbiAgICAgICAgdGhpcy4jcmVuZGVyKClcbiAgICB9XG5cbiAgICAjc3VibWl0IChuYW1lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGRhdGUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kYXRhLmFkZFRvRG8obmFtZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkYXRlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgI3BvcHVwICgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIE5ldy1Uby1EbyBFbGVtZW50IGZvciBQb3B1cFxuICAgICAgICBjb25zdCBuZXdUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3VG9Eby5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3B1cFwiKTtcblxuICAgICAgICAvLyBBZGQgSW5wdXQgd2l0aCBMYWJlbCBmb3IgTmV3LVRvLURvIFRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHRpdGxlTGFiZWwuZm9yID0gXCJuZXctdG8tZG8tdGl0bGVcIjtcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFRvLURvIFRpdGxlXCI7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB0aXRsZUlucHV0LmlkID0gXCJuZXctdG8tZG8tdGl0bGVcIjtcblxuICAgICAgICAvLyBBZGQgUHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IG5ldyBQcmlvcml0aWVzKCk7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZnJvIE5ldy1Uby1EbyBEZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGRlc2NMYWJlbC5mb3IgPSBcIm5ldy10by1kby1kZXNjcmlwdGlvblwiO1xuICAgICAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pZCA9IFwibmV3LXRvLWRvLWRlc2NyaXB0aW9uXCI7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZm9yIFByb2plY3QgU2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcHJvamVjdExhYmVsLmZvciA9IFwicHJvamVjdC1zZWxlY3RcIjtcbiAgICAgICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhLnByb2plY3RzLmZvckVhY2gocCA9PiB7IG9wdGlvbnMucHVzaChwLm5hbWUpOyB9KTtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IG5ldyBDdXN0b21TZWxlY3Qob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucG9wdXAuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5jbG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgRW5hYmxlciBmb3IgUHJvamVjdCBTZWxlY3Rpb25cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZW5hYmxlci1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RFbmFibGUgPSBuZXcgQ2hlY2tib3goXCJwcm9qZWN0LWVuYWJsZVwiKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbmFibGUuY2hlY2tib3gpO1xuICAgICAgICBwcm9qZWN0RW5hYmxlLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEVuYWJsZS5jaGVja2JveC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Quc2V0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBOZXctVG8tRG8gRHVlLURhdGVcbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBkdWVEYXRlTGFiZWwuZm9yID0gXCJkdWUtZGF0ZVwiO1xuICAgICAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGR1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgICBkdWVEYXRlLmlkID0gXCJkdWUtZGF0ZVwiO1xuICAgICAgICBkdWVEYXRlLm1pbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cbiAgICAgICAgLy8gQWRkIEVuYWJsZXIgZm9yIER1ZSBEYXRlIFNlbGVjdGlvblxuICAgICAgICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1lbmFibGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUVuYWJsZSA9IG5ldyBDaGVja2JveChcImR1ZS1kYXRlLWVuYWJsZVwiKTtcbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVFbmFibGUuY2hlY2tib3gpO1xuICAgICAgICBkdWVEYXRlRW5hYmxlLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZHVlRGF0ZUVuYWJsZS5jaGVja2JveC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIGR1ZURhdGUuZGlzYWJsZWQgPSAhZHVlRGF0ZUVuYWJsZS5jaGVja2JveC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2VkXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgU3VibWl0IEJ1dHRvbiBmb3IgTmV3LVRvLURvXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtc3VibWl0XCIpO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4jc3VibWl0KHRpdGxlSW5wdXQudmFsdWUsIHByaW9yaXRpZXMucHJpb3JpdHksIGRlc2NyaXB0aW9uLnZhbHVlLCBwcm9qZWN0U2VsZWN0LnZhbHVlLCBkdWVEYXRlLnZhbHVlKSlcbiAgICAgICAgICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXAuZXhpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gTmV3LVRvLURvXG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQocHJpb3JpdGllcy5jb250YWluZXIpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Quc2VsZWN0KTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgICAgIC8vIEVudGVyIFBvcHVwXG4gICAgICAgIHRoaXMucG9wdXAuZW50ZXIobmV3VG9Ebyk7XG4gICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAjcmVuZGVyICgpIHtcbiAgICAgICAgLy8gQ2xlYXIgQ29udGVudFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCBUaXRsZSB0byBDb250ZW50XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgY29udGVudFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXRpdGxlXCIpO1xuICAgICAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuXG4gICAgICAgIC8vIEFkZCBUby1EbyBUYWJsZVxuICAgICAgICBjb25zdCB0b2RvcyA9IG5ldyBUb0RvVGFibGUodGhpcy5kYXRhLnRvZG9zKTtcblxuICAgICAgICAvLyBBZGQgQ3JlYXRlIFRvLURvIEJ1dHRvblxuICAgICAgICBjb25zdCBjcmVhdGUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG8tZG9cIik7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IFwiKyBUbyBEb1wiO1xuICAgICAgICBjcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNwb3B1cCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Rvcy50YWJsZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZSk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21TZWxlY3Qge1xuICAgICNlbmFibGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yIChhcnIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25cIik7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLiNidWlsZChhcnIpO1xuXG4gICAgICAgIC8vIEFkZCBFdmVudCBMaXN0ZW5lcnNcbiAgICAgICAgdGhpcy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuI2VuYWJsZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3QgKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0OyB9XG5cbiAgICBzZXQgc2VsZWN0IChlbGVtKSB7IHRoaXMuX3NlbGVjdCA9IGVsZW07IH1cblxuICAgIGdldCBwbGFjZUhvbGRlciAoKSB7IHJldHVybiB0aGlzLl9wbGFjZUhvbGRlcjsgfVxuXG4gICAgc2V0IHBsYWNlSG9sZGVyIChlbGVtKSB7IHRoaXMuX3BsYWNlSG9sZGVyID0gZWxlbTsgfVxuXG4gICAgZ2V0IHZhbHVlICgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgICBzZXQgdmFsdWUgKHZhbHVlKSB7IHRoaXMuX3ZhbHVlID0gdmFsdWU7fVxuXG4gICAgZ2V0IGlkICgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdC5pZDsgfVxuXG4gICAgc2V0IGlkIChpZGVudGlmaWVyKSB7IHRoaXMuX3NlbGVjdC5pZCA9IGlkZW50aWZpZXI7IH0gXG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgIH1cblxuICAgIHNldCAoKSB7XG4gICAgICAgIHRoaXMuI2VuYWJsZWQgPSAhdGhpcy4jZW5hYmxlZDtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcImRpc2FibGVcIik7XG4gICAgfVxuXG4gICAgI2J1aWxkIChhcnIpIHtcbiAgICAgICAgLy8gQ3JlYXRlIFBsYWNlaG9sZGVyIElucHV0XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBQcm9qZWN0XCI7XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIucmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgICAgIC8vIENyZWF0ZSBPcHRpb25zIExpc3RcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwib3B0aW9uc1wiKTtcbiAgICAgICAgYXJyLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG87XG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgRWxlbWVudHMgdG8gQ3VzdG9tIFNlbGVjdFxuICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlSG9sZGVyKTtcbiAgICAgICAgdGhpcy5zZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSB8fCBcIltdXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpXG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpIHx8IFwiW11cIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBbXTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZG9zKTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdHMgKCkgeyByZXR1cm4gdGhpcy5fcHJvamVjdHM7IH1cblxuICAgIHNldCBwcm9qZWN0cyAoYXJyKSB7IHRoaXMuX3Byb2plY3RzID0gYXJyOyB9XG5cbiAgICBnZXQgdG9kb3MgKCkgeyByZXR1cm4gdGhpcy5fdG9kb3M7IH1cblxuICAgIHNldCB0b2RvcyAoYXJyKSB7IHRoaXMuX3RvZG9zID0gYXJyOyB9XG5cbiAgICAjaW5kZXhPZlByb2plY3QgKG5hbWUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0IChuYW1lLCBjb2xvdXIpIHtcbiAgICAgICAgaWYgKHRoaXMuI2luZGV4T2ZQcm9qZWN0KG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHtuYW1lOiBuYW1lLCBjb2xvdXI6IGNvbG91cn0pO1xuICAgICAgICAgICAgdGhpcy5zYXZlKFwicHJvamVjdHNcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jaW5kZXhPZlByb2plY3QobmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInByb2plY3RzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2luZGV4T2ZUb0RvIChuYW1lKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudG9kb3MubGVuZ3RoOyBpKyspIFxuICAgICAgICAgICAgaWYgKHRoaXMudG9kb3NbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgYWRkVG9EbyAobmFtZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLiNpbmRleE9mVG9EbyhuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEdldCBQcm9qZWN0IGRpY3Rpb25hcnksIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgY29uc3QgcEluZGV4ID0gdGhpcy4jaW5kZXhPZlByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBjb25zdCBwRGljdCA9IHtuYW1lOiBwcm9qZWN0LCBjb2xvdXI6IFwiXCJ9O1xuICAgICAgICAgICAgaWYgKHBJbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgcERpY3QuY29sb3VyID0gdGhpcy5wcm9qZWN0c1twSW5kZXhdLmNvbG91cjtcbiAgICAgICAgICAgIHRoaXMudG9kb3MucHVzaCh7bmFtZTogbmFtZSwgcHJpb3JpdHk6IHByaW9yaXR5LCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIHByb2plY3Q6IHBEaWN0LCBkYXRlOiBkYXRlfSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJ0b2Rvc1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVRvRG8gKG5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNpbmRleE9mVG9EbyhuYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5zYXZlKFwidG9kb3NcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlIChrZXkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIGtleSA9PT0gXCJwcm9qZWN0c1wiID8gdGhpcy5wcm9qZWN0cyA6IHRoaXMudG9kb3NcbiAgICAgICAgKSk7XG4gICAgfSBcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgIH1cblxuICAgIGdldCBjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udGFpbmVyOyB9XG5cbiAgICBzZXQgY29udGFpbmVyIChlbGVtKSB7IHRoaXMuX2NvbnRhaW5lciA9IGVsZW07IH0gXG59OyIsImltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbnRlbnQuanNcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCBET01FbGVtZW50IGZyb20gXCIuL2RvbS1lbGVtZW50LmpzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgTmF2aWdhdG9yIGZyb20gXCIuL25hdmlnYXRvci5qc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwLmpzXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL3NlYXJjaC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBET01FbGVtZW50e1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoXCJjb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuI2FkZEZvbnRBd2Vzb21lKCk7XG5cbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBEYXRhKCk7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCgpO1xuICAgICAgICB0aGlzLnBvcHVwID0gbmV3IFBvcHVwKCk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IG5ldyBDb250ZW50KHRoaXMuZGF0YSwgdGhpcy5wb3B1cCk7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KHRoaXMuZGF0YSwgdGhpcy5jb250ZW50LCB0aGlzLnBvcHVwKTtcbiAgICAgICAgdGhpcy5uYXYgPSBuZXcgTmF2aWdhdG9yKHRoaXMuc2VhcmNoLCB0aGlzLm1lbnUpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZW51LnRvZ2dsZSgpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIGdldCBuYXYgKCkgeyByZXR1cm4gdGhpcy5fbmF2OyB9XG5cbiAgICBzZXQgbmF2IChvYmopIHsgdGhpcy5fbmF2ID0gb2JqOyB9XG5cbiAgICAjYWRkRm9udEF3ZXNvbWUgKCkge1xuICAgICAgICAvLyBBZGQgRm9udC1Bd2Vzb21lIFNjcmlwdCB0byBIZWFkXG4gICAgICAgIGNvbnN0IGZvbnRBd2Vzb21lU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgZm9udEF3ZXNvbWVTY3JpcHQuc3JjID0gXCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vOWMxMWNlNGE5Yi5qc1wiO1xuICAgICAgICBmb250QXdlc29tZVNjcmlwdC5jcm9zc29yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZm9udEF3ZXNvbWVTY3JpcHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEZ1bmN0aW9uIFVzZWQgZm9yIFJlbmRlciBUby1Eby1MaXN0IFBhZ2VcbiAgICAgKi9cbiAgICByZW5kZXIgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubmF2LmNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLm1lbnUuY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuY29udGVudC5jb250YWluZXIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5tYWluKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5wb3B1cC5vdmVybGF5KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5wb3B1cC5jb250YWluZXIpO1xuICAgIH1cbn07IiwiaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9wb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgRE9NRWxlbWVudCB7XG4gICAgI2V4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0RhdGF9IGRhdGEgXG4gICAgICogQHBhcmFtIHtDb250ZW50fSBjb250ZW50IFxuICAgICAqIEBwYXJhbSB7UG9wdXB9IHBvcHVwIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChkYXRhLCBjb250ZW50LCBwb3B1cCkge1xuICAgICAgICBzdXBlcihcInNpZGViYXJcIik7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHBvcHVwO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3RvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgYmFycyBmb3IgQnV0dG9uXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoYGJhciR7aX1gKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmFwcGVuZENoaWxkKGJhcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgY29udGVudC50aXRsZSA9IFwiUHJvamVjdHNcIjsgLy8gZGVmYXVsdDtcbiAgICB9XG5cbiAgICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgICBzZXQgZGF0YSAob2JqKSB7IHRoaXMuX2RhdGEgPSBvYmo7IH1cblxuICAgIGdldCBjb250ZW50ICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7IH1cblxuICAgIHNldCBjb250ZW50IChvYmopIHsgdGhpcy5fY29udGVudCA9IG9iajsgfVxuXG4gICAgZ2V0IHBvcHVwICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwOyB9XG5cbiAgICBzZXQgcG9wdXAgKG9iaikgeyB0aGlzLl9wb3B1cCA9IG9iajsgfVxuXG4gICAgZ2V0IGJ1dHRvbiAoKSB7IHJldHVybiB0aGlzLl9idXR0b247IH1cblxuICAgIHNldCBidXR0b24gKGVsZW0pIHsgdGhpcy5fYnV0dG9uID0gZWxlbTsgfVxuXG4gICAgdG9nZ2xlICgpIHtcbiAgICAgICAgLy8gSWYgU2lkZWJhciBpcyBhY3RpdmF0ZWQsIHJlc2V0IFNpZGViYXIgKHRhYmxldCB2aWV3KVxuICAgICAgICBpZiAodGhpcy4jZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuI2V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kXCIpO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBlbmFibGUgU2lkZWJhclxuICAgICAgICBlbHNlIGlmICh0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGFuZ2VcIikpXG4gICAgICAgICAgICB0aGlzLiNleHBhbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgI3RvZ2dsZSAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRcIik7XG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XG4gICAgfVxuXG4gICAgI3N1Ym1pdCAobmFtZSwgY29sb3VyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhLmFkZFByb2plY3QobmFtZSwgY29sb3VyKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgI3BvcHVwICgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIE5ldy1Qcm9qZWN0IEVsZW1lbnQgZm9yIFBvcHVwXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXBvcHVwXCIpO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBOZXctUHJvamVjdCBUaXRsZVxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0aXRsZUxhYmVsLmZvciA9IFwibmV3LXByb2plY3QtdGl0bGVcIjtcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgVGl0bGVcIjtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSBcIm5ldy1wcm9qZWN0LXRpdGxlXCI7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IGFuZCBMYWJlbCBmb3IgTmV3LVByb2plY3QgQ29sb3VyXG4gICAgICAgIGNvbnN0IGNvbG91ckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBjb2xvdXJMYWJlbC5mb3IgPSBcIm5ldy1wcm9qZWN0LWNvbG91clwiO1xuICAgICAgICBjb2xvdXJMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgQ29sb3VyXCI7XG4gICAgICAgIGNvbnN0IGNvbG91cklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjb2xvdXJJbnB1dC50eXBlID0gXCJjb2xvclwiO1xuICAgICAgICBjb2xvdXJJbnB1dC52YWx1ZSA9IGAjJHsoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmICogMTAwMDAwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDAsIDYpfWA7XG4gICAgICAgIGNvbG91cklucHV0LmlkID0gXCJuZXctcHJvamVjdC1jb2xvdXJcIjtcblxuICAgICAgICAvLyBBZGQgU3VibWl0IEJ1dHRvbiBmb3IgTmV3LVByb2plY3RcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1zdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNzdWJtaXQodGl0bGVJbnB1dC52YWx1ZSwgY29sb3VySW5wdXQudmFsdWUpKVxuICAgICAgICAgICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5leGl0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNzdWJtaXQodGl0bGVJbnB1dC52YWx1ZSwgY29sb3VySW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXAuZXhpdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgcHJvamVjdCB0aXRsZSFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBOZXctUHJvamVjdFxuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGNvbG91ckxhYmVsKTtcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChjb2xvdXJJbnB1dCk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgICAgICAvLyBFbnRlciBQb3B1cFxuICAgICAgICB0aGlzLnBvcHVwLmVudGVyKG5ld1Byb2plY3QpO1xuICAgICAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgI3JlbmRlciAoKSB7XG4gICAgICAgIC8vIENsZWFyIENvbnRlbnRcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBBZGQgVGl0bGUgdG8gTWVudVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmNvbnRlbnQudGl0bGUgPSBcIlByb2plY3RzXCI7IH0pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgLy8gQWRkIFByb2plY3QtTGlzdFxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1saXN0XCIpO1xuICAgICAgICB0aGlzLmRhdGEucHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXNlbGVjdFwiKTtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuY29udGVudC50aXRsZSA9IHAubmFtZTsgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb2xvdXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29sb3VyLWNvZGVcIik7XG4gICAgICAgICAgICBjb2xvdXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQtY29sb3I6ICR7cC5jb2xvdXJ9YCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHAubmFtZTtcblxuICAgICAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jcm9zcy1idXR0b25cIik7XG4gICAgICAgICAgICBkZWwudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZGVsZXRlUHJvamVjdChwLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQudGl0bGUgPT09IHAubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnRpdGxlID0gXCJQcm9qZWN0c1wiO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzIHRvIEl0ZW0gJiBJdGVtIHRvIExpc3RcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY29sb3VyKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgQ3JlYXRlIFByb2plY3QgQnV0dG9uXG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3RcIik7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IFwiKyBQcm9qZWN0XCI7XG4gICAgICAgIGNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3BvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBNZW51IENvbnRhaW5lclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlKTtcbiAgICB9XG59OyIsImltcG9ydCBET01FbGVtZW50IGZyb20gXCIuL2RvbS1lbGVtZW50LmpzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL3NlYXJjaC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0b3IgZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICBcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1NlYXJjaH0gc2VhcmNoIFxuICAgICAqIEBwYXJhbSB7TWVudX0gbWVudSBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoc2VhcmNoLCBtZW51KSB7XG4gICAgICAgIHN1cGVyKFwibmF2XCIpO1xuXG4gICAgICAgIC8vIEFkZCBUaXRsZSB3aXRoIFwiTG9nb1wiIHRvIE5hdmlnYXRpb24gUGFuZWxcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIiNUT0RPOlwiXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBUb29sYmFyXG4gICAgICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b29sYmFyLmNsYXNzTGlzdC5hZGQoXCJ0b29sYmFyXCIpO1xuXG4gICAgICAgIC8vIEFkZCBFbGVtZW50cyB0byBUb29sYmFyXG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VhcmNoLmNvbnRhaW5lcik7XG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQobWVudS5idXR0b24pO1xuXG4gICAgICAgIC8vIEFkZCBFbGVtZW50cyB0byBDb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodG9vbGJhcik7XG4gICAgfVxufTsiLCJpbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIERPTUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoXCJwb3B1cFwiKTtcblxuICAgICAgICAvLyBBZGQgT3ZlcmxheSBFbGVtZW50XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmV4aXQoKTsgfSk7XG4gICAgfVxuXG4gICAgZ2V0IG92ZXJsYXkgKCkgeyByZXR1cm4gdGhpcy5fb3ZlcmxheTsgfVxuXG4gICAgc2V0IG92ZXJsYXkgKGVsZW0pIHsgdGhpcy5fb3ZlcmxheSA9IGVsZW07IH1cblxuICAgIGVudGVyIChlbGVtKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLiNyZW5kZXIoZWxlbSk7XG4gICAgfVxuXG4gICAgZXhpdCAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgICNyZW5kZXIgKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBBZGQgRXhpdCBCdXR0b25cbiAgICAgICAgY29uc3QgZXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGV4aXQudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgZXhpdC5jbGFzc0xpc3QuYWRkKFwiZXhpdC1wb3B1cFwiKTtcbiAgICAgICAgZXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5leGl0KCk7IH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmIGUua2V5ID09PSBcIkVzY2FwZVwiKVxuICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBQb3B1cCBDb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZXhpdCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpb3JpdGllcyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gdGhpcy5saXN0WzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuI2J1aWxkKCk7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5ICgpIHsgcmV0dXJuIHRoaXMuX3ByaW9yaXR5OyB9XG5cbiAgICBzZXQgcHJpb3JpdHkgKHZhbHVlKSB7IHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7IH1cblxuICAgIGdldCBsaXN0ICgpIHsgcmV0dXJuIHRoaXMuX2xpc3Q7IH1cblxuICAgIHNldCBsaXN0IChhcnIpIHsgdGhpcy5fbGlzdCA9IGFycjsgfVxuXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfVxuXG4gICAgI3VwZGF0ZUJ1dHRvbnMgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi52YWx1ZSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCBidXR0b246ICR7dGhpcy5wcmlvcml0eX07YCk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgI2FkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlQnV0dG9ucyhidXR0b24udmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNidWlsZCAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWNvbnRhaW5lclwiKTtcbiAgICAgICAgW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXS5mb3JFYWNoKHByaW9yaXR5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBidXR0b24udmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGlmIChwcmlvcml0eSA9PT0gXCJMb3dcIilcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgICAgICBidXR0b24uaWQgPSBgJHtwcmlvcml0eS50b0xvd2VyQ2FzZSgpfS1wcmlvcml0eWA7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzIGZvciBCdXR0b25zXG4gICAgICAgIHRoaXMuI2FkZExpc3RlbmVycygpO1xuICAgIH1cbn07IiwiaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgRE9NRWxlbWVudCB7XG4gICAgI3NlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcInNlYXJjaC1ibG9ja1wiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdsYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIGdsYXNzLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgICAgZ2xhc3MuY2xhc3NMaXN0LmFkZChcImZhLW1hZ25pZnlpbmctZ2xhc3NcIik7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hiYXJcIik7XG5cbiAgICAgICAgLy8gQWRkIEV2ZW50IExpc3RlbmVyc1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LnRvZ2dsZShcInNlYXJjaGluZ1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWFyY2hpbmdcIikpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNlYXJjaGluZyBmb3IgJHt0aGlzLnNlYXJjaGJhci52YWx1ZX07YCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IFNlYXJjaC4uXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmluZFwiKSAmJiBlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGdsYXNzKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2hiYXIpO1xuICAgIH1cblxuICAgIGdldCBzZWFyY2hiYXIgKCkgeyByZXR1cm4gdGhpcy5fc2VhcmNoYmFyOyB9XG5cbiAgICBzZXQgc2VhcmNoYmFyIChlbGVtKSB7IHRoaXMuX3NlYXJjaGJhciA9IGVsZW07IH1cblxuICAgIHRvZ2dsZSAoKSB7XG4gICAgICAgIC8vIElmIFNlYXJjaGJhciBpcyBhY3RpdmF0ZWQsIHJlc2V0IFNlYXJjaGJhclxuICAgICAgICBpZiAodGhpcy4jc2VhcmNoaW5nKSB7XG4gICAgICAgICAgICB0aGlzLiNzZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaGluZ1wiKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vIE90aGVyd2lzZSwgZW5hYmxlIFNlYXJjaGJhclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJmaW5kXCIpKVxuICAgICAgICAgICAgdGhpcy4jc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9UYWJsZSB7XG4gICAgY29uc3RydWN0b3IgKGxpc3QpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICAgICAgdGhpcy50YWJsZS5jbGFzc0xpc3QuYWRkKFwidG8tZG8tdGFibGVcIik7XG4gICAgfVxuXG4gICAgZ2V0IHRhYmxlICgpIHsgcmV0dXJuIHRoaXMuX3RhYmxlOyB9XG5cbiAgICBzZXQgdGFibGUgKGVsZW0pIHsgdGhpcy5fdGFibGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0OyB9XG5cbiAgICBzZXQgbGlzdCAoYXJyKSB7IHRoaXMuX2xpc3QgPSBhcnI7IH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9