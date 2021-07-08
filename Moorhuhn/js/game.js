var obj = [];

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.background = resourceManager.getImageSource('background');
    this.tree1 = resourceManager.getImageSource('tree1');
    this.tree2 = resourceManager.getImageSource('tree2');
    this.shot = resourceManager.getImageSource('shot');
    this.duck3 = resourceManager.getImageSource('duck3');
    this.xko = resourceManager.getImageSource('xko');
    this.audioOn = resourceManager.getImageSource('audioOn');
    this.audioOf = resourceManager.getImageSource('audioOf');
  }

  start() {
    for (let i = 0; i < 5; i++)
      obj.push(new Duck());

    this.mainLoop();
  }

  mainLoop() {
    if (play) {
      //if (nShots <= 0)
        //onkey(this.canvas);

      this.move();
      this.render();

      requestAnimationFrame(() => this.mainLoop());
    }
  }

  move() {
    for (let i in obj)
      obj[i].move();
  }

  render() {
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);

    this.ctx.restore();

    for (let i in obj) {
      obj[i].draw(this.ctx);
    }

    this.ctx.save();

    this.ctx.drawImage(this.tree1, 90, 0, 120, canvas.height);
    this.ctx.drawImage(this.tree2, 530, 0, 120, canvas.height);
    this.ctx.drawImage(this.xko, 1250, 10, 25, 25);
    if (playSound)
      this.ctx.drawImage(this.audioOn, 1200, 10, 25, 25);
    else
      this.ctx.drawImage(this.audioOf, 1200, 10, 25, 25);
    for (let i = 0; i < nShots; i++) {
      let x = 950 + i * 30;
      this.ctx.drawImage(this.shot, x, 310, 220, 220);
    }

    this.ctx.restore();
  }
}
