class Actor {
  constructor() {
    this.machine = new Machine(new Idle());
    this.transform = new Transform(200, 200, 0);
    this.vel = createVector(0, 0);
    this.maxVel = 4;
  }

  draw() {
    push();
    this.transform.applyTransform();
    triangle(-5, 2, -5, -2, 1, 0);
    pop();
  }
}

class Transform {
  constructor(x = 0, y = 0, rotation = 0) {
    this.position = createVector(x, y);
    this.rotation = rotation;
  }

  setPosition(x, y) {
    this.position.set(x, y);
  }

  setRotation(angle) {
    this.rotation = angle;
  }

  rotate(delta) {
    this.rotation += delta;
  }

  applyTransform() {
    translate(this.position.x, this.position.y);
    rotate(this.rotation);
  }
}
