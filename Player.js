class Player{
    constructor(){
        this.body = createSprite(width/2, height -100,50,50);
        this.body.addAnimation("playerAn",playerAn);
        this.body.addAnimation("playerJumpAn",playerJumpAn);
        this.body.scale = 0.11;
    }
    gravity(x){
        this.body.velocityY += x;
        this.body.collide(invisible)
    }
    jumpStart(){
    this.body.changeAnimation("playerJumpAn");
    this.body.velocityY = -10
    }
    jumpEnd(){
        this.body.changeAnimation("playerAn");
      
    }
}