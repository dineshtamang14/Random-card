var winner = document.querySelector("h1");

// player1 dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

// player2 dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

// checks who is the winner
if(randomNumber1 > randomNumber2){
    winner.innerText = "🚩 Player1 Wins";
}
else if(randomNumber2 > randomNumber1){
    winner.innerText = "Player2 Wins🚩";
} else {
    winner.innerText = "Draw";
}