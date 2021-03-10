const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
let playerChoice;
let gameArr = ["rock", "paper", "scissors"];
let gameResult;

function endGame() {
    console.log(`${gameResult}: You chose ${playerChoice} and the game chose ${gameChoice}`)
    output1.textContent = gameResult;
    output2.textContent = `You chose ${playerChoice} and the game chose ${gameChoice}`
}

function rock() {
    playerChoice = "rock";
    gameChoice = gameArr[parseInt(Math.random()*3)];
    if (gameChoice == "rock") {gameResult = "Draw"} else if (gameChoice == "paper") {gameResult = "You Lose"} else if (gameChoice == "scissors") {gameResult = "You Win"}
    endGame()
  }

  function paper() {
    playerChoice = "paper";
    gameChoice = gameArr[parseInt(Math.random()*3)];
    if (gameChoice == "paper") {gameResult = "Draw"} else if (gameChoice == "scissors") {gameResult = "You Lose"} else if (gameChoice == "rock") {gameResult = "You Win"}
    endGame()
  }

  function scissors() {
    playerChoice = "scissors";
    gameChoice = gameArr[parseInt(Math.random()*3)];
    if (gameChoice == "scissors") {gameResult = "Draw"} else if (gameChoice == "rock") {gameResult = "You Lose"} else if (gameChoice == "paper") {gameResult = "You Win"}
    endGame()
  }

rockBtn.addEventListener("click", rock);
paperBtn.addEventListener("click", paper);
scissorsBtn.addEventListener("click", scissors);

