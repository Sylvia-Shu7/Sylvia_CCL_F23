console.log("js is linked");
// let xArray=[40,120,290];
// let yArray=[30,140,200];
let egg1,egg2;
let eggBasket=[];
let numEgg=5;//amount of eggs
function setup(){
    let cnv= createCanvas(400,400);
    cnv.parent("canvasWrapper");
    ////approach1
    // egg1=new Egg(random(width),random(height),random(0.3,1));
    // egg2=new Egg(random(width),random(height),random(0.3,1));

    ////approach2
    // eggBasket[0]=new Egg(random(width),random(height),random(0.3,1));
    // eggBasket[1]=new Egg(random(width),random(height),random(0.3,1));
    // console.log(eggBasket);
    // let newEgg= new Egg(random(width),random(height),random(0.3,1));
    // eggBasket.push(newEgg);

    ////apprach3
    for(let i=0;i<numEgg;i++){
        let newEgg=new Egg(random(width),random(height),random(0.3,1));
        eggBasket.push(newEgg);
    }
}
function draw(){
    background(120,90,230);

    // for (let i=0;i<xArray.length;i++){
    //     let xPos=xArray[i];
    //     let yPos=yArray[i];
    //     drawShape(xPos,yPos);
    // }
    // egg1.display();
    // egg2.display();
    for(let i=0;i<eggBasket.length;i++){
        eggBasket[i].display();
    }
 
}
// function drawShape(x,y){
//     push()
//     translate(x,y);
//     noStroke();
//     fill(255,200);
//     arc(0,0,80,80,0,PI);
//     arc(0,0,80,130,PI,2*PI);
//     pop();

// }

class Egg{
    constructor(startX,startY,scaleFactor){
        this.x=startX;
        this.y=startY;
        this.s=scaleFactor;//scale
    }
    
    display(){
        push();
        translate(this.x,this.y);
        scale(this.s);
        noStroke();
        fill(255,200);
        arc(0,0,80,80,0,PI);
        arc(0,0,80,130,PI,2*PI);
        pop();
    }
}


function mousePressed(){
    let newEgg= new Egg(mouseX,mouseY,random(0.3,1));
    eggBasket.push(newEgg);

}