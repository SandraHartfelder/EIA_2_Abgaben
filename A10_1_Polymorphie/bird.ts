import { Drawable } from './drawable.js';

export class Bird extends Drawable {
    dx: number;
    dy: number;

    constructor(x: number, y: number, size: number, color: string, dx: number, dy: number) {
        super(x, y, size, color);
        this.dx = dx;
        this.dy = dy;
    }

    draw(ctx: CanvasRenderingContext2D) {
        // Körper
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Körper
        ctx.fill();
    
        // Kopf auf der linken Seite des Körpers
        const headX = this.x - this.size * 1.2;
        const headY = this.y - this.size * 0.5;
        ctx.beginPath();
        ctx.arc(headX, headY, this.size * 0.5, 0, Math.PI * 2); // Kopf
        ctx.fill();
    
        // Flügel
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.size * 0.8, this.y - this.size * 0.5);
        ctx.lineTo(this.x + this.size * 0.4, this.y);
        ctx.closePath();
        ctx.fill();
    }

    update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.x += this.dx;
        this.y += this.dy;

        // Ränder überprüfen und Richtung ändern
        if (this.x < 0 || this.x > canvas.width) {
            this.dx = -this.dx;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.dy = -this.dy;
        }

        this.draw(ctx);
    }
}