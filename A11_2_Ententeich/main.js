// Deklaration der Canvas-Variable
var canvas = document.getElementById('myCanvas');
// Überprüfen, ob das Canvas-Element existiert
if (canvas !== null) {
    // Kontext des Canvas holen (2D-Zeichenkontext)
    var ctx = canvas.getContext('2d');
    // Beispielzeichnung: Rechteck mit roter Füllung
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 100); // x, y, width, height
}
else {
    console.error('Canvas-Element nicht gefunden!');
}
