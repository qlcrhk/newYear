export class Cloud{
    constructor() {
        this.color = "white";
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.cloudX = stageWidth / 2 - 200;
        this.cloudY = stageHeight / 3 ;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.cloudX -30, this.cloudY, 30, 0, degToRad(360), false);
        ctx.arc(this.cloudX, this.cloudY, 50, 0, degToRad(360), false);
        ctx.arc(this.cloudX + 40, this.cloudY, 65, 0, degToRad(360), false);
        ctx.arc(this.cloudX + 80, this.cloudY, 50, 0, degToRad(360), false);
        ctx.arc(this.cloudX + 110, this.cloudY, 30, 0, degToRad(360), false);
        ctx.fill();
    }

}

function degToRad(deg) {
    return (Math.PI / 180) * deg;
}