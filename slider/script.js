const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".left");
const next = document.querySelector(".right");

let currentSlide = 0;

function showSlides(currentSlide, direction) {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "enter-from-right", "enter-from-left")
        if (currentSlide === index) {
            slide.classList.add("active", direction === "next" ? "enter-from-right" : "enter-from-left")
        }
    })
}


function nextSlide(){
    currentSlide++;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    showSlides(currentSlide, "next");
}
function prevSlide(){
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlides(currentSlide, "prev")
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

function autoSlide(){
     autoSLideInterval = setInterval(nextSlide, 3000)
}
autoSlide()