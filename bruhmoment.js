

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


function playRound(getComputerChoice,getPlayerChoice) {
if (getComputerChoice === 'rock' && getPlayerChoice === 'scissors') {
       let result =  "You lose, go cry. rock beats scissors";
       return result;
    } else if (getComputerChoice === 'scissors' && getPlayerChoice === 'paper') {
        let result = "You lose, go cry. scissors beats paper";
        return result;
    } else if (getComputerChoice === 'paper' && getPlayerChoice === 'rock') {
        let result = "You lose, go cry. paper beats rock"
        return result
    } else if (getComputerChoice === getPlayerChoice) {
        let result = " Its a Draw"
        return result;
    }
else {
        let result = "You Finally won (LOL) good job gamer"
        return result
    }
}

const getComputerChoice = computerChoice();
const getPlayerChoice = "rock";

console.log("playerInput: " + getPlayerChoice)
console.log("Comp: " + getComputerChoice)
console.log(playRound(getComputerChoice, getPlayerChoice))