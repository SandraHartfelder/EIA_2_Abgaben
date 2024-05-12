"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bird = /** @class */ (function () {
    function Bird(species, color, position) {
        this.species = species;
        this.color = color;
        this.position = position;
    }
    Bird.prototype.draw = function () {
        // Zeichne den Vogel basierend auf seiner Art, Farbe und Position
    };
    return Bird;
}());
exports.default = Bird;
