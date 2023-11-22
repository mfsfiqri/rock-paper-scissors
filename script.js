const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerSelection = prompt("Masukkan antara rock, paper, scissors");
playerSelection = playerSelection.toLowerCase();

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "papper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection === computerSelection) {
    return "It's a tie";
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

console.log(playRound(playerSelection, computerSelection));
