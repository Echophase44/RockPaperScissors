//////////  The Game  ///////////

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let selection = Math.floor(Math.random() * 3) + 1;
    if (selection === 1){
        selection = "rock";
    } else if (selection === 2){
        selection = "paper";
    } else if (selection === 3){
        selection = "scissors";
    }
    return selection;
}

function playRound(player, computer) {
    if (player === "rock" && computer === "scissors"){
        playerScore++;
        roundMessage.textContent = "You win, rock beats paper!";
    } else if (player === "paper" && computer === "rock"){
        playerScore++;
        roundMessage.textContent = "You win, paper beats rock!";
    } else if (player === "scissors" && computer === "paper"){
        playerScore++;
        roundMessage.textContent = "You win, scissors beats paper!";
    } else if (computer === "rock" && player === "paper"){
        computerScore++;
        roundMessage.textContent = "Computer wins, rock beats paper!";
    } else if (computer === "paper" && player === "rock"){
        computerScore++;
        roundMessage.textContent = "Computer wins, paper beats rock!";
    } else if (computer === "scissors" && player === "paper"){
        computerScore++;
        roundMessage.textContent = "Computer wins, scissors beats paper!";
    } else if (player === computer){
        roundMessage.textContent = "It's a tie!";
    }
};

function gameOver(player, computer){
    if (player === 5){
        alert("You win the game!");
    } else if (computer === 5){
        alert("The computer wins the game!");
    }
}
/////////// UI ///////////

const playerScorePara = document.querySelector(".playerScore");
const computerScorePara = document.querySelector(".computerScore");
const ansRock = document.querySelector('.btn-rock');
const ansPaper = document.querySelector('.btn-paper');
const ansScissors = document.querySelector('.btn-scissors');
const roundMessage = document.querySelector('.roundMessage');

ansRock.addEventListener("click", () => {
    playRound("rock", computerPlay());
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    gameOver(playerScore, computerScore);
});

ansPaper.addEventListener("click", () => {
    playRound("paper", computerPlay());
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    gameOver(playerScore, computerScore);
              
});

ansScissors.addEventListener("click", () => {
    playRound("rock", computerPlay());
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    gameOver(playerScore, computerScore);
});

