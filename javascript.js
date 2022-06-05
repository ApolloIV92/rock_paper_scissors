let playerSelection = window.prompt("Choose your move!");
let throws = ['Paper', "Scissors", "Rock"];
let cpuSelection = randomChoice();

function randomChoice() {
    let choice = throws[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerChoice, cpuChoice) {
    if (playerChoice === null) console.log("Game aborted");
    else {
        console.log(`You chose: ${playerChoice}`);
        console.log(`Your opponent chose: ${cpuChoice}`)
    }
}

playRound(playerSelection, cpuSelection);
