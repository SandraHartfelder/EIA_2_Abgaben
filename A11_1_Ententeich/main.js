var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    window.addEventListener("load", handleLoad);
    var line = 0.46;
    var moveables = []; // Liste für alle Moveables (Enten, Wolken, Bienen)
    var staticImageData;
    var addDuckButton;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_EntenteichClasses.crc2 = canvas.getContext("2d");
        L09_EntenteichClasses.crc2.fillRect(0, 0, L09_EntenteichClasses.crc2.canvas.width, L09_EntenteichClasses.crc2.canvas.height);
        canvas.width = 1440;
        canvas.height = 780;
        //Funktion Button zum hinzufügen einer neuen Ente
        addDuckButton = document.getElementById("addDuckButton");
        addDuckButton.addEventListener("click", addDuck);
        var horizon = L09_EntenteichClasses.crc2.canvas.height * line;
        // Zeichne statische Teile
        Static.drawBackground(horizon);
        Static.drawMountains(horizon);
        Static.drawPond();
        Static.drawSun();
        Static.drawFlowers([
            { x: 200, y: 400 },
            { x: 300, y: 450 },
            { x: 400, y: 380 },
            { x: 580, y: 350 },
            { x: 650, y: 380 },
            { x: 50, y: 400 },
            { x: 50, y: 500 },
            { x: 150, y: 650 },
            { x: 120, y: 550 },
            { x: 320, y: 550 },
            { x: 280, y: 630 },
            { x: 830, y: 360 },
            { x: 780, y: 390 },
            { x: 1000, y: 400 },
            { x: 1200, y: 370 },
            { x: 1250, y: 440 },
            { x: 1300, y: 540 },
            { x: 1120, y: 540 },
            { x: 1150, y: 600 },
            { x: 1050, y: 620 },
            { x: 1280, y: 650 },
            { x: 1400, y: 610 },
            { x: 1350, y: 680 },
            { x: 350, y: 690 },
            { x: 440, y: 420 },
            { x: 575, y: 710 },
            { x: 450, y: 710 },
            { x: 410, y: 640 },
            { x: 800, y: 720 },
            { x: 900, y: 670 },
            { x: 1000, y: 710 },
            { x: 1100, y: 690 },
            { x: 700, y: 695 },
            { x: 250, y: 710 },
            { x: 1250, y: 720 }
        ]);
        Static.drawSeaLeaf(920, 530, 50, 70);
        Static.drawTrees([
            { x: 100, y: 400 },
            { x: 300, y: 300 },
            { x: 500, y: 320 },
            { x: 700, y: 290 },
            { x: 900, y: 330 },
            { x: 1100, y: 380 },
            { x: 1300, y: 290 },
            { x: 50, y: 700 },
            { x: 200, y: 600 },
            { x: 1200, y: 600 },
            { x: 1350, y: 500 },
        ]);
        // Speichern des Bildes der statischen Elemente (Sonne, Berge, Teich, Bäume, Pflanzen)
        staticImageData = L09_EntenteichClasses.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // Erstellen der Wolken
        moveables.push(new Cloud(new Vector(100, 150), new Vector(100, 0), 100));
        moveables.push(new Cloud(new Vector(300, 100), new Vector(30, 0), 100));
        moveables.push(new Cloud(new Vector(500, 130), new Vector(60, 0), 100));
        // Erstellen der Bienen
        moveables.push(new Bee(L09_EntenteichClasses.crc2, new Vector(Math.random() * L09_EntenteichClasses.crc2.canvas.width, Math.random() * L09_EntenteichClasses.crc2.canvas.height), 15, new Vector(200, 0)));
        moveables.push(new Bee(L09_EntenteichClasses.crc2, new Vector(Math.random() * L09_EntenteichClasses.crc2.canvas.width, Math.random() * L09_EntenteichClasses.crc2.canvas.height), 15, new Vector(70, 0)));
        moveables.push(new Bee(L09_EntenteichClasses.crc2, new Vector(Math.random() * L09_EntenteichClasses.crc2.canvas.width, Math.random() * L09_EntenteichClasses.crc2.canvas.height), 15, new Vector(160, 0)));
        // Erstellen der Enten
        for (var i = 0; i < 5; i++) {
            moveables.push(createDuck());
        }
        setInterval(function () { return animate(); }, 40);
    }
    //Funktion für Button zum hinzufügen neuer Enten
    function addDuck() {
        moveables.push(createDuck());
    }
    function createDuck() {
        var r = Math.random();
        var state = "swim";
        var pondX = (L09_EntenteichClasses.crc2.canvas.width - 700) / 2;
        var pondY = L09_EntenteichClasses.crc2.canvas.height * 0.7 - 200 / 2;
        var x = pondX + Math.random() * 700;
        var y = pondY + Math.random() * 200;
        if (r < 0.3) {
            state = "stand";
            x = pondX + Math.random() * 700;
            y = pondY + Math.random() * 80;
        }
        else if (r > 0.8) {
            state = "dive";
            x = pondX + Math.random() * 700;
            y = pondY + Math.random() * 100;
        }
        var initialPosition = new Vector(x, y);
        var pondArea = { x: pondX, y: pondY, width: 700, height: 200 };
        var duck = new Duck(initialPosition, pondArea, state, false);
        return duck;
    }
    function animate() {
        // Zurücksetzen des gespeicherten Bild der statischen Teile 
        L09_EntenteichClasses.crc2.putImageData(staticImageData, 0, 0);
        // Bewegen + zeichnen der Moveables (Enten, Wolken, Bienen)
        moveables.forEach(function (moveable) {
            moveable.move(40 / 1000);
            moveable.draw();
        });
    }
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
