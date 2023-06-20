const WINDOW_TYPES = {
    PROJECT: 0,
    TODO: 1
};

export default class PopupManager {
    constructor () {}

    get popup () { return this._popup; }

    set popup (elem) { this._popup = elem; }

    get popupcontent () { return this._popupcontent; }

    set popupcontent (elem) { this._popupcontent = elem; }

    get overlay () { return this._overlay; }

    set overlay (elem) { this._overlay = elem; }

    enter (elem) {
        this.overlay.classList.add("active");
        this.popup.classList.add("active");

        this.popupcontent.innerHTML = "";
        this.popupcontent.appendChild(elem);
    }

    exit () {
        this.overlay.classList.remove("active");
        this.popup.classList.remove("active");
    }

    setup () {
        this.overlay = document.createElement("div");
        this.overlay.classList.add("overlay");
        this.overlay.addEventListener("click", (e) => { this.exit(); });
        document.body.appendChild(this.overlay);

        this.popup = document.createElement("div");
        this.popup.classList.add("popup");

        // Add exit button
        const exitButton = document.createElement("button");
        exitButton.textContent = "x";
        exitButton.classList.add("exit-popup");
        exitButton.addEventListener("click", (e) => { this.exit(); });
        this.popup.appendChild(exitButton);

        // Add popup content container
        this.popupcontent = document.createElement("div");
        this.popupcontent.classList.add("popup-content");
        this.popup.appendChild(this.popupcontent);

        document.body.appendChild(this.popup);
    }
}