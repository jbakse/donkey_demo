const foodLocations = [
  [250, 50],
  [50, 450],
  [450, 450],
];

const donkeyLocation = [100, 100];

function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
  noStroke();
}

function draw() {
  for (let i = 0; i < 100; ++i) {
    step();
  }
}

function step() {
  // draw food
  fill(255);
  foodLocations.forEach((loc) => {
    ellipse(loc[0], loc[1], 10, 10);
  });

  // draw donkey
  fill(255, 0, 0);
  rect(donkeyLocation[0], donkeyLocation[1], 1, 1);

  // move donkey
  const target = sample(foodLocations);
  donkeyLocation[0] = lerp(donkeyLocation[0], target[0], 0.5);
  donkeyLocation[1] = lerp(donkeyLocation[1], target[1], 0.5);
}

function sample(array) {
  const i = floor(random(array.length));
  return array[i];
}

// eslint-disable-next-line
function keyPressed() {
  if (key === 'S') {
    save('canvas.jpg');
  }
}
