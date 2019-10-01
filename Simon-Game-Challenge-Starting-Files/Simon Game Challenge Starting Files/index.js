var level = 1;

$(document).one('keydown', function (event) {
    if (event.key === 'a') {
        game_start();
    }
});

function game_start() {
    var order = [];

    $("#level-title").text("Level " + level.toString());
    order.push(chooseColor());

}

function clicked() {
    var userChosenColor;
    
}
function gameOver() {
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(function () {
        $("#" + color).removeClass("pressed");
    }, 100);
}

function loop(order) {
    $(".btn").click(function (event) {
        for (var i = 0; i < order.length; i++) {
            if (event[i] === event.target.id) {
                addOrder(order);
                loop(order);
            } else {
                alert("Game over");
            }
        }
    })
}

function addOrder(order) {
    level++;
    $("#level-title").text("Level " + level.toString());
    order.push(chooseColor());
}

function chooseColor() {
    var randomNumber = Math.floor(Math.random() * 4);
    var colors = ['green', 'red', 'yellow', 'blue'];
    var color = colors[randomNumber];
    blinkColor(color);
    return color;
}

function blinkColor(color) {
    $("#" + color).addClass("pressed");
    playSound(color);
    setTimeout(function () {
        $("#" + color).removeClass("pressed");
    }, 100);
}

function playSound(color) {
    switch (color) {
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