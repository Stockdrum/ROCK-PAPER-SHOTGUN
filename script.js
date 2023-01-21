const computerChoiceDisplay = document.getElementById("comp-choice");
const userChoiceDisplay = document.getElementById("you-choice");
const result = document.getElementById("result");
const possbileChoice = document.querySelectorAll("button");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  console.log(choice);
  return choice;
}

function checkWinner(playerCh, compCh) {
  if (playerCh == compCh) {
    return "ITS A DRAW!!";
  } else if (
    (playerCh == "rock" && compCh == "scissors") ||
    (playerCh == "scissors" && compCh == "paper") ||
    (playerCh == "paper" && compCh == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playGame(playerCh, compCh) {
  const result = checkWinner(playerCh, compCh);
  if (result == "ITS A DRAW!!") {
    return "It is a TIE NO ONE WINS";
  } else if (result == "Player") {
    return `You WON ${playerCh} beats ${compCh}`;
  } else {
    return `You lose! The Computer chooses ${compCh} that beats ${playerCh}`;
  }
}

const playerChoice = "rock";
const computerChoice = getComputerChoice();
console.log(playGame(playerChoice, computerChoice));
