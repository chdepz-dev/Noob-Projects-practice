document.getElementById("watch").addEventListener("click", () => {
    document.querySelector(".video-container").classList.add("active")
})

document.getElementById("exit").addEventListener("click", () => {
    document.querySelector(".video-container").classList.remove("active")
})