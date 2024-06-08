"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawable = void 0;
var Drawable = /** @class */ (function () {
    function Drawable(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
    Drawable.prototype.draw = function (ctx) {
        // Implement in subclasses
    };
    Drawable.prototype.update = function (ctx, canvas) {
        // Implement in subclasses
    };
    return Drawable;
}());
exports.Drawable = Drawable;
