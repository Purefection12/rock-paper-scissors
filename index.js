function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function mainGame(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return `It's a tie! you both picked ${playerSelection}`;
    } else if (playerSelection == "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
const computerSelection = getComputerChoice();
console.log(mainGame(playerSelection, computerSelection))

