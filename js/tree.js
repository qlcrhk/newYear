export class Tree{
    constructor(){

    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx){
        const image = new Image();
        image.src = '/image/tree.png'

        ctx.drawImage(image, -20, 300, 400,400);
        ctx.drawImage(image, 1200, 300, 400,400);
        ctx.drawImage(image, 1340, 300, 400,400);
    }

}