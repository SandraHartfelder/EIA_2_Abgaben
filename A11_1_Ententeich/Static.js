var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    var Static = /** @class */ (function () {
        function Static(_position) {
            this.position = _position;
        }
        Static.drawBackground = function (horizon) {
            console.log("Background");
            crc2.fillStyle = "#93d444";
            crc2.fillRect(0, horizon, crc2.canvas.width, crc2.canvas.height - horizon);
            crc2.fillStyle = "#7ecaf5";
            crc2.fillRect(0, 0, crc2.canvas.width, horizon);
        };
        Static.drawMountains = function (horizon) {
            console.log("Mountains");
            var leftMountainHeight = 150;
            crc2.beginPath();
            crc2.moveTo(0, horizon);
            crc2.lineTo(crc2.canvas.width * 0.2, horizon - leftMountainHeight);
            crc2.quadraticCurveTo(crc2.canvas.width * 0.25, horizon - leftMountainHeight - 50, crc2.canvas.width * 0.3, horizon - leftMountainHeight);
            crc2.lineTo(crc2.canvas.width * 0.4, horizon);
            crc2.closePath();
            crc2.fillStyle = "#91c06c";
            crc2.fill();
            var middleMountainHeight = 250;
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width * 0.3, horizon);
            crc2.lineTo(crc2.canvas.width * 0.5, horizon - middleMountainHeight);
            crc2.quadraticCurveTo(crc2.canvas.width * 0.55, horizon - middleMountainHeight - 50, crc2.canvas.width * 0.6, horizon - middleMountainHeight);
            crc2.lineTo(crc2.canvas.width * 0.9, horizon);
            crc2.closePath();
            crc2.fillStyle = "#60a22c";
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width * 0.7, horizon);
            crc2.lineTo(crc2.canvas.width * 0.95, 50);
            crc2.quadraticCurveTo(crc2.canvas.width * 1.025, 20, crc2.canvas.width * 1.1, horizon);
            crc2.closePath();
            crc2.fillStyle = "#357305";
            crc2.fill();
        };
        Static.drawPond = function () {
            console.log("Pond");
            var pondWidth = 700;
            var pondHeight = 200;
            var pondX = (crc2.canvas.width - pondWidth) / 2;
            var pondY = crc2.canvas.height * 0.7 - pondHeight / 2;
            crc2.beginPath();
            crc2.ellipse(pondX + pondWidth / 2, pondY + pondHeight / 2, pondWidth / 2 + 10, pondHeight / 2 + 10, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "#8B4513";
            crc2.fill();
            crc2.beginPath();
            crc2.ellipse(pondX + pondWidth / 2, pondY + pondHeight / 2, pondWidth / 2, pondHeight / 2, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "#48CAE4";
            crc2.fill();
        };
        Static.drawTrees = function (treePositions) {
            console.log("Bäume zeichnen");
            // Baumstämme und Kronen zeichnen
            treePositions.forEach(function (pos) {
                Static.drawSingleTree(pos.x, pos.y);
            });
        };
        Static.drawSingleTree = function (x, y) {
            // Baumkrone
            var treeTopX = x + 10; // X-Position der Baumkrone
            var treeTopY = y - 50; // Y-Position der Baumkrone
            var treeTopRadius = 50; // Radius der Baumkrone
            var colors = ["#356b34", "#4a793a", "#5c8642"]; // Verschiedene Grüntöne
            // Baumstamm
            crc2.fillStyle = "#8B4513"; // Braune Farbe für den Stamm
            crc2.fillRect(x, y, 20, 100);
            // Baumkrone
            for (var i = 0; i < colors.length; i++) {
                crc2.beginPath();
                crc2.fillStyle = colors[i];
                crc2.arc(treeTopX, treeTopY, treeTopRadius, 0, Math.PI * 2);
                crc2.closePath();
                crc2.fill();
                treeTopY -= 30; // Verschiebung für den nächsten Kreis nach oben
                treeTopRadius -= 10; // Verringere den Radius für den nächsten Kreis
            }
        };
        return Static;
    }());
    L09_EntenteichClasses.Static = Static;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
