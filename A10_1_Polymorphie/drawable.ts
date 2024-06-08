export class Drawable {
    x: number;
    y: number;
    size: number;
    color: string;

    constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D) {
        // Implement in subclasses
    }

    update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        // Implement in subclasses
    }
}