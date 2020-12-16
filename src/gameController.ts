class GameController {
    
    private road: Road;

    constructor() {
        this.road = new Road();
    }

    update() {
        this.road.update();
    }
    
    draw() {
        this.road.draw();
    }
}