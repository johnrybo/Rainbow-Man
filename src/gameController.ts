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
        
        let characterImgColors = [characterImgBlue, characterImgGreen, characterImgRed];

        if (this.highScore.score >= 2 && this.highScore.score <= 4 && this.wall.yWallPosition < 150) {

            characterImgColors.push(characterImgYellow);
            this.character.characterImg = random(characterImgColors)
            this.matchColors();

        } else if (this.highScore.score >= 5 && this.highScore.score <= 7 && this.wall.yWallPosition < 150) {

            characterImgColors.push(characterImgIndigo);
            this.character.characterImg = random(characterImgColors)
            this.matchColors();

        } else if (this.highScore.score >= 8 && this.highScore.score <= 10 && this.wall.yWallPosition < 150) {

            characterImgColors.push(characterImgOrange);
            this.character.characterImg = random(characterImgColors)
            this.matchColors();

        } else if (this.highScore.score >= 11 && this.wall.yWallPosition < 150) {

            characterImgColors.push(characterImgViolet);
            this.character.characterImg = random(characterImgColors)
            this.matchColors();            
        }
    }

    // Anger samma färg på characterColor som finns i characterImg
    private matchColors() {
        if (this.character.characterImg == characterImgBlue) {
            this.character.characterColor = 'blue'
        } else if (this.character.characterImg == characterImgRed) {
            this.character.characterColor = 'red'
        } else if (this.character.characterImg == characterImgGreen) {
            this.character.characterColor = 'green'
        } else if (this.character.characterImg == characterImgYellow) {
            this.character.characterColor = 'yellow'
        } else if (this.character.characterImg == characterImgIndigo) {
            this.character.characterColor = 'indigo'
        } else if (this.character.characterImg == characterImgViolet) {
            this.character.characterColor = 'violet'
        } else if (this.character.characterImg == characterImgOrange) {
            this.character.characterColor = 'orange'
        }
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