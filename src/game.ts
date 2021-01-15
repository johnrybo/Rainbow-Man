class Game implements IGameState {
    private mainMenu: MainMenu;
    private gameOverMenu!: GameOverMenu;
    private countDownToStart: CountDownToStart;
    private gameController: GameController;
    public gameState: "mainmenu" | "gameover" | "countdown" | "play";

    constructor() {
        this.mainMenu = new MainMenu(this);
        this.countDownToStart = new CountDownToStart(this);
        this.gameController = new GameController(this);
        
        // Start page
        this.gameState = "mainmenu";
    }

    // Remove previous page and create new page. 
    public changeGameState(gameState: "mainmenu" | "gameover" | "countdown" | "play") {
        this.gameState = gameState
        removeElements()
        if (gameState == 'mainmenu') {
            this.mainMenu = new MainMenu(this)
        }
        if (gameState == 'gameover') {
            this.gameOverMenu = new GameOverMenu(this)
        }
        if (gameState == 'countdown') {
            this.countDownToStart = new CountDownToStart(this)
            this.gameController = new GameController(this);
        }  
    }

    // Looks at the state and updates accordingly
    public update() {
        if (this.gameState === "mainmenu") {
            this.mainMenu.update();
        }
        if (this.gameState === "gameover") {
            this.gameOverMenu.update();
        }
        if (this.gameState === "countdown") {
            this.countDownToStart.update();
        }
        if (this.gameState === "play") {
            this.gameController.update();
        }
    }

    // Looks at the state and draws accordingly
    public draw() {
        push();
        if (this.gameState === "mainmenu") {
            this.mainMenu.draw();
        }
        if (this.gameState === "gameover") {
            this.gameController.draw();
            this.gameOverMenu.draw(this.gameController.highScore.score);
        }
        if (this.gameState === "countdown") {
            this.gameController.draw();
            this.countDownToStart.draw();
        }
        if (this.gameState === "play") {
            this.gameController.draw();
        }
        pop();
    }
}