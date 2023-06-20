export default class ToDoList {
    constructor (popup) {
        this.popup = popup;

        // Build Content Dom Element
        this.content = document.createElement("div");
        this.content.classList.add("content");

        if (localStorage.getItem("todos")) {
            this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
        } else 
            this.todos = [];
    }

    get todos () { return this._todos; }

    set todos (arr) { this._todos = arr; }

    get selection () { return this._selection; }

    set selection (project) {
        this._selection = project;
        this.#buildContent();
    }

    get content () { return this._content; }

    set content (elem) { this._content = elem; }

    get newTodo () { return this._newTodo; }

    set newTodo (elem) { this._newTodo = elem; }

    #buildContent () {
        this.content.innerHTML = "";

        // Add Title to Content
        const contentTitle = document.createElement("h1");
        contentTitle.textContent = this.selection.name;

        // Add Project Specific List
        // TODO: this

        // Add New-To-Do Button
        const todoButton = document.createElement("button");
        todoButton.classList.add("new-to-do-button");
        todoButton.textContent = "+ To Do";
        todoButton.addEventListener("click", (e) => {
            // TODO: This
        });

        this.content.appendChild(contentTitle);
        this.content.appendChild(todoButton);
    }

    setup () {
        this.#buildContent();
    }
};