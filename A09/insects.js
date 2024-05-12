"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Insect = /** @class */ (function () {
    function Insect(species, color, position) {
        this.species = species;
        this.color = color;
        this.position = position;
    }
    Insect.prototype.draw = function () {
        // Zeichne das Fluginsekt basierend auf seiner Art, Farbe und Position
    };
    return Insect;
}());
exports.default = Insect;
