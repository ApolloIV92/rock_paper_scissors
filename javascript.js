let throws = ['rock', 'paper', 'scissors'];
let outcome;
let wins = 0;
let losses = 0; 
let rounds = 0;
let gameOver = false;

const scoreText = document.querySelector(".scoreContainer");
const score = document.createElement("p")
score.classList.add("score")
score.textContent = `Wins: ${wins} Losses: ${losses}`
score.style.fontSize = "30px";
scoreText.appendChild(score);

function randomChoice() {
    let choice = throws[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerChoice) {
    const cpuChoice = randomChoice();
    if ((playerChoice === 'rock' && cpuChoice === 'paper') || 
        (playerChoice === 'paper' && cpuChoice === 'scissors') || 
        (playerChoice === 'scissors' && cpuChoice === 'rock')) {
            outcome = `You chose ${playerChoice} and your opponent chose ${cpuChoice}. You lose this round.`;
            losses++;
            rounds++;
    } else if ((playerChoice === 'rock' && cpuChoice === 'scissors') || 
               (playerChoice === 'paper' && cpuChoice === 'rock') || 
               (playerChoice === 'scissors' && cpuChoice === 'paper')) {
        outcome = `You chose ${playerChoice} and your opponent chose ${cpuChoice}. You win this round.`;
        wins++;
        rounds++;
    } else if ((playerChoice === 'rock' && cpuChoice === 'rock') || 
               (playerChoice === 'paper' && cpuChoice === 'paper') || 
               (playerChoice === 'scissors' && cpuChoice === 'scissors')) {
        outcome = `You chose ${playerChoice} and your opponent chose ${cpuChoice}. You tied.`;
    }
    if (gameOver === false) showResult(outcome);
    checkStatus();
}

function showResult(outcome) {
    const result = document.createElement("p");
    result.classList.add('resultsMessage');
    result.textContent = outcome;
    const showResults = document.querySelector(".resultsWrapper");
    showResults.insertBefore(result, showResults.firstChild);
    const lastResult = showResults.lastElementChild.classList.contains("resultsMessage");
    if (showResults.childElementCount > 5) {
        showResults.removeChild(showResults.lastChild);
    }
    score.textContent = `Wins: ${wins} Losses: ${losses}`;
}

function checkStatus() {
    const showResults = document.querySelector(".resultsWrapper");
    const result = document.createElement("p");
    result.classList.add('resultsMessage');
    if (rounds>=5 && gameOver === false) {
        if (wins>losses) {
            result.textContent = "You won!";
            showResults.insertBefore(result, showResults.firstChild);
            if (showResults.childElementCount > 5) {
                showResults.removeChild(showResults.lastChild);
            }
            gameOver = true;
            setTimeout(gameReset, 5000);
        } else if (losses>wins) {
            result.textContent = "You lost!";
            showResults.insertBefore(result, showResults.firstChild);
            if (showResults.childElementCount > 5) {
                showResults.removeChild(showResults.lastChild);
            }
            gameOver = true;
            setTimeout(gameReset, 2000);
        }
    }
}

function gameReset() {
    wins = 0;
    losses = 0;
    rounds = 0;
    score.textContent = `Wins: ${wins} Losses: ${losses}`
    gameOver = false;
    const showResults = document.querySelector(".resultsWrapper");
    removeAllChildNodes(showResults);
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id))
});
