import { compareAsc, format } from "date-fns";
import Data from "./data.js";

export default class ToDoTable {
    /**
     * 
     * @param {String} project 
     * @param {Data} data 
     */
    constructor (project, data) {
        this.project = project;
        this.data = data;
        this.table = document.createElement("table");
        this.table.classList.add("to-do-table");

        this.#build();
    }

    get project () { return this._project; }

    set project (value) { this._project = value; }

    get table () { return this._table; }

    set table (elem) { this._table = elem; }

    get data () { return this._data; }

    set data (obj) { this._data = obj; }

    #generateDateList () {
        const list = [];
        this.data.todos.forEach(todo => {
            if (list.indexOf(todo.date) === -1)
                list.push(todo.date);
        });
        console.log(list);
    }

    #build () {
        // Add Header Element to To-Do Table
        const header = document.createElement("thead");
        const topRow = document.createElement("tr");
        const title = document.createElement("th");
        title.colSpan = 2;  // TODO: Update to include checkbox
        title.textContent = this.project;
        const dateHeader = document.createElement("th");
        dateHeader.classList.add("date-header");
        dateHeader.textContent = "Date";
        topRow.appendChild(title);
        topRow.appendChild(dateHeader);
        header.appendChild(topRow);

        this.table.appendChild(header);

        // Add Body Element to To-Do Table
        const body = document.createElement("tbody");
        const dateList = this.#generateDateList();

        this.data.todos.forEach(todo => {
            // Add Row Element to Body
            const row = document.createElement("tr");

            // TODO: Add Checkbox for Completion of Task

            // Add Project Cell to Row
            const projectCell = document.createElement("td");

            // Default Projects Can be left Blank with Default Colour
            if (todo.project.colour !== "")
                projectCell.setAttribute("style", `background-color: ${todo.project.colour}`);
            projectCell.textContent = todo.project.name;

            // Add To-Do Name to Row
            const nameCell = document.createElement("td");
            nameCell.textContent = todo.name;

            // Add Due-Date to Row
            const dateCell = document.createElement("td");
            dateCell.textContent = todo.date;

            // Append Cells to Row
            // TODO: Append Checkbox to Row
            row.appendChild(projectCell);
            row.appendChild(nameCell);
            row.appendChild(dateCell);

            // Append Row to Body
            body.appendChild(row);
        });

        this.table.appendChild(body);
    }
};