
const img = []
img[0] = new Image()
img[0].className = "x"
img[0].src = "images/x.png"
img[0].alt = "x"


img[1] = new Image()
img[1].className = "o"
img[1].src = "images/oooo.png"
img[1].alt = "o"

let player1 = true
const allGrids = document.querySelectorAll(".grid")
const allImg = document.querySelectorAll("img")

let player1TotalScore = 0
let player2TotalScore = 0 

/*for (let i=0; i < allImg.length; i++) {
    allImg[i].addEventListener("click", markSpot)
}*/

function markSpot(event) {
    let chooseGrid = event.target 
    if (player1 === true && chooseGrid.className === "p") {
        chooseGrid.src = "images/oooo.png"
        chooseGrid.className ="o"
        chooseGrid.classList.toggle('rotate-scale-up')
        player1=false
    } else if (player1 === false && chooseGrid.className === "p")  {
        chooseGrid.src = "images/x.png"
        chooseGrid.className = "x"
        chooseGrid.classList.toggle('rotate-scale-up')
        player1=true
    }
    setTimeout(player1Win, 1.5 * 1000)
    setTimeout(player2Win, 1.5 * 1000)
    setTimeout(playerDraw, 1.5 * 1000)
}

function player1Win() {
    if ((allImg[0].className === "o rotate-scale-up" && allImg[1].className === "o rotate-scale-up" 
        && allImg[2].className === "o rotate-scale-up") || (allImg[0].className === "o rotate-scale-up" && allImg[4].className === "o rotate-scale-up" 
        && allImg[8].className === "o rotate-scale-up") || (allImg[0].className === "o rotate-scale-up" && allImg[3].className === "o rotate-scale-up" 
        && allImg[6].className === "o rotate-scale-up") || (allImg[2].className === "o rotate-scale-up" && allImg[5].className === "o rotate-scale-up" 
        && allImg[8].className === "o rotate-scale-up") || (allImg[2].className === "o rotate-scale-up" && allImg[4].className === "o rotate-scale-up" 
        && allImg[6].className === "o rotate-scale-up") || (allImg[6].className === "o rotate-scale-up" && allImg[7].className === "o rotate-scale-up" 
        && allImg[8].className === "o rotate-scale-up") || (allImg[1].className === "o rotate-scale-up" && allImg[4].className === "o rotate-scale-up" 
        && allImg[7].className === "o rotate-scale-up") || (allImg[3].className === "o rotate-scale-up" && allImg[4].className === "o rotate-scale-up" 
        && allImg[5].className === "o rotate-scale-up")) {
        let player1Won = document.querySelector(".player-win")
        player1Won.textContent = "Player 1 WON !!!!"
        player1Score()
        reset()
        
    } 

}
    
function player2Win() {
    if ((allImg[0].className === "x rotate-scale-up" && allImg[1].className === "x rotate-scale-up" 
        && allImg[2].className === "x rotate-scale-up") || (allImg[0].className === "x rotate-scale-up" && allImg[4].className === "x rotate-scale-up" 
        && allImg[8].className === "x rotate-scale-up") || (allImg[0].className === "x rotate-scale-up" && allImg[3].className === "x rotate-scale-up" 
        && allImg[6].className === "x rotate-scale-up") || (allImg[2].className === "x rotate-scale-up" && allImg[5].className === "x rotate-scale-up" 
        && allImg[8].className === "x rotate-scale-up") || (allImg[2].className === "x rotate-scale-up" && allImg[4].className === "x rotate-scale-up" 
        && allImg[6].className === "x rotate-scale-up") || (allImg[6].className === "x rotate-scale-up" && allImg[7].className === "x rotate-scale-up" 
        && allImg[8].className === "x rotate-scale-up") || (allImg[1].className === "x rotate-scale-up" && allImg[4].className === "x rotate-scale-up" 
        && allImg[7].className === "x rotate-scale-up") || (allImg[3].className === "x rotate-scale-up" && allImg[4].className === "x rotate-scale-up" 
        && allImg[5].className === "x rotate-scale-up")) {
        let player2Won = document.querySelector(".player-win")
        player2Won.textContent = "Player 2 WON !!!!"
        player2Score()
        reset()
        
        }
}

