let currentIndex = 0;
let correctAnswers = 0;
var correctElement; 
let answerElement = document.querySelectorAll('.answer');
let questionHolder = document.getElementById('question-holder');
let nextButton = document.getElementById('next-button');
let restartButton = document.getElementById('restart-button');
let counter = document.getElementById('counter');
let correctCount = document.getElementById('correct-count');
let correctPercentage = document.getElementById('correct-percentage');
let resultsPage = document.getElementById('result');
let questionsPage = document.getElementById('questions');
let answerCounter = document.getElementById('answer-counter');


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

//Event Listeners
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', initializeGame);
for (let index = 0; index < answerElement.length; index++) {
    const element = answerElement[index];
    element.addEventListener('click',  validateAnswer)
}

//Controllers
function initializeGame(){
    currentIndex = 0;
    correctAnswers = 0;
    questionsPage.style.display = 'block';
    answerCounter.style.display = 'block'
    resultsPage.style.display = 'none';
    setDefault(currentIndex)
}
function setDefault(){
    for (let index = 0; index < answerElement.length; index++) {
        const element = answerElement[index];
        element.classList.remove('correct');
        element.classList.remove('incorrect');
        element.classList.remove('true');
        element.style.pointerEvents = 'auto';
    }
    setQuestion(currentIndex);
}

function setQuestion(num){
    let currentQuestion = questions[num];
    questionHolder.innerText = currentQuestion.question;
   for (let index = 0; index < answerElement.length; index++) {
       const element = answerElement[index];
       if( currentQuestion.answers[index].correct){
           element.innerHTML = currentQuestion.answers[index].value
            element.classList.add('true')
            correctElement = element;
       }
       else{
        element.innerHTML = currentQuestion.answers[index].value
       }
   }
}

function nextQuestion(){
    currentIndex = currentIndex + 1;
    if (currentIndex < questions.length) {
        setDefault()        
    } else {
        console.log('end')
        questionsPage.style.display = 'none';
        answerCounter.style.display = 'none'
        resultsPage.style.display = 'block';
        correctCount.innerText = correctAnswers;
        correctPercentage.innerText = (correctAnswers / questions.length) * 100;
    }
}

function validateAnswer(){
    if (this.classList.contains('true')){
        this.classList.add('correct')
        correctAnswers ++;
        counter.innerText = correctAnswers;
        disableAnswers()
    }
    else{
        this.classList.add('incorrect')
        correctElement.classList.add('correct')
        disableAnswers()
    }
}

function disableAnswers(){
    for (let index = 0; index < answerElement.length; index++) {
        const element = answerElement[index];
        element.style.pointerEvents = 'none'
    }
}

initializeGame()

