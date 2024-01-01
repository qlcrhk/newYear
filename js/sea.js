export class Sea {
    constructor() {
        this.totalWave = 10;
        this.totalLine = 3;
        this.wave = 3;
        this.color = ['rgba(0, 199, 235, 1)','rgba(0, 149, 199, 1)','rgba(0, 87, 158, 1)']
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

    }

    init() {

    }

    draw(ctx) {

        let middle = 0;
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        let miniHeight = 0;

        ctx.lineWidth = 20;
        ctx.strokeStyle = 'black';

        for (let j = this.totalLine -1; j >= 0; j--) {
            for (let i = 0; i < this.totalWave; i++) {

                startX = (200 * i) + (-100*j);
                endX = startX + 230;
                middle = startX + (endX - startX) /2 - 50;
                endY = this.stageHeight/1.3 -10 -20*j;
                miniHeight = -20*j;
                startY = this.stageHeight -20*j;

                for(let k = 0; k < this.wave; k++) {
                    startX += 30;
                    endY += 40;
                    endX -= 30;
                    ctx.fillStyle = this.color[k];
                    ctx.beginPath();
                    ctx.moveTo(startX - 100, startY);
                    ctx.quadraticCurveTo(middle, endY, endX, startY);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.fill();
                }

            }
        }
    }
}