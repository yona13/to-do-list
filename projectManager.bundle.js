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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/project-manager.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdE1hbmFnZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUEsc0JBQXNCOztBQUV0Qix5QkFBeUI7O0FBRXpCLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBLHFCQUFxQjs7QUFFckIseUJBQXlCOztBQUV6QixtQkFBbUI7O0FBRW5CLHNCQUFzQjs7QUFFdEIsd0JBQXdCOztBQUV4Qiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDJCQUEyQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZSxVQUFVLGdCQUFnQjtBQUM5RSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcm9qZWN0LW1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yIChwb3B1cCkge1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBbe31dO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0cyAoKSB7IHJldHVybiB0aGlzLl9wcm9qZWN0czsgfVxuXG4gICAgc2V0IHByb2plY3RzIChhcnIpIHsgdGhpcy5fcHJvamVjdHMgPSBhcnI7IH1cblxuICAgIGdldCBzZWxlY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0aW9uOyB9XG5cbiAgICBzZXQgc2VsZWN0aW9uIChwcm9qZWN0KSB7IFxuICAgICAgICBsZXQgbWFpblByb2plY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgaWYgKHAubmFtZSA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHA7IFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1hZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1haW5Qcm9qZWN0KSBcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHtuYW1lOiBcIlByb2plY3RzXCIsIGNvbG91cjogXCJcIn07XG4gICAgfVxuXG4gICAgZ2V0IHNpZGViYXIgKCkgeyByZXR1cm4gdGhpcy5fc2lkZWJhcjsgfVxuXG4gICAgc2V0IHNpZGViYXIgKGVsZW0pIHsgdGhpcy5fc2lkZWJhciA9IGVsZW07IH1cblxuICAgIGdldCBwb3B1cCAoKSB7IHJldHVybiB0aGlzLl9wb3B1cDsgfVxuXG4gICAgc2V0IHBvcHVwIChvYmopIHsgdGhpcy5fcG9wdXAgPSBvYmo7IH1cblxuICAgIGdldCBuZXdQcm9qZWN0ICgpIHsgcmV0dXJuIHRoaXMuX25ld1Byb2plY3Q7IH1cblxuICAgIHNldCBuZXdQcm9qZWN0IChlbGVtKSB7IHRoaXMuX25ld1Byb2plY3QgPSBlbGVtOyB9XG5cbiAgICAjZ2V0UHJvamVjdEluZGV4IChuYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5kZXggPSBpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0SW5kZXg7XG4gICAgfVxuXG4gICAgI2dldFJhbmRvbUNvbG91ciAoKSB7XG4gICAgICAgIGxldCBuID0gKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmICogMTAwMDAwMCkudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gYCMke24uc2xpY2UoMCwgNil9YDtcbiAgICB9XG5cbiAgICAjYnVpbGRQb3B1cCAoKSB7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIENyZWF0ZSBOZXcgUHJvamVjdCBFbGVtZW50XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgbmV3UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xuXG4gICAgICAgIC8vIElucHV0IGFuZCBMYWJlbCBmb3IgTmV3IFByb2plY3QgTmFtZVxuICAgICAgICBjb25zdCBuZXdOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIG5ld05hbWVMYWJlbC5mb3IgPSBcIm5ldy1wcm9qZWN0LW5hbWVcIjtcbiAgICAgICAgbmV3TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBUaXRsZVwiO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LW5hbWVcIik7XG4gICAgICAgIG5ld1Byb2plY3ROYW1lLmlkID0gXCJuZXctcHJvamVjdC1uYW1lXCI7XG5cbiAgICAgICAgLy8gSW5wdXQgYW5kIExhYmVsIGZvciBOZXcgUHJvamVjdCBDb2xvdXJcbiAgICAgICAgY29uc3QgbmV3Q29sb3VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIG5ld0NvbG91ckxhYmVsLmZvciA9IFwibmV3LXByb2plY3QtY29sb3VyXCI7XG4gICAgICAgIG5ld0NvbG91ckxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBDb2xvdXJcIjtcbiAgICAgICAgY29uc3QgbmV3Q29sb3VyU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG5ld0NvbG91clNlbGVjdG9yLnR5cGUgPSBcImNvbG9yXCI7XG4gICAgICAgIG5ld0NvbG91clNlbGVjdG9yLnZhbHVlID0gdGhpcy4jZ2V0UmFuZG9tQ29sb3VyKCk7XG4gICAgICAgIG5ld0NvbG91clNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1jb2xvdXJcIik7XG4gICAgICAgIG5ld0NvbG91clNlbGVjdG9yLmlkID0gXCJuZXctcHJvamVjdC1jb2xvdXJcIjtcblxuICAgICAgICAvLyBTdWJtaXQgQnV0dG9uXG4gICAgICAgIGNvbnN0IHByb2plY3RFbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RFbnRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zdWJtaXRcIik7XG4gICAgICAgIHByb2plY3RFbnRlci50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcbiAgICAgICAgcHJvamVjdEVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgICAgICAgICAgIC8vIFRPRE86IEFkZCB0byBQcm9qZWN0cyBMaXN0O1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5leGl0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMubmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICAgICAgICB0aGlzLm5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3TmFtZUxhYmVsKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0NvbG91ckxhYmVsKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0NvbG91clNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RFbnRlcik7XG4gICAgfVxuXG4gICAgYWRkIChuYW1lLCBjb2xvdXIpIHtcbiAgICAgICAgaWYgKHRoaXMuI2dldFByb2plY3RJbmRleChuYW1lKSA9PT0gLTEpXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2goe25hbWU6IG5hbWUsIGNvbG91cjogY29sb3VyfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMuI2dldFByb2plY3RJbmRleChuYW1lKTtcbiAgICAgICAgaWYgKHByb2plY3RJbmRleCAhPT0gLTEpXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHNhdmUgKCkgeyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIHRoaXMucHJvamVjdHMpOyB9XG5cbiAgICBsb2cgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgUHJvamVjdHM6XCIpO1xuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lICE9PSBcIlByb2plY3RzXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE5hbWU6ICR7cHJvamVjdC5uYW1lfTsgQ29sb3VyOiAke3Byb2plY3QuY29sb3VyfTtgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kICgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRcIik7XG4gICAgfVxuXG4gICAgY29sbGFwc2UgKCkge1xuICAgICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZFwiKTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAgICAgICB0aGlzLm5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIFByb2plY3RzIFRpdGxlXG4gICAgICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgICAgIHRoaXMuc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcblxuICAgICAgICAvLyBBZGQgTGlzdCBFbGVtZW50XG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBQcm9qZWN0XCI7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNidWlsZFBvcHVwKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmVudGVyKHRoaXMubmV3UHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9