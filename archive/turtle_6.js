// Turtle
// Basic turtle graphics implementation:
// https://en.wikipedia.org/wiki/Turtle_graphics

// The turtle's coordinate system uses pixels for distance and degrees for rotations
// 0 degrees is straight right (east); positive degrees are clockwise

// Turtle constructor
// takes optional x, y starting coordinates (default is center of sketch)
class Turtle {
  constructor(x, y) {
    // assign default values to x and y if they were not passed
    if (typeof x === "undefined") {
      x = width * 0.5;
    }
    if (typeof y === "undefined") {
      y = height * 0.5;
    }
    this.x = x;
    this.y = y;
    this.bearingRadians = 0;
    this.isPenDown = true;
    this._stateStack = [];
  }

  // moveTo instantly transports the turtle to the provided x, y location, drawing a line if pen is down
  moveTo(newX, newY) {
    if (this.isPenDown) {
      line(this.x, this.y, newX, newY);
    }
    this.x = newX;
    this.y = newY;
  }


  // moveForward moves the turtle along its current bearing, drawing a line if pen is down
  moveForward(distance) {
    var newX = this.x + cos(this.bearingRadians) * distance;
    var newY = this.y + sin(this.bearingRadians) * distance;
    this.moveTo(newX, newY);
  }


  // moveBackward moves the turtle backward from its current bearing, drawing a line if pen is down
  moveBackward(distance) {
    this.moveForward(-distance);
  }


  // turnTo changes the turtle's bearing to the provided angle in degrees
  turnTo(angleDegrees) {
    this.bearingRadians = radians(angleDegrees);
  }


  // turnRight rotates the turtle's bearing clockwise by the provided angle in degrees
  turnRight(amountDegrees) {
    this.bearingRadians += radians(amountDegrees);
  }


  // turnLeft rotates the turtle's bearing counter-clockwise by the provided angle in degrees
  turnLeft(amountDegrees) {
    this.bearingRadians -= radians(amountDegrees);
  }


  // penUp tells the turtle to move without drawing
  penUp() {
    this.isPenDown = false;
  }


  // penDown tells the turtle to draw a line when it moves
  penDown() {
    this.isPenDown = true;
  }


  // pushState records the turtle's current state (position, bearing, etc.) to a stack so that changes can be undone easily
  pushState() {
    this._stateStack.push({
      x: this.x,
      y: this.y,
      bearingRadians: this.bearingRadians,
      isPenDown: this.isPenDown
    });
  }


  // popState restores the turtle's state to the top recorded state on the stack
  popState() {
    if (this._stateStack.length === 0) {
      console.error(
        "Turtle: No states left on stack. Make sure your calls to .pushState and .popState are ballanced."
      );
      return;
    }
    var state = this._stateStack.pop();
    this.x = state.x;
    this.y = state.y;
    this.bearingRadians = state.bearingRadians;
    this.isPenDown = state.isPenDown;
  }


  // image draws and image centered on the turtle's current location and alligned with the turtle's rotation (forward = up)
  image(i, w, h) {
    // w, h are optional parameters to this function and to p5's image
    // p5's image function will draw the image at its "normal" size if w and h are undefined

    push();
    translate(this.x, this.y);
    rotate(this.bearingRadians + PI * 0.5);
    imageMode(CENTER);
    image(i, 0, 0, w, h);
    pop();
  }
}
