let randomNumber1 = Math.floor(Math.random() * 6) + 1; // random numer od 1 - 6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
//KONIEC GRACZA 1

let randomNumber2 = Math.floor(Math.random() * 6) + 1; // random numer od 1 - 6

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "DRAW!";
}
