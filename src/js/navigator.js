import Menu from "./menu.js";
import Search from "./search.js";

export default class Navigator {
    
    /**
     * 
     * @param {Search} search 
     * @param {Menu} menu 
     */
    constructor (search, menu) {
        this.container = document.createElement("div");
        this.container.classList.add("nav");

        // Add Title with "Logo" to Navigation Panel
        const logo = document.createElement("div");
        logo.textContent = "#TODO:"
        logo.classList.add("logo");
        this.container.appendChild(logo);

        // Create Toolbar
        const toolbar = document.createElement("div");
        toolbar.classList.add("toolbar");

        // Add Elements to Toolbar
        toolbar.appendChild(search.container);
        toolbar.appendChild(menu.button);

        // Add Elements to Container
        this.container.appendChild(toolbar);
    }

    get container () { return this._container; }

    set container (elem) { this._container = elem; }
};