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
            console.log("Enter a valid choice!")
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
            console.log(`Tie. You both chose ${compChoice}.`);
            humanScore++;
            computerScore++;

        } else if ((humanChoice === "rock" && compChoice === "scissors") || (humanChoice === "paper" && compChoice === "rock") || (humanChoice === "scissors" && compChoice === "paper")) {
            console.log(`You win! ${humanChoice} beats ${compChoice}.`);
            humanScore++;
        }  else {
            console.log(`You lose. ${compChoice} beats ${humanChoice}.`);
            computerScore++;
        }

    } 

    while (rounds<=5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        rounds++;
    }

    if (humanScore>computerScore) {
        console.log(`Congrats! You won! Score: ${humanScore}-${computerScore}`)
    } else {
        console.log(`Sorry! You lost! Score: ${humanScore}-${computerScore}`)
    }


}



playGame();