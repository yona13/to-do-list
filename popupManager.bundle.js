"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["popupManager"],{

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
const WINDOW_TYPES = {
    PROJECT: 0,
    TODO: 1
};

class Popup {
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

        this.popup.addEventListener("keydown", (e) => {
            console.log(e);
        });

        document.body.appendChild(this.popup);
    }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/popup.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXBNYW5hZ2VyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQSxtQkFBbUI7O0FBRW5CLHVCQUF1Qjs7QUFFdkIsMEJBQTBCOztBQUUxQiw4QkFBOEI7O0FBRTlCLHFCQUFxQjs7QUFFckIseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxjQUFjO0FBQ3RFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsY0FBYztBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFdJTkRPV19UWVBFUyA9IHtcbiAgICBQUk9KRUNUOiAwLFxuICAgIFRPRE86IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gICAgZ2V0IHBvcHVwICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwOyB9XG5cbiAgICBzZXQgcG9wdXAgKGVsZW0pIHsgdGhpcy5fcG9wdXAgPSBlbGVtOyB9XG5cbiAgICBnZXQgcG9wdXBjb250ZW50ICgpIHsgcmV0dXJuIHRoaXMuX3BvcHVwY29udGVudDsgfVxuXG4gICAgc2V0IHBvcHVwY29udGVudCAoZWxlbSkgeyB0aGlzLl9wb3B1cGNvbnRlbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgb3ZlcmxheSAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5OyB9XG5cbiAgICBzZXQgb3ZlcmxheSAoZWxlbSkgeyB0aGlzLl9vdmVybGF5ID0gZWxlbTsgfVxuXG4gICAgZW50ZXIgKGVsZW0pIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9XG5cbiAgICBleGl0ICgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBzZXR1cCAoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLmV4aXQoKTsgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcblxuICAgICAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5cbiAgICAgICAgLy8gQWRkIGV4aXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBleGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIGV4aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImV4aXQtcG9wdXBcIik7XG4gICAgICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuZXhpdCgpOyB9KTtcbiAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcblxuICAgICAgICAvLyBBZGQgcG9wdXAgY29udGVudCBjb250YWluZXJcbiAgICAgICAgdGhpcy5wb3B1cGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnBvcHVwY29udGVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtY29udGVudFwiKTtcbiAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwY29udGVudCk7XG5cbiAgICAgICAgdGhpcy5wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wb3B1cCk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==