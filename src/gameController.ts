class GameController {

    private road: Road;
    private walls: Wall[];
    private character: Character;
    private highScore: HighScore;
    private previousCollision: boolean;

    constructor() {
        this.road = new Road();
        this.walls = [];
        this.character = new Character();
        this.highScore = new HighScore();
        this.previousCollision = false;

        this.addWall();
        setInterval(() => this.addWall(), 8000);
    }

    private addWall() {
        this.walls.push(new Wall(3));
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

    update() {
        this.road.update();
        for (const wall of this.walls) {
            wall.update();
        }
        this.removeWall();
        this.character.update();
        this.checkWallCollision();
        this.updateHighScore();
        this.updateColor();
    }

    draw() {
        this.road.draw();
        for (const wall of this.walls) {
            wall.draw();
        }
        this.character.draw();
        this.highScore.draw();
    }

    // Stoppar väggen från att fortsätta röra sig om väggens färg och gubbens färg inte är
    // samma när de har samma y-position
    private checkWallCollision() {

        // Todo: Skapa loop
        // if (this.character.y < this.wall.y && this.wall.color !== this.character.characterColor) {
        //     // this.wall.y = this.character.y;
        //     noLoop();
        // }
    }

    // Uppdaterar färgen på gubben utifrån highScore
    private updateColor() {
        
        if (this.highScore.score >= 2 && this.highScore.score <= 10) {

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

        // Todo: Skapa for loop
        // if (this.character.y < this.wall.y) {

        //     if (!this.previousCollision) {
        //         this.highScore.score++
        //         // console.log(this.highScore.score);
        //     }

        //     this.previousCollision = true;

        // } else {
        //     this.previousCollision = false;
        // }
    }
}