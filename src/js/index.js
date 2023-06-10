import "../css/normalise.css";
import "../css/style.css";
import Layout from "./layout.js";
import Group from "./group.js";

const exampleGroupNames = [
    {
        key: "Fitness",
        value: [
            {
                title: "Run 5k",
                priority: 5
            }, {
                title: "Swim 1k",
                priority: 3
            }, {
                title: "Netball Training",
                priority: 5
            }
        ]
    }, {
        key: "Study",
        value: [
            {
                title: "The Odin Project",
                priority: 4
            }, {
                title: "Machine Learning",
                priority: 3
            }, {
                title: "French",
                priority: 5
            }
        ]
    }, {
        key: "Work",
        value: [
            {
                title: "Aleksi",
                priority: 5
            }, {
                title: "Eldon",
                priority: 3
            }, {
                title: "Wallace",
                priority: 1
            }
        ]
    }
];
const group = new Group();

exampleGroupNames.forEach(example => {
    group.addToDoGrouping(example.key);
    example.value.forEach(val => {
        group.addToDo(example.key, val.title, val.priority);
    });
});

const layout = new Layout(group);
layout.render();