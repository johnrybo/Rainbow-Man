class Game implements IGameState {
    private mainMenu: MainMenu;
    private gameOverMenu: GameOverMenu;
    private countDownToStart: CountDownToStart;
    private gameController: GameController;
    public gameState: "mainmenu" | "gameover" | "play";

    constructor() {
        this.mainMenu = new MainMenu(this);
        this.gameOverMenu = new GameOverMenu();
        this.countDownToStart = new CountDownToStart();
        this.gameController = new GameController();

        // level -- gamecontroller
        this.gameState = "mainmenu";
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
        if (this.gameState === "mainmenu") {
            this.mainMenu.draw();
        }
        if (this.gameState === "gameover") {
            this.gameOverMenu.draw();
        }
        if (this.gameState === "play") {
            this.gameController.draw();

            // this.countDownToStart.draw();
        }
    }
}