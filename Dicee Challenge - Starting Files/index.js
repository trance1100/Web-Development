function diceNumber() {
    randomNumber = Math.floor((Math.random() * 6) + 1);
    return randomNumber;
}

function getImg(number) {
    image = "images/dice" + number + ".png";
    return image;
}

var image = "";
var randomNumber = 0;
var player1 = diceNumber();
var player2 = diceNumber();
var dice1 = "";
var dice2 = "";
dice1 = getImg(player1);
dice2 = getImg(player2);

if (performance.navigation.type == 1) {
    document.querySelector(".img1").setAttribute("src", dice1);
    document.querySelector(".img2").setAttribute("src", dice2);


    if (player1 > player2) {
        document.querySelector("div.container h1").textContent = "Player 1 Wins!";
    } else if (player2 > player1) {
        document.querySelector("div.container h1").textContent = "Player 2 Wins!";
    } else {
        document.querySelector("div.container h1").textContent = "It's a TIE!";
    }
}