class Actor {
  constructor() {
    // this.machine = new Machine();
    this.transform = new Transform(200, 200, 0);
  }

  draw() {
    const { position: pos } = this.transform;
    push();
    this.transform.applyTransform();
    triangle(-15, 20, -15, -20, 10, 0);
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
