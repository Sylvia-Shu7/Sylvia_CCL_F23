console.log("js is linked")
let karateChop;
let readyToChop=true;
let backgroundImage;
let fruitBasket=[];
let fruitImageArray=[];
let numFruits=3;
//make GLOBAL so it can be used in multiple function
function  preload(){
    karateChop=loadSound("sounds/karateChop.m4a");
    backgroundImage=loadImage("images/gradient-bkg.png");
    for(let i=0;i<numFruits;i++){
        let path="images/fruit"+i+".png";
        console.log(path);
        let img=loadImage(path);
        fruitImageArray.push(img);
    }
        console.log(fruitImageArray);
    
    
}
function setup(){
    let cnv=createCanvas(400,400);
    cnv.parent("canvasWrapper");
    
    // fruit1=new Fruit(width/2,height/2,CherriesImage);
    for(let i=0;i<numFruits; i++){
        let singleFruit=new Fruit(random(width),random(height),fruitImageArray[0]);
        fruitBasket.push(singleFruit);
    }
    
}

function draw(){
    background(0,40)
    image(backgroundImage,0,0,400,400);
    let distance=dist(pmouseX,pmouseY,mouseX,mouseY);
    if(mouseIsPressed==true){
        if(distance>50 && readyToChop==true){
            karateChop.play();
            readyToChop=false;
        }else{
            readyToChop=true; 
        }
        fill(255);
        text(distance,100,100);
        
    }
    stroke(255)
    line(pmouseX,pmouseY,mouseX,mouseY,)
    for(let i=0;i<numFruits;i++){
        fruitBasket[i].display();
    }
    

    
}
function mousePressed(){
    // karateChop.play();
}

class Fruit{
    constructor(startX,startY,fruitImg){
        this.x=startX;
        this.y=startY;
        this.img=fruitImg
    }
    display(){
        push();
        translate(this.x,this.y);
        fill(255)
        circle(0,0,30)
        image(0,0,this.img)
        pop();
        
    }


}