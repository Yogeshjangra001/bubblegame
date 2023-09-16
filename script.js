function makebubble(){
    let create = "";
for(let i=1; i<=120; i++){
    let rn =Math.floor(Math.random()*10)
    create += `<div class="boob">${rn}</div>`
}
let sum = document.querySelector("#bubble").innerHTML=create;
}
let sn = 0
let scoreval = 0;
function upvalue(){
    scoreval += 10;
    document.querySelector("#yogii").textContent=scoreval
}

function starthit(){
    sn = Math.floor(Math.random()*10)
    document.querySelector("#man-hit").textContent = sn;
}
document.querySelector("#yogii")
addEventListener("click",function (dts){
    let clicked = (Number(dts.target.textContent))
    if(clicked === sn){
        upvalue()
        makebubble()
        starthit()
    }
})
let timer = 60;
function runtime(){
    let set = setInterval(function (){
        if(timer>0){
            timer--;
            document.querySelector("#time-el").textContent = timer;
        }
        else{
           clearInterval(set)
           document.querySelector("#bubble").textContent = "Game Over!"
        }
    },1000)
}
runtime()
makebubble()
starthit()