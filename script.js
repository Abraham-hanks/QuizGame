let currentIndex = 0;
let correctAnswers = 0;
let answerElement = document.querySelectorAll('.answer');
let questionHolder = document.getElementById('question-holder');
let nextButton = document.getElementById('next-button')


const questions = [
    {
        question: "Which player scored the fastest hat-trick in the Premier League?",
        answers: [
            {
                correct: false,
                value: "Cristiano Ronaldo"
            },
            {
                correct: true,
                value: "Sadio Mane"
            },
            {
                correct: false,
                value: "Thierry Henry"
            },
        ]
    },
    {
        question: "When was the inaugural Premier League season?",
        answers: [
            {
                correct: true,
                value: "1992-93"
            },
            {
                correct: false,
                value: "1990-91"
            },
            {
                correct: false,
                value: "1993-94"
            },
        ]
    },
    {
        question: "Which country has appeared in three World Cup finals, but never won the competition?",
        answers: [
            {
                correct: false,
                value: "Belgium"
            },
            {
                correct: true,
                value: "Netherlands"
            },
            {
                correct: false,
                value: "Norway"
            },
        ]
    },
    {
        question: "Which former Tottenham manager has competed in the Dakar Rally?",
        answers: [
            {
                correct: false,
                value: "Tim Sherwood"
            },
            {
                correct: true,
                value: "Andre Villas-Boas"
            },
            {
                correct: false,
                value: "Mauricio Pochettino"
            },
        ]
    },
    {
        question: "Who is the Champions League's top goalscorer of all time?",
        answers: [
            {
                correct: false,
                value: "Lionel Messi"
            },
            {
                correct: true,
                value: "Cristiano Ronaldo"
            },
            {
                correct: false,
                value: "Clarence Seedorf"
            },
        ]
    },
];


nextButton.addEventListener('click', nextQuestion);
for (let index = 0; index < answerElement.length; index++) {
    const element = answerElement[index];
    element.addEventListener('click',  validateAnswer)
}


function setQuestion(num){
    let currentQuestion = questions[num];
    questionHolder.innerText = currentQuestion.question;
   for (let index = 0; index < answerElement.length; index++) {
       const element = answerElement[index];
       if( currentQuestion.answers[index].correct){
           element.innerHTML = currentQuestion.answers[index].value
            element.classList.add('correct')
       }
       else{
        element.innerHTML = currentQuestion.answers[index].value
       }
   }
}

function nextQuestion(){
    currentIndex = currentIndex + 1;
    console.log(currentIndex)
    console.log(questions.length)
    if (currentIndex < questions.length) {
        setQuestion(currentIndex); 
        
    } else {
         console.log('end')
    }
}

function validateAnswer(){
    for (let index = 0; index < answerElement.length; index++) {
        const element = answerElement[index];
        if( currentQuestion.answers[index].correct){
            element.innerHTML = currentQuestion.answers[index].value
             element.classList.add('correct')
        }
        else{
         element.innerHTML = currentQuestion.answers[index].value
        }
    }
}

setQuestion(currentIndex);