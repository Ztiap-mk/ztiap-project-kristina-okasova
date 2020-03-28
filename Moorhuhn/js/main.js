var canvas;
var ctx;
var nShots = 8;
var obj = [];

function draw() {
  var img = new Image();
  img.src = "images/background.png";
  img.onload = function() {
    ctx.drawImage(img, 0, 40);
  };

  for (i in obj) {
    obj[i].drawDuck();
  }

  var imgShot = document.getElementById("image_shot");
  for (var k = 0; k < nShots; k++) {
    var x = 1000;
    var y = 350;

    ctx.drawImage(imgShot, x + k*30, y, 250, 250);
  }

  var imgTree1 = document.getElementById("image_tree1");
  ctx.drawImage(imgTree1, 100, 40, 120, canvas.height - 40);

  var imgTree2 = document.getElementById("image_tree2");
  ctx.drawImage(imgTree2, 610, 40, 120, canvas.height - 40);
}

function move() {
  for (var i in obj) {
    obj[i].moveDuck();
  }
}

function mainLoop() {
  move();
  draw();

  requestAnimationFrame(mainLoop);
}

window.onload = function() {
  canvas  = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  var x = canvas.width / 2 - 40;
  ctx.font = "25px Arial";
  ctx.fillText("Moorhuhn", x, 20);

  for (i = 0; i < 5; i++) {
    obj.push(new Duck());
  }

  requestAnimationFrame(mainLoop);
}
