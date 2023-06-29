"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["layout"],{

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

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/js/projects.js");
/* harmony import */ var _to_do_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do-list.js */ "./src/js/to-do-list.js");




class Layout {
    /** Private Variables in Layout */
    #searching = false;
    #expanded = false;
    #popup = new _popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    #todos = new _to_do_list_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.#popup);
    #projects = new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.#popup, this.#todos);

    /**
     * Layout Class
     * 
     * Generates DOM Container and elements within utilising
     * Popup-Manager, To-Do-List & Project-Manager classes to
     * generate other elements
     */
    constructor () {
        // Generate Container for all DOM Elements
        this.container = document.createElement("div");
        this.container.classList.add("container");

        // Generate Main Element
        this.main = document.createElement("div");
        this.main.classList.add("main");

        // Enable/Disable DOM Elements that may be enabled, if required
        this.container.addEventListener("click", (e) => {
            // If Searchbar is activated, reset Searchbar
            if (this.#searching) {
                this.#searching = false;
                this.searchbar.classList.remove("find");
                this.tasksearch.classList.remove("searching");
            } 
            
            // Otherwise, enable Searchbar
            else if (this.searchbar.classList.contains("find"))
                this.#searching = true;

            // If Sidebar is activated, reset Sidebar (tablet view)
            if (this.#expanded) {
                this.#expanded = false;
                this.barcontainer.classList.remove("change");
                this.#projects.collapse();
            }
            
            // Otherwise, enable Sidebar
            else if (this.barcontainer.classList.contains("change"))
                this.#expanded = true;
        });

        document.body.appendChild(this.container);
    }

    /**
     * Get Container Element
     * 
     * @returns {Object} Container HTML Element
     */
    get container () { return this._container; }

    /**
     * Set Container Element
     * 
     * @param {Object} elem - HTML Element for the Container
     */
    set container (elem) { this._container = elem; }

    /**
     * Get Navigation Panel Element
     * 
     * @returns {Object} Navigation Panel HTML Element
     */
    get nav () { return this._nav; }

    /**
     * Set Navigation Panel Element
     * 
     * @param {Object} elem - HTML Element for the Navigation Panel
     */
    set nav (elem) { this._nav = elem; }

    /**
     * Get Searchbar Element
     * 
     * @returns {Object} Searchbar HTML Element
     */
    get searchbar () { return this._searchbar; }

    /**
     * Set Searchbar Element
     * 
     * @param {Object} elem - HTML Element for the Searchbar
     */
    set searchbar (elem) { this._searchbar = elem; }

    /** 
     * Get Task-Search Input Element
     * 
     * @returns {Object} Task-Search Input HTML Element
     */
    get tasksearch () { return this._tasksearch; }

    /**
     * Set Tash-Search Input Element
     * 
     * @param {Object} elem - HTML Element for Task-Search Input
     */
    set tasksearch (elem) { this._tasksearch = elem; }

    /**
     * Get 2-Bar Container Element
     * 
     * @returns {Object} 2-Bar Container HTML Element
     */
    get barcontainer () { return this._barcontainer; }

    /**
     * Set 2-Bar Container Element
     * 
     * @param {Object} elem - HTML Element for 2-Bar Container
     */
    set barcontainer (elem) { this._barcontainer = elem; }

    /**
     * Get Main Element
     * 
     * @returns {Object} Main HTML Element
     */
    get main () { return this._main; }

    /**
     * Set Main Element
     * 
     * @param {Object} elem - HTML Element for Main Element
     */
    set main (elem) { this._main = elem; }

    /**
     * Get Magnifying Glass Function
     * 
     * Private function that will add Font-Awesome script to index.html head
     * element, and returns an <i> element for use in the body element
     * 
     * @returns {Object} HTML i-Element representing Magnifying Glass
     */
    #getMagnifyingGlass () {
        // Add Font-Awesome Script to Head
        const fontAwesomeScript = document.createElement("script");
        fontAwesomeScript.src = "https://kit.fontawesome.com/9c11ce4a9b.js";
        fontAwesomeScript.crossorigin = "anonymous";
        document.head.appendChild(fontAwesomeScript);

        // Create Magnifying Glass <i> element
        const searchGlass = document.createElement("i");
        searchGlass.classList.add("fa-solid");
        searchGlass.classList.add("fa-magnifying-glass");

