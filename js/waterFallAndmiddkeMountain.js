export class WaterFallAndmiddkeMountain{
    constructor(){
        this.color = ['#37FC08','#418A47','#41780B','green']
        this.waveColor = ['white','rgba(0, 149, 199, 1)','white','rgba(0, 149, 199, 1)','white'];
    }


    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2 - 500;
        this.centerY = stageHeight / 2;
    }

    draw(ctx) {

        // 중앙 산

        let startX = 150;
        let mountainY = this.centerY/10 - 150;
        let mountainX = 1550;
        let waveY = this.centerY -150;
        let waveX = 680;

        ctx.strokeStyle = "#113278";
        ctx.fillStyle = "#37FC08";
        ctx.lineWidth = 20;

        for (let i = 0; i <4; i++){

            mountainY += 50;

            ctx.fillStyle = this.color[i];
            ctx.beginPath();
            ctx.moveTo(startX, this.stageHeight);
            ctx.quadraticCurveTo(800, mountainY, mountainX , this.stageHeight);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }

        // waterFall
        ctx.lineWidth = 10;
        ctx.strokeStyle = "black";

        for (let i = 0; i < 5; i++){
            
            waveX -= 25;

            ctx.fillStyle = this.waveColor[i];
            ctx.beginPath();
            ctx.moveTo(300, this.stageHeight);
            ctx.quadraticCurveTo(370, waveY, waveX , this.stageHeight);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
    
        }


        // waterFall

        waveX = 950;

        for (let i = 0; i < 5; i++){
            
            waveX += 25;

            ctx.fillStyle = this.waveColor[i];
            ctx.beginPath();
            ctx.moveTo(1250, this.stageHeight);
            ctx.quadraticCurveTo(1350, waveY, waveX , this.stageHeight);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
    
        }


    }


    
}