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
                console.log(`Searching for ${this.searchbar.value};`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCLDJCQUEyQjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7O0FDVDBDOztBQUUzQixxQkFBcUIsdURBQVU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsc0JBQXNCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2RvbS1lbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICB9XG5cbiAgICBnZXQgY29udGFpbmVyICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjsgfVxuXG4gICAgc2V0IGNvbnRhaW5lciAoZWxlbSkgeyB0aGlzLl9jb250YWluZXIgPSBlbGVtOyB9IFxufTsiLCJpbXBvcnQgRE9NRWxlbWVudCBmcm9tIFwiLi9kb20tZWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBET01FbGVtZW50IHtcbiAgICAjc2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFwic2VhcmNoLWJsb2NrXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZ2xhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgZ2xhc3MuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgICBnbGFzcy5jbGFzc0xpc3QuYWRkKFwiZmEtbWFnbmlmeWluZy1nbGFzc1wiKTtcblxuICAgICAgICB0aGlzLnNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5zZWFyY2hiYXIuY2xhc3NMaXN0LmFkZChcInNlYXJjaGJhclwiKTtcblxuICAgICAgICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImZpbmRcIik7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QudG9nZ2xlKFwic2VhcmNoaW5nXCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC5jb250YWlucyhcInNlYXJjaGluZ1wiKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlYXJjaGJhci5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU2VhcmNoaW5nIGZvciAke3RoaXMuc2VhcmNoYmFyLnZhbHVlfTtgKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgU2VhcmNoLi5cbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJmaW5kXCIpICYmIGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZ2xhc3MpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNlYXJjaGJhcik7XG4gICAgfVxuXG4gICAgZ2V0IHNlYXJjaGJhciAoKSB7IHJldHVybiB0aGlzLl9zZWFyY2hiYXI7IH1cblxuICAgIHNldCBzZWFyY2hiYXIgKGVsZW0pIHsgdGhpcy5fc2VhcmNoYmFyID0gZWxlbTsgfVxuXG4gICAgdG9nZ2xlICgpIHtcbiAgICAgICAgLy8gSWYgU2VhcmNoYmFyIGlzIGFjdGl2YXRlZCwgcmVzZXQgU2VhcmNoYmFyXG4gICAgICAgIGlmICh0aGlzLiNzZWFyY2hpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImZpbmRcIik7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoaW5nXCIpO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBlbmFibGUgU2VhcmNoYmFyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImZpbmRcIikpXG4gICAgICAgICAgICB0aGlzLiNzZWFyY2hpbmcgPSB0cnVlO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9