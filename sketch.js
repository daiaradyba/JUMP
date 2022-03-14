var bck_start;  
var player, playerAn, playerJumpAn,playerdead;
var fartAn, seatkAn;
var invisible;
var bck;
var startfundo = false;
var apoio, gApoio;
var imgApoio;
var leftInvi, rightInv;
var gyro;
var steakGroup,steakAn;
var start = false;
var limiteinf;
var gameState = 0;
var startSprite
var startBtn,restartSprite, restartAn;
var pont = 0; 
var pontTag;
var texto;
var fonte;
var coinStAn,coinSt,coin,coinGroup;
var coinCollect = 0;
var qntSteak = 3;
var nApoio = 0, sorteiaApoio,nBife=0,sorteiaBife;
var teste;
var vel_Y = 5;

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

  playerdead = loadImage("./assets/Char_Pig_Death_009.png");
  playerdead.frameDelay = 2


  imgApoio = loadImage("./assets/Pad_1_1.png");

  fartAn = loadAnimation("./assets/Fart/1.png","./assets/Fart/2.png","./assets/Fart/3.png","./assets/Fart/4.png");
  fartAn.frameDelay = 2;

  steakAn = loadImage("./assets/FOOD/steak.png");

  steakGroup = new Group();

  startBtn = loadImage("./assets/GUI/PlayBtn.png");

  fonte = loadFont("assets/Font/LuckiestGuy-Regular.otf")

  coinStAn = loadImage("./assets/COIN/1.png");

  coinAn = loadAnimation("./assets/COIN/1.png","./assets/COIN/2.png","./assets/COIN/3.png","./assets/COIN/4.png",
  "./assets/COIN/5.png","./assets/COIN/6.png");

  restartAn = loadAnimation("./assets/GUI/PlayAgainBtn.png");
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
  
  coinGroup = new Group();

  
 


  startSprite = createSprite(windowWidth/2,windowHeight/2);
  startSprite.addAnimation("start",startBtn)
  startSprite.scale = 0.3

  restartSprite = createSprite(windowWidth/2,windowHeight/2)
  restartSprite.addAnimation("restart",restartAn);
  restartSprite.scale = 0.3;
  restartSprite.visible = false;

  createSteakStart();

  coinSt = createSprite((windowWidth*3/4-15),120);
  coinSt.addAnimation("coinSt",coinStAn);
  coinSt.scale = 0.5

  sorteiaApoio=Math.round(random(1,3));
  nApoio = 0;
  nBife = 0;
  sorteiaBife = Math.round(random(1,3));

  teste = new Coin(100,100,0,0)
 
 
}

function draw() {
  background(bck_start);  
  //console.log(player.gas);
  


    if(gameState===0){
      //console.log("0")
      // start.depth = player.body.depth+5
      
      if(touches.length>0){
        if(touches[touches.length-1].x<startSprite.x+startSprite.width/2&&touches[touches.length-1].x>startSprite.x-startSprite.width/2&&touches[touches.length-1].y<startSprite.y+startSprite.height/2&&touches[touches.length-1].y>startSprite.y-startSprite.height/2){
          console.log("CLICOU");
          startSprite.destroy();
          touches = [];
          
          gameState = 1;
        }
      }
   }

    if(gameState===1){

    allthetime();
     

    if(mouseIsPressed){
      console.log("jump")
      player.jumpStart();
    }

    if(!mouseIsPressed)
    player.jumpEnd();
    
  
    if(touches.length>0)
      touchStarted();

    if(gApoio.isTouching(player.body)){
      if(player.body.velocityY>0){
        console.log(player.body.velocityY)
        player.body.collide(gApoio,player_apoio)
        }
     }  
 
    if(player.body.isTouching(invisible)&&pont>15){
      coinGroup.destroyEach();
      steakGroup.destroyEach();
      gApoio.destroyEach();
      gameState=2;
  }

  
  
 //console.log("bck.y: "+bck.y+" player.y: "+ player.y)
 
  movCamera();
 
  player.gravity(2);
  
  
  }

  if(gameState===2){
    console.log("2")
    player.body.changeAnimation("playerdead")
 
  

    bck.velocityY = 0  
    start = false; 
    restartSprite.visible = true;
    restartSprite.debug = true;

    if(touches.length>0){

      if(touches[touches.length-1].x<restartSprite.x+restartSprite.width/2&&touches[touches.length-1].x>restartSprite.x-restartSprite.width/2&&touches[touches.length-1].y<restartSprite.y+restartSprite.height/2&&touches[touches.length-1].y>restartSprite.y-restartSprite.height/2){
        console.log("RESTART");
        restartSprite.visible = false;
        touches = [];
        pont = 0;
        coinCollect = 0;
        player.gas = 100;
        //startSprite = createSprite(windowWidth/2,windowHeight/2);
       // startSprite.addAnimation("start",startBtn)
        //startSprite.scale = 0.3
        createSteakStart();
        startfundo = false;
        gameState = 1;
        console.log(gameState)
      }
    }

    console.log(gameState)
  }
  //END GAME STATE 1

  gApoio.bounceOff(leftInvi)
  gApoio.bounceOff(rightInvi)
  drawSprites();
push()
  textSize(15)
  textFont(fonte)
  fill("red")
  text("SCORE: " +pont,(windowWidth*3/4-30),60)

  fill("orange")
  text("GAS: "  + player.gas, (windowWidth*3/4-30),90);
  fill("yellow")
  textSize(30)
  text(coinCollect, windowWidth*3/4+10,coinSt.y+coinSt.width/4-2)
  pop();
  
}

