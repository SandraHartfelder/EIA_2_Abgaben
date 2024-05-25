// Zugriff auf das Canvas-Element und den Kontext
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Erstellung der Landschaft, Vögel/Enten, Insekten und Wolken
const landscape = new Landscape();
const birds = [
    new Bird(100, 100, 20, '#8B4513', 2, 1),
    new Bird(200, 150, 20, '#808080', 3, -1)
];

// Vögel in verschiedenen Farben hinzufügen
for (let i = 0; i < 8; i++) {
    const colors = ['#BCFFFA', '#B8BAFF', '#D6B5FF', '#FFB5D4', '#FFB7B8', '#C7FFE5', '#C9FFFC6', '#A5C2FF'];
    birds.push(new Bird(Math.random() * canvas.width, Math.random() * canvas.height, 20, colors[i], Math.random() * 2 + 1, Math.random() * 2 - 1));
}

const insects = [];
for (let i = 0; i < 10; i++) {
    insects.push(new Insect(Math.random() * canvas.width, Math.random() * canvas.height, 5, 'black'));
}

const clouds = [];
for (let i = 0; i < 3; i++) { // Reduzierte Anzahl der Wolken
    clouds.push(new Cloud(Math.random() * canvas.width, Math.random() * 200, 15, 'white', -1));
}

// Animationsschleife
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas bereinigen

    landscape.draw(ctx, canvas); // Landschaft zeichnen

    // Wolken hinter dem Baum, aber vor den Bergen zeichnen
    clouds.forEach(cloud => cloud.update(ctx, canvas)); 

    birds.forEach(bird => bird.update(ctx, canvas)); // Vögel/Enten aktualisieren und zeichnen
    insects.forEach(insect => insect.update(ctx, canvas)); // Insekten aktualisieren und zeichnen

    requestAnimationFrame(animate); // Nächsten Frame anfordern
}

animate(); // Animation starten



