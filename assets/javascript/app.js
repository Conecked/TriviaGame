window.onload = function () {
    $("#start").on("click", startGame);
}

function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
}

var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
}

// create 25 second countdown
// display Time Remaining: 25sec, start countdown, show countdown
// create logic for start button

var number = 5;

var intervalId;

function startGame() {
    trivia.correct = 0;
    trivia.incorrect= 0;
    trivia.unanswered = 0;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#start").hide();
}

function decrement() {

    number--;

    $("#timeRemaining").text("Time Remaining: " + number);

    if (number === 0) {

        stop();

        // alert("Time Up!");


        $("#welcomeDiv").html("<p><h2>All Done</h2></p>").append("<p><h5>Correct Answers: " + trivia.correct + "</h5></p>").append("<p><h5>Wrong Answers: " + trivia.incorrect + "</h5></p>").append("<p><h5>Unanswered: " + trivia.unanswered + "</h5></p>")
    }
}

function stop() {

    clearInterval(intervalId);
}

// create logic to check answers

var correctAnswer = $.each($("input[id=answers]:checked").val() === "correct"); 

// function results() {
//     if (correctAnswer) {
//         trivia.correct++;
//     } else trivia.incorrect++
// }

var radios = document.querySelectorAll('input[type="radio"]:checked');

console.log(radios);

var value = radios.length>0? radios[0].value.name: null;

if (radios.value === correctAnswer && radio.checked) {
    trivia.correct++;
    console.log(radios.value);
}