function playerDraw() {
    p_count = 0 

    for (let i = 0; i < allImg.length; i++) {
        if (allImg[i].className === "p") {
            p_count += 1
        }
    }

    if (p_count == 0){
        let playersDraw = document.querySelector(".player-win")
        playersDraw.textContent = "Wow ! It's a DRAW !!!!"
        reset()
    }
   
}

function reset() {
    for (let i = 0; i < allImg.length; i++) {
        allImg[i].src = ""
        allImg[i].className ="p"
    }
}

function player1Score() {
    player1TotalScore = document.querySelector(".player1-score").textContent
    p1Score = document.querySelector(".player1-score")
    p1Score.textContent = Number(player1TotalScore) + 1
}

function player2Score() {
    player2TotalScore = document.querySelector(".player2-score").textContent
    p2Score = document.querySelector(".player2-score")
    p2Score.textContent = Number(player2TotalScore) + 1
}


function markX(num) {
    let AIchooseGrid = allImg
    AIchooseGrid[num].src = "images/x.png"
    AIchooseGrid[num].className = "x"
    AIchooseGrid[num].classList.toggle('rotate-scale-up')
    player1=true
}

function targetX(num) {
    if (num < 4) {
        result = 4 + (4 - num)

        return result
    } else if (num > 4) {
        result = 4 - (num - 4)

        return result
    }
}

function moveOne() {
    if (player1===false && allImg[4].className === "p") {
        chosenArray.push(4)
        usedGrid.push(4)
        totalGrid.splice(4, 1)
        markX(4) 
        return
    } else if (player1 ===false && allImg[4].className !== "p") {
        probArray = [0, 2, 6, 8]
        rndIndex = Math.floor(Math.random() * 4)
        num = probArray[rndIndex]
        chosenArray.push(num)
        usedGrid.push(num)
        totalGrid.splice(4, 1)
        totalGrid.splice(num, 1)
        markX(Number(num))

        return
    }
}

function moveTwo() {
    if (player1===false) {
        allPossibities = allImg
        for (let i = 0; i < 9; i++){
            if (allPossibities[i].className === "o rotate-scale-up" && i == usedGrid[usedGrid.length - 1]) {
                console.log(i)
                targetGridIndex = Number(targetX(i))

                if (allPossibities[targetGridIndex].className == "p") { 
                    console.log(targetGridIndex)
                    chosenArray.push(targetGridIndex)
                    usedGrid.push(targetGridIndex)
                    totalGrid.splice(targetGridIndex, 1)
                    markX(targetGridIndex)
                    return

                } else if (allPossibities[targetGridIndex].className != "p" && targetGridIndex !== 0 && targetGridIndex !== 8) {
                    rndIdxNextTo = Math.floor(Math.random() * 2)
                    nextToElement = arrayNextTo[rndIdxNextTo]
                    pickNextElement = nextToElement + targetGridIndex

                    if (usedGrid.includes(pickNextElement) === true) {
                        rndIdx = Math.floor(Math.random() * totalGrid.length)
                        targetNextGrid = totalGrid[rndIdx]
                        chosenArray.push(targetNextGrid)
                        usedGrid.push(targetNextGrid)
                        totalGrid.splice(targetNextGrid, 1)
                        markX(targetNextGrid)

                        return
                    } else {
                        chosenArray.push(pickNextElement)
                        usedGrid.push(pickNextElement)
                        totalGrid.splice(pickNextElement, 1)
                        markX(pickNextElement)
                        return
                    } 
                } else if (Number(targetGridIndex) == 0){
                    pickNextElement = targetGridIndex + 1

                    if (usedGrid.includes(pickNextElement) === true){
                        rndIdx = Math.floor(Math.random() * totalGrid.length)
                        targetNextGrid = totalGrid[rndIdx]
                        chosenArray.push(targetNextGrid)
                        usedGrid.push(targetNextGrid)
                        totalGrid.splice(targetNextGrid, 1)
                        markX(targetNextGrid)
                        return
                    } else {
                        chosenArray.push(pickNextElement)
                        usedGrid.push(pickNextElement)
                        totalGrid.splice(pickNextElement, 1)
                        markX(pickNextElement)
                        return
                    }


                } else if (Number(targetGridIndex) == 8){
                    pickNextElement = targetGridIndex - 1

                    if (usedGrid.includes(pickNextElement) === true){
                        rndIdx = Math.floor(Math.random() * totalGrid.length)
                        targetNextGrid = totalGrid[rndIdx]
                        chosenArray.push(targetNextGrid)
                        usedGrid.push(targetNextGrid)
                        totalGrid.splice(targetNextGrid, 1)
                        markX(targetNextGrid)
                        return
                    } else {
                        chosenArray.push(pickNextElement)
                        usedGrid.push(pickNextElement)
                        totalGrid.splice(pickNextElement, 1)
                        markX(pickNextElement)
                        return
                    }
                }
            }
        }
    }
}



