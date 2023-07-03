export default class Checkbox {
    constructor (id) {
        this.checkbox = document.createElement("input");
        this.checkbox.classList.add("checkbox");
        this.checkbox.classList.add("checked");
        this.checkbox.type = "radio";
        this.checkbox.id = id;
        this.checkbox.addEventListener("click", (e) => { this.checkbox.classList.toggle("checked"); });
    }

    get checkbox () { return this._checkbox; }

    set checkbox (elem) { this._checkbox = elem; }

    checked () {
        return this.checkbox.classList.contains("checked");
    }
};