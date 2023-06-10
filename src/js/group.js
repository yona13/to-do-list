import ToDoList from "./to-do-list.js";

export default class Group {
    constructor () {
        this.todos = [];
    }
    
    get todos () { return this._todos; }

    set todos (todoList) { this._todos = todoList; }

    addToDoGrouping (name) {
        this.todos.push(new ToDoList(name));
    }

    addToDo (name, title, priority) {
        this.todos.forEach(todo => {
            if (todo.name === name)
                todo.addToDo(title, priority);
        });
        console.log(`${name}: Item: (${title}, ${priority});`);
    }
};