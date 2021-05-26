function computerPlay() {
  const choiceValues = ["rock", "paper", "scissors"];
  return choiceValues[Math.floor(Math.random() * 3)];
}

function playerPlay() {
  let playerChoice = window.prompt("Choose between Rock, Paper or Scissors");
  playerChoice = checkPlayerChoice(playerChoice.toLowerCase());
  return playerChoice;
}

function checkPlayerChoice(choice) {
  while (choice != "rock" && choice != "paper" && choice != "scissors") {
    choice = window.prompt("Please choose only between rock, paper or scissors");
    choice = choice.toLowerCase();
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  switch (true) {
    case playerSelection == computerSelection:
      result = [0, "Tie game"];
      break;
    case playerSelection == "rock" && computerSelection == "paper":
      result = [2, "You lose, Paper beats Rock"];
      break;
    case playerSelection == "rock" && computerSelection == "scissors":
      result = [1, "You win, Rock beats Scissors"];
      break;
    case playerSelection == "paper"  && computerSelection == "rock":
      result = [1, "You win, Paper beats Rock"];
      break;
    case playerSelection == "paper" && computerSelection == "scissors":
      result = [2, "You lose, Scissors beats Paper"];
      break;
    case playerSelection == "scissors"  && computerSelection =="rock":
      result = [2, "You lose, Rock beats Scissors"];
      break;
    case playerSelection == "scissors"  && computerSelection == "paper":
      result = [1, "You win, Scissors beats Paper"];
      break;
  }

  return result;

}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i=0; i < 5; i++){
    let roundResult = playRound(playerPlay(), computerPlay());
    if (roundResult[0] == 1) {
      playerScore += 1;
    } else if (roundResult[0] == 2) {
      computerScore += 1;
    }
    console.log(`${roundResult[1]}, your score: ${playerScore}, ` +
      `Computer's score: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("You win over the computer!!!")
  } else if (playerScore < computerScore) {
    console.log("You lose!!!!!")
  } else {
    console.log("it's a tie game, try again")
  }
}

game();