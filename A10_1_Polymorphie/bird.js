"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
var drawable_js_1 = require("./drawable.js");
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(x, y, size, color, dx, dy) {
        var _this = _super.call(this, x, y, size, color) || this;
        _this.dx = dx;
        _this.dy = dy;
        return _this;
    }
    Bird.prototype.draw = function (ctx) {
        // Körper
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Körper
        ctx.fill();
        // Kopf auf der linken Seite des Körpers
        var headX = this.x - this.size * 1.2;
        var headY = this.y - this.size * 0.5;
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
    };
    Bird.prototype.update = function (ctx, canvas) {
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
    };
    return Bird;
}(drawable_js_1.Drawable));
exports.Bird = Bird;
