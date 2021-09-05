// List of five questions
// User selects an answer
// Goes onto next question, etc.
// If answer is wrong,
//deduct ten seconds off timer
// At the end, there is a high score

var quizStatus = true;
var questionNumber = 0;
var answerNumber = 0;
var score = 0;
var highScore = 60;
var finalAnswerCheck = 0;
var checkTimes = 1;
var viewHighScoresBtnEl = document.getElementById("view-high-scores");
var startQuizBtnEl = document.getElementById("start-quiz");
var answer1BtnEl = document.getElementById("answer1");
var answer2BtnEl = document.getElementById("answer2");
var answer3BtnEl = document.getElementById("answer3");
var answer4BtnEl = document.getElementById("answer4");
var submitScoreEl = document.getElementById("submitScore");
var questionsEl = document.getElementById("questions");
var mainDivEl = document.getElementById("mainDiv");
var htmlTimeLeft = document.getElementById("timeLeft");
var answerCorrectWrong = document.getElementById("answerCorrectWrong");
var questionDisplayEl = document.createElement("questionDisplay");
var finalScoreDisplayEl = document.createElement("finalScoreDisplayEl");
var enterInitialsEl = document.createElement("enterInitials");
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea");
var button1234 = document.createElement("button");

//var timerEl = document.getElementById("countdown");
//var mainEl = document.getElementById("main");
//var startBtn = document.getElementById("start");
var timeLeft = 60;













// Timer that counts down from 5
// function countdown() {
//  console.log(timeLeft);
// console.log(startBtn);
//}

countdown();

// var timeInterval = setInterval(function () {
//   if (timeLeft > 1) {
//     timerEl.textContent = timeLeft + " seconds remaining";

//     timeLeft--;
//   } else if (timeLeft === 1) {
//     timerEl.textContent = timeLeft + " second remaining";
//     timeLeft--;
//   } else {
//     timerEl.textContent = "";
//     clearInterval(timeInterval);
//   }
// });



// function startTimer() {
//     setInterval(function(){
//         console.log("Hello 2")
//     }, 1000);
// }

// function startQuiz() {
//     console.log("Hello");
//     startTimer();
// }

// var questions = [
//   {
//     question: "Commonly used data types DO Not Include:",
//     choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
//     answer: "3. alerts"
// },
//   {
//     one: "orange",
//     two: "pear",
//   },
// ];

// startBtn.addEventListener ("click", startQuiz);