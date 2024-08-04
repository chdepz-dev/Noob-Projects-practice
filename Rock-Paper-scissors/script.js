const buttons = document.querySelectorAll("button");
const message = document.getElementById("result-message")
const playerScoreMessage = document.getElementById("player-score")
const ComputerScoreMessage = document.getElementById("computer-score")
// console.log(playerScoreMessage)

let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = GamePlay(button.id, computerPlay())
        message.textContent = result;
    })
})


function computerPlay() {
    let selections = ["rock", "paper", "scissors"]
    let randomSelections = Math.floor(Math.random() * selections.length);
    return selections[randomSelections]
}


function GamePlay(palyerSelection, computerSlection) {
    if (palyerSelection === computerSlection) {
        return `Its a tie.`
    } else if (
        palyerSelection === "rock" && computerSlection === "scissor" ||
        palyerSelection === "paper" && computerSlection === "rock" ||
        palyerSelection === "scissor" && computerSlection === "paper"
    ) {
        playerScore++;
        playerScoreMessage.innerText = playerScore;
        return `You win! ${palyerSelection} beats ${computerSlection}`
    }
    else {
        computerScore++
        ComputerScoreMessage.innerText = computerScore;
        return `You lost! ${computerSlection} beats ${palyerSelection}`
    }
}