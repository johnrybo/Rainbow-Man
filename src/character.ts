class Character {
  public x: number;
  public y: number;
  private speed: number;
  public characterImg: p5.Image;
  public characterColor: string;
  public characterWidth: number;
  public characterHeight: number;

  constructor() {
    this.x = width / 2;
    this.y = height - 100;
    this.speed = 10;
    this.characterImg = characterImgRed;
    this.characterColor = 'red';
    this.characterWidth = 52.59 * .85;
    this.characterHeight = 120.39 * .85;
  }

  draw() {
    push();
    imageMode(CENTER);
    image(this.characterImg, this.x, this.y, this.characterWidth, this.characterHeight);
    this.moveCharacter();
    pop();
  }

  // Anger samma färg på characterColor som finns i characterImg
  public matchColors() {
    if (this.characterImg == characterImgBlue) {
      this.characterColor = 'blue'
    } else if (this.characterImg == characterImgRed) {
      this.characterColor = 'red'
    } else if (this.characterImg == characterImgGreen) {
      this.characterColor = 'green'
    } else if (this.characterImg == characterImgYellow) {
      this.characterColor = 'yellow'
    } else if (this.characterImg == characterImgIndigo) {
      this.characterColor = 'indigo'
    } else if (this.characterImg == characterImgViolet) {
      this.characterColor = 'violet'
    } else if (this.characterImg == characterImgOrange) {
      this.characterColor = 'orange'
    }
  }

  private moveCharacter() {
    if (keyIsPressed) {
      if (keyCode == LEFT_ARROW && this.x! > width * .17) {
        this.x -= this.speed;
      }
    }

    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW && this.x! < width * .83) {
        this.x += this.speed;
      }
    }
  }
}
