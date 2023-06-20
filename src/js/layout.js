import PopupManager from "./popup-manager.js";
import ProjectManager from "./project-manager.js";

export default class Layout {
    #searching = false;
    #expanded = false;
    #popupManager = new PopupManager();
    #projectManager = new ProjectManager(this.#popupManager);

    constructor () {
        this.container = document.createElement("div");
        this.container.classList.add("container");
        this.container.addEventListener("click", (e) => {
            if (this.#searching) {
                this.#searching = false;
                this.searchbar.classList.remove("find");
                this.tasksearch.classList.remove("searching");
            } else if (this.searchbar.classList.contains("find"))
                this.#searching = true;

            if (this.#expanded) {
                this.#expanded = false;
                this.barcontainer.classList.remove("change");
                this.#projectManager.collapse();
                // this.sidebar.classList.remove("expand");
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

    // get sidebar () { return this._sidebar; }

    // set sidebar (elem) { this._sidebar = elem; }

    #addBrowserIcon () {
        const iconLink = document.createElement("link");
        iconLink.rel = "todo-icon";
        iconLink.href = TodoIcon;
        document.head.appendChild(iconLink);
    }

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
            this.#projectManager.expand();
            // this.sidebar.classList.toggle("expand");
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

        // Add Project Specific List

        // Add Add-To-Do Button
        const todoButton = document.createElement("button");
        todoButton.classList.add("add-to-do-button");
        todoButton.textContent = "+ To Do";
        todoButton.addEventListener("click", (e) => {});

        this.content.appendChild(todoButton);

        this.main.appendChild(this.content);
    }

    #buildMainElement () {
        this.main = document.createElement("div");
        this.main.classList.add("main");
 
        // Add Content to Main Div
        this.#buildContent();

        // Add Sidebar to Main Div
        this.#projectManager.setup();
        this.main.appendChild(this.#projectManager.sidebar);

        // Add to Container
        this.container.appendChild(this.main);
    }

    render () {
        // this.#addBrowserIcon();

        this.container.innerHTML = "";

        // Build Navigation Panel
        this.#buildNavPanel();

        // Build Main Element
        this.#buildMainElement();

        // Build Pop-up Element
        this.#popupManager.setup();
    }
};