class Character {
  public x: number;
  public y: number;
  private speed: number;
  public characterImg: p5.Image;
  public characterColor: string;

  constructor() {
    this.x = width / 2;
    this.y = height - 150;
    this.speed = 20;
    this.characterImg = characterImgRed;
    this.characterColor = 'red';
  }

  update() { }

  draw() {
    imageMode(CENTER);
    image(this.characterImg, this.x, this.y);
    this.moveCharacter();
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
