

// VARIABLES for choices and stuff
let playerScore = 0;
let computerScore = 0;
const getComputerChoice = computerChoice();

let getPlayerChoice = function playerInput() {
 getPlayerChoice = window.prompt("Rock, Paper, or Scissors?");
    return getPlayerChoice
}

// Function that returns either rock paper or scissors ok? UwU
function computerChoice() {
    const choiceBruh = Math.floor(Math.random()* 3);
    
    if (choiceBruh === 0) {
        return 'rock';
    }
    else if (choiceBruh === 1) {
        return 'paper';
    }
    else if (choiceBruh === 2) {
        return 'scissors';
    }
}

// THIs IS THE ACTUAL PLAY ROUND FUNCTION PLEASE REMEMBER THIS BRO
function playRound(getComputerChoice, getPlayerChoice) { 
    
    if (getComputerChoice === 'rock' && getPlayerChoice.toLowerCase() === 'scissors') {
       let result =  "You lose, go cry. rock beats scissors";
       return result;
    } else if (getComputerChoice === 'scissors' && getPlayerChoice.toLowerCase() === 'paper') {
        let result = "You lose, go cry. scissors beats paper";
        return result;
    } else if (getComputerChoice === 'paper' && getPlayerChoice.toLowerCase() === 'rock') {
        let result = "You lose, go cry. paper beats rock"
        return result
    } else if (getComputerChoice === getPlayerChoice.toLowerCase()) {
        let result = " Its a Draw"
        return result;
    }
else {
        let result = "You Finally won (LOL) good job gamer"
        return result
    }
}

function scoreSystem () {
    if (getComputerChoice === 'rock' && getPlayerChoice.toLowerCase() === 'scissors') {
        
        computerScore++;
        return computerScore

     } else if (getComputerChoice === 'scissors' && getPlayerChoice.toLowerCase() === 'paper') {
        
        computerScore++;
        return computerScore

     } else if (getComputerChoice === 'paper' && getPlayerChoice.toLowerCase() === 'rock') {
        
        computerScore++;
        return computerScore
     } else if (getComputerChoice === getPlayerChoice.toLowerCase()) {

     }

     else {
        playerScore++;
        return playerScore
     }
}

// Function to play one round which prints out all the needed values
function oneRoundBro() {
    getPlayerChoice()
    scoreSystem();
    console.log("playerInput: " + getPlayerChoice + "  PlayerScore: " + playerScore)
    console.log("ComputerInput: " + getComputerChoice + "  ComputerScore: " + computerScore)
    console.log(playRound(getComputerChoice, getPlayerChoice))
}
 oneRoundBro()
