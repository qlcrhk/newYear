export class Cloud{
    constructor() {
        this.speed = 1;
        this.Xheight = 0;
        this.height = 200; // 이 값은 적절한 값으로 변경되어야 합니다.
        this.movingUp = true;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    update() {
        if (this.movingUp) {
            this.Xheight -= this.speed;

            if (this.Xheight < this.height / 4 - 50) {
                this.movingUp = false;
            }
        } else {
            this.Xheight += this.speed;

            if (this.Xheight > this.height / 4 + 50) {
                this.movingUp = true;
            }
        }
    }

    draw(ctx) {
        this.update();

        const image = new Image();
        image.src = '/image/cloud.png';

        ctx.save();
        ctx.translate(this.stageWidth,0)
        ctx.scale(-1,1)
        ctx.drawImage(image, this.stageWidth / 1.8   + this.Xheight, this.stageHeight / 4,  170, 120);
        ctx.restore();
        ctx.drawImage(image, this.stageWidth / 1.8  + this.Xheight, this.stageHeight / 4,  170, 120);
    }



}
