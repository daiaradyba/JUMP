
class Coin{
    constructor(x,y,velocityX,velocityY){
        this.body = createSprite(x,y);
        this.body.addAnimation("coinAn",coinAn);
        this.body.velocityX = velocityX;
        this.body.velocityY = velocityY;
        this.body.scale = 0.8;
        this.body.lifetime = 500;
    }
    
}