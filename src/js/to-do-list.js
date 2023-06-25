export default class ToDoList {
    constructor (popup) {
        this.popup = popup;

        // Build Content Dom Element
        this.content = document.createElement("div");
        this.content.classList.add("content");
        
        // Build New-Todo Popup DOM Element
        this.newTodo = document.createElement("div");
        this.newTodo.classList.add("todo-popup");

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

    get projects () { return this._projects; }

    set projects (arr) { this._projects = arr; }

    #buildPopup () {
        this.newTodo.innerHTML = "";

        // Create List of Project Options
        const projectSelectLabel = document.createElement("label");
        projectSelectLabel.for = "project-select";
        projectSelectLabel.textContent = "Choose a Project";
        // TODO: Continue
    }

    #buildContent () {
        this.content.innerHTML = "";

        // Add Title to Content
        const contentTitle = document.createElement("h1");
        contentTitle.classList.add("content-title");
        contentTitle.textContent = this.selection.name;

        // Add Project Specific List
        const projectList = document.createElement("ul");
        projectList.classList.add("content-list");
        // TODO: Replace ul with table?

        // Add New-To-Do Button
        const todoButton = document.createElement("button");
        todoButton.classList.add("add-to-do");
        todoButton.textContent = "+ To Do";
        todoButton.addEventListener("click", (e) => {
            this.#buildPopup();
            this.popup.enter(this.newTodo);
        });

        this.content.appendChild(contentTitle);
        this.content.appendChild(projectList);
        this.content.appendChild(todoButton);
    }

    setup () {
        this.#buildContent();
    }
};