class Sounds {
  constructor() {
    this.music = resourceManager.getSoundSource('backgroundMusic');
  }

  background() {
    this.music.play();
  }

  pause() {
    this.music.pause();
  }

}
