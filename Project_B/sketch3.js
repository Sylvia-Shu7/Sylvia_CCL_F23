console.log("js is linked")

let bubbles=[]
let sound
let numBubbles=20;
let cupCenterX,cupCenterY
let ranPos
function preload(){
    sound=loadSound("water.wav")
}

function setup() {
    let cnv = createCanvas(windowWidth, 600);
    cnv.parent("canvasWrapper3");
    cupCenterX=width/2-200
    cupCenterY=300

    

}

function draw(){
    background(82, 152, 222);
  ranPos=random(-50,50)
  for(i=0; i<numBubbles; i++){
     
    bubbles[i]=new Bubble(cupCenterX+ranPos,cupCenterY+130);
          
    }
  circle(cupCenterX,cupCenterY+140,10)
  cup=new Cup(cupCenterX,cupCenterY+140)
  cup.display()
  cup.update()
  for(i=0; i<numBubbles; i++){
    bubbles[i].display()
    bubbles[i].update()
    // console.log("linked")
  }
    
}

class Bubble{
    constructor(startX,startY){
        this.x=startX
        this.y=startY
        this.r=random(5,15)
        this.speed=4
        this.deviation=random(-0.05,0.05)
        this.halfHeight=130
        
      // console.log("linked1")
    }
    display(){
        //draw bubbles
      // console.log("linked2")
    //   console.log(this.y)
       if(mouseIsPressed==true &&this.y>-this.halfHeight+10){
        stroke("white")
       strokeWeight(this.r/10)
       noFill()
    //   console.log(this.x,this.y)
       circle(this.x,this.y,this.r)

       }
       
       
    }
    update(){
    //    console.log("linked")
      
       if (mouseIsPressed==true){
       
          //bubbles go up
       this.y-=this.speed
       // this.x +=this.deviation
       }
    }
}

class Cup{
    constructor(startX,startY){
    this.x=startX
    this.y=startY
    this.bottomD=140
    this.topD=240
    this.temperature=16
    }
  display(){
    push()
    translate(this.x,this.y)
    stroke(1)
    strokeWeight(1.5)
    fill(195, 212, 230,80)
    arc(0,0,this.bottomD,20,0,PI)
    noFill()
    ellipse(0,0-280,this.topD,20)
    line(0-this.topD/2,0-280,0-this.bottomD/2,0)
    line(0+this.topD/2,0-280,0+this.bottomD/2,0)
    //draw water
    fill(195, 212, 230,80)
    noStroke()
      beginShape()
      vertex(0-this.topD/2+6,0-240)
      vertex(0-this.bottomD/2,0)
      vertex(0+this.bottomD/2,0)
      vertex(0+this.topD/2-6,0-240)
      endShape()
    pop()
  }
  update(){
    //temperature higher
     if (mouseIsPressed==true){
         this.temperature= this.temperature+0.01
       }else{
         this.temperature=this.temperature-0.01
       }
       push()
       strokeWeight(1)
       textSize(20)
         stroke(1)
         text("Water Temperature="+this.temperature+"°",width/2+20,250)
         if(this.temperature>15 &&this.temperature<18)
    
         text("Researchers found that after exercice, 16° is a preferred temperature.",width/2+20,280)
       pop()
}
  
}


function mousePressed(){
    sound.play()

  }
