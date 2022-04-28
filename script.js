setInterval(setClock, 1000) // called every second
// grabbing html elements 
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock() {
    const currentDate = new Date() //Grab current date
    const secondsRatio = currentDate.getSeconds() / 60 //Get seconds from date and 
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 // "/ 60" to get ratio for hand movement
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 // "/ 12" for hour ratio
    setRotation(secondHand, secondsRatio) // call funtion for hand rotation below
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    console.log(secondsRatio, minutesRatio, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360) // rotates hand by * 360
}

setClock() // called to set clock as soon as page is loaded