const input = document.querySelector("#myInpt");
const addbtn = document.querySelector("#addBtn");
const tasksDiv = document.querySelector("#tasks");

const tasks = [];

const createElement = (text) => {
    const element = `<li>${text}</li>`;
    return element
};

const render = () => {
    let tasksHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const element = createElement(tasks[i]);
        tasksHTML += element;
    }
    tasksDiv.innerHTML = tasksHTML;
};

const getValue = () => {
    const value = input.value;
    tasks.push(value);
    render();
};

render();

addBtn.onclick = getValue;