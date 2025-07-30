class Path {
  constructor() {
    this._points = [];
    this._lines = [];
  }

  addBezier(x1, y1, x2, y2, x3, y3, x4, y4) {
    const SAMPLE_STEP = 0.05;

    for (let pct = 0; pct <= 1; pct += SAMPLE_STEP) {
      if (pct > 1) break;
      const x = bezierPoint(x1, x2, x3, x4, pct);
      const y = bezierPoint(y1, y2, y3, y4, pct);
      this._points.push(createVector(x, y));
    }

    this._lines.push({ x1, y1, x2, y2, x3, y3, x4, y4 });
  }

  addLine(x1, y1, x2, y2) {
    const SAMPLE_STEP = 0.05;

    for (let pct = 0; pct <= 1; pct += SAMPLE_STEP) {
      if (pct > 1) break;
      const x = lerp(x1, x2, pct);
      const y = lerp(y1, y2, pct);
      this._points.push(createVector(x, y));
    }

    this._lines.push({ x1, y1, x2, y2 });
  }

  drawPoints() {
    fill("green");
    for (let v of this._points) {
      circle(v.x, v.y, 3);
    }
  }

  draw() {
    noFill();
    for (let l of this._lines) {
      if (l.x4 != undefined) {
        bezier(...Object.values(l));
      } else {
        line(...Object.values(l));
      }
    }
  }

  closestPoint(pos) {
    let indexClosest = 0;
    let minSq = Infinity;
    for (let i in this._points) {
      const distSq = this._points[i].copy().sub(pos).magSq();
      if (distSq < minSq) {
        minSq = distSq;
        indexClosest = i;
      }
    }
    return {
      closest: this._points[indexClosest],
      next: this._points[Number(indexClosest) + 1],
    };
  }
}
