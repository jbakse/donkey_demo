const colorFreq = 0.02;
const jitterFreq = 0.1;

// Rectangle Class
// holds the boundaries of a rectangle and has properties to split into two
class Rectangle {
  constructor(_x, _y, _w, _h) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
  }

  splitLeft(split) {
    const r1 = new Rectangle(this.x, this.y, this.w * split, this.h);
    const r2 = new Rectangle(this.x + this.w * split, this.y, this.w * (1 - split), this.h);
    return [r1, r2];
  }

  splitDown(split) {
    const r1 = new Rectangle(this.x, this.y, this.w, this.h * split);
    const r2 = new Rectangle(this.x, this.y + this.h * split, this.w, this.h * (1 - split));
    return [r1, r2];
  }
}


const mainRect = new Rectangle(0, 0, 512, 512);

function setup() {
  createCanvas(512, 512);
  colorMode(HSB, 1);
  noFill();
  noStroke();
  frameRate(1);
  noiseDetail(1);
}


function draw() {
  background(0, 0, 0);
  recursiveDrawRectangles(mainRect, 16);
  noLoop();
}

function recursiveDrawRectangles(r, depth) {
  if (depth < 0) {
    return;
  }


  // pull some variation from noise
  const colorNoise = noise(r.x * colorFreq, r.y * colorFreq);
  let blacknessNoise = noise(r.x * colorFreq, r.y * colorFreq, 1);
  // since colorNoise and blacknessNoise are pulled from the same X and Y,
  // but not the same Z, they will have different values
  // -but- because the Zs are close (.5 apart) the z's will be somewhat related
  // Lower .5 to .1 and the values will be very close
  // Raise it to 1 and they will be pretty much unrelated.

  // I don't want to make any of the colors full black, so I map this to a better range.
  blacknessNoise = map(blacknessNoise, 0, 1, 0.5, 1.5);

  const offsetXNoise = noise(r.x * jitterFreq, r.y * jitterFreq, 1) * 20 - 10;
  const offsetYNoise = noise(r.x * jitterFreq, r.y * jitterFreq, 2) * 20 - 10;
  let rNoise = noise(r.x * jitterFreq, r.y * jitterFreq, 3);
  rNoise = map(rNoise, 0, 1, -0.05, 0.05);

  // draw rect
  fill(colorNoise, 1, blacknessNoise, 0.3);
  rotRect(r.x + offsetXNoise, r.y + offsetYNoise, r.w, r.h, rNoise);


  // subdivide
  // even chance of spliting right or left
  const rand = random();
  let r1, r2;
  if (rand < 0.5) {
    [r1, r2] = r.splitLeft(0.5);
  } else {
    [r1, r2] = r.splitDown(0.5);
  }


  if (random() > 0.90) {
    return;
  }

  // recurse and draw again
  recursiveDrawRectangles(r1, depth - 1);
  recursiveDrawRectangles(r2, depth - 1);


}

function rotRect(x, y, w, h, r) {
  push();
  translate(x + w * 0.5, y + h * 0.5);
  rotate(r);
  rect(-w * 0.5, -h * 0.5, w, h);
  pop();
}


function keyPressed() {
  if (key === 'S') {
    save('canvas.jpg');
  }

  if (key === ' ') {
    draw();
  }
}

// https://jsbin.com/wimuhikahi/edit?html,js,output
