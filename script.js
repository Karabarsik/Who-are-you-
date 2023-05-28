const questions = [
    {
        question: "Тебя предали,твои действия?",
        answers: [
            {
                text: "Убью обманщика",
                value: 1
            },
            {
                text: "дам ему второй шанс",
                value: 3
            },
            {
                text: "Прощу",
                value: 2
            },
            {
                text: "Он расплатится перед верховным судом!!!",
                value: 4
            },
    ]
    },
    {
        question: "Какого цветы твой световой меч?",
        answers: [
            {
                text: "Красный",
                value: 1
            },
            {
                text: "Зелёный",
                value: 2
            },
            {
                text: "Синий",
                value: 2
            },
            {
                text: "Фиолетовый",
                value: 2
            },
    ]
    },
    {
        question: "Ты уже 15 лет падаван, но тебя никак не сделают магистром, как ты на это отреагируешь?",
        answers: [
            {
                text: "Потерплю, терпение-сила",
                value: 4
            },
            {
                text: "Уничтожу совет и стану предводителем",
                value: 1
            },
            {
                text: "Зачем они мне нужны? Пойду съем мустафарской капусты",
                value: 2
            },
            {
                text: "Буду умолять повысить меня",
                value: 2
            },
    ]
    },
    {
        question: "Тебе говорят убить виновника тысячи смертей, что ты сделаешь? ",
        answers: [
            {
                text: "Поступлю,как просят",
                value: 1
            },
            {
                text: "Дам ему бластер, и отпущу его",
                value: 2
            },
            {
                text: "Это решит совет джедаев",
                value: 3
            },
            {
                text: "Убью и его, и приказчика",
                value: 1
            },
    ]
    },
    {
        question: "Твоё имя?",
        answers: [
            {
                text: "Дарт Вейдер?",
                value: 1
            },
            {
                text: "Граф Дуку",
                value: 2
            },
            {
                text: "Энакин Скайвокер",
                value: 3
            },
            {
                text: "Йода",
                value: 4
            },
    ]
    },
];

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Следующий вопрос";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNu = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNu + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnsw);
    })
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
};

function selectAnsw(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.value == 0;
    if (isCorrect) {
        selectBtn.classList.add("1");
        score + 1;
    } else if (isCorrect) {
        value=2;
        score + 2;
    } else if (isCorrect) {
        selectBtn.classList.add("3");
        score + 3;
    } else if (isCorrect) {
        selectBtn.classList.add("4");
        score + 4;
    }


    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === " true") {
            button.classList.add("correct");
        }
        button.disabled = true
    });
    nextBtn.style.display = "block";
};


function showScore() {
    resetState();
    questionElement.innerHTML = `Вы набрали ${score} правильных ответов из ${questions.length}!`;
    nextBtn.innerHTML = "Играть снова!";
    nextBtn.style.display = "block";
};

function handleNExtButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNExtButton();
    } else {
        startQuiz();
    }
});

startQuiz();
