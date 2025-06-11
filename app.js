document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("input");
    const addBtn = document.getElementById("send");
    const taskList = document.getElementById("box");

    addBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Сообщение пользователя
            const userMessage = document.createElement("li");
            userMessage.classList.add("user-message");
            userMessage.innerText = taskText;
            taskList.appendChild(userMessage);

            taskInput.value = "";

            // Ответ бота через 1 секунду
            setTimeout(() => {
                const botMessage = document.createElement("li");
                botMessage.classList.add("bot-message");
                botMessage.innerText = getBotReply(taskText);
                taskList.appendChild(botMessage);

                taskList.scrollTop = taskList.scrollHeight;
            }, 1000);
        }
    });

    // Отправка при нажатии Enter
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addBtn.click();
        }
    });

    // Ответ бота
    function getBotReply(message) {
        message = message.toLowerCase();

        if (message.includes("привет")) return "Привет! Как дела?";
        if (message.includes("как дела")) return "У меня всё отлично!";
        if (message.includes("пока")) return "До встречи!";
        return "Я пока не знаю, что ответить...";
    }
});
