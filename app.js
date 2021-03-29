// Elements
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const title = document.getElementById("title");
const output = document.getElementById("output");
const counter = document.getElementById("counter");
// Variables
let wins = 0;
let draws = 0;
let losses = 0;
let playerChoice;
let gameResult;
const arr = ["rock", "paper", "scissors"];
// Functions
gameHandler = (playerChoice) => {
  let gameChoice = Math.floor(Math.random() * 3);
  let result = playerChoice - gameChoice;
  if (result == 1 || result == -2) {
    gameResult = "YOU WIN";
    wins += 1;
  } else if (result === 0) {
    gameResult = "DRAW";
    draws += 1;
  } else {
    gameResult = "YOU LOSE";
    losses += 1;
  }
  title.textContent = gameResult;
  output.innerHTML = `You picked <i class="far fa-hand-${arr[playerChoice]}"></i>  and your opponent picked <i class="far fa-hand-${arr[gameChoice]}"></i>`;
  counter.textContent = `Wins: ${wins} / Losses: ${losses} / Draws: ${draws}`;
};
// Events
rockBtn.addEventListener("click", function () {
  gameHandler(0);
});
paperBtn.addEventListener("click", function () {
  gameHandler(1);
});
scissorsBtn.addEventListener("click", function () {
  gameHandler(2);
});
