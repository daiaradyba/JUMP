var bck_start;  
var player, playerAn, playerJumpAn;
var fartAn, seatkAn;
var invisible;
var bck;
var startfundo = false;
var apoio, gApoio;
var imgApoio;
var leftInvi, rightInv;
var gyro;
var steakGroupStart,steakAn;

var qntSteak = 5;


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

  imgApoio = loadImage("./assets/Pad_1_1.png");

  fartAn = loadAnimation("./assets/Fart/1.png","./assets/Fart/2.png","./assets/Fart/3.png","./assets/Fart/4.png");
  fartAn.frameDelay = 2;

  steakAn = loadImage("./assets/food/steak.png");

  steakGroupStart = new Group();
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

  createSteakStart();
  
}

function draw() {
  background(bck_start);  
console.log(gyro.x)
if(gyro.y!=null){
  text(gyro.y,100,100)
  createSprite(200,200,200,200)
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
    steakGroupStart.setVelocityYEach(+10);

  }
  if(bck.y>windowHeight*2.2){
    bck.y = bck.height/8;
  }
  //camera.on();
  //camera.zoom = 5
 // camera.y = player.body.y
}

function gerarApoio(){
  if(frameCount%30===0){
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
    player.depth = apoio.depth +1;
    apoio.depth = player.depth -1;
    
    gApoio.add(apoio);
    

    
  }
}

function createSteakStart(){
  for(var j = 0; j<10;j++){
  for(var i = 0; i<qntSteak;i++){
    steak = new Steak(i*100+280,windowHeight - 400 - j*70,0,0);
    steakGroupStart.add(steak.body);
  }
}

}