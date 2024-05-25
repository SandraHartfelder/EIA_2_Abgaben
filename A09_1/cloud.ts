class Cloud {
    constructor(x, y, size, color, dx) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.dx = dx;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        
        // Mehrere kleinere Ellipsen für eine flauschigere und kleinere Wolke
        ctx.ellipse(this.x, this.y, this.size * 0.8, this.size * 0.4, 0, 0, Math.PI * 2);
        ctx.ellipse(this.x + this.size * 0.4, this.y - this.size * 0.2, this.size * 0.5, this.size * 0.3, 0, 0, Math.PI * 2);
        ctx.ellipse(this.x - this.size * 0.4, this.y - this.size * 0.2, this.size * 0.5, this.size * 0.3, 0, 0, Math.PI * 2);
        ctx.ellipse(this.x + this.size * 0.6, this.y, this.size * 0.6, this.size * 0.4, 0, 0, Math.PI * 2);
        ctx.ellipse(this.x - this.size * 0.6, this.y, this.size * 0.6, this.size * 0.4, 0, 0, Math.PI * 2);
        
        ctx.fill();
    }

    update(ctx, canvas) {
        this.x += this.dx;

        if (this.x < -this.size * 1.5) {
            this.x = canvas.width + this.size * 1.5;
        }

        this.draw(ctx);
    }
}

// Exportieren der Klasse
window.Cloud = Cloud;