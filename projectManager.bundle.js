"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["projectManager"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/projects.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdE1hbmFnZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCOztBQUV0Qix5QkFBeUI7O0FBRXpCLHFCQUFxQjs7QUFFckIseUJBQXlCOztBQUV6QixtQkFBbUI7O0FBRW5CLHNCQUFzQjs7QUFFdEIsbUJBQW1COztBQUVuQixzQkFBc0I7O0FBRXRCLHdCQUF3Qjs7QUFFeEIsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELG9CQUFvQjtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSwwQkFBMEI7O0FBRWhHO0FBQ0E7QUFDQSxzRUFBc0UsU0FBUztBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQywyQkFBMkI7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZSxVQUFVLGdCQUFnQjtBQUM5RSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xuICAgIGNvbnN0cnVjdG9yIChwb3B1cCwgdG9kb3MpIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHBvcHVwO1xuICAgICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG5cbiAgICAgICAgLy8gQnVpbGQgU2lkZWJhciBET00gRWxlbWVudFxuICAgICAgICB0aGlzLnNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgTmV3LVByb2plY3QgUG9wdXAgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXBvcHVwXCIpO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSB8fCBcIltdXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgICAgIHRoaXMudG9kb3MucHJvamVjdHMgPSB0aGlzLnByb2plY3RzO1xuXG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3RzICgpIHsgcmV0dXJuIHRoaXMuX3Byb2plY3RzOyB9XG5cbiAgICBzZXQgcHJvamVjdHMgKGFycikgeyB0aGlzLl9wcm9qZWN0cyA9IGFycjsgfVxuXG4gICAgZ2V0IHNpZGViYXIgKCkgeyByZXR1cm4gdGhpcy5fc2lkZWJhcjsgfVxuXG4gICAgc2V0IHNpZGViYXIgKGVsZW0pIHsgdGhpcy5fc2lkZWJhciA9IGVsZW07IH1cblxuICAgIGdldCBwb3B1cCAoKSB7IHJldHVybiB0aGlzLl9wb3B1cDsgfVxuXG4gICAgc2V0IHBvcHVwIChvYmopIHsgdGhpcy5fcG9wdXAgPSBvYmo7IH1cblxuICAgIGdldCB0b2RvcyAoKSB7IHJldHVybiB0aGlzLl90b2RvczsgfVxuXG4gICAgc2V0IHRvZG9zIChvYmopIHsgdGhpcy5fdG9kb3MgPSBvYmo7IH1cblxuICAgIGdldCBuZXdQcm9qZWN0ICgpIHsgcmV0dXJuIHRoaXMuX25ld1Byb2plY3Q7IH1cblxuICAgIHNldCBuZXdQcm9qZWN0IChlbGVtKSB7IHRoaXMuX25ld1Byb2plY3QgPSBlbGVtOyB9XG5cbiAgICAjZ2V0UHJvamVjdEluZGV4IChuYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5kZXggPSBpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0SW5kZXg7XG4gICAgfVxuXG4gICAgI2dldFJhbmRvbUNvbG91ciAoKSB7XG4gICAgICAgIGxldCBuID0gKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmICogMTAwMDAwMCkudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gYCMke24uc2xpY2UoMCwgNil9YDtcbiAgICB9XG5cbiAgICAjYnVpbGRQb3B1cCAoKSB7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIElucHV0IGFuZCBMYWJlbCBmb3IgTmV3IFByb2plY3QgTmFtZVxuICAgICAgICBjb25zdCBuZXdOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIG5ld05hbWVMYWJlbC5mb3IgPSBcIm5ldy1wcm9qZWN0LW5hbWVcIjtcbiAgICAgICAgbmV3TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBUaXRsZVwiO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUudHlwZSA9IFwidGV4dFwiXG4gICAgICAgIG5ld1Byb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1uYW1lXCIpO1xuICAgICAgICBuZXdQcm9qZWN0TmFtZS5pZCA9IFwibmV3LXByb2plY3QtbmFtZVwiO1xuXG4gICAgICAgIC8vIElucHV0IGFuZCBMYWJlbCBmb3IgTmV3IFByb2plY3QgQ29sb3VyXG4gICAgICAgIGNvbnN0IG5ld0NvbG91ckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBuZXdDb2xvdXJMYWJlbC5mb3IgPSBcIm5ldy1wcm9qZWN0LWNvbG91clwiO1xuICAgICAgICBuZXdDb2xvdXJMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgQ29sb3VyXCI7XG4gICAgICAgIGNvbnN0IG5ld0NvbG91clNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBuZXdDb2xvdXJTZWxlY3Rvci50eXBlID0gXCJjb2xvclwiO1xuICAgICAgICBuZXdDb2xvdXJTZWxlY3Rvci52YWx1ZSA9IHRoaXMuI2dldFJhbmRvbUNvbG91cigpO1xuICAgICAgICBuZXdDb2xvdXJTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtY29sb3VyXCIpO1xuICAgICAgICBuZXdDb2xvdXJTZWxlY3Rvci5pZCA9IFwibmV3LXByb2plY3QtY29sb3VyXCI7XG5cbiAgICAgICAgLy8gU3VibWl0IEJ1dHRvblxuICAgICAgICBjb25zdCBwcm9qZWN0RW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0RW50ZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc3VibWl0XCIpO1xuICAgICAgICBwcm9qZWN0RW50ZXIudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBwcm9qZWN0RW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAgICAgICAgICAgaWYgKG5ld1Byb2plY3ROYW1lLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQobmV3UHJvamVjdE5hbWUudmFsdWUsIG5ld0NvbG91clNlbGVjdG9yLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLmV4aXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGViYXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLiNidWlsZFNpZGViYXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBwcm9qZWN0IHRpdGxlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3TmFtZUxhYmVsKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0NvbG91ckxhYmVsKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0NvbG91clNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RFbnRlcik7XG4gICAgfVxuXG4gICAgI2J1aWxkU2lkZWJhciAoKSB7XG4gICAgICAgIC8vIEFkZCBQcm9qZWN0cyBUaXRsZVxuICAgICAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtdGl0bGVcIik7XG4gICAgICAgIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgICAgIHByb2plY3RzVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuc2V0RGVmYXVsdCgpOyB9KTtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuXG4gICAgICAgIC8vIEFkZCBMaXN0IEVsZW1lbnRcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWxpc3RcIik7XG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIGlmIChwLm5hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXNlbGVjdFwiKVxuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy50b2Rvcy5zZWxlY3Rpb24gPSBwIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3VyQ29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY29sb3VyQ29kZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb2xvdXItY29kZVwiKTtcbiAgICAgICAgICAgICAgICBjb2xvdXJDb2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kLWNvbG9yOiAke3AuY29sb3VyfWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcC5uYW1lO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgcHJvamVjdERlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jcm9zcy1idXR0b25cIik7XG4gICAgICAgICAgICAgICAgcHJvamVjdERlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgICAgICAgICAgICAgIHByb2plY3REZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZShwLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKGNvbG91ckNvZGUpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGVsQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdFwiKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBQcm9qZWN0XCI7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNidWlsZFBvcHVwKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmVudGVyKHRoaXMubmV3UHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhZGQgKG5hbWUsIGNvbG91cikge1xuICAgICAgICBpZiAodGhpcy4jZ2V0UHJvamVjdEluZGV4KG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHtuYW1lOiBuYW1lLCBjb2xvdXI6IGNvbG91cn0pO1xuICAgICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGUgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy4jZ2V0UHJvamVjdEluZGV4KG5hbWUpO1xuICAgICAgICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2F2ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRvZG9zLnNlbGVjdGlvbi5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNpZGViYXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy4jYnVpbGRTaWRlYmFyKCk7XG4gICAgfVxuXG4gICAgc2F2ZSAoKSB7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpOyB9XG5cbiAgICBsb2cgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgUHJvamVjdHM6XCIpO1xuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lICE9PSBcIlByb2plY3RzXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE5hbWU6ICR7cHJvamVjdC5uYW1lfTsgQ29sb3VyOiAke3Byb2plY3QuY29sb3VyfTtgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kICgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRcIik7XG4gICAgfVxuXG4gICAgY29sbGFwc2UgKCkge1xuICAgICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZFwiKTtcbiAgICB9XG5cbiAgICBzZXREZWZhdWx0ICgpIHtcbiAgICAgICAgdGhpcy50b2Rvcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBuYW1lOiBcIlByb2plY3RzXCIsXG4gICAgICAgICAgICBjb2xvdXI6IFwiXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMuI2J1aWxkU2lkZWJhcigpO1xuICAgICAgICB0aGlzLnNldERlZmF1bHQoKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==