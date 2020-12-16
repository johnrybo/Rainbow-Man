class GameController {
    
    private road: Road;
    private character: Character;

    constructor() {
        this.road = new Road();
        this.character = new Character();
    }

    update() {
        this.road.update();
        this.character.update();
    }
    
    draw() {
        this.road.draw();
        this.character.draw();
    }
}