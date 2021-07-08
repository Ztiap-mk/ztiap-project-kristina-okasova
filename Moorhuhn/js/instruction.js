class Instruction {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.background = resourceManager.getImageSource('background');
    this.tree2 = resourceManager.getImageSource('tree2');
    this.duck3 = resourceManager.getImageSource('duck3');
    this.xko = resourceManager.getImageSource('xko');
  }

  instruction() {
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
    this.ctx.drawImage(this.duck3, 1000, 300, 200, canvas.height - 300);
    this.ctx.drawImage(this.tree2, 530, 0, 120, canvas.height);

    this.ctx.fillStyle = "#e6e6e6";
    this.ctx.fillRect(700, 50, 350, 270);
    this.ctx.strokeStyle = "#404040";
    this.ctx.strokeRect(700, 50, 350, 270);

    this.ctx.fillStyle = "black";
    this.ctx.font = "15px Arial";
    this.ctx.fillText("Welcome to Moorhuhn!", 720, 90);
    this.ctx.fillText("After pressing the Play! button you will have", 720, 120);
    this.ctx.fillText("one and half minute to shoot as many ducks", 720, 140);
    this.ctx.fillText("as possible. Use left mouse button to shoot", 720, 160);
    this.ctx.fillText("and right mouse button to recharge. Try to", 720, 180);
    this.ctx.fillText("reach the highest score possible.", 720, 200);
    this.ctx.fillText("Hint: smaller ducks have greater value :)", 720, 230);
    this.ctx.fillText("Good luck", 720, 260);

    this.ctx.drawImage(this.xko, 1010, 70, 25, 25);

    this.ctx.restore();
  }
}
