import { Drawable } from './drawable.js';

export class Cloud extends Drawable {
    dx: number;

    constructor(x: number, y: number, size: number, color: string, dx: number) {
        super(x, y, size, color);
        this.dx = dx;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size * 1.5, this.size, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.x += this.dx;

        if (this.x < -this.size * 1.5) {
            this.x = canvas.width + this.size * 1.5;
        }

        this.draw(ctx);
    }
}