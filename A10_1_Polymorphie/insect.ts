import { Drawable } from './drawable.js';

export class Insect extends Drawable {
    dx: number;
    dy: number;
    angle: number;
    speed: number;

    constructor(x: number, y: number, size: number, color: string) {
        super(x, y, size, color);
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 2 + 1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Zufällige Richtungsänderung
        this.angle += (Math.random() - 0.5) * 0.5;

        // Ränder überprüfen und Richtung ändern
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.angle += Math.PI;
        }

        this.draw(ctx);
    }
}