export default class Layout {
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

    #buildContent (groups) {
        this.content = document.createElement("div");
        this.content.classList.add("content");
        this.main.appendChild(this.content);
    }

    #buildSidebar (groups) {
        this.sidebar = document.createElement("div");
        this.sidebar.classList.add("sidebar");

        // Add Groups Title
        const groupTitle = document.createElement("h1");
        groupTitle.textContent = "Groups";
        this.sidebar.appendChild(groupTitle);

        // Add List Element
        const groupList = document.createElement("ul");
        const addGroupButton = document.createElement("button");
        addGroupButton.classList.add("add-group-button");
        addGroupButton.textContent = "+ Group";
        this.sidebar.appendChild(groupList);
        this.sidebar.appendChild(addGroupButton);

        this.main.appendChild(this.sidebar);
    }

    #buildMainElement (groups) {
        this.main = document.createElement("div");
        this.main.classList.add("main");
 
        // Add Content to Main Div
        this.#buildContent(groups);

        // Add Sidebar to Main Div
        this.#buildSidebar(groups);

        // Add to Container
        this.container.appendChild(this.main);
    }

    render (groups) {
        this.container.innerHTML = "";

        // Build Navigation Panel
        this.#buildNavPanel();

        // Build Main Element
        this.#buildMainElement(groups);
    }
};