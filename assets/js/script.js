// List of five questions
// User selects an answer
// Goes onto next question, etc.
// If answer is wrong,
//deduct ten seconds off timer
// At the end, there is a high score

var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");
var timeLeft = 5;


// Timer that counts down from 5
function countdown() {
  console.log(timeLeft);
  console.log(startBtn);
}

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



function startTimer() {
    setInterval(function(){
        console.log("Hello 2")
    }, 1000);
}

function startQuiz() {
    console.log("Hello");
    startTimer();
}

var questions = [
  {
    question: "Commonly used data types DO Not Include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts"
},
  {
    one: "orange",
    two: "pear",
  },
];

startBtn.addEventListener ("click", startQuiz);