        return searchGlass;
    }

    /**
     * Build Navigation Panel Element Function
     * 
     * Private Function for Generating all elements associated 
     * with Navigation Panel including "Logo", Searchbar & 
     * Sidebar enabling elements
     */
    #buildNavPanel () {
        // Geneate Navigation Panel Element
        this.nav = document.createElement("div");
        this.nav.classList.add("nav");
        
        // Add Title with "Logo" to Navigation Panel
        const logo = document.createElement("div");
        logo.textContent = "#TODO:"
        logo.classList.add("logo");
        this.nav.appendChild(logo);

        // Create Toolbox Element for Navigation Panel
        const toolBox = document.createElement("div");
        toolBox.classList.add("nav-toolbox");

        // Create Search Bar for Toolbox
        this.searchbar = document.createElement("div");
        this.searchbar.classList.add("searchbar");
        this.searchbar.addEventListener("click", (e) => {
            this.searchbar.classList.toggle("find");
            this.tasksearch.classList.toggle("active");
            if (this.tasksearch.classList.contains("active"))
                this.tasksearch.focus();
        });

        // Create Magnifying Glass for Toolbox
        const glass = this.#getMagnifyingGlass();

        // Create Task-Search Input for Toolbox
        this.tasksearch = document.createElement("input");
        this.tasksearch.classList.add("task-search");
        this.tasksearch.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                console.log(`Searching for ${this.tasksearch.value};`);
                // TODO: Implement Search..
            }
        });

        // For Tablet-View, Create Sidebar Enabling Element
        this.barcontainer = document.createElement("div");
        this.barcontainer.classList.add("sidebar-button");
        this.barcontainer.addEventListener("click", (e) => {
            this.barcontainer.classList.toggle("change");
            this.#projects.expand();
        });

        // Create 2-Bars for Sidebar Enabling Element
        for (var i = 1; i < 3; i++) {
            const barN = document.createElement("div");
            barN.classList.add(`bar${i}`);
            this.barcontainer.appendChild(barN);
        }

        // Add Toolbox Elements
        this.searchbar.appendChild(glass);
        this.searchbar.appendChild(this.tasksearch);
        toolBox.appendChild(this.searchbar);
        toolBox.appendChild(this.barcontainer);

        // Add Toolbox to Navigation Panel 
        // & Navigation Panel to Container
        this.nav.appendChild(toolBox);
        this.container.appendChild(this.nav);
    }

    /**
     * Build Main Element Function
     * 
     * Private Function for Generating elements for Main
     * element, including Sidebar from Project Manager and
     * Content from To-Do-List
     */
    #buildMainElement () {
        // Add Sidebar to Main Element
        this.#projects.setup();
        this.main.appendChild(this.#projects.sidebar);
 
        // Add Content to Main Element
        this.#todos.setup();
        this.main.appendChild(this.#todos.content);

        // Add Main Element to Container Element
        this.container.appendChild(this.main);
    }

    /**
     * Render Function
     * 
     * Function Used for Render To-Do-List Page
     */
    render () {
        this.container.innerHTML = "";

        // Build Navigation Panel
        this.#buildNavPanel();

        // Build Main Element
        this.#buildMainElement();

        // Build Pop-up Element
        this.#popup.setup();
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
const WINDOW_TYPES = {
    PROJECT: 0,
    TODO: 1
};

class Popup {
    constructor () {}

    get popup () { return this._popup; }

    set popup (elem) { this._popup = elem; }

    get popupcontent () { return this._popupcontent; }

    set popupcontent (elem) { this._popupcontent = elem; }

    get overlay () { return this._overlay; }

    set overlay (elem) { this._overlay = elem; }

    enter (elem) {
        this.overlay.classList.add("active");
        this.popup.classList.add("active");

        this.popupcontent.innerHTML = "";
        this.popupcontent.appendChild(elem);
    }

    exit () {
        this.overlay.classList.remove("active");
        this.popup.classList.remove("active");
    }

    setup () {
        this.overlay = document.createElement("div");
        this.overlay.classList.add("overlay");
        this.overlay.addEventListener("click", (e) => { this.exit(); });
        document.body.appendChild(this.overlay);

        this.popup = document.createElement("div");
        this.popup.classList.add("popup");

        // Add exit button
        const exitButton = document.createElement("button");
        exitButton.textContent = "x";
        exitButton.classList.add("exit-popup");
        exitButton.addEventListener("click", (e) => { this.exit(); });
        this.popup.appendChild(exitButton);

        // Add popup content container
        this.popupcontent = document.createElement("div");
        this.popupcontent.classList.add("popup-content");
        this.popup.appendChild(this.popupcontent);

        this.popup.addEventListener("keydown", (e) => {
            console.log(e);
        });

        document.body.appendChild(this.popup);
    }
}

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
class Projects {
    constructor (popup, todos) {
        this.popup = popup;
        this.todos = todos;

        // Build Sidebar DOM Element
        this.sidebar = document.createElement("div");
        this.sidebar.classList.add("sidebar");

        // Build New-Project Popup DOM Element
        this.newProject = document.createElement("div");
        this.newProject.classList.add("project-popup");

        if (localStorage.getItem("projects"))
            this.projects = JSON.parse(localStorage.getItem("projects") || "[]");
        else
            this.projects = [];
        this.todos.projects = this.projects;

    }

    get projects () { return this._projects; }

    set projects (arr) { this._projects = arr; }

    get sidebar () { return this._sidebar; }

    set sidebar (elem) { this._sidebar = elem; }

    get popup () { return this._popup; }

    set popup (obj) { this._popup = obj; }

    get todos () { return this._todos; }

    set todos (obj) { this._todos = obj; }

    get newProject () { return this._newProject; }

    set newProject (elem) { this._newProject = elem; }

    #getProjectIndex (name) {
        let projectIndex = -1;
        for (var i = 0; i < this.projects.length; i++)
            if (this.projects[i].name === name)
                projectIndex = i;

        return projectIndex;
    }

    #getRandomColour () {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return `#${n.slice(0, 6)}`;
    }

    #buildPopup () {
        this.newProject.innerHTML = "";

        // Input and Label for New Project Name
        const newNameLabel = document.createElement("label");
        newNameLabel.for = "new-project-name";
        newNameLabel.textContent = "New Project Title";
        const newProjectName = document.createElement("input");
        newProjectName.type = "text"
        newProjectName.classList.add("new-project-name");
        newProjectName.id = "new-project-name";

        // Input and Label for New Project Colour
        const newColourLabel = document.createElement("label");
        newColourLabel.for = "new-project-colour";
        newColourLabel.textContent = "New Project Colour";
        const newColourSelector = document.createElement("input");
        newColourSelector.type = "color";
        newColourSelector.value = this.#getRandomColour();
        newColourSelector.classList.add("new-project-colour");
        newColourSelector.id = "new-project-colour";

        // Submit Button
        const projectEnter = document.createElement("button");
        projectEnter.classList.add("project-submit");
        projectEnter.textContent = "Submit";
        projectEnter.addEventListener("click", (e) => { 
            if (newProjectName.value !== "") {
                this.add(newProjectName.value, newColourSelector.value);
                this.popup.exit();
                this.sidebar.innerHTML = "";
                this.#buildSidebar();
            } else 
                window.alert("Please enter a project title");
        });

        this.newProject.appendChild(newNameLabel);
        this.newProject.appendChild(newProjectName);
        this.newProject.appendChild(newColourLabel);
        this.newProject.appendChild(newColourSelector);
        this.newProject.appendChild(projectEnter);
    }

    #buildSidebar () {
        // Add Projects Title
        const projectsTitle = document.createElement("button");
        projectsTitle.classList.add("projects-title");
        projectsTitle.textContent = "Projects";
        projectsTitle.addEventListener("click", (e) => { this.setDefault(); });
        this.sidebar.appendChild(projectsTitle);

        // Add List Element
        const projectsList = document.createElement("ul");
        projectsList.classList.add("projects-list");
        this.projects.forEach(p => {
            if (p.name !== "") {
                const projectListElement = document.createElement("div");
                projectListElement.classList.add("project-list-select")
                projectListElement.addEventListener("click", (e) => { this.todos.selection = p });

                const colourCode = document.createElement("div");
                colourCode.classList.add("project-colour-code");
                colourCode.setAttribute("style", `background-color: ${p.colour}`);
                const projectTitle = document.createElement("div");
                projectTitle.textContent = p.name;

                const projectDelButton = document.createElement("button");
                projectDelButton.classList.add("project-cross-button");
                projectDelButton.textContent = "x";
                projectDelButton.addEventListener("click", (e) => { 
                    this.delete(p.name);
                    e.stopPropagation();
                });

                projectListElement.appendChild(colourCode);
                projectListElement.appendChild(projectTitle);
                projectListElement.appendChild(projectDelButton);
                projectsList.appendChild(projectListElement);
            }
        });
        const addProjectButton = document.createElement("button");
        addProjectButton.classList.add("add-project");
        addProjectButton.textContent = "+ Project";
        addProjectButton.addEventListener("click", (e) => {
            this.#buildPopup();
            this.popup.enter(this.newProject);
        });
        this.sidebar.appendChild(projectsList);
        this.sidebar.appendChild(addProjectButton);
        
    }

    add (name, colour) {
        if (this.#getProjectIndex(name) === -1) {
            this.projects.push({name: name, colour: colour});
            this.save();
        }
    }

    delete (name) {
        const projectIndex = this.#getProjectIndex(name);
        if (projectIndex !== -1)
            this.projects.splice(projectIndex, 1);
        this.save();

        if (this.todos.selection.name === name)
            this.setDefault();
        
        this.sidebar.innerHTML = "";
        this.#buildSidebar();
    }

    save () { localStorage.setItem("projects", JSON.stringify(this.projects)); }

    log () {
        console.log("Current Projects:");
        this.projects.forEach(project => {
            if (project.name !== "Projects")
                console.log(`Name: ${project.name}; Colour: ${project.colour};`);
        });
    }

    expand () {
        this.sidebar.classList.add("expand");
    }

    collapse () {
        this.sidebar.classList.remove("expand");
    }

    setDefault () {
        this.todos.selection = {
            name: "Projects",
            colour: ""
        };
    }

    setup () {
        this.#buildSidebar();
        this.setDefault();
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/layout.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jdXN0b20tc2VsZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbGF5b3V0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3RvLWRvLWxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAoYXJyKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gYXJyO1xuICAgICAgICB0aGlzLiNjcmVhdGVPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3Q7IH1cblxuICAgIHNldCBzZWxlY3QgKGVsZW0pIHsgdGhpcy5fc2VsZWN0ID0gZWxlbTsgfVxuXG4gICAgZ2V0IG9wdGlvbnMgKCkgeyByZXR1cm4gdGhpcy5fb3B0aW9uczsgfVxuXG4gICAgc2V0IG9wdGlvbnMgKGFycikgeyB0aGlzLl9vcHRpb25zID0gYXJyOyB9XG5cbiAgICAjY3JlYXRlT3B0aW9ucyAoKSB7XG4gICAgICAgIGNvbnN0IHNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG8gPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IG87XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvO1xuICAgICAgICAgICAgc2VsLmFwcGVuZENoaWxkKG8pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmRDaGlsZChzZWwpO1xuICAgIH1cblxuICAgIHNldElEIChpZCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5pZCA9IGlkO1xuICAgIH1cbn07IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwLmpzXCI7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB0b2RvcyBmcm9tIFwiLi90by1kby1saXN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgLyoqIFByaXZhdGUgVmFyaWFibGVzIGluIExheW91dCAqL1xuICAgICNzZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAjZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAjcG9wdXAgPSBuZXcgUG9wdXAoKTtcbiAgICAjdG9kb3MgPSBuZXcgdG9kb3ModGhpcy4jcG9wdXApO1xuICAgICNwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyh0aGlzLiNwb3B1cCwgdGhpcy4jdG9kb3MpO1xuXG4gICAgLyoqXG4gICAgICogTGF5b3V0IENsYXNzXG4gICAgICogXG4gICAgICogR2VuZXJhdGVzIERPTSBDb250YWluZXIgYW5kIGVsZW1lbnRzIHdpdGhpbiB1dGlsaXNpbmdcbiAgICAgKiBQb3B1cC1NYW5hZ2VyLCBUby1Eby1MaXN0ICYgUHJvamVjdC1NYW5hZ2VyIGNsYXNzZXMgdG9cbiAgICAgKiBnZW5lcmF0ZSBvdGhlciBlbGVtZW50c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgQ29udGFpbmVyIGZvciBhbGwgRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBNYWluIEVsZW1lbnRcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgICAgIC8vIEVuYWJsZS9EaXNhYmxlIERPTSBFbGVtZW50cyB0aGF0IG1heSBiZSBlbmFibGVkLCBpZiByZXF1aXJlZFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIElmIFNlYXJjaGJhciBpcyBhY3RpdmF0ZWQsIHJlc2V0IFNlYXJjaGJhclxuICAgICAgICAgICAgaWYgKHRoaXMuI3NlYXJjaGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFza3NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoaW5nXCIpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBlbmFibGUgU2VhcmNoYmFyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJmaW5kXCIpKVxuICAgICAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIElmIFNpZGViYXIgaXMgYWN0aXZhdGVkLCByZXNldCBTaWRlYmFyICh0YWJsZXQgdmlldylcbiAgICAgICAgICAgIGlmICh0aGlzLiNleHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuI2V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXJjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9qZWN0cy5jb2xsYXBzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGVuYWJsZSBTaWRlYmFyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJhcmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGFuZ2VcIikpXG4gICAgICAgICAgICAgICAgdGhpcy4jZXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgQ29udGFpbmVyIEVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDb250YWluZXIgSFRNTCBFbGVtZW50XG4gICAgICovXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBDb250YWluZXIgRWxlbWVudFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0gSFRNTCBFbGVtZW50IGZvciB0aGUgQ29udGFpbmVyXG4gICAgICovXG4gICAgc2V0IGNvbnRhaW5lciAoZWxlbSkgeyB0aGlzLl9jb250YWluZXIgPSBlbGVtOyB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTmF2aWdhdGlvbiBQYW5lbCBFbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybnMge09iamVjdH0gTmF2aWdhdGlvbiBQYW5lbCBIVE1MIEVsZW1lbnRcbiAgICAgKi9cbiAgICBnZXQgbmF2ICgpIHsgcmV0dXJuIHRoaXMuX25hdjsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IE5hdmlnYXRpb24gUGFuZWwgRWxlbWVudFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0gSFRNTCBFbGVtZW50IGZvciB0aGUgTmF2aWdhdGlvbiBQYW5lbFxuICAgICAqL1xuICAgIHNldCBuYXYgKGVsZW0pIHsgdGhpcy5fbmF2ID0gZWxlbTsgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFNlYXJjaGJhciBFbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybnMge09iamVjdH0gU2VhcmNoYmFyIEhUTUwgRWxlbWVudFxuICAgICAqL1xuICAgIGdldCBzZWFyY2hiYXIgKCkgeyByZXR1cm4gdGhpcy5fc2VhcmNoYmFyOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgU2VhcmNoYmFyIEVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIEhUTUwgRWxlbWVudCBmb3IgdGhlIFNlYXJjaGJhclxuICAgICAqL1xuICAgIHNldCBzZWFyY2hiYXIgKGVsZW0pIHsgdGhpcy5fc2VhcmNoYmFyID0gZWxlbTsgfVxuXG4gICAgLyoqIFxuICAgICAqIEdldCBUYXNrLVNlYXJjaCBJbnB1dCBFbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGFzay1TZWFyY2ggSW5wdXQgSFRNTCBFbGVtZW50XG4gICAgICovXG4gICAgZ2V0IHRhc2tzZWFyY2ggKCkgeyByZXR1cm4gdGhpcy5fdGFza3NlYXJjaDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFRhc2gtU2VhcmNoIElucHV0IEVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIEhUTUwgRWxlbWVudCBmb3IgVGFzay1TZWFyY2ggSW5wdXRcbiAgICAgKi9cbiAgICBzZXQgdGFza3NlYXJjaCAoZWxlbSkgeyB0aGlzLl90YXNrc2VhcmNoID0gZWxlbTsgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IDItQmFyIENvbnRhaW5lciBFbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybnMge09iamVjdH0gMi1CYXIgQ29udGFpbmVyIEhUTUwgRWxlbWVudFxuICAgICAqL1xuICAgIGdldCBiYXJjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fYmFyY29udGFpbmVyOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgMi1CYXIgQ29udGFpbmVyIEVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIEhUTUwgRWxlbWVudCBmb3IgMi1CYXIgQ29udGFpbmVyXG4gICAgICovXG4gICAgc2V0IGJhcmNvbnRhaW5lciAoZWxlbSkgeyB0aGlzLl9iYXJjb250YWluZXIgPSBlbGVtOyB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTWFpbiBFbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybnMge09iamVjdH0gTWFpbiBIVE1MIEVsZW1lbnRcbiAgICAgKi9cbiAgICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9tYWluOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgTWFpbiBFbGVtZW50XG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBIVE1MIEVsZW1lbnQgZm9yIE1haW4gRWxlbWVudFxuICAgICAqL1xuICAgIHNldCBtYWluIChlbGVtKSB7IHRoaXMuX21haW4gPSBlbGVtOyB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTWFnbmlmeWluZyBHbGFzcyBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIFByaXZhdGUgZnVuY3Rpb24gdGhhdCB3aWxsIGFkZCBGb250LUF3ZXNvbWUgc2NyaXB0IHRvIGluZGV4Lmh0bWwgaGVhZFxuICAgICAqIGVsZW1lbnQsIGFuZCByZXR1cm5zIGFuIDxpPiBlbGVtZW50IGZvciB1c2UgaW4gdGhlIGJvZHkgZWxlbWVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEhUTUwgaS1FbGVtZW50IHJlcHJlc2VudGluZyBNYWduaWZ5aW5nIEdsYXNzXG4gICAgICovXG4gICAgI2dldE1hZ25pZnlpbmdHbGFzcyAoKSB7XG4gICAgICAgIC8vIEFkZCBGb250LUF3ZXNvbWUgU2NyaXB0IHRvIEhlYWRcbiAgICAgICAgY29uc3QgZm9udEF3ZXNvbWVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBmb250QXdlc29tZVNjcmlwdC5zcmMgPSBcImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS85YzExY2U0YTliLmpzXCI7XG4gICAgICAgIGZvbnRBd2Vzb21lU2NyaXB0LmNyb3Nzb3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmb250QXdlc29tZVNjcmlwdCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIE1hZ25pZnlpbmcgR2xhc3MgPGk+IGVsZW1lbnRcbiAgICAgICAgY29uc3Qgc2VhcmNoR2xhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgc2VhcmNoR2xhc3MuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgICBzZWFyY2hHbGFzcy5jbGFzc0xpc3QuYWRkKFwiZmEtbWFnbmlmeWluZy1nbGFzc1wiKTtcblxuICAgICAgICByZXR1cm4gc2VhcmNoR2xhc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgTmF2aWdhdGlvbiBQYW5lbCBFbGVtZW50IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogUHJpdmF0ZSBGdW5jdGlvbiBmb3IgR2VuZXJhdGluZyBhbGwgZWxlbWVudHMgYXNzb2NpYXRlZCBcbiAgICAgKiB3aXRoIE5hdmlnYXRpb24gUGFuZWwgaW5jbHVkaW5nIFwiTG9nb1wiLCBTZWFyY2hiYXIgJiBcbiAgICAgKiBTaWRlYmFyIGVuYWJsaW5nIGVsZW1lbnRzXG4gICAgICovXG4gICAgI2J1aWxkTmF2UGFuZWwgKCkge1xuICAgICAgICAvLyBHZW5lYXRlIE5hdmlnYXRpb24gUGFuZWwgRWxlbWVudFxuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMubmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgVGl0bGUgd2l0aCBcIkxvZ29cIiB0byBOYXZpZ2F0aW9uIFBhbmVsXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gXCIjVE9ETzpcIlxuICAgICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZChsb2dvKTtcblxuICAgICAgICAvLyBDcmVhdGUgVG9vbGJveCBFbGVtZW50IGZvciBOYXZpZ2F0aW9uIFBhbmVsXG4gICAgICAgIGNvbnN0IHRvb2xCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b29sQm94LmNsYXNzTGlzdC5hZGQoXCJuYXYtdG9vbGJveFwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgU2VhcmNoIEJhciBmb3IgVG9vbGJveFxuICAgICAgICB0aGlzLnNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hiYXJcIik7XG4gICAgICAgIHRoaXMuc2VhcmNoYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LnRvZ2dsZShcImZpbmRcIik7XG4gICAgICAgICAgICB0aGlzLnRhc2tzZWFyY2guY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhc2tzZWFyY2guY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxuICAgICAgICAgICAgICAgIHRoaXMudGFza3NlYXJjaC5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgTWFnbmlmeWluZyBHbGFzcyBmb3IgVG9vbGJveFxuICAgICAgICBjb25zdCBnbGFzcyA9IHRoaXMuI2dldE1hZ25pZnlpbmdHbGFzcygpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBUYXNrLVNlYXJjaCBJbnB1dCBmb3IgVG9vbGJveFxuICAgICAgICB0aGlzLnRhc2tzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMudGFza3NlYXJjaC5jbGFzc0xpc3QuYWRkKFwidGFzay1zZWFyY2hcIik7XG4gICAgICAgIHRoaXMudGFza3NlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNlYXJjaGluZyBmb3IgJHt0aGlzLnRhc2tzZWFyY2gudmFsdWV9O2ApO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBTZWFyY2guLlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGb3IgVGFibGV0LVZpZXcsIENyZWF0ZSBTaWRlYmFyIEVuYWJsaW5nIEVsZW1lbnRcbiAgICAgICAgdGhpcy5iYXJjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmJhcmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1idXR0b25cIik7XG4gICAgICAgIHRoaXMuYmFyY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYXJjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcbiAgICAgICAgICAgIHRoaXMuI3Byb2plY3RzLmV4cGFuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgMi1CYXJzIGZvciBTaWRlYmFyIEVuYWJsaW5nIEVsZW1lbnRcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJhck4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYmFyTi5jbGFzc0xpc3QuYWRkKGBiYXIke2l9YCk7XG4gICAgICAgICAgICB0aGlzLmJhcmNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXJOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBUb29sYm94IEVsZW1lbnRzXG4gICAgICAgIHRoaXMuc2VhcmNoYmFyLmFwcGVuZENoaWxkKGdsYXNzKTtcbiAgICAgICAgdGhpcy5zZWFyY2hiYXIuYXBwZW5kQ2hpbGQodGhpcy50YXNrc2VhcmNoKTtcbiAgICAgICAgdG9vbEJveC5hcHBlbmRDaGlsZCh0aGlzLnNlYXJjaGJhcik7XG4gICAgICAgIHRvb2xCb3guYXBwZW5kQ2hpbGQodGhpcy5iYXJjb250YWluZXIpO1xuXG4gICAgICAgIC8vIEFkZCBUb29sYm94IHRvIE5hdmlnYXRpb24gUGFuZWwgXG4gICAgICAgIC8vICYgTmF2aWdhdGlvbiBQYW5lbCB0byBDb250YWluZXJcbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQodG9vbEJveCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubmF2KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBNYWluIEVsZW1lbnQgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBQcml2YXRlIEZ1bmN0aW9uIGZvciBHZW5lcmF0aW5nIGVsZW1lbnRzIGZvciBNYWluXG4gICAgICogZWxlbWVudCwgaW5jbHVkaW5nIFNpZGViYXIgZnJvbSBQcm9qZWN0IE1hbmFnZXIgYW5kXG4gICAgICogQ29udGVudCBmcm9tIFRvLURvLUxpc3RcbiAgICAgKi9cbiAgICAjYnVpbGRNYWluRWxlbWVudCAoKSB7XG4gICAgICAgIC8vIEFkZCBTaWRlYmFyIHRvIE1haW4gRWxlbWVudFxuICAgICAgICB0aGlzLiNwcm9qZWN0cy5zZXR1cCgpO1xuICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy4jcHJvamVjdHMuc2lkZWJhcik7XG4gXG4gICAgICAgIC8vIEFkZCBDb250ZW50IHRvIE1haW4gRWxlbWVudFxuICAgICAgICB0aGlzLiN0b2Rvcy5zZXR1cCgpO1xuICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy4jdG9kb3MuY29udGVudCk7XG5cbiAgICAgICAgLy8gQWRkIE1haW4gRWxlbWVudCB0byBDb250YWluZXIgRWxlbWVudFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1haW4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEZ1bmN0aW9uIFVzZWQgZm9yIFJlbmRlciBUby1Eby1MaXN0IFBhZ2VcbiAgICAgKi9cbiAgICByZW5kZXIgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIEJ1aWxkIE5hdmlnYXRpb24gUGFuZWxcbiAgICAgICAgdGhpcy4jYnVpbGROYXZQYW5lbCgpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE1haW4gRWxlbWVudFxuICAgICAgICB0aGlzLiNidWlsZE1haW5FbGVtZW50KCk7XG5cbiAgICAgICAgLy8gQnVpbGQgUG9wLXVwIEVsZW1lbnRcbiAgICAgICAgdGhpcy4jcG9wdXAuc2V0dXAoKTtcbiAgICB9XG59OyIsImNvbnN0IFdJTkRPV19UWVBFUyA9IHtcbiAgICBQUk9KRUNUOiAwLFxuICAgIFRPRE86IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gICAgZ2V0IHBvcHVwICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwOyB9XG5cbiAgICBzZXQgcG9wdXAgKGVsZW0pIHsgdGhpcy5fcG9wdXAgPSBlbGVtOyB9XG5cbiAgICBnZXQgcG9wdXBjb250ZW50ICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwY29udGVudDsgfVxuXG4gICAgc2V0IHBvcHVwY29udGVudCAoZWxlbSkgeyB0aGlzLl9wb3B1cGNvbnRlbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgb3ZlcmxheSAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5OyB9XG5cbiAgICBzZXQgb3ZlcmxheSAoZWxlbSkgeyB0aGlzLl9vdmVybGF5ID0gZWxlbTsgfVxuXG4gICAgZW50ZXIgKGVsZW0pIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9XG5cbiAgICBleGl0ICgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmV4aXQoKTsgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcblxuICAgICAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIGV4aXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBleGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIGV4aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImV4aXQtcG9wdXBcIik7XG4gICAgICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuZXhpdCgpOyB9KTtcbiAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcblxuICAgICAgICAvLyBBZGQgcG9wdXAgY29udGVudCBjb250YWluZXJcbiAgICAgICAgdGhpcy5wb3B1cGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtY29udGVudFwiKTtcbiAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwY29udGVudCk7XG5cbiAgICAgICAgdGhpcy5wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wb3B1cCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcbiAgICBjb25zdHJ1Y3RvciAocG9wdXAsIHRvZG9zKSB7XG4gICAgICAgIHRoaXMucG9wdXAgPSBwb3B1cDtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuXG4gICAgICAgIC8vIEJ1aWxkIFNpZGViYXIgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5zaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE5ldy1Qcm9qZWN0IFBvcHVwIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMubmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1wb3B1cFwiKTtcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnRvZG9zLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cztcblxuICAgIH1cblxuICAgIGdldCBwcm9qZWN0cyAoKSB7IHJldHVybiB0aGlzLl9wcm9qZWN0czsgfVxuXG4gICAgc2V0IHByb2plY3RzIChhcnIpIHsgdGhpcy5fcHJvamVjdHMgPSBhcnI7IH1cblxuICAgIGdldCBzaWRlYmFyICgpIHsgcmV0dXJuIHRoaXMuX3NpZGViYXI7IH1cblxuICAgIHNldCBzaWRlYmFyIChlbGVtKSB7IHRoaXMuX3NpZGViYXIgPSBlbGVtOyB9XG5cbiAgICBnZXQgcG9wdXAgKCkgeyByZXR1cm4gdGhpcy5fcG9wdXA7IH1cblxuICAgIHNldCBwb3B1cCAob2JqKSB7IHRoaXMuX3BvcHVwID0gb2JqOyB9XG5cbiAgICBnZXQgdG9kb3MgKCkgeyByZXR1cm4gdGhpcy5fdG9kb3M7IH1cblxuICAgIHNldCB0b2RvcyAob2JqKSB7IHRoaXMuX3RvZG9zID0gb2JqOyB9XG5cbiAgICBnZXQgbmV3UHJvamVjdCAoKSB7IHJldHVybiB0aGlzLl9uZXdQcm9qZWN0OyB9XG5cbiAgICBzZXQgbmV3UHJvamVjdCAoZWxlbSkgeyB0aGlzLl9uZXdQcm9qZWN0ID0gZWxlbTsgfVxuXG4gICAgI2dldFByb2plY3RJbmRleCAobmFtZSkge1xuICAgICAgICBsZXQgcHJvamVjdEluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZGV4ID0gaTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdEluZGV4O1xuICAgIH1cblxuICAgICNnZXRSYW5kb21Db2xvdXIgKCkge1xuICAgICAgICBsZXQgbiA9IChNYXRoLnJhbmRvbSgpICogMHhmZmZmZiAqIDEwMDAwMDApLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGAjJHtuLnNsaWNlKDAsIDYpfWA7XG4gICAgfVxuXG4gICAgI2J1aWxkUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm5ld1Byb2plY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBJbnB1dCBhbmQgTGFiZWwgZm9yIE5ldyBQcm9qZWN0IE5hbWVcbiAgICAgICAgY29uc3QgbmV3TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBuZXdOYW1lTGFiZWwuZm9yID0gXCJuZXctcHJvamVjdC1uYW1lXCI7XG4gICAgICAgIG5ld05hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgVGl0bGVcIjtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG5ld1Byb2plY3ROYW1lLnR5cGUgPSBcInRleHRcIlxuICAgICAgICBuZXdQcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtbmFtZVwiKTtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUuaWQgPSBcIm5ldy1wcm9qZWN0LW5hbWVcIjtcblxuICAgICAgICAvLyBJbnB1dCBhbmQgTGFiZWwgZm9yIE5ldyBQcm9qZWN0IENvbG91clxuICAgICAgICBjb25zdCBuZXdDb2xvdXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbmV3Q29sb3VyTGFiZWwuZm9yID0gXCJuZXctcHJvamVjdC1jb2xvdXJcIjtcbiAgICAgICAgbmV3Q29sb3VyTGFiZWwudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0IENvbG91clwiO1xuICAgICAgICBjb25zdCBuZXdDb2xvdXJTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbmV3Q29sb3VyU2VsZWN0b3IudHlwZSA9IFwiY29sb3JcIjtcbiAgICAgICAgbmV3Q29sb3VyU2VsZWN0b3IudmFsdWUgPSB0aGlzLiNnZXRSYW5kb21Db2xvdXIoKTtcbiAgICAgICAgbmV3Q29sb3VyU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWNvbG91clwiKTtcbiAgICAgICAgbmV3Q29sb3VyU2VsZWN0b3IuaWQgPSBcIm5ldy1wcm9qZWN0LWNvbG91clwiO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBCdXR0b25cbiAgICAgICAgY29uc3QgcHJvamVjdEVudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdEVudGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXN1Ym1pdFwiKTtcbiAgICAgICAgcHJvamVjdEVudGVyLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgcHJvamVjdEVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgICAgICAgICAgIGlmIChuZXdQcm9qZWN0TmFtZS52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKG5ld1Byb2plY3ROYW1lLnZhbHVlLCBuZXdDb2xvdXJTZWxlY3Rvci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cC5leGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy4jYnVpbGRTaWRlYmFyKCk7XG4gICAgICAgICAgICB9IGVsc2UgXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgcHJvamVjdCB0aXRsZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld05hbWVMYWJlbCk7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZSk7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdDb2xvdXJMYWJlbCk7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdDb2xvdXJTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RW50ZXIpO1xuICAgIH1cblxuICAgICNidWlsZFNpZGViYXIgKCkge1xuICAgICAgICAvLyBBZGQgUHJvamVjdHMgVGl0bGVcbiAgICAgICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RzVGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLXRpdGxlXCIpO1xuICAgICAgICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgICAgICBwcm9qZWN0c1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLnNldERlZmF1bHQoKTsgfSk7XG4gICAgICAgIHRoaXMuc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcblxuICAgICAgICAvLyBBZGQgTGlzdCBFbGVtZW50XG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1saXN0XCIpO1xuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICBpZiAocC5uYW1lICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1zZWxlY3RcIilcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMudG9kb3Muc2VsZWN0aW9uID0gcCB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG91ckNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNvbG91ckNvZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29sb3VyLWNvZGVcIik7XG4gICAgICAgICAgICAgICAgY29sb3VyQ29kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1jb2xvcjogJHtwLmNvbG91cn1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHAubmFtZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIHByb2plY3REZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtY3Jvc3MtYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIHByb2plY3REZWxCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUocC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChjb2xvdXJDb2RlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdERlbEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3RcIik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIisgUHJvamVjdFwiO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jYnVpbGRQb3B1cCgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5lbnRlcih0aGlzLm5ld1Byb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XG4gICAgICAgIHRoaXMuc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYWRkIChuYW1lLCBjb2xvdXIpIHtcbiAgICAgICAgaWYgKHRoaXMuI2dldFByb2plY3RJbmRleChuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh7bmFtZTogbmFtZSwgY29sb3VyOiBjb2xvdXJ9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMuI2dldFByb2plY3RJbmRleChuYW1lKTtcbiAgICAgICAgaWYgKHByb2plY3RJbmRleCAhPT0gLTEpXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNhdmUoKTtcblxuICAgICAgICBpZiAodGhpcy50b2Rvcy5zZWxlY3Rpb24ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zaWRlYmFyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuI2J1aWxkU2lkZWJhcigpO1xuICAgIH1cblxuICAgIHNhdmUgKCkgeyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTsgfVxuXG4gICAgbG9nICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IFByb2plY3RzOlwiKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSAhPT0gXCJQcm9qZWN0c1wiKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOYW1lOiAke3Byb2plY3QubmFtZX07IENvbG91cjogJHtwcm9qZWN0LmNvbG91cn07YCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZCAoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kXCIpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlICgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRcIik7XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdCAoKSB7XG4gICAgICAgIHRoaXMudG9kb3Muc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICAgICAgICAgICAgY29sb3VyOiBcIlwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0dXAgKCkge1xuICAgICAgICB0aGlzLiNidWlsZFNpZGViYXIoKTtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0KCk7XG4gICAgfVxufTsiLCJpbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gXCIuL2N1c3RvbS1zZWxlY3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yIChwb3B1cCkge1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG5cbiAgICAgICAgLy8gQnVpbGQgQ29udGVudCBEb20gRWxlbWVudFxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gICAgICAgIFxuICAgICAgICAvLyBCdWlsZCBOZXctVG9kbyBQb3B1cCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLm5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm5ld1RvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wdXBcIik7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgfSBlbHNlIFxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGdldCB0b2RvcyAoKSB7IHJldHVybiB0aGlzLl90b2RvczsgfVxuXG4gICAgc2V0IHRvZG9zIChhcnIpIHsgdGhpcy5fdG9kb3MgPSBhcnI7IH1cblxuICAgIGdldCBzZWxlY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0aW9uOyB9XG5cbiAgICBzZXQgc2VsZWN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuI2J1aWxkQ29udGVudCgpO1xuICAgIH1cblxuICAgIGdldCBjb250ZW50ICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7IH1cblxuICAgIHNldCBjb250ZW50IChlbGVtKSB7IHRoaXMuX2NvbnRlbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgbmV3VG9kbyAoKSB7IHJldHVybiB0aGlzLl9uZXdUb2RvOyB9XG5cbiAgICBzZXQgbmV3VG9kbyAoZWxlbSkgeyB0aGlzLl9uZXdUb2RvID0gZWxlbTsgfVxuXG4gICAgZ2V0IHByb2plY3RzICgpIHsgcmV0dXJuIHRoaXMuX3Byb2plY3RzOyB9XG5cbiAgICBzZXQgcHJvamVjdHMgKGFycikgeyB0aGlzLl9wcm9qZWN0cyA9IGFycjsgfVxuXG4gICAgI2J1aWxkUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm5ld1RvZG8uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBJbnB1dCBmb3IgUHJvamVjdCBPcHRpb25zXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdExhYmVsLmZvciA9IFwicHJvamVjdC1zZWxlY3RcIjtcbiAgICAgICAgcHJvamVjdFNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSBQcm9qZWN0XCI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHAgPT4geyBvcHRpb25zLnB1c2gocC5uYW1lKTsgfSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBuZXcgQ3VzdG9tU2VsZWN0KG9wdGlvbnMpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnNldElEKFwicHJvamVjdC1zZWxlY3RcIik7XG4gICAgICAgIC8vIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAvLyBwcm9qZWN0U2VsZWN0LmlkID0gXCJwcm9qZWN0LXNlbGVjdFwiO1xuICAgICAgICAvLyBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNlbGVjdFwiKTtcbiAgICAgICAgLy8gdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIC8vICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcC5uYW1lO1xuICAgICAgICAvLyAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gSW5wdXQgZm9yIER1ZSBEYXRlLCBpZiBhdmFpbGFibGVcbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBkdWVEYXRlTGFiZWwuZm9yID0gXCJkdWUtZGF0ZVwiO1xuICAgICAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGR1ZURhdGUuaWQgPSBcImR1ZS1kYXRlXCI7XG4gICAgICAgIGR1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgICAgICAgZHVlRGF0ZS5taW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhkdWVEYXRlLm1pbik7XG5cbiAgICAgICAgdGhpcy5uZXdUb2RvLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3RMYWJlbCk7XG4gICAgICAgIHRoaXMubmV3VG9kby5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICAgICAgdGhpcy5uZXdUb2RvLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIHRoaXMubmV3VG9kby5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICB9XG5cbiAgICAjYnVpbGRDb250ZW50ICgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gQWRkIFRpdGxlIHRvIENvbnRlbnRcbiAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuc2VsZWN0aW9uLm5hbWU7XG5cbiAgICAgICAgLy8gQWRkIFByb2plY3QgU3BlY2lmaWMgTGlzdFxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtbGlzdFwiKTtcbiAgICAgICAgLy8gVE9ETzogUmVwbGFjZSB1bCB3aXRoIHRhYmxlP1xuXG4gICAgICAgIC8vIEFkZCBOZXctVG8tRG8gQnV0dG9uXG4gICAgICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG8tZG9cIik7XG4gICAgICAgIHRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIisgVG8gRG9cIjtcbiAgICAgICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2J1aWxkUG9wdXAoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXAuZW50ZXIodGhpcy5uZXdUb2RvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uKTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMuI2J1aWxkQ29udGVudCgpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9