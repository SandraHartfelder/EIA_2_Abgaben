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
    var Duck = /** @class */ (function (_super) {
        __extends(Duck, _super);
        function Duck(initialPosition, pondArea, _state, _mirror) {
            var _this = _super.call(this, initialPosition) || this;
            _this.velocity = new Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
            _this.pondArea = pondArea;
            _this.state = _state;
            _this.mirror = _mirror;
            _this.underWater = -1;
            _this.quackSound = new Audio('sounds/quack.mp3'); //Erstellung HTML Audio-Element
            _this.addClickListener();
            return _this;
        }
        Duck.prototype.addClickListener = function () {
            crc2.canvas.addEventListener("click", this.handleClick.bind(this)); //sorgt dafür, dass der Kontext (this) in der handleClick Methode korrekt bleibt. Sonst wäre Ente nicht der Kontext für Click
        };
        Duck.prototype.handleClick = function (event) {
            var rect = crc2.canvas.getBoundingClientRect(); //Methode getBoundingClientRect auf dem Canvas, um die Position und Größe der Ente relativ zum Ansichtsfenster zu erhalten
            var x = event.clientX - rect.left; //Berechnet die x-Koordinate des Klicks relativ zum Canvas, indem die linke Position des Canvas von der x-Koordinate des Klicks abgezogen wird.
            var y = event.clientY - rect.top; //Berechnet die y-Koordinate des Klicks relativ zum Canvas, indem die obere Position des Canvas von der y-Koordinate des Klicks abgezogen wird.
            if (this.isClicked(x, y)) { //Überprüft, ob der Klick innerhalb der Ente war, indem die Methode isClicked aufgerufen wird.
                this.quackSound.play();
            }
        };
        Duck.prototype.isClicked = function (x, y) {
            var dx = x - this.position.x; //Berechnet die Differenz in der x-Koordinate zwischen der Klickposition und der Position der Ente.
            var dy = y - this.position.y; //Berechnet die Differenz in der y-Koordinate zwischen der Klickposition und der Position der Ente.
            var distance = Math.sqrt(dx * dx + dy * dy); //Berechnet die Entfernung zwischen der Klickposition und der Position der Ente.
            return distance <= 30; // Überprüft, ob diese Entfernung kleiner oder gleich 30 ist (ungefährer Radius der Ente)
        };
        Duck.prototype.draw = function () {
            switch (this.state) {
                case "swim":
                    this.drawSwimming();
                    break;
                case "dive":
                    this.drawTail();
                    break;
                default:
                    this.drawStanding();
            }
        };
        Duck.prototype.drawSwimming = function () {
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y, 30, 20, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.position.x + 20, this.position.y - 10, 17, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "orange";
            crc2.beginPath();
            crc2.moveTo(this.position.x + 30, this.position.y - 10);
            crc2.lineTo(this.position.x + 40, this.position.y - 15);
            crc2.lineTo(this.position.x + 40, this.position.y - 5);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.position.x + 25, this.position.y - 15, 2, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
        };
        Duck.prototype.drawTail = function () {
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 20, Math.PI, 2 * Math.PI); // Halber Kreis
            crc2.closePath();
            crc2.fill();
        };
        Duck.prototype.drawStanding = function () {
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y, 30, 20, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.position.x + 20, this.position.y - 10, 17, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "orange";
            crc2.beginPath();
            crc2.moveTo(this.position.x + 30, this.position.y - 10);
            crc2.lineTo(this.position.x + 40, this.position.y - 15);
            crc2.lineTo(this.position.x + 40, this.position.y - 5);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.position.x + 25, this.position.y - 15, 2, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "orange";
            crc2.fillRect(this.position.x - 10, this.position.y + 10, 5, 20);
            crc2.fillRect(this.position.x + 5, this.position.y + 10, 5, 20);
        };
        Duck.prototype.move = function (_timeslice) {
            var offsetX = 2;
            var movementAreaWidth = 600;
            var movementAreaHeight = 180;
            if (this.state === "swim") {
                if (Math.random() <= 0.001) {
                    this.state = "dive";
                }
            }
            else if (this.state === "dive") {
                this.underWater++;
                if (this.underWater >= 50 && Math.random() >= 0.001) {
                    this.state = "swim";
                    this.underWater = -1;
                }
            }
            if (this.position.x <= this.pondArea.x) {
                this.mirror = false;
            }
            else if (this.position.x >= this.pondArea.x + movementAreaWidth - 100) {
                this.mirror = true;
            }
            if (this.mirror === true) {
                this.position.x -= offsetX;
            }
            else {
                this.position.x += offsetX;
            }
            if (this.position.y <= this.pondArea.y) {
                this.position.y = this.pondArea.y;
            }
            else if (this.position.y >= this.pondArea.y + movementAreaHeight) {
                this.position.y = this.pondArea.y + movementAreaHeight;
            }
        };
        return Duck;
    }(Moveable));
    L09_EntenteichClasses.Duck = Duck;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
