class GameController {
    
    private road: Road;
    private wall: Wall;
    private character: Character;

    constructor() {
        this.road = new Road();
        this.wall = new Wall(3);
        this.character = new Character();
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
    }
}