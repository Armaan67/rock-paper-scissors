function getComputerChoice() {
    let numChoice = Math.floor(Math.random()*3+1);
    let compChoice;
    switch (numChoice) {
        case 1:
            compChoice = "Rock"
            break;
        case 2:
            compChoice = "Paper"
            break;
        case 3:
            compChoice = "Scissors"
            break;
    }
    return compChoice
}

