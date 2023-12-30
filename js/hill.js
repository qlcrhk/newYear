export class Hill {
    constructor() {
        this.color = "green";

    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.stageWidth -100, this.stageHeight+100, this.stageWidth/22 + 260, 0, degToRad(180), true);
        ctx.fill();
        ctx.stroke();
    }

}

function degToRad(deg) {
    return (Math.PI / 180) * deg;
}