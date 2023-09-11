import Content from "./content.js";
import Data from "./data.js";
import ItemList from "./item-list.js";
import { compareAsc, compareDesc, isThisWeek, isToday, parseISO } from "date-fns";

export default class ToDoList extends ItemList {
    #DATE_TYPES = {
        NONE: 0,
        TODAY: 1,
        WEEK: 2
    };

    dateType = this.#DATE_TYPES.NONE;

    constructor (id) {
        super(id);
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

    /**
     * 
     * @param {Data} data 
     * @param {Content} content 
     */
    render (data, content) {
        this.list.innerHTML = "";

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
            const item = document.createElement("div");
            item.classList.add("todo-item");
            
            // Add Checkbox for Item
            const itemCheck = document.createElement("input");
            itemCheck.type = "checkbox";

            item.appendChild(itemCheck);
            this.list.appendChild(item);
        });
    }
};