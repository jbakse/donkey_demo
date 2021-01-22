console.log("hi1");

function setup() {
  createCanvas(500, 500);
  console.log("hi");

}

function draw() {
  background(50, 50, 50);

  fill(map(mouseY, 0, 500, 0, 255), 0, 0);
  rect(10, 10, map(mouseX, 0, 500, 0, 100, true), 100);


  fill(255, 255, 0);
  rect(110, 110, 100, 100);

  fill(0, 0, 255);
  rect(210, 210, 100, 100);






}
