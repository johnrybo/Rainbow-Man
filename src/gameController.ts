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
    }

    draw() {
        this.road.draw();
        this.wall.draw();
        this.character.draw();
    }

    private checkWallCollision() {


        if (this.character.y < this.wall.y) {

            if(!this.previousCollision) {
                console.log(this.highScore.score ++)
                console.log(this.wall.color)
            }
            
            this.previousCollision = true;
            
        } else {
            this.previousCollision = false;
        }
    }
}