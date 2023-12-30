let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let newbtn=document.querySelector(".new-btn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turn0=true;
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
let resetgame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide")
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turn0){
            box.innerText="o"
            turn0=false
        }
        else{
            box.innerText="x"
            turn0=true
            // enableBoxes();
        }
        box.disabled=true;
        checkwinner()
    })
})
let disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

    let showwinner=(winner)=>{
        msg.innerText=`congrats,winner is ${winner}`
        msgcontainer.classList.remove("hide");
        disabledBoxes()
    }
    // showwinner()
    let checkwinner=()=>{
        for(let pattern of  winPatterns){
            let pos1val1=boxes[pattern[0]].innerText;
            let pos2val2=boxes[pattern[1]].innerText;
            let pos3val3=boxes[pattern[2]].innerText;
            if (pos1val1 !=""&& pos2val2 !=""&& pos3val3 !=""){
                if(pos1val1===pos2val2 && pos2val2===pos3val3){
                    console.log("winner",pos1val1);
                    showwinner(pos1val1);
                }
            }
        }
    }
    resetbtn.addEventListener("click",resetgame);
    newbtn.addEventListener("click",resetgame);
    