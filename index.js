let homeCounter = 0
let guestCounter = 0

let elHomeScore = document.getElementById("home-score")
let elGuestScore = document.getElementById("guest-score")

elHomeScore.textContent = homeCounter
elGuestScore.textContent = guestCounter

function incrHome1() {
    homeCounter += 1
    elHomeScore.textContent = homeCounter
}

function incrHome2() {
    homeCounter += 2
    elHomeScore.textContent = homeCounter
    
}

function incrHome3() {
    homeCounter += 3
    elHomeScore.textContent = homeCounter    
}

function incrGuest1() {
    guestCounter += 1
    elGuestScore.textContent = guestCounter    
}

function incrGuest2() {
    guestCounter += 2
    elGuestScore.textContent = guestCounter    
}

function incrGuest3() {
    guestCounter += 3
    elGuestScore.textContent = guestCounter    
}