//END DRAW

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mouseReleased(){
  
}


function touchEnded(){
  if(gameState===1){
  console.log("endTouch")
    player.jumpEnd();
    
  }
  touches= [];
    return false
}

function touchStarted(){
  if(gameState===1){
  start = true;
  console.log("saTouch")
  
    player.jumpStart();
  }
    return false
}

function movCamera(){
  if(player.y<windowHeight/2){
    startfundo = true;
  }
  if(startfundo){
    bck.velocityY =vel_Y;
    gerarApoio();
    steakGroup.setVelocityYEach(+5);

  }
  
  if(bck.y>windowHeight*2.2){
    bck.y = bck.height/8;
  }
  //camera.on();
  //camera.zoom = 5
 // camera.y = player.body.y
}

function gerarApoio(){
  if(frameCount%78===0){
    var apoio = createSprite(random(100,windowWidth-100), 0,350,50)
    apoio.velocityY = vel_Y;
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


    console.log("sorteia: "+sorteiaApoio + " NAPOIO: "+ nApoio + " NBIFE:  "+ nBife + " SORTEIACOIN: " + sorteiaBife)  

    if(nApoio===0){
      sorteiaApoio = Math.round(random(1,3))
     
   
    }
    if(nBife ===0){
    sorteiaBife = Math.round(random(1,6));  
    console.log("sorteou bife : " + sorteiaBife)
     
    }
    if(nApoio===sorteiaApoio){
      createSteak();
      nBife +=1;
      nApoio = 0;
    }
    if(nBife===sorteiaBife){
      createCoin();
      nBife = 0;
    }


    nApoio +=1;
    gApoio.add(apoio);
    

    
  }
}

function createSteakStart(){
  // j quantidade de linhas
  for(var j = 0; j<5;j++){
  for(var i = 0; i<qntSteak;i++){
    steak = new Steak(i*80+player.x-100,player.y-150-j*50,0,0);
    steakGroup.add(steak.body);
  }
}
}

function createCoin(){

 
    coin = new Coin(random(windowWidth-windowWidth*3/4,windowWidth-windowWidth/4),-10,0,vel_Y);
    coinGroup.add(coin.body);
  

}

function createSteak(){

 
  steak = new Steak(random(windowWidth-windowWidth*3/4,windowWidth-windowWidth/4),-10,0,vel_Y);
  steakGroup.add(steak.body);


}

async function allthetime(){
  
  player.body.bounceOff(steakGroup,removeSteak)
  player.body.bounceOff(coinGroup,removeCoin)
}
function removeSteak(splayer,steak){
  
  player.addGas();
  console.log("COLIDI")
  steakGroup.remove(steak);
  steak.remove();
  

}

function removeCoin(splayer,coin){
  


  coinGroup.remove(coin);
  coinCollect +=1;
  coin.remove();
  

}
function player_apoio(splayer,apoio){
  splayer.velocityX = apoio.velocityX
}


