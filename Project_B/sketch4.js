console.log("js is linked")
let energia, x, y, g, sinValue;
let sinInput = 0
function setup() {
  let cnv = createCanvas(windowWidth, 600);
  cnv.parent("canvasWrapper4");
  rectMode(CENTER)
  energia = new Energia(300, 300);
}

function draw() {
  background(99, 176, 77);
  //make changing transparency with sin
  sinInput += 0.15
  sinValue = sin(sinInput)
  g = map(sinValue, -1, 1, 0, 400)
  //call Energia
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
    this.rotate4 = 0;
    //arm doesn't change its transparency
    this.transparency = 500;
    this.speed1 = 6;
    this.speed2 = 8;
    //arm direction
    this.toRightBottom = false;
    this.toRightTop = false;
    this.toLeftBottom = false;
    this.toLeftTop = false;
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
    //translate and then draw the body
    push();
    translate(this.x, this.y);
    this.drawbighead();
    this.drawbigbody();
    pop();
    // console.log(this.sinValue)
  }
  update() {
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