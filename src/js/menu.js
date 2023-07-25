import Content from "./content.js";
import Data from "./data.js";
import DOMElement from "./dom-element.js";
import ProjectList from "./project-list.js";

export default class Menu extends DOMElement {
    #expanded = false;

    /**
     * 
     * @param {Data} data 
     * @param {Content} content 
     */
    constructor (data, content) {
        super("sidebar");

        this.data = data;
        this.content = content;

        this.button = document.createElement("div");
        this.button.classList.add("sidebar-button");
        this.button.addEventListener("click", (e) => {
            this.#toggle();
        });

        // Create bars for Button
        for (var i = 1; i < 3; i++) {
            const bar = document.createElement("div");
            bar.classList.add(`bar${i}`);
            this.button.appendChild(bar);
        }

        this.#render();
    }

    get data () { return this._data; }

    set data (obj) { this._data = obj; }

    get content () { return this._content; }

    set content (obj) { this._content = obj; }

    get button () { return this._button; }

    set button (elem) { this._button = elem; }

    toggle () {
        // If Sidebar is activated, reset Sidebar (tablet view)
        if (this.#expanded) {
            this.#expanded = false;
            this.container.classList.remove("expand");
            this.button.classList.remove("change");
        }
        
        // Otherwise, enable Sidebar
        else if (this.button.classList.contains("change"))
            this.#expanded = true;
    }

    #toggle () {
        this.container.classList.toggle("expand");
        this.button.classList.toggle("change");
    }

    #render () {
        // Clear Content
        this.container.innerHTML = "";

        // Add Today & Week Tags
        ["Today", "Week"].forEach(h => {
            const menuTag = document.createElement("div");
            menuTag.classList.add("menu-tag");
            menuTag.id = `${h}-tag`;
            menuTag.addEventListener("click", (e) => { this.content.title = h});
            const icon = document.createElement("i");
            icon.classList.add("fa-solid");
            if (h === "Today")
                icon.classList.add("fa-sun");
            else if (h === "Week")
                icon.classList.add("fa-calendar-week");
            const text = document.createElement("div");
            text.textContent = h;
            menuTag.appendChild(icon);
            menuTag.appendChild(text);
            this.container.appendChild(menuTag);
        });

        // Add Project List
        const projects = new ProjectList("project", this.data, this.content);
        projects.render();

        // Add Create Project Button
        const create = document.createElement("button");
        create.classList.add("add-project");
        create.textContent = "+ Project";
        create.addEventListener("click", (e) => {
            // this.#popup();
            projects.render(true);
        });

        // Append Elements to Menu Container
        this.container.appendChild(projects.list);
        this.container.appendChild(create);
    }
};