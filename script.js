// Initialize player and computer score
let playerScore = 0;
let computerScore = 0;

// Randomly generate choice 
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

// Play one round 
function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    }
    else {
        return "Draw";
    }
}

// Determine and print winner
function printWinner(player, computer) {
    if (player === 5){
        console.log("You Win!");
    }
    if (computer === 5){
        console.log("You Lost");
    }
}

// Repeat playRound by x amount of times
function game(rounds) {
    for (let i = 1; i <= rounds; i++){
        // Get player choice
        let playerChoice = prompt("Enter your choice");
        // Get computer choice 
        let computerChoice = getComputerChoice();
        // Print computer choice 
        console.log("Computer: " + computerChoice);
        // Print curent round and result of round
        console.log("Game " + i + " : " + playRound(playerChoice, computerChoice));
        // Print current score of player and computer
        console.log("Player score: " + playerScore + "\t" + "Computer score: " + computerScore);
    }
}

// Play 5 games
// game(5);
// printWinner(playerScore, computerScore);

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let choice;

rockButton.addEventListener("click", chooseRock);
paperButton.addEventListener("click", choosePaper);
scissorsButton.addEventListener("click", chooseScissors);


function chooseRock(e) {
    console.log(e.target);
    choice = "rock";
    console.log(playRound(choice, getComputerChoice()));
    printWinner(playerScore, computerScore);
    console.log("Player score: " + playerScore + "\t" + "Computer score: " + computerScore);
}
function choosePaper(e) {
    console.log(e.target);
    choice = "paper";
    console.log(playRound(choice, getComputerChoice()));
    printWinner(playerScore, computerScore);
    console.log("Player score: " + playerScore + "\t" + "Computer score: " + computerScore);
}
function chooseScissors(e) {
    console.log(e.target);
    choice = "scissors";
    console.log(playRound(choice, getComputerChoice()));
    printWinner(playerScore, computerScore);
    console.log("Player score: " + playerScore + "\t" + "Computer score: " + computerScore);
}

