console.log("js is linked")

let PoX=[];
let Energias=[]
let firstPoY=350;
let numEnergia=2;
let interactionScene=0;
let jumpSpeed=10
let fallSpeed=1
let dy=0;
let counter=0
let checkSuccessfullySkipped
let ropePos,backgroundPic,jumpSound,ropeStart

function preload(){
   backgroundPic=loadImage("images/grass.jpeg");
   jumpSound=loadSound("beat.mp3");
  
}
function setup() {
    let cnv = createCanvas(windowWidth, 600);
    cnv.parent("canvasWrapper2");
    rectMode(CORNER);
    imageMode(CENTER)
    // image(backgroundPic,width/2,height/2)

    //positioning Energias & pushing Energias into array
    PoX.push(width/4+120);
    PoX.push(width-width/4-120);
    // PoX.push(width/4);
    // PoX.push(width-width/4);
    for(i=0; i<numEnergia; i++){
     
      Energias[i]=new Energia(PoX[0]+i*150,firstPoY);
        
    }

}


function draw() {
    background(232, 204, 137)
    text(mouseX+","+mouseY,mouseX,mouseY)
    // image(backgroundPic,width/2,height/2)
// call Energias
    for(i=0; i<numEnergia; i++){
        interactionScene=i;
        Energias[i].display();
        Energias[i].update();
        //  console.log(interactionScene);
    }
}


class Energia{
    constructor(startX,startY){
        this.x=startX;
        this.y=startY;
        //frame
        this.frameLength=280;
        
        //clickBox
        this.boxWidth=80
        this.boxHeight=40
        //Energia
        this.width1 = 91;
        this.height1 = 82;
        this.rotate1 = 10;
        this.rotate2 = -10;
        this.rotate3 = -20;
        this.head = 50;;
        this.speed = -0.2;
        this.Plus = 1;
        this.Plus2 = 0.01;
        this.rotate4 = 0;

        this.ny=this.y;
        this.transparency=500;

        //rope
        this.ropeDirection=-1;
        this.checkRopeIsOnTopHalfScreen=false;
        this.ropePos=this.frameLength-40;
        this.ropePosHighest=-240;
        this.ropePosLowest=-this.ropePosHighest;
        this.ropeSpeed=-6;
        this.ropeStart=false
        this.fail=false
        
    }

    display(){    
      //draw the click box
      stroke(1)
      strokeWeight(1)
      fill("orange")
      rect(this.x+200,this.y-100,this.boxWidth,this.boxHeight)
      fill(1)
      text("Start", this.x+220,this.y-75)
      this.instruction();
      if(mouseIsPressed==true&& mouseX>this.x+200&& mouseX<this.x+250+this.boxWidth&&mouseY>this.y-100&&mouseY<this.y-100+this.boxHeight){
        this.ropeStart=true
        counter=0
        
      }
      if(this.ropeStart==true  && interactionScene==0&& this.ropeDirection==-1){
        this.drawropeSkippingBehind();
        checkSuccessfullySkipped=false
      } 
        this.drawbighead();
        this.drawbigbody();
        //link scene1 part2
        // console.log(this.ropeStart)
        if(interactionScene==0 && this.ropeDirection==1){
          this.drawropeSkippingFront();
          checkSuccessfullySkipped=true
        }
          ropeStart=this.ropeStart
        
    }
      

      //instruction and the sope
      instruction(){
        push();
        translate(this.x, this.y);

        textSize(30)
        text("You've skipped:"+counter,160,40)
        // console.log(this.x,this.y);
        fill("brown")
        circle(-this.frameLength/2,0,20)
        circle(this.frameLength/2,0,20)
        pop()

      }
      //turning rope
      drawropeSkippingBehind(){
        this.updateropeSkippingBehind();
        push();
        translate(this.x,this.y)
        strokeWeight(5)
        if(this.ropePos==0){
          line(-this.frameLength/2,0,this.frameLength/2,0)
        }
        if(this.checkRopeIsOnTopHalfScreen==false){
          noFill()
          arc(0,0,this.frameLength,this.ropePos,0,PI)
          // console.log(this.x,this.y,this.frameLength)
        }else{
          noFill()
          arc(0,0,this.frameLength,this.ropePos,PI,2*PI);
        }
        pop()
        // console.log(this.ropePos)
      }
      updateropeSkippingBehind(){
        // console.log("update of rope part 1 is linked")
        //rocking the rope
        push()
        translate(this.x,this.y)
        this.ropePos+=this.ropeSpeed;
        // console.log(this.ropePos)
        //change from bottom half screen to top half screen
        if(this.ropePos==0){
          this.checkRopeIsOnTopHalfScreen=true
        }
        //rope comes to in front of Energia
        if(this.ropePos==this.ropePosHighest){
          // if(this.ny>=0){
          //   this.ropeStart=false;
          // }
          this.ropeDirection=-this.ropeDirection;
          this.ropeSpeed=-this.ropeSpeed;
        }
        
        pop()
      }

