import {
    Sun
} from './sun.js'

import { Hill } from './hill.js';

import { Cloud } from './cloud.js';

import { Mountain } from './mountain.js';

import {
    WaveGroup
} from './waveGroup.js'

import { Sea } from './sea.js';

import { Bird } from './bird.js';

import{
    WaterFallAndmiddkeMountain
} from './waterFallAndmiddkeMountain.js';

import { Tree } from './tree.js';
class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.sun = new Sun();
        this.cloud  = new Cloud();
        this.mountain = new Mountain();
        this.waveGroup = new WaveGroup();
        this.hill = new Hill();
        this.sea = new Sea();
        this.bird = new Bird();
        this.wAndM = new WaterFallAndmiddkeMountain();
        this.tree = new Tree();

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.sun.resize( this.stageWidth, this.stageHeight);
        this.cloud.resize( this.stageWidth, this.stageHeight)
        this.wAndM.resize(this.stageWidth,this.stageHeight)
        this.mountain.resize( this.stageWidth, this.stageHeight)
        this.waveGroup.resize(this.stageWidth, this.stageHeight);
        this.hill.resize(this.stageWidth, this.stageHeight);
        this.sea.resize(this.stageWidth, this.stageHeight);
        this.bird.resize(this.stageWidth, this.stageHeight);
        this.tree.resize(this.stageWidth, this.stageHeight);

    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.sun.draw(this.ctx);
        this.cloud.draw(this.ctx);
        this.wAndM.draw(this.ctx);
        this.mountain.draw(this.ctx);
        this.waveGroup.draw(this.ctx);
        this.sea.draw(this.ctx);
        this.tree.draw(this.ctx);
        this.hill.draw(this.ctx);
        this.bird.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}
window.onload = () => {
    new App();
}