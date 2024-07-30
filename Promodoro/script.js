const start = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const reset = document.querySelector(".reset")
const timer = document.querySelector(".timer")
const timeContainer = document.querySelector(".time-Container")

let interval;
let timeLeft = 1500;
let isStarted = false;
let isStopped = false;
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60)
    let sec = timeLeft % 60;
    let time = `${minutes.toString().padStart(2, 0)} : ${sec.toString().padStart(2, 0)}`
    timer.innerHTML = time;
}
// updateTimer()
function startTimer() {
    isStarted = true;

    interval = setInterval(() => {
        timeLeft--;
        updateTimer()
        if (timeLeft === 0) {
            clearInterval(interval)
            alert("Time is up. start again")
            timeLeft = 1500;
            isStarted = false;
            updateTimer();
        }
    }, 1000)
}


function stopTimer() {
    clearInterval(interval)
    isStopped = true;
    isStarted = false

}

function resetTimer() {
    clearInterval(interval)
    timeLeft = 1500;
    isStarted = false;
    isStopped = false;
    updateTimer();
    stopBtn.innerText = "Stop";
    start.innerText = "Start";

}

start.addEventListener("click", () => {
    startTimer()
    if (isStarted) {
        stopBtn.innerText = "Stop";
        start.innerText = "Start"
    }
})
stopBtn.addEventListener("click", () => {
    stopTimer()
    if (isStopped) {
        stopBtn.innerText = "Paused";
        start.innerText = "Resume"
    }
})
reset.addEventListener("click", () => {
    resetTimer();

})
updateTimer();

