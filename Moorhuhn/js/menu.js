class Menu {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  }

  async start() {
      await resourceManager.init();

      this.background = resourceManager.getImageSource('background');
      this.tree2 = resourceManager.getImageSource('tree2');
      this.duck3 = resourceManager.getImageSource('duck3');
      this.music = resourceManager.getSoundSource('backgroundMusic');

      this.menu();
  }

  menu() {
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.duck3, 1000, 300, 200, this.canvas.height - 300);
    this.ctx.drawImage(this.tree2, 530, 0, 120, this.canvas.height);

    this.ctx.fillStyle = "#e6e6e6";
    this.ctx.fillRect(745, 130, 170, 60);
    this.ctx.fillRect(745, 210, 170, 60);

    this.ctx.fillStyle = "black";
    this.ctx.font = "20px Arial";
    this.ctx.fillText("Play!", 810, 167);
    this.ctx.fillText("Instructions", 780, 247);
    onclick(canvas);

    this.ctx.restore();
  }
}
