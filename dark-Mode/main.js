
const checkBtn = document.querySelector(".input")
const bodyEl = document.querySelector("body")

const isChecked = JSON.parse(localStorage.getItem("mode"))
function setTheme(isChecked) {
    if (isChecked) {
        bodyEl.style.backgroundColor = "black"
        bodyEl.style.color = "white"
    } else {
        bodyEl.style.backgroundColor = "white"
        bodyEl.style.color = "black"
    }
}
checkBtn.addEventListener("click", (e) => {
    const isChecked = e.target.checked;
    
    setTheme(isChecked);
    localStorage.setItem("mode", isChecked)
})

// setting the initial theme based on localStorage
setTheme(isChecked)


