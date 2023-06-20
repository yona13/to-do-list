import PopupManager from "./popup-manager.js";
import ProjectManager from "./project-manager.js";
import ToDoList from "./to-do-list.js";

export default class Layout {
    /** Private Variables in Layout */
    #searching = false;
    #expanded = false;
    #popupManager = new PopupManager();
    #toDoList = new ToDoList(this.#popupManager);
    #projectManager = new ProjectManager(this.#popupManager, this.#toDoList);

    /**
     * Layout Class
     * 
     * Generates DOM Container and elements within utilising
     * Popup-Manager, To-Do-List & Project-Manager classes to
     * generate other elements
     */
    constructor () {
        // Generate Container for all DOM Elements
        this.container = document.createElement("div");
        this.container.classList.add("container");

        // Generate Main Element
        this.main = document.createElement("div");
        this.main.classList.add("main");

        // Enable/Disable DOM Elements that may be enabled, if required
        this.container.addEventListener("click", (e) => {
            // If Searchbar is activated, reset Searchbar
            if (this.#searching) {
                this.#searching = false;
                this.searchbar.classList.remove("find");
                this.tasksearch.classList.remove("searching");
            } 
            
            // Otherwise, enable Searchbar
            else if (this.searchbar.classList.contains("find"))
                this.#searching = true;

            // If Sidebar is activated, reset Sidebar (tablet view)
            if (this.#expanded) {
                this.#expanded = false;
                this.barcontainer.classList.remove("change");
                this.#projectManager.collapse();
            }
            
            // Otherwise, enable Sidebar
            else if (this.barcontainer.classList.contains("change"))
                this.#expanded = true;
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

    /**
     * Get Navigation Panel Element
     * 
     * @returns {Object} Navigation Panel HTML Element
     */
    get nav () { return this._nav; }

    /**
     * Set Navigation Panel Element
     * 
     * @param {Object} elem - HTML Element for the Navigation Panel
     */
    set nav (elem) { this._nav = elem; }

    /**
     * Get Searchbar Element
     * 
     * @returns {Object} Searchbar HTML Element
     */
    get searchbar () { return this._searchbar; }

    /**
     * Set Searchbar Element
     * 
     * @param {Object} elem - HTML Element for the Searchbar
     */
    set searchbar (elem) { this._searchbar = elem; }

    /** 
     * Get Task-Search Input Element
     * 
     * @returns {Object} Task-Search Input HTML Element
     */
    get tasksearch () { return this._tasksearch; }

    /**
     * Set Tash-Search Input Element
     * 
     * @param {Object} elem - HTML Element for Task-Search Input
     */
    set tasksearch (elem) { this._tasksearch = elem; }

    /**
     * Get 2-Bar Container Element
     * 
     * @returns {Object} 2-Bar Container HTML Element
     */
    get barcontainer () { return this._barcontainer; }

    /**
     * Set 2-Bar Container Element
     * 
     * @param {Object} elem - HTML Element for 2-Bar Container
     */
    set barcontainer (elem) { this._barcontainer = elem; }

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

    /**
     * Get Magnifying Glass Function
     * 
     * Private function that will add Font-Awesome script to index.html head
     * element, and returns an <i> element for use in the body element
     * 
     * @returns {Object} HTML i-Element representing Magnifying Glass
     */
    #getMagnifyingGlass () {
        // Add Font-Awesome Script to Head
        const fontAwesomeScript = document.createElement("script");
        fontAwesomeScript.src = "https://kit.fontawesome.com/9c11ce4a9b.js";
        fontAwesomeScript.crossorigin = "anonymous";
        document.head.appendChild(fontAwesomeScript);

        // Create Magnifying Glass <i> element
        const searchGlass = document.createElement("i");
        searchGlass.classList.add("fa-solid");
        searchGlass.classList.add("fa-magnifying-glass");

        return searchGlass;
    }

    /**
     * Build Navigation Panel Element Function
     * 
     * Private Function for Generating all elements associated 
     * with Navigation Panel including "Logo", Searchbar & 
     * Sidebar enabling elements
     */
    #buildNavPanel () {
        // Geneate Navigation Panel Element
        this.nav = document.createElement("div");
        this.nav.classList.add("nav");
        
        // Add Title with "Logo" to Navigation Panel
        const logo = document.createElement("div");
        logo.textContent = "#TODO:"
        logo.classList.add("logo");
        this.nav.appendChild(logo);

        // Create Toolbox Element for Navigation Panel
        const toolBox = document.createElement("div");
        toolBox.classList.add("nav-toolbox");

        // Create Search Bar for Toolbox
        this.searchbar = document.createElement("div");
        this.searchbar.classList.add("searchbar");
        this.searchbar.addEventListener("click", (e) => {
            this.searchbar.classList.toggle("find");
            this.tasksearch.classList.toggle("active");
            if (this.tasksearch.classList.contains("active"))
                this.tasksearch.focus();
        });

        // Create Magnifying Glass for Toolbox
        const glass = this.#getMagnifyingGlass();

        // Create Task-Search Input for Toolbox
        this.tasksearch = document.createElement("input");
        this.tasksearch.classList.add("task-search");
        this.tasksearch.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                console.log(`Searching for ${this.tasksearch.value};`);
                // TODO: Implement Search..
            }
        });

        // For Tablet-View, Create Sidebar Enabling Element
        this.barcontainer = document.createElement("div");
        this.barcontainer.classList.add("sidebar-button");
        this.barcontainer.addEventListener("click", (e) => {
            this.barcontainer.classList.toggle("change");
            this.#projectManager.expand();
        });

        // Create 2-Bars for Sidebar Enabling Element
        for (var i = 1; i < 3; i++) {
            const barN = document.createElement("div");
            barN.classList.add(`bar${i}`);
            this.barcontainer.appendChild(barN);
        }

        // Add Toolbox Elements
        this.searchbar.appendChild(glass);
        this.searchbar.appendChild(this.tasksearch);
        toolBox.appendChild(this.searchbar);
        toolBox.appendChild(this.barcontainer);

        // Add Toolbox to Navigation Panel 
        // & Navigation Panel to Container
        this.nav.appendChild(toolBox);
        this.container.appendChild(this.nav);
    }

    /**
     * Build Main Element Function
     * 
     * Private Function for Generating elements for Main
     * element, including Sidebar from Project Manager and
     * Content from To-Do-List
     */
    #buildMainElement () {
        // Add Sidebar to Main Element
        this.#projectManager.setup();
        this.main.appendChild(this.#projectManager.sidebar);
 
        // Add Content to Main Element
        this.#toDoList.setup();
        this.main.appendChild(this.#toDoList.content);

        // Add Main Element to Container Element
        this.container.appendChild(this.main);
    }

    /**
     * Render Function
     * 
     * Function Used for Render To-Do-List Page
     */
    render () {
        this.container.innerHTML = "";

        // Build Navigation Panel
        this.#buildNavPanel();

        // Build Main Element
        this.#buildMainElement();

        // Build Pop-up Element
        this.#popupManager.setup();
    }
};