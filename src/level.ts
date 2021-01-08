class Level {
  private currentLevel: number;
  private colors: string[];
  private tempo: number;
  private wallSectionCount: number;

  constructor(currentLevel: number, colors: string[], tempo: number, wallSectionCount: number) {
    this.currentLevel = currentLevel;
    this.colors = colors;
    this.tempo = tempo;
    this.wallSectionCount = wallSectionCount;
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
  public getWallSectionCount() {
    return this.wallSectionCount;
  }
}