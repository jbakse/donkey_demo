function setup() {
  createCanvas(500, 500);


}

function draw() {
  background(50, 50, 50);

  fill(255, 0, 0);

  let locY = 0;
  for (let y = 0; y < 30; y++) {
    let locX = 0;
    const height = noise(y, frameCount * .01) * 60;;
    for (let x = 0; x < 30; x++) {
      const width = noise(y, x, frameCount * .01) * 60;
      rect(locX, locY, width, height);
      locX += width;
    }
    locY += height;
  }

}




// function draw() {
//   background(50, 50, 50);

//   fill(255, 0, 0);

//   let locY = 0;
//   for (let y = 0; y < 10; y++) {
//     const height = noise(y * 0.5, frameCount * 0.01) * 60 + 5;

//     let locX = 0;
//     for (let x = 0; x < 10; x++) {
//       const width = noise(y, x * 0.5, frameCount * 0.01) * 60 + 5;
//       rect(locX, locY, width, height);
//       locX += width;
//     }


//     locY += height;
//   }
// }
