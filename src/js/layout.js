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

    #buildNavPanel () {
        this.nav = document.createElement("div");
        this.nav.classList.add("nav");
        
        // Add Title
        const navTitle = document.createElement("h1");
        navTitle.textContent = "To Do List";
        this.nav.appendChild(navTitle);

        this.container.appendChild(this.nav);
    }

    render () {
        // Build Navigation Panel
        this.#buildNavPanel();
    }
};