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
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        function Bee(crc2, position, size, velocity) {
            var _this = _super.call(this, position) || this;
            _this.crc2 = crc2;
            _this.velocity = velocity;
            _this.size = size;
            _this.buzzSound = new Audio('sounds/biene.mp3'); // Hier wird der Pfad zur Sound-Datei angegeben
            _this.addClickListener();
            return _this;
        }
        Bee.prototype.addClickListener = function () {
            this.crc2.canvas.addEventListener("click", this.handleClick.bind(this));
        };
        Bee.prototype.handleClick = function (event) {
            var rect = this.crc2.canvas.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            if (this.isClicked(x, y)) {
                this.buzzSound.play();
            }
        };
        Bee.prototype.isClicked = function (x, y) {
            var dx = x - this.position.x;
            var dy = y - this.position.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            return distance <= this.size * 1.5; // Approximate radius of the bee
        };
        Bee.prototype.move = function (timeslice) {
            // Berechne die Verschiebung basierend auf der Geschwindigkeit und der Zeit
            var offsetX = this.velocity.x * timeslice;
            var offsetY = this.velocity.y * timeslice;
            // Aktualisiere die Position der Biene
            this.position.add(new Vector(offsetX, offsetY));
            // Überprüfe, ob die Biene den rechten Rand des Canvas erreicht hat
            // Wenn ja, setze die Position auf den linken Rand zurück
            if (this.position.x > this.crc2.canvas.width + this.size) {
                this.position.x = -this.size;
            }
        };
        Bee.prototype.draw = function () {
            var crc2 = this.crc2;
            // Draw body (yellow oval)
            crc2.beginPath();
            crc2.fillStyle = 'yellow';
            crc2.ellipse(this.position.x, this.position.y, this.size * 1.5, this.size, 0, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            // Draw stripes (three black stripes)
            crc2.beginPath();
            crc2.fillStyle = 'black';
            crc2.fillRect(this.position.x - this.size * 0.4, this.position.y - this.size, this.size * 0.3, this.size * 2);
            crc2.fillRect(this.position.x, this.position.y - this.size, this.size * 0.3, this.size * 2);
            crc2.fillRect(this.position.x + this.size * 0.4, this.position.y - this.size, this.size * 0.3, this.size * 2);
            crc2.closePath();
            // Draw wings (white ellipses)
            crc2.beginPath();
            crc2.fillStyle = 'white';
            crc2.ellipse(this.position.x - this.size * 0.4, this.position.y - this.size * 0.8, this.size * 0.8, this.size * 0.4, Math.PI * 0.25, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(this.position.x + this.size * 0.4, this.position.y - this.size * 0.8, this.size * 0.8, this.size * 0.4, -Math.PI * 0.25, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            // Draw eye (black circle)
            crc2.beginPath();
            crc2.fillStyle = 'black';
            crc2.arc(this.position.x - this.size * 0.3, this.position.y - this.size * 0.4, this.size * 0.1, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            // Draw stinger (black triangle)
            crc2.beginPath();
            crc2.moveTo(this.position.x + this.size * 1.2, this.position.y);
            crc2.lineTo(this.position.x + this.size * 1.4, this.position.y + this.size * 0.2);
            crc2.lineTo(this.position.x + this.size * 1.4, this.position.y - this.size * 0.2);
            crc2.fill();
            crc2.closePath();
        };
        return Bee;
    }(Moveable));
    L09_EntenteichClasses.Bee = Bee;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
