    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = taskText;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {

        li.remove();

    });

    li.appendChild(span);

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

});
