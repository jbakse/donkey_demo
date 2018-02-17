const donkeyLocation = {
  x: 50,
  y: 50,
};


const foodLocations = [{
  x: 250,
  y: 50,
}, {
  x: 50,
  y: 450,
}, {
  x: 450,
  y: 450,
}];


function setup() {


  createCanvas(500, 500);
  ellipseMode(CENTER);
  noStroke();
  background(50, 50, 50);
}

function draw() {
  for (let i = 0; i < 100; i++) {
    step();
  }
}

function step() {

  // draw food
  fill(255);
  foodLocations.forEach((loc) => {
    ellipse(loc.x, loc.y, 20);
  });


  // move donkey
  const foodLocation = sampleArray(foodLocations);
  donkeyLocation.x = lerp(donkeyLocation.x, foodLocation.x, 0.5);
  donkeyLocation.y = lerp(donkeyLocation.y, foodLocation.y, 0.5);

  // draw donkey
  fill(255, 0, 0);
  rect(donkeyLocation.x, donkeyLocation.y, 1, 1);

}

function sampleArray(array) {
  const index = floor(random(foodLocations.length));
  return array[index];
}
