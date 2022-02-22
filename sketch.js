var bck_start;  
function preload(){
  bck_start = loadImage("BCK_ST.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 
}

function draw() {
  background(bck_start);  


 
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
