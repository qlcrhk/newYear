export class Hill {
    constructor() {
        this.color = "green";

    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx) {
        let hillX = 100;
        let hillY = this.stageHeight + 150;
        let radius = 330;
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";

        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(hillX, hillY, radius, 0, degToRad(180), true);
        ctx.arc(1700 - hillX, hillY, radius, 0, degToRad(180), true);
        ctx.fill();
        ctx.stroke();

    }

}

function degToRad(deg) {
    return (Math.PI / 180) * deg;
}