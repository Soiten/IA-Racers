class Actor {
  constructor() {
    this.machine = new Machine(new AcelerarReto(this));
    this.transform = new Transform(200, 200, 0);
    this.vel = createVector(0, 0);
    this.maxVel = 4;
    this.speed = 2;
    this.color = "black";
  }

  draw() {
    push();
    fill(this.color);
    this.transform.applyTransform();
    triangle(-7, 3, -7, -3, 3, 0);
    pop();
  }

  update() {
    this.machine.update();
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
