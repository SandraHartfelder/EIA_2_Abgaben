// Bird Klasse
class Bird {
    x: number;
    y: number;
    size: number;
    color: string;
    dx: number;
    dy: number;

    constructor(x: number, y: number, size: number, color: string, dx: number, dy: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        // Körper
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Kopf links vom Körper
        const headX = this.x - this.size * 0.8;
        const headY = this.y - this.size * 0.5;
        ctx.beginPath();
        ctx.arc(headX, headY, this.size * 0.5, 0, Math.PI * 2);
        ctx.fill();

        // Flügel
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.size * 0.8, this.y - this.size * 0.5);
        ctx.lineTo(this.x + this.size * 0.4, this.y);
        ctx.closePath();
        ctx.fill();
    }

    update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        this.x += this.dx;
        this.y += this.dy;

        // Randüberprüfung und Richtungswechsel
        if (this.x < 0 || this.x > canvas.width) {
            this.dx = -this.dx;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.dy = -this.dy;
        }

        this.draw(ctx);
    }
}