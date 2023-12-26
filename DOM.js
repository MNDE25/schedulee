// 1. Use getElementById to select an element by ID

// 2. Use getElementsByName to select elements by name

// 3. Use getElementsByTagName to select elements by tag name

// 4. Use getElementsByClassName to select elements by class name

const div = document.getElementById("myDiv")
console.log(div);

div.style.backgroundColor = 'red'
div.id = "divv"

const namee = document.getElementsByName("username")
console.log(namee);


const tagnamee = document.getElementsByTagName("li")
console.log(tagnamee[1]);

const classnamee = document.getElementsByClassName("item")
console.log(classnamee[2]);

const classnamee0 = document.querySelector(".item")
console.log(classnamee0);

const classnameall = document.querySelectorAll(".item")
console.log(classnameall);