class Bird {
    constructor(x, y, size, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
    }

    draw(ctx) {
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
    update(ctx, canvas) {
        // Überprüfen, ob der Vogel auf dem See schwimmt (nur für die ersten drei Vögel)
        if (birds.indexOf(this) < 3) {
            // Vertikale Bewegung auf dem See (zufällige Änderung)
            this.y += Math.random() * 2 - 1;
    
            // Horizontale Bewegung auf dem See (sinusförmige Änderung)
            this.x += Math.sin(Date.now() * 0.001) * 2;
        } else {
            // Normaler Update-Code für die anderen Vögel
            this.x += this.dx;
            this.y += this.dy;
    
            // Ränder überprüfen und Richtung ändern
            if (this.x < 0 || this.x > canvas.width) {
                this.dx = -this.dx;
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.dy = -this.dy;
            }
        }
    
        this.draw(ctx);
    }
}

// Exportieren der Klasse
window.Bird = Bird;