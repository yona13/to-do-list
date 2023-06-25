"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["projectManager"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/project-manager.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdE1hbmFnZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCLHlCQUF5Qjs7QUFFekIscUJBQXFCOztBQUVyQix5QkFBeUI7O0FBRXpCLG1CQUFtQjs7QUFFbkIsc0JBQXNCOztBQUV0QixtQkFBbUI7O0FBRW5CLHNCQUFzQjs7QUFFdEIsd0JBQXdCOztBQUV4Qiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELG9CQUFvQjtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esc0VBQXNFLFNBQVM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDJCQUEyQjtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGVBQWUsVUFBVSxnQkFBZ0I7QUFDOUUsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3Byb2plY3QtbWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IgKHBvcHVwLCB0b2Rvcykge1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG4gICAgICAgIHRoaXMudG9kb3MgPSB0b2RvcztcblxuICAgICAgICAvLyBCdWlsZCBTaWRlYmFyIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAgICAgICAvLyBCdWlsZCBOZXctUHJvamVjdCBQb3B1cCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLm5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcG9wdXBcIik7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3RzICgpIHsgcmV0dXJuIHRoaXMuX3Byb2plY3RzOyB9XG5cbiAgICBzZXQgcHJvamVjdHMgKGFycikgeyB0aGlzLl9wcm9qZWN0cyA9IGFycjsgfVxuXG4gICAgZ2V0IHNpZGViYXIgKCkgeyByZXR1cm4gdGhpcy5fc2lkZWJhcjsgfVxuXG4gICAgc2V0IHNpZGViYXIgKGVsZW0pIHsgdGhpcy5fc2lkZWJhciA9IGVsZW07IH1cblxuICAgIGdldCBwb3B1cCAoKSB7IHJldHVybiB0aGlzLl9wb3B1cDsgfVxuXG4gICAgc2V0IHBvcHVwIChvYmopIHsgdGhpcy5fcG9wdXAgPSBvYmo7IH1cblxuICAgIGdldCB0b2RvcyAoKSB7IHJldHVybiB0aGlzLl90b2RvczsgfVxuXG4gICAgc2V0IHRvZG9zIChvYmopIHsgdGhpcy5fdG9kb3MgPSBvYmo7IH1cblxuICAgIGdldCBuZXdQcm9qZWN0ICgpIHsgcmV0dXJuIHRoaXMuX25ld1Byb2plY3Q7IH1cblxuICAgIHNldCBuZXdQcm9qZWN0IChlbGVtKSB7IHRoaXMuX25ld1Byb2plY3QgPSBlbGVtOyB9XG5cbiAgICAjZ2V0UHJvamVjdEluZGV4IChuYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5kZXggPSBpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0SW5kZXg7XG4gICAgfVxuXG4gICAgI2dldFJhbmRvbUNvbG91ciAoKSB7XG4gICAgICAgIGxldCBuID0gKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmICogMTAwMDAwMCkudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gYCMke24uc2xpY2UoMCwgNil9YDtcbiAgICB9XG5cbiAgICAjYnVpbGRQb3B1cCAoKSB7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIElucHV0IGFuZCBMYWJlbCBmb3IgTmV3IFByb2plY3QgTmFtZVxuICAgICAgICBjb25zdCBuZXdOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIG5ld05hbWVMYWJlbC5mb3IgPSBcIm5ldy1wcm9qZWN0LW5hbWVcIjtcbiAgICAgICAgbmV3TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBUaXRsZVwiO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUudHlwZSA9IFwidGV4dFwiXG4gICAgICAgIG5ld1Byb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1uYW1lXCIpO1xuICAgICAgICBuZXdQcm9qZWN0TmFtZS5pZCA9IFwibmV3LXByb2plY3QtbmFtZVwiO1xuXG4gICAgICAgIC8vIElucHV0IGFuZCBMYWJlbCBmb3IgTmV3IFByb2plY3QgQ29sb3VyXG4gICAgICAgIGNvbnN0IG5ld0NvbG91ckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBuZXdDb2xvdXJMYWJlbC5mb3IgPSBcIm5ldy1wcm9qZWN0LWNvbG91clwiO1xuICAgICAgICBuZXdDb2xvdXJMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgQ29sb3VyXCI7XG4gICAgICAgIGNvbnN0IG5ld0NvbG91clNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBuZXdDb2xvdXJTZWxlY3Rvci50eXBlID0gXCJjb2xvclwiO1xuICAgICAgICBuZXdDb2xvdXJTZWxlY3Rvci52YWx1ZSA9IHRoaXMuI2dldFJhbmRvbUNvbG91cigpO1xuICAgICAgICBuZXdDb2xvdXJTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtY29sb3VyXCIpO1xuICAgICAgICBuZXdDb2xvdXJTZWxlY3Rvci5pZCA9IFwibmV3LXByb2plY3QtY29sb3VyXCI7XG5cbiAgICAgICAgLy8gU3VibWl0IEJ1dHRvblxuICAgICAgICBjb25zdCBwcm9qZWN0RW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0RW50ZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc3VibWl0XCIpO1xuICAgICAgICBwcm9qZWN0RW50ZXIudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBwcm9qZWN0RW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAgICAgICAgICAgaWYgKG5ld1Byb2plY3ROYW1lLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQobmV3UHJvamVjdE5hbWUudmFsdWUsIG5ld0NvbG91clNlbGVjdG9yLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLmV4aXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGViYXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLiNidWlsZFNpZGViYXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBwcm9qZWN0IHRpdGxlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3TmFtZUxhYmVsKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0NvbG91ckxhYmVsKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0NvbG91clNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RFbnRlcik7XG4gICAgfVxuXG4gICAgI2J1aWxkU2lkZWJhciAoKSB7XG4gICAgICAgIC8vIEFkZCBQcm9qZWN0cyBUaXRsZVxuICAgICAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgICAgICBwcm9qZWN0c1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLnNldERlZmF1bHQoKTsgfSk7XG4gICAgICAgIHRoaXMuc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcblxuICAgICAgICAvLyBBZGQgTGlzdCBFbGVtZW50XG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgaWYgKHAubmFtZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9kb3Muc2VsZWN0aW9uID0gcDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvdXJDb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBjb2xvdXJDb2RlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbG91ci1jb2RlXCIpO1xuICAgICAgICAgICAgICAgIGNvbG91ckNvZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQtY29sb3I6ICR7cC5jb2xvdXJ9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwLm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKGNvbG91ckNvZGUpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBQcm9qZWN0XCI7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNidWlsZFBvcHVwKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmVudGVyKHRoaXMubmV3UHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhZGQgKG5hbWUsIGNvbG91cikge1xuICAgICAgICBpZiAodGhpcy4jZ2V0UHJvamVjdEluZGV4KG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHtuYW1lOiBuYW1lLCBjb2xvdXI6IGNvbG91cn0pO1xuICAgICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGUgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy4jZ2V0UHJvamVjdEluZGV4KG5hbWUpO1xuICAgICAgICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgc2F2ZSAoKSB7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpOyB9XG5cbiAgICBsb2cgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgUHJvamVjdHM6XCIpO1xuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lICE9PSBcIlByb2plY3RzXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE5hbWU6ICR7cHJvamVjdC5uYW1lfTsgQ29sb3VyOiAke3Byb2plY3QuY29sb3VyfTtgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kICgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRcIik7XG4gICAgfVxuXG4gICAgY29sbGFwc2UgKCkge1xuICAgICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZFwiKTtcbiAgICB9XG5cbiAgICBzZXREZWZhdWx0ICgpIHtcbiAgICAgICAgdGhpcy50b2Rvcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBuYW1lOiBcIlByb2plY3RzXCIsXG4gICAgICAgICAgICBjb2xvdXI6IFwiXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMuI2J1aWxkU2lkZWJhcigpO1xuICAgICAgICB0aGlzLnNldERlZmF1bHQoKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==