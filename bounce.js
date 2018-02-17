const ball = {
  x: 100,
  y: 100,
  dX: 0,
  dY: 0,
};

function setup() {
  createCanvas(500, 500);
  ball.dX = random(10);
  ball.dY = random(10);

}

function draw() {
  //   background(50, 50, 50);

  fill(0, 10);
  rect(0, 0, width, height);

  // step
  const steps = 10;

  for (let i = 0; i < steps; i++) {
    step(1 / steps);
  }

  drawScene();
}


function step(dTime) {

  // apply gravity
  ball.dY += 1 * dTime;

  // apply speed
  ball.x += ball.dX * dTime;
  ball.y += ball.dY * dTime;

  // forces
  if (ball.x > width) {
    ball.dX = -abs(ball.dX);
  }

  if (ball.x < 0) {
    ball.dX = abs(ball.dX);
  }

  if (ball.y > height) {
    ball.dY = -abs(ball.dY);
  }

  if (ball.y < 0) {
    ball.dY = abs(ball.dY);
  }


}

function drawScene() {
  noStroke();
  fill(255);
  ellipse(ball.x, ball.y, 100, 100);
}
