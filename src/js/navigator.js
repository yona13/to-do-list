import DOMElement from "./dom-element.js";
import Menu from "./menu.js";
import Search from "./search.js";

export default class Navigator extends DOMElement {
    
    /**
     * 
     * @param {Search} search 
     * @param {Menu} menu 
     */
    constructor (search, menu) {
        super("nav");

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
};