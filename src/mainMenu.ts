class MainMenu {
    private game: IGameState;
    
    constructor(game: IGameState) {
        this.game = game;
    }

    update() {
        if (mouseIsPressed) {
            // starta spelet
            this.game.gameState = "play"
        }
    }
    draw() {}
}