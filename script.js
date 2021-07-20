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
        return `It's a draw!, you both played ${playerSelection}`
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose ${playerSelection} loses against ${computerSelection}`
    }
}

function game() {  
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Pick something between Rock, Paper, and Scissors");
        console.log(

            round(playerSelection, computerSelection)
            
        )
    }
        
}

game();