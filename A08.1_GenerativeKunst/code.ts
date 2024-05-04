// Canvas-Element aus dem DOM holen
let canvas = document.getElementById("canvas");
// 2D-Kontext des Canvas-Elements abrufen
let context = canvas.getContext("2d");

// Funktion, um eine zufällige RGB-Farbe zu generieren 
function getRandomColor() { 
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Klasse für Kreise mit Position für x uny y, den Radius und die zufällige Farbe
class Circle {
    constructor(xpos, ypos, radius) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = getRandomColor(); 
    }

    // Verfahren zum Zeichnen des Kreises auf dem Canvas
    draw(context) {
        context.beginPath();
        context.lineWidth = 5;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color; 
        context.stroke();
        context.closePath();
    }
}

// Array zum Speichern aller erzeugten Kreise
let all_circles = [];

// Schleife zum Erstellen von 20 zufälligen Kreisen
for (let numbers = 0; numbers < 20; numbers++) {
    let random_x = Math.random() * canvas.width; 
    let random_y = Math.random() * canvas.height; 

    let my_circle = new Circle(random_x, random_y, 40);
    all_circles.push(my_circle); 
}

// Alle Kreise im Array zeichnen
all_circles.forEach(circle => {
    circle.draw(context);
});