const IMAGES = [
  {name: 'background', src: 'images/background.png'},
  {name: 'duck1', src: 'images/duck1.png'},
  {name: 'duck2', src: 'images/duck2.png'},
  {name: 'duck3', src: 'images/duck3.png'},
  {name: 'shot', src: 'images/shot.png'},
  {name: 'cursor', src: 'images/cursor.png'},
  {name: 'tree1', src: 'images/tree1.png'},
  {name: 'tree2', src: 'images/tree2.png'},
  {name: 'xko', src: 'images/xko.png'},
  {name: 'audioOn', src: 'images/audioOn.png'},
  {name: 'audioOf', src:'images/audioOf.png'},
];

const SOUNDS = [
  {name: 'backgroundMusic', src: 'sounds/bckgrnd_music.mp3'},
  {name: 'quack', src: 'sounds/quack.mp3'},
  {name: 'gunshot', src: 'sounds/gunshot.mp3', count: 10},
  {name: 'recharge', src: 'sounds/recharge.mp3', count: 10},
];

class ResourceManager {
  loadedImages = new Map();
  loadedSounds = new Map();

  async init() {
    await this.loadImages();
    await this.loadSounds();
  }

  async loadImages() {
    await Promise.all(
      IMAGES.map(image => this.loadImage(image)),
    )
  }

  async loadSounds() {
    await Promise.all(
      SOUNDS.map(sound => this.loadSound(sound)),
    )
  }

  async loadImage(imgResource) {
    return new Promise(resolve => {
      const img = new Image();
      img.src = imgResource.src;
      img.onload = () => {
        this.loadedImages.set(imgResource.name, img);
        resolve(img);
      }
    });
  }

  async loadSound(soundResource) {
    return new Promise(resolve => {
      const sound = new Audio();
      sound.src = soundResource.src;
      sound.oncanplaythrough = () => {
        this.loadedSounds.set(soundResource.name, sound);
        resolve(sound);
      }
    });
  }


  getImageSource(imageName) {
      const image = this.loadedImages.get(imageName);
      return image;
  }

  getSoundSource(soundName) {
      const sound = this.loadedSounds.get(soundName);
      return sound;
  }
}
const resourceManager = new ResourceManager();
