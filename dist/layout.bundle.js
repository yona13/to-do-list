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
class Layout {
    #searching = false;
    #expanded = false;

    constructor () {
        this.container = document.createElement("div");
        this.container.classList.add("container");
        this.container.addEventListener("click", (e) => {
            if (this.#searching) {
                this.#searching = false;
                this.searchbar.classList.remove("find");
                this.tasksearch.classList.remove("active");
            } else if (this.searchbar.classList.contains("find"))
                this.#searching = true;

            if (this.#expanded) {
                this.#expanded = false;
                this.barcontainer.classList.remove("change");
                this.sidebar.classList.remove("expand");
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

    get sidebar () { return this._sidebar; }

    set sidebar (elem) { this._sidebar = elem; }

    get popup () { return this._popup; }

    set popup (elem) { this._popup = elem; }

    get overlay () { return this._overlay; }

    set overlay (elem) { this._overlay = elem; }

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
            this.sidebar.classList.toggle("expand");
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
        this.main.appendChild(this.content);
    }

    #buildSidebar () {
        this.sidebar = document.createElement("div");
        this.sidebar.classList.add("sidebar");

        // Add Projects Title
        const projectsTitle = document.createElement("h1");
        projectsTitle.textContent = "Projects";
        this.sidebar.appendChild(projectsTitle);

        // Add List Element
        const projectsList = document.createElement("ul");
        const addProjectButton = document.createElement("button");
        addProjectButton.classList.add("add-project-button");
        addProjectButton.textContent = "+ Project";
        this.sidebar.appendChild(projectsList);
        this.sidebar.appendChild(addProjectButton);

        this.main.appendChild(this.sidebar);
    }

    #buildMainElement () {
        this.main = document.createElement("div");
        this.main.classList.add("main");
 
        // Add Content to Main Div
        this.#buildContent();

        // Add Sidebar to Main Div
        this.#buildSidebar();

        // Add to Container
        this.container.appendChild(this.main);
    }

    #buildPopup () {
        this.overlay = document.createElement("div");
        this.overlay.classList.add("overlay");
        document.body.appendChild(this.overlay);

        this.popup = document.createElement("div");
        this.popup.classList.add("popup");
        document.body.appendChild(this.popup);
    }

