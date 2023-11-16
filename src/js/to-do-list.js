import Content from "./content.js";
import Data from "./data.js";
import ItemList from "./item-list.js";
import { compareAsc, compareDesc, isThisWeek, isToday, parseISO } from "date-fns";

export default class ToDoList extends ItemList {
    #DATE_TYPES = {
        NONE: 0,
        TODAY: 1,
        WEEK: 2,
        COMPLETE: 3
    };

    get data () { return this._data; }

    set data (update) { this._data = update; }

    get content () { return this._content; }

    set content (fresh) { this._content = fresh; }

    dateType = this.#DATE_TYPES.NONE;

    constructor (id) {
        super(id);
        this.data = {};
    }

    /**
     * 
     * @param {Data} data 
     * @param {Boolean} asc
     * @returns {Object[]}
     */
    #sort(data, asc=true) {
        const newList = [];
        data.todos.forEach(todo => {
            if (this.dateType === this.#DATE_TYPES.TODAY && isToday(parseISO(todo.date)))
                newList.push(todo);
            else if (this.dateType === this.#DATE_TYPES.WEEK && isThisWeek(parseISO(todo.date)))
                newList.push(todo);
            // else if (todo.
            else if (this.dateType === this.#DATE_TYPES.NONE)
                newList.push(todo);
        });

        if (asc)
            newList.sort(compareAsc);
        else
            newList.sort(compareDesc);

        console.log(newList);

        return newList;
    }
    
    #setDateType (title) {
        if (title === "today")
            this.dateType = this.#DATE_TYPES.TODAY;
        else if (title === "week")
            this.dateType = this.#DATE_TYPES.WEEK;
        else if (title === "UPCOMING")
            this.dateType = this.#DATE_TYPES.UPCOMING;
        else
            this.dateType = this.#DATE_TYPES.NONE;
    }

    listener (name) {
        this.data.toggleToDoComplete(name);
        this.render(this.data, this.content);
    }

    /**
     * 
     * @param {Data} data 
     * @param {Content} content 
     */
    render (data, content) {
        this.list.innerHTML = "";
        this.data = data;
        this.content = content;

        this.#setDateType(content.title.toLowerCase());
        const newData = this.#sort(data);
        console.log(newData.length);

        if (newData.length === 0) {
            const emptySet = document.createElement("li");
            emptySet.textContent = "No Plans!";
            this.list.appendChild(emptySet);
        }

        newData.forEach(todo => {
            console.log(todo);
            // Create To-Do Item for List
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("to-do-item-container");

            // Add Colour Code
            const colourCode = document.createElement("div");
            colourCode.classList.add("to-do-colour-code");
            let colour = todo.project.colour;
            if (colour === "")
                colour = "#575366";
            colourCode.style.backgroundColor = colour;
            itemContainer.appendChild(colourCode);

            const item = document.createElement("div");
            item.classList.add("to-do-item");
            
            // Add Checkbox for Item
            const itemCheck = document.createElement("input");
            itemCheck.type = "checkbox";
            itemCheck.addEventListener("click", (e) => { this.listener(todo.name); });
            
            // Add Content for Item
            const itemContent = document.createElement("div");
            itemContent.id = todo.id;

            // Strike-through Name if Complete
            if (todo.complete) {
                itemContent.innerHTML = todo.name.strike();
                itemCheck.checked = true;
            } else
                itemContent.textContent = todo.name;

            // Add Details Button

            // Add Date

            // Add Delete Button

            item.appendChild(itemCheck);
            item.appendChild(itemContent);
            itemContainer.appendChild(item);
            this.list.appendChild(itemContainer);
        });
    }
};