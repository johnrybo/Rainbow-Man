class Game implements IGameState {
    private mainMenu: MainMenu;
    private gameOverMenu!: GameOverMenu;
    private countDownToStart: CountDownToStart;
    private gameController: GameController;
    public gameState: "mainmenu" | "gameover" | "play";

    constructor() {
        this.mainMenu = new MainMenu(this);
        this.countDownToStart = new CountDownToStart();
        this.gameController = new GameController(this);
        
        // Start page
        this.gameState = "mainmenu";
    }
    public changeGameState(gameState: "mainmenu" | "gameover" | "play") {
        this.gameState = gameState
        removeElements()
        if (gameState == 'mainmenu') {
            this.mainMenu = new MainMenu(this)
        }
        if (gameState == 'gameover') {
            this.gameOverMenu = new GameOverMenu(this)
        }
        if (gameState == 'play') {
            this.gameController = new GameController(this);

        }  
    }

    public update() {
        if (this.gameState === "mainmenu") {
            this.mainMenu.update();
        }
        if (this.gameState === "gameover") {
            this.gameOverMenu.update();
        }
        if (this.gameState === "play") {
            this.gameController.update();
            this.countDownToStart.update();
        }
    }

    /** Looks at the state and draws accordingly */
    public draw() {
        push();
        if (this.gameState === "mainmenu") {
            this.mainMenu.draw();
        }
        if (this.gameState === "gameover") {
            this.gameController.draw();
            this.gameOverMenu.draw(this.gameController.highScore.score);
 
        }
        if (this.gameState === "play") {
            this.gameController.draw();

            // this.countDownToStart.draw();
        }
        pop();
    }
}