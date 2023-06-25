"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["layout"],{

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _popup_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-manager.js */ "./src/js/popup-manager.js");
/* harmony import */ var _project_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager.js */ "./src/js/project-manager.js");
/* harmony import */ var _to_do_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do-list.js */ "./src/js/to-do-list.js");




class Layout {
    /** Private Variables in Layout */
    #searching = false;
    #expanded = false;
    #popupManager = new _popup_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    #toDoList = new _to_do_list_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.#popupManager);
    #projectManager = new _project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.#popupManager, this.#toDoList);

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
                this.#projectManager.collapse();
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
            this.#projectManager.expand();
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
        this.#projectManager.setup();
        this.main.appendChild(this.#projectManager.sidebar);
 
        // Add Content to Main Element
        this.#toDoList.setup();
        this.main.appendChild(this.#toDoList.content);

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
        this.#popupManager.setup();
    }
};

/***/ }),

/***/ "./src/js/popup-manager.js":
/*!*********************************!*\
  !*** ./src/js/popup-manager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupManager)
/* harmony export */ });
const WINDOW_TYPES = {
    PROJECT: 0,
    TODO: 1
};

class PopupManager {
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

        document.body.appendChild(this.popup);
    }
}

/***/ }),

/***/ "./src/js/project-manager.js":
/*!***********************************!*\
  !*** ./src/js/project-manager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectManager)
/* harmony export */ });
class ProjectManager {
    constructor (popup, todos) {
        this.popup = popup;
        this.todos = todos;

        // Build Sidebar DOM Element
        this.sidebar = document.createElement("div");
        this.sidebar.classList.add("sidebar");

        // Build New-Project Popup DOM Element
        this.newProject = document.createElement("div");
        this.newProject.classList.add("project-popup");

        if (localStorage.getItem("projects")) {
            this.projects = JSON.parse(localStorage.getItem("projects") || "[]");
        } else
            this.projects = [];
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
        const projectsTitle = document.createElement("h1");
        projectsTitle.textContent = "Projects";
        projectsTitle.addEventListener("click", (e) => { this.setDefault(); });
        this.sidebar.appendChild(projectsTitle);

        // Add List Element
        const projectsList = document.createElement("ul");
        this.projects.forEach(p => {
            if (p.name !== "") {
                const projectListElement = document.createElement("li");
                projectListElement.addEventListener("click", (e) => {
                    this.todos.selection = p;
                });
                const colourCode = document.createElement("div");
                colourCode.classList.add("project-colour-code");
                colourCode.setAttribute("style", `background-color: ${p.colour}`);
                const projectTitle = document.createElement("div");
                projectTitle.textContent = p.name;
                projectListElement.appendChild(colourCode);
                projectListElement.appendChild(projectTitle);
                projectsList.appendChild(projectListElement);
            }
        });
        const addProjectButton = document.createElement("button");
        addProjectButton.classList.add("add-project-button");
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
class ToDoList {
    constructor (popup) {
        this.popup = popup;

        // Build Content Dom Element
        this.content = document.createElement("div");
        this.content.classList.add("content");

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

    #buildContent () {
        this.content.innerHTML = "";

        // Add Title to Content
        const contentTitle = document.createElement("h1");
        contentTitle.textContent = this.selection.name;

        // Add Project Specific List
        // TODO: this

        // Add New-To-Do Button
        const todoButton = document.createElement("button");
        todoButton.classList.add("new-to-do-button");
        todoButton.textContent = "+ To Do";
        todoButton.addEventListener("click", (e) => {
            // TODO: This
        });

        this.content.appendChild(contentTitle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkJBQTJCO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZSxVQUFVLGdCQUFnQjtBQUM5RSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvS2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsbUJBQW1COztBQUVuQixzQkFBc0I7O0FBRXRCLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCOztBQUVyQix5QkFBeUI7O0FBRXpCLHFCQUFxQjs7QUFFckIseUJBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wb3B1cC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvcHJvamVjdC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdG8tZG8tbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gXCIuL3BvcHVwLW1hbmFnZXIuanNcIjtcbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1hbmFnZXIuanNcIjtcbmltcG9ydCBUb0RvTGlzdCBmcm9tIFwiLi90by1kby1saXN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgLyoqIFByaXZhdGUgVmFyaWFibGVzIGluIExheW91dCAqL1xuICAgICNzZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAjZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAjcG9wdXBNYW5hZ2VyID0gbmV3IFBvcHVwTWFuYWdlcigpO1xuICAgICN0b0RvTGlzdCA9IG5ldyBUb0RvTGlzdCh0aGlzLiNwb3B1cE1hbmFnZXIpO1xuICAgICNwcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcih0aGlzLiNwb3B1cE1hbmFnZXIsIHRoaXMuI3RvRG9MaXN0KTtcblxuICAgIC8qKlxuICAgICAqIExheW91dCBDbGFzc1xuICAgICAqIFxuICAgICAqIEdlbmVyYXRlcyBET00gQ29udGFpbmVyIGFuZCBlbGVtZW50cyB3aXRoaW4gdXRpbGlzaW5nXG4gICAgICogUG9wdXAtTWFuYWdlciwgVG8tRG8tTGlzdCAmIFByb2plY3QtTWFuYWdlciBjbGFzc2VzIHRvXG4gICAgICogZ2VuZXJhdGUgb3RoZXIgZWxlbWVudHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIENvbnRhaW5lciBmb3IgYWxsIERPTSBFbGVtZW50c1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgTWFpbiBFbGVtZW50XG4gICAgICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMubWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICAgICAgICAvLyBFbmFibGUvRGlzYWJsZSBET00gRWxlbWVudHMgdGhhdCBtYXkgYmUgZW5hYmxlZCwgaWYgcmVxdWlyZWRcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBTZWFyY2hiYXIgaXMgYWN0aXZhdGVkLCByZXNldCBTZWFyY2hiYXJcbiAgICAgICAgICAgIGlmICh0aGlzLiNzZWFyY2hpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNzZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QucmVtb3ZlKFwiZmluZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzZWFyY2guY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaGluZ1wiKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgZW5hYmxlIFNlYXJjaGJhclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmluZFwiKSlcbiAgICAgICAgICAgICAgICB0aGlzLiNzZWFyY2hpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBJZiBTaWRlYmFyIGlzIGFjdGl2YXRlZCwgcmVzZXQgU2lkZWJhciAodGFibGV0IHZpZXcpXG4gICAgICAgICAgICBpZiAodGhpcy4jZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNleHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFyY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgdGhpcy4jcHJvamVjdE1hbmFnZXIuY29sbGFwc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBlbmFibGUgU2lkZWJhclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5iYXJjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hhbmdlXCIpKVxuICAgICAgICAgICAgICAgIHRoaXMuI2V4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IENvbnRhaW5lciBFbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybnMge09iamVjdH0gQ29udGFpbmVyIEhUTUwgRWxlbWVudFxuICAgICAqL1xuICAgIGdldCBjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udGFpbmVyOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgQ29udGFpbmVyIEVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIEhUTUwgRWxlbWVudCBmb3IgdGhlIENvbnRhaW5lclxuICAgICAqL1xuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IE5hdmlnYXRpb24gUGFuZWwgRWxlbWVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IE5hdmlnYXRpb24gUGFuZWwgSFRNTCBFbGVtZW50XG4gICAgICovXG4gICAgZ2V0IG5hdiAoKSB7IHJldHVybiB0aGlzLl9uYXY7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBOYXZpZ2F0aW9uIFBhbmVsIEVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIEhUTUwgRWxlbWVudCBmb3IgdGhlIE5hdmlnYXRpb24gUGFuZWxcbiAgICAgKi9cbiAgICBzZXQgbmF2IChlbGVtKSB7IHRoaXMuX25hdiA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIEdldCBTZWFyY2hiYXIgRWxlbWVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFNlYXJjaGJhciBIVE1MIEVsZW1lbnRcbiAgICAgKi9cbiAgICBnZXQgc2VhcmNoYmFyICgpIHsgcmV0dXJuIHRoaXMuX3NlYXJjaGJhcjsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNlYXJjaGJhciBFbGVtZW50XG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBIVE1MIEVsZW1lbnQgZm9yIHRoZSBTZWFyY2hiYXJcbiAgICAgKi9cbiAgICBzZXQgc2VhcmNoYmFyIChlbGVtKSB7IHRoaXMuX3NlYXJjaGJhciA9IGVsZW07IH1cblxuICAgIC8qKiBcbiAgICAgKiBHZXQgVGFzay1TZWFyY2ggSW5wdXQgRWxlbWVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRhc2stU2VhcmNoIElucHV0IEhUTUwgRWxlbWVudFxuICAgICAqL1xuICAgIGdldCB0YXNrc2VhcmNoICgpIHsgcmV0dXJuIHRoaXMuX3Rhc2tzZWFyY2g7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBUYXNoLVNlYXJjaCBJbnB1dCBFbGVtZW50XG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBIVE1MIEVsZW1lbnQgZm9yIFRhc2stU2VhcmNoIElucHV0XG4gICAgICovXG4gICAgc2V0IHRhc2tzZWFyY2ggKGVsZW0pIHsgdGhpcy5fdGFza3NlYXJjaCA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIEdldCAyLUJhciBDb250YWluZXIgRWxlbWVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IDItQmFyIENvbnRhaW5lciBIVE1MIEVsZW1lbnRcbiAgICAgKi9cbiAgICBnZXQgYmFyY29udGFpbmVyICgpIHsgcmV0dXJuIHRoaXMuX2JhcmNvbnRhaW5lcjsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IDItQmFyIENvbnRhaW5lciBFbGVtZW50XG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBIVE1MIEVsZW1lbnQgZm9yIDItQmFyIENvbnRhaW5lclxuICAgICAqL1xuICAgIHNldCBiYXJjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fYmFyY29udGFpbmVyID0gZWxlbTsgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IE1haW4gRWxlbWVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IE1haW4gSFRNTCBFbGVtZW50XG4gICAgICovXG4gICAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbjsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IE1haW4gRWxlbWVudFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0gSFRNTCBFbGVtZW50IGZvciBNYWluIEVsZW1lbnRcbiAgICAgKi9cbiAgICBzZXQgbWFpbiAoZWxlbSkgeyB0aGlzLl9tYWluID0gZWxlbTsgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IE1hZ25pZnlpbmcgR2xhc3MgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBQcml2YXRlIGZ1bmN0aW9uIHRoYXQgd2lsbCBhZGQgRm9udC1Bd2Vzb21lIHNjcmlwdCB0byBpbmRleC5odG1sIGhlYWRcbiAgICAgKiBlbGVtZW50LCBhbmQgcmV0dXJucyBhbiA8aT4gZWxlbWVudCBmb3IgdXNlIGluIHRoZSBib2R5IGVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBIVE1MIGktRWxlbWVudCByZXByZXNlbnRpbmcgTWFnbmlmeWluZyBHbGFzc1xuICAgICAqL1xuICAgICNnZXRNYWduaWZ5aW5nR2xhc3MgKCkge1xuICAgICAgICAvLyBBZGQgRm9udC1Bd2Vzb21lIFNjcmlwdCB0byBIZWFkXG4gICAgICAgIGNvbnN0IGZvbnRBd2Vzb21lU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgZm9udEF3ZXNvbWVTY3JpcHQuc3JjID0gXCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vOWMxMWNlNGE5Yi5qc1wiO1xuICAgICAgICBmb250QXdlc29tZVNjcmlwdC5jcm9zc29yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZm9udEF3ZXNvbWVTY3JpcHQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBNYWduaWZ5aW5nIEdsYXNzIDxpPiBlbGVtZW50XG4gICAgICAgIGNvbnN0IHNlYXJjaEdsYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIHNlYXJjaEdsYXNzLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgICAgc2VhcmNoR2xhc3MuY2xhc3NMaXN0LmFkZChcImZhLW1hZ25pZnlpbmctZ2xhc3NcIik7XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaEdsYXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIE5hdmlnYXRpb24gUGFuZWwgRWxlbWVudCBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIFByaXZhdGUgRnVuY3Rpb24gZm9yIEdlbmVyYXRpbmcgYWxsIGVsZW1lbnRzIGFzc29jaWF0ZWQgXG4gICAgICogd2l0aCBOYXZpZ2F0aW9uIFBhbmVsIGluY2x1ZGluZyBcIkxvZ29cIiwgU2VhcmNoYmFyICYgXG4gICAgICogU2lkZWJhciBlbmFibGluZyBlbGVtZW50c1xuICAgICAqL1xuICAgICNidWlsZE5hdlBhbmVsICgpIHtcbiAgICAgICAgLy8gR2VuZWF0ZSBOYXZpZ2F0aW9uIFBhbmVsIEVsZW1lbnRcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIFRpdGxlIHdpdGggXCJMb2dvXCIgdG8gTmF2aWdhdGlvbiBQYW5lbFxuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9nby50ZXh0Q29udGVudCA9IFwiI1RPRE86XCJcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFRvb2xib3ggRWxlbWVudCBmb3IgTmF2aWdhdGlvbiBQYW5lbFxuICAgICAgICBjb25zdCB0b29sQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9vbEJveC5jbGFzc0xpc3QuYWRkKFwibmF2LXRvb2xib3hcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFNlYXJjaCBCYXIgZm9yIFRvb2xib3hcbiAgICAgICAgdGhpcy5zZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoYmFyXCIpO1xuICAgICAgICB0aGlzLnNlYXJjaGJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgdGhpcy50YXNrc2VhcmNoLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBpZiAodGhpcy50YXNrc2VhcmNoLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzZWFyY2guZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIE1hZ25pZnlpbmcgR2xhc3MgZm9yIFRvb2xib3hcbiAgICAgICAgY29uc3QgZ2xhc3MgPSB0aGlzLiNnZXRNYWduaWZ5aW5nR2xhc3MoKTtcblxuICAgICAgICAvLyBDcmVhdGUgVGFzay1TZWFyY2ggSW5wdXQgZm9yIFRvb2xib3hcbiAgICAgICAgdGhpcy50YXNrc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLnRhc2tzZWFyY2guY2xhc3NMaXN0LmFkZChcInRhc2stc2VhcmNoXCIpO1xuICAgICAgICB0aGlzLnRhc2tzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZWFyY2hpbmcgZm9yICR7dGhpcy50YXNrc2VhcmNoLnZhbHVlfTtgKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgU2VhcmNoLi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRm9yIFRhYmxldC1WaWV3LCBDcmVhdGUgU2lkZWJhciBFbmFibGluZyBFbGVtZW50XG4gICAgICAgIHRoaXMuYmFyY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5iYXJjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmJhcmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFyY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgICB0aGlzLiNwcm9qZWN0TWFuYWdlci5leHBhbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIDItQmFycyBmb3IgU2lkZWJhciBFbmFibGluZyBFbGVtZW50XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBiYXJOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJhck4uY2xhc3NMaXN0LmFkZChgYmFyJHtpfWApO1xuICAgICAgICAgICAgdGhpcy5iYXJjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFyTik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgVG9vbGJveCBFbGVtZW50c1xuICAgICAgICB0aGlzLnNlYXJjaGJhci5hcHBlbmRDaGlsZChnbGFzcyk7XG4gICAgICAgIHRoaXMuc2VhcmNoYmFyLmFwcGVuZENoaWxkKHRoaXMudGFza3NlYXJjaCk7XG4gICAgICAgIHRvb2xCb3guYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2hiYXIpO1xuICAgICAgICB0b29sQm94LmFwcGVuZENoaWxkKHRoaXMuYmFyY29udGFpbmVyKTtcblxuICAgICAgICAvLyBBZGQgVG9vbGJveCB0byBOYXZpZ2F0aW9uIFBhbmVsIFxuICAgICAgICAvLyAmIE5hdmlnYXRpb24gUGFuZWwgdG8gQ29udGFpbmVyXG4gICAgICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKHRvb2xCb3gpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm5hdik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgTWFpbiBFbGVtZW50IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogUHJpdmF0ZSBGdW5jdGlvbiBmb3IgR2VuZXJhdGluZyBlbGVtZW50cyBmb3IgTWFpblxuICAgICAqIGVsZW1lbnQsIGluY2x1ZGluZyBTaWRlYmFyIGZyb20gUHJvamVjdCBNYW5hZ2VyIGFuZFxuICAgICAqIENvbnRlbnQgZnJvbSBUby1Eby1MaXN0XG4gICAgICovXG4gICAgI2J1aWxkTWFpbkVsZW1lbnQgKCkge1xuICAgICAgICAvLyBBZGQgU2lkZWJhciB0byBNYWluIEVsZW1lbnRcbiAgICAgICAgdGhpcy4jcHJvamVjdE1hbmFnZXIuc2V0dXAoKTtcbiAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuI3Byb2plY3RNYW5hZ2VyLnNpZGViYXIpO1xuIFxuICAgICAgICAvLyBBZGQgQ29udGVudCB0byBNYWluIEVsZW1lbnRcbiAgICAgICAgdGhpcy4jdG9Eb0xpc3Quc2V0dXAoKTtcbiAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuI3RvRG9MaXN0LmNvbnRlbnQpO1xuXG4gICAgICAgIC8vIEFkZCBNYWluIEVsZW1lbnQgdG8gQ29udGFpbmVyIEVsZW1lbnRcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tYWluKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBGdW5jdGlvbiBVc2VkIGZvciBSZW5kZXIgVG8tRG8tTGlzdCBQYWdlXG4gICAgICovXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBCdWlsZCBOYXZpZ2F0aW9uIFBhbmVsXG4gICAgICAgIHRoaXMuI2J1aWxkTmF2UGFuZWwoKTtcblxuICAgICAgICAvLyBCdWlsZCBNYWluIEVsZW1lbnRcbiAgICAgICAgdGhpcy4jYnVpbGRNYWluRWxlbWVudCgpO1xuXG4gICAgICAgIC8vIEJ1aWxkIFBvcC11cCBFbGVtZW50XG4gICAgICAgIHRoaXMuI3BvcHVwTWFuYWdlci5zZXR1cCgpO1xuICAgIH1cbn07IiwiY29uc3QgV0lORE9XX1RZUEVTID0ge1xuICAgIFBST0pFQ1Q6IDAsXG4gICAgVE9ETzogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gICAgZ2V0IHBvcHVwICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwOyB9XG5cbiAgICBzZXQgcG9wdXAgKGVsZW0pIHsgdGhpcy5fcG9wdXAgPSBlbGVtOyB9XG5cbiAgICBnZXQgcG9wdXBjb250ZW50ICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwY29udGVudDsgfVxuXG4gICAgc2V0IHBvcHVwY29udGVudCAoZWxlbSkgeyB0aGlzLl9wb3B1cGNvbnRlbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgb3ZlcmxheSAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5OyB9XG5cbiAgICBzZXQgb3ZlcmxheSAoZWxlbSkgeyB0aGlzLl9vdmVybGF5ID0gZWxlbTsgfVxuXG4gICAgZW50ZXIgKGVsZW0pIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9XG5cbiAgICBleGl0ICgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmV4aXQoKTsgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcblxuICAgICAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIGV4aXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBleGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIGV4aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImV4aXQtcG9wdXBcIik7XG4gICAgICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuZXhpdCgpOyB9KTtcbiAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcblxuICAgICAgICAvLyBBZGQgcG9wdXAgY29udGVudCBjb250YWluZXJcbiAgICAgICAgdGhpcy5wb3B1cGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtY29udGVudFwiKTtcbiAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwY29udGVudCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yIChwb3B1cCwgdG9kb3MpIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHBvcHVwO1xuICAgICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG5cbiAgICAgICAgLy8gQnVpbGQgU2lkZWJhciBET00gRWxlbWVudFxuICAgICAgICB0aGlzLnNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgTmV3LVByb2plY3QgUG9wdXAgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXBvcHVwXCIpO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpIHx8IFwiW11cIik7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0cyAoKSB7IHJldHVybiB0aGlzLl9wcm9qZWN0czsgfVxuXG4gICAgc2V0IHByb2plY3RzIChhcnIpIHsgdGhpcy5fcHJvamVjdHMgPSBhcnI7IH1cblxuICAgIGdldCBzaWRlYmFyICgpIHsgcmV0dXJuIHRoaXMuX3NpZGViYXI7IH1cblxuICAgIHNldCBzaWRlYmFyIChlbGVtKSB7IHRoaXMuX3NpZGViYXIgPSBlbGVtOyB9XG5cbiAgICBnZXQgcG9wdXAgKCkgeyByZXR1cm4gdGhpcy5fcG9wdXA7IH1cblxuICAgIHNldCBwb3B1cCAob2JqKSB7IHRoaXMuX3BvcHVwID0gb2JqOyB9XG5cbiAgICBnZXQgdG9kb3MgKCkgeyByZXR1cm4gdGhpcy5fdG9kb3M7IH1cblxuICAgIHNldCB0b2RvcyAob2JqKSB7IHRoaXMuX3RvZG9zID0gb2JqOyB9XG5cbiAgICBnZXQgbmV3UHJvamVjdCAoKSB7IHJldHVybiB0aGlzLl9uZXdQcm9qZWN0OyB9XG5cbiAgICBzZXQgbmV3UHJvamVjdCAoZWxlbSkgeyB0aGlzLl9uZXdQcm9qZWN0ID0gZWxlbTsgfVxuXG4gICAgI2dldFByb2plY3RJbmRleCAobmFtZSkge1xuICAgICAgICBsZXQgcHJvamVjdEluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZGV4ID0gaTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdEluZGV4O1xuICAgIH1cblxuICAgICNnZXRSYW5kb21Db2xvdXIgKCkge1xuICAgICAgICBsZXQgbiA9IChNYXRoLnJhbmRvbSgpICogMHhmZmZmZiAqIDEwMDAwMDApLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGAjJHtuLnNsaWNlKDAsIDYpfWA7XG4gICAgfVxuXG4gICAgI2J1aWxkUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm5ld1Byb2plY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBJbnB1dCBhbmQgTGFiZWwgZm9yIE5ldyBQcm9qZWN0IE5hbWVcbiAgICAgICAgY29uc3QgbmV3TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBuZXdOYW1lTGFiZWwuZm9yID0gXCJuZXctcHJvamVjdC1uYW1lXCI7XG4gICAgICAgIG5ld05hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgVGl0bGVcIjtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG5ld1Byb2plY3ROYW1lLnR5cGUgPSBcInRleHRcIlxuICAgICAgICBuZXdQcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtbmFtZVwiKTtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUuaWQgPSBcIm5ldy1wcm9qZWN0LW5hbWVcIjtcblxuICAgICAgICAvLyBJbnB1dCBhbmQgTGFiZWwgZm9yIE5ldyBQcm9qZWN0IENvbG91clxuICAgICAgICBjb25zdCBuZXdDb2xvdXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbmV3Q29sb3VyTGFiZWwuZm9yID0gXCJuZXctcHJvamVjdC1jb2xvdXJcIjtcbiAgICAgICAgbmV3Q29sb3VyTGFiZWwudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0IENvbG91clwiO1xuICAgICAgICBjb25zdCBuZXdDb2xvdXJTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbmV3Q29sb3VyU2VsZWN0b3IudHlwZSA9IFwiY29sb3JcIjtcbiAgICAgICAgbmV3Q29sb3VyU2VsZWN0b3IudmFsdWUgPSB0aGlzLiNnZXRSYW5kb21Db2xvdXIoKTtcbiAgICAgICAgbmV3Q29sb3VyU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWNvbG91clwiKTtcbiAgICAgICAgbmV3Q29sb3VyU2VsZWN0b3IuaWQgPSBcIm5ldy1wcm9qZWN0LWNvbG91clwiO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBCdXR0b25cbiAgICAgICAgY29uc3QgcHJvamVjdEVudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdEVudGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXN1Ym1pdFwiKTtcbiAgICAgICAgcHJvamVjdEVudGVyLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgcHJvamVjdEVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgICAgICAgICAgIGlmIChuZXdQcm9qZWN0TmFtZS52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKG5ld1Byb2plY3ROYW1lLnZhbHVlLCBuZXdDb2xvdXJTZWxlY3Rvci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cC5leGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy4jYnVpbGRTaWRlYmFyKCk7XG4gICAgICAgICAgICB9IGVsc2UgXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgcHJvamVjdCB0aXRsZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld05hbWVMYWJlbCk7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZSk7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdDb2xvdXJMYWJlbCk7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdDb2xvdXJTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RW50ZXIpO1xuICAgIH1cblxuICAgICNidWlsZFNpZGViYXIgKCkge1xuICAgICAgICAvLyBBZGQgUHJvamVjdHMgVGl0bGVcbiAgICAgICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgcHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICAgICAgcHJvamVjdHNUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5zZXREZWZhdWx0KCk7IH0pO1xuICAgICAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNUaXRsZSk7XG5cbiAgICAgICAgLy8gQWRkIExpc3QgRWxlbWVudFxuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIGlmIChwLm5hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9zLnNlbGVjdGlvbiA9IHA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3VyQ29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY29sb3VyQ29kZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb2xvdXItY29kZVwiKTtcbiAgICAgICAgICAgICAgICBjb2xvdXJDb2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kLWNvbG9yOiAke3AuY29sb3VyfWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcC5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChjb2xvdXJDb2RlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIisgUHJvamVjdFwiO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jYnVpbGRQb3B1cCgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5lbnRlcih0aGlzLm5ld1Byb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XG4gICAgICAgIHRoaXMuc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYWRkIChuYW1lLCBjb2xvdXIpIHtcbiAgICAgICAgaWYgKHRoaXMuI2dldFByb2plY3RJbmRleChuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh7bmFtZTogbmFtZSwgY29sb3VyOiBjb2xvdXJ9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMuI2dldFByb2plY3RJbmRleChuYW1lKTtcbiAgICAgICAgaWYgKHByb2plY3RJbmRleCAhPT0gLTEpXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHNhdmUgKCkgeyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTsgfVxuXG4gICAgbG9nICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IFByb2plY3RzOlwiKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSAhPT0gXCJQcm9qZWN0c1wiKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOYW1lOiAke3Byb2plY3QubmFtZX07IENvbG91cjogJHtwcm9qZWN0LmNvbG91cn07YCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZCAoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kXCIpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlICgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRcIik7XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdCAoKSB7XG4gICAgICAgIHRoaXMudG9kb3Muc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICAgICAgICAgICAgY29sb3VyOiBcIlwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0dXAgKCkge1xuICAgICAgICB0aGlzLiNidWlsZFNpZGViYXIoKTtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0KCk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XG4gICAgY29uc3RydWN0b3IgKHBvcHVwKSB7XG4gICAgICAgIHRoaXMucG9wdXAgPSBwb3B1cDtcblxuICAgICAgICAvLyBCdWlsZCBDb250ZW50IERvbSBFbGVtZW50XG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSkge1xuICAgICAgICAgICAgdGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSB8fCBcIltdXCIpO1xuICAgICAgICB9IGVsc2UgXG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHRvZG9zICgpIHsgcmV0dXJuIHRoaXMuX3RvZG9zOyB9XG5cbiAgICBzZXQgdG9kb3MgKGFycikgeyB0aGlzLl90b2RvcyA9IGFycjsgfVxuXG4gICAgZ2V0IHNlbGVjdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3Rpb247IH1cblxuICAgIHNldCBzZWxlY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy4jYnVpbGRDb250ZW50KCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRlbnQgKCkgeyByZXR1cm4gdGhpcy5fY29udGVudDsgfVxuXG4gICAgc2V0IGNvbnRlbnQgKGVsZW0pIHsgdGhpcy5fY29udGVudCA9IGVsZW07IH1cblxuICAgIGdldCBuZXdUb2RvICgpIHsgcmV0dXJuIHRoaXMuX25ld1RvZG87IH1cblxuICAgIHNldCBuZXdUb2RvIChlbGVtKSB7IHRoaXMuX25ld1RvZG8gPSBlbGVtOyB9XG5cbiAgICAjYnVpbGRDb250ZW50ICgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gQWRkIFRpdGxlIHRvIENvbnRlbnRcbiAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnNlbGVjdGlvbi5uYW1lO1xuXG4gICAgICAgIC8vIEFkZCBQcm9qZWN0IFNwZWNpZmljIExpc3RcbiAgICAgICAgLy8gVE9ETzogdGhpc1xuXG4gICAgICAgIC8vIEFkZCBOZXctVG8tRG8gQnV0dG9uXG4gICAgICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctdG8tZG8tYnV0dG9uXCIpO1xuICAgICAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIFRvIERvXCI7XG4gICAgICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBUaGlzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG4gICAgfVxuXG4gICAgc2V0dXAgKCkge1xuICAgICAgICB0aGlzLiNidWlsZENvbnRlbnQoKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==