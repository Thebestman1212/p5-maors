let sceneNum = 0;
let dot = new Mover();
let dots = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 4000; i++) {
    dots[i] = new Mover();
  }
}

function draw() {
  mouseClicked = function() {
    sceneNum++;
  }
  if (sceneNum == 0) {
    background(255, 0, 255);
    fill(7, 14, 145);
    textSize(40);
    text("maor psycho art", 100, 100);
    textSize(30);
    text("press mouse button", 12, 200)
  } else if (sceneNum == 1) {
    background(255);
    textSize(45);
    text("stop now baby",20,350);

    for (let i = 0; i < 4000; i++) {
      dots[i].update();
      dots[i].show();
    }

    ellipse(mouseX, mouseY, 10, 10);
  } else if (sceneNum == 5) {
    background(255, 0, 0);
    textSize(69);
    text("yes im good ", 15, 50);
    text("now i get A+ ", 15, 150);
    text(" 😎 ", 15, 250);
  }

    else if (sceneNum == 3) {
  background(255);
  textSize(35);
  text("hammer time", 50, 200);
   
    }else if (sceneNum == 4)  {
  
  
    for (let i = 0; i < 4000; i++) {
      dots[i].update();
      dots[i].show();
    }
   }                           
}
