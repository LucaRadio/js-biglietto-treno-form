
const nameQuest = document.querySelector("[name='user-name']");

const nameAfter = document.getElementById("name-value");

const kmAfter = document.getElementById("km-value");

const priceAfter = document.getElementById("final-price");

const btnGenerator = document.querySelector("#generator-btn");

const cancelBtn = document.getElementById("cancel");

const ticketType = document.getElementById("ticket-type");

let ticketNumber = document.getElementById("ticket-number");

const appear = document.getElementById("ticket-generator");




btnGenerator.addEventListener("click", function () {

    if (appear.classList.contains("d-none")) {
        appear.classList.replace("d-none", "d-block")
    }

    let ticketNumberRandom = Math.floor(Math.random() * 1000000) + 1;

    ticketNumber.innerHTML = ticketNumberRandom;

    const nameQuest = document.querySelector("[name='user-name']").value;

    nameAfter.innerHTML = nameQuest;

    let kmQuest = document.querySelector("[name='kmTrack']").value;

    kmAfter.innerHTML = kmQuest;

    const selector = document.querySelector("select").value;
    console.log(selector);

    let price = (kmQuest * 0.21).toFixed(2);

    if (selector == 20) {
        let minorPrice = (price - (price * 0.2)).toFixed(2);
        priceAfter.innerHTML = `${minorPrice} € (- 20%)`
        ticketType.innerHTML = "Bambini"
    }
    else if (selector == 40) {
        let overPrice = (price - (price * 0.4)).toFixed(2);
        priceAfter.innerHTML = `${overPrice} € (-40%)`
        ticketType.innerHTML = "Ridotto"
    }
    else {
        priceAfter.innerHTML = `${price} €`
        ticketType.innerHTML = "Standard"
    }



})


cancelBtn.addEventListener("click", function () {
    nameQuest.value = ""
    let cancelInput = document.getElementById("km-track");
    cancelInput.value = ""

    if (appear.classList.contains("d-block")) {
        appear.classList.replace("d-block", "d-none")
    }

})


