console.log("js is linked")

let timebox, currentDate, currentTime;

function setup() {
    let cnv = createCanvas(600, 300);
    cnv.parent("canvasWrapper1");
    rectMode(CENTER);
    timebox= new TimeBox(0,0)
    timebox.display();
    timebox.update();
    rectMode(CORNER)
}

function draw() {
    background(232, 204, 137)
    let currentYear = year();
    let currentMonth = month();
    let currentDay = day();
    let currentHour = hour();
    let currentMinute = minute();
    let currentSecond = second();
    
    let currentDate = currentYear + '-' + nf(currentMonth, 2) + '-' + nf(currentDay, 2);
    let currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);
    push()
    translate(0,0)
    textSize(24);
    fill(1)
    text(currentDate, 10, 25);
    text(currentTime, 10, 50);
    noFill()
    strokeWeight(3)
    rect(5,5,150,50)
    pop()
}

class TimeBox{
    constructor(startX,startY){
        this.x=startX;
        this.y=startY;
        this.energiaHomeBoxWidth=width/6;
        this.energiaHomeBoxHeight=height/2;
        this.timeBoxWidth=80;
        this.timeBoxHeight=30;
    }
    display(){
    push();
    translate(this.x,this.y)
    fill(255);
    noStroke();
    
    

    pop()
    }
    update(){

    }


}


