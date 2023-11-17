"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["search"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/search.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCLDJCQUEyQjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7O0FDVDBDOztBQUUzQixxQkFBcUIsdURBQVU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QiwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9kb20tZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfSBcbn07IiwiaW1wb3J0IERPTUVsZW1lbnQgZnJvbSBcIi4vZG9tLWVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgRE9NRWxlbWVudCB7XG4gICAgI3NlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcInNlYXJjaC1ibG9ja1wiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdsYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIGdsYXNzLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgICAgZ2xhc3MuY2xhc3NMaXN0LmFkZChcImZhLW1hZ25pZnlpbmctZ2xhc3NcIik7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hiYXJcIik7XG5cbiAgICAgICAgLy8gQWRkIEV2ZW50IExpc3RlbmVyc1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LnRvZ2dsZShcInNlYXJjaGluZ1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWFyY2hpbmdcIikpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IFNlYXJjaC4uXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmluZFwiKSAmJiBlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGdsYXNzKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2hiYXIpO1xuICAgIH1cblxuICAgIGdldCBzZWFyY2hiYXIgKCkgeyByZXR1cm4gdGhpcy5fc2VhcmNoYmFyOyB9XG5cbiAgICBzZXQgc2VhcmNoYmFyIChlbGVtKSB7IHRoaXMuX3NlYXJjaGJhciA9IGVsZW07IH1cblxuICAgIHRvZ2dsZSAoKSB7XG4gICAgICAgIC8vIElmIFNlYXJjaGJhciBpcyBhY3RpdmF0ZWQsIHJlc2V0IFNlYXJjaGJhclxuICAgICAgICBpZiAodGhpcy4jc2VhcmNoaW5nKSB7XG4gICAgICAgICAgICB0aGlzLiNzZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaGluZ1wiKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vIE90aGVyd2lzZSwgZW5hYmxlIFNlYXJjaGJhclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJmaW5kXCIpKVxuICAgICAgICAgICAgdGhpcy4jc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==