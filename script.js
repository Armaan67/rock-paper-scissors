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
