const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// let playerSelection = prompt("Masukkan antara rock, paper, scissors");
// playerSelection = playerSelection.toLowerCase();

// const computerSelection = getComputerChoice();

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

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Masukkan antara rock, paper, scissors");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result.includes("You win")) {
      playerScore++;
    } else if (result.includes("You lose")) {
      computerScore++;
    }

    console.log(result);
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie game!");
  }
}

game();
