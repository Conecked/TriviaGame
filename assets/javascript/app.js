window.onload = function () {
    $("#start").on("click", startGame);
}

function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
}

var correct = 0;
var incorrect = 0;
var unanswered = 0;
    

// create 25 second countdown
// display Time Remaining: 25sec, start countdown, show countdown
// create logic for start button

var number = 5;

var intervalId;

function startGame() {
    correct = 0;
    incorrect= 0;
    unanswered = 0;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#start").hide();
}

function decrement() {

    number--;

    $("#timeRemaining").text("Time Remaining: " + number);

    if (number === 0) {

        stop();

        $("#welcomeDiv").html("<p><h2>All Done</h2></p>").append("<p><h5>Correct Answers: " + correct + "</h5></p>").append("<p><h5>Wrong Answers: " + incorrect + "</h5></p>").append("<p><h5>Unanswered: " + unanswered + "</h5></p>")
    }
}

function stop() {

    clearInterval(intervalId);
}

// create logic to check answers

