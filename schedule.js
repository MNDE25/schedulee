function addCardMenu() {
    const add = document.getElementById("CreateModal")
    add.style.display = "flex";
}

function hideModal() {
    const add = document.getElementById("CreateModal")
    add.style.display = "none";
}

function getValues() {
const tittleInput = document.getElementById("addCardMenuTittle");
const describInput = document.getElementById("addCardMenuDesc");
const statsSelect = document.getElementById("addCardMenuStats");
const priorSelect = document.getElementById("addCardMenuPrior")
console.log(tittleInput.value);
console.log(describInput.value);
console.log(statsSelect.value);
console.log(priorSelect.value);
}