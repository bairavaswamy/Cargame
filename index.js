let blueCar = document.getElementById("bluecar");
let redCar = document.getElementById("redcar")
let condition = true;
const score = document.getElementById("score");
let count = 0;
blueCar.addEventListener("animationiteration",()=>{  
let random = (Math.floor(Math.random() * 4) + 1) * 120
if (random == 360){
    blueCar.style.left = 320 + "px";
}else if(random == 480){
    blueCar.style.left = 410 + "px";
}
else if(random == 240){
    blueCar.style.left = 230 + "px";
}else{
    blueCar.style.left = 140 + "px";
}
count++
score.textContent = count;
})
document.onkeydown = dkeys;
document.onkeyup = ukeys;
let position = 0;

function dkeys(e){
    if(condition ){
    if(e.key === "ArrowLeft"){
        if(position === 3){
            redCar.style.left = 320 + "px"
            position -= 1
        }
        else if(position === 2){
            redCar.style.left = 230 + "px"
            position -= 1
        }
        else if(position === 1){
            redCar.style.left = 140 + "px"
            position -= 1
        }

    }
}
    
}

function ukeys(e){
    if(condition){
    
    if(e.key==="ArrowRight"){
        if(position === 0){
            redCar.style.left = 230 + "px";
            position += 1
        }
        else if(position === 1){
            redCar.style.left = 320 + "px";
            position += 1
        }
        else if(position === 2){
            redCar.style.left = 410 + "px";
            position += 1
        }
    }
}
    
}


setInterval(()=>{
    let bluecarleft = window.getComputedStyle(blueCar)
let redcarleft = window.getComputedStyle(redCar)

let blueval = parseInt(bluecarleft.getPropertyValue("left"))
let bluetop = parseInt(bluecarleft.getPropertyValue("top"))
let redval = parseInt(redcarleft.getPropertyValue("left"))

if((blueval === redval) && (bluetop > 440) && (bluetop < 650)){
    blueCar.style.animationPlayState= "paused";
    condition = false;
    score.textContent = count

}
},10)

