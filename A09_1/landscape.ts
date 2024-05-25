class Landscape {
    constructor() {
        this.clouds = [];
        for (let i = 0; i < 5; i++) {
            this.clouds.push(new Cloud(Math.random() * canvas.width, Math.random() * 200, 30, 'white', -1));
        }
    }

    draw(ctx, canvas) {
        // Himmel zeichnen
        ctx.fillStyle = '#FFADEF'; // Rosa
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Berge zeichnen
        this.drawMountains(ctx, canvas);

        // Wolken zeichnen (vor den Bergen)
        this.clouds.forEach(cloud => cloud.update(ctx, canvas));

        // Gras zeichnen (verschoben um 60px nach unten)
        ctx.fillStyle = '#FF69B4'; // Pink
        ctx.fillRect(0, canvas.height - 340, canvas.width, 400);

        // Teich zeichnen (verschoben um 60px nach unten, vergrößert)
        ctx.fillStyle = '#FF84CC'; // Pink
        ctx.beginPath();
        ctx.ellipse(200, canvas.height - 140, 200, 100, 0, 0, Math.PI * 2); // Hier wurden die Halbachsen des Ellipsenpfads geändert
        ctx.fill();

        // Baum zeichnen (verschoben um 60px nach unten, vergrößert und mit Blättern versehen)
        this.drawTree(ctx, canvas);
    }

    drawMountains(ctx, canvas) {
        // Berge zeichnen (verschoben um 60px nach unten)
        const mountainOffsetY = 60;

        ctx.fillStyle = '#FF61C9'; // Mittelrosa
        ctx.beginPath();
        ctx.moveTo(100, canvas.height - 340 + mountainOffsetY);
        ctx.lineTo(250, canvas.height - 540 + mountainOffsetY);
        ctx.lineTo(400, canvas.height - 340 + mountainOffsetY);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(300, canvas.height - 340 + mountainOffsetY);
        ctx.lineTo(450, canvas.height - 490 + mountainOffsetY);
        ctx.lineTo(600, canvas.height - 340 + mountainOffsetY);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(500, canvas.height - 340 + mountainOffsetY);
        ctx.lineTo(650, canvas.height - 590 + mountainOffsetY);
        ctx.lineTo(800, canvas.height - 340 + mountainOffsetY);
        ctx.closePath();
        ctx.fill();
    }

    drawTree(ctx, canvas) {
        const treeX = canvas.width - 45; // Position ganz rechts
        const treeHeight = canvas.height - 60; // Höhe des Baums
        const trunkWidth = 60; // Breite des Stamms

        // Stamm zeichnen
        ctx.fillStyle = '#861D7D'; // Dunkelpink
        ctx.fillRect(treeX - trunkWidth / 2, canvas.height - treeHeight - 60, trunkWidth, treeHeight);

        // Blätter zeichnen (weiter nach unten verschoben und vergrößert)
        ctx.fillStyle = '#FF1493'; // Tiefrosa
        this.drawLeafCluster(ctx, treeX, canvas.height - treeHeight - 80, 90);
        this.drawLeafCluster(ctx, treeX - 60, canvas.height - treeHeight - 40, 80);
        this.drawLeafCluster(ctx, treeX + 60, canvas.height - treeHeight - 40, 80);
        this.drawLeafCluster(ctx, treeX, canvas.height - treeHeight, 70);
        this.drawLeafCluster(ctx, treeX - 50, canvas.height - treeHeight + 40, 70);
        this.drawLeafCluster(ctx, treeX + 50, canvas.height - treeHeight + 40, 70);
    }

    drawLeafCluster(ctx, x, y, size) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
}