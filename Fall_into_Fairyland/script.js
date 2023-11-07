// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 3; // Decide the initial number of particles.

let particles = [];
let randomPick=0

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasWrapper");

  // generate particles
  // for (let i = 0; i < NUM_OF_PARTICLES; i++) {
  //   particles[i] = new Particle(width/2, height/2,i);
  // }
}

function draw() {
  background(237, 147, 209,20);
  randomPick=random(0,100)
  if (mouseIsPressed == true) {
    for (let i = 0; i < 1; i++) {
      particles.push(new Particle(width/2, height/2));
    
    }
}
for (let i = 0; i < particles.length; i++) {
  particles[i].update();
  if(randomPick<2){
  particles[i].displayFourLeafClover();
  }else if(randomPick>=2&&randomPick<=95){
  particles[i].displayPurpleBubble();
  }else if(randomPick>95&&randomPick<98){
  particles[i].displayRedHeart();
  }else{
  particles[i].displayStars();
  }
}
  
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 2;
    this.v=5;
    this.sinValue=0;
    this.cosValue=0;
    this.A=random(0.05,1.8);
   
  }
  // methods (functions): particle's behaviors
  update() {
    this.v +=0.08;
    this.A+=random(0.01,0.25);
    this.sinValue=this.A*sin(this.v);
    this.cosValue=this.A*cos(this.v);
    this.x=this.sinValue+this.x;
    this.y=this.cosValue+this.y;
    this.dia+=0.13;
    
  }
  displayFourLeafClover() {

    push();
    translate(this.x,this.y);
    noStroke()
    strokeWeight(random(1,10));
      fill(134, 219, 142)
      circle(10,10,this.dia/2)
      circle(10,-10,this.dia/2)
      circle(-10,-10,this.dia/2)
      circle(-10,10,this.dia/2)
      noFill()
      stroke(134, 219, 142)
      strokeWeight(3)
      arc(20,0,this.dia/2,10,0,PI)
    pop();
   
  }
  displayPurpleBubble(){
    push();
    translate(this.x,this.y);
    noStroke();
    fill(random(86,114),86,227);
    circle(0, 0, this.dia);
    pop();
  }
  displayRedHeart(){
    push();
    translate(this.x,this.y);
    noStroke()
    fill(222, 55, 69)
    arc(this.dia/4,0,this.dia/2,this.dia/2,PI,2*PI)
    arc(-this.dia/4,0,this.dia/2,this.dia/2,PI,2*PI)
    triangle(this.dia/2,0,-this.dia/2,0,0,this.dia/1.5)
    pop();
  }
  displayStars(){
    push();
    translate(this.x,this.y);
    fill(232, 232, 32);
    noStroke();
    triangle(0,this.dia/4,0,-this.dia/4,-this.dia,0);
    triangle(0,this.dia/4,0,-this.dia/4,this.dia,0);
    triangle(this.dia/4,0,-this.dia/4,0,0,this.dia);
    triangle(this.dia/4,0,-this.dia/4,0,0,-this.dia);
    pop();
  }
}

