"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sky_1 = require("./sky");
var mountains_1 = require("./mountains");
var trees_1 = require("./trees");
var birds_1 = require("./birds");
var insects_1 = require("./insects");
function main() {
    // Zeichne den Himmel
    var sky = new sky_1.default();
    sky.draw();
    // Zeichne die Berge
    var mountains = new mountains_1.default();
    mountains.draw();
    // Zeichne die Bäume
    var trees = new trees_1.default();
    trees.draw();
    // Erstelle und zeichne Vögel
    var birds = [
        new birds_1.default('sparrow', 'brown', [100, 100]),
        new birds_1.default('eagle', 'white', [200, 150]),
        // Weitere Vögel hinzufügen...
    ];
    birds.forEach(function (bird) { return bird.draw(); });
    // Erstelle und zeichne Fluginsekten
    var insects = [
        new insects_1.default('bee', 'yellow', [50, 200]),
        new insects_1.default('butterfly', 'blue', [150, 250]),
        // Weitere Insekten hinzufügen...
    ];
    insects.forEach(function (insect) { return insect.draw(); });
}
main();