function moveThree() {
    if (player1===false) {
        allPossibities = allImg
        for (let i = 0; i < 9; i++){
            if (allPossibities[i].className === "o rotate-scale-up" && i == usedGrid[usedGrid.length - 1]) {
                console.log(i)
                targetGridIndex = Number(targetX(i))

                if (allPossibities[targetGridIndex].className == "p") { 
                    console.log(targetGridIndex)
                    chosenArray.push(targetGridIndex)
                    usedGrid.push(targetGridIndex)
                    totalGrid.splice(targetGridIndex, 1)
                    markX(targetGridIndex)
                    return

                } else if (allPossibities[targetGridIndex].className != "p" && targetGridIndex !== 0 && targetGridIndex !== 8) {
                    rndIdxNextTo = Math.floor(Math.random() * 2)
                    nextToElement = arrayNextTo[rndIdxNextTo]
                    pickNextElement = nextToElement + targetGridIndex

                    if (usedGrid.includes(pickNextElement) === true) {
                        rndIdx = Math.floor(Math.random() * totalGrid.length)
                        targetNextGrid = totalGrid[rndIdx]
                        chosenArray.push(targetNextGrid)
                        usedGrid.push(targetNextGrid)
                        totalGrid.splice(targetNextGrid, 1)
                        markX(targetNextGrid)

                        return
                    } else {
                        chosenArray.push(pickNextElement)
                        usedGrid.push(pickNextElement)
                        totalGrid.splice(pickNextElement, 1)
                        markX(pickNextElement)
                        return
                    } 
                } else if (Number(targetGridIndex) == 0){
                    pickNextElement = targetGridIndex + 1

                    if (usedGrid.includes(pickNextElement) === true){
                        rndIdx = Math.floor(Math.random() * totalGrid.length)
                        targetNextGrid = totalGrid[rndIdx]
                        chosenArray.push(targetNextGrid)
                        usedGrid.push(targetNextGrid)
                        totalGrid.splice(targetNextGrid, 1)
                        markX(targetNextGrid)
                        return
                    } else {
                        chosenArray.push(pickNextElement)
                        usedGrid.push(pickNextElement)
                        totalGrid.splice(pickNextElement, 1)
                        markX(pickNextElement)
                        return
                    }


                } else if (Number(targetGridIndex) == 8){
                    pickNextElement = targetGridIndex - 1

                    if (usedGrid.includes(pickNextElement) === true){
                        rndIdx = Math.floor(Math.random() * totalGrid.length)
                        targetNextGrid = totalGrid[rndIdx]
                        chosenArray.push(targetNextGrid)
                        usedGrid.push(targetNextGrid)
                        totalGrid.splice(targetNextGrid, 1)
                        markX(targetNextGrid)
                        return
                    } else {
                        chosenArray.push(pickNextElement)
                        usedGrid.push(pickNextElement)
                        totalGrid.splice(pickNextElement, 1)
                        markX(pickNextElement)
                        return
                    }
                }
            }
        }
    }
}


