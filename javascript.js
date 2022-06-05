let playerSelection = window.prompt("Choose your move!");
let throws = ['Paper', "Scissors", "Rock"];
let cpuSelection = randomChoice();

function randomChoice() {
    let choice = throws[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerChoice, cpuChoice) {
    if (playerChoice === null) console.log("Game aborted");
    else if (capitalizeInput(playerChoice) !== 'Rock' && capitalizeInput(playerChoice) !== "Scissors" && capitalizeInput(playerChoice) !== "Paper") {
        let playerSelection = window.prompt("Please enter 'Rock', 'Paper', or 'Scissors'. Choose your move!");

        playRound(playerSelection, cpuChoice);
    }
    else {
        let sanitizedPlayerChoice = capitalizeInput(playerChoice);
        console.log(`You chose: ${sanitizedPlayerChoice}`);
        console.log(`Your opponent chose: ${cpuChoice}`);

        if (sanitizedPlayerChoice === "Rock" && cpuChoice === "Scissors" || sanitizedPlayerChoice === 
        "Scissors" && cpuChoice === "Paper" || sanitizedPlayerChoice === "Paper" && cpuChoice === "Rock") {
            console.log("You win!");
        } else if (sanitizedPlayerChoice === "Rock" && cpuChoice === "Rock" || sanitizedPlayerChoice === 
        "Scissors" && cpuChoice === "Scissors" || sanitizedPlayerChoice === "Paper" && cpuChoice === "Paper") {
            console.log("You tied!");
        } else if (sanitizedPlayerChoice === "Rock" && cpuChoice === "Paper" || sanitizedPlayerChoice === 
        "Scissors" && cpuChoice === "Rock" || sanitizedPlayerChoice === "Paper" && cpuChoice === "Scissors") {
            console.log("You lost!");
    }
}
}

function capitalizeInput(input) {
    let sanitizedPlayerChoice = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return sanitizedPlayerChoice;
}

playRound(playerSelection, cpuSelection);
