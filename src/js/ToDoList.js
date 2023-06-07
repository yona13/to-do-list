export default class ToDoList {
    constructor (name) {
        this.name = name;
    }

    get name () { return this._name; }

    set name (value) { this._name = value; }
};