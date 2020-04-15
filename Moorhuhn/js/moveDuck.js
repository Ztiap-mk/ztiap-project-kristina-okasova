window.onload = function() {
  canvas = document.getElementById("canvas");

  canvas.onmousedown = mouseDown;
  canvas.onmouseup = mouseUp;
  canvas.onmousemove = mouseMove;
}

var mouse = { x: 0, y: 0, pressed: false, selected: false};

function mouseDown() {
    mouse.pressed = true;
  }

function mouseUp() {
    mouse.pressed = false;
  }

function mouseMove() {
    mouse.x = event.pageX - canvas.offsetLeft;
    mouse.y = event.pageY - canvas.offsetTop;
    var ctx = canvas.getContext("2d");

    background = resourceManager.getImageSource('background');
    tree2 = resourceManager.getImageSource('tree2');
    duck3 = resourceManager.getImageSource('duck3');

    if (mouse.pressed) {
      ctx.save();
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(tree2, 530, 0, 120, canvas.height);

      ctx.fillStyle = "#e6e6e6";
      ctx.fillRect(745, 130, 170, 60);
      ctx.fillRect(745, 210, 170, 60);

      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText("Play!", 810, 167);
      ctx.fillText("Instructions", 780, 247);
      ctx.translate(mouse.x - 100, mouse.y - 80);
      ctx.drawImage(duck3, 0, 0, 200, canvas.height - 300);
      ctx.restore();
    }
  }
