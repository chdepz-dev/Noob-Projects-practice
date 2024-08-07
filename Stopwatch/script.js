const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let elapsedTime = 0;
let startTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timer.textContent = formatTime(elapsedTime)
    }, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false
}

function formatTime(elapsedTime) {
    const milliSec = Math.floor((elapsedTime % 1000) / 10);
    const sec = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const min = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (min ? (min > 9 ? min : "0" + min) : "00") + ":" +
        (sec ? (sec > 9 ? sec : "0" + sec) : "00") + ":" +
        (milliSec > 9 ? milliSec : "0" + milliSec)
    )
}

function stopTimer() {
    clearInterval(timerInterval)
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval)
    elapsedTime = 0;
    timer.textContent = "00:00:00";
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
resetBtn.addEventListener("click", resetTimer)

