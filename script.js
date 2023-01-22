const computerChoiceDisplay = document.getElementById("comp-choice");
const userChoiceDisplay = document.getElementById("you-choice");
const result = document.getElementById("result");
const possbileChoice = document.querySelectorAll("button");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
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

function getPlayerCh() {
  let validation = false;
  while (validation == false) {
    const choice = prompt("Rock Paper Scissors?");
    if (choice == null) {
      continue;
    }
    const choiceLowerCase = choice.toLowerCase();
    if (options.includes(choiceLowerCase)) {
      validation = true;
      return choiceLowerCase;
    }
  }
}

function game() {
  console.log("Welcome!");
  for (let i = 0; i < 5; i++) {
    const playerChoice = getPlayerCh();
    const compChoice = getComputerChoice();
    console.log(playGame(playerChoice, compChoice));
  }
  console.log("GAME OVER!!");
}

game();
