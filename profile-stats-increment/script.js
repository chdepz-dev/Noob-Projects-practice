let counters = document.querySelectorAll(".counter")

counters.forEach((counter) => {
    counter.textContent = 0;
    let target = parseInt(counter.getAttribute("data-target"))
    let increment = target / 200; //for the speed

    function updateCounter(){
        let current = parseInt(counter.textContent);
        if(current < target){
            counter.textContent = Math.ceil(current + increment)
            setTimeout(updateCounter, 20); //adujst for the speed
        }else{
            counter.textContent = `${target}+`;
        }
    }
    updateCounter();
})



// console.log(Math.ceil(5.51984))