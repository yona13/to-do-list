import Data from "./data.js";
import Menu from "./menu.js";
import Navigator from "./navigator.js";
import Search from "./search.js";

export default class Layout {
    constructor () {
        this.#addFontAwesome();

        // Generate Container for all DOM Elements
        this.container = document.createElement("div");
        this.container.classList.add("container");

        // Generate Main Element
        this.main = document.createElement("div");
        this.main.classList.add("main");

        this.data = new Data();
        this.menu = new Menu(this.data);
        this.search = new Search();
        this.nav = new Navigator(this.search, this.menu);

        this.container.addEventListener("click", (e) => {
            this.menu.toggle();
            this.search.toggle();
        });

        document.body.appendChild(this.container);
    }

    /**
     * Get Container Element
     * 
     * @returns {Object} Container HTML Element
     */
    get container () { return this._container; }

    /**
     * Set Container Element
     * 
     * @param {Object} elem - HTML Element for the Container
     */
    set container (elem) { this._container = elem; }

    get nav () { return this._nav; }

    set nav (obj) { this._nav = obj; }

    /**
     * Get Main Element
     * 
     * @returns {Object} Main HTML Element
     */
    get main () { return this._main; }

    /**
     * Set Main Element
     * 
     * @param {Object} elem - HTML Element for Main Element
     */
    set main (elem) { this._main = elem; }

    #addFontAwesome () {
        // Add Font-Awesome Script to Head
        const fontAwesomeScript = document.createElement("script");
        fontAwesomeScript.src = "https://kit.fontawesome.com/9c11ce4a9b.js";
        fontAwesomeScript.crossorigin = "anonymous";
        document.head.appendChild(fontAwesomeScript);
    }

    /**
     * Render Function
     * 
     * Function Used for Render To-Do-List Page
     */
    render () {
        this.container.innerHTML = "";

        this.container.appendChild(this.nav.container);
        this.main.appendChild(this.menu.container);
        this.container.appendChild(this.main);
    }
};