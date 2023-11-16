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
        //     var oldData = JSON.parse(localStorage.getItem("todos") || []);
        //     oldData.forEach(todo => {
        //         // todo.complete = true;
        //         console.log(todo);
        //     });

        //     this.todos = oldData;
        //     this.save("todos");
        // }
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
        console.log(name + " has index " + index.toString());
        console.log(`Completeness: ${this.todos[index].complete}`)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCLHlCQUF5Qjs7QUFFekIsbUJBQW1COztBQUVuQixzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDJCQUEyQjtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsMkJBQTJCO0FBQ2hFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSB8fCBcIltdXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpXG4gICAgICAgIC8vICAgICB2YXIgb2xkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSB8fCBbXSk7XG4gICAgICAgIC8vICAgICBvbGREYXRhLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgLy8gdG9kby5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codG9kbyk7XG4gICAgICAgIC8vICAgICB9KTtcblxuICAgICAgICAvLyAgICAgdGhpcy50b2RvcyA9IG9sZERhdGE7XG4gICAgICAgIC8vICAgICB0aGlzLnNhdmUoXCJ0b2Rvc1wiKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSB8fCBcIltdXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3RzICgpIHsgcmV0dXJuIHRoaXMuX3Byb2plY3RzOyB9XG5cbiAgICBzZXQgcHJvamVjdHMgKGFycikgeyB0aGlzLl9wcm9qZWN0cyA9IGFycjsgfVxuXG4gICAgZ2V0IHRvZG9zICgpIHsgcmV0dXJuIHRoaXMuX3RvZG9zOyB9XG5cbiAgICBzZXQgdG9kb3MgKGFycikgeyB0aGlzLl90b2RvcyA9IGFycjsgfVxuXG4gICAgI2luZGV4T2ZQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9qZWN0c1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdCAobmFtZSwgY29sb3VyKSB7XG4gICAgICAgIGlmICh0aGlzLiNpbmRleE9mUHJvamVjdChuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh7bmFtZTogbmFtZSwgY29sb3VyOiBjb2xvdXJ9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInByb2plY3RzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdCAobmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2luZGV4T2ZQcm9qZWN0KG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnNhdmUoXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbmRleE9mVG9EbyAobmFtZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKSBcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZG9zW2ldLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGFkZFRvRG8gKG5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZGF0ZSkge1xuICAgICAgICBpZiAodGhpcy4jaW5kZXhPZlRvRG8obmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBHZXQgUHJvamVjdCBkaWN0aW9uYXJ5LCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIGNvbnN0IHBJbmRleCA9IHRoaXMuI2luZGV4T2ZQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY29uc3QgcERpY3QgPSB7bmFtZTogcHJvamVjdCwgY29sb3VyOiBcIlwifTtcbiAgICAgICAgICAgIGlmIChwSW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIHBEaWN0LmNvbG91ciA9IHRoaXMucHJvamVjdHNbcEluZGV4XS5jb2xvdXI7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnB1c2goXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLCBcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMudG9kb3MubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksIFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBwRGljdCwgXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUpLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zYXZlKFwidG9kb3NcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVUb0RvIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jaW5kZXhPZlRvRG8obmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZShcInRvZG9zXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9Eb0NvbXBsZXRlIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jaW5kZXhPZlRvRG8obmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyBcIiBoYXMgaW5kZXggXCIgKyBpbmRleC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBsZXRlbmVzczogJHt0aGlzLnRvZG9zW2luZGV4XS5jb21wbGV0ZX1gKVxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSBcbiAgICAgICAgICAgIHRoaXMudG9kb3NbaW5kZXhdLmNvbXBsZXRlID0gIXRoaXMudG9kb3NbaW5kZXhdLmNvbXBsZXRlXG4gICAgICAgIHRoaXMuc2F2ZShcInRvZG9zXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zW2luZGV4XS5jb21wbGV0ZVxuICAgIH1cblxuICAgIGlkZW50aWZ5VG9EbyAobmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2luZGV4T2ZUb0RvKG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9kb3NbaW5kZXhdO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgc2F2ZSAoa2V5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBrZXkgPT09IFwicHJvamVjdHNcIiA/IHRoaXMucHJvamVjdHMgOiB0aGlzLnRvZG9zXG4gICAgICAgICkpO1xuICAgIH0gXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==