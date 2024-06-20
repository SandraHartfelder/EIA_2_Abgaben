// Hauptskript für Animation und Interaktion
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const objects: Drawable[] = [];
objects.push(new Landscape());
objects.push(new Bird(100, 100, 20, '#BCFFFA', 2, 1));
objects.push(new Bird(200, 150, 20, '#B8BAFF', 3, -1));
objects.push(new Bird(300, 200, 20, '#D6B5FF', 2, 1));
objects.push(new Bird(400, 250, 20, '#FFB5D4', 3, -1));
objects.push(new Bird(500, 300, 20, '#FFB7B8', 2, 1));
objects.push(new Bird(600, 350, 20, '#C7FFE5', 3, -1));
objects.push(new Bird(700, 400, 20, '#C9FFFC', 2, 1));
objects.push(new Bird(800, 450, 20, '#A5C2FF', 3, -1));

for (let i = 0; i < 10; i++) {
    objects.push(new Insect(Math.random() * canvas.width, Math.random() * canvas.height, 5, '#000000'));
}

for (let i = 0; i < 5; i++) {
    objects.push(new Cloud(Math.random() * canvas.width, Math.random() * 200, 30, 'white', -1));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen
    objects.forEach(obj => obj.update(ctx, canvas)); // Objekte aktualisieren und zeichnen
    requestAnimationFrame(animate); // Nächsten Frame anfordern
}

animate(); // Animation starten

// Mausinteraktion
canvas.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    objects.forEach(obj => {
        if (obj instanceof Bird && Math.hypot(obj.x - mouseX, obj.y - mouseY) < 50 && obj.y > canvas.height - 150) {
            obj.dx = (mouseX - obj.x) * 0.05;
            obj.dy = (mouseY - obj.y) * 0.05;
        }
    });
});