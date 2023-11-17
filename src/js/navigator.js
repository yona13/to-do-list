import Content from "./content.js";
import DOMElement from "./dom-element.js";
import Menu from "./menu.js";

export default class Navigator extends DOMElement {
    
    /**
     * 
     * @param {Content} content
     * @param {Menu} menu 
     */
    constructor (content, menu) {
        super("nav");

        // Add Title with "Logo" to Navigation Panel
        const logo = document.createElement("div");
        logo.textContent = "#TODO:"
        logo.classList.add("logo");
        logo.addEventListener("click", (e) => { content.title = "To-Dos"; });
        this.container.appendChild(logo);

        // Create Toolbar
        const toolbar = document.createElement("div");
        toolbar.classList.add("toolbar");

        // Add Elements to Toolbar
        toolbar.appendChild(menu.button);

        // Add Elements to Container
        this.container.appendChild(toolbar);
    }
};