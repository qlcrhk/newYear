export class Cloud{
    constructor() {
        this.speed = 1;
        this.Xheight = 0;
        this.side = 50; // 이 값은 적절한 값으로 변경되어야 합니다.
        this.moving = true;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    update() {
        if (this.moving) {
            this.Xheight -= this.speed;

            if (this.Xheight < this.side - 25) {
                this.moving = false;
            }
        } else {
            this.Xheight += this.speed;

            if (this.Xheight > this.side + 25) {
                this.moving = true;
            }
        }
    }

    draw(ctx) {
        this.update();

        let imageX =this.stageWidth / 1.85   + this.Xheight;
        let imageY = this.stageHeight / 4;
        let imageW = this.stageWidth / 15 + 100;
        let imageH = 120;
        const image = new Image();
        image.src = '/image/cloud.png';

        ctx.save();
        ctx.translate(this.stageWidth,0)
        ctx.scale(-1,1)
        ctx.drawImage(image, imageX ,imageY ,  imageW, imageH);
        ctx.restore();
        ctx.drawImage(image, imageX, imageY, imageW, imageH);
    }



}
