class GameController {

    private road: Road;
    private wall: Wall;
    private character: Character;
    private highScore: HighScore;
    private previousCollision: boolean;

    constructor() {
        this.road = new Road();
        this.wall = new Wall();
        this.character = new Character();
        this.highScore = new HighScore();
        this.previousCollision = false;
    }

    update() {
        this.road.update();
        this.wall.update();
        this.character.update();
        this.checkWallCollision();
        this.updateHighScore();
        this.updateColor();
    }

    draw() {
        this.road.draw();
        this.wall.draw();
        this.character.draw();
        this.highScore.draw();
    }

    // Stoppar väggen från att fortsätta röra sig om väggens färg och gubbens färg inte är
    // samma när de har samma y-position
    private checkWallCollision() {

        if (this.character.y < this.wall.y && this.wall.color !== this.character.characterColor) {
            this.wall.y = this.character.y;
        }
    }

    // Uppdaterar färgen på gubben utifrån highScore
    private updateColor() {
        
        if (this.highScore.score >= 5 && this.highScore.score <= 10) {

            this.character.characterImg = characterImgGreen;
            this.character.characterColor = 'green';
            // console.log(this.character.characterColor)
        } else {
            this.character.characterImg = characterImgRed;
            this.character.characterColor = 'red';
            // console.log(this.character.characterColor)
        }
    }

    // Uppdaterar score baserat på antal väggar som har passerat gubben
    private updateHighScore() {
        if (this.character.y < this.wall.y) {

            if (!this.previousCollision) {
                this.highScore.score++
                // console.log(this.highScore.score);
            }

            this.previousCollision = true;

        } else {
            this.previousCollision = false;
        }
    }
}