export default class Layout {
    constructor () {
        this.container = document.createElement("div");
        this.container.classList.add("container");

        document.body.appendChild(this.container);
    }

    get container () { return this._container; }

    set container (elem) { this._container = elem; }

    get nav () { return this._nav; }

    set nav (elem) { this._nav = elem; }

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
        // logo.textContent = String.fromCharCode(10004);
        logo.textContent = "#TODO:"
        logo.classList.add("logo");
        this.nav.appendChild(logo);

        const toolBox = document.createElement("div");
        toolBox.classList.add("nav-toolbox");

        // Add Search Bar
        this.searchbar = document.createElement("div");
        const glass = this.#getMagnifyingGlass();
        // const searchInput = 
        this.searchbar.appendChild(glass);
        this.searchbar.classList.add("searchbar");
        this.searchbar.addEventListener("click", (e) => {
            this.searchbar.classList.toggle("find");
        });
        toolBox.appendChild(this.searchbar)


        // Add Sidebar button
        const sbCont = document.createElement("div");
        sbCont.classList.add("sidebar-button");
        sbCont.addEventListener("click", (e) => {
            sbCont.classList.toggle("change");
            this.sidebar.classList.toggle("expand");
        });

        for (var i = 1; i < 3; i++) {
            const barN = document.createElement("div");
            barN.classList.add(`bar${i}`);
            sbCont.appendChild(barN);
        }
        toolBox.appendChild(sbCont);
        this.nav.appendChild(toolBox);

        this.container.appendChild(this.nav);
    }

    #buildContent (groups) {}

    #buildSidebar (groups) {}

    #buildMainElement (groups) {
        this.main = document.createElement("div");
        this.main.classList.add("main");
 
        // Add Content to Main Div
        this.content = document.createElement("div");
        this.content.classList.add("content");
        this.main.appendChild(this.content);

        // Add Sidebar to Main Div
        this.sidebar = document.createElement("div");
        this.sidebar.classList.add("sidebar");
        this.main.appendChild(this.sidebar);

        // Add to Container
        this.container.appendChild(this.main);
    }

    render (groups) {
        // Build Navigation Panel
        this.#buildNavPanel();

        // Build Main Element
        this.#buildMainElement(groups);
    }
};