class Steak{
    constructor(x,y,velocityX,velocityY){
        this.body = createSprite(x,y);
        this.body.addAnimation("steakAn",steakAn);
        this.body.velocityX = velocityX;
        this.body.velocityY = velocityY;
        this.body.scale = 0.1;
        this.body.lifetime = 500;
    }
    
}