class GameController {

    private road: Road;
    private walls: Wall[];
    private character: Character;
    public highScore: HighScore;
    private previousCollision: boolean;
    private levelFactory: LevelFactory;
    private level: Level;
    private game: IGameState
    private nextWallTimer: number;


    constructor(game: IGameState) {
        this.game = game;
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

        // Add new wall.
        private addWall() {
        this.walls.push(new Wall(this.level.getWallSectionCount(), this.level.getColors(), this.level.getTempo()));
    }

    // Remove wall if wall Y-position > window height.
    private removeWall() {
        for (const wall of this.walls) {
            if (wall.yWallPosition > height) {
                // Delete wall from array to preserve memory
                const index = this.walls.indexOf(wall);
                this.walls.splice(index, 1);
            }
        }
    }

    // Decides what's going to happen when the character collides with a specific wallsection.
    private checkWallCollision() {

        const currentWall = this.walls[0];

        // Collision has happened.
        if (this.character.y < currentWall.yWallPosition) {

            let collidedWallSection: WallSection | undefined;

            const wallSectionWidth = currentWall.wallWidth / currentWall.wallSections.length;
            const characterLeft = this.character.x - this.character.characterWidth / 2;
            const characterRight = this.character.x + this.character.characterWidth / 2;

            // Check if character is inside wallsection.
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
            
            // End game if character color !== wallsection color.
            if (!collidedWallSection || this.character.characterColor !== collidedWallSection.color) {
                this.game.changeGameState('gameover')
                gameOverSound.setVolume(0.2);
                gameOverSound.play();
                song.stop();

                // Prevents score from increasing by 1 when game over.
                this.highScore.score = this.highScore.score -1;

            } else {
                this.updateHighScore();
                this.walls.shift();
                this.updateColor();
                collisionSound.play();
            }

        }
    }

    // Updates character color based on score.
    private updateColor() {

        let characterImgColors = [characterImgRed, characterImgGreen, characterImgBlue];
        this.character.characterImg = random(characterImgColors)
        this.character.matchColors();

        if (this.highScore.score > 10 && this.highScore.score < 31) {

            characterImgColors.push(characterImgYellow);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();

        } else if (this.highScore.score >= 31 && this.highScore.score < 51) {

            characterImgColors.push(characterImgIndigo);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();

        } else if (this.highScore.score >= 51 && this.highScore.score < 81) {

            characterImgColors.push(characterImgOrange);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();

        } else if (this.highScore.score >= 81) {

            characterImgColors.push(characterImgViolet);
            this.character.characterImg = random(characterImgColors)
            this.character.matchColors();
        }
    }

    // Increase level based on score.
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

    // Increase score with 1 if character enters correct wallsection.
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
