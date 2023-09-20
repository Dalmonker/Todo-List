const taskInput = document.getElementById("task");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
  let taskText = taskInput.value;

  let li = document.createElement("li");
  taskList.appendChild(li);
  li.appendChild(document.createTextNode(taskText));

  li.classList.add("element-li");

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(deleteButton);

  taskInput.value = "";
}

addButton.addEventListener("click", addTask);
