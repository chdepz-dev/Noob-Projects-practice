let bill = document.querySelector("#bill-amount")
let tip = document.querySelector("#tip-percentage")
let calcBtn = document.querySelector("#calculate-btn")
let totalIndicator = document.querySelector("#total")

calcBtn.addEventListener("click", function () {
    const billAmt = Number(bill.value)
    const tipAmt = Number(tip.value)
    if (!isNaN(billAmt) && !isNaN(tipAmt)) {
        tipCalculator(billAmt, tipAmt);
        totalIndicator.classList.remove("red")
    } else {
        totalIndicator.textContent = "Please enter valid numbers.";
        totalIndicator.classList.add("red")
    }

    bill.value = "";
    tip.value = "";

})

function tipCalculator(bill, tip) {
    let percentAmount = bill / 100 * tip;
    let total = bill + percentAmount;
    totalIndicator.textContent = `$${total.toFixed(2)}`;

}



