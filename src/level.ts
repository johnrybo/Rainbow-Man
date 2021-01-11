class Level {
  private currentLevel: number;
  private colors: string[];
  private tempo: number;
  private wallInterval: number;
  private wallSectionCount: number;
  private levelBackground: p5.Image;

  constructor(currentLevel: number, colors: string[], tempo: number, wallInterval: number, wallSectionCount: number, levelBackground: p5.Image) {
    this.currentLevel = currentLevel;
    this.colors = colors;
    this.tempo = tempo;
    this.wallInterval = wallInterval;
    this.wallSectionCount = wallSectionCount;
    this.levelBackground = levelBackground;
  }

  public getCurrentLevel() {
    return this.currentLevel;
  }
  public getColors() {
    return this.colors;
  }
  public getTempo() {
    return this.tempo;
  }
  public getWallInterval() {
    return this.wallInterval;
  }
  public getWallSectionCount() {
    return this.wallSectionCount;
  }
  public getLevelBackground() {
    return this.levelBackground;
  }
}