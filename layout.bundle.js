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



class Layout {
    #searching = false;
    #expanded = false;
    #popupManager = new _popup_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    #projectManager = new _project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.#popupManager);

    constructor () {
        this.container = document.createElement("div");
        this.container.classList.add("container");
        this.container.addEventListener("click", (e) => {
            if (this.#searching) {
                this.#searching = false;
                this.searchbar.classList.remove("find");
                this.tasksearch.classList.remove("searching");
            } else if (this.searchbar.classList.contains("find"))
                this.#searching = true;

            if (this.#expanded) {
                this.#expanded = false;
                this.barcontainer.classList.remove("change");
                this.#projectManager.collapse();
                // this.sidebar.classList.remove("expand");
            } else if (this.barcontainer.classList.contains("change"))
                this.#expanded = true;
        });

        document.body.appendChild(this.container);
    }

    get container () { return this._container; }

    set container (elem) { this._container = elem; }

    get nav () { return this._nav; }

    set nav (elem) { this._nav = elem; }

    get searchbar () { return this._searchbar; }

    set searchbar (elem) { this._searchbar = elem; }

    get tasksearch () { return this._tasksearch; }

    set tasksearch (elem) { this._tasksearch = elem; }

    get barcontainer () { return this._barcontainer; }

    set barcontainer (elem) { this._barcontainer = elem; }

    get main () { return this._main; }

    set main (elem) { this._main = elem; }

    get content () { return this._content; }

    set content (elem) { this._content = elem; }

    // get sidebar () { return this._sidebar; }

    // set sidebar (elem) { this._sidebar = elem; }

