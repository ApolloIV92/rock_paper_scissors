let throws = ['Paper', "Scissors", "Rock"];
let outcome;
let wins = 0;
let losses = 0; 
let ties = 0;

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
            wins++
            outcome = `You win! Score: Wins ${wins} Losses ${losses} Ties ${ties}`;
            return outcome;
        } else if (sanitizedPlayerChoice === "Rock" && cpuChoice === "Rock" || sanitizedPlayerChoice === 
        "Scissors" && cpuChoice === "Scissors" || sanitizedPlayerChoice === "Paper" && cpuChoice === "Paper") {
            ties++;
            outcome = `You tied! Score: Wins ${wins} Losses ${losses} Ties ${ties}`;
            return outcome;
        } else if (sanitizedPlayerChoice === "Rock" && cpuChoice === "Paper" || sanitizedPlayerChoice === 
        "Scissors" && cpuChoice === "Rock" || sanitizedPlayerChoice === "Paper" && cpuChoice === "Scissors") {
            losses++;
            outcome = `You lost! Score: Wins ${wins} Losses ${losses} Ties ${ties}`;
            return outcome;
    }
}
}

function capitalizeInput(input) {
    let sanitizedPlayerChoice = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return sanitizedPlayerChoice;
}

function game() {
    for (let i = 0; i<5; i++) {
        let playerSelection = prompt("Choose your move!");
        let cpuSelection = randomChoice();
        console.log(playRound(playerSelection, cpuSelection));
    }
}

game();

