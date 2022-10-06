//Section Variables
var quizIntro = document.getElementById('quiz-intro');
var quizCard = document.getElementById('quiz-card');
var scoreAndInitials = document.getElementById('score-and-initials');
var highscorePage = document.getElementById('highscore-page');

//Button Variables
var startQuiz = document.getElementById('start-quiz');

var submitBtn = document.getElementById('submit-button');

//Quiz Card
var quizQuestion = document.getElementById('quiz-question');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');

//Set initial state of sections
quizIntro.style.display = 'visible';
quizCard.style.display = 'none';
scoreAndInitials.style.display = 'none';
highscorePage.style.display = 'none';

//Timer
var timerCount = document.getElementById('timer-count');
var remainingTime = 45;//time in sec
var intervalTimer = undefined;

//Questions/Answers
var question1 = 'Click Button 1';
var question1Options = ['A', 'B', 'C', 'D'];
var question1Correct = 0;
var question2 = 'Click Button 2';
var question2Options = ['E', 'F', 'G', 'H'];
var question2Correct = 1;
var question3 = 'Click Button 3';
var question3Options = ['I', 'J', 'K', 'L'];
var question3Correct = 2;
var question4 = 'Click Button 4';
var question4Options = ['M', 'N', 'O', 'P'];
var question4Correct = 3;

//Question State
var currentQuestion = 0;
var questions = [
    [question1, question1Options, question1Correct],
    [question2, question2Options, question2Correct],
    [question3, question3Options, question3Correct],
    [question4, question4Options, question4Correct],
];

//Score State
var totalScore = 0;

function updateQuizCard() {
    quizQuestion.innerText = questions[currentQuestion][0];
    answer1.innerText = questions[currentQuestion][1][0];
    answer2.innerText = questions[currentQuestion][1][1];
    answer3.innerText = questions[currentQuestion][1][2];
    answer4.innerText = questions[currentQuestion][1][3];
}

function updateTimerDisplay() {
    timerCount.innerText = remainingTime;
    if (remainingTime <= 0) {
        endQuiz();
    }
}

function endQuiz() {
    quizCard.style.display = 'none';
    scoreAndInitials.style.display = '';
    clearInterval(intervalTimer);
    intervalTimer = undefined;
    currentQuestion = 0;
}

function checkAnswer(currentAnswer) {
    if (currentAnswer == questions[currentQuestion][2]) {
        totalScore += 1;
    } else {
        remainingTime -= 10;
        updateTimerDisplay();
    }

    currentQuestion += 1;
    if(currentQuestion < questions.length) {
        updateQuizCard();
    } else {
        endQuiz();
    }
}

function timerEventHandler() {
    remainingTime -= 1;
    updateTimerDisplay();
}

startQuiz.addEventListener('click', (event) => {
    quizIntro.style.display = 'none';
    quizCard.style.display = '';
    updateQuizCard();
    if (intervalTimer === undefined) {
        intervalTimer = setInterval(timerEventHandler, 1000)
    }
});

submitBtn.addEventListener('click', (event) =>{ 


});

answer1.addEventListener('click', (event) => {
    checkAnswer(0);
});

answer2.addEventListener('click', (event) => {
    checkAnswer(1);
});

answer3.addEventListener('click', (event) => {
    checkAnswer(2);
});

answer4.addEventListener('click', (event) => {
    checkAnswer(3);
});
