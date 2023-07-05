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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/layout.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QiwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RDhDO0FBQ2pCOztBQUVkO0FBQ2Y7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCOztBQUVyQiwwQkFBMEI7O0FBRTFCLG1CQUFtQjs7QUFFbkIsdUJBQXVCOztBQUV2QixrQkFBa0I7O0FBRWxCLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsb0JBQW9CO0FBQzNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NoZWNrYm94LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2N1c3RvbS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9kYXRhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbmF2aWdhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcmlvcml0aWVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvc2VhcmNoLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdG8tZG8tdGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3gge1xuICAgIGNvbnN0cnVjdG9yIChpZCkge1xuICAgICAgICB0aGlzLmNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmlkID0gaWQ7XG4gICAgfVxuXG4gICAgZ2V0IGNoZWNrYm94ICgpIHsgcmV0dXJuIHRoaXMuX2NoZWNrYm94OyB9XG5cbiAgICBzZXQgY2hlY2tib3ggKGVsZW0pIHsgdGhpcy5fY2hlY2tib3ggPSBlbGVtOyB9XG59OyIsImltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC5qc1wiO1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tIFwiLi9jdXN0b20tc2VsZWN0LmpzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwLmpzXCI7XG5pbXBvcnQgUHJpb3JpdGllcyBmcm9tIFwiLi9wcmlvcml0aWVzLmpzXCI7XG5pbXBvcnQgVG9Eb1RhYmxlIGZyb20gXCIuL3RvLWRvLXRhYmxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0RhdGF9IGRhdGEgXG4gICAgICogQHBhcmFtIHtQb3B1cH0gcG9wdXAgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGRhdGEsIHBvcHVwKSB7XG4gICAgICAgIHN1cGVyKFwiY29udGVudFwiKTtcblxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG5cbiAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5fZGF0YTsgfVxuXG4gICAgc2V0IGRhdGEgKGFycikgeyB0aGlzLl9kYXRhID0gYXJyOyB9XG5cbiAgICBnZXQgcG9wdXAgKCkgeyByZXR1cm4gdGhpcy5fcG9wdXA7IH1cblxuICAgIHNldCBwb3B1cCAob2JqKSB7IHRoaXMuX3BvcHVwID0gb2JqOyB9XG5cbiAgICBnZXQgdGl0bGUgKCkgeyByZXR1cm4gdGhpcy5fdGl0bGU7IH1cblxuICAgIHNldCB0aXRsZSAobmFtZSkgeyBcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBuYW1lO1xuICAgICAgICB0aGlzLiNyZW5kZXIoKVxuICAgIH1cblxuICAgICNzdWJtaXQgKG5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZGF0ZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLmRhdGEuYWRkVG9EbyhuYW1lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGRhdGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAjcG9wdXAgKCkge1xuICAgICAgICAvLyBDcmVhdGUgTmV3LVRvLURvIEVsZW1lbnQgZm9yIFBvcHVwXG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdUb0RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwXCIpO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBOZXctVG8tRG8gVGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgdGl0bGVMYWJlbC5mb3IgPSBcIm5ldy10by1kby10aXRsZVwiO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgVG8tRG8gVGl0bGVcIjtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSBcIm5ldy10by1kby10aXRsZVwiO1xuXG4gICAgICAgIC8vIEFkZCBQcmlvcml0eSBFbGVtZW50cyBmb3IgTmV3IFRvLURvXG4gICAgICAgIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBuZXcgUHJpb3JpdGllcygpO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZybyBOZXctVG8tRG8gRGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBkZXNjTGFiZWwuZm9yID0gXCJuZXctdG8tZG8tZGVzY3JpcHRpb25cIjtcbiAgICAgICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaWQgPSBcIm5ldy10by1kby1kZXNjcmlwdGlvblwiO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBQcm9qZWN0IFNlbGVjdGlvblxuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByb2plY3RMYWJlbC5mb3IgPSBcInByb2plY3Qtc2VsZWN0XCI7XG4gICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKHAgPT4geyBvcHRpb25zLnB1c2gocC5uYW1lKTsgfSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBuZXcgQ3VzdG9tU2VsZWN0KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnBvcHVwLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEVuYWJsZXIgZm9yIFByb2plY3QgU2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVuYWJsZXItY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RW5hYmxlID0gbmV3IENoZWNrYm94KFwicHJvamVjdC1lbmFibGVcIik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RW5hYmxlLmNoZWNrYm94KTtcbiAgICAgICAgcHJvamVjdEVuYWJsZS5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RFbmFibGUuY2hlY2tib3guY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LnNldCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgSW5wdXQgd2l0aCBMYWJlbCBmb3IgTmV3LVRvLURvIER1ZS1EYXRlXG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmZvciA9IFwiZHVlLWRhdGVcIjtcbiAgICAgICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBkdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICAgICAgZHVlRGF0ZS5pZCA9IFwiZHVlLWRhdGVcIjtcbiAgICAgICAgZHVlRGF0ZS5taW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gICAgICAgIC8vIEFkZCBFbmFibGVyIGZvciBEdWUgRGF0ZSBTZWxlY3Rpb25cbiAgICAgICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZW5hYmxlci1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVFbmFibGUgPSBuZXcgQ2hlY2tib3goXCJkdWUtZGF0ZS1lbmFibGVcIik7XG4gICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlRW5hYmxlLmNoZWNrYm94KTtcbiAgICAgICAgZHVlRGF0ZUVuYWJsZS5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGR1ZURhdGVFbmFibGUuY2hlY2tib3guY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICBkdWVEYXRlLmRpc2FibGVkID0gIWR1ZURhdGVFbmFibGUuY2hlY2tib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIFN1Ym1pdCBCdXR0b24gZm9yIE5ldy1Uby1Eb1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcInBvcHVwLXN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuI3N1Ym1pdCh0aXRsZUlucHV0LnZhbHVlLCBwcmlvcml0aWVzLnByaW9yaXR5LCBkZXNjcmlwdGlvbi52YWx1ZSwgcHJvamVjdFNlbGVjdC52YWx1ZSwgZHVlRGF0ZS52YWx1ZSkpXG4gICAgICAgICAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmV4aXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzIHRvIE5ldy1Uby1Eb1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHByaW9yaXRpZXMuY29udGFpbmVyKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgbmV3VG9Eby5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0LnNlbGVjdCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgICAgICAvLyBFbnRlciBQb3B1cFxuICAgICAgICB0aGlzLnBvcHVwLmVudGVyKG5ld1RvRG8pO1xuICAgICAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgI3JlbmRlciAoKSB7XG4gICAgICAgIC8vIENsZWFyIENvbnRlbnRcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBBZGQgVGl0bGUgdG8gQ29udGVudFxuICAgICAgICAvLyBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIC8vIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudC10aXRsZVwiKTtcbiAgICAgICAgLy8gY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcblxuICAgICAgICAvLyBBZGQgVG8tRG8gVGFibGVcbiAgICAgICAgY29uc3QgdG9kb3MgPSBuZXcgVG9Eb1RhYmxlKHRoaXMudGl0bGUsIHRoaXMuZGF0YSk7XG5cbiAgICAgICAgLy8gQWRkIENyZWF0ZSBUby1EbyBCdXR0b25cbiAgICAgICAgY29uc3QgY3JlYXRlICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvLWRvXCIpO1xuICAgICAgICBjcmVhdGUudGV4dENvbnRlbnQgPSBcIisgVG8gRG9cIjtcbiAgICAgICAgY3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jcG9wdXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3MudGFibGUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGUpO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgICAjZW5hYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvciAoYXJyKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duXCIpO1xuICAgICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy4jYnVpbGQoYXJyKTtcblxuICAgICAgICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzXG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiNlbmFibGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ICgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdDsgfVxuXG4gICAgc2V0IHNlbGVjdCAoZWxlbSkgeyB0aGlzLl9zZWxlY3QgPSBlbGVtOyB9XG5cbiAgICBnZXQgcGxhY2VIb2xkZXIgKCkgeyByZXR1cm4gdGhpcy5fcGxhY2VIb2xkZXI7IH1cblxuICAgIHNldCBwbGFjZUhvbGRlciAoZWxlbSkgeyB0aGlzLl9wbGFjZUhvbGRlciA9IGVsZW07IH1cblxuICAgIGdldCB2YWx1ZSAoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gICAgc2V0IHZhbHVlICh2YWx1ZSkgeyB0aGlzLl92YWx1ZSA9IHZhbHVlO31cblxuICAgIGdldCBpZCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3QuaWQ7IH1cblxuICAgIHNldCBpZCAoaWRlbnRpZmllcikgeyB0aGlzLl9zZWxlY3QuaWQgPSBpZGVudGlmaWVyOyB9IFxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICB9XG5cbiAgICBzZXQgKCkge1xuICAgICAgICB0aGlzLiNlbmFibGVkID0gIXRoaXMuI2VuYWJsZWQ7XG4gICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlXCIpO1xuICAgIH1cblxuICAgICNidWlsZCAoYXJyKSB7XG4gICAgICAgIC8vIENyZWF0ZSBQbGFjZWhvbGRlciBJbnB1dFxuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgUHJvamVjdFwiO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgICAvLyBDcmVhdGUgT3B0aW9ucyBMaXN0XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm9wdGlvbnNcIik7XG4gICAgICAgIGFyci5mb3JFYWNoKG8gPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvO1xuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEVsZW1lbnRzIHRvIEN1c3RvbSBTZWxlY3RcbiAgICAgICAgdGhpcy5zZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy5wbGFjZUhvbGRlcik7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKVxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSB8fCBcIltdXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gW107XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b2Rvcyk7XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3RzICgpIHsgcmV0dXJuIHRoaXMuX3Byb2plY3RzOyB9XG5cbiAgICBzZXQgcHJvamVjdHMgKGFycikgeyB0aGlzLl9wcm9qZWN0cyA9IGFycjsgfVxuXG4gICAgZ2V0IHRvZG9zICgpIHsgcmV0dXJuIHRoaXMuX3RvZG9zOyB9XG5cbiAgICBzZXQgdG9kb3MgKGFycikgeyB0aGlzLl90b2RvcyA9IGFycjsgfVxuXG4gICAgI2luZGV4T2ZQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9qZWN0c1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdCAobmFtZSwgY29sb3VyKSB7XG4gICAgICAgIGlmICh0aGlzLiNpbmRleE9mUHJvamVjdChuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh7bmFtZTogbmFtZSwgY29sb3VyOiBjb2xvdXJ9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInByb2plY3RzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdCAobmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2luZGV4T2ZQcm9qZWN0KG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbmRleE9mVG9EbyAobmFtZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKSBcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZG9zW2ldLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGFkZFRvRG8gKG5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZGF0ZSkge1xuICAgICAgICBpZiAodGhpcy4jaW5kZXhPZlRvRG8obmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBHZXQgUHJvamVjdCBkaWN0aW9uYXJ5LCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIGNvbnN0IHBJbmRleCA9IHRoaXMuI2luZGV4T2ZQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY29uc3QgcERpY3QgPSB7bmFtZTogcHJvamVjdCwgY29sb3VyOiBcIlwifTtcbiAgICAgICAgICAgIGlmIChwSW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIHBEaWN0LmNvbG91ciA9IHRoaXMucHJvamVjdHNbcEluZGV4XS5jb2xvdXI7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnB1c2goXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLCBcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LCBcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogcERpY3QsIFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInRvZG9zXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlVG9EbyAobmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2luZGV4T2ZUb0RvKG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJ0b2Rvc1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmUgKGtleSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAga2V5ID09PSBcInByb2plY3RzXCIgPyB0aGlzLnByb2plY3RzIDogdGhpcy50b2Rvc1xuICAgICAgICApKTtcbiAgICB9IFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfSBcbn07IiwiaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4vbmF2aWdhdG9yLmpzXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vcG9wdXAuanNcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vc2VhcmNoLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIERPTUVsZW1lbnR7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcImNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy4jYWRkRm9udEF3ZXNvbWUoKTtcblxuICAgICAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IERhdGEoKTtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKCk7XG4gICAgICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbmV3IENvbnRlbnQodGhpcy5kYXRhLCB0aGlzLnBvcHVwKTtcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUodGhpcy5kYXRhLCB0aGlzLmNvbnRlbnQsIHRoaXMucG9wdXApO1xuICAgICAgICB0aGlzLm5hdiA9IG5ldyBOYXZpZ2F0b3IodGhpcy5zZWFyY2gsIHRoaXMubWVudSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lbnUudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZ2V0IG5hdiAoKSB7IHJldHVybiB0aGlzLl9uYXY7IH1cblxuICAgIHNldCBuYXYgKG9iaikgeyB0aGlzLl9uYXYgPSBvYmo7IH1cblxuICAgICNhZGRGb250QXdlc29tZSAoKSB7XG4gICAgICAgIC8vIEFkZCBGb250LUF3ZXNvbWUgU2NyaXB0IHRvIEhlYWRcbiAgICAgICAgY29uc3QgZm9udEF3ZXNvbWVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBmb250QXdlc29tZVNjcmlwdC5zcmMgPSBcImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS85YzExY2U0YTliLmpzXCI7XG4gICAgICAgIGZvbnRBd2Vzb21lU2NyaXB0LmNyb3Nzb3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmb250QXdlc29tZVNjcmlwdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRnVuY3Rpb24gVXNlZCBmb3IgUmVuZGVyIFRvLURvLUxpc3QgUGFnZVxuICAgICAqL1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5uYXYuY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMubWVudS5jb250YWluZXIpO1xuICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50LmNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLm1haW4pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLnBvcHVwLm92ZXJsYXkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLnBvcHVwLmNvbnRhaW5lcik7XG4gICAgfVxufTsiLCJpbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb250ZW50LmpzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICAjZXhwYW5kZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7RGF0YX0gZGF0YSBcbiAgICAgKiBAcGFyYW0ge0NvbnRlbnR9IGNvbnRlbnQgXG4gICAgICogQHBhcmFtIHtQb3B1cH0gcG9wdXAgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGRhdGEsIGNvbnRlbnQsIHBvcHVwKSB7XG4gICAgICAgIHN1cGVyKFwic2lkZWJhclwiKTtcblxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG5cbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1idXR0b25cIik7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jdG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBiYXJzIGZvciBCdXR0b25cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZChgYmFyJHtpfWApO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uYXBwZW5kQ2hpbGQoYmFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgICAgICBjb250ZW50LnRpdGxlID0gXCJQcm9qZWN0c1wiOyAvLyBkZWZhdWx0O1xuICAgIH1cblxuICAgIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMuX2RhdGE7IH1cblxuICAgIHNldCBkYXRhIChvYmopIHsgdGhpcy5fZGF0YSA9IG9iajsgfVxuXG4gICAgZ2V0IGNvbnRlbnQgKCkgeyByZXR1cm4gdGhpcy5fY29udGVudDsgfVxuXG4gICAgc2V0IGNvbnRlbnQgKG9iaikgeyB0aGlzLl9jb250ZW50ID0gb2JqOyB9XG5cbiAgICBnZXQgcG9wdXAgKCkgeyByZXR1cm4gdGhpcy5fcG9wdXA7IH1cblxuICAgIHNldCBwb3B1cCAob2JqKSB7IHRoaXMuX3BvcHVwID0gb2JqOyB9XG5cbiAgICBnZXQgYnV0dG9uICgpIHsgcmV0dXJuIHRoaXMuX2J1dHRvbjsgfVxuXG4gICAgc2V0IGJ1dHRvbiAoZWxlbSkgeyB0aGlzLl9idXR0b24gPSBlbGVtOyB9XG5cbiAgICB0b2dnbGUgKCkge1xuICAgICAgICAvLyBJZiBTaWRlYmFyIGlzIGFjdGl2YXRlZCwgcmVzZXQgU2lkZWJhciAodGFibGV0IHZpZXcpXG4gICAgICAgIGlmICh0aGlzLiNleHBhbmRlZCkge1xuICAgICAgICAgICAgdGhpcy4jZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRcIik7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBPdGhlcndpc2UsIGVuYWJsZSBTaWRlYmFyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImNoYW5nZVwiKSlcbiAgICAgICAgICAgIHRoaXMuI2V4cGFuZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAjdG9nZ2xlICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZFwiKTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcbiAgICB9XG5cbiAgICAjc3VibWl0IChuYW1lLCBjb2xvdXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEuYWRkUHJvamVjdChuYW1lLCBjb2xvdXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAjcG9wdXAgKCkge1xuICAgICAgICAvLyBDcmVhdGUgTmV3LVByb2plY3QgRWxlbWVudCBmb3IgUG9wdXBcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZm9yIE5ldy1Qcm9qZWN0IFRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHRpdGxlTGFiZWwuZm9yID0gXCJuZXctcHJvamVjdC10aXRsZVwiO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBUaXRsZVwiO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGl0bGVJbnB1dC5pZCA9IFwibmV3LXByb2plY3QtdGl0bGVcIjtcblxuICAgICAgICAvLyBBZGQgSW5wdXQgYW5kIExhYmVsIGZvciBOZXctUHJvamVjdCBDb2xvdXJcbiAgICAgICAgY29uc3QgY29sb3VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGNvbG91ckxhYmVsLmZvciA9IFwibmV3LXByb2plY3QtY29sb3VyXCI7XG4gICAgICAgIGNvbG91ckxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBDb2xvdXJcIjtcbiAgICAgICAgY29uc3QgY29sb3VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNvbG91cklucHV0LnR5cGUgPSBcImNvbG9yXCI7XG4gICAgICAgIGNvbG91cklucHV0LnZhbHVlID0gYCMkeyhNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYgKiAxMDAwMDAwKS50b1N0cmluZygxNikuc2xpY2UoMCwgNil9YDtcbiAgICAgICAgY29sb3VySW5wdXQuaWQgPSBcIm5ldy1wcm9qZWN0LWNvbG91clwiO1xuXG4gICAgICAgIC8vIEFkZCBTdWJtaXQgQnV0dG9uIGZvciBOZXctUHJvamVjdFxuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcInBvcHVwLXN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuI3N1Ym1pdCh0aXRsZUlucHV0LnZhbHVlLCBjb2xvdXJJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmV4aXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI3N1Ym1pdCh0aXRsZUlucHV0LnZhbHVlLCBjb2xvdXJJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cC5leGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBwcm9qZWN0IHRpdGxlIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzIHRvIE5ldy1Qcm9qZWN0XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoY29sb3VyTGFiZWwpO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGNvbG91cklucHV0KTtcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgICAgIC8vIEVudGVyIFBvcHVwXG4gICAgICAgIHRoaXMucG9wdXAuZW50ZXIobmV3UHJvamVjdCk7XG4gICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAjcmVuZGVyICgpIHtcbiAgICAgICAgLy8gQ2xlYXIgQ29udGVudFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCBUaXRsZSB0byBNZW51XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLXRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuY29udGVudC50aXRsZSA9IFwiUHJvamVjdHNcIjsgfSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAvLyBBZGQgUHJvamVjdC1MaXN0XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWxpc3RcIik7XG4gICAgICAgIHRoaXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3Qtc2VsZWN0XCIpO1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5jb250ZW50LnRpdGxlID0gcC5uYW1lOyB9KTtcblxuICAgICAgICAgICAgY29uc3QgY29sb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbG91ci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb2xvdXItY29kZVwiKTtcbiAgICAgICAgICAgIGNvbG91ci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1jb2xvcjogJHtwLmNvbG91cn1gKTtcblxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcC5uYW1lO1xuXG4gICAgICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNyb3NzLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbC50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgICAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5kZWxldGVQcm9qZWN0KHAubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudC50aXRsZSA9PT0gcC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQudGl0bGUgPSBcIlByb2plY3RzXCI7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gSXRlbSAmIEl0ZW0gdG8gTGlzdFxuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChjb2xvdXIpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBDcmVhdGUgUHJvamVjdCBCdXR0b25cbiAgICAgICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdFwiKTtcbiAgICAgICAgY3JlYXRlLnRleHRDb250ZW50ID0gXCIrIFByb2plY3RcIjtcbiAgICAgICAgY3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jcG9wdXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzIHRvIE1lbnUgQ29udGFpbmVyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGUpO1xuICAgIH1cbn07IiwiaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vc2VhcmNoLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRvciBleHRlbmRzIERPTUVsZW1lbnQge1xuICAgIFxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7U2VhcmNofSBzZWFyY2ggXG4gICAgICogQHBhcmFtIHtNZW51fSBtZW51IFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChzZWFyY2gsIG1lbnUpIHtcbiAgICAgICAgc3VwZXIoXCJuYXZcIik7XG5cbiAgICAgICAgLy8gQWRkIFRpdGxlIHdpdGggXCJMb2dvXCIgdG8gTmF2aWdhdGlvbiBQYW5lbFxuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9nby50ZXh0Q29udGVudCA9IFwiI1RPRE86XCJcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFRvb2xiYXJcbiAgICAgICAgY29uc3QgdG9vbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvb2xiYXIuY2xhc3NMaXN0LmFkZChcInRvb2xiYXJcIik7XG5cbiAgICAgICAgLy8gQWRkIEVsZW1lbnRzIHRvIFRvb2xiYXJcbiAgICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChzZWFyY2guY29udGFpbmVyKTtcbiAgICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZChtZW51LmJ1dHRvbik7XG5cbiAgICAgICAgLy8gQWRkIEVsZW1lbnRzIHRvIENvbnRhaW5lclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sYmFyKTtcbiAgICB9XG59OyIsImltcG9ydCBET01FbGVtZW50IGZyb20gXCIuL2RvbS1lbGVtZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgRE9NRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcInBvcHVwXCIpO1xuXG4gICAgICAgIC8vIEFkZCBPdmVybGF5IEVsZW1lbnRcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuZXhpdCgpOyB9KTtcbiAgICB9XG5cbiAgICBnZXQgb3ZlcmxheSAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5OyB9XG5cbiAgICBzZXQgb3ZlcmxheSAoZWxlbSkgeyB0aGlzLl9vdmVybGF5ID0gZWxlbTsgfVxuXG4gICAgZW50ZXIgKGVsZW0pIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMuI3JlbmRlcihlbGVtKTtcbiAgICB9XG5cbiAgICBleGl0ICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgI3JlbmRlciAoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCBFeGl0IEJ1dHRvblxuICAgICAgICBjb25zdCBleGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZXhpdC50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgICAgICBleGl0LmNsYXNzTGlzdC5hZGQoXCJleGl0LXBvcHVwXCIpO1xuICAgICAgICBleGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmV4aXQoKTsgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgJiYgZS5rZXkgPT09IFwiRXNjYXBlXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzIHRvIFBvcHVwIENvbnRhaW5lclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChleGl0KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmlvcml0aWVzIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl07XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSB0aGlzLmxpc3RbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy4jYnVpbGQoKTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkgKCkgeyByZXR1cm4gdGhpcy5fcHJpb3JpdHk7IH1cblxuICAgIHNldCBwcmlvcml0eSAodmFsdWUpIHsgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTsgfVxuXG4gICAgZ2V0IGxpc3QgKCkgeyByZXR1cm4gdGhpcy5fbGlzdDsgfVxuXG4gICAgc2V0IGxpc3QgKGFycikgeyB0aGlzLl9saXN0ID0gYXJyOyB9XG5cbiAgICBnZXQgY29udGFpbmVyICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjsgfVxuXG4gICAgc2V0IGNvbnRhaW5lciAoZWxlbSkgeyB0aGlzLl9jb250YWluZXIgPSBlbGVtOyB9XG5cbiAgICAjdXBkYXRlQnV0dG9ucyAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBpZiAoYnV0dG9uLnZhbHVlID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNlbGVjdGVkIGJ1dHRvbjogJHt0aGlzLnByaW9yaXR5fTtgKTtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVCdXR0b25zKGJ1dHRvbi52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgI2J1aWxkICgpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIENvbnRhaW5lciBmb3IgdGhlIEJ1dHRvbnNcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktY29udGFpbmVyXCIpO1xuICAgICAgICBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdLmZvckVhY2gocHJpb3JpdHkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi52YWx1ZSA9IHByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktYnV0dG9uXCIpO1xuICAgICAgICAgICAgaWYgKHByaW9yaXR5ID09PSBcIkxvd1wiKVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9IGAke3ByaW9yaXR5LnRvTG93ZXJDYXNlKCl9LXByaW9yaXR5YDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBFdmVudCBMaXN0ZW5lcnMgZm9yIEJ1dHRvbnNcbiAgICAgICAgdGhpcy4jYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxufTsiLCJpbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICAjc2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFwic2VhcmNoLWJsb2NrXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZ2xhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgZ2xhc3MuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgICBnbGFzcy5jbGFzc0xpc3QuYWRkKFwiZmEtbWFnbmlmeWluZy1nbGFzc1wiKTtcblxuICAgICAgICB0aGlzLnNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LmFkZChcInNlYXJjaGJhclwiKTtcblxuICAgICAgICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImZpbmRcIik7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QudG9nZ2xlKFwic2VhcmNoaW5nXCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC5jb250YWlucyhcInNlYXJjaGluZ1wiKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlYXJjaGJhci5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU2VhcmNoaW5nIGZvciAke3RoaXMuc2VhcmNoYmFyLnZhbHVlfTtgKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgU2VhcmNoLi5cbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJmaW5kXCIpICYmIGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZ2xhc3MpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNlYXJjaGJhcik7XG4gICAgfVxuXG4gICAgZ2V0IHNlYXJjaGJhciAoKSB7IHJldHVybiB0aGlzLl9zZWFyY2hiYXI7IH1cblxuICAgIHNldCBzZWFyY2hiYXIgKGVsZW0pIHsgdGhpcy5fc2VhcmNoYmFyID0gZWxlbTsgfVxuXG4gICAgdG9nZ2xlICgpIHtcbiAgICAgICAgLy8gSWYgU2VhcmNoYmFyIGlzIGFjdGl2YXRlZCwgcmVzZXQgU2VhcmNoYmFyXG4gICAgICAgIGlmICh0aGlzLiNzZWFyY2hpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImZpbmRcIik7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoaW5nXCIpO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBlbmFibGUgU2VhcmNoYmFyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImZpbmRcIikpXG4gICAgICAgICAgICB0aGlzLiNzZWFyY2hpbmcgPSB0cnVlO1xuICAgIH1cbn07IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9UYWJsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb2plY3QgXG4gICAgICogQHBhcmFtIHtEYXRhfSBkYXRhIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChwcm9qZWN0LCBkYXRhKSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgICAgIHRoaXMudGFibGUuY2xhc3NMaXN0LmFkZChcInRvLWRvLXRhYmxlXCIpO1xuXG4gICAgICAgIHRoaXMuI2J1aWxkKCk7XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3QgKCkgeyByZXR1cm4gdGhpcy5fcHJvamVjdDsgfVxuXG4gICAgc2V0IHByb2plY3QgKHZhbHVlKSB7IHRoaXMuX3Byb2plY3QgPSB2YWx1ZTsgfVxuXG4gICAgZ2V0IHRhYmxlICgpIHsgcmV0dXJuIHRoaXMuX3RhYmxlOyB9XG5cbiAgICBzZXQgdGFibGUgKGVsZW0pIHsgdGhpcy5fdGFibGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgICBzZXQgZGF0YSAob2JqKSB7IHRoaXMuX2RhdGEgPSBvYmo7IH1cblxuICAgICNidWlsZCAoKSB7XG4gICAgICAgIC8vIEFkZCBIZWFkZXIgRWxlbWVudCB0byBUby1EbyBUYWJsZVxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgICAgIGNvbnN0IHRvcFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIHRpdGxlLmNvbFNwYW4gPSAyOyAgLy8gVE9ETzogVXBkYXRlIHRvIGluY2x1ZGUgY2hlY2tib3hcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3Q7XG4gICAgICAgIGNvbnN0IGRhdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGRhdGVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtaGVhZGVyXCIpO1xuICAgICAgICBkYXRlSGVhZGVyLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gICAgICAgIHRvcFJvdy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRvcFJvdy5hcHBlbmRDaGlsZChkYXRlSGVhZGVyKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRvcFJvdyk7XG5cbiAgICAgICAgdGhpcy50YWJsZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIC8vIEFkZCBCb2R5IEVsZW1lbnQgdG8gVG8tRG8gVGFibGVcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcblxuICAgICAgICB0aGlzLmRhdGEudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIC8vIEFkZCBSb3cgRWxlbWVudCB0byBCb2R5XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IEFkZCBDaGVja2JveCBmb3IgQ29tcGxldGlvbiBvZiBUYXNrXG5cbiAgICAgICAgICAgIC8vIEFkZCBQcm9qZWN0IENlbGwgdG8gUm93XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgLy8gRGVmYXVsdCBQcm9qZWN0cyBDYW4gYmUgbGVmdCBCbGFuayB3aXRoIERlZmF1bHQgQ29sb3VyXG4gICAgICAgICAgICBpZiAodG9kby5wcm9qZWN0LmNvbG91ciAhPT0gXCJcIilcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q2VsbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1jb2xvcjogJHt0b2RvLnByb2plY3QuY29sb3VyfWApO1xuICAgICAgICAgICAgcHJvamVjdENlbGwudGV4dENvbnRlbnQgPSB0b2RvLnByb2plY3QubmFtZTtcblxuICAgICAgICAgICAgLy8gQWRkIFRvLURvIE5hbWUgdG8gUm93XG4gICAgICAgICAgICBjb25zdCBuYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIG5hbWVDZWxsLnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuXG4gICAgICAgICAgICAvLyBBZGQgRHVlLURhdGUgdG8gUm93XG4gICAgICAgICAgICBjb25zdCBkYXRlQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGRhdGVDZWxsLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgQ2VsbHMgdG8gUm93XG4gICAgICAgICAgICAvLyBUT0RPOiBBcHBlbmQgQ2hlY2tib3ggdG8gUm93XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQocHJvamVjdENlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChkYXRlQ2VsbCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBSb3cgdG8gQm9keVxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhYmxlLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9