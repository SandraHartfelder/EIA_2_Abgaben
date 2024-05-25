var Cloud = /** @class */ (function () {
    function Cloud(x, y, size, color, dx) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.dx = dx;
    }
    Cloud.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size * 1.5, this.size, 0, 0, Math.PI * 2);
        ctx.fill();
    };
    Cloud.prototype.update = function (ctx, canvas) {
        this.x += this.dx;
        if (this.x < -this.size * 1.5) {
            this.x = canvas.width + this.size * 1.5;
        }
        this.draw(ctx);
    };
    return Cloud;
}());
// Exportieren der Klasse
window.Cloud = Cloud;
