var Bird = /** @class */ (function () {
    function Bird(x, y, size, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
    }
    Bird.prototype.draw = function (ctx) {
        // Körper
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        // Kopf
        ctx.beginPath();
        ctx.arc(this.x + this.size * 0.8, this.y - this.size * 0.5, this.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        // Flügel
        ctx.save(); // Zustand speichern
        ctx.translate(this.x, this.y); // Koordinatenursprung verschieben
        ctx.rotate(Math.PI); // Drehung um 180 Grad im Uhrzeigersinn
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-this.size * 2, -this.size * 0.3);
        ctx.lineTo(-this.size * 2, this.size * 0.3);
        ctx.closePath();
        ctx.fill();
        ctx.restore(); // Ursprünglichen Zustand wiederherstellen
    };
    Bird.prototype.update = function (ctx, canvas) {
        this.x += this.dx;
        this.y += this.dy;
        // Randüberprüfung für horizontalen Flug
        if (this.x > canvas.width + this.size * 4) {
            this.x = -this.size * 4;
        }
        else if (this.x < -this.size * 4) {
            this.x = canvas.width + this.size * 4;
        }
        // Randüberprüfung für vertikalen Flug
        if (this.y > canvas.height + this.size) {
            this.y = -this.size;
        }
        else if (this.y < -this.size) {
            this.y = canvas.height + this.size;
        }
        this.draw(ctx);
    };
    return Bird;
}());
