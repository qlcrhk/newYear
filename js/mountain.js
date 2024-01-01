export class Mountain {
    constructor() {

        this.color = ['#37FC08','#418A47','#41780B','green']
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2 - 500;
        this.centerY = stageHeight / 2;
    }

    draw(ctx) {
        ctx.strokeStyle = "#113278";
        ctx.lineWidth = 20;
        let mountainY = this.centerY / 5 - 400;
        let leftX = 600;
        let rightX = 1050;

        //  왼쪽 산

        for (let i = 0; i<4; i++) {

            mountainY += 100;
            leftX -= 50;
            ctx.fillStyle = this.color[i];
            ctx.beginPath();
            ctx.moveTo(-100, this.stageHeight);
            ctx.quadraticCurveTo(0, mountainY, leftX, this.stageHeight);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }    



        //오른쪽산
        mountainY = this.centerY / 5 - 400;

        for (let i = 0; i<4; i++) {
            mountainY += 100;
            rightX += 50;
            ctx.fillStyle = this.color[i];
            ctx.beginPath();
            ctx.moveTo(this.stageWidth + 150, this.stageHeight);
            ctx.quadraticCurveTo(1600, mountainY, rightX, this.stageHeight);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }   

    }


}