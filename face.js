let faceImage;
let marksImage;

function preload() {

  faceImage = loadImage('images/face.png');
  marksImage = loadImage('images/marks.png');
}

function setup() {
  createCanvas(500, 500);
  noLoop();
  noiseDetail(1);
}

function draw() {
  background(150, 0, 0);

  faceImage.loadPixels();
  marksImage.loadPixels();



  for (let y = 0; y < faceImage.height; y++) {
    for (let x = 0; x < faceImage.height; x++) {

      // get the colors from the face pixel
      const c = getPixel(faceImage, x, y);

      // rescale them from 0-255 to 0-1
      c[0] /= 255;
      c[1] /= 255;
      c[2] /= 255;
      c[3] /= 255;

      // get the marks color
      const c2 = getPixel(marksImage, x, y);
      c2[0] /= 255;
      c2[1] /= 255;
      c2[2] /= 255;
      c2[3] /= 255;

      // mix
      c[0] = c[0] / c2[0];
      c[1] = c[1] / c2[1];
      c[2] = c[2] / c2[2];


      // scale back up to 0 - 255
      c[0] *= 255;
      c[1] *= 255;
      c[2] *= 255;
      c[3] *= 255;

      // write it out
      setPixel(faceImage, x, y, c);
    }
  }

  faceImage.updatePixels();
  marksImage.updatePixels();

  image(faceImage, 0, 0);

}


function clamp(value, minimum, maximum) {
  if (value < minimum) return minimum;
  if (value > maximum) return maximum;
  return value;
}


function setPixel(img, x, y, color) {
  const clampX = clamp(x, 0, img.width - 1);
  const clampY = clamp(y, 0, img.height - 1);
  if (clampX !== x || clampY !== y) {
    return;
  }

  const i = (clampY * img.width + clampX) * 4;
  img.pixels[i] = color[0];
  img.pixels[i + 1] = color[1];
  img.pixels[i + 2] = color[2];
  img.pixels[i + 3] = color[3];
}


function getPixel(img, x, y) {
  const clampX = clamp(x, 0, img.width - 1);
  const clampY = clamp(y, 0, img.height - 1);
  //   if (clampX !== x || clampY !== y) {
  //     return [0, 0, 0, 0];
  //   }
  const i = (clampY * img.width + clampX) * 4;
  return [
    img.pixels[i],
    img.pixels[i + 1],
    img.pixels[i + 2],
    img.pixels[i + 3],
  ];
}
