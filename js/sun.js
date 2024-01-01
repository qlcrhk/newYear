export class Sun {
    constructor() {
        this.color = "#DD141C";

    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;
    }

    draw(ctx) {
        let radius = this.centerX/10 + 30;
        let sunX = this.centerX;
        let sunY = this.centerY/2;

        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(sunX, sunY, radius, 0, degToRad(360), false);
        ctx.fill();
        ctx.stroke();
    }

}

function degToRad(deg) {
    return (Math.PI / 180) * deg;
}