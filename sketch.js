var bck_start;  
var player, playerAn, playerJumpAn;
var invisible;
var bck;
var startfundo = false;
var apoio, gApoio;
var imgApoio;
var leftInvi, rightInv;
var gyro;

function preload(){
  bck_start = loadImage("./assets/BCK.png");
  playerAn = loadAnimation("./assets/Char_Pig_Idle_000.png","assets/Char_Pig_Idle_001.png","assets/Char_Pig_Idle_002.png",
  "assets/Char_Pig_Idle_004.png","assets/Char_Pig_Idle_005.png","assets/Char_Pig_Idle_006.png","assets/Char_Pig_Idle_007.png",
  "assets/Char_Pig_Idle_008.png","assets/Char_Pig_Idle_009.png")
  playerAn.frameDelay = 2

  playerJumpAn = loadAnimation("./assets/Char_Pig_Flyght_000.png","./assets/Char_Pig_Flyght_001.png","./assets/Char_Pig_Flyght_002.png",
  "./assets/Char_Pig_Flyght_003.png","./assets/Char_Pig_Flyght_004.png","./assets/Char_Pig_Flyght_005.png",
  "./assets/Char_Pig_Flyght_006.png","./assets/Char_Pig_Flyght_007.png","./assets/Char_Pig_Flyght_008.png","./assets/Char_Pig_Flyght_009.png");
  playerJumpAn.frameDelay = 2

  imgApoio = loadImage("./assets/Pad_1_1.png")

} 

function setup() {
  createCanvas(windowWidth,windowHeight);
  bck = createSprite(windowWidth/2,-windowHeight*0.2)
  bck.addAnimation("bck_start",bck_start)
  bck.scale = windowWidth/bck.width

  player = new Player();
  invisible = createSprite(windowWidth/2,player.y+150,windowWidth,5)
  invisible.visible = false;

   leftInvi = createSprite(50,windowHeight/2,5,windowHeight*2)
  leftInvi.visible = false;

  rightInvi = createSprite(windowWidth-50,windowHeight/2,5,windowHeight*2)
  rightInvi.visible = false;

  gApoio = new Group();
  
  gyro = new Gyroscope();
  
}

function draw() {
  background(bck_start);  
console.log(gyro.x)
if(gyro.y!=null){
  text(gyro.y,100,100)
}
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
  
 
   if(gApoio.isTouching(player.body)){
    if(player.body.velocityY>0){
      console.log(player.body.velocityY)
    player.body.collide(gApoio)
    
   }
  }
  
 gApoio.bounceOff(leftInvi)
 gApoio.bounceOff(rightInvi)
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
    gerarApoio();

  }
  if(bck.y>windowHeight*2.2){
    bck.y = bck.height/8
  }
}

function gerarApoio(){
  if(frameCount%60===0){
    var apoio = createSprite(random(100,windowWidth-100), 0,350,50)
    apoio.velocityY = 10;
    apoio.lifetime = 400;
    apoio.debug = true;
    apoio.addImage(imgApoio);
    apoio.scale = 0.3
    var choice = Math.round(random(0,2));
    if(choice ===1)
    apoio.velocityX = -2;
    if(choice ===2)
    apoio.velocityX = 2;
    if(choice===-0)
    apoio.velocityX = 0;
    apoio.setCollider("rectangle",0,0,apoio.width,50);
    player.depth = apoio.depth +1
    apoio.depth = player.depth -1
    
    gApoio.add(apoio);
    

    
  }
}