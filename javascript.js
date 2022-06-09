let throws = ['rock', 'paper', 'scissors'];
let outcome;
let wins = 0;
let losses = 0; 
let ties = 0;
let rounds = 0;

const headerText = document.querySelector(".headerContainer");
const score = document.createElement("h2")

function randomChoice() {
    let choice = throws[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerChoice) {
    const cpuChoice = randomChoice();
    if ((playerChoice === 'rock' && cpuChoice === 'paper') || 
        (playerChoice === 'paper' && cpuChoice === 'scissors') || 
        (playerChoice === 'scissors' && cpuChoice === 'rock')) {
            outcome = `You chose ${playerChoice} and your opponent chose ${cpuChoice}. You lose!`;
            losses++;
            rounds++;
    } else if ((playerChoice === 'rock' && cpuChoice === 'scissors') || 
               (playerChoice === 'paper' && cpuChoice === 'rock') || 
               (playerChoice === 'scissors' && cpuChoice === 'paper')) {
        outcome = `You chose ${playerChoice} and your opponent chose ${cpuChoice}. You win!`;
        wins++;
        rounds++;
    } else if ((playerChoice === 'rock' && cpuChoice === 'scissors') || 
               (playerChoice === 'paper' && cpuChoice === 'rock') || 
               (playerChoice === 'scissors' && cpuChoice === 'paper')) {
        outcome = `You chose ${playerChoice} and your opponent chose ${cpuChoice}. You tied!`;
        ties++;
        rounds++;
    }
    showResult(outcome);
}

function showResult(outcome) {
    const result = document.createElement("p");
    result.classList.add('resultsMessage');
    result.textContent = outcome;
    const showResults = document.querySelector(".results");
    showResults.insertBefore(result, showResults.firstChild);

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id))
});
