export default class CustomSelect {
    constructor (arr, popup) {
        this.select = document.createElement("div");
        this.select.classList.add("dropdown");
        this.#build(arr, popup);

        // Add Event Listeners
        this.select.addEventListener("click", (e) => {
            e.stopPropagation();
            this.select.classList.toggle("open");
        });
        popup.addEventListener("click", (e) => {
            if (this.select.classList.contains("open"))
                this.select.classList.remove("open");
        });
    }

    get select () { return this._select; }

    set select (elem) { this._select = elem; }

    get placeHolder () { return this._placeHolder; }

    set placeHolder (elem) { this._placeHolder = elem; }

    get id () { return this._select.id; }

    set id (identifier) { this._select.id = identifier; } 

    toggle (event) {
        event.stopPropagation();
        this.select.classList.toggle("open");
    }

    #build (arr, popup) {
        // Create Placeholder Input
        this.placeHolder = document.createElement("input");
        this.placeHolder.type = "text";
        this.placeHolder.placeholder = "Select a Project";
        this.placeHolder.readOnly = true;

        // Create Options List
        const options = document.createElement("ul");
        options.classList.add("options");
        arr.forEach(o => {
            const option = document.createElement("li");
            option.classList.add("option");
            option.textContent = o;
            option.addEventListener("click", (e) => {
                this.placeHolder.value = e.currentTarget.textContent;
            });
            options.appendChild(option);
        });

        // Add Elements to Custom Select
        this.select.appendChild(this.placeHolder);
        this.select.appendChild(options);
    }
};