var level = 0;
var buttonColors = ['red', 'yellow', 'green', 'blue'];
var randomChosenColor;
var gamePattern = [];
var userClickedPattern = [];
var started = false;

$(document).one('keydown', function (event) {
    if (event.key === 'a') {
        nextSequence();

    }
});



randomChosenColor = buttonColors[randomNumber = Math.floor(Math.random() * 4)];
gamePattern.push(randomChosenColor);



$('.btn').click(function (event) {
    var userChosenColor = event.target.id;
    console.log(event);
    console.log(userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[gamePattern.length - 1]) {
        console.log("Sucess");
        if (gamePattern[currentLevel + 1] === undefined) {
            setTimeout(function () {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        console.log("Wrong");
    }
}


function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level.toString());
    return randomNumber;
}

function playSound(name) {
    switch (name) {
        case "red":
            var red = new Audio('sounds/red.mp3');
            red.play();
            break;
        case "green":
            var green = new Audio('sounds/green.mp3');
            green.play();
            break;
        case "blue":
            var blue = new Audio('sounds/blue.mp3');
            blue.play();
            break;
        case "yellow":
            var yellow = new Audio('sounds/yellow.mp3');
            yellow.play();
            break;
        case "wrong":
            var wrong = new Audio('sounds/wrong.mp3');
            wrong.play();
        default:
            break;
    }
}