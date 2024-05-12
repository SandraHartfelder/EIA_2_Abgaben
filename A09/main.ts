import Sky from './sky';
import Mountains from './mountains';
import Trees from './trees';
import Bird from './birds';
import Insect from './insects';

function main(): void {
    // Zeichne den Himmel
    const sky = new Sky();
    sky.draw();

    // Zeichne die Berge
    const mountains = new Mountains();
    mountains.draw();

    // Zeichne die Bäume
    const trees = new Trees();
    trees.draw();

    // Erstelle und zeichne Vögel
    const birds = [
        new Bird('sparrow', 'brown', [100, 100]),
        new Bird('eagle', 'white', [200, 150]),
        // Weitere Vögel hinzufügen...
    ];
    birds.forEach(bird => bird.draw());

    // Erstelle und zeichne Fluginsekten
    const insects = [
        new Insect('bee', 'yellow', [50, 200]),
        new Insect('butterfly', 'blue', [150, 250]),
        // Weitere Insekten hinzufügen...
    ];
    insects.forEach(insect => insect.draw());
}

main();