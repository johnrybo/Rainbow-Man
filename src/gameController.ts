class GameController {

    private road: Road;
    private walls: Wall[];
    private character: Character;
    private highScore: HighScore;
    private previousCollision: boolean;
    private levelFactory: LevelFactory;
    private level: Level;
    private nextWallTimer: number;

    constructor() { // Ta emot levelData från Level
        this.road = new Road();
        this.walls = [];
        this.character = new Character();
        this.highScore = new HighScore();
        this.levelFactory = new LevelFactory();
        this.level = this.levelFactory.getLevel(1);
        this.previousCollision = false;
        this.nextWallTimer = 0;

        this.addWall();
    }

    update() {

        for (const wall of this.walls) {
            wall.update();
        }

        this.removeWall();
        this.character.update();
        this.checkWallCollision();
        this.updateHighScore();
        this.levelUp();

        if (this.nextWallTimer > this.level.getWallInterval()) {
            this.nextWallTimer = 0;
            this.addWall();
        }

        this.nextWallTimer += deltaTime
    }

    draw() {
        push();
        this.road.draw(this.level.getLevelBackground());
        for (const wall of this.walls) {
            wall.draw();
        }
        this.character.draw();
        this.highScore.draw();
        pop();    }

    private addWall() {
        this.walls.push(new Wall(this.level.getWallSectionCount(), this.level.getColors(), this.level.getTempo()));
    }

    private removeWall() {
        for (const wall of this.walls) {
            if (wall.yWallPosition > height) {
                // Delete wall from array to preserve memory
                const index = this.walls.indexOf(wall);
                this.walls.splice(index, 1);
            }
        }
    }

    // Stoppar väggen från att fortsätta röra sig om väggens färg och gubbens färg inte är
    // samma när de har samma y-position
    private checkWallCollision() {

        const currentWall = this.walls[0];
        // const halfCharacterWidth = this.character.characterWidth / 2;

        // Kollision har skett
        if (this.character.y < currentWall.yWallPosition) {

            let collidedWallSection: WallSection | undefined;

            const wallSectionWidth = currentWall.wallWidth / currentWall.wallSections.length;
            const characterLeft = this.character.x - this.character.characterWidth / 2;
            const characterRight = this.character.x + this.character.characterWidth / 2;

            for (const wallSection of currentWall.wallSections) {
                if (
                    characterLeft > wallSection.xPosition &&
                    characterLeft < wallSection.xPosition + wallSectionWidth &&
                    characterRight > wallSection.xPosition &&
                    characterRight < wallSection.xPosition + wallSectionWidth
                ) {
                    collidedWallSection = wallSection
                }
            }

            if (!collidedWallSection || this.character.characterColor !== collidedWallSection.color) {
                noLoop();
                gameOverSound.setVolume(0.3);
                gameOverSound.play();
                song.stop();

                // Undviker att score ökas med 1 även vid krock
                this.highScore.score = this.highScore.score -1;

            } else {
                this.updateHighScore();
                this.walls.shift();
                this.updateColor();
                collisionSound.play();
            }

        }
    }

    // Uppdaterar färgen på gubben utifrån highScore
    private updateColor() {

        let characterImgColors = [characterImgRed, characterImgGreen, characterImgBlue];
        this.character.characterImg = random(characterImgColors)
        this.character.matchColors();

        if (this.highScore.score == 11) {

            characterImgColors.push(characterImgYellow);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();

        } else if (this.highScore.score == 31) {

            characterImgColors.push(characterImgIndigo);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();

        } else if (this.highScore.score == 51) {

            characterImgColors.push(characterImgOrange);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();

        } else if (this.highScore.score == 81) {

            characterImgColors.push(characterImgViolet);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();
        }
    }

    private levelUp() {
        const currentLevel = this.level.getCurrentLevel();
        const scoreNeededForNextLevel = currentLevel * 10;

        if (this.highScore.score >= scoreNeededForNextLevel && this.highScore.score < 100) {
            this.level = this.levelFactory.getLevel(currentLevel + 1);
        }

        if (this.highScore.score >= 100) {
            this.level = this.levelFactory.getLevel(currentLevel);
        }
    }

    // Uppdaterar score baserat på antal väggar som har passerat gubben
    private updateHighScore() {

        for (const wall of this.walls) {
            if (this.character.y < wall.yWallPosition) {

                if (!this.previousCollision) {
                    this.highScore.score++
                    if (this.highScore.score > this.highScore.highScoreLS) {
                        this.highScore.highScoreLS = this.highScore.score;
                        storeItem('highScore', this.highScore.highScoreLS);
                    }
                }
                this.previousCollision = true;
                break;

            } else {
                this.previousCollision = false;
                break;
            }
        }
    }
}
