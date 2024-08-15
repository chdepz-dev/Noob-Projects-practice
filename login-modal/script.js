const modal = document.querySelector(".form-modal")
const loginForm = document.getElementById("login-form")
const signUpForm = document.getElementById("signup-form")

let logInbtn = document.getElementById("login")
let signUpbtn = document.getElementById("signup")
let closeBtn = document.getElementById("close")
logInbtn.addEventListener("click", () => {
    modal.classList.add("open")
    loginForm.classList.add("open")
    signUpForm.style.display = "none"
})

signUpbtn.addEventListener("click", () => {
    modal.classList.add("open")
    loginForm.style.display = "none"
    signUpForm.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open")
})

window.onclick = function (event) {
    if (event.target === modal) {
        modal.classList.remove("open")
    }
}