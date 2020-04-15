class Duck {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.image = resourceManager.getImageSource('duck1');

    this.dir = Math.floor(Math.random() * 2);

    if (this.dir == 0)
      this.x = 0;
    else this.x = canvas.width;

    this.y = Math.random() * (canvas.height - 300) + 110;
    this.dx = Math.random() * 2;
    this.size = (Math.random() * 2) + 2;
  }

  move() {
    const canvas = this.canvas;
    if (this.x > canvas.width) {
      this.x = 0;
      this.y = Math.random() * (canvas.height - 300) + 110;
      this.dx = Math.random() * 2;
      this.dir = Math.floor(Math.random() * 2);
      this.size = (Math.random() * 2) + 2;
    }
    else if (this.x < 0) {
      this.x = canvas.width;
      this.y = Math.random() * (canvas.height - 300) + 110;
      this.dx = Math.random() * 2;
      this.dir = Math.floor(Math.random() * 2);
      this.size = (Math.random() * 2) + 2;
    }

    if (this.dir == 0) {
      if (this.dx < 3)
        this.x += (this.dx + 2);
      else this.x += this.dx;
    }
    else {
      if (this.dx < 3)
        this.x -= (this.dx + 2);
      else this.x -= this.dx;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    if (this.dir == 0)
      ctx.scale((-1)*this.size, this.size);
    if (this.dir == 1)
      ctx.scale(this.size, this.size);
    ctx.drawImage(this.image, -20, -20, 40, 40);
    ctx.restore();
  }
}
