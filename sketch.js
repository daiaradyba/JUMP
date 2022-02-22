var bck_start;  
var player, playerAn, playerJumpAn;
var invisible;

function preload(){
  bck_start = loadImage("./assets/BCK_ST.png");
  playerAn = loadAnimation("./assets/Char_Pig_Idle_000.png","assets/Char_Pig_Idle_001.png","assets/Char_Pig_Idle_002.png",
  "assets/Char_Pig_Idle_004.png","assets/Char_Pig_Idle_005.png","assets/Char_Pig_Idle_006.png","assets/Char_Pig_Idle_007.png",
  "assets/Char_Pig_Idle_008.png","assets/Char_Pig_Idle_009.png")
  playerAn.frameDelay = 2

  playerJumpAn = loadAnimation("./assets/Char_Pig_Flyght_000.png","./assets/Char_Pig_Flyght_001.png","./assets/Char_Pig_Flyght_002.png",
  "./assets/Char_Pig_Flyght_003.png","./assets/Char_Pig_Flyght_004.png","./assets/Char_Pig_Flyght_005.png",
  "./assets/Char_Pig_Flyght_006.png","./assets/Char_Pig_Flyght_007.png","./assets/Char_Pig_Flyght_008.png","./assets/Char_Pig_Flyght_009.png");
  playerJumpAn.frameDelay = 1

} 

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Player();
  invisible = createSprite(windowWidth/2,windowHeight-50,windowWidth,5)
  invisible.visible = false
}

function draw() {
  background(bck_start);  

  if(mouseIsPressed){
    console.log("jump")
    player.jumpStart();
  }
  if(!mouseIsPressed){
    console.log("re")
    player.jumpEnd();
  }

  
  player.gravity(2);
  drawSprites();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mouseReleased(){
  
}
function touchStarted(){
  console.log("jump")
    player.jumpStart();
}
//
