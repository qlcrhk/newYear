export class Bird {
    constructor() {
        this.speed = 1;
        this.Yheight = 0;
        this.height = 200; // 이 값은 적절한 값으로 변경되어야 합니다.
        this.movingUp = true;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    update() {
        if (this.movingUp) {
            this.Yheight -= this.speed;

            if (this.Yheight < this.height / 4 - 80) {
                this.movingUp = false;
            }
        } else {
            this.Yheight += this.speed;

            if (this.Yheight > this.height / 4 - 30) {
                this.movingUp = true;
            }
        }
    }

    draw(ctx) {
        this.update();

        const image = new Image();
        image.src = '/image/bird.png';

        ctx.drawImage(image, this.stageWidth / 4, this.stageHeight / 4 + this.Yheight , this.height, this.height);
        ctx.drawImage(image, this.stageWidth / 1.7, this.stageHeight / 4 + this.Yheight - 100, this.height, this.height);
    }
}
