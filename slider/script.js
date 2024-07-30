const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".left");
const next = document.querySelector(".right");

let currentSlide = 0;

function showSlide(direction) {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "enter-from-right", "enter-from-left");
        if (currentSlide === index) {
            slide.classList.add("active", direction === 'next' ? "enter-from-right" : "enter-from-left");
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    showSlide('next');
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide('prev');
}

next.addEventListener("click", () => {
    nextSlide();
    clearInterval(autoslideInterval);
    startAutoSlide();
});

prev.addEventListener("click", () => {
    prevSlide();
    clearInterval(autoslideInterval);
    startAutoSlide();
});

function startAutoSlide() {
    autoslideInterval = setInterval(nextSlide, 4000);
}

startAutoSlide();
