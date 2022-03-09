class Player{
    constructor(){
        this.body = createSprite(windowWidth/2, windowHeight - windowHeight/10,50,50);
        this.body.addAnimation("playerAn",playerAn);
        this.body.addAnimation("playerJumpAn",playerJumpAn);
        this.body.addAnimation("playerdead",playerdead)
        this.body.scale = 0.11;
        this.y = this.body.y;
        this.velocityY = 20;
        this.fart = createSprite(this.body.x,this.body.y+55);
        this.fart.visible = false;
        this.fart.addAnimation("fartAn",fartAn);
        this.fart.scale = 0.15;
        this.fart.depth = this.body.depth - 1;
        this.fart.rotation = -50;
        this.gas = 100;
        this.body.debug = true;
        this.largura = this.body.width;
        this.body.setCollider("rectangle",0,0,this.body.width/2,this.body.height,0)
    }
    gravity(x){
        this.body.velocityY += x;
        this.body.collide(invisible);
        this.y = this.body.y;
        this.fart.x = this.body.x;
        this.fart.y  = this.body.y+55;
    }
    jumpStart(){
        if(this.gas>0){
    this.body.changeAnimation("playerJumpAn");
    this.body.velocityY = -10;
    var index = touches.length -1;
    this.fart.visible = true;
 
    if(touches[index]!==undefined){
    if(this.body.position.x<touches[index].x-50){
        this.body.velocityX = 10;
    }
    if(this.body.position.x>touches[index].x+50){
        this.body.velocityX = -10;
    }
    if(this.body.position.x<touches[index].x+50&&this.body.x>touches[index].x-50){
        this.body.velocityX = 0;
    }
}
   this.gas-=1;
    }
    }
    jumpEnd(){
        this.fart.visible = false;
        this.body.changeAnimation("playerAn");
        this.body.velocityX = 0
    }
    addGas(){
        //console.log("GAAAS")
        this.gas = this.gas+20;
    }
}