import {
    Wave
} from './wave.js';

export class WaveGroup {
    constructor() {
        this.totalWaves = 8;
        this.totalPoints = 6;

        this.color = ['rgba(0, 199, 235, 1)', 'rgba(0, 149, 199, 1)', 'rgba(0, 87, 158, 1)','rgba(0, 199, 235, 1)', 'rgba(0, 149, 199, 1)', 'rgba(0, 87, 158, 1)','rgba(0, 199, 235, 1)', 'rgba(0, 149, 199, 1)', 'rgba(0, 87, 158, 1)','rgba(0, 199, 235, 1', 'rgba(0, 149, 199, 1)', 'rgba(0, 87, 158, 1)'];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i]
            );
            this.waves[i]= wave;
        };
    }
    resize(stageWidth, stageHeight) {
        for (var i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    };

    draw(ctx) {
        for (var i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx)
        }
    };
}

