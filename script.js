const log = document.querySelector('.alert');
const buttons = document.querySelectorAll('button');
const score = document.querySelector('#score');


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        round(e.target.textContent, computerPlay());
    })
})

function computerPlay() {
    const num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1: return "rock" 
        case 2: return "paper"
        case 3: return "scissors"
    }
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        log.setAttribute('class', 'alert alert-info');
        log.textContent = `It's a draw!, you both played ${playerSelection}`;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        log.setAttribute('class', 'alert alert-success');
        log.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        score.textContent = Number(score.textContent) + 1;
    } else {
        log.textContent =  `You lose ${playerSelection} loses against ${computerSelection}`;
        log.setAttribute('class', 'alert alert-danger');
        score.textContent = Number(score.textContent) -1;
    }
}

