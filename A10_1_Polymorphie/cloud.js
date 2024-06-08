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
exports.Cloud = void 0;
var drawable_js_1 = require("./drawable.js");
var Cloud = /** @class */ (function (_super) {
    __extends(Cloud, _super);
    function Cloud(x, y, size, color, dx) {
        var _this = _super.call(this, x, y, size, color) || this;
        _this.dx = dx;
        return _this;
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
}(drawable_js_1.Drawable));
exports.Cloud = Cloud;
