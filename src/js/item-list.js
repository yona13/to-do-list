export default class ItemList {
    constructor (id) {
        this.list = document.createElement("ul");
        this.list.id = `${id}-list`;
    }

    get list () { return this._list; }

    set list (elem) { this._list = elem; }
};