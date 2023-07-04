export default class ToDoTable {
    constructor (list) {
        this.list = list;
        this.table = document.createElement("table");
        this.table.classList.add("to-do-table");
    }

    get table () { return this._table; }

    set table (elem) { this._table = elem; }

    get list () { return this._list; }

    set list (arr) { this._list = arr; }
};