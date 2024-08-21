const rangeValue = document.getElementById("range-value")
const range = document.getElementById("range")
const btn = document.getElementById("btn")
const password = document.getElementById("password")
const copyToclipboard = document.getElementById("copy")

let Length;
range.addEventListener("input", (e) => {
    rangeValue.innerText = `Length: ${e.target.value}`
    length = e.target.value
})

btn.addEventListener("click", () => {
    generatePassword(length)
})
copyToclipboard.addEventListener("click", () => {
    copyPassword();
    password.value = "copied"
    // alert("password copied to clipboard")
})
function generatePassword(length) {
    let char = `0123456789abcdefghijklmnopqrstuvwxtz
                !@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    let GeneratedPassword = "";
    for (let i = 0; i <= length; i++) {
        let randomNum = Math.floor(Math.random() * char.length)
        let randomChar = char.charAt(randomNum)
        GeneratedPassword += randomChar
    }
    password.value = GeneratedPassword
}

function copyPassword() {
    password.select();
    password.setSelectionRange(0, 20);
    navigator.clipboard.writeText(password.value)
}