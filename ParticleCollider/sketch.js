console.log("js is linked!");
let atoms=[];
let numAtoms=10;


function setup(){   
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");
    rectMode(CENTER)
    for(let i=0;i<numAtoms;i++){
        atoms.push(new Atom());
        console.log(atoms)
    }
}

function draw(){
    background(0);
    for(let i=0;i<numAtoms;i++){
        console.log("i is"+i);
        let currentAtom=atoms[i]
        currentAtom.display();
        currentAtom.fly();
        currentAtom.ifTouched=false
        //loop again to make sure no atom touches this atom!

        for(j=0;j<atoms.length;j++){
            if(i !=j){
        console.log("     j is"+j);
        let otherAtom=atoms[j];
        let otherX=otherAtom.x;
        let otherY=otherAtom.y;
        console.log("    otherX"+otherX);
        console.log("    otherY"+otherY);

        atoms[i].checkIfTouched(mouseX,mouseY);
            }
        }
    }
}


class Atom{
    // constructor(startX,startY){
    //we don't need these parameters now because we don't have to position an atom precisely but randomly
        constructor(){
        // this.x=width/2;
        this.y=random(0,height);
        this.size=40;
        this.speed=random(4,7);
        this.direction=random([-1,1]);//pick -1 or 1
        if(this.direction==-1){
            this.x=width+100
            this.atomBack=10
            this.atomFront=40;
        }else{
            this.x=-100
            this.atomBack=40
            this.atomFront=10;
        }
        this.size=40
        this.ifTouched=false;
        
    }

    display(){
        push();
        translate(this.x,this.y);
        if (this.ifTouched==true){
            fill(212,131,212)
        }else{
        fill("white");
        }
        rect(0,0,this.size,this.size,10,10,this.atomBack,this.atomFront)
        fill("green");
        noStroke();
        circle(0,0,5)
        fill("blue")
        arc(0,0,20,10,0,PI);
       
        pop();
    }
    fly(){
        this.x+=this.speed*this.direction;
        if (this.x>width+200 || this.x<-200){
            this.direction=-this.direction
        }
    }
    checkIfTouched(otherX,otherY){
        //you can define leftEdge=this.x-this.size/2
        if(otherX>this.x-this.size/2 && otherX<this.x+this.size/2 && otherY>this.y-this.size/2 && otherY<this.y+this.size/2){
            this.ifTouched=true
        }else{
            this.ifTouched=false
        }
    }
}