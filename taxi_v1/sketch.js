let instanceTaxi;
let secondTaxi;
function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");
    instanceTaxi=new Taxi(100,200,1);
    secondTaxi=new Taxi(200,200,0.5);
}

function draw() {
  background(90,120,250);
  instanceTaxi.display();
  instanceTaxi.update();
  secondTaxi.display();
  secondTaxi.update();

}

class Taxi{
  //every class must has a constructor function

  constructor(startX,startY,s){
    //inside, we list and define class's properties
    this.scaleFactor=1;
    this.speed=random(-2,2);
    this.col=[120,150,90];
    this.x=startX;
    this.y=startY;
    this.w=100;
    this.h=30;
    this.scaleFactor=s;
    this.sinInput=0;
  }
//here we actually draw the thing using property values
  display(){
    push();
    translate(this.x,this.y);
    scale(this.scaleFactor);
    fill(this.col[0],this.col[1],this.col[2]);
    rect(0,0,this.w,this.h);
    pop();
  }
  //this will change property values
  update(){
    this.x=this.x+this.speed
    this.h=30+sin(this.sinInput)
    this.sinInput+=0.2
    this.reappear();
  }
  reappear(){
    if (this.x>width || this.w<0){
      this.x=-this.x*this.scaleFactor;
    }else{
      //code for negetive speed
    }
  }
}