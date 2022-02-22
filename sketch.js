var bck_start;  
var player, playerAn;

function preload(){
  bck_start = loadImage("./assets/BCK_ST.png");
  playerAn = loadAnimation("./assets/Char_Pig_Idle_000.png","assets/Char_Pig_Idle_001.png","assets/Char_Pig_Idle_002.png",
  "assets/Char_Pig_Idle_004.png","assets/Char_Pig_Idle_005.png","assets/Char_Pig_Idle_006.png","assets/Char_Pig_Idle_007.png",
  "assets/Char_Pig_Idle_008.png","assets/Char_Pig_Idle_009.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Player();
}

function draw() {
  background(bck_start);  
 
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mouseClicked(){
  console.log("x: "+mouseX," , y: "+mouseY)
  player.jump();
}
