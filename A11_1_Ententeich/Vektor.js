var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    var Vector = /** @class */ (function () {
        function Vector(x, y) {
            this.x = x;
            this.y = y;
        }
        Vector.prototype.add = function (vector) {
            this.x += vector.x;
            this.y += vector.y;
        };
        Vector.prototype.scale = function (scalar) {
            this.x *= scalar;
            this.y *= scalar;
        };
        Vector.prototype.copy = function () {
            return new Vector(this.x, this.y);
        };
        return Vector;
    }());
    L09_EntenteichClasses.Vector = Vector;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
