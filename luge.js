const start = 50;
const finish = 450;

const raceTimes = [5, 40, 46];

function setup() {
  createCanvas(500, 500);
}


function draw() {
  background(50);
  stroke(255);
  line(start, 10, start, 100);
  line(finish, 10, finish, 100);


  for (let i = 0; i < raceTimes.length; i++) {
    let thisRaceTime = raceTimes[i];

    let x = map(millis() / 1000, 0, thisRaceTime, start, finish);
    ellipse(x, 20 + i * 15, 10, 10);
  }
}
