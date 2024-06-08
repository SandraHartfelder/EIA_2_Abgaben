"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bird_js_1 = require("./bird.js");
var cloud_js_1 = require("./cloud.js");
var landscape_js_1 = require("./landscape.js");
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var landscape = new landscape_js_1.Landscape();
var birds = [
    new bird_js_1.Bird(100, 100, 20, '#BCFFFA', 2, 1),
    new bird_js_1.Bird(200, 150, 20, '#B8BAFF', 3, -1),
    new bird_js_1.Bird(300, 200, 20, '#D6B5FF', 2, 1),
    new bird_js_1.Bird(400, 250, 20, '#FFB5D4', 3, -1),
    new bird_js_1.Bird(500, 300, 20, '#FFB7B8', 2, 1),
    new bird_js_1.Bird(600, 350, 20, '#C7FFE5', 3, -1),
    new bird_js_1.Bird(700, 400, 20, '#C9FFFC', 2, 1),
    new bird_js_1.Bird(800, 450, 20, '#A5C2FF', 3, -1)
];
var clouds = [
    new cloud_js_1.Cloud(100, 100, 50, 'white', 1),
    new cloud_js_1.Cloud(300, 150, 40, 'white', 1.2),
    new cloud_js_1.Cloud(500, 80, 60, 'white', 1.5)
];
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    landscape.draw(ctx, canvas);
    birds.forEach(function (bird) { return bird.update(ctx, canvas); });
    clouds.forEach(function (cloud) { return cloud.update(ctx, canvas); });
    requestAnimationFrame(animate);
}
animate();
