class Player{
    constructor(){
        this.body = createSprite(windowWidth/2, windowHeight - windowHeight/10,50,50);
        this.body.addAnimation("playerAn",playerAn);
        this.body.addAnimation("playerJumpAn",playerJumpAn);
        this.body.scale = 0.11;
        this.y = this.body.y
        this.velocityY = 20
    }
    gravity(x){
        this.body.velocityY += x;
        this.body.collide(invisible);
        this.y = this.body.y
    }
    jumpStart(){
    this.body.changeAnimation("playerJumpAn");
    this.body.velocityY = -20
    var index = touches.length -1 
    console.log(touches)
    this.body.x = touches[index].x
    }
    jumpEnd(){
        this.body.changeAnimation("playerAn");
      
    }
}