"use strict";
let canvas;
let context;

window.onload = init;

let wr1, wk1, wb1, wq, wk, wb2, wk2, wr2,
    wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8;

let br1, bk1, bb1, bq, bk, bb2, bk2, br2,
    bp1, bp2, bp3, bp4, bp5, bp6, bp7, bp8;

    wr1 = new Rook(0, 0, true, false);
    wk1 = new Knight(1, 0, true);
    wb1 = new Bishop(2, 0, true);
    wq = new Queen(3, 0, true);
    wk = new King(4, 0, true, false);
    wb2 = new Bishop(5, 0, true);
    wk2 = new Knight(6, 0, true);
    wr2 = new Rook(7, 0, true, false);
    wp1 = new Pawn(0, 1, true, false);
    wp2 = new Pawn(1, 1, true, false);
    wp3 = new Pawn(2, 1, true, false);
    wp4 = new Pawn(3, 1, true, false);
    wp5 = new Pawn(4, 1, true, false);
    wp6 = new Pawn(5, 1, true, false);
    wp7 = new Pawn(6, 1, true, false);
    wp8 = new Pawn(7, 1, true, false);

    br1 = new Rook(0, 7, false, false);
    bk1 = new Knight(1, 7, false);
    bb1 = new Bishop(2, 7, false);
    bq = new Queen(3, 7, false);
    bk = new King(4, 7, false, false);
    bb2 = new Bishop(5, 7, false);
    bk2 = new Knight(6, 7, false);
    br2 = new Rook(7, 7, false, false);
    bp1 = new Pawn(0, 6, false, false);
    bp2 = new Pawn(1, 6, false, false);
    bp3 = new Pawn(2, 6, false, false);
    bp4 = new Pawn(3, 6, false, false);
    bp5 = new Pawn(4, 6, false, false);
    bp6 = new Pawn(5, 6, false, false);
    bp7 = new Pawn(6, 6, false, false);
    bp8 = new Pawn(7, 6, false, false);

let whitepieces = [
    wr1, wk1, wb1, wq, wk, wb2, wk2, wr2,
    wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8 
];
let blackpieces = [
    br1, bk1, bb1, bq, bk, bb2, bk2, br2,
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

    if (true) {
        draw();
    }

    window.requestAnimationFrame(gameLoop);
}

function drawBoard(){
    let bw = 240;
    let bh = 240;

    let p = 30;

    let instantStart = 1;

    for (var x = 30; x <= bw; x += 30) {
        for (var y = 30; y <= bh; y += 30) {
            if (((y / 30) % 2) == instantStart) {
                context.fillStyle = "#e89468";
                context.fillRect(x, y, 30, 30);
            }
            else {
                context.fillStyle = "#bf693d";
                context.fillRect(x, y, 30, 30);
            }
        }

        if (instantStart == 1)
            instantStart = 0;
        else
            instantStart = 1;
    }

    for (var x = 0; x <= bw; x += 240/8) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
        
    }

    for (var x = 0; x <= bh; x += 240/8) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }

    context.strokeStyle = "black";
    context.stroke();
}

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    drawBoard();

    whitepieces.forEach((piece) => {
        piece.draw(context);
    });
    
    blackpieces.forEach((piece) => {
        piece.draw(context);
    });
    
}