"use strict";
let canvas;
let context;

window.onload = init;

const buoy = new Buoy(1, 0.6, 0.5, 
    1, 9.82, 2 * Math.PI, 
    5, 3, 1, 
    1, 0, 0, 
    0, 0, 0, 
    0, 0, 0, 
    1/60);

function init(){
    canvas = document.getElementById('canvas');    context = canvas.getContext('2d');
    context = canvas.getContext('2d');

    canvas.addEventListener('mousedown', function(event) {
        let xpos = event.offsetX - 150;
        let ypos = 150 - event.offsetY;

        buoy.theta = Math.atan(xpos, ypos);
        buoy.dL = Math.sqrt(Mat.pow(xpos, 2) + Math.pow(ypos, 2)) - buoy.p;

        buoy.vx = 0;
        buoy.vy = 0;
    });

    window.requestAnimationFrame(gameLoop);
}

let secondsPassed;
let oldTimeStamp;
let fps;

function gameLoop(timeStamp) {
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    fps = Math.round(1 / secondsPassed);

    buoy.step(secondsPassed);

    draw();

    window.requestAnimationFrame(gameLoop);
}

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    buoy.draw(context);

    context.beginPath();
    context.moveTo(buoy.x + 150, buoy.y + 150);
    context.lineTo(150, 300);

    context.lineWidth = 2;
    context.strokeStyle = '#003300';
    context.stroke();

    context.fillStyle = '#0000ff';
    context.fillRect(150 + buoy.x - 25, 150 +buoy.wavepoint(buoy.x), 50, 1);
}