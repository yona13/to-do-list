"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["menu"],{

/***/ "./src/js/content.js":
/*!***************************!*\
  !*** ./src/js/content.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _custom_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-select.js */ "./src/js/custom-select.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");
/* harmony import */ var _dom_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-element.js */ "./src/js/dom-element.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");





class Content extends _dom_element_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
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

        // TODO: Add To-Do Description

        // Add Input with Label for Project Selection
        const projectLabel = document.createElement("label");
        projectLabel.for = "project-select";
        projectLabel.textContent = "Project";
        const options = [];
        this.data.projects.forEach(p => { options.push(p.name); });
        const projectSelect = new _custom_select_js__WEBPACK_IMPORTED_MODULE_0__["default"](options);
        this.popup.container.addEventListener("click", (e) => {
            projectSelect.close();
        });

        // Add Input with Label for New-To-Do Due-Date
        const dueDateLabel = document.createElement("label");
        dueDateLabel.for = "due-date";
        dueDateLabel.textContent = "Due Date";
        const dueDate = document.createElement("input");
        dueDate.type = "date";
        dueDate.id = "due-date";
        dueDate.min = new Date().toISOString().split("T")[0];

        // Append Elements to New-To-Do
        newToDo.appendChild(titleLabel);
        newToDo.appendChild(titleInput);
        // TODO: Append To-Do Description
        newToDo.appendChild(projectLabel);
        newToDo.appendChild(projectSelect.select);
        newToDo.appendChild(dueDateLabel);
        newToDo.appendChild(dueDate);

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

        // TODO: Add To-Do Table

        // Add Create To-Do Button
        const create  = document.createElement("button");
        create.classList.add("add-to-do");
        create.textContent = "+ To Do";
        create.addEventListener("click", (e) => {
            this.#popup();
        });

        this.container.appendChild(contentTitle);
        // TODO: Append To-Do Child to Container
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
    constructor (arr) {
        this.select = document.createElement("div");
        this.select.classList.add("dropdown");
        this.#build(arr);

        // Add Event Listeners
        this.select.addEventListener("click", (e) => {
            e.stopPropagation();
            this.select.classList.toggle("open");
        });
    }

    get select () { return this._select; }

    set select (elem) { this._select = elem; }

    get placeHolder () { return this._placeHolder; }

    set placeHolder (elem) { this._placeHolder = elem; }

    get id () { return this._select.id; }

    set id (identifier) { this._select.id = identifier; } 

    close () {
        this.select.classList.remove("open");
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
                this.placeHolder.value = e.currentTarget.textContent;
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
        submit.classList.add("project-submit");
        submit.textContent = "Submit";
        submit.addEventListener("click", (e) => {
            if (this.#submit(titleInput.value, colourInput.value)) {
                this.popup.exit();
                this.#render();
            } else
                window.alert("Please enter a project title!");
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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by1kby1saXN0Ly4vc3JjL2pzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jdXN0b20tc2VsZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2RvbS1lbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSBcIi4vY3VzdG9tLXNlbGVjdC5qc1wiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9wb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgRE9NRWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtEYXRhfSBkYXRhIFxuICAgICAqIEBwYXJhbSB7UG9wdXB9IHBvcHVwIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChkYXRhLCBwb3B1cCkge1xuICAgICAgICBzdXBlcihcImNvbnRlbnRcIik7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHBvcHVwO1xuXG4gICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgIH1cblxuICAgIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMuX2RhdGE7IH1cblxuICAgIHNldCBkYXRhIChhcnIpIHsgdGhpcy5fZGF0YSA9IGFycjsgfVxuXG4gICAgZ2V0IHBvcHVwICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwOyB9XG5cbiAgICBzZXQgcG9wdXAgKG9iaikgeyB0aGlzLl9wb3B1cCA9IG9iajsgfVxuXG4gICAgZ2V0IHRpdGxlICgpIHsgcmV0dXJuIHRoaXMuX3RpdGxlOyB9XG5cbiAgICBzZXQgdGl0bGUgKG5hbWUpIHsgXG4gICAgICAgIHRoaXMuX3RpdGxlID0gbmFtZTtcbiAgICAgICAgdGhpcy4jcmVuZGVyKClcbiAgICB9XG5cbiAgICAjcG9wdXAgKCkge1xuICAgICAgICAvLyBDcmVhdGUgTmV3LVRvLURvIEVsZW1lbnQgZm9yIFBvcHVwXG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdUb0RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcHVwXCIpO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBOZXctVG8tRG8gVGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgdGl0bGVMYWJlbC5mb3IgPSBcIm5ldy10by1kby10aXRsZVwiO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgVG8tRG8gVGl0bGVcIjtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSBcIm5ldy10by1kby10aXRsZVwiO1xuXG4gICAgICAgIC8vIFRPRE86IEFkZCBUby1EbyBEZXNjcmlwdGlvblxuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBQcm9qZWN0IFNlbGVjdGlvblxuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByb2plY3RMYWJlbC5mb3IgPSBcInByb2plY3Qtc2VsZWN0XCI7XG4gICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKHAgPT4geyBvcHRpb25zLnB1c2gocC5uYW1lKTsgfSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBuZXcgQ3VzdG9tU2VsZWN0KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnBvcHVwLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IHdpdGggTGFiZWwgZm9yIE5ldy1Uby1EbyBEdWUtRGF0ZVxuICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5mb3IgPSBcImR1ZS1kYXRlXCI7XG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGR1ZURhdGUuaWQgPSBcImR1ZS1kYXRlXCI7XG4gICAgICAgIGR1ZURhdGUubWluID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gTmV3LVRvLURvXG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIC8vIFRPRE86IEFwcGVuZCBUby1EbyBEZXNjcmlwdGlvblxuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdC5zZWxlY3QpO1xuICAgICAgICBuZXdUb0RvLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIG5ld1RvRG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICAgICAgLy8gRW50ZXIgUG9wdXBcbiAgICAgICAgdGhpcy5wb3B1cC5lbnRlcihuZXdUb0RvKTtcbiAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgICNyZW5kZXIgKCkge1xuICAgICAgICAvLyBDbGVhciBDb250ZW50XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gQWRkIFRpdGxlIHRvIENvbnRlbnRcbiAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG5cbiAgICAgICAgLy8gVE9ETzogQWRkIFRvLURvIFRhYmxlXG5cbiAgICAgICAgLy8gQWRkIENyZWF0ZSBUby1EbyBCdXR0b25cbiAgICAgICAgY29uc3QgY3JlYXRlICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvLWRvXCIpO1xuICAgICAgICBjcmVhdGUudGV4dENvbnRlbnQgPSBcIisgVG8gRG9cIjtcbiAgICAgICAgY3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jcG9wdXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcbiAgICAgICAgLy8gVE9ETzogQXBwZW5kIFRvLURvIENoaWxkIHRvIENvbnRhaW5lclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGUpO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU2VsZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAoYXJyKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duXCIpO1xuICAgICAgICB0aGlzLiNidWlsZChhcnIpO1xuXG4gICAgICAgIC8vIEFkZCBFdmVudCBMaXN0ZW5lcnNcbiAgICAgICAgdGhpcy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3QgKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0OyB9XG5cbiAgICBzZXQgc2VsZWN0IChlbGVtKSB7IHRoaXMuX3NlbGVjdCA9IGVsZW07IH1cblxuICAgIGdldCBwbGFjZUhvbGRlciAoKSB7IHJldHVybiB0aGlzLl9wbGFjZUhvbGRlcjsgfVxuXG4gICAgc2V0IHBsYWNlSG9sZGVyIChlbGVtKSB7IHRoaXMuX3BsYWNlSG9sZGVyID0gZWxlbTsgfVxuXG4gICAgZ2V0IGlkICgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdC5pZDsgfVxuXG4gICAgc2V0IGlkIChpZGVudGlmaWVyKSB7IHRoaXMuX3NlbGVjdC5pZCA9IGlkZW50aWZpZXI7IH0gXG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgIH1cblxuICAgICNidWlsZCAoYXJyKSB7XG4gICAgICAgIC8vIENyZWF0ZSBQbGFjZWhvbGRlciBJbnB1dFxuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgUHJvamVjdFwiO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgICAvLyBDcmVhdGUgT3B0aW9ucyBMaXN0XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm9wdGlvbnNcIik7XG4gICAgICAgIGFyci5mb3JFYWNoKG8gPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvO1xuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIudmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEVsZW1lbnRzIHRvIEN1c3RvbSBTZWxlY3RcbiAgICAgICAgdGhpcy5zZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy5wbGFjZUhvbGRlcik7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKVxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSB8fCBcIltdXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3RzICgpIHsgcmV0dXJuIHRoaXMuX3Byb2plY3RzOyB9XG5cbiAgICBzZXQgcHJvamVjdHMgKGFycikgeyB0aGlzLl9wcm9qZWN0cyA9IGFycjsgfVxuXG4gICAgZ2V0IHRvZG9zICgpIHsgcmV0dXJuIHRoaXMuX3RvZG9zOyB9XG5cbiAgICBzZXQgdG9kb3MgKGFycikgeyB0aGlzLl90b2RvcyA9IGFycjsgfVxuXG4gICAgI2luZGV4T2ZQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9qZWN0c1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdCAobmFtZSwgY29sb3VyKSB7XG4gICAgICAgIGlmICh0aGlzLiNpbmRleE9mUHJvamVjdChuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh7bmFtZTogbmFtZSwgY29sb3VyOiBjb2xvdXJ9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInByb2plY3RzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdCAobmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2luZGV4T2ZQcm9qZWN0KG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmUgKGtleSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAga2V5ID09PSBcInByb2plY3RzXCIgPyB0aGlzLnByb2plY3RzIDogdGhpcy50b2Rvc1xuICAgICAgICApKTtcbiAgICB9IFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfSBcbn07IiwiaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9wb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgRE9NRWxlbWVudCB7XG4gICAgI2V4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0RhdGF9IGRhdGEgXG4gICAgICogQHBhcmFtIHtDb250ZW50fSBjb250ZW50IFxuICAgICAqIEBwYXJhbSB7UG9wdXB9IHBvcHVwIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChkYXRhLCBjb250ZW50LCBwb3B1cCkge1xuICAgICAgICBzdXBlcihcInNpZGViYXJcIik7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHBvcHVwO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3RvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgYmFycyBmb3IgQnV0dG9uXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoYGJhciR7aX1gKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmFwcGVuZENoaWxkKGJhcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgY29udGVudC50aXRsZSA9IFwiUHJvamVjdHNcIjsgLy8gZGVmYXVsdDtcbiAgICB9XG5cbiAgICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgICBzZXQgZGF0YSAob2JqKSB7IHRoaXMuX2RhdGEgPSBvYmo7IH1cblxuICAgIGdldCBjb250ZW50ICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7IH1cblxuICAgIHNldCBjb250ZW50IChvYmopIHsgdGhpcy5fY29udGVudCA9IG9iajsgfVxuXG4gICAgZ2V0IHBvcHVwICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwOyB9XG5cbiAgICBzZXQgcG9wdXAgKG9iaikgeyB0aGlzLl9wb3B1cCA9IG9iajsgfVxuXG4gICAgZ2V0IGJ1dHRvbiAoKSB7IHJldHVybiB0aGlzLl9idXR0b247IH1cblxuICAgIHNldCBidXR0b24gKGVsZW0pIHsgdGhpcy5fYnV0dG9uID0gZWxlbTsgfVxuXG4gICAgdG9nZ2xlICgpIHtcbiAgICAgICAgLy8gSWYgU2lkZWJhciBpcyBhY3RpdmF0ZWQsIHJlc2V0IFNpZGViYXIgKHRhYmxldCB2aWV3KVxuICAgICAgICBpZiAodGhpcy4jZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuI2V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kXCIpO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBlbmFibGUgU2lkZWJhclxuICAgICAgICBlbHNlIGlmICh0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGFuZ2VcIikpXG4gICAgICAgICAgICB0aGlzLiNleHBhbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgI3RvZ2dsZSAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRcIik7XG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XG4gICAgfVxuXG4gICAgI3N1Ym1pdCAobmFtZSwgY29sb3VyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhLmFkZFByb2plY3QobmFtZSwgY29sb3VyKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgI3BvcHVwICgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIE5ldy1Qcm9qZWN0IEVsZW1lbnQgZm9yIFBvcHVwXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXBvcHVwXCIpO1xuXG4gICAgICAgIC8vIEFkZCBJbnB1dCB3aXRoIExhYmVsIGZvciBOZXctUHJvamVjdCBUaXRsZVxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0aXRsZUxhYmVsLmZvciA9IFwibmV3LXByb2plY3QtdGl0bGVcIjtcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgVGl0bGVcIjtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSBcIm5ldy1wcm9qZWN0LXRpdGxlXCI7XG5cbiAgICAgICAgLy8gQWRkIElucHV0IGFuZCBMYWJlbCBmb3IgTmV3LVByb2plY3QgQ29sb3VyXG4gICAgICAgIGNvbnN0IGNvbG91ckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBjb2xvdXJMYWJlbC5mb3IgPSBcIm5ldy1wcm9qZWN0LWNvbG91clwiO1xuICAgICAgICBjb2xvdXJMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgQ29sb3VyXCI7XG4gICAgICAgIGNvbnN0IGNvbG91cklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjb2xvdXJJbnB1dC50eXBlID0gXCJjb2xvclwiO1xuICAgICAgICBjb2xvdXJJbnB1dC52YWx1ZSA9IGAjJHsoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmICogMTAwMDAwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDAsIDYpfWA7XG4gICAgICAgIGNvbG91cklucHV0LmlkID0gXCJuZXctcHJvamVjdC1jb2xvdXJcIjtcblxuICAgICAgICAvLyBBZGQgU3VibWl0IEJ1dHRvbiBmb3IgTmV3LVByb2plY3RcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuI3N1Ym1pdCh0aXRsZUlucHV0LnZhbHVlLCBjb2xvdXJJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLmV4aXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBhIHByb2plY3QgdGl0bGUhXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jc3VibWl0KHRpdGxlSW5wdXQudmFsdWUsIGNvbG91cklucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLmV4aXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBhIHByb2plY3QgdGl0bGUhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gTmV3LVByb2plY3RcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChjb2xvdXJMYWJlbCk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoY29sb3VySW5wdXQpO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICAgICAgLy8gRW50ZXIgUG9wdXBcbiAgICAgICAgdGhpcy5wb3B1cC5lbnRlcihuZXdQcm9qZWN0KTtcbiAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgICNyZW5kZXIgKCkge1xuICAgICAgICAvLyBDbGVhciBDb250ZW50XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgLy8gQWRkIFRpdGxlIHRvIE1lbnVcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5jb250ZW50LnRpdGxlID0gXCJQcm9qZWN0c1wiOyB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIC8vIEFkZCBQcm9qZWN0LUxpc3RcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtbGlzdFwiKTtcbiAgICAgICAgdGhpcy5kYXRhLnByb2plY3RzLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1zZWxlY3RcIik7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmNvbnRlbnQudGl0bGUgPSBwLm5hbWU7IH0pO1xuXG4gICAgICAgICAgICBjb25zdCBjb2xvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29sb3VyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbG91ci1jb2RlXCIpO1xuICAgICAgICAgICAgY29sb3VyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kLWNvbG9yOiAke3AuY29sb3VyfWApO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwLm5hbWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY3Jvc3MtYnV0dG9uXCIpO1xuICAgICAgICAgICAgZGVsLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmRlbGV0ZVByb2plY3QocC5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZW50LnRpdGxlID09PSBwLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC50aXRsZSA9IFwiUHJvamVjdHNcIjtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBJdGVtICYgSXRlbSB0byBMaXN0XG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGNvbG91cik7XG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkZWwpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIENyZWF0ZSBQcm9qZWN0IEJ1dHRvblxuICAgICAgICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjcmVhdGUuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0XCIpO1xuICAgICAgICBjcmVhdGUudGV4dENvbnRlbnQgPSBcIisgUHJvamVjdFwiO1xuICAgICAgICBjcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNwb3B1cCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgdG8gTWVudSBDb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZSk7XG4gICAgfVxufTsiLCJpbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIERPTUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoXCJwb3B1cFwiKTtcblxuICAgICAgICAvLyBBZGQgT3ZlcmxheSBFbGVtZW50XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmV4aXQoKTsgfSk7XG4gICAgfVxuXG4gICAgZ2V0IG92ZXJsYXkgKCkgeyByZXR1cm4gdGhpcy5fb3ZlcmxheTsgfVxuXG4gICAgc2V0IG92ZXJsYXkgKGVsZW0pIHsgdGhpcy5fb3ZlcmxheSA9IGVsZW07IH1cblxuICAgIGVudGVyIChlbGVtKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLiNyZW5kZXIoZWxlbSk7XG4gICAgfVxuXG4gICAgZXhpdCAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgICNyZW5kZXIgKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBBZGQgRXhpdCBCdXR0b25cbiAgICAgICAgY29uc3QgZXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGV4aXQudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgZXhpdC5jbGFzc0xpc3QuYWRkKFwiZXhpdC1wb3B1cFwiKTtcbiAgICAgICAgZXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy5leGl0KCk7IH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmIGUua2V5ID09PSBcIkVzY2FwZVwiKVxuICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyB0byBQb3B1cCBDb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZXhpdCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9