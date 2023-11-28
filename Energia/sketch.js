console.log("js is linked")

function setup(){
    
    let cnv=createCanvas(windowWidth,windowHeight);
    cnv.parent=("canvasWrapper");
    
}
function draw(){
    background(120, 196, 235);
    let currentYear = year();
    let currentMonth = month();
    let currentDay = day();
    let currentHour = hour();
    let currentMinute = minute();
    let currentSecond = second();
    
    let currentDate = currentYear + '-' + nf(currentMonth, 2) + '-' + nf(currentDay, 2);
    let currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);
    
    
    
    fill(255);
    noStroke();
    textSize(24);
    
    text(currentDate, width-150, height-50);
    text(currentTime, width-150, height-20);
}

class Energia{

}

class EnergyBar{

}