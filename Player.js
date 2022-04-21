class Player{
    constructor(){
        this.body = createSprite(windowWidth/2, invisible.y-50,50,50);
        this.body.addAnimation("playerAn",playerAn);
        this.body.addAnimation("playerJumpAn",playerJumpAn);
        this.body.addAnimation("playerdead",playerdead)
        this.body.scale = 0.085;
        this.y = this.body.y;
        this.x = this.body.x
        this.velocityY = 20;
        this.fart = createSprite(this.body.x,this.body.y+35);
        this.fart.visible = false;
        this.fart.addAnimation("fartAn",fartAn);
        this.fart.scale = 0.10;
        this.fart.depth = this.body.depth - 1;
        this.fart.rotation = -50;
        this.gas = 100;
        this.body.debug = false;
        this.largura = this.body.width;
        this.body.setCollider("rectangle",0,0,this.body.width/2,this.body.height,0);
        
    }
    gravity(x){
        this.body.velocityY += x;
        this.body.collide(invisible);
        this.y = this.body.y;
        this.fart.x = this.body.x;
        this.fart.y  = this.body.y+35;
    }
    jumpStart(){
        if(frameCount%4===0)
        pont = pont + 1;
        if(this.gas>0){
    this.body.changeAnimation("playerJumpAn");
    this.body.velocityY = -7;
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
        this.gas = this.gas+80;
    }
}