function moveFour() {
    if (player1===false) {
        allPossibities = allImg
        for (let i = 0; i < 9; i++){
            if (allPossibities[i].className === "o rotate-scale-up" && i == usedGrid[usedGrid.length - 1]) {
                console.log(i)
                targetGridIndex = Number(targetX(i))

                if (allPossibities[targetGridIndex].className == "p") { 
                    console.log(targetGridIndex)
                    chosenArray.push(targetGridIndex)
                    usedGrid.push(targetGridIndex)
                    totalGrid.splice(targetGridIndex, 1)
                    markX(targetGridIndex)
                    return

                } else if (allPossibities[targetGridIndex].className != "p" && targetGridIndex !== 0 && targetGridIndex !== 8) {
                    rndIdxNextTo = Math.floor(Math.random() * 2)
                    nextToElement = arrayNextTo[rndIdxNextTo]
                    pickNextElement = nextToElement + targetGridIndex

                    if (usedGrid.includes(pickNextElement) === true) {
                        rndIdx = Math.floor(Math.random() * totalGrid.length)
                        targetNextGrid = totalGrid[rndIdx]
                        chosenArray.push(targetNextGrid)
                        usedGrid.push(targetNextGrid)
                        totalGrid.splice(targetNextGrid, 1)
                        markX(targetNextGrid)

                        return
                    } else {
                        chosenArray.push(pickNextElement)
                        usedGrid.push(pickNextElement)
                        totalGrid.splice(pickNextElement, 1)
                        markX(pickNextElement)
                        return
                    } 
                } else if (Number(targetGridIndex) == 0){
                    pickNextElement = targetGridIndex + 1

                    if (usedGrid.includes(pickNextElement) === true){
                        rndIdx = Math.floor(Math.random() * totalGrid.length)
                        targetNextGrid = totalGrid[rndIdx]
                        chosenArray.push(targetNextGrid)
                        usedGrid.push(targetNextGrid)
                        totalGrid.splice(targetNextGrid, 1)
                        markX(targetNextGrid)
                        return
                    } else {
                        chosenArray.push(pickNextElement)
                        usedGrid.push(pickNextElement)
                        totalGrid.splice(pickNextElement, 1)
                        markX(pickNextElement)
                        return
                    }


                } else if (Number(targetGridIndex) == 8){
                    pickNextElement = targetGridIndex - 1

                    if (usedGrid.includes(pickNextElement) === true){
                        rndIdx = Math.floor(Math.random() * totalGrid.length)
                        targetNextGrid = totalGrid[rndIdx]
                        chosenArray.push(targetNextGrid)
                        usedGrid.push(targetNextGrid)
                        totalGrid.splice(targetNextGrid, 1)
                        markX(targetNextGrid)
                        return
                    } else {
                        chosenArray.push(pickNextElement)
                        usedGrid.push(pickNextElement)
                        totalGrid.splice(pickNextElement, 1)
                        markX(pickNextElement)
                        return
                    }
                }
            }
        }
    }
}



function robotTiciTaci(round) {

    if (round === 0) {
        moveOne()
    } else if (round === 1) {
        moveTwo()
    } else if (round == 2) {
        moveThree()
    } else if (round == 3) {
        moveFour()
    }
}

for (let i=0; i < allImg.length; i++) {
    allImg[i].addEventListener("click", humanWay)
}


let round = 0 

let chosenArray = []
let usedGrid = []
let arrayNextTo = [-1, 1]
let totalGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function humanWay(event){
    chooseGrid = event.target
    if (player1 === true && chooseGrid.className === "p") {
        chooseGrid.src = "images/oooo.png"
        chooseGrid.className ="o"
        chooseGrid.classList.toggle('rotate-scale-up')
        usedGrid.push(Number(chooseGrid.dataset.num))
        console.log(Number(chooseGrid.dataset.num))
        totalGrid.splice(Number(chooseGrid.dataset.num), 1)

        player1=false

        setTimeout(player1Win, 1.5 * 1000)
        setTimeout(playerDraw, 1.5 * 1000)

        setTimeout(function() {
            robotTiciTaci(round)
            setTimeout(player2Win, 1.5 * 1000)
            setTimeout(playerDraw, 1.5 * 1000)

            round += 1
        }, 1.5 * 1000)

        
        
    }
}

