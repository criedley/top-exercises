function getCompChoice() {
    let randInt = Math.floor(Math.random() * 3);

    switch(randInt) {
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;

        case 2:
            return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter 'rock', 'paper', or 'scissors': ");
    return playerChoice.toLowerCase();
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let compChoice = getCompChoice();

    if (playerChoice === "rock") {
        if (compChoice === "rock") {
            return "Tie!";
        } else if (compChoice === "paper") {
            return "Computer choses paper. You lose!";
        } else if (compChoice === "scissors") {
            return "Computer chooses scissors. You win!";
        }
    } else if (playerChoice === "paper") {
        if (compChoice === "rock") {
            return "Computer chooses rock. You win!";
        } else if (compChoice === "paper") {
            return "Computer choses paper. It's a tie!";
        } else if (compChoice === "scissors") {
            return "Computer chooses scissors. You loose!";
        }
    } else if (playerChoice === "scissors") {
        if (compChoice === "rock") {
            return "Computer chooses rock. You loose!";
        } else if (compChoice === "paper") {
            return "Computer choses paper. You win!";
        } else if (compChoice === "scissors") {
            return "Computer chooses scissors. It's a tie!";
        }
    }
}

function game() {
    let compWins = 0;
    let playerWins = 0;

    for (let round = 0; round < 5; round++) {
        let roundOutcome = playRound();

        if (roundOutcome.search("win") > 0) {
            playerWins++;
        } else {
            compWins++;
        }
        console.log(roundOutcome);
    }
    console.log(`You won ${playerWins} out of 5 rounds.`);
    if (playerWins >= 3) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }
}

game();