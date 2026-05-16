const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        const span = document.createElement("span");

        span.textContent = task;

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {

            tasks.splice(index, 1);

            saveTasks();

            renderTasks();

        });

        li.appendChild(span);

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });

}

addBtn.addEventListener("click", () => {

    const taskText = taskInput.value;

    if(taskText === "") {
        return;
    }

    tasks.push(taskText);

    saveTasks();

    renderTasks();

    taskInput.value = "";

});

renderTasks();
