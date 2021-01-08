class Level {
  private level: number;
  private colors: string[];
  private tempo: number;
  private wallSectionCount: number;

  constructor(level: number, colors: string[], tempo: number, wallSectionCount: number) {
    this.level = level;
    this.colors = colors;
    this.tempo = tempo;
    this.wallSectionCount = wallSectionCount;

    console.log(this.level, this.colors, this.tempo, this.wallSectionCount);
  }

  public update() {

  }

  public draw() {
    this.setLevels();

  }

  private setLevels() {
    // this.highScore.score
  }
}