



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

// VARIABLES for Scores
let playerScore = 0;
let computerScore = 0;

// THIs IS THE ACTUAL PLAY ROUND FUNCTION PLEASE REMEMBER THIS BRO
function playRound(getComputerChoice, getPlayerChoice) { 
    
    if (getComputerChoice === 'rock' && getPlayerChoice.toLowerCase() === 'scissors') { // rock to scissors comp wins
        computerScore++;
       return `You lose. rock beats scissors | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    } else if (getComputerChoice === 'scissors' && getPlayerChoice.toLowerCase() === 'paper') { // scissors to paper comp wins
        computerScore++;
        return `You lose. scissors beats paper | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    } else if (getComputerChoice === 'paper' && getPlayerChoice.toLowerCase() === 'rock') { // paper to rock comp wins
        computerScore++;
        return `You lose. scissors beats paper | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    } else if (getPlayerChoice.toLowerCase() === 'rock' && getComputerChoice === 'scissors') { // Player options and funcitons adasd
        playerScore++;
        return `You Win. rock beats scissors | Score: ${playerScore} to ${computerScore}| PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}` ;
    } else if (getPlayerChoice.toLowerCase() === 'scissors' && getComputerChoice === 'paper') {
        playerScore++;
        return `You Win. scissors beats paper | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    } else if (getPlayerChoice.toLowerCase() === 'paper' && getComputerChoice === 'rock') {
        playerScore++;
        return `You Win. paper beats rock | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    } else if (getComputerChoice === getPlayerChoice.toLowerCase()) {
        return ` Its a Draw | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    }
}


    function game() {
        for (let i = 0; i < 5; i++) {
            //function that gets player input
            let getPlayerChoice = prompt("Rock, Paper, or Scissors?")
            //sgetPlayerChoice = getPlayerChoice.toLowerCase;
            const getComputerChoice = computerChoice(); // computer input baybee
             console.log(playRound(getComputerChoice, getPlayerChoice))
        } 
        if (playerScore > computerScore) {
            console.log("-----------------------------------------------------------------")
            console.log(`You win the game | Final Score: ${playerScore} to ${computerScore}`)
        } else if (playerScore < computerScore) {
            console.log("-----------------------------------------------------------------")
            console.log(`You lose the game | Final Score: ${playerScore} to ${computerScore}`)
        } else {
            console.log("-----------------------------------------------------------------")
            console.log( `Its a tie | Final Score: ${playerScore} to ${computerScore}` )
        }
    }
game()