    render () {
        this.container.innerHTML = "";

        // Build Navigation Panel
        this.#buildNavPanel();

        // Build Main Element
        this.#buildMainElement();

        // Build Pop-up Element
        this.#buildPopup();
    }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/layout.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QiwyQkFBMkI7O0FBRTNCLGlCQUFpQjs7QUFFakIscUJBQXFCOztBQUVyQix1QkFBdUI7O0FBRXZCLDJCQUEyQjs7QUFFM0Isd0JBQXdCOztBQUV4Qiw0QkFBNEI7O0FBRTVCLDBCQUEwQjs7QUFFMUIsOEJBQThCOztBQUU5QixrQkFBa0I7O0FBRWxCLHNCQUFzQjs7QUFFdEIscUJBQXFCOztBQUVyQix5QkFBeUI7O0FBRXpCLHFCQUFxQjs7QUFFckIseUJBQXlCOztBQUV6QixtQkFBbUI7O0FBRW5CLHVCQUF1Qjs7QUFFdkIscUJBQXFCOztBQUVyQix5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx1QkFBdUI7QUFDcEUsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULHdCQUF3QixPQUFPO0FBQy9CO0FBQ0EscUNBQXFDLEVBQUU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgI3NlYXJjaGluZyA9IGZhbHNlO1xuICAgICNleHBhbmRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuI3NlYXJjaGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFza3NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJmaW5kXCIpKVxuICAgICAgICAgICAgICAgIHRoaXMuI3NlYXJjaGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiNleHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuI2V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXJjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYXJjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hhbmdlXCIpKVxuICAgICAgICAgICAgICAgIHRoaXMuI2V4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhaW5lciAoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cblxuICAgIHNldCBjb250YWluZXIgKGVsZW0pIHsgdGhpcy5fY29udGFpbmVyID0gZWxlbTsgfVxuXG4gICAgZ2V0IG5hdiAoKSB7IHJldHVybiB0aGlzLl9uYXY7IH1cblxuICAgIHNldCBuYXYgKGVsZW0pIHsgdGhpcy5fbmF2ID0gZWxlbTsgfVxuXG4gICAgZ2V0IHNlYXJjaGJhciAoKSB7IHJldHVybiB0aGlzLl9zZWFyY2hiYXI7IH1cblxuICAgIHNldCBzZWFyY2hiYXIgKGVsZW0pIHsgdGhpcy5fc2VhcmNoYmFyID0gZWxlbTsgfVxuXG4gICAgZ2V0IHRhc2tzZWFyY2ggKCkgeyByZXR1cm4gdGhpcy5fdGFza3NlYXJjaDsgfVxuXG4gICAgc2V0IHRhc2tzZWFyY2ggKGVsZW0pIHsgdGhpcy5fdGFza3NlYXJjaCA9IGVsZW07IH1cblxuICAgIGdldCBiYXJjb250YWluZXIgKCkgeyByZXR1cm4gdGhpcy5fYmFyY29udGFpbmVyOyB9XG5cbiAgICBzZXQgYmFyY29udGFpbmVyIChlbGVtKSB7IHRoaXMuX2JhcmNvbnRhaW5lciA9IGVsZW07IH1cblxuICAgIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW47IH1cblxuICAgIHNldCBtYWluIChlbGVtKSB7IHRoaXMuX21haW4gPSBlbGVtOyB9XG5cbiAgICBnZXQgY29udGVudCAoKSB7IHJldHVybiB0aGlzLl9jb250ZW50OyB9XG5cbiAgICBzZXQgY29udGVudCAoZWxlbSkgeyB0aGlzLl9jb250ZW50ID0gZWxlbTsgfVxuXG4gICAgZ2V0IHNpZGViYXIgKCkgeyByZXR1cm4gdGhpcy5fc2lkZWJhcjsgfVxuXG4gICAgc2V0IHNpZGViYXIgKGVsZW0pIHsgdGhpcy5fc2lkZWJhciA9IGVsZW07IH1cblxuICAgIGdldCBwb3B1cCAoKSB7IHJldHVybiB0aGlzLl9wb3B1cDsgfVxuXG4gICAgc2V0IHBvcHVwIChlbGVtKSB7IHRoaXMuX3BvcHVwID0gZWxlbTsgfVxuXG4gICAgZ2V0IG92ZXJsYXkgKCkgeyByZXR1cm4gdGhpcy5fb3ZlcmxheTsgfVxuXG4gICAgc2V0IG92ZXJsYXkgKGVsZW0pIHsgdGhpcy5fb3ZlcmxheSA9IGVsZW07IH1cblxuICAgICNnZXRNYWduaWZ5aW5nR2xhc3MgKCkge1xuICAgICAgICBjb25zdCBmb250QXdlc29tZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIGZvbnRBd2Vzb21lU2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzljMTFjZTRhOWIuanNcIjtcbiAgICAgICAgZm9udEF3ZXNvbWVTY3JpcHQuY3Jvc3NvcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZvbnRBd2Vzb21lU2NyaXB0KTtcblxuICAgICAgICBjb25zdCBzZWFyY2hHbGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBzZWFyY2hHbGFzcy5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICAgIHNlYXJjaEdsYXNzLmNsYXNzTGlzdC5hZGQoXCJmYS1tYWduaWZ5aW5nLWdsYXNzXCIpO1xuXG4gICAgICAgIHJldHVybiBzZWFyY2hHbGFzcztcbiAgICB9XG5cbiAgICAjYnVpbGROYXZQYW5lbCAoKSB7XG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5uYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBMb2dvXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gXCIjVE9ETzpcIlxuICAgICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZChsb2dvKTtcblxuICAgICAgICBjb25zdCB0b29sQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9vbEJveC5jbGFzc0xpc3QuYWRkKFwibmF2LXRvb2xib3hcIik7XG5cbiAgICAgICAgLy8gQWRkIFNlYXJjaCBCYXJcbiAgICAgICAgdGhpcy5zZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBnbGFzcyA9IHRoaXMuI2dldE1hZ25pZnlpbmdHbGFzcygpO1xuICAgICAgICB0aGlzLnNlYXJjaGJhci5hcHBlbmRDaGlsZChnbGFzcyk7XG4gICAgICAgIHRoaXMudGFza3NlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy50YXNrc2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNlYXJjaFwiKTtcbiAgICAgICAgdGhpcy50YXNrc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNlYXJjaGluZyBmb3IgJHt0aGlzLnRhc2tzZWFyY2gudmFsdWV9O2ApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlYXJjaGJhci5hcHBlbmRDaGlsZCh0aGlzLnRhc2tzZWFyY2gpO1xuICAgICAgICB0aGlzLnNlYXJjaGJhci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoYmFyXCIpO1xuICAgICAgICB0aGlzLnNlYXJjaGJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJmaW5kXCIpO1xuICAgICAgICAgICAgdGhpcy50YXNrc2VhcmNoLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBpZiAodGhpcy50YXNrc2VhcmNoLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzZWFyY2guZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvb2xCb3guYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2hiYXIpO1xuXG4gICAgICAgIC8vIEFkZCBTaWRlYmFyIGJ1dHRvblxuICAgICAgICB0aGlzLmJhcmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuYmFyY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5iYXJjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhcmNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlXCIpO1xuICAgICAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBiYXJOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJhck4uY2xhc3NMaXN0LmFkZChgYmFyJHtpfWApO1xuICAgICAgICAgICAgdGhpcy5iYXJjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFyTik7XG4gICAgICAgIH1cbiAgICAgICAgdG9vbEJveC5hcHBlbmRDaGlsZCh0aGlzLmJhcmNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKHRvb2xCb3gpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubmF2KTtcbiAgICB9XG5cbiAgICAjYnVpbGRDb250ZW50ICgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KTtcbiAgICB9XG5cbiAgICAjYnVpbGRTaWRlYmFyICgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gICAgICAgIC8vIEFkZCBQcm9qZWN0cyBUaXRsZVxuICAgICAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgICAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNUaXRsZSk7XG5cbiAgICAgICAgLy8gQWRkIExpc3QgRWxlbWVudFxuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIisgUHJvamVjdFwiO1xuICAgICAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcbiAgICAgICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuXG4gICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLnNpZGViYXIpO1xuICAgIH1cblxuICAgICNidWlsZE1haW5FbGVtZW50ICgpIHtcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuIFxuICAgICAgICAvLyBBZGQgQ29udGVudCB0byBNYWluIERpdlxuICAgICAgICB0aGlzLiNidWlsZENvbnRlbnQoKTtcblxuICAgICAgICAvLyBBZGQgU2lkZWJhciB0byBNYWluIERpdlxuICAgICAgICB0aGlzLiNidWlsZFNpZGViYXIoKTtcblxuICAgICAgICAvLyBBZGQgdG8gQ29udGFpbmVyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWFpbik7XG4gICAgfVxuXG4gICAgI2J1aWxkUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcblxuICAgICAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wb3B1cCk7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBCdWlsZCBOYXZpZ2F0aW9uIFBhbmVsXG4gICAgICAgIHRoaXMuI2J1aWxkTmF2UGFuZWwoKTtcblxuICAgICAgICAvLyBCdWlsZCBNYWluIEVsZW1lbnRcbiAgICAgICAgdGhpcy4jYnVpbGRNYWluRWxlbWVudCgpO1xuXG4gICAgICAgIC8vIEJ1aWxkIFBvcC11cCBFbGVtZW50XG4gICAgICAgIHRoaXMuI2J1aWxkUG9wdXAoKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==