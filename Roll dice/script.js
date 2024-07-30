let dice = document.getElementById("dice")
let btn = document.getElementById("roll-button")
let rollHistory = document.getElementById("roll-history")

let rollHistoryList = [];


function rollDice(){
  let rollResult = Math.floor(Math.random() * 6) + 1;
  let diceNumber = getDiceNumbers(rollResult)
    dice.innerHTML = diceNumber;
  rollHistoryList.push(rollResult);
  updateRollHistory();
}


function updateRollHistory(){
  rollHistory.innerHTML = "";
  for (let i = 0; i < rollHistoryList.length; i++){
      const  listItem = document.createElement("li");
      listItem.innerHTML = `Roll: ${i + 1}: <span>${getDiceNumbers(rollHistoryList[i])}</span>`
      rollHistory.appendChild(listItem);
  }
}

function getDiceNumbers(rollResult){
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

btn.addEventListener("click", () => {
    dice.classList.add("roll-anim")
    setTimeout(() => {
        dice.classList.remove("roll-anim");
        rollDice()
    }, 1000)
   
})