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
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud(position, velocity, size) {
            var _this = _super.call(this, position) || this;
            _this.isRaining = false;
            _this.raindrops = [];
            _this.velocity = velocity;
            _this.size = size;
            _this.addEventListeners();
            return _this;
        }
        Cloud.prototype.addEventListeners = function () {
            crc2.canvas.addEventListener("click", this.handleClick.bind(this));
        };
        Cloud.prototype.handleClick = function (event) {
            var rect = crc2.canvas.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            if (this.isInside(x, y)) {
                this.startRain();
            }
        };
        Cloud.prototype.isInside = function (x, y) {
            var distance = Math.sqrt(Math.pow((x - this.position.x), 2) + Math.pow((y - this.position.y), 2));
            return distance < this.size;
        };
        Cloud.prototype.startRain = function () {
            this.isRaining = true;
            for (var i = 0; i < 3; i++) { //Anzahl der Regentropfen
                var raindropX = this.position.x - this.size / 2 + Math.random() * this.size;
                this.raindrops.push(new Raindrop(new Vector(raindropX, this.position.y)));
            }
        };
        Cloud.prototype.move = function (timeslice) {
            var offsetX = this.velocity.x * timeslice;
            var offsetY = this.velocity.y * timeslice;
            this.position.add(new Vector(offsetX, offsetY));
            if (this.position.x > crc2.canvas.width + this.size) {
                this.position.x = -this.size;
            }
            if (this.isRaining) {
                for (var i = this.raindrops.length - 1; i >= 0; i--) {
                    var raindrop = this.raindrops[i];
                    raindrop.move(timeslice);
                    if (raindrop.position.y > crc2.canvas.height) {
                        this.raindrops.splice(i, 1);
                    }
                }
            }
        };
        Cloud.prototype.draw = function () {
            crc2.beginPath();
            crc2.fillStyle = 'white';
            this.drawEllipse(this.position.x - this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
            this.drawEllipse(this.position.x, this.position.y, this.size, this.size * 0.7);
            this.drawEllipse(this.position.x + this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
            crc2.closePath();
            crc2.fill();
            if (this.isRaining) {
                for (var _i = 0, _a = this.raindrops; _i < _a.length; _i++) {
                    var raindrop = _a[_i];
                    raindrop.draw();
                }
            }
        };
        Cloud.prototype.drawEllipse = function (x, y, width, height) {
            crc2.save();
            crc2.beginPath();
            crc2.translate(x + width / 2, y + height / 2);
            crc2.scale(1, height / width);
            crc2.arc(0, 0, width / 2, 0, Math.PI * 2);
            crc2.restore();
            crc2.fill();
        };
        return Cloud;
    }(Moveable));
    L09_EntenteichClasses.Cloud = Cloud;
    var Raindrop = /** @class */ (function () {
        function Raindrop(position) {
            this.position = position;
            this.velocity = new Vector(0, 200); // Geschwindigkeit der Regentropfen
        }
        Raindrop.prototype.move = function (timeslice) {
            var offsetY = this.velocity.y * timeslice;
            this.position.add(new Vector(0, offsetY));
        };
        Raindrop.prototype.draw = function () {
            crc2.beginPath();
            crc2.strokeStyle = 'blue';
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x, this.position.y + 10); // Länge des Regentropfens
            crc2.stroke();
        };
        return Raindrop;
    }());
    L09_EntenteichClasses.Raindrop = Raindrop;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
