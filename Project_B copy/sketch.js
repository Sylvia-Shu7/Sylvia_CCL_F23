console.log("js is linked")
let timebox,img;


function preload(){
  img=loadImage("images/time.jpg")

  
}
function setup() {
    let cnv = createCanvas(600, 300);
    cnv.parent("canvasWrapper1");
    rectMode(CORNER);
    imageMode(CENTER)
    
}

function draw() {
  // ran=random[1,2,3]
  // image(img1,200,100,200,100)
  
    background(250)
    image(img,width/2,height/2 )
    timebox= new TimeBox(width/2+60,25)
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
        this.textPosX=-220;
        this.textPosY=140;
        
    }
    display(){
        push();
        translate(this.x,this.y);
        textSize(24);
        fill(1)
        text(this.currentDate, 65, 23);
        text(this.currentTime, 65, 46);
        noFill()
        strokeWeight(3)
        rect(60,0,this.timeBoxWidth,this.timeBoxHeight);
        //questions
        fill(1)
        textFont("Oswald")
        if(this.currentHour>6&&this.currentHour<11){
          text("Morning! Did you have breakfast?",this.textPosX,this.textPosY)
        }else if(this.currentHour>=11&&this.currentHour<14){
          text("Did you enjoy your lunch?",this.textPosX,this.textPosY)
        }else if(this.currentHour>=14&&this.currentHour<18){
          text("Let's do some exercises!",this.textPosX,this.textPosY)
        }else if(this.currentHour>=18&&this.currentHour<22){
          text("Did you enjoy your dinner?",this.textPosX,this.textPosY)
        }else {
          text("Good night! Go to sleep now!",this.textPosX,this.textPosY)
        }
        pop()
    }

}
