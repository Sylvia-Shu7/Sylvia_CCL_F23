let sinValue, cosValue;
let x = 100;
let y = 0;
let circle1X, circle1Y;
let min = 0.5;
let div1 = 10;
let div2 = 2 * div1;
let moveX = 0;
let moveY = 0;
let size1 = 400;
let size2 = 400;
let color = 0;
let Weight = 5;
let r = 40;
let color1 = "#828fab";
let color2 = "#98B6B8";
let color3 = "#e5c480";
let color4 = "#e5bdbb";
let randomtrans = 0;
let a, b;
let xMouth = [];
let yMouth = [];
let babyr = 17;
let babyc = ["#828fab", "#98B6B8", "#e5c480", "#e5bdbb"];
let count = 0;
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5-container")
  background(28, 125, 186, 150);
  noStroke();
  fill(1, 20);
  for (let s = 0; s < height / 2; s += 14) {
    ellipse(200, height - s, 80 + s * 0.5, 20 + s * 0.05);
    ellipse(width - 100, height - s, 40 + s * 0.2, 20 + s * 0.05);
  }
  for (let m = 0; m < height / 4; m += 14) {
    ellipse(300, height - m, 40 + m * 0.2, 20 + m * 0.05);
    ellipse(width - 200, height - m, 80 + m * 0.5, 20 + m * 0.05);
  }
}

function draw() {
  // noStroke()
  // fill(1,5)
  // for(let s=0;s<height/2;s+=14){
  //   ellipse(60,height-s,40+s*0.5,20+s*0.05)
  //   ellipse(width-100,height-s,40+s*0.2,20+s*0.05)
  // }
  textSize(20);
  noStroke();
  fill("#e5c480");
  text("Hold press to attract Lumina with magnets!", 5, 20);

  c = "#c3c7c4";
  if (mouseIsPressed == true) {
    if (mouseX < width / 2 && mouseY < height / 2) {
      c = color1;
      // moveX=-mouseX/div1
      // moveY=-mouseY/div1
      moveX = moveX - min;
      moveY = moveY - min;
    } else if (mouseX < width / 2 && mouseY > height / 2) {
      c = color2;
      // moveX=-mouseX/div1
      // moveY=mouseY/div2
      moveX = moveX - min;
      moveY = moveY + min;
    } else if (mouseX > width / 2 && mouseY < height / 2) {
      c = color3;
      // moveX=mouseX/div2
      // moveY=-mouseY/div1
      moveX = moveX + min;
      moveY = moveY - min;
    } else if (mouseX > width / 2 && mouseY > height / 2) {
      c = color4;
      // moveX=mouseX/div2
      // moveY=mouseY/div2
      moveX = moveX + min;
      moveY = moveY + min;
    }
  }
  noFill();
  stroke(c);
  strokeWeight(Weight);

  //boby1
  ///bulk track
  cosValue = 4 * cos(x);
  sinValue = 2.5 * sin(x);
  x = x + 0.05;
  circle1X = map(cosValue, -1,1, 742 - size1 + moveX, size1 + moveX);
  circle1Y = map(sinValue, -1, 1, 742 - size2 + moveY, size2 + moveY);
  rantremble = random(-1, 1);

  ///bulk
  if (r > 5) {
    push();
    translate(320,0)
    circle(circle1X + rantremble, circle1Y + rantremble, r);
    randomtrans = random(-50, 20);
    fill(250, 240, 165 + randomtrans, 40 + randomtrans);
    noStroke();
    console.log(circle1X ,circle1Y,sinValue,cosValue)
    circle(circle1X + rantremble , circle1Y + rantremble , r + 17);

    ///red belly
    push();
    translate(circle1X, circle1Y);
    fill("red");
    ellipse(r / 2, 0, r / 2, r - r / 3);

    ///white mouth(random)
    let ranPick = random(0, 100);
    if (ranPick < 7) {
      noFill();
      strokeWeight(Weight / 6);
      stroke(255);
      circle(r - r / 3, r / 4, 3);
      xMouth.push(r - r / 3 + circle1X);
      yMouth.push(r / 4 + circle1Y);
    }
    pop();
    r -= 0.032;
    pop();
  }

  size1 -= 0.01;
  size2 -= 0.01;
  if (r < 5) {
    textSize(20);
    noStroke();
    fill("#e5c480");

    text("Feed Lumina Fe so it can reproduce!", 5, 45);
  }
}
  //interactions
  
  function mousePressed() {
      if (r > 5) {
      noStroke();
      push();
      translate(mouseX, mouseY);
      if (
        (mouseX < width / 2 && mouseY > height / 2) ||
        (mouseX > width / 2 && mouseY < height / 2)
      ) {
        rotate(radians(-45));
      } else {
        rotate(radians(45));
      }

      fill("red");
      rect(-20, -10, 20, 10);
      fill("blue");
      rect(0, -10, 20, 10);
      pop();
    } else {
      //nourish Lumina with Fe
      if (
        mouseX > width / 3 &&
        mouseX < width - width / 3 &&
        mouseY > height / 3 &&
        mouseY < height - height / 3
      ) {
        push();
        translate(mouseX, mouseY);
        rectMode(CENTER);
        fill("grey");
        stroke(1);
        strokeWeight(1);
        rect(0, 0, 20, 20);
        pop();
        //small snakes
        noStroke();
        babyLumina(
          random(20, width - 20),
          random(20, height - 20),
          babyc[floor(random(0, 3))]
        );
        count++;
        if (count > 8) {
          //ink
          for (let i = 0; i < xMouth.length; i++) {
            ink(xMouth[i], yMouth[i]);
          }
        }
      }
    }
}

function babyLumina(x, y, z) {
  push();
  translate(x, y);
  fill(z);
  circle(0, 0, babyr);
  circle(-7, 8, babyr);
  circle(-10, 16, babyr);
  circle(-13, 23, babyr);
  circle(-15, 30, babyr);
  circle(-19, 33, babyr);
  circle(+7, -10, babyr);
  circle(+15, -19, babyr);
  circle(+18, -30, babyr);
  circle(+22, -40, babyr);
  pop();
}

function ink(x, y) {
  push();
  translate(x+320, y);
  let xI = 0;
  let yI = 0;

  for (let t = 0; t < 200; t+=13) {
    xI = xI - t / 100;
    yI = yI + t / 50;
  
    fill(1);
    noStroke();
    circle(xI, yI, 2);
  }
   xI = 0;
   yI = 0;
  for (let t = 0; t < 200; t+=13) {
    xI = xI + t / 100;
    yI = yI + t / 50;
    fill(1);
    noStroke();
    circle(xI, yI, 2);
  }
   xI = 0 
   yI = 0;
  for (let t = 0; t < 100; t+=7) {
    xI = xI - t / 150;
    yI = yI - t / 200;
    fill(1);
    noStroke();
    circle(xI, yI, 2);
  }
     xI = 0;
     yI = 0;
  for (let t = 0; t < 100; t+=7) {
    xI = xI + t / 100;
    yI = yI - t / 200;
    fill(1);
    noStroke();
    circle(xI, yI, 2);
  }
  pop();
}