      drawropeSkippingFront(){
        this.updateropeSkippingFront();
        push();
        translate(this.x,this.y)
        strokeWeight(5)
        noFill()
        if(this.ropePos==0){
          line(-this.frameLength/2,0,this.frameLength/2,0)
        }
        if(this.checkRopeIsOnTopHalfScreen==false){
          noFill()
          arc(0,0,this.frameLength,this.ropePos,0,PI)
        }else{
          arc(0,0,this.frameLength,this.ropePos,PI,2*PI);
        }
        pop()
        
      }
      updateropeSkippingFront(){
        //  console.log("update of rope part 2 is linked")
         push()
        translate(this.x,this.y)
         //rocking the rope
        this.ropePos+=this.ropeSpeed;
        //change from top half screen to bottom half screen
        if(this.ropePos==0){
          this.checkRopeIsOnTopHalfScreen=false
        }
        if(this.ropePos==this.ropePosLowest){
           if(this.ny==0){
            this.ropeStart=false
            ropeStart=this.ropeStart
           }
          this.ropeDirection=-this.ropeDirection;
          this.ropeSpeed=-this.ropeSpeed;
          
        }
        //check skipping is successful in the function mousePressed())
        ropePos=this.ropePos
        pop()

      }
    
      //Energia
      drawbighead() {
        //head
        push();
        translate(this.x, this.y+this.ny);
        fill(242, 215, 194, this.transparency)

        push()
        translate(0, -43);
        strokeWeight(3.5);
        stroke("red");
        rotate(radians(this.rotate1));
        ellipse(0, 0, this.width1, this.height1);
        stroke("blue");
        rotate(radians(this.rotate2));
        ellipse(0, 0, this.width1 - 3, this.height1 - 3);
        stroke("green");
        rotate(radians(this.rotate3));
        ellipse(0, 0, this.width1 - 5, this.height1 - 5);
        pop();
        //eyes
        push();
        translate(0, -43);
        if (mouseIsPressed == true) {
          stroke("white");
          line(-18,  - 8, -25,- 13);
          line(15,  - 8, 22, - 15);
          line(-18, - 8, -25, - 3);
          line(15, - 8, 22,- 3);
        } else {
          noStroke();
          fill("white");
          circle(-20, - 8, 10);
          circle(20, - 10, 10);
        }
        pop();
        pop();
      }
      drawbigbody() {
        push();
        translate(this.x, this.ny+this.y);

        //leg1
        fill(242, 215, 194, this.transparency)
        stroke(232, 204, 137);
        strokeWeight(3);
        rect(-25, 58 , 15, 53, 10, 10, 10, 10);
        rect(10, 58 , 15, 53, 10, 10, 10, 10);
        //main body
        fill(179, 101, 224, this.transparency);
        strokeWeight(5);
        stroke("red");
        arc(0, 13, 120, 80, PI / 5, (4 * PI) / 5);
        stroke("blue");
        arc(0, 13, 70, 45, PI / 6, (5 * PI) / 6);
        stroke("green");
        arc(0,  13, 18, 12, PI / 5, (4 * PI) / 5);
    
        //necklace
        stroke(209, 201, 38);
        fill(108, 39, 204);
        strokeWeight(0.7);
        circle(0, 10, 4);
        line(0,  10, -15, - 4);
        line(0, 10, 15, - 4);
        
        // arms (move)
    stroke(232, 204, 137);
    strokeWeight(2.5);
    fill(242, 215, 194, this.transparency);
    if (mouseIsPressed == true) {
      push()
      translate(-40,15)
      rotate(radians(3*this.rotate2))
      ellipse(0,0, 10, 43);
      pop()
      push()
      translate(40,15)
      rotate(radians(-3*this.rotate2))
      ellipse(0, 0, 10, 43);
      pop()
    }else{
      push();
      translate(30, 10);
      ellipse(0, 0, 10, 43);
      pop();
      push();
      translate(-30, 10)
      ellipse(0, 0, 10, 43);
      pop();
    }
        pop();
      }

    update(){
      push();
      translate(this.x,this.y)
      this.ny+=dy
      if(this.ny<0){
        dy+=fallSpeed
      }else{
        dy=0
        this.ny=0;
        this.y=firstPoY

      }
      
  }
  }

function mousePressed(){
  jumpSound.play();
  if(dy>=0){
    dy=-jumpSpeed
  }
  if(ropePos>190&&checkSuccessfullySkipped==true&&ropeStart!=false){
    counter++
  }

}