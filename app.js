let boxes = document.querySelectorAll(".btn")
let msgSection = document.querySelector(".winner")
let reset = document.querySelector(".reset")
let msg = document.querySelector(".win-para")
playerO = true
count = 0

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function resetFunc(){
    playerO = true
    msgSection.classList.add("hide")
    boxes.forEach((box)=>{
        box.disabled =false
        box.innerText = ""
    })
}

reset.addEventListener("click",resetFunc)

const winAlert = (winner) => {
    boxes.forEach((box)=>{
        box.disabled =true
        msgSection.classList.remove("hide")
    })
    msg.innerHTML = `Congratulation! ${winner}`
}

const checkWinner = () =>{
    for(patt of winPattern){
        pos1Val = boxes[patt[0]].innerText
        pos2Val = boxes[patt[1]].innerText
        pos3Val = boxes[patt[2]].innerText
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                winAlert(pos1Val);
            }
        }
    }
}

function chechReset(){
    if(count==9){
        playerO = true
        msgSection.classList.remove("hide")
        msg.innerHTML = "It is a draw"
    
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerO){
            box.innerText = "X"
            playerO = false
            box.disabled = true  
        }else{
            box.innerText = "O"
            playerO = true
            box.disabled = true
        }
        checkWinner();
        count++;
        chechReset();
    })
})