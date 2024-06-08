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
exports.Insect = void 0;
var drawable_js_1 = require("./drawable.js");
var Insect = /** @class */ (function (_super) {
    __extends(Insect, _super);
    function Insect(x, y, size, color) {
        var _this = _super.call(this, x, y, size, color) || this;
        _this.angle = Math.random() * Math.PI * 2;
        _this.speed = Math.random() * 2 + 1;
        return _this;
    }
    Insect.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };
    Insect.prototype.update = function (ctx, canvas) {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        // Zufällige Richtungsänderung
        this.angle += (Math.random() - 0.5) * 0.5;
        // Ränder überprüfen und Richtung ändern
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.angle += Math.PI;
        }
        this.draw(ctx);
    };
    return Insect;
}(drawable_js_1.Drawable));
exports.Insect = Insect;
