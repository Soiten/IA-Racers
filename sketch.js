let carro;
let path;
let tela = "Main menu";

function setup() {
  const canvas = createCanvas(500, 500);
  setupUI(canvas);
  loadPath();
  loadActor();
}

function draw() {
  background(150);

  if (tela != "Game") return;
  path.drawPoints();
  path.draw();

  carro.update();
  carro.draw();
}

function setupUI(mainFrame) {
  const a = createButton("Começar");
  a.position(200, 200);
  a.mousePressed(() => {
    a.hide();
    startGame();
  });
}

function startGame() {
  tela = "Game";
}

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

function loadActor() {
  //começa aleatoriamente perto da linha de partida (canto esquerdo superior)
  const start = path._points[0];
  carro = new Actor();
  carro.transform.setPosition(220, 50);
  carro.transform.setRotation(HALF_PI);
}
