let a;

function setup() {
  const canvas = createCanvas(400, 400);
  a = new Actor();
}

function draw() {
  background(150);
  a.draw();
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
