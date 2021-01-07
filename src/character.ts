class Character {
  public x: number;
  public y: number;
  private speed: number;
  public characterImg: p5.Image;
  public characterColor: string;

  constructor() {
    this.x = width / 2;
    this.y = height - 150;
    this.speed = 30;
    this.characterImg = characterImgRed;
    this.characterColor = 'red';
  }

  update() {}

  draw() {
    imageMode(CENTER);
    image(this.characterImg, this.x, this.y);
    this.moveCharacter();
  }

  private moveCharacter() {
    
if (keyIsPressed) {
      if (keyCode == LEFT_ARROW && this.x! > 200) {
        this.x -= this.speed;
      }
    }
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW && this.x! < width - 200) {
        this.x += this.speed;
      }
    }
  }
}
