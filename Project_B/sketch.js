console.log("js is linked")

let timebox;
let Ballerinettes=[];
let PoX=[];
let firstPoY=400;
let verticalSpacing=700;
let numBallerinette=1;
let interactionScene=0;
let foods=[];
let jump=0
let jumpSpeed=25
let dy=0;
let counter=0
// let img=[];

function preload(){
  
  img1=loadImage("images/fruit.png");
  img2=loadImage("images/tomato.png");
  img3=loadImage("images/bread.jpg");
  
  
}
function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvasWrapper1");
    rectMode(CORNER);

    //positioning Ballerinettes & pushing Ballerinettes into array
    PoX.push(width/4);
    // PoX.push(width-width/4);
    // PoX.push(width/4);
    // PoX.push(width-width/4);
    for(i=0; i<numBallerinette; i++){
     
        Ballerinettes[i]=new Ballerinette(PoX[i],firstPoY+i*verticalSpacing);
        
    }
    // let ran=random[0,1,2]
    // for(i=0; i<3;i++){
    //   foods.push(new Food(img[ran]))
    // }
}


function draw() {
  // ran=random[1,2,3]
  // image(img1,200,100,200,100)
  
    background(232, 204, 137)
    timebox= new TimeBox(width-200,50)
    timebox.display();
// call ballerinettes
    for(i=0; i<numBallerinette; i++){
        interactionScene=i;
         Ballerinettes[i].display();
         Ballerinettes[i].update();
        //  console.log(interactionScene);
    }
// call foods
// if(mouseX>PoX[1]-140&&mouseX<PoX[1]+140&&mouseY>firstPoY+verticalSpacing+20&&mouseY<firstPoY+verticalSpacing+96){
// if (mouseIsPressed == true) {
//   for (let i = 0; i < 1; i++) {
//       foods.push(new Food(mouseX, mouseY));
//   }
// }
// for (let i = 0; i < foods.length; i++) {
//   // foods[i].update();
//   // foods[i].checkOutOfCanvas();
//   foods[i].display();
// }
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
        this.textPosX=-180;
        this.textPosY=100;
        
    }
    display(){
        push();
        translate(this.x,this.y);
        // console.log(this.textPos);
        // console.log(this.currentDate,this.currentTime)
        textSize(24);
        fill(1)
        text(this.currentDate, 10, 25);
        text(this.currentTime, 10, 50);
        
        noFill()
        strokeWeight(3)
        rect(5,5,this.timeBoxWidth,this.timeBoxHeight);
        
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

class Ballerinette{
    constructor(startX,startY){
        this.x=startX;
        this.y=startY;
        //frame
        this.frameLength=280;

        //Ballerinette
        this.width1 = 91;
        this.height1 = 82;
        this.rotate1 = 10;
        this.rotate2 = -10;
        this.rotate3 = -20;
        this.head = 50;
        this.offsety = 0;
        this.speed = -0.2;
        this.Plus = 1;
        this.Plus2 = 0.01;
        this.rotate4 = 0;
        this.jump=0
        this.jumpSpeed=-2
        this.gravity=0.1
        this.stopJumping=true;
        this.ny=this.y;

        //rope
        this.ropeDirection=-1;
        this.checkRopeIsOnTopHalfScreen=false;
        this.ropePos=this.frameLength-40;
        this.ropePosHighest=-240;
        this.ropePosLowest=-this.ropePosHighest;
        this.ropeSpeed=-6;
        
    }

    display(){
      // if (mouseIsPressed == true){
      //   this.stopJumping=false;
      //   if(this.stopJumping=false){
      //     this.Jump();
      //   }
      // }  
      // this.jump+=this.jumpSpeed;
      //link scene1 part1
      // console.log("display"+interactionScene+this.ropeDirection)
      this.drawFrame();
      if(interactionScene==0 && this.ropeDirection==-1){
        
        this.drawropeSkippingBehind();
      } 
        this.drawbighead();
        this.drawbigbody();
        
        if (this.offsety < -10) {
          this.drawblush();
        }
        //link scene1 part2
        if(interactionScene==0 && this.ropeDirection==1){
          this.drawropeSkippingFront();
        }
          // if (mouseIsPressed == true){
          //   this.stopJumping=false;
          // }  
          // if(this.stopJumping=false){
          //   this.Jump();
          // }
          
          //   if(this.jump>0){
          //     this.jumpSpeed+=this.gravity;
               
          //   }else {
          //     this.jumpSpeed=0
          //     this.jump=0
          //   }
          // function mousePressed(){
          //   if(this.jump>=0){
          //     this.jumpSpeed=-this.gravity*0.5
          //   }
          // }
        // }else if(interactionScene ==1){
        //   this.havingMeal();
        // }else if(interactionScene ==2){
        //   this.drinkingWater();
        // 
        
    }
      // //Jump
      // Jump(){
      //   this.jump+=this.jumpSpeed;
      //   console.log(this.jump)
      //   if(this.jump<-10){
      //     this.jumpSpeed=-this.jumpSpeed
      //   }else if(this.jump=0){
      //     this.stopJumping=true;
      //   }
      // }


      //drawFrame
      drawFrame(){
        push();
        translate(this.x, this.y);
        textSize(30)
        text("Click to help Energia skipping rope!",280,0)
        text("You've skipped:"+counter,280,40)
        // console.log(this.x,this.y);
        fill(200)
        rect(-this.frameLength/2,-this.frameLength/2,this.frameLength,this.frameLength)
        pop()

      }
      //scene1
      drawropeSkippingBehind(){
        // console.log("rope is working")
        // console.log(interactionScene);
        this.updateropeSkippingBehind();
        push();
        translate(this.x,this.y)
        
        
        // console.log(this.x,this.y)
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
        //rope comes to in front of Ballerinette
        if(this.ropePos==this.ropePosHighest){
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
        //rope comes to behind of Ballerinette
        if(this.ropePos==this.ropePosLowest){
          this.ropeDirection=-this.ropeDirection;
          this.ropeSpeed=-this.ropeSpeed;
        }
        pop()
      }
       
      // //scene 2
      // havingMeal(){
      //   push();
      //   translate(this.x,this.y);
      //   noStroke()
      //   fill(140, 63, 4);
      //   rect(-this.frameLength/2,20,this.frameLength,96);
      //   pop();
      // }

      // //scene 3
      // drinkingWater(){

      // }
      //Ballerinette
      drawbighead() {
        
        //head
        push();
        translate(this.x, this.y+this.ny);
        // console.log(this.x,this.y);
        fill(200)
        // rect(-this.frameLength/2,-this.frameLength/2,this.frameLength,this.frameLength)
        fill(200)
        push()
        translate(0, -43);
        strokeWeight(3.5);
        stroke("red");
        rotate(radians(this.rotate1));
        ellipse(0, this.offsety, this.width1, this.height1);
        stroke(83, 237, 229);
        rotate(radians(this.rotate2));
        ellipse(0, this.offsety, this.width1 - 3, this.height1 - 3);
        stroke("green");
        rotate(radians(this.rotate3));
        ellipse(0, this.offsety, this.width1 - 5, this.height1 - 5);
        pop();
        //eyes
        push();
        translate(0, -43);
        if (mouseIsPressed == true) {
          stroke("white");
          line(-18, this.offsety - 8, -25, this.offsety - 13);
          line(15, this.offsety - 8, 22, this.offsety - 15);
          line(-18, this.offsety - 8, -25, this.offsety - 3);
          line(15, this.offsety - 8, 22, this.offsety - 3);
        } else {
          noStroke();
          fill("white");
          circle(-20, this.offsety - 8, 10);
          circle(20, this.offsety - 10, 10);
        }
        pop();
        pop();
      }
      drawbigbody() {
        push();
        translate(this.x, this.ny+this.y);

        //leg1
        fill(200)
        stroke(83, 237, 229);
        strokeWeight(3);
        rect(-25, 58+this.offsety , 15, 53, 10, 10, 10, 10);
        rect(10, 58+this.offsety , 15, 53, 10, 10, 10, 10);
        //main body
        fill(255, 80);
        strokeWeight(5);
        stroke("purple");
        arc(0, this.offsety + 13, 120, 80, PI / 5, (4 * PI) / 5);
        // stroke("blue");
        arc(0, this.offsety + 13, 70, 45, PI / 6, (5 * PI) / 6);
        // stroke("green");
        arc(0, this.offsety + 13, 18, 12, PI / 5, (4 * PI) / 5);
    
        //necklace
        stroke(209, 201, 38);
        fill(108, 39, 204);
        strokeWeight(0.7);
        circle(0, this.offsety + 10, 4);
        line(0, this.offsety + 10, -15, this.offsety - 4);
        line(0, this.offsety + 10, 15, this.offsety - 4);
        // //leg2
        // noFill();
        // stroke("white");
        // strokeWeight(3);
        // push();
        // translate(25, 58 + this.offsety);
        // rotate(radians(this.rotate4 + this.Plus));
        // rect(0, 0, 15, 38 - this.offsety, 10, 10, 10, 10);
        // pop();
        // arms
        stroke(83, 237, 229);
        strokeWeight(2.5);
        fill(200);
        ellipse(-30, this.offsety + 2, 10, 43);
        push();
        translate(30, this.offsety + 22);
        rotate(radians(this.rotate4 + this.Plus2 / 100));
        ellipse(16, 0, 43, 10);
        pop();
        pop();
      }
      // drawblush() {
      //   push();
      //   translate(this.x, this.ny);
      //   noStroke();
      //   fill(252, 3, 78, 70);
      //   ellipse(-25, -33 + this.offsety, 13, 8);
      //   ellipse(25, -33 + this.offsety, 13, 8);
      //   pop();
      // }
      
    
    update(){
      push();
      translate(this.x,this.y)
      this.ny+=dy
      if(this.ny<0){
        dy+=jumpSpeed
      }else{
        dy=0
        this.ny=0;

      }
      // console.log(interactionScene)
      // if(interactionScene==0){
        // this.offsety=0
        // console.log("jumping")
        // if(mouseIsPressed==true){
        //   // console.log("jumping")
        //   // this.offsety += this.speed;
        //   // if (this.offsety < -15){
        //   //   this.speed=-2
        //   //   this.speed = -this.speed;
        //   // }else if(this.jump==0){
        //   //   this.speed=0
        //   // }
        //   this.stopJumping=false
        //   if(this.stopJumping=false){
        //   this.offsety += this.speed*10;
        //   if (this.offsety < -15 ) {
        //   this.speed = -this.speed;
        //   }else if(this.offsety==0){
        //     this.stopJumping=true
        //   }
        // }
        // }
    //   }else{
    // //up&down
    // this.offsety += this.speed;
    // if (this.offsety < -15 || this.offsety > 0) {
    //   this.speed = -this.speed;
    // }
    // //swinging leg
    // this.rotate4 += this.Plus;
    // if (this.rotate4 > 90 || this.rotate4 < -90) {
    //   this.Plus = -this.Plus;
    //   this.Plus2 = -this.Plus2;
    // }
  }
  }



// class Food{
//   constructor(startX, startY) {
//     this.x = startX;
//     this.y = startY;
//     this.ran=random[0,1,2]
//     this.img1=img1;
//     this.img2=img2;
//     this.img3=img3;
//     this.ran=[1,2,3]
//   }

// display(){
//   push()
//   translate(this.x,this.y)
//   fill(1)
//   circle(0,0,5)
//   tint("brown")
//   // image(this.ran,0,0,20,25)
//   if(this.ran==1){
//   image(this.img1,0,0,20,25)
//   }else if(this.ran==2){
//   image(this.img2,0,0,20,25)
//   }else if(this.ran==3){
//   image(this.img3,0,0,20,25)
//   }
//   pop()
// }
// }
//jump rope
// function mousePressed(){
//   if (interactionScene==0){
//     jumpSpeed=-2
//     jump-=jumpSpeed
//     if(jump<-15){
//       jumpSpeed=-jumpSpeed
//       if(jump==0){
//         jumpSpeed=0
//       }
//     }
//   }
  
// }
function mousePressed(){
  console.log("working")
  counter++
  if(dy>=0){
    dy=-jumpSpeed
  }
}