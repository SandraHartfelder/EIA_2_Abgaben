// Drawable.ts
export interface Drawable {
    draw(ctx: CanvasRenderingContext2D): void;
    update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
}