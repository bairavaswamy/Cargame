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
document.ontouchstart = touchleft;
document.ontouchend = touchright;
let position = 0;

document.addEventListener("touchstart", onTouchStart);
document.addEventListener("touchend", onTouchEnd);

let touchStartX = 0;

function onTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function onTouchEnd(event) {
    let touchEndX = event.changedTouches[0].clientX;
    let deltaX = touchEndX - touchStartX;

    if (condition) {
        if (deltaX > 0) {
            // Swipe right
            if (position === 0) {
                redCar.style.left = "230px";
                position += 1;
            } else if (position === 1) {
                redCar.style.left = "320px";
                position += 1;
            } else if (position === 2) {
                redCar.style.left = "410px";
                position += 1;
            }
        } else {
            // Swipe left
            if (position === 3) {
                redCar.style.left = "320px";
                position -= 1;
            } else if (position === 2) {
                redCar.style.left = "230px";
                position -= 1;
            } else if (position === 1) {
                redCar.style.left = "140px";
                position -= 1;
            }
        }
    }
}


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

