// Canvas-Element aus dem DOM holen
var canvas = document.getElementById("canvas");
// 2D-Kontext des Canvas-Elements abrufen
var context = canvas.getContext("2d");
// Funktion, um eine zufällige RGB-Farbe zu generieren 
function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}
// Klasse für Kreise mit Position für x uny y, den Radius und die zufällige Farbe
var Circle = /** @class */ (function () {
    function Circle(xpos, ypos, radius) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = getRandomColor();
    }
    // Verfahren zum Zeichnen des Kreises auf dem Canvas
    Circle.prototype.draw = function (context) {
        context.beginPath();
        context.lineWidth = 5;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
        context.closePath();
    };
    return Circle;
}());
// Array zum Speichern aller erzeugten Kreise
var all_circles = [];
// Schleife zum Erstellen von 20 zufälligen Kreisen
for (var numbers = 0; numbers < 20; numbers++) {
    var random_x = Math.random() * canvas.width;
    var random_y = Math.random() * canvas.height;
    var my_circle = new Circle(random_x, random_y, 40);
    all_circles.push(my_circle);
}
// Alle Kreise im Array zeichnen
all_circles.forEach(function (circle) {
    circle.draw(context);
});
