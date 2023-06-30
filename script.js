const options = ["rock", "paper", "scissor"];
let playerCount = 0;
let cpuCount = 0;

// Get the choice from the CPU
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

// Get the player's choice by getting the ID of the clicked button
function handleButtonClick(event) {

    // to freeze the scores, crucial conditon in freezing the scores, so when one of them reaches score of five , it will not increase the count as well display it if we try to press the buttons
    // helps in disabling the functionality of the buttons
    if (playerCount >= 5 || cpuCount >= 5) {
        return; // Exit the function if the game is over
      }

    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

// Attach event listeners to the buttons
document.getElementById("rock").addEventListener("click", handleButtonClick);
document.getElementById("paper").addEventListener("click", handleButtonClick);
document.getElementById("scissor").addEventListener("click", handleButtonClick);

// Function to check the winner
function getWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Win";
  } else {
    return "Loss";
  }
}

// Function to play rounds and declare the overall winner
function playRound(playerSelection, computerSelection) {
  const result = getWinner(playerSelection, computerSelection);


  if (result === "Win") {
    playerCount++;
    document.getElementById("player-score").innerText = playerCount;
    document.getElementById("result-text").innerText = "You Win!";
  } else if (result === "Loss") {
    cpuCount++;
    document.getElementById("cpu-score").innerText = cpuCount;
    document.getElementById("result-text").innerText = "You Lose!";
  } else {
    document.getElementById("result-text").innerText = "It's a tie!";
  }

  if (playerCount === 5) {
    document.getElementById("result-text").innerText = "You Won the Game! Play Again :)";
  } else if (cpuCount === 5) {
    document.getElementById("result-text").innerText = "You Lost the Game. Play Again :(";
  }
}

// function for the play again button where we reset and display the player and cpu count to zero and change the result text 

const playAgain = document.getElementById("play-again");

playAgain.addEventListener("click", playAgainFunc);

function playAgainFunc(){
    // console.log("hello mate");
    playerCount = 0;
    cpuCount = 0;
    document.getElementById("result-text").innerText = "Lets Begin!";
    document.getElementById("player-score").innerText = playerCount;
    document.getElementById("cpu-score").innerText = cpuCount;
}
