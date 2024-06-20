var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            this.position = _position;
            this.velocity = new Vector(0, 0); //Geschwindigkeit mit Standardwert initialisieren
        }
        Moveable.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.updatePosition();
        };
        Moveable.prototype.updatePosition = function () {
            this.position.add(this.velocity);
        };
        Moveable.prototype.draw = function () {
            //Methode wird von den abgeleiteten Klassen überschrieben
        };
        return Moveable;
    }());
    L09_EntenteichClasses.Moveable = Moveable;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