    #addBrowserIcon () {
        const iconLink = document.createElement("link");
        iconLink.rel = "todo-icon";
        iconLink.href = TodoIcon;
        document.head.appendChild(iconLink);
    }

    #getMagnifyingGlass () {
        const fontAwesomeScript = document.createElement("script");
        fontAwesomeScript.src = "https://kit.fontawesome.com/9c11ce4a9b.js";
        fontAwesomeScript.crossorigin = "anonymous";
        document.head.appendChild(fontAwesomeScript);

        const searchGlass = document.createElement("i");
        searchGlass.classList.add("fa-solid");
        searchGlass.classList.add("fa-magnifying-glass");

        return searchGlass;
    }

    #buildNavPanel () {
        this.nav = document.createElement("div");
        this.nav.classList.add("nav");
        
        // Add Logo
        const logo = document.createElement("div");
        logo.textContent = "#TODO:"
        logo.classList.add("logo");
        this.nav.appendChild(logo);

        const toolBox = document.createElement("div");
        toolBox.classList.add("nav-toolbox");

        // Add Search Bar
        this.searchbar = document.createElement("div");
        const glass = this.#getMagnifyingGlass();
        this.searchbar.appendChild(glass);
        this.tasksearch = document.createElement("input");
        this.tasksearch.classList.add("task-search");
        this.tasksearch.addEventListener("keypress", (e) => {
            if (e.key === "Enter")
                console.log(`Searching for ${this.tasksearch.value};`);
        });

        this.searchbar.appendChild(this.tasksearch);
        this.searchbar.classList.add("searchbar");
        this.searchbar.addEventListener("click", (e) => {
            this.searchbar.classList.toggle("find");
            this.tasksearch.classList.toggle("active");
            if (this.tasksearch.classList.contains("active"))
                this.tasksearch.focus();
        });
        toolBox.appendChild(this.searchbar);

        // Add Sidebar button
        this.barcontainer = document.createElement("div");
        this.barcontainer.classList.add("sidebar-button");
        this.barcontainer.addEventListener("click", (e) => {
            this.barcontainer.classList.toggle("change");
            this.#projectManager.expand();
            // this.sidebar.classList.toggle("expand");
        });

        for (var i = 1; i < 3; i++) {
            const barN = document.createElement("div");
            barN.classList.add(`bar${i}`);
            this.barcontainer.appendChild(barN);
        }
        toolBox.appendChild(this.barcontainer);
        this.nav.appendChild(toolBox);

        this.container.appendChild(this.nav);
    }

    #buildContent () {
        this.content = document.createElement("div");
        this.content.classList.add("content");

        // Add Project Specific List

        // Add Add-To-Do Button
        const todoButton = document.createElement("button");
        todoButton.classList.add("add-to-do-button");
        todoButton.textContent = "+ To Do";
        todoButton.addEventListener("click", (e) => {});

        this.content.appendChild(todoButton);

        this.main.appendChild(this.content);
    }

    #buildMainElement () {
        this.main = document.createElement("div");
        this.main.classList.add("main");
 
        // Add Content to Main Div
        this.#buildContent();

        // Add Sidebar to Main Div
        this.#projectManager.setup();
        this.main.appendChild(this.#projectManager.sidebar);

        // Add to Container
        this.container.appendChild(this.main);
    }

    render () {
        // this.#addBrowserIcon();

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
    constructor (popup) {
        this.popup = popup;
        if (localStorage.getItem("projects"))
            this.projects = JSON.parse(localStorage.getItem("projects"));
        else
            this.projects = [{}];
    }

    get projects () { return this._projects; }

    set projects (arr) { this._projects = arr; }

    get selection () { return this._selection; }

    set selection (project) { 
        let mainProject = true;
        this._projects.forEach(p => {
            if (p.name === project) {
                this._selection = p; 
                selectionMade = false;
            }
        });

        if (mainProject) 
            this._selection = {name: "Projects", colour: ""};
    }

    get sidebar () { return this._sidebar; }

    set sidebar (elem) { this._sidebar = elem; }

    get popup () { return this._popup; }

    set popup (obj) { this._popup = obj; }

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

        // Create New Project Element
        const newProjectTitle = document.createElement("h1");
        newProjectTitle.textContent = "New Project";

        // Input and Label for New Project Name
        const newNameLabel = document.createElement("label");
        newNameLabel.for = "new-project-name";
        newNameLabel.textContent = "New Project Title";
        const newProjectName = document.createElement("input");
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
        projectEnter.textContent = "Enter";
        projectEnter.addEventListener("click", (e) => { 
            // TODO: Add to Projects List;
            this.popup.exit();
        });

        // this.newProject.appendChild(newProjectTitle);
        this.newProject.appendChild(newNameLabel);
        this.newProject.appendChild(newProjectName);
        this.newProject.appendChild(newColourLabel);
        this.newProject.appendChild(newColourSelector);
        this.newProject.appendChild(projectEnter);
    }

    add (name, colour) {
        if (this.#getProjectIndex(name) === -1)
            this.projects.push({name: name, colour: colour});
    }

    delete (name) {
        const projectIndex = this.#getProjectIndex(name);
        if (projectIndex !== -1)
            this.projects.splice(projectIndex, 1);
    }

    save () { localStorage.setItem("projects", this.projects); }

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

    setup () {
        this.sidebar = document.createElement("div");
        this.sidebar.classList.add("sidebar");

        this.newProject = document.createElement("div");
        this.newProject.classList.add("project-popup");

        // Add Projects Title
        const projectsTitle = document.createElement("h1");
        projectsTitle.textContent = "Projects";
        this.sidebar.appendChild(projectsTitle);

        // Add List Element
        const projectsList = document.createElement("ul");
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
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/layout.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkJBQTJCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxlQUFlLFVBQVUsZ0JBQWdCO0FBQzlFLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2xheW91dC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3BvcHVwLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcm9qZWN0LW1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvcHVwTWFuYWdlciBmcm9tIFwiLi9wb3B1cC1tYW5hZ2VyLmpzXCI7XG5pbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tYW5hZ2VyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgI3NlYXJjaGluZyA9IGZhbHNlO1xuICAgICNleHBhbmRlZCA9IGZhbHNlO1xuICAgICNwb3B1cE1hbmFnZXIgPSBuZXcgUG9wdXBNYW5hZ2VyKCk7XG4gICAgI3Byb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKHRoaXMuI3BvcHVwTWFuYWdlcik7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4jc2VhcmNoaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LnJlbW92ZShcImZpbmRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrc2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWFyY2hpbmdcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC5jb250YWlucyhcImZpbmRcIikpXG4gICAgICAgICAgICAgICAgdGhpcy4jc2VhcmNoaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuI2V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJhcmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiY2hhbmdlXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3RNYW5hZ2VyLmNvbGxhcHNlKCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmFyY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImNoYW5nZVwiKSlcbiAgICAgICAgICAgICAgICB0aGlzLiNleHBhbmRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIGdldCBjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udGFpbmVyOyB9XG5cbiAgICBzZXQgY29udGFpbmVyIChlbGVtKSB7IHRoaXMuX2NvbnRhaW5lciA9IGVsZW07IH1cblxuICAgIGdldCBuYXYgKCkgeyByZXR1cm4gdGhpcy5fbmF2OyB9XG5cbiAgICBzZXQgbmF2IChlbGVtKSB7IHRoaXMuX25hdiA9IGVsZW07IH1cblxuICAgIGdldCBzZWFyY2hiYXIgKCkgeyByZXR1cm4gdGhpcy5fc2VhcmNoYmFyOyB9XG5cbiAgICBzZXQgc2VhcmNoYmFyIChlbGVtKSB7IHRoaXMuX3NlYXJjaGJhciA9IGVsZW07IH1cblxuICAgIGdldCB0YXNrc2VhcmNoICgpIHsgcmV0dXJuIHRoaXMuX3Rhc2tzZWFyY2g7IH1cblxuICAgIHNldCB0YXNrc2VhcmNoIChlbGVtKSB7IHRoaXMuX3Rhc2tzZWFyY2ggPSBlbGVtOyB9XG5cbiAgICBnZXQgYmFyY29udGFpbmVyICgpIHsgcmV0dXJuIHRoaXMuX2JhcmNvbnRhaW5lcjsgfVxuXG4gICAgc2V0IGJhcmNvbnRhaW5lciAoZWxlbSkgeyB0aGlzLl9iYXJjb250YWluZXIgPSBlbGVtOyB9XG5cbiAgICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9tYWluOyB9XG5cbiAgICBzZXQgbWFpbiAoZWxlbSkgeyB0aGlzLl9tYWluID0gZWxlbTsgfVxuXG4gICAgZ2V0IGNvbnRlbnQgKCkgeyByZXR1cm4gdGhpcy5fY29udGVudDsgfVxuXG4gICAgc2V0IGNvbnRlbnQgKGVsZW0pIHsgdGhpcy5fY29udGVudCA9IGVsZW07IH1cblxuICAgIC8vIGdldCBzaWRlYmFyICgpIHsgcmV0dXJuIHRoaXMuX3NpZGViYXI7IH1cblxuICAgIC8vIHNldCBzaWRlYmFyIChlbGVtKSB7IHRoaXMuX3NpZGViYXIgPSBlbGVtOyB9XG5cbiAgICAjYWRkQnJvd3Nlckljb24gKCkge1xuICAgICAgICBjb25zdCBpY29uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICBpY29uTGluay5yZWwgPSBcInRvZG8taWNvblwiO1xuICAgICAgICBpY29uTGluay5ocmVmID0gVG9kb0ljb247XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaWNvbkxpbmspO1xuICAgIH1cblxuICAgICNnZXRNYWduaWZ5aW5nR2xhc3MgKCkge1xuICAgICAgICBjb25zdCBmb250QXdlc29tZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIGZvbnRBd2Vzb21lU2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzljMTFjZTRhOWIuanNcIjtcbiAgICAgICAgZm9udEF3ZXNvbWVTY3JpcHQuY3Jvc3NvcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZvbnRBd2Vzb21lU2NyaXB0KTtcblxuICAgICAgICBjb25zdCBzZWFyY2hHbGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBzZWFyY2hHbGFzcy5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICAgIHNlYXJjaEdsYXNzLmNsYXNzTGlzdC5hZGQoXCJmYS1tYWduaWZ5aW5nLWdsYXNzXCIpO1xuXG4gICAgICAgIHJldHVybiBzZWFyY2hHbGFzcztcbiAgICB9XG5cbiAgICAjYnVpbGROYXZQYW5lbCAoKSB7XG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5uYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBMb2dvXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gXCIjVE9ETzpcIlxuICAgICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZChsb2dvKTtcblxuICAgICAgICBjb25zdCB0b29sQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9vbEJveC5jbGFzc0xpc3QuYWRkKFwibmF2LXRvb2xib3hcIik7XG5cbiAgICAgICAgLy8gQWRkIFNlYXJjaCBCYXJcbiAgICAgICAgdGhpcy5zZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBnbGFzcyA9IHRoaXMuI2dldE1hZ25pZnlpbmdHbGFzcygpO1xuICAgICAgICB0aGlzLnNlYXJjaGJhci5hcHBlbmRDaGlsZChnbGFzcyk7XG4gICAgICAgIHRoaXMudGFza3NlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy50YXNrc2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNlYXJjaFwiKTtcbiAgICAgICAgdGhpcy50YXNrc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNlYXJjaGluZyBmb3IgJHt0aGlzLnRhc2tzZWFyY2gudmFsdWV9O2ApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlYXJjaGJhci5hcHBlbmRDaGlsZCh0aGlzLnRhc2tzZWFyY2gpO1xuICAgICAgICB0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoYmFyXCIpO1xuICAgICAgICB0aGlzLnNlYXJjaGJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgdGhpcy50YXNrc2VhcmNoLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBpZiAodGhpcy50YXNrc2VhcmNoLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzZWFyY2guZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvb2xCb3guYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2hiYXIpO1xuXG4gICAgICAgIC8vIEFkZCBTaWRlYmFyIGJ1dHRvblxuICAgICAgICB0aGlzLmJhcmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuYmFyY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5iYXJjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhcmNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlXCIpO1xuICAgICAgICAgICAgdGhpcy4jcHJvamVjdE1hbmFnZXIuZXhwYW5kKCk7XG4gICAgICAgICAgICAvLyB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJhck4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYmFyTi5jbGFzc0xpc3QuYWRkKGBiYXIke2l9YCk7XG4gICAgICAgICAgICB0aGlzLmJhcmNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXJOKTtcbiAgICAgICAgfVxuICAgICAgICB0b29sQm94LmFwcGVuZENoaWxkKHRoaXMuYmFyY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQodG9vbEJveCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5uYXYpO1xuICAgIH1cblxuICAgICNidWlsZENvbnRlbnQgKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgICAgICAgLy8gQWRkIFByb2plY3QgU3BlY2lmaWMgTGlzdFxuXG4gICAgICAgIC8vIEFkZCBBZGQtVG8tRG8gQnV0dG9uXG4gICAgICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG8tZG8tYnV0dG9uXCIpO1xuICAgICAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIFRvIERvXCI7XG4gICAgICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7fSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRvZG9CdXR0b24pO1xuXG4gICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuICAgIH1cblxuICAgICNidWlsZE1haW5FbGVtZW50ICgpIHtcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuIFxuICAgICAgICAvLyBBZGQgQ29udGVudCB0byBNYWluIERpdlxuICAgICAgICB0aGlzLiNidWlsZENvbnRlbnQoKTtcblxuICAgICAgICAvLyBBZGQgU2lkZWJhciB0byBNYWluIERpdlxuICAgICAgICB0aGlzLiNwcm9qZWN0TWFuYWdlci5zZXR1cCgpO1xuICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy4jcHJvamVjdE1hbmFnZXIuc2lkZWJhcik7XG5cbiAgICAgICAgLy8gQWRkIHRvIENvbnRhaW5lclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1haW4pO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIC8vIHRoaXMuI2FkZEJyb3dzZXJJY29uKCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBCdWlsZCBOYXZpZ2F0aW9uIFBhbmVsXG4gICAgICAgIHRoaXMuI2J1aWxkTmF2UGFuZWwoKTtcblxuICAgICAgICAvLyBCdWlsZCBNYWluIEVsZW1lbnRcbiAgICAgICAgdGhpcy4jYnVpbGRNYWluRWxlbWVudCgpO1xuXG4gICAgICAgIC8vIEJ1aWxkIFBvcC11cCBFbGVtZW50XG4gICAgICAgIHRoaXMuI3BvcHVwTWFuYWdlci5zZXR1cCgpO1xuICAgIH1cbn07IiwiY29uc3QgV0lORE9XX1RZUEVTID0ge1xuICAgIFBST0pFQ1Q6IDAsXG4gICAgVE9ETzogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gICAgZ2V0IHBvcHVwICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwOyB9XG5cbiAgICBzZXQgcG9wdXAgKGVsZW0pIHsgdGhpcy5fcG9wdXAgPSBlbGVtOyB9XG5cbiAgICBnZXQgcG9wdXBjb250ZW50ICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwY29udGVudDsgfVxuXG4gICAgc2V0IHBvcHVwY29udGVudCAoZWxlbSkgeyB0aGlzLl9wb3B1cGNvbnRlbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgb3ZlcmxheSAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5OyB9XG5cbiAgICBzZXQgb3ZlcmxheSAoZWxlbSkgeyB0aGlzLl9vdmVybGF5ID0gZWxlbTsgfVxuXG4gICAgZW50ZXIgKGVsZW0pIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9XG5cbiAgICBleGl0ICgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmV4aXQoKTsgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcblxuICAgICAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIGV4aXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBleGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIGV4aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImV4aXQtcG9wdXBcIik7XG4gICAgICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuZXhpdCgpOyB9KTtcbiAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcblxuICAgICAgICAvLyBBZGQgcG9wdXAgY29udGVudCBjb250YWluZXJcbiAgICAgICAgdGhpcy5wb3B1cGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtY29udGVudFwiKTtcbiAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwY29udGVudCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yIChwb3B1cCkge1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBbe31dO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0cyAoKSB7IHJldHVybiB0aGlzLl9wcm9qZWN0czsgfVxuXG4gICAgc2V0IHByb2plY3RzIChhcnIpIHsgdGhpcy5fcHJvamVjdHMgPSBhcnI7IH1cblxuICAgIGdldCBzZWxlY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0aW9uOyB9XG5cbiAgICBzZXQgc2VsZWN0aW9uIChwcm9qZWN0KSB7IFxuICAgICAgICBsZXQgbWFpblByb2plY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgaWYgKHAubmFtZSA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHA7IFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1hZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1haW5Qcm9qZWN0KSBcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHtuYW1lOiBcIlByb2plY3RzXCIsIGNvbG91cjogXCJcIn07XG4gICAgfVxuXG4gICAgZ2V0IHNpZGViYXIgKCkgeyByZXR1cm4gdGhpcy5fc2lkZWJhcjsgfVxuXG4gICAgc2V0IHNpZGViYXIgKGVsZW0pIHsgdGhpcy5fc2lkZWJhciA9IGVsZW07IH1cblxuICAgIGdldCBwb3B1cCAoKSB7IHJldHVybiB0aGlzLl9wb3B1cDsgfVxuXG4gICAgc2V0IHBvcHVwIChvYmopIHsgdGhpcy5fcG9wdXAgPSBvYmo7IH1cblxuICAgIGdldCBuZXdQcm9qZWN0ICgpIHsgcmV0dXJuIHRoaXMuX25ld1Byb2plY3Q7IH1cblxuICAgIHNldCBuZXdQcm9qZWN0IChlbGVtKSB7IHRoaXMuX25ld1Byb2plY3QgPSBlbGVtOyB9XG5cbiAgICAjZ2V0UHJvamVjdEluZGV4IChuYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5kZXggPSBpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0SW5kZXg7XG4gICAgfVxuXG4gICAgI2dldFJhbmRvbUNvbG91ciAoKSB7XG4gICAgICAgIGxldCBuID0gKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmICogMTAwMDAwMCkudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gYCMke24uc2xpY2UoMCwgNil9YDtcbiAgICB9XG5cbiAgICAjYnVpbGRQb3B1cCAoKSB7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIENyZWF0ZSBOZXcgUHJvamVjdCBFbGVtZW50XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgbmV3UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xuXG4gICAgICAgIC8vIElucHV0IGFuZCBMYWJlbCBmb3IgTmV3IFByb2plY3QgTmFtZVxuICAgICAgICBjb25zdCBuZXdOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIG5ld05hbWVMYWJlbC5mb3IgPSBcIm5ldy1wcm9qZWN0LW5hbWVcIjtcbiAgICAgICAgbmV3TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBUaXRsZVwiO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LW5hbWVcIik7XG4gICAgICAgIG5ld1Byb2plY3ROYW1lLmlkID0gXCJuZXctcHJvamVjdC1uYW1lXCI7XG5cbiAgICAgICAgLy8gSW5wdXQgYW5kIExhYmVsIGZvciBOZXcgUHJvamVjdCBDb2xvdXJcbiAgICAgICAgY29uc3QgbmV3Q29sb3VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIG5ld0NvbG91ckxhYmVsLmZvciA9IFwibmV3LXByb2plY3QtY29sb3VyXCI7XG4gICAgICAgIG5ld0NvbG91ckxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBDb2xvdXJcIjtcbiAgICAgICAgY29uc3QgbmV3Q29sb3VyU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG5ld0NvbG91clNlbGVjdG9yLnR5cGUgPSBcImNvbG9yXCI7XG4gICAgICAgIG5ld0NvbG91clNlbGVjdG9yLnZhbHVlID0gdGhpcy4jZ2V0UmFuZG9tQ29sb3VyKCk7XG4gICAgICAgIG5ld0NvbG91clNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1jb2xvdXJcIik7XG4gICAgICAgIG5ld0NvbG91clNlbGVjdG9yLmlkID0gXCJuZXctcHJvamVjdC1jb2xvdXJcIjtcblxuICAgICAgICAvLyBTdWJtaXQgQnV0dG9uXG4gICAgICAgIGNvbnN0IHByb2plY3RFbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RFbnRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zdWJtaXRcIik7XG4gICAgICAgIHByb2plY3RFbnRlci50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcbiAgICAgICAgcHJvamVjdEVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgICAgICAgICAgIC8vIFRPRE86IEFkZCB0byBQcm9qZWN0cyBMaXN0O1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5leGl0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMubmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICAgICAgICB0aGlzLm5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3TmFtZUxhYmVsKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0NvbG91ckxhYmVsKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0NvbG91clNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RFbnRlcik7XG4gICAgfVxuXG4gICAgYWRkIChuYW1lLCBjb2xvdXIpIHtcbiAgICAgICAgaWYgKHRoaXMuI2dldFByb2plY3RJbmRleChuYW1lKSA9PT0gLTEpXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2goe25hbWU6IG5hbWUsIGNvbG91cjogY29sb3VyfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMuI2dldFByb2plY3RJbmRleChuYW1lKTtcbiAgICAgICAgaWYgKHByb2plY3RJbmRleCAhPT0gLTEpXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHNhdmUgKCkgeyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIHRoaXMucHJvamVjdHMpOyB9XG5cbiAgICBsb2cgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgUHJvamVjdHM6XCIpO1xuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lICE9PSBcIlByb2plY3RzXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE5hbWU6ICR7cHJvamVjdC5uYW1lfTsgQ29sb3VyOiAke3Byb2plY3QuY29sb3VyfTtgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kICgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRcIik7XG4gICAgfVxuXG4gICAgY29sbGFwc2UgKCkge1xuICAgICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZFwiKTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAgICAgICB0aGlzLm5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIFByb2plY3RzIFRpdGxlXG4gICAgICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgICAgIHRoaXMuc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcblxuICAgICAgICAvLyBBZGQgTGlzdCBFbGVtZW50XG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBQcm9qZWN0XCI7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNidWlsZFBvcHVwKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmVudGVyKHRoaXMubmV3UHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9