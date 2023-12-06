console.log("js is linked")

let bubbles = [];
let numBubble = 5;
let cupCenterX, cupCenterY, cupBottomY;
let cup;

function preload() {
  sound = loadSound("water.wav");
}

function setup() {
  let cnv = createCanvas(windowWidth, 600);
  cnv.parent("canvasWrapper3");
  rectMode(CENTER)
  cupCenterX = width / 2 - 200;
  cupCenterY = 300;
  cupBottomY = cupCenterY + 140
  cup = new Cup(cupCenterX, cupBottomY);
}

function draw() {
  background(82, 152, 222);
  //call cup
  cup.display();
  cup.update();
  //call bubbles
  if (mouseIsPressed == true) {
    for (let i = 0; i < 1; i++) {
      bubbles.push(new Bubble(cupCenterX, cupBottomY));
    }
  }
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].update();
  }
}

class Bubble {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    this.spX = random(-1.5, 1.5);
    this.spY = random(-0.1, - 0.3);
    this.cChange = random(0, 360);
    this.inWater = true;
  }


  update() {
    //bubbles motion
    this.x += this.spX;
    this.y -= this.spY;
    //bubbles disappear
    if (this.y < cupBottomY - 240) {
      this.spY = 0
      this.spX = 0;
      this.cChange = 0
    } else {
      this.spY = this.spY + 0.1;
      this.spX = this.spX * 1.001;
      this.inWater = false
    }

  } display() {
    push();
    translate(this.x, this.y);
    stroke(this.cChange, 255, 255, this.cChange);
    noFill();
    circle(0, 0, this.size);
    pop();
  }
}

class Cup {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    //Cup
    this.bottomD = 140;
    this.topD = 240;
    this.temperature = 15.9;
    this.waterDepth = -240
    this.textColor = 1

    //clickBox
    this.height = 50
    this.distance = 10
    this.heat = false

  }
  display() {
    // console.log("linked")
    //draw Cup
    push();
    translate(this.x, this.y);
    stroke(1);
    strokeWeight(1.5);
    fill(195, 212, 230, 80);
    arc(0, 0, this.bottomD, 20, 0, PI);
    noFill();
    ellipse(0, -280, this.topD, 20);
    line(-this.topD / 2, -280, -this.bottomD / 2, 0);
    line(this.topD / 2, -280, this.bottomD / 2, 0);

    //draw water
    fill(195, 212, 230, 80);
    noStroke();
    beginShape();
    vertex(-this.topD / 2 + 6, this.waterDepth);
    vertex(-this.bottomD / 2, 0);
    vertex(this.bottomD / 2, 0);
    vertex(this.topD / 2 - 6, this.waterDepth);
    endShape();

    //draw click box
    if (mouseX > -this.bottomD * 0.8 && mouseX < this.bottomD * 0.8 && mouseY > this.distance - this.height / 2 && mouseY < this.distance + this.height / 2) {
      this.heat = true
    }
    fill(148, 6, 20)
    rect(0, this.distance + this.height, this.bottomD * 0.8, this.height, 5, 5, 5, 5)
    textSize(20)
    stroke(1)
    fill(1)
    text("HEAT", -23, this.distance + this.height + 5)
    pop();
  }
  update() {
    //temperature goes higher or lower in the range of (13,20)
    if (mouseIsPressed == true && this.temperature < 20 && this.heat == true) {
      this.temperature = this.temperature + 0.02;
    } else if (mouseIsPressed == false && this.temperature > 13) {
      this.temperature = this.temperature - 0.02;
    }
    //text
    push();
    strokeWeight(1);
    textSize(30)
    stroke(1);
    text("Water Temperature=" + floor(this.temperature) + "°", width / 2 + 20, 250);
    if (this.temperature > 16) {
      this.textColor = "#04800c"
      fill(this.textColor)
      text(
        "Researchers found that after exercice,", width / 2 + 20, 280);
      text("16° is a preferred temperature.", width / 2 + 20, 310);
    }
    pop();

  }
}

function mousePressed() {
  sound.play();
}