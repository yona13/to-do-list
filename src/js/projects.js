export default class Projects {
    constructor (popup, todos) {
        this.popup = popup;
        this.todos = todos;

        // Build Sidebar DOM Element
        this.sidebar = document.createElement("div");
        this.sidebar.classList.add("sidebar");

        // Build New-Project Popup DOM Element
        this.newProject = document.createElement("div");
        this.newProject.classList.add("project-popup");

        if (localStorage.getItem("projects"))
            this.projects = JSON.parse(localStorage.getItem("projects") || "[]");
        else
            this.projects = [];
        this.todos.projects = this.projects;

    }

    get projects () { return this._projects; }

    set projects (arr) { this._projects = arr; }

    get sidebar () { return this._sidebar; }

    set sidebar (elem) { this._sidebar = elem; }

    get popup () { return this._popup; }

    set popup (obj) { this._popup = obj; }

    get todos () { return this._todos; }

    set todos (obj) { this._todos = obj; }

    get newProject () { return this._newProject; }

    set newProject (elem) { this._newProject = elem; }

    #getProjectIndex (name) {
        let projectIndex = -1;
        for (var i = 0; i < this.projects.length; i++)
            if (this.projects[i].name === name)
                projectIndex = i;

        return projectIndex;
    }

    #getRandomColour () {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return `#${n.slice(0, 6)}`;
    }

    #buildPopup () {
        this.newProject.innerHTML = "";

        // Input and Label for New Project Name
        const newNameLabel = document.createElement("label");
        newNameLabel.for = "new-project-name";
        newNameLabel.textContent = "New Project Title";
        const newProjectName = document.createElement("input");
        newProjectName.type = "text"
        newProjectName.classList.add("new-project-name");
        newProjectName.id = "new-project-name";

        // Input and Label for New Project Colour
        const newColourLabel = document.createElement("label");
        newColourLabel.for = "new-project-colour";
        newColourLabel.textContent = "New Project Colour";
        const newColourSelector = document.createElement("input");
        newColourSelector.type = "color";
        newColourSelector.value = this.#getRandomColour();
        newColourSelector.classList.add("new-project-colour");
        newColourSelector.id = "new-project-colour";

        // Submit Button
        const projectEnter = document.createElement("button");
        projectEnter.classList.add("project-submit");
        projectEnter.textContent = "Submit";
        projectEnter.addEventListener("click", (e) => { 
            if (newProjectName.value !== "") {
                this.add(newProjectName.value, newColourSelector.value);
                this.popup.exit();
                this.sidebar.innerHTML = "";
                this.#buildSidebar();
            } else 
                window.alert("Please enter a project title");
        });

        this.newProject.appendChild(newNameLabel);
        this.newProject.appendChild(newProjectName);
        this.newProject.appendChild(newColourLabel);
        this.newProject.appendChild(newColourSelector);
        this.newProject.appendChild(projectEnter);
    }

    #buildSidebar () {
        // Add Projects Title
        const projectsTitle = document.createElement("button");
        projectsTitle.classList.add("projects-title");
        projectsTitle.textContent = "Projects";
        projectsTitle.addEventListener("click", (e) => { this.setDefault(); });
        this.sidebar.appendChild(projectsTitle);

        // Add List Element
        const projectsList = document.createElement("ul");
        projectsList.classList.add("projects-list");
        this.projects.forEach(p => {
            if (p.name !== "") {
                const projectListElement = document.createElement("div");
                projectListElement.classList.add("project-list-select")
                projectListElement.addEventListener("click", (e) => { this.todos.selection = p });

                const colourCode = document.createElement("div");
                colourCode.classList.add("project-colour-code");
                colourCode.setAttribute("style", `background-color: ${p.colour}`);
                const projectTitle = document.createElement("div");
                projectTitle.textContent = p.name;

                const projectDelButton = document.createElement("button");
                projectDelButton.classList.add("project-cross-button");
                projectDelButton.textContent = "x";
                projectDelButton.addEventListener("click", (e) => { 
                    this.delete(p.name);
                    e.stopPropagation();
                });

                projectListElement.appendChild(colourCode);
                projectListElement.appendChild(projectTitle);
                projectListElement.appendChild(projectDelButton);
                projectsList.appendChild(projectListElement);
            }
        });
        const addProjectButton = document.createElement("button");
        addProjectButton.classList.add("add-project");
        addProjectButton.textContent = "+ Project";
        addProjectButton.addEventListener("click", (e) => {
            this.#buildPopup();
            this.popup.enter(this.newProject);
        });
        this.sidebar.appendChild(projectsList);
        this.sidebar.appendChild(addProjectButton);
        
    }

    add (name, colour) {
        if (this.#getProjectIndex(name) === -1) {
            this.projects.push({name: name, colour: colour});
            this.save();
        }
    }

    delete (name) {
        const projectIndex = this.#getProjectIndex(name);
        if (projectIndex !== -1)
            this.projects.splice(projectIndex, 1);
        this.save();

        if (this.todos.selection.name === name)
            this.setDefault();
        
        this.sidebar.innerHTML = "";
        this.#buildSidebar();
    }

    save () { localStorage.setItem("projects", JSON.stringify(this.projects)); }

    log () {
        console.log("Current Projects:");
        this.projects.forEach(project => {
            if (project.name !== "Projects")
                console.log(`Name: ${project.name}; Colour: ${project.colour};`);
        });
    }

    expand () {
        this.sidebar.classList.add("expand");
    }

    collapse () {
        this.sidebar.classList.remove("expand");
    }

    setDefault () {
        this.todos.selection = {
            name: "Projects",
            colour: ""
        };
    }

    setup () {
        this.#buildSidebar();
        this.setDefault();
    }
};