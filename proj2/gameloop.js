"use strict";
let canvas;
let context;

window.onload = init;

let wr1 = new Rook(0, 0, true, false);
let wk1 = new Knight(1, 0, true);
let wb1 = new Bishop(2, 0, true);
let wq = new Queen(3, 0, true);
let wk = new King(4, 0, true, false);
let wb2 = new Bishop(5, 0, true);
let wk2 = new Knight(6, 0, true);
let wr2 = new Rook(7, 0, true, false);
let wp1 = new Pawn(0, 1, true, false);
let wp2 = new Pawn(1, 1, true, false);
let wp3 = new Pawn(2, 1, true, false);
let wp4 = new Pawn(3, 1, true, false);
let wp5 = new Pawn(4, 1, true, false);
let wp6 = new Pawn(5, 1, true, false);
let wp7 = new Pawn(6, 1, true, false);
let wp8 = new Pawn(7, 1, true, false);

let br1 = new Rook(0, 7, false, false);
let bk1 = new Knight(1, 7, false);
let bb1 = new Bishop(2, 7, false);
let bq = new Queen(3, 7, false);
let bk = new King(4, 7, false, false);
let bb2 = new Bishop(5, 7, false);
let bk2 = new Knight(6, 7, false);
let br2 = new Rook(7, 7, false, false);
let bp1 = new Pawn(0, 1, false, false);
let bp2 = new Pawn(1, 6, false, false);
let bp3 = new Pawn(2, 6, false, false);
let bp4 = new Pawn(3, 6, false, false);
let bp5 = new Pawn(4, 6, false, false);
let bp6 = new Pawn(5, 6, false, false);
let bp7 = new Pawn(6, 6, false, false);
let bp8 = new Pawn(7, 6, false, false);

let whitepieces = [
    wb1, wk1, wb1, wq, wk, wb2, wk2, wr2,
    wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8 
];
let blackpieces = [
    bb1, bk1, bb1, bq, bk, bb2, bk2, br2,
    bp1, bp2, bp3, bp4, bp5, bp6, bp7, bp8 
];

function init(){
    canvas = document.getElementById('demo2');
    context = canvas.getContext('2d');

    canvas.addEventListener('mousedown', function(event) {

    });
    
    draw();

    window.requestAnimationFrame(gameLoop);
}

let secondsPassed = 0;
let oldTimeStamp = 0;
let fps = 240;

function gameLoop(timeStamp) {
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    fps = Math.round(1 / secondsPassed);

    if (false) {
        draw();

        window.requestAnimationFrame(gameLoop);
    }
}

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    
}