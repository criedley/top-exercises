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
    return prompt("Enter 'rock', 'paper', or 'scissors': ");
}

function playRound() {
    playerChoice = getPlayerChoice();
}

playRound();