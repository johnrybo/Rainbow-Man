class GameController {

    private road: Road;
    private walls: Wall[];
    private character: Character;
    private highScore: HighScore;
    private previousCollision: boolean;
    private levelFactory: LevelFactory;
    private level: Level;

    constructor() { // Ta emot levelData från Level
        this.road = new Road();
        this.walls = [];
        this.character = new Character();
        this.highScore = new HighScore();
        this.levelFactory = new LevelFactory();
        this.level = this.levelFactory.getLevel(1);
        this.previousCollision = false;

        this.addWall();
        setInterval(() => this.addWall(), this.level.getWallInterval());
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
        const halfCharacterWidth = this.character.characterWidth / 2;

        // Kollision har skett
        if (this.character.y < currentWall.yWallPosition) {

            let collidedWallSection: WallSection;

            // ta ut vilken färg på vilken x position krock skett på
            switch (true) {
                // krock med vägg 3 - sektion 1
                case this.character.x + halfCharacterWidth < currentWall.wallSections[1].xPosition:
                    collidedWallSection = currentWall.wallSections[0];
                    break;
                // krock med vägg 3 - sektion 2
                case this.character.x - halfCharacterWidth > currentWall.wallSections[1].xPosition &&
                    this.character.x + halfCharacterWidth < currentWall.wallSections[2].xPosition:
                    collidedWallSection = currentWall.wallSections[1];
                    break;
                // krock med vägg 3 - sektion 3
                case this.character.x - halfCharacterWidth > currentWall.wallSections[2].xPosition:
                    collidedWallSection = currentWall.wallSections[2];
                    break;

                // krock med vägg 3 - sektion 4-7
                case currentWall.totalSections >= 4 && this.character.x - halfCharacterWidth > currentWall.wallSections[2].xPosition && this.character.x + halfCharacterWidth < currentWall.wallSections[3].xPosition:
                    collidedWallSection = currentWall.wallSections[2];
                    break;

                // krock med vägg 4 - sektion 4
                case currentWall.totalSections == 4 && this.character.x > currentWall.wallSections[3].xPosition:
                    collidedWallSection = currentWall.wallSections[3];
                    break;

                // krock med vägg 5 - sektion 4
                case currentWall.totalSections == 5 && this.character.x > currentWall.wallSections[3].xPosition && this.character.x < currentWall.wallSections[4].xPosition:
                    collidedWallSection = currentWall.wallSections[3];
                    break;
                // krock med vägg 5 - sektion 5
                case currentWall.totalSections == 5 && this.character.x > currentWall.wallSections[4].xPosition:
                    collidedWallSection = currentWall.wallSections[4];
                    break;

                // krock med vägg 6 - sektion 4
                case currentWall.totalSections == 6 && this.character.x > currentWall.wallSections[3].xPosition && this.character.x < currentWall.wallSections[4].xPosition:
                    collidedWallSection = currentWall.wallSections[3];
                    break;
                // krock med vägg 6 - sektion 5
                case currentWall.totalSections == 6 && this.character.x > currentWall.wallSections[4].xPosition && this.character.x < currentWall.wallSections[5].xPosition:
                    collidedWallSection = currentWall.wallSections[4];
                    break;
                // krock med vägg 6 - sektion 6
                case currentWall.totalSections == 6 && this.character.x > currentWall.wallSections[5].xPosition:
                    collidedWallSection = currentWall.wallSections[5];
                    break;

                // krock med vägg 7 -sektion 4
                case currentWall.totalSections == 7 && this.character.x > currentWall.wallSections[3].xPosition && this.character.x < currentWall.wallSections[4].xPosition:
                    collidedWallSection = currentWall.wallSections[3];
                    break;
                // krock med vägg 7 - sektion 5
                case currentWall.totalSections == 7 && this.character.x > currentWall.wallSections[4].xPosition && this.character.x < currentWall.wallSections[5].xPosition:
                    collidedWallSection = currentWall.wallSections[4];
                    break;
                // krock med vägg 7 - sektion 6
                case currentWall.totalSections == 7 && this.character.x > currentWall.wallSections[5].xPosition && this.character.x < currentWall.wallSections[6].xPosition:
                    collidedWallSection = currentWall.wallSections[5];
                    break;
                // krock med vägg 7 - sektion 7
                case currentWall.totalSections == 7 && this.character.x > currentWall.wallSections[6].xPosition:
                    collidedWallSection = currentWall.wallSections[6];
                    break;

                // krock med vägg 3 - sektion 3
                default:
                   collidedWallSection = currentWall.wallSections[7];
                    break;
            }

            if (this.character.characterColor !== collidedWallSection.color) {
                noLoop();
                gameOverSound.setVolume(0.3);
                gameOverSound.play();
                song.stop();
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

        if (this.highScore.score == 3) {

            characterImgColors.push(characterImgYellow);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();

        } else if (this.highScore.score == 6) {

            characterImgColors.push(characterImgIndigo);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();

        } else if (this.highScore.score == 9) {

            characterImgColors.push(characterImgOrange);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();

        } else if (this.highScore.score == 12) {

            characterImgColors.push(characterImgViolet);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();
        }
    }

    private levelUp() {
        const currentLevel = this.level.getCurrentLevel();
        const scoreNeededForNextLevel = currentLevel;

        if (this.highScore.score >= scoreNeededForNextLevel && this.highScore.score < 10) {
            this.level = this.levelFactory.getLevel(currentLevel + 1);
        }

        if (this.highScore.score >= 10) {
            this.level = this.levelFactory.getLevel(currentLevel);
        }
    }

    // Uppdaterar score baserat på antal väggar som har passerat gubben
    private updateHighScore() {

        // for (const wall of this.walls) {
            if (this.character.y < this.walls[0].yWallPosition) {

                if (!this.previousCollision) {
                    this.highScore.score++
                    if (this.highScore.score > this.highScore.highScoreLS) {
                        this.highScore.highScoreLS = this.highScore.score;
                        storeItem('highScore', this.highScore.highScoreLS);
                    }
                }
                this.previousCollision = true;
                // break;

            } else {
                this.previousCollision = false;
                // break;
            }
        // }
    }
}
