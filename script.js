function getComputerChoice() {
    let numChoice = Math.floor(Math.random()*3+1);
    switch (numChoice) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors? ")
    while (true) {
        if (humanChoice.toUpperCase() === "ROCK") {
            return "Rock"
        } else if (humanChoice.toUpperCase() === "PAPER") {
            return "Paper"
        } else if (humanChoice.toUpperCase() === "SCISSORS") {
            return "Scissors"
        } else {
            alert("Enter a valid choice!")
            humanChoice = prompt("Rock, paper, or scissors? ")
        }
    } 
}

let humanScore = 0;
let computerScore = 0;




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    rounds = 1;

    function playRound(humanChoice, compChoice) {
        compChoice = compChoice.toLowerCase();
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === compChoice) {
            
            alert(`You tied this round! You both chose ${compChoice}. Score: ${humanScore}-${computerScore}`);


        } else if ((humanChoice === "rock" && compChoice === "scissors") || (humanChoice === "paper" && compChoice === "rock") || (humanChoice === "scissors" && compChoice === "paper")) {
            humanScore++;
            alert(`You won this round! ${humanChoice} beats ${compChoice}. Score: ${humanScore}-${computerScore}`);

        }  else {
            computerScore++;
            alert(`You lost this round! ${compChoice} beats ${humanChoice}. Score: ${humanScore}-${computerScore}`);

        }

    } 

    while (rounds<=5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        rounds++;
    }

    if (humanScore>computerScore) {
        alert(`Congrats! You won! Score: ${humanScore}-${computerScore}. Refresh to play again.`)
    } else if (humanScore<computerScore){
        alert(`Sorry! You lost! Score: ${humanScore}-${computerScore}. Refresh to try again.`)
    } else {
        alert(`You tied! Score: ${humanScore}-${computerScore}. Refresh to try again.`)
    }


}



playGame();