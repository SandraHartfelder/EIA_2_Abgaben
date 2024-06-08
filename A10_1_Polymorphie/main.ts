import { Bird } from './bird.js';
import { Insect } from './insect.js';
import { Cloud } from './cloud.js';
import { Landscape } from './landscape.js';

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const landscape = new Landscape();
const birds: (Bird | Insect)[] = [
    new Bird(100, 100, 20, '#BCFFFA', 2, 1),
    new Bird(200, 150, 20, '#B8BAFF', 3, -1),
    new Bird(300, 200, 20, '#D6B5FF', 2, 1),
    new Bird(400, 250, 20, '#FFB5D4', 3, -1),
    new Bird(500, 300, 20, '#FFB7B8', 2, 1),
    new Bird(600, 350, 20, '#C7FFE5', 3, -1),
    new Bird(700, 400, 20, '#C9FFFC', 2, 1),
    new Bird(800, 450, 20, '#A5C2FF', 3, -1)
];
const clouds: Cloud[] = [
    new Cloud(100, 100, 50, 'white', 1),
    new Cloud(300, 150, 40, 'white', 1.2),
    new Cloud(500, 80, 60, 'white', 1.5)
];

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    landscape.draw(ctx, canvas);

    birds.forEach(bird => bird.update(ctx, canvas));
    clouds.forEach(cloud => cloud.update(ctx, canvas));

    requestAnimationFrame(animate);
}

animate();