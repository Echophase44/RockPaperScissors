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

//Takes inputs and plays a round of R/P/S and returns result, adds to player or computer score
function playRound(player, computer) {
    if (player === "rock" && computer === "scissors"){
        playerScore++;
        return "You win, Rock beats Paper!";
    } else if (player === "paper" && computer === "rock"){
        playerScore++;
        return "You win, Paper beats Rock!";
    } else if (player === "scissors" && computer === "paper"){
        playerScore++;
        return "You win, Scissors beats Paper!";
    } else if (computer === "rock" && player === "paper"){
        computerScore++;
        return "Computer wins, Rock beats paper!";
    } else if (computer === "paper" && player === "rock"){
        computerScore++;
        return "Computer wins, Paper beats Rock!";
    } else if (computer === "scissors" && player === "paper"){
        computerScore++;
        return "Computer wins, Scissors beats Paper!";
    } else if (player === computer){
        return "It's a tie!";
    }
};


//Determines winner of the 5 rounds
// if (i === 5 && (playerScore > computerScore)){
//        console.log("You win the game!");
//      } else if (i === 5 && (playerScore < computerScore)){
//        console.log("Computer wins the game!");
//    } else if (i === 5 && (playerScore === computerScore)){
 //       console.log("Tie game!")
//    }




const playerScorePara = document.querySelector(".displayThis")


const ansRock = document.querySelector('.btn-rock');
ansRock.addEventListener("click", () => {
console.log("rock")
});

const ansPaper = document.querySelector('.btn-paper');
ansPaper.addEventListener("click", () => {
    console.log(playRound("paper", computerPlay()));
    playerScorePara.textContent = `Player: ${playerScore}`;
              
});

const ansScissors = document.querySelector('.btn-scissors');
ansScissors.addEventListener("click", () => {
    console.log("scissors")
});