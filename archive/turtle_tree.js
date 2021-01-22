// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require http://compform.net/turtles/turtle/turtle.js

var myTurtle;

function setup() {
  pixelDensity(1);
  createCanvas(720, 480);
  myTurtle = new Turtle();
}

function draw() {
  background(50);

  noFill();
  stroke(255);
  strokeWeight(2);

  // move to starting position (without drawing)
  myTurtle.penUp();
  myTurtle.moveTo(200, 380);

  // put the pen down to draw
  myTurtle.penDown();
  myTurtle.turnTo(-90);

  // draw the square

  drawTo = frameCount;
  if (drawTo > 280) drawTo = 280;

  tree(map(drawTo, 0, 280, 50, 100), drawTo, 0, 1);

}

function tree(length, drawTo, soFar, thick) {
  if (thick <= 0) return;
  if (length < 1) return;

  strokeWeight(length * .2);
  myTurtle.moveForward(length);

  let newLength = length * .75;
  if (newLength > drawTo - soFar) {
    newLength = drawTo - soFar;
  }
  // left branch
  myTurtle.pushState();
  myTurtle.turnLeft(20 + noise(myTurtle.x * .05, myTurtle.y * .05) * 20);
  tree(newLength, drawTo, soFar + newLength, 1);
  myTurtle.popState();

  // right branch
  myTurtle.pushState();
  myTurtle.turnRight(20 + noise(myTurtle.x * .05, myTurtle.y * .05) * 20);
  tree(newLength, drawTo, soFar + newLength, 1);
  myTurtle.popState();


}
