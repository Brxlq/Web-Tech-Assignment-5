//Task 0

console.log("Yerkebulan Sovet, Group: SE-2430");
alert("Hello, JavaScript World!");

//Task 1

let name = "Yerkebulan";
let age = 19;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);


let a = 2, b = 3;
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Division:", a / b);

console.log("Hello " + name + ", your age is " + age);

//Task 2

function changeText() {
  document.getElementById("text").textContent = "Привет, мир!";
}

//Task 3

function changeColor() {
  document.getElementById("box").style.backgroundColor = "lightblue";
}
function changeFont() {
  document.getElementById("box").style.fontSize = "24px";
}

//Task 4

function addItem() {
  const li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("list").appendChild(li);
}

function removeItem() {
  const list = document.getElementById("list");
  list.removeChild(list.lastElementChild);
}

//Task 5

const box = document.getElementById("colorBox");
box.addEventListener("mouseover", () => box.style.backgroundColor = "orange");
box.addEventListener("mouseout", () => box.style.backgroundColor = "lightgray");

//Task 6

const input = document.getElementById("textInput");
input.addEventListener("keyup", () => {
  document.getElementById("display").textContent = input.value;
});

//Task 7

function calculate(op) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  let res;
  if (op === '+') res = n1 + n2;
  if (op === '-') res = n1 - n2;
  if (op === '*') res = n1 * n2;
  if (op === '/') res = n1 / n2;
  document.getElementById("result").textContent = "Result: " + res;
}

//Task 8

const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = []; 


addBtn.onclick = () => {
  const title = document.getElementById("title").value.trim();
  const desc = document.getElementById("desc").value.trim();

  if (title === "" || desc === "") {
    alert("Please fill all fields!");
    return;
  }

  const task = { title, desc, completed: false };
  tasks.push(task);

  renderTasks();

  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
};


function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${task.title}</strong><p>${task.desc}</p><button class="delete-btn">✕</button>`;
    
    if (task.completed) li.classList.add("completed");

 
    li.onclick = () => {
      task.completed = !task.completed;
      renderTasks();
    };


    li.querySelector(".delete-btn").onclick = (event) => {
      event.stopPropagation();
      tasks.splice(index, 1);
      renderTasks();
    };

    taskList.appendChild(li);
  });
}
