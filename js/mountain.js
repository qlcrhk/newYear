export class Mountain {
    constructor(index, totalPoints, color) {

    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2 - 500;
        this.centerY = stageHeight / 2;
    }

    draw(ctx) {

    
        //  왼쪽 산
        ctx.fillStyle = "#37FC08";
        ctx.beginPath();
        ctx.moveTo(-100, this.stageHeight);
        ctx.quadraticCurveTo(0, this.centerY / 5 - 400, 600, this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.lineWidth = 20;
        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "#418A47";
        ctx.beginPath();
        ctx.moveTo(-100, this.stageHeight);
        ctx.quadraticCurveTo(0, this.centerY / 5 - 300, 600 - 50, this.stageHeight);
        ctx.closePath();

        ctx.stroke();
        ctx.fill();



        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "#41780B";
        ctx.beginPath();
        ctx.moveTo(-100, this.stageHeight);
        ctx.quadraticCurveTo(0, this.centerY / 5 - 200, 600- 100, this.stageHeight);
        ctx.closePath();

        ctx.stroke();
        ctx.fill();



        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(-100, this.stageHeight);
        ctx.quadraticCurveTo(0, this.centerY / 5 - 100, 600 - 150, this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //ssssssss

        ctx.fillStyle = "#37FC08";
        ctx.beginPath();
        ctx.moveTo(this.stageWidth + 150, this.stageHeight);
        ctx.quadraticCurveTo(1600, this.centerY / 5 - 400, 1050, this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "#418A47";
        ctx.beginPath();
        ctx.moveTo(this.stageWidth + 150, this.stageHeight);
        ctx.quadraticCurveTo(1600, this.centerY / 5 - 300, 1100, this.stageHeight);
        ctx.closePath();

        ctx.stroke();
        ctx.fill();



        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "#41780B";
        ctx.beginPath();
        ctx.moveTo(this.stageWidth + 150, this.stageHeight);
        ctx.quadraticCurveTo(1600, this.centerY / 5 - 200, 1150, this.stageHeight);
        ctx.closePath();

        ctx.stroke();
        ctx.fill();



        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(this.stageWidth + 150, this.stageHeight);
        ctx.quadraticCurveTo(1600, this.centerY / 5 - 100, 1200, this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();


    }


}