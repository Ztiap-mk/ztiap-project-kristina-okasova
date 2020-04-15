class GameOver {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.background = resourceManager.getImageSource('background');
    this.tree2 = resourceManager.getImageSource('tree2');
    this.duck3 = resourceManager.getImageSource('duck3');
  }

  gameOverScreen() {
      this.ctx.save();
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
      this.ctx.drawImage(this.duck3, 1000, 300, 200, canvas.height - 300);
      this.ctx.drawImage(this.tree2, 530, 0, 120, canvas.height);

      this.ctx.fillStyle = "#e6e6e6";
      this.ctx.fillRect(745, 130, 170, 60);

      this.ctx.fillStyle = "black";
      this.ctx.font = "20px Arial";
      this.ctx.fillText("GAME OVER!", 770, 100);
      this.ctx.fillText("Play Again!", 780, 167);
      this.ctx.fillText("Score: " + score, 180, 190);
      this.ctx.restore();
  }
}
