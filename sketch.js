var bck_start;  
var player, playerAn, playerJumpAn;
var invisible;
var bck;
var startfundo = false;

function preload(){
  bck_start = loadImage("./assets/BCK.png");
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
  bck = createSprite(windowWidth/2,-windowHeight*0.2)
  bck.addAnimation("bck_start",bck_start)
  bck.scale = windowWidth/bck.width

  player = new Player();
  invisible = createSprite(windowWidth/2,player.y+150,windowWidth,5)
  invisible.visible = false;

  
}

function draw() {
  background(bck_start);  

  if(mouseIsPressed){
    console.log("jump")
    player.jumpStart();
  }
  if(!mouseIsPressed){
    
    player.jumpEnd();
    
  }
 if(touches.length>0){
   touchStarted();
 }
  
 console.log("bck.y: "+bck.y+" player.y: "+ player.y)
 
  movCamera();
  player.gravity(2);
  drawSprites();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mouseReleased(){
  
}


function touchEnded(){
  console.log("endTouch")
    player.jumpEnd();
    touches= [];
    return false
}

function touchStarted(){
  console.log("saTouch")
    player.jumpStart();
    return false
}

function movCamera(){
  if(player.y<windowHeight/2){
    startfundo = true;
  }
  if(startfundo){
    bck.velocityY =10;
  }
  if(bck.y>bck.height*0.30){
    bck.y = windowHeight*0.68
  }
}