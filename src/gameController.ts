class GameController {

    private road: Road;
    private wall: Wall;
    private character: Character;
    private highScore: HighScore;
    private previousCollision: boolean;

    constructor() {
        this.road = new Road();
        this.wall = new Wall(3);
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

        if (this.character.y < this.wall.yWallPosition && this.wall.color !== this.character.characterColor) {
            // this.wall.y = this.character.y;
            noLoop();
        }
    }

    // Uppdaterar färgen på gubben utifrån highScore
    private updateColor() {
        
        if (this.highScore.score >= 2 && this.highScore.score <= 10 && this.wall.yWallPosition < 200) {

            this.character.characterImg = characterImgGreen;
            this.character.characterColor = 'green';
            // console.log(this.character.characterColor)
        } 
        
        /* else {
            this.character.characterImg = characterImgRed;
            this.character.characterColor = 'red';
            console.log(this.wall.yWallPosition);
            // console.log(this.character.characterColor)
        } */
    }

    // Uppdaterar score baserat på antal väggar som har passerat gubben
    private updateHighScore() {
        if (this.character.y < this.wall.yWallPosition) {

            if (!this.previousCollision) {
                this.highScore.score++
                if (this.highScore.score > this.highScore.highScoreLS) {
                    this.highScore.highScoreLS = this.highScore.score;
                    storeItem('highScore', this.highScore.highScoreLS);
                }
                // console.log(this.highScore.score);
            }

            this.previousCollision = true;

        } else {
            this.previousCollision = false;
        }
    }
}