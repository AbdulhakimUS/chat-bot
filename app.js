document.addEventListener("DOMContentLoaded" , function () {
    const taskInput = document.getElementById("input");
    const addBtn = document.getElementById("send");
    const taskList = document.getElementById("box");
    const clear = document.getElementById("clear");
 
    addBtn.addEventListener("click" , function () {
         const taskText = taskInput.value.trim();
 
         if (taskText !== "") {
             const taskItem = document.createElement("li");
             taskItem.innerText = taskText;
 
             const deleteBtn = document.createElement("clear");
            //  deleteBtn.innerText = "🗑️";
             deleteBtn.classList.add("delete");
             taskItem.appendChild(deleteBtn);
 
             taskItem.addEventListener("click" , function () {
                 taskItem.classList.toggle("complate");
             });
 
             deleteBtn.addEventListener("click" , function () {
                 taskList.removeChild(taskItem);
             });
 
             taskList.appendChild(taskItem);
             taskInput.value = "";
         }
    });
    taskInput.addEventListener("keypress" , function (event) {
         if (event.key === "Enter") {
             addBtn.click();
         }
    });
 });