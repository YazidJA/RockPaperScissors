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
let gameArr = ["ROCK", "PAPER", "SCISSORS"];
let gameResult;

function endGame() {
  console.log(`${gameResult}: You picked ${playerChoice} and your opponent picked ${gameChoice}`);
  output1.textContent = gameResult;
  output2.textContent = `You picked ${playerChoice} and your opponent picked ${gameChoice}`;
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
  playerChoice = "ROCK";
  gameChoice = gameArr[parseInt(Math.random() * 3)];
  if (gameChoice == "ROCK") {
    gameResult = "DRAW";
  } else if (gameChoice == "PAPER") {
    gameResult = "YOU LOSE";
  } else if (gameChoice == "SCISSORS") {
    gameResult = "YOU WIN";
  }
  endGame();
}

function paper() {
  playerChoice = "PAPER";
  gameChoice = gameArr[parseInt(Math.random() * 3)];
  if (gameChoice == "PAPER") {
    gameResult = "DRAW";
  } else if (gameChoice == "SCISSORS") {
    gameResult = "YOU LOSE";
  } else if (gameChoice == "ROCK") {
    gameResult = "YOU WIN";
  }
  endGame();
}

function scissors() {
  playerChoice = "SCISSORS";
  gameChoice = gameArr[parseInt(Math.random() * 3)];
  if (gameChoice == "SCISSORS") {
    gameResult = "DRAW";
  } else if (gameChoice == "ROCK") {
    gameResult = "YOU LOSE";
  } else if (gameChoice == "PAPER") {
    gameResult = "YOU WIN";
  }
  endGame();
}

rockBtn.addEventListener("click", rock);
paperBtn.addEventListener("click", paper);
scissorsBtn.addEventListener("click", scissors);
