class AcelerarReto extends State {
  constructor(actor) {
    super();
    this.actor = actor;
  }

  run() {
    const pos = this.actor.transform.position;

    const { closest, next } = path.closestPoint(pos);
    if (!next) return;

    const toCurrent = p5.Vector.sub(closest, pos).normalize();
    const toNext = p5.Vector.sub(next, closest).normalize();

    const angle = toCurrent.angleBetween(toNext);

    if (abs(angle) > radians(25)) {
      this.machineState(new DesacelerarCurva(this.actor));
      return;
    }

    this.actor.vel = toNext.copy().setMag(this.actor.speed);
    this.actor.transform.position.add(this.actor.vel);
    this.actor.transform.setRotation(this.actor.vel.heading());
  }
}

class DesacelerarCurva extends State {
  constructor(actor) {
    super();
    this.actor = actor;
    this.frames = 0;
  }

  run() {
    this.frames++;
    if (this.frames < 30) {
      this.actor.vel.mult(0.95);
      this.actor.transform.position.add(this.actor.vel);
    } else {
      this.machineState(new AcelerarReto(this.actor));
    }
  }
}
