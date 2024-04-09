function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  let xBolinha = 300;
let vxBolinha = 5;
let diametro = 30;
let raio = diametro / 2;

function setup() {
createCanvas(600, 400);
}

function draw() {
background(0);
circle(xBolinha, 200, diametro);

xBolinha += vxBolinha;
if (xBolinha + raio > width || xBolinha - raio < 0) {
vxBolinha *= -1;
}
}
