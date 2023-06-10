export default class ToDoList {
    constructor (name) {
        this.name = name;
        this.todos = {};
    }

    get name () { return this._name; }

    set name (value) { this._name = value; }

    get todos () { return this._todos; }

    set todos (values) { this._todos = values; }

    addToDo (title, priority) {
        this.todos[title] = priority;
    }
};