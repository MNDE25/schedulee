const todoTasks = [];
const inProgressTasks = [];
const stuckTasks = [];
const doneTasks = [];
console.log(todoTasks);

function addCardMenu() {
    const add = document.getElementById("CreateModal")
    add.style.display = "flex";
}

function hideModal() {
    const add = document.getElementById("CreateModal")
    add.style.display = "none";
}

function getValues() {
const tittleInput = document.getElementById("addCardMenuTittle").value;
const describInput = document.getElementById("addCardMenuDesc").value;
const statsSelect = document.getElementById("addCardMenuStats").value;
const priorSelect = document.getElementById("addCardMenuPrior").value;
todoTasks.push( { tittleInput, describInput, statsSelect, priorSelect } );
resetValues();
}

function resetValues() {
document.getElementById("addCardMenuTittle").value="";
document.getElementById("addCardMenuDesc").value="";
document.getElementById("addCardMenuStats").value="";
document.getElementById("addCardMenuPrior").value="";
}