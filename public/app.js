console.log("Welcome to tic tac toe")

let turn="X";
let go=false;

const changeTurn = () =>{
    return turn === "X"?"O":"X";
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");

    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{

        if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText && boxtexts[e[1]].innerText===boxtexts[e[2]].innerText && boxtexts[e[0]].innerText!==""){
            document.querySelector(".result").innerText="Player "+boxtexts[e[0]].innerText+" Won";
            go=true;
           
        }

    })

}

//main logic
let boxes=document.getElementsByClassName("btn");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText=turn;
            turn = changeTurn();
            
            checkWin();
            if(!go){
                document.getElementsByClassName("result")[0].innerText="Player "+turn+" Turn";
            }
            
        }

    })
})

reset.addEventListener("click",()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    document.getElementsByClassName("result")[0].innerText="Player "+turn+" Turn";
    go=false;
    

})