console.log("js is linked")

let timebox;


function preload(){
  

  
}
function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvasWrapper1");
    rectMode(CORNER);
    
}

function draw() {
  // ran=random[1,2,3]
  // image(img1,200,100,200,100)
  
    background(232, 204, 137)
    timebox= new TimeBox(width-200,50)
    timebox.display();
    
}

//TimeBox
class TimeBox{
    constructor(startX,startY){
        this.x=startX;
        this.y=startY;
        this.energiaHomeBoxWidth=width/6;
        this.energiaHomeBoxHeight=height/2;
        this.timeBoxWidth=150;
        this.timeBoxHeight=50;
        this.currentYear = year();
        this.currentMonth = month();
        this.currentDay = day();
        this.currentHour = hour();
        this.currentMinute = minute();
        this.currentSecond = second();
        this.currentDate = this.currentYear + '-' + nf(this.currentMonth, 2) + '-' + nf(this.currentDay, 2);
        this.currentTime = this.currentHour + ':' + nf(this.currentMinute, 2) + ':' + nf(this.currentSecond, 2);
        this.textPosX=-280;
        this.textPosY=100;
        
    }
    display(){
        push();
        translate(this.x,this.y);
        textSize(24);
        fill(1)
        text(this.currentDate, 10, 25);
        text(this.currentTime, 10, 50);
        noFill()
        strokeWeight(3)
        rect(5,5,this.timeBoxWidth,this.timeBoxHeight);
        //questions
        fill(1)
        if(this.currentHour>6&&this.currentHour<11){
          
          text("Good morning! Remember to have breakfast!",this.textPosX,this.textPosY)
        }else if(this.currentHour>=11&&this.currentHour<14){
          text("Did you enjoy your lunch?",this.textPosX,this.textPosY)
        }else if(this.currentHour>=14&&this.currentHour<18){
          text("Good afternoon! DO some exercises!",this.textPosX,this.textPosY)
        }else if(this.currentHour>=18&&this.currentHour<22){
          text("Did you enjoy your dinner?",this.textPosX,this.textPosY)
        }else {
          text("Good night! Go to sleep now!",this.textPosX,this.textPosY)
        }
        pop()
    }

}
