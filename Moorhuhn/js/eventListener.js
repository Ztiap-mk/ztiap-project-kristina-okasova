function onclick(canvas) {
  canvas.addEventListener("click", function(event) {
    let mouseX = event.pageX - canvas.offsetLeft;
    let mouseY = event.pageY - canvas.offsetTop;
    let selected;

    const menu = new Menu();
    const instruction = new Instruction();
    const game = new Game();
    const gameOver = new GameOver();
    const sound = new Sounds();

    if (play && (mouseX < 1200 || mouseX > (1200 + 35)) && (mouseY < 10 || mouseY > 45))
      nShots--;

    if (!play && mouseX > 745 && mouseX < (745 + 170) && mouseY > 130 && mouseY < (130 + 60)) {
      play = true;
      nShots = 8;
      score = 0;
      sound.background();
      game.start();
    }
    else if (play && mouseX > 1250 && mouseX < (1250 + 35) && mouseY > 10 && mouseY < 45) {
      play = false;
      obj.length = 0;
      sound.pause();
      gameOver.gameOverScreen();
    }
    else if (!play && mouseX > 745 && mouseX < (745 + 170) && mouseY > 210 && mouseY < (210 + 60))
      instruction.instruction();

    else if (!play && mouseX > 1010 && mouseX < (1010 + 35) && mouseY > 70 && mouseY < (70 + 35))
      menu.start();

    else if (play && mouseX > 1200 && mouseX < (1200 + 35) && mouseY > 10 && mouseY < 45) {
      if (playSound)
        sound.pause();
      else
        sound.background();

      playSound = !playSound;
    }

    else if (play) {
      for (let i in obj) {
        let duck = obj[i];
        if (nShots > 0 && play && mouseX > duck.x && mouseX < (duck.x + duck.size + 50) && mouseY > (duck.y - 10) && mouseY < (duck.y + duck.size + 50)) {
          duck.x = -1;
          if (duck.size < 2.7)
            score += 20;
          else if (duck.size < 3.4)
            score += 10;
          else
            score += 5;

          //sound.quack();
          break;
        }
      }
    }

    return false;
  }, false);
}

//function onkey(canvas) {
  //console.log("funguje volanie funkcie");
  //canvas.addEventListener("keypress", function(event) {
    //console.log("nefunguje keyCode");
    //if (keyCode == 32) {
      //nShots = 8;
    //}

    //return false;
  //}, false);
//}
