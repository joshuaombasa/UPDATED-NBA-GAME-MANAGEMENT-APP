const gameLeaderH1 = document.getElementById("game-leader-h1")
const homeFreeThrow = document.getElementById("home-free-throw")
const homeJumpShot = document.getElementById("home-jump-shot")
const homeThreePointPlay = document.getElementById("home-three-point-play")
const homeScore = document.getElementById("home-score")

const awayFreeThrow = document.getElementById("away-free-throw")
const awayJumpShot = document.getElementById("away-jump-shot")
const awayThreePointPlay = document.getElementById("away-three-point-play")
const awayScore = document.getElementById("away-score")
const newGameBtn = document.getElementById("new-game-btn")

let homeCounter = 0
let guestCounter = 0
newGameBtn.addEventListener("click", newGame)
homeFreeThrow.addEventListener("click", homefreeThrowMade)
homeJumpShot.addEventListener("click", homejumpShotMade)
homeThreePointPlay.addEventListener("click", homethreePointerMade)

awayFreeThrow.addEventListener("click", guestfreeThrowMade)
awayJumpShot.addEventListener("click", guestjumpShotMade)
awayThreePointPlay.addEventListener("click", guestthreePointerMade)

function homefreeThrowMade() {
    homeCounter++
    homeScore.textContent = homeCounter
    updateLeaderBoard()
}

function homejumpShotMade() {
    homeCounter += 2
    homeScore.textContent = homeCounter
    updateLeaderBoard()
}

function homethreePointerMade() {
    homeCounter += 3
    homeScore.textContent = homeCounter
    updateLeaderBoard()
}



function guestfreeThrowMade() {
    guestCounter++
    awayScore.textContent = guestCounter
    updateLeaderBoard()
}

function guestjumpShotMade() {
    guestCounter += 2
    awayScore.textContent = guestCounter
    updateLeaderBoard()
}

function guestthreePointerMade() {
    guestCounter += 3
    awayScore.textContent = guestCounter
    updateLeaderBoard()
}

function newGame() {
    guestCounter = 0
    homeCounter = 0
    awayScore.textContent = guestCounter
    homeScore.textContent = homeCounter

}


function updateLeaderBoard() {
    if (guestCounter === homeCounter) {
        gameLeaderH1.textContent = ``
    } else if (guestCounter > homeCounter) {
        gameLeaderH1.textContent = `Guest team is leading by ${guestCounter - homeCounter}`
    } else {
        gameLeaderH1.textContent = `Home team is leading by ${homeCounter - guestCounter}`
    }
}


