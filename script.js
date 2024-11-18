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

console.log(getComputerChoice())