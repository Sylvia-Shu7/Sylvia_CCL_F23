
let faces = [];
let numFaces = 4;

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");

    for (let i = 0; i < numFaces; i++) {
        faces.push(new Face(random(width), random(height)));
    }

}

function draw() {
    background(180);

    for (let i = 0; i < faces.length; i++) {
        faces[i].update();
        faces[i].display();
    }
    // if(frameCount>100){
    //     for(let i=0;i<faces.length; i++){
    //         faces[i].turnAngry();
    //     }
    // }
    for(let i=faces.length-1;i>=0;i--){
        if(faces[i].shouldDiasappear==true){
            faces.splice(0,1);
        }
    }
}

class Face {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.offsetX = 0;
        this.speed = random(0.01, 0.1);
        this.angleForSineRadians = random(0, 2 * PI);
        this.normalColor = color(220, 250, 90);
        this.angryColor = color(255, 90, 29);

        this.r=25
        this.c = this.normalColor;
        this.age = 0;
        this.ageTurnAngry = random(15, 55);
        // this.ageTurnNormal=2*this.ageTurnAngry
        this.isAngry=false
        this.shouldDisappear=random(15,55);
        this.timeSinceAngry=0;
    }
    update() {
        this.offsetX = map(sin(this.angleForSineRadians), -1, 1, -20, 20);

        this.angleForSineRadians += this.speed;
        this.age += 0.2;
        // if (this.age > this.ageTurnAngry) {
        //     this.turnAngry();
        // }
        if(this.isAngry=true){
            this.timeSinceAngry++;
        }
        if(this.timeSinceAngry>65){
            this.isAngry=true;
        }
    }
    display() {
        push();
        translate(this.x + this.offsetX, this.y);

        noStroke();
        fill(this.c);
        circle(0, 0, this.r*2);
        fill(0);
        circle(-10, -10, 5)
        circle(10, -10, 5)
        ellipse(0, 10, 8, 9)
        text(round(this.age), 0, 0)
        pop();

    }

    turnAngry() {
        this.c = this.angryColor;
    }
    turnNormal(){
        this.c=this.normalColor;
    }
    checkIfClicked(){
    //distance between mouse and face
    let d=dist(mouseX,mouseY,this.x,this.y);
    if(d<this.r){
        this.turnAngry();
        this.isAngry=true
    }
    }
}


function mousePressed() {
    //     for(let i=0;i<faces.length;i++){
    //         face[i].turnAngry();
    //     }
    // faces.push(new Face(mouseX, mouseY));

    for(let i=0;i<faces.length;i++){
     faces[i].checkIfClicked();
 }
}