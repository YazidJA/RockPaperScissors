const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const counter = document.getElementById("counter");
let wins = 0;
let draws = 0;
let losses = 0;

let playerChoice;
let gameArr = ["rock", "paper", "scissors"];
let gameResult;

function endGame() {
  console.log(`${gameResult}: You chose ${playerChoice} and the game chose ${gameChoice}`);
  output1.textContent = gameResult;
  output2.textContent = `You chose ${playerChoice} and the game chose ${gameChoice}`;
  if (gameResult == "DRAW") {
    draws += 1;
  } else if (gameResult == "YOU LOSE") {
    losses += 1;
  } else if (gameResult == "YOU WIN") {
    wins += 1;
  }
  counter.textContent = `Wins: ${wins} / Losses: ${losses} / Draws: ${draws}`;
}

function rock() {
  playerChoice = "rock";
  gameChoice = gameArr[parseInt(Math.random() * 3)];
  if (gameChoice == "rock") {
    gameResult = "DRAW";
  } else if (gameChoice == "paper") {
    gameResult = "YOU LOSE";
  } else if (gameChoice == "scissors") {
    gameResult = "YOU WIN";
  }
  endGame();
}

function paper() {
  playerChoice = "paper";
  gameChoice = gameArr[parseInt(Math.random() * 3)];
  if (gameChoice == "paper") {
    gameResult = "DRAW";
  } else if (gameChoice == "scissors") {
    gameResult = "YOU LOSE";
  } else if (gameChoice == "rock") {
    gameResult = "YOU WIN";
  }
  endGame();
}

function scissors() {
  playerChoice = "scissors";
  gameChoice = gameArr[parseInt(Math.random() * 3)];
  if (gameChoice == "scissors") {
    gameResult = "DRAW";
  } else if (gameChoice == "rock") {
    gameResult = "YOU LOSE";
  } else if (gameChoice == "paper") {
    gameResult = "YOU WIN";
  }
  endGame();
}

rockBtn.addEventListener("click", rock);
paperBtn.addEventListener("click", paper);
scissorsBtn.addEventListener("click", scissors);
