export class Sea {
    constructor() {
        this.totalWave = 10;
        this.totalLine = 3;
        this.color = ['rgba(0, 199, 235, 1)','rgba(0, 149, 199, 1),rgba(0, 149, 199, 1)']
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
        let endX = 0;
        let startY = 0;
        let miniHeight = 0;

        for (let j = this.totalLine -1; j >= 0; j--) {
            for (let i = 0; i < this.totalWave; i++) {

                startX = (200 * i) + (-100*j);
                endX = startX + 200;
                middle = startX + (endX - startX) /2;
                startY = this.stageHeight/1.3 + 10;
                miniHeight = -20*j

                ctx.lineWidth = 20;
                ctx.strokeStyle = 'black';
                ctx.fillStyle = "rgba(0, 199, 235, 1)";
                ctx.beginPath();
                ctx.moveTo(startX - 70, this.stageHeight + miniHeight);
                ctx.quadraticCurveTo(middle, startY + miniHeight, endX, this.stageHeight + miniHeight);
                ctx.closePath();

                ctx.stroke();
                ctx.fill();

                ctx.fillStyle = 'rgba(0, 149, 199, 1)';
                ctx.beginPath();
                ctx.moveTo(startX -30, this.stageHeight + miniHeight);
                ctx.quadraticCurveTo(middle, startY + 50 + miniHeight, endX - 30, this.stageHeight + miniHeight);
                ctx.closePath();
                ctx.stroke();
                ctx.fill();

                ctx.fillStyle = "rgba(0, 87, 158, 1)";
                ctx.beginPath();
                ctx.moveTo(startX + 5, this.stageHeight + miniHeight);
                ctx.quadraticCurveTo(middle, startY + 100 + miniHeight, endX - 60, this.stageHeight + miniHeight);
                ctx.closePath();
                ctx.stroke();
                ctx.fill();

            }
        }
    }
}