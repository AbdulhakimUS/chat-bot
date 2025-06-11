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

        // Русский
        if (message.includes("привет")) return "Привет! Как дела?";
        if (message.includes("как дела")) return "У меня всё отлично!";
        if (message.includes("пока")) return "До встречи!";
        if (message.includes("чем занимаешься")) return "Отвечаю на твои вопросы.";
        if (message.includes("как тебя зовут")) return "Я — чат-бот.";
        if (message.includes("что ты умеешь")) return "Я умею отвечать на простые вопросы.";
        if (message.includes("спасибо")) return "Пожалуйста!";
        if (message.includes("ты умный")) return "Спасибо, я стараюсь!";
        if (message.includes("ты человек")) return "Нет, я бот.";
        if (message.includes("сколько тебе лет")) return "Я цифровой, у меня нет возраста.";


        // Узбекский
        if (message.includes("salom")) return "Salom! Qalaysan?";
        if (message.includes("qalaysan")) return "Yaxshi, rahmat!";
        if (message.includes("xayr")) return "Ko‘rishguncha!";
        if (message.includes("nima qilayapsan")) return "Men suhbatdoshman.";
        if (message.includes("isming nima")) return "Mening ismim ChatBot.";
        if (message.includes("rahmat")) return "Arzimaydi!";
        if (message.includes("qayerdansan")) return "Men internetdaman :)";
        if (message.includes("sen odammi")) return "Yo‘q, men sun’iy intellektman.";
        if (message.includes("yoshin nechida")) return "Menda yosh bo‘lmaydi :)";
        if (message.includes("gaplashamizmi")) return "Albatta, bemalol yozing!";


        // Английский
        if (message.includes("hi") || message.includes("hello")) return "Hello! How are you?";
        if (message.includes("how are you")) return "I'm good, thank you!";
        if (message.includes("bye")) return "See you later!";
        if (message.includes("what's your name")) return "I'm a chatbot.";
        if (message.includes("what can you do")) return "I can answer simple questions.";
        if (message.includes("thank you")) return "You're welcome!";
        if (message.includes("are you real")) return "I'm a virtual assistant.";
        if (message.includes("how old are you")) return "I don't have an age.";
        if (message.includes("where are you from")) return "I'm from the internet.";
        if (message.includes("can we chat")) return "Sure, let's talk!";

        //Қазақша
        if (message.includes("сәлем")) return "Сәлем! Қал қалай?";
        if (message.includes("қал қалай")) return "Жақсы, рахмет!";
        if (message.includes("сау бол")) return "Кездескенше!";
        if (message.includes("не істеп жатырсың")) return "Мен сөйлесіп отырмын.";
        if (message.includes("атың кім")) return "Менің атым ЧатБот.";
        if (message.includes("рахмет")) return "Оқасы жоқ!";
        if (message.includes("сен адамсың ба")) return "Жоқ, мен ботпын.";
        if (message.includes("жасың нешеде")) return "Менде жас жоқ.";
        if (message.includes("қайдансың")) return "Мен интернеттенмін.";
        if (message.includes("сөйлесейікші")) return "Әрине, жазыңыз!";

        //Тоҷикӣ
        if (message.includes("салом")) return "Салом! Чӣ хелӣ?";
        if (message.includes("чӣ хелӣ")) return "Хубам, раҳмат!";
        if (message.includes("хайр")) return "Ба зудӣ вомехурем!";
        if (message.includes("номат чӣ")) return "Ман ЧатБот ҳастам.";
        if (message.includes("чӣ кор мекунӣ")) return "Ба ту ҷавоб медиҳам :)";
        if (message.includes("ташаккур")) return "Хоҳиш мекунам!";
        if (message.includes("ту одамӣ")) return "Не, ман бот ҳастам.";
        if (message.includes("чандсолаӣ")) return "Ман синну сол надорам.";
        if (message.includes("аз куҷоӣ")) return "Аз интернет!";
        if (message.includes("сӯҳбат мекунем")) return "Албатта, навис!";

        // Турецкий
        if (message.includes("merhaba")) return "Merhaba! Nasılsın?";
        if (message.includes("nasılsın")) return "İyiyim, teşekkür ederim!";
        if (message.includes("güle güle")) return "Görüşürüz!";
        if (message.includes("adın ne")) return "Ben bir sohbet botuyum.";
        if (message.includes("ne yapıyorsun")) return "Seninle konuşuyorum.";
        if (message.includes("teşekkürler")) return "Rica ederim!";
        if (message.includes("kaç yaşındasın")) return "Benim yaşım yok :)";
        if (message.includes("nerelisin")) return "Ben internetten geldim.";
        if (message.includes("sen insan mısın")) return "Hayır, ben bir yapay zekayım.";
        if (message.includes("konuşalım mı")) return "Evet, hadi konuşalım!";

        return "Я пока не знаю, что ответить...";
    }

});
