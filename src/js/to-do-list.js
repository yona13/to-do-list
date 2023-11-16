import Content from "./content.js";
import Data from "./data.js";
import ItemList from "./item-list.js";
import Popup from "./popup.js";
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

    get popup () { return this._popup; }

    set popup (obj) { this._popup = obj; }

    dateType = this.#DATE_TYPES.NONE;

    constructor (id, popup) {
        super(id);
        this.data = {};
        this.popup = popup;
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

    #popup (todo) {
        console.log(todo.description);
        // Create Popup Element
        const detailsPopup = document.createElement("div");
        detailsPopup.classList.add("to-do-details-popup");

        // Add To Do Title
        const popupTitle = document.createElement("div");
        popupTitle.classList.add("to-do-details-title");
        popupTitle.textContent = todo.name;

        // Append Elements to Popup Window
        detailsPopup.appendChild(popupTitle);
        this.popup.enter(detailsPopup);
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
            
            // Left-Hand Item Block
            const leftBlock = document.createElement("div");
            leftBlock.classList.add("to-do-left-block");

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

            // Right-Hand Item Block
            const rightBlock = document.createElement("div");
            rightBlock.classList.add("to-do-right-block");
            
            // Add Details Button
            const details = document.createElement("button");
            details.classList.add("to-do-details");
            details.textContent = "Details";
            details.addEventListener("click", (e) => {
                this.#popup(todo);
            });

            // Add Date

            // Add Delete Button

            // Append Children to Elements
            leftBlock.appendChild(itemCheck);
            leftBlock.appendChild(itemContent);
            rightBlock.appendChild(details);
            item.appendChild(leftBlock);
            item.appendChild(rightBlock);
            itemContainer.appendChild(item);
            this.list.appendChild(itemContainer);
        });
    }
};