// Zugriff auf das Canvas-Element und den Kontext
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
// Erstellung der Landschaft, Vögel/Enten, Insekten und Wolken
var landscape = new Landscape();
var birdColors = ['#FF5733', '#3366FF', '#66FF33', '#FF33FF', '#FFFF33', '#33FFFF', '#FF3366', '#333333', '#CCCCCC', '#9900FF'];
var birds = birdColors.map(function (color, index) { return new Bird(Math.random() * canvas.width, Math.random() * canvas.height, 20, color, Math.random() * 4 - 2, Math.random() * 4 - 2); });
var insects = [];
for (var i = 0; i < 10; i++) {
    insects.push(new Insect(Math.random() * canvas.width, Math.random() * canvas.height, 5, 'black', Math.random() * 4 - 2, Math.random() * 4 - 2));
}
var clouds = [];
for (var i = 0; i < 5; i++) {
    clouds.push(new Cloud(Math.random() * canvas.width, Math.random() * 200, 30, 'white', -1));
}
// Animationsschleife
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas bereinigen
    landscape.draw(ctx, canvas); // Landschaft zeichnen
    clouds.forEach(function (cloud) { return cloud.update(ctx, canvas); }); // Wolken aktualisieren und zeichnen
    birds.forEach(function (bird) { return bird.update(ctx, canvas); }); // Vögel/Enten aktualisieren und zeichnen
    insects.forEach(function (insect) { return insect.update(ctx, canvas); }); // Insekten aktualisieren und zeichnen
    requestAnimationFrame(animate); // Nächsten Frame anfordern
}
animate(); // Animation starten
