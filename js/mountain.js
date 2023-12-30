export class Mountain {
    constructor(index, totalPoints, color) {

    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2 - 500;
        this.centerY = stageHeight/2;
    }

    draw(ctx){

 
        ctx.fillStyle = "#37FC08";
        ctx.beginPath();
        ctx.moveTo(-100, this.stageHeight);
        ctx.quadraticCurveTo(0, this.centerY/5 - 400, this.centerX * 1.7 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
        ctx.lineWidth = 20;
        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "#418A47";
        ctx.beginPath();
        ctx.moveTo(-100, this.stageHeight);
        ctx.quadraticCurveTo(0, this.centerY/5 - 300, this.centerX * 1.7 - 50, this.stageHeight);
        ctx.closePath();

        ctx.stroke();
        ctx.fill();



        ctx.lineWidth = 20;
        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "#41780B";
        ctx.beginPath();
        ctx.moveTo( -100, this.stageHeight);
        ctx.quadraticCurveTo(0, this.centerY/5 - 200, this.centerX * 1.7 -100, this.stageHeight);
        ctx.closePath();

        ctx.stroke();
        ctx.fill();





        ctx.lineWidth = 20;
        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(-100, this.stageHeight);
        ctx.quadraticCurveTo(0, this.centerY/5 - 100, this.centerX * 1.7 -150, this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
    }
    

}