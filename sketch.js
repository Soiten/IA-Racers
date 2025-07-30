let carros = [];
let path;

function setup() {
  const canvas = createCanvas(500, 500);
  setupUI(canvas);
  loadPath();
  loadActors();
}

function draw() {
  background(150);
  path.drawPoints();
}

function setupUI(mainFrame) {
  const canvasDiv = createDiv();
  canvasDiv.id("canvas-div");
  mainFrame.parent(canvasDiv);

  const menuDiv = createDiv();
  menuDiv.id("menu");
  menuDiv.position(width / 3, height / 2);

  const start = createButton("Começar");
  start.mouseClicked(startGame);
  start.id("comecar");
  start.parent(menuDiv);

  const explic = createButton("Explicação");
  explic.id("explic");
  explic.parent(menuDiv);
}

function startGame() {}

function loadPath() {
  path = new Path();
  path.addBezier(222, 44, 68, 325, 22, 400, 167, 462);
  path.addBezier(167, 462, 192, 436, 123, 290, 188, 287);
  path.addBezier(188, 287, 257, 282, 214, 450, 250, 464);
  path.addBezier(250, 464, 285, 478, 428, 357, 428, 357);
  path.addBezier(428, 357, 428, 357, 450, 167, 441, 154);
  path.addBezier(441, 154, 428, 142, 300, 250, 250, 71);
  path.addBezier(250, 71, 250, 71, 239, 27, 222, 44);
}

function loadActors() {}
