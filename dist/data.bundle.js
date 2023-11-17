"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["data"],{

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
                    id: this.todos.length,
                    priority: priority, 
                    description: description, 
                    project: pDict, 
                    date: new Date(date),
                    complete: false
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

    toggleToDoComplete (name) {
        const index = this.#indexOfToDo(name);
        if (index !== -1) 
            this.todos[index].complete = !this.todos[index].complete
        this.save("todos");

        return this.todos[index].complete
    }

    identifyToDo (name) {
        const index = this.#indexOfToDo(name);
        if (index !== -1)
            return this.todos[index];
        else
            return {};
    }

    save (key) {
        localStorage.setItem(key, JSON.stringify(
            key === "projects" ? this.projects : this.todos
        ));
    } 
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/data.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjs7QUFFdEIseUJBQXlCOztBQUV6QixtQkFBbUI7O0FBRW5CLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkJBQTJCO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2RhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKVxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSB8fCBcIltdXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3RzICgpIHsgcmV0dXJuIHRoaXMuX3Byb2plY3RzOyB9XG5cbiAgICBzZXQgcHJvamVjdHMgKGFycikgeyB0aGlzLl9wcm9qZWN0cyA9IGFycjsgfVxuXG4gICAgZ2V0IHRvZG9zICgpIHsgcmV0dXJuIHRoaXMuX3RvZG9zOyB9XG5cbiAgICBzZXQgdG9kb3MgKGFycikgeyB0aGlzLl90b2RvcyA9IGFycjsgfVxuXG4gICAgI2luZGV4T2ZQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9qZWN0c1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdCAobmFtZSwgY29sb3VyKSB7XG4gICAgICAgIGlmICh0aGlzLiNpbmRleE9mUHJvamVjdChuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh7bmFtZTogbmFtZSwgY29sb3VyOiBjb2xvdXJ9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInByb2plY3RzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdCAobmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2luZGV4T2ZQcm9qZWN0KG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbmRleE9mVG9EbyAobmFtZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKSBcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZG9zW2ldLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGFkZFRvRG8gKG5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZGF0ZSkge1xuICAgICAgICBpZiAodGhpcy4jaW5kZXhPZlRvRG8obmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBHZXQgUHJvamVjdCBkaWN0aW9uYXJ5LCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIGNvbnN0IHBJbmRleCA9IHRoaXMuI2luZGV4T2ZQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY29uc3QgcERpY3QgPSB7bmFtZTogcHJvamVjdCwgY29sb3VyOiBcIlwifTtcbiAgICAgICAgICAgIGlmIChwSW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIHBEaWN0LmNvbG91ciA9IHRoaXMucHJvamVjdHNbcEluZGV4XS5jb2xvdXI7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnB1c2goXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLCBcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMudG9kb3MubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksIFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBwRGljdCwgXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUpLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zYXZlKFwidG9kb3NcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVUb0RvIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jaW5kZXhPZlRvRG8obmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInRvZG9zXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9Eb0NvbXBsZXRlIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jaW5kZXhPZlRvRG8obmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIFxuICAgICAgICAgICAgdGhpcy50b2Rvc1tpbmRleF0uY29tcGxldGUgPSAhdGhpcy50b2Rvc1tpbmRleF0uY29tcGxldGVcbiAgICAgICAgdGhpcy5zYXZlKFwidG9kb3NcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3NbaW5kZXhdLmNvbXBsZXRlXG4gICAgfVxuXG4gICAgaWRlbnRpZnlUb0RvIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jaW5kZXhPZlRvRG8obmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2Rvc1tpbmRleF07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBzYXZlIChrZXkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIGtleSA9PT0gXCJwcm9qZWN0c1wiID8gdGhpcy5wcm9qZWN0cyA6IHRoaXMudG9kb3NcbiAgICAgICAgKSk7XG4gICAgfSBcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9