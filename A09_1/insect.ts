class Insect {
    constructor(x, y, size, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update(ctx, canvas) {
        this.x += this.dx;
        this.y += this.dy;

        // Ränder überprüfen und Richtung ändern
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.dx = -this.dx;
            this.dy = -this.dy;
        }

        this.draw(ctx);
    }
}

// Exportieren der Klasse
window.Insect = Insect;
