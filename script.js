const choiceValues = ["rock", "paper", "scissors"];

function computerPlay() {
  return Math.floor(Math.random() * 3) + 1;
}

console.log(computerPlay());