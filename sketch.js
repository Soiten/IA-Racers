let carros = [];
let path;
let tela = "Main menu";

function setup() {
  const canvas = createCanvas(500, 500);
  setupUI(canvas);
  loadPath();
  loadActors();
}

function draw() {
  background(150);

  if (tela != "Game") return;
  path.drawPoints();

  for (let c of carros) {
    c.update();
    c.draw();
  }
}

function setupUI(mainFrame) {
  const a = createButton("Começar");
  a.mousePressed(() => {
    a.hide();
    tela = "Game";
  });
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

function loadActors() {
  // Cria vários carros posicionados próximos ao ponto inicial
  const start = path._points[0];
  for (let i = 0; i < 5; i++) {
    const a = new Actor();
    a.transform.position = start.copy().add(p5.Vector.random2D().mult(i * 10));
    carros.push(a);
  }
}
