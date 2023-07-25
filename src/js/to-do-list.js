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
            else if (this.dateType === this.#DATE_TYPES.WEEK && isThisWeek(todo.date))
                newList.push(todo);
            else
                newList.push(todo);
        });

        if (asc)
            newList.sort(compareAsc);
        else
            newList.sort(compareDesc);

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

        if (content.title !== "To-Dos") {
            this.#setDateType(content.title.toLowerCase());
            const newData = this.#sort(data);

            newData.forEach(todo => {
                
            });
        }
    }
};