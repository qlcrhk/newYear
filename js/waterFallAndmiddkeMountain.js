export class WaterFallAndmiddkeMountain{
    constructor(){

    }


    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2 - 500;
        this.centerY = stageHeight / 2;
    }

    draw(ctx) {

        // 중앙 산
        ctx.fillStyle = "#37FC08";
        ctx.beginPath();
        ctx.moveTo(200, this.stageHeight);
        ctx.quadraticCurveTo(800, this.centerY/10 - 100, 1400 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.lineWidth = 20;
        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "#418A47";
        ctx.beginPath();
        ctx.moveTo(250, this.stageHeight);
        ctx.quadraticCurveTo(800,this.centerY/10 - 50, 1350, this.stageHeight);
        ctx.closePath();

        ctx.stroke();
        ctx.fill();



        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "#41780B";
        ctx.beginPath();
        ctx.moveTo(300, this.stageHeight);
        ctx.quadraticCurveTo(800, this.centerY/10 , 1300, this.stageHeight);
        ctx.closePath();

        ctx.stroke();
        ctx.fill();



        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(350, this.stageHeight);
        ctx.quadraticCurveTo(800, this.centerY/10 + 50, 1250 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // waterFall
        ctx.lineWidth = 10;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(350, this.stageHeight);
        ctx.quadraticCurveTo(370, this.centerY -150, 700 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();


        ctx.lineWidth = 10;
        ctx.fillStyle = "rgba(0, 149, 199, 1)";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(350, this.stageHeight);
        ctx.quadraticCurveTo(370, this.centerY -150, 680 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();


        ctx.lineWidth = 10;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(350, this.stageHeight);
        ctx.quadraticCurveTo(370, this.centerY -150, 660 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.lineWidth = 10;
        ctx.fillStyle = "rgba(0, 149, 199, 1)";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(350, this.stageHeight);
        ctx.quadraticCurveTo(370, this.centerY -150, 630 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();


        ctx.lineWidth = 10;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(350, this.stageHeight);
        ctx.quadraticCurveTo(370, this.centerY -150, 610 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // waterFall
        ctx.lineWidth = 10;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(1250, this.stageHeight);
        ctx.quadraticCurveTo(1300, this.centerY -150, 910 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();


        ctx.lineWidth = 10;
        ctx.fillStyle = "rgba(0, 149, 199, 1)";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(1250, this.stageHeight);
        ctx.quadraticCurveTo(1300, this.centerY -150, 930 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();


        ctx.lineWidth = 10;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(1250, this.stageHeight);
        ctx.quadraticCurveTo(1300, this.centerY -150, 950 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.lineWidth = 10;
        ctx.fillStyle = "rgba(0, 149, 199, 1)";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(1250, this.stageHeight);
        ctx.quadraticCurveTo(1300, this.centerY -150, 980 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();


        ctx.lineWidth = 10;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(1250, this.stageHeight);
        ctx.quadraticCurveTo(1300, this.centerY -150, 1000 , this.stageHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }


    
}