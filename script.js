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

const choices = ["Rock", "Paper", "Scissors"]
const buttonContainer = document.createElement("div");

let humanScore = 0;
let computerScore = 0;
let rounds = 1;


choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice

    
    button.style.padding = "20px"
    button.style.backgroundColor = "#C2C5BB"
    button.style.color = "#3D3D3D"
    button.style.fontSize = "20px"
    button.style.border = "1px solid #86A873"
    button.style.borderRadius = "20px"


    buttonContainer.appendChild(button)

    button.addEventListener("click", () => {
        const humanChoice = button.textContent
        const compChoice = getComputerChoice()
        
        

        if (rounds<=5) {
            playRound(humanChoice, compChoice);
            console.log(rounds)
            console.log(`H: ${humanScore}, C: ${computerScore}`)
            rounds++;
        } else {
            if (humanScore>computerScore) {
                resultBox.textContent = `Congrats! You won! Score: ${humanScore}-${computerScore}. Refresh to play again.`
            } else if (humanScore<computerScore){
                resultBox.textContent = `Sorry! You lost! Score: ${humanScore}-${computerScore}. Refresh to try again.`
            } else {
                resultBox.textContent = `You tied! Score: ${humanScore}-${computerScore}. Refresh to try again.`
            }

        }
        
    });

    

});



document.body.style.backgroundColor = "#F3F7F0";
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.padding = "20px"
buttonContainer.style.gap = "30px"
buttonContainer.style.marginTop = "80px"



document.body.appendChild(buttonContainer)

const resultBox = document.createElement("div");
resultBox.style.display = "flex";
resultBox.style.justifyContent = "center";
resultBox.style.margin = "20px"
resultBox.style.fontSize = "22px"
resultBox.style.color = "#3D3D3D"

document.body.appendChild(resultBox);



function playRound(humanChoice, compChoice) {

    if (humanChoice === compChoice) {
        resultBox.textContent = `You tied this round! You both chose ${compChoice}. Score: ${humanScore}-${computerScore}`;

    } else if ((humanChoice === "Rock" && compChoice === "Scissors") || (humanChoice === "Paper" && compChoice === "Rock") || (humanChoice === "Scissors" && compChoice === "Paper")) {
        humanScore++;
        resultBox.textContent = `You won this round! ${humanChoice} beats ${compChoice}. Score: ${humanScore}-${computerScore}`
    }  else {
        computerScore++;
        resultBox.textContent = `You lost this round! ${compChoice} beats ${humanChoice}. Score: ${humanScore}-${computerScore}`;
    }

} 
