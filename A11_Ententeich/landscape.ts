// Landscape Klasse
class Landscape {
    draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        // Hintergrund füllen
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Himmel
        ctx.fillStyle = '#FFC0CB';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Gras
        ctx.fillStyle = '#FF69B4';
        ctx.fillRect(0, canvas.height - 340, canvas.width, 340);

        // Berge
        ctx.fillStyle = '#BA55D3';
        ctx.beginPath();
        ctx.moveTo(100, canvas.height - 340);
        ctx.lineTo(300, canvas.height - 540);
        ctx.lineTo(500, canvas.height - 340);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(400, canvas.height - 340);
        ctx.lineTo(600, canvas.height - 490);
        ctx.lineTo(800, canvas.height - 340);
        ctx.fill();

        // Teich
        ctx.fillStyle = '#9400D3';
        ctx.beginPath();
        ctx.ellipse(200, canvas.height - 150, 150, 75, 0, 0, Math.PI * 2);
        ctx.fill();

        // Baum
        ctx.fillStyle = '#8B4513'; // Stammfarbe
        ctx.fillRect(canvas.width - 60, canvas.height - 280, 50, 150); // Stamm
        ctx.fillStyle = '#32CD32'; // Blattfarbe
        ctx.beginPath();
        ctx.arc(canvas.width - 35, canvas.height - 280, 80, 0, Math.PI * 2); // Blätter
        ctx.fill();
    }
}