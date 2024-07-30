let loader = document.querySelector(".loader9");
let home = document.querySelector(".main");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.remove("active");
        home.classList.add("view");
    }, 3000);
});

let birthInput = document.querySelector("#dateOfBirth");
let btn = document.querySelector(".btn");
let p = document.querySelector(".result")


btn.addEventListener("click", function(){
       let birtDate = birthInput.value;
       // console.log(birtDate)
    calculateAge(birtDate)
})

function calculateAge(birthDate){
        let currentDate = new Date()
        let bDay = new Date(birthDate)
         let age = currentDate.getFullYear() - bDay.getFullYear();

        p.innerText = `You are ${age} ${age > 1? "years": "year"} old.`;

}