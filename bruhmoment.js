



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
    
    if (getComputerChoice === 'rock' && getPlayerChoice === 'scissors') { // rock to scissors comp wins
        computerScore++;
       return `You lose. rock beats scissors | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    } else if (getComputerChoice === 'scissors' && getPlayerChoice === 'paper') { // scissors to paper comp wins
        computerScore++;
        return `You lose. scissors beats paper | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    } else if (getComputerChoice === 'paper' && getPlayerChoice === 'rock') { // paper to rock comp wins
        computerScore++;
        return `You lose. paper beats rock | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    } else if (getPlayerChoice === 'rock' && getComputerChoice === 'scissors') { // Player options and functions 
        playerScore++;
        return `You Win. rock beats scissors | Score: ${playerScore} to ${computerScore}| PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}` ;
    } else if (getPlayerChoice === 'scissors' && getComputerChoice === 'paper') {
        playerScore++;
        return `You Win. scissors beats paper | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    } else if (getPlayerChoice === 'paper' && getComputerChoice === 'rock') {
        playerScore++;
        return `You Win. paper beats rock | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    } else if (getComputerChoice === getPlayerChoice) {
        return ` Its a Draw | Score: ${playerScore} to ${computerScore} | PlayerInput: ${getPlayerChoice} CompInput: ${getComputerChoice}`;
    }
}
let getPlayerChoice = document.querySelectorAll('button');
getPlayerChoice.forEach((button) =>{
    button.addEventListener('click', ()=> {
        getPlayerChoice = button.value;
        const getComputerChoice =computerChoice();
        const result = document.querySelector('#resultbox');
        result.innerHTML = playRound(getComputerChoice, getPlayerChoice);
        
        /* putting the results into a div with an id of result box
        let resultContent = playRound(getComputerChoice, getPlayerChoice);
        const resultbox = document.querySelector('#resultbox');
        result.append(resultContent);
        resultbox.append(result);*/
        })
    });
 






   /* function game() { // logic that plays five rounds of the game and stuff
        for (let i = 0; i < 5; i++) {
            //function that gets player input
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
game()*/

