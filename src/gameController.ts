class GameController {
    
    private road: Road;
    private wall: Wall;
    private character: Character;
    private highScore: HighScore;

    constructor() {
        this.road = new Road();
        this.wall = new Wall();
        this.character = new Character();
        this.highScore = new HighScore();
    }

    update() {
        this.road.update();
        this.wall.update();
        this.character.update();
    }
    
    draw() {
        this.road.draw();
        this.wall.draw();
        this.character.draw();
        this.checkWallCollision();
    }

    private checkWallCollision() {

        let checkOnce = false;

        if (this.character.y < this.wall.y) {
    
            checkOnce = true;

        } else {
            checkOnce = false;
        }

        if (checkOnce) {
            console.log(this.highScore.score ++)
        }

    }

}