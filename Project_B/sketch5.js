console.log("js is linked")
let mic;
function setup() {
    let cnv = createCanvas(windowWidth, 600);
    cnv.parent("canvasWrapper5")
    //input
    mic = new p5.AudioIn();
    mic.start();
}
function draw() {
    background(1)
    let level = mic.getLevel();
    let r = map(level, 0.0, 1.0, 100, 8000)
    textSize(15)
    if (r < 400) {
        text("Louder!", width / 2 - 25, height / 2)
    } else {
        textSize(30)
        stroke(255)
        fill("red")
        text("Got it! Now your trouble has gone!", width / 2 - 220, height / 2)

    }
    // visualize with circle
    stroke(255)
    noFill()
    circle(width / 2, height / 2, r)
    console.log(level, r)
}