
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

for (let i=0; i < allImg.length; i++) {
    allImg[i].addEventListener("click", markSpot)
}

function markSpot(event) {
    let chooseGrid = event.target 
    if (player1 === true && chooseGrid.className === "p") {
        chooseGrid.src = "images/oooo.png"
        chooseGrid.className ="o"
        player1=false
    } else if (player1 === false && chooseGrid.className === "p")  {
        chooseGrid.src = "images/x.png"
        chooseGrid.className = "x"
        player1=true
    }
    player1Win()
    player2Win()
    playerDraw()
}

function player1Win() {
    if ((allImg[0].className === "o" && allImg[1].className === "o" 
        && allImg[2].className === "o") || (allImg[0].className === "o" && allImg[4].className === "o" 
        && allImg[8].className === "o") || (allImg[0].className === "o" && allImg[3].className === "o" 
        && allImg[6].className === "o") || (allImg[2].className === "o" && allImg[5].className === "o" 
        && allImg[8].className === "o") || (allImg[2].className === "o" && allImg[4].className === "o" 
        && allImg[6].className === "o") || (allImg[6].className === "o" && allImg[7].className === "o" 
        && allImg[8].className === "o") || (allImg[1].className === "o" && allImg[4].className === "o" 
        && allImg[7].className === "o")) {
        alert("Player1 Won !!!")
        reset()
    } 

}
    
function player2Win() {
    if ((allImg[0].className === "x" && allImg[1].className === "x" 
        && allImg[2].className === "x") || (allImg[0].className === "x" && allImg[4].className === "x" 
        && allImg[8].className === "x") || (allImg[0].className === "x" && allImg[3].className === "x" 
        && allImg[6].className === "x") || (allImg[2].className === "x" && allImg[5].className === "x" 
        && allImg[8].className === "x") || (allImg[2].className === "x" && allImg[4].className === "x" 
        && allImg[6].className === "x") || (allImg[6].className === "x" && allImg[7].className === "x" 
        && allImg[8].className === "x") || (allImg[1].className === "x" && allImg[4].className === "x" 
        && allImg[7].className === "x")) {
        alert("Player2 Won !!!")
        reset()
        }
}

function playerDraw() {
    p_count = 0 

    for (let i = 0; i < allImg.length; i++) {
        if (allImg[i].className === 'p') {
            p_count += 1
        }
    }

    if (p_count == 0){
        alert("Wow It's a draw !!!")
        reset()
    }
   
}

function reset() {
    for (let i = 0; i < allImg.length; i++) {
        allImg[i].src = "images/wooden.jpg"
        allImg[i].className ="p"
    }
}