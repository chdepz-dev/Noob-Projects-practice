const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".left");
const next = document.querySelector(".right");
const dotsContainer = document.querySelector(".dots-container")


let currentSlide = 0;
let dotsIndex = 0;

function showSlides(currentSlide, direction, dotsTrackId) {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "enter-from-right", "enter-from-left")
        if (currentSlide === index) {
            slide.classList.add("active", direction === "next" ? "enter-from-right" : "enter-from-left")

        }
    })
    const allDots = document.querySelectorAll(".dots")
    allDots.forEach((dot, index) => {
        dot.classList.remove("active")
        if (dotsTrackId === index) {
            dot.classList.add("active")
        }
    })

}


function nextSlide() {
    const allDots = document.querySelectorAll(".dots")
    currentSlide++;
    dotsIndex++
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    if (dotsIndex > allDots.length - 1) {
        dotsIndex = 0
    }
    showSlides(currentSlide, "next", dotsIndex);
}
function prevSlide() {
    const allDots = document.querySelectorAll(".dots")
    currentSlide--;
    dotsIndex--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    if (dotsIndex < 0) {
        dotsIndex = allDots.length - 1
    }
    showSlides(currentSlide, "prev", dotsIndex)
}


next.addEventListener("click", () => {
    nextSlide()
    clearInterval(autoSLideInterval)
    autoSlide()
})

prev.addEventListener("click", () => {
    prevSlide()
    clearInterval(autoSLideInterval)
    autoSlide()

})

function autoSlide() {
    autoSLideInterval = setInterval(nextSlide, 3000)
}
autoSlide()


function showDots() {
    for (let i = 0; i < slides.length; i++) {
        let dotsEl = document.createElement("span")
        dotsEl.className = "dots"
        dotsContainer.appendChild(dotsEl)
    }
    const allDots = document.querySelectorAll(".dots");
    if (allDots.length > 0) {
        allDots[0].classList.add("active");
    }

}
showDots()