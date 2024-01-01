export class Bird {
    constructor() {
        this.speed = 1;
        this.Yheight = 0;
        // this.imageSize = 200;
        this.height = 200;
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
        let birdHieght = this.stageHeight / 4 + this.Yheight;
        let imageSize = this.stageWidth/18 + 100;

        const image = new Image();
        image.src = '/image/bird.png';

        ctx.drawImage(image, 200, birdHieght ,imageSize, imageSize);
        ctx.drawImage(image, 1300, birdHieght - 100, imageSize, imageSize);
    }
}
