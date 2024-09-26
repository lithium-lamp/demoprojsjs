"use strict";
let canvas;
let context;

window.onload = init;

let dx = 0;
let dy = 0;
let vx = 0;
let vy = 0; 

let ball1 = new Ball(50, 260, 10, 0.8, "#4287f5");
let ball2 = new Ball(100, 250, 5, 0.4, "#298227");
let ball3 = new Ball(150, 230, 10, 0.1, "#b89cb8");
let ball4 = new Ball(200, 230, 10, 0.9, "#ffc7e6");
let ball5 = new Ball(250, 230, 30, 0.5, "#9c0e38");

let spring1 = new Spring(50, 10, 50, 20, 0.3, "#38f269");
let spring2 = new Spring(150, 5, 50, 10, 0.3, "#c74e91");
let spring3 = new Spring(250, 5, 50, 10, 0.3, "#c7d2ff");

const balls = [ball1, ball2, ball3, ball4, ball5];
const springs = [spring1, spring2, spring3];

function init(){
    canvas = document.getElementById('demo3');
    context = canvas.getContext('2d');

    canvas.addEventListener('mousedown', function(event) {
        let xpos = event.offsetX;
        let ypos = 300 - event.offsetY;

        let newselection = false;

        balls.forEach((ball) => {
            if (newselection) return;

            if (xpos < ball.pos_x - ball.radius || xpos > ball.pos_x + ball.radius) {
                return;
            }

            if (ypos < ball.pos_y - ball.radius || ypos > ball.pos_y + ball.radius) {
                return;
            }

            if (ball.selected) ball.selected = false;
            else ball.selected = true;
            newselection = true;
        });


        if (newselection) {
            
        }
        else {
            balls.forEach((ball) => {
                if (ball.selected) {
                    ball.pos_x = xpos;
                    ball.pos_y = ypos;
                    ball.vel_x = 0;
                    ball.vel_y = 0;
                }
            });
        }
    });
    

    window.requestAnimationFrame(gameLoop);
}

let secondsPassed = 0;
let oldTimeStamp = 0;
let fps = 240;

function gameLoop(timeStamp) {
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    fps = Math.round(1 / secondsPassed);

    balls.forEach((ball) => {
        ball.step(fps, dx, dy, vx, vy);    
    });

    /*

    balls.forEach((ball) => {
        let collision = ball.collision();

        if (collision == null) {
            return;
        }


    });

    springs.forEach((spring) => {
        
    });
    */
    draw();

    window.requestAnimationFrame(gameLoop);
}

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    springs.forEach((spring) => {
        spring.draw(context);
    });

    balls.forEach((ball) => {
        ball.draw(context);    
    });
}