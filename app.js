// document.addEventListener("DOMContentLoaded", function () {
//     const taskInput = document.getElementById("input");
//     const addBtn = document.getElementById("send");
//     const taskList = document.getElementById("box");

//     addBtn.addEventListener("click", function () {
//         const taskText = taskInput.value.trim();

//         if (taskText !== "") {
//             // Сообщение пользователя
//             const userMessage = document.createElement("li");
//             userMessage.classList.add("user-message");
//             userMessage.innerText = taskText;
//             taskList.appendChild(userMessage);

//             taskInput.value = "";

//             // Ответ бота через 1 секунду
//             setTimeout(() => {
//                 const botMessage = document.createElement("li");
//                 botMessage.classList.add("bot-message");
//                 botMessage.innerText = getBotReply(taskText);
//                 taskList.appendChild(botMessage);

//                 taskList.scrollTop = taskList.scrollHeight;
//             }, 1000);
//         }
//     });

//     // Отправка при нажатии Enter
//     taskInput.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             addBtn.click();
//         }
//     });

document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("input");
    const addBtn = document.getElementById("send");
    const taskList = document.getElementById("box");

    const botPhrases = [
        // Русский
        { q: "привет", a: "Привет! Как дела?" },
        { q: "как дела", a: "У меня всё отлично!" },
        { q: "пока", a: "До встречи!" },
        { q: "чем занимаешься", a: "Отвечаю на твои вопросы." },
        { q: "как тебя зовут", a: "Я — чат-бот." },
        { q: "что ты умеешь", a: "Я умею отвечать на простые вопросы." },
        { q: "спасибо", a: "Пожалуйста!" },
        { q: "ты умный", a: "Спасибо, я стараюсь!" },
        { q: "ты человек", a: "Нет, я бот." },
        { q: "сколько тебе лет", a: "Я цифровой, у меня нет возраста." },

        // Узбекский
        { q: "salom", a: "Salom! Qalaysan?" },
        { q: "qalaysan", a: "Yaxshi, rahmat!" },
        { q: "xayr", a: "Ko‘rishguncha!" },
        { q: "nima qilayapsan", a: "Men suhbatdoshman." },
        { q: "isming nima", a: "Mening ismim ChatBot." },
        { q: "rahmat", a: "Arzimaydi!" },
        { q: "qayerdansan", a: "Men internetdaman :)" },
        { q: "sen odammi", a: "Yo‘q, men sun’iy intellektman." },
        { q: "yoshin nechida", a: "Menda yosh bo‘lmaydi :)" },
        { q: "gaplashamizmi", a: "Albatta, bemalol yozing!" },

        // Английский
        { q: "hi", a: "Hello! How are you?" },
        { q: "hello", a: "Hello! How are you?" },
        { q: "how are you", a: "I'm good, thank you!" },
        { q: "bye", a: "See you later!" },
        { q: "what's your name", a: "I'm a chatbot." },
        { q: "what can you do", a: "I can answer simple questions." },
        { q: "thank you", a: "You're welcome!" },
        { q: "are you real", a: "I'm a virtual assistant." },
        { q: "how old are you", a: "I don't have an age." },
        { q: "where are you from", a: "I'm from the internet." },
        { q: "can we chat", a: "Sure, let's talk!" },

        // Қазақша
        { q: "сәлем", a: "Сәлем! Қал қалай?" },
        { q: "қал қалай", a: "Жақсы, рахмет!" },
        { q: "сау бол", a: "Кездескенше!" },
        { q: "не істеп жатырсың", a: "Мен сөйлесіп отырмын." },
        { q: "атың кім", a: "Менің атым ЧатБот." },
        { q: "рахмет", a: "Оқасы жоқ!" },
        { q: "сен адамсың ба", a: "Жоқ, мен ботпын." },
        { q: "жасың нешеде", a: "Менде жас жоқ." },
        { q: "қайдансың", a: "Мен интернеттенмін." },
        { q: "сөйлесейікші", a: "Әрине, жазыңыз!" },

        // Тоҷикӣ
        { q: "салом", a: "Салом! Чӣ хелӣ?" },
        { q: "чӣ хелӣ", a: "Хубам, раҳмат!" },
        { q: "хайр", a: "Ба зудӣ вомехурем!" },
        { q: "номат чӣ", a: "Ман ЧатБот ҳастам." },
        { q: "чӣ кор мекунӣ", a: "Ба ту ҷавоб медиҳам :)" },
        { q: "ташаккур", a: "Хоҳиш мекунам!" },
        { q: "ту одамӣ", a: "Не, ман бот ҳастам." },
        { q: "чандсолаӣ", a: "Ман синну сол надорам." },
        { q: "аз куҷоӣ", a: "Аз интернет!" },
        { q: "сӯҳбат мекунем", a: "Албатта, навис!" },

        // Турецкий
        { q: "merhaba", a: "Merhaba! Nasılsın?" },
        { q: "nasılsın", a: "İyiyim, teşekkür ederim!" },
        { q: "güle güle", a: "Görüşürüz!" },
        { q: "adın ne", a: "Ben bir sohbet botuyum." },
        { q: "ne yapıyorsun", a: "Seninle konuşuyorum." },
        { q: "teşekkürler", a: "Rica ederim!" },
        { q: "kaç yaşındasın", a: "Benim yaşım yok :)" },
        { q: "nerelisin", a: "Ben internetten geldim." },
        { q: "sen insan mısın", a: "Hayır, ben bir yapay zekayım." },
        { q: "konuşalım mı", a: "Evet, hadi konuşalım!" }
    ];

    const fuse = new Fuse(botPhrases, {
        keys: ['q'],
        threshold: 0.4,
    });

    addBtn.addEventListener("click", handleSend);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") handleSend();
    });

    function handleSend() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const userMessage = document.createElement("li");
            userMessage.classList.add("user-message");
            userMessage.innerText = taskText;
            taskList.appendChild(userMessage);
            taskInput.value = "";

            setTimeout(() => {
                const botMessage = document.createElement("li");
                botMessage.classList.add("bot-message");
                botMessage.innerText = getBotReply(taskText);
                taskList.appendChild(botMessage);
                taskList.scrollTop = taskList.scrollHeight;
            }, 500);
        }
    }

    function getBotReply(message) {
        message = message.toLowerCase();
        const result = fuse.search(message);
        return result.length > 0 ? result[0].item.a : "...";
    }
});
