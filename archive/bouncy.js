'use strict';

const balls = [];


class Ball {
  constructor() {
    this.x = random(500);
    this.y = 50;
    this.dX = random(-1, 1);
    this.dY = random(-10, 10);
    this.radius = 14;
    this.kR = .8;
    this.kF = .99
    9;
  }
  step() {
    const time = .1;
    const gravity = 1;

    for (let l = 0; l < 10; l++) {
      // applying acceration forces
      this.dY += gravity * time;

      // air friction

      this.dY *= this.kF;

      // apply velocity to position
      this.x += this.dX * time;
      this.y += this.dY * time;

      if (this.y > 500 - this.radius) {
        this.y = 500 - this.radius;
        this.dY = -abs(this.dY) * this.kR;
      }
    }
  }
  draw() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

}

function setup() {
  createCanvas(500, 500);
  background(0, 50, 0);

  for (let x = 0; x < 10; x++) {
    balls.push(new Ball());
  }

  balls[0].kF = .98;

  // balls.push(new DetailedBall());

  frameRate(60);

}

function draw() {
  background(50);
  balls.forEach((ball) => {
    ball.step();
    ball.draw();
  });
}
