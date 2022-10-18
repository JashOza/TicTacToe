console.log("Developed By Jash")
let turnMusic = new Audio("music/ting.mp3")
let gameOver = new Audio("music/gameover.mp3")

let turn = "X"
let isGameOver = false

// Function to change the turn
const changeTurn = () => {
    return turn == "X"?"O":"X"
}

//Function to checkWin
const checkWinner = () => {
    let boxtext = document.getElementsByClassName('boxText');
    
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won!!"
            isGameOver = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "250px";
        }
    })
}
//Logic for Tic Tac Toe
let boxes = document.getElementsByClassName("box");
let info = document.getElementsByClassName('info');
Array.from(boxes).forEach(elements => {
    let boxText = elements.querySelector('.boxText')
    elements.addEventListener('click', function () {
        if (boxText.innerText == '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWinner()
            if(!isGameOver){
                info[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//onClickEcentListner on reset button
let reset = document.querySelector('button')
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxText');
    let info = document.getElementsByClassName('info');
    
    Array.from(boxtext).forEach(e =>{
        e.innerText = ''
    })
    isGameOver = false
    turn = "X"
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    info[0].innerText = "Turn for " + turn;    
})
