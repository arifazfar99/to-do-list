document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText) {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(taskText) {
    const taskItem = document.createElement("li");
    const taskCheckbox = document.createElement("input");
    const taskLabel = document.createElement("label");
    const deleteButton = document.createElement("button");

    taskCheckbox.type = "checkbox";
    taskLabel.textContent = taskText;
    deleteButton.textContent = "Delete";

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskCheckbox.addEventListener("change", function () {
      if (taskCheckbox.checked) {
        taskLabel.classList.add("completed");
      } else {
        taskLabel.classList.remove("completed");
      }
    });

    deleteButton.addEventListener("click", function () {
      taskItem.remove();
    });
  }
});
