const computerChoiceDisplay = document.getElementById("comp-choice");
const userChoiceDisplay = document.getElementById("you-choice");
const result = document.getElementById("result");
const possbileChoice = document.querySelectorAll("button");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  console.log(choice);
}

getComputerChoice();
