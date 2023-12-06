console.log("js is linked")
let energia, x, y,g,sinValue;
let sinInput=0
let a=1.1
let counter=0
function setup() {
    let cnv = createCanvas(windowWidth, 600);
  cnv.parent("canvasWrapper4");
  rectMode(CENTER)
  energia = new Energia(300, 300);
}

function draw() {
  background(99, 176, 77);
  sinInput+=0.15
  sinValue=sin(sinInput)
  g=map(sinValue,-1,1,0,400)
  energia.display();
  energia.update();
  energia.detectDirection();
}
class Energia {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    //Energia
    this.width1 = 91;
    this.height1 = 82;
    this.rotate1 = 10;
    this.rotate2 = -10;
    this.rotate3 = -20;
    this.head = 50;
    this.Plus = 1;
    this.Plus2 = 0.01;
    this.rotate4 = 0;
    this.transparency = 500;
    this.speed1 = 6;
    this.speed2 = 8;
    this.toRightBottom = false;
    this.toRightTop = false;
    this.toLeftBottom = false;
    this.toLeftTop = false;
    //accelerate
    this.buttonR=100
  }
  detectDirection() {
    if (this.speed1 > 0 && this.speed2 > 0) {
      this.toRightBottom = true;
      this.toRightTop = false;
      this.toLeftBottom = false;
      this.toLeftTop = false;
    } else if (this.speed1 > 0 && this.speed2 < 0) {
      this.toRightTop = true;
      this.toLeftBottom = false;
      this.toLeftTop = false;
      this.toRightBottom = false;
    } else if (this.speed1 < 0 && this.speed2 > 0) {
      this.toLeftBottom = true;
      this.toRightBottom = false;
      this.toRightTop = false;
      this.toLeftTop = false;
    } else if (this.speed1 < 0 && this.speed2 < 0) {
      this.toLeftTop = true;
      this.toRightBottom = false;
      this.toRightTop = false;
      this.toLeftBottom = false;
    }
  }
  display() {
    if(mouseIsPressed==true){
      fill("red")  
    }else{
        fill("white")
    }
    circle(width/2,height/2,this.buttonR)
    stroke(1)
    fill(1)
    textSize(12)
    text("Accelerate",width/2-30,height/2)
    push();
    translate(this.x, this.y);
    this.drawbighead();
    this.drawbigbody();
    pop();
    // console.log(this.sinValue)
  }
  update() {
    // this.sinInput+=0.1
    // console.log(this.sinInput)
    this.x = this.x + this.speed1;
    this.y = this.y + this.speed2;
    if (this.x > width || this.x < 0) {
      this.speed1 = -this.speed1;
    }

    if (this.y > height || this.y < 0) {
      this.speed2 = -this.speed2;
    }
  }
  drawbighead() {
    //head
    fill(242, 215, 194, g);
    push();
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
    noStroke();
    fill("white");
    circle(-20, -8, 10);
    circle(20, -10, 10);

    pop();
  }
  drawbigbody() {
    //legs
    fill(242, 215, 194, g);
    stroke(232, 204, 137);
    strokeWeight(3);
    rect(-15, 73, 15, 53, 10, 10, 10, 10);
    rect(15, 75, 15, 53, 10, 10, 10, 10);
    //main body
    fill(232, 229, 67, g);
    strokeWeight(5);
    stroke("red");
    arc(0, 13, 120, 80, PI / 5, (4 * PI) / 5);
    stroke("blue");
    arc(0, 13, 70, 45, PI / 6, (5 * PI) / 6);
    stroke("green");
    arc(0, 13, 18, 12, PI / 5, (4 * PI) / 5);

    //necklace
    stroke(209, 201, 38);
    fill(108, 39, 204);
    strokeWeight(0.7);
    circle(0, 10, 4);
    line(0, 10, -15, -4);
    line(0, 10, 15, -4);

    // arms (move)
    stroke(232, 204, 137);
    strokeWeight(2.5);
    fill(242, 215, 194, this.transparency);
    if (this.toRightTop == true) {
      push();
      translate(40, 15);
      rotate(radians(12 * this.rotate2));
      ellipse(0, 0, 10, 43);
      pop();
      push();
      translate(-30, 10);
      ellipse(0, 0, 10, 43);
      pop();
    } else if (this.toRightBottom == true) {
      push();
      translate(37, 30);
      rotate(radians(-12 * this.rotate2));
      ellipse(0, 0, 10, 43);
      pop();
      push();
      translate(-30, 10);
      ellipse(0, 0, 10, 43);
      pop();
    } else if (this.toLeftBottom == true) {
      push();
      translate(30, 10);
      ellipse(0, 0, 10, 43);
      pop();
      push();
      translate(-37, 30);
      rotate(radians(12 * this.rotate2));
      ellipse(0, 0, 10, 43);
      pop();
    } else if (this.toLeftTop == true) {
      push();
      translate(30, 10);
      ellipse(0, 0, 10, 43);
      pop();
      push();
      translate(-40, 15);
      rotate(radians(-12 * this.rotate2));
      ellipse(0, 0, 10, 43);
      pop();
    } else {
      push();
      translate(-30, 10);
      ellipse(0, 0, 10, 43);
      pop();
      push();
      translate(30, 10);
      ellipse(0, 0, 10, 43);
      pop();
    }
    
  }
}
function mousePressed(){
    
     for(let i=1;i<3;i++){
        if(counter<5){
         energia.speedi=energia.speedi*a
        counter++   
    }else{
    textSize(40)
    text("it's too fast, are you able to follow?",width/2-200,height/2)
    // counter=0
    energia.speedi=energia.speedi/1.61051
    }
    }
}
   
