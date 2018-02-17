let r1Slider;
let r2Slider;
let turn1Slider;
let turn2Slider;
let a1 = 0;
let a2 = 0;

let brightSlider;
let sizeSlider;
let noiseStrengthSlider;
let noiseSpeedSlider;

/* global createSlider createP */

function setup() {
  createCanvas(500, 500);
  createP('r1');
  r1Slider = createSlider(0, 1000, 750);
  createP('r2');
  r2Slider = createSlider(0, 1000, 250);
  createP('turn1');
  turn1Slider = createSlider(0, 1000, 250);
  createP('turn2');
  turn2Slider = createSlider(0, 1000, 750);

  createP('bright');
  brightSlider = createSlider(0, 1000, 100);
  createP('size');
  sizeSlider = createSlider(0, 1000, 100);

  createP('noiseStrength');
  noiseStrengthSlider = createSlider(0, 1000, 100);
  createP('noiseSpeed');
  noiseSpeedSlider = createSlider(0, 1000, 100);

  background(50, 50, 50);

  noFill();
  noStroke();
  blendMode(ADD);
  colorMode(HSB, 1);
}

function mousePressed() {
  blendMode(BLEND);
  background(0, 0, 0);
}

function draw() {


  for (let i = 0; i < 1000; i++) {
    step();
  }
}

function step() {
  const r1 = map(r1Slider.value(), 0, 1000, 0, 100);
  const r2 = map(r2Slider.value(), 0, 1000, 0, 100);
  const turn1 = map(turn1Slider.value(), 0, 1000, 0, 0.01);
  const turn2 = map(turn2Slider.value(), 0, 1000, 0, 0.01);
  const size = map(sizeSlider.value(), 0, 1000, 1, 10);
  const bright = map(brightSlider.value(), 0, 1000, 0, 0.1);
  const noiseStrength = map(noiseStrengthSlider.value(), 0, 1000, 0, 100);
  const noiseSpeed = map(noiseSpeedSlider.value(), 0, 1000, 0, 0.5);

  a1 += turn1;
  a2 += turn2;

  const a2Noisy = a2 + noise(frameCount * noiseSpeed) * noiseStrength;

  let x = width * 0.5;
  let y = height * 0.5;


  x += sin(a1) * r1;
  y -= cos(a1) * r1;

  x += sin(a2Noisy) * r2;
  y -= cos(a2Noisy) * r2;


  colorMode(HSB, 1);
  blendMode(ADD);
  fill(0, 1, bright);
  ellipse(x, y, size, size);
}


// history https://jsbin.com/jibuvuvesi/edit?js,output
// history https://jsbin.com/munecawaqo/edit?js,output


function keyPressed() {
  if (key === 'S') {
    save('canvas.jpg');
  }
}
