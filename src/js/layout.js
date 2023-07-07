import Content from "./content.js";
import Data from "./data.js";
import DOMElement from "./dom-element.js";
import Menu from "./menu.js";
import Navigator from "./navigator.js";
import Popup from "./popup.js";
import Search from "./search.js";

export default class Layout extends DOMElement{
    constructor () {
        super("container");
        this.#addFontAwesome();

        this.main = document.createElement("div");
        this.main.classList.add("main");

        this.data = new Data();
        this.search = new Search();
        this.popup = new Popup();
        this.content = new Content(this.data, this.popup);
        this.menu = new Menu(this.data, this.content);
        this.nav = new Navigator(this.content, this.search, this.menu);

        this.container.addEventListener("click", (e) => {
            this.menu.toggle();
            this.search.toggle();
        });

        document.body.appendChild(this.container);
    }

    get nav () { return this._nav; }

    set nav (obj) { this._nav = obj; }

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
        this.main.appendChild(this.content.container);
        this.container.append(this.main);
        document.body.append(this.popup.overlay);
        document.body.append(this.popup.container);
    }
};