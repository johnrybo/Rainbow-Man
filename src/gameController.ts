class GameController {
    
    private road: Road;
    private wall: Wall;

    constructor() {
        this.road = new Road();
        this.wall = new Wall();
    }

    update() {
        this.road.update();
        this.wall.update();
    }
    
    draw() {
        this.road.draw();
        this.wall.draw();
    }
}