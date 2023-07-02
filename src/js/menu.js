import Data from "./data.js";

export default class Menu {
    #expanded = false;

    /**
     * 
     * @param {Data} data 
     */
    constructor (data) {
        this.container = document.createElement("div");
        this.container.classList.add("sidebar");

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

        this.#render(data);
    }

    get container () { return this._container; }

    set container (elem) { this._container = elem; }

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

    #render (data) {
        var projects = data.projects;

        // Add Title to Menu
        const title = document.createElement("button");
        title.classList.add("projects-title");
        title.textContent = "Projects";
        // TODO: Add Event Listener
        this.container.appendChild(title);

        // Add Project-List
        const list = document.createElement("ul");
        list.classList.add("projects-list");
        projects.forEach(p => {
            const item = document.createElement("div");
            item.classList.add("project-list-select");
            // TODO: Add Event Listener

            const colour = document.createElement("div");
            colour.classList.add("project-colour-code");
            colour.setAttribute("style", `background-color: ${p.colour}`);

            const name = document.createElement("div");
            name.textContent = p.name;

            const del = document.createElement("button");
            del.classList.add("project-cross-button");
            del.textContent = "x";
            // TODO: Add Event Listener
            item.appendChild(colour);
            item.appendChild(name);
            item.appendChild(del);
            list.appendChild(item);
        });

        // Add Create Project Button
        const create = document.createElement("button");
        create.classList.add("add-project");
        create.textContent = "+ Project";
        // TODO: Add Event Listener

        this.container.appendChild(list);
        this.container.appendChild(create);
    }
};