// Initialize player and computer score
let playerScore = 0;
let computerScore = 0;
// If lose resultStatus = 0, if win resultStatus = 1;
let resultStatus;
let playAgain = true;
let choice;

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click",(e) => {
    choice = "rock";
    if(playAgain) play(choice);
});

paperButton.addEventListener("click", (e) => {
    choice = "paper";
    if (playAgain) play(choice);
});
scissorsButton.addEventListener("click", (e) => {
    choice = "scissors";
    if (playAgain) play(choice);
});

// Start the game
function play(choice) {
    let computerChoice = getComputerChoice();
    let result = playRound(choice, computerChoice);
    showComputerChoice (computerChoice);
    displayResult(result);
    displayScoreboard();
    changeStyle();
    printWinner(playerScore, computerScore);
    checkUser();
}

// Randomly generate choice 
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

// Play one round 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        resultStatus = 0;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        resultStatus = 1;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        resultStatus = 0;
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        resultStatus = 1;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        resultStatus = 0;
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        resultStatus = 1;
        return "You Win! Rock beats Scissors";
    }
    else {
        resultStatus = 3;
        return "Draw";
    }
}

// Determine and print winner
function printWinner(player, computer) {
    // If player or computer score reaches 5 points
    if (player == 5){
        displayResult("Congrats! You won!")
        playAgain = false;
    }
    if (computer == 5){
        displayResult("Sorry, you lost")
        playAgain = false;
    }
    }

// Check if user wants to play again 
function checkUser() {
    if (playAgain == false) {
        // Set delay to 2 seconds
        setTimeout(() => {
            playAgain = confirm("Do you wish to play again?");
        if (playAgain) {
            // Initialize all scores and text
            computerScore = 0;
            playerScore = 0;
            displayResult("Choose one to start the game!");
            displayScoreboard();
        }
        else {
            alert("Thanks for playing!");
        }
        // Change back to robot image
        document.getElementById("robot-img").src="./images/robot.png";
        }, 2000)
    }
}

// Change image of robot to computer's choice
function showComputerChoice(computerChoice) {
    let robotImg = document.getElementById("robot-img");
    if (computerChoice == "rock"){
        robotImg.src="./images/robot-rock.png";
        robotImg.classList.add("robot-style");
    }
    else if (computerChoice == "paper"){
        robotImg.src="./images/robot-paper.png";
        robotImg.classList.add("robot-style");
    }
    else if (computerChoice == "scissors"){
        robotImg.src="./images/robot-scissors.png";
        robotImg.classList.add("robot-style");
    }
}

// Display win or lose above the computer section
function displayResult(result) {
    let resultSection = document.querySelector(".result-section");
    resultSection.textContent = result;
}

// Update the scoreboard
function displayScoreboard() {
    document.querySelector(".player-score").textContent = `Player : ${playerScore}`;
    document.querySelector(".computer-score").textContent = `Computer : ${computerScore}`
}

// Change the background color according to win or lose
function changeStyle() {
    let body = document.querySelector("body");
    console.log(resultStatus);
    if (resultStatus == 0) {
        body.style = "background-color: #e74c3c";
    }
    else if (resultStatus == 1) {
        body.style = "background-color: #16a085";
    }
    else if (resultStatus == 3) {
        body.style = "background-color: #333333";
    }
}