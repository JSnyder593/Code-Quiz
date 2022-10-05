//section variables
var quizIntro = document.getElementById('quiz-intro');
var quizCard = document.getElementById('quiz-card');
var scoreAndInitials = document.getElementById('score-and-initials');
var highscorePage = document.getElementById('highscore-page');

//timer
var timerCount = document.getElementById('timer-count');
var remainingTime = 45;//time in sec
var intervalTimer = undefined;

//initial state of sections when page loads
quizIntro.style.display = 'initial';
quizCard.style.display = 'none';
scoreAndInitials.style.display = 'none';
highscorePage.style.display = 'none';

//Button Variables
var startQuiz = document.getElementById('start-quiz');

//event listeners
startQuiz.addEventListener('click', (event) => {
    quizIntro.style.display = 'none';
    quizCard.style.display = 'initial';
    updateQuizCard();
    if (intervalTimer === undefined) {
        intervalTimer = setInterval(timerEventHandler, 1000)
    }
});

