class GameOverMenu {
    private game: IGameState;
    private menuButton!: p5.Element;
    private restartButton!: p5.Element;

    constructor(game: IGameState) {
        this.game = game;
        this.addMenuButton();
        this.addRestartButton();
    }

    update() {}

    draw(score: number) {
        push()
        this.addBackground();
        this.addPopUp();
        this.addText(score);
        pop()
    }

    private addBackground() {
        fill(0, 0, 0, 200);
        rect(0, 0, width, height);
    }

    private addPopUp() {
        rectMode(CENTER)
        fill('white')
        noStroke()
        rect(width/2, height/2 - 80, 400, 400);
    }

    private addText(score: number) {
        fill('black');
        textSize(width / 20);
        textAlign(CENTER)
        text('Game Over', width/2, height/2 - 200);
        textSize(width / 10);
        text(score, width/2, height/2 - 80); 
    }

    private addMenuButton() {
        this.menuButton = createButton('Menu');
        
        this.menuButton.mousePressed(() => this.goToMainMenu())

        this.menuButton.style('font-size', '20px');
        this.menuButton.style('width', '150');
        this.menuButton.style('height', '50');
        this.menuButton.style('background-color', 'grey');
        this.menuButton.style('border', 'none');
        this.menuButton.style('border-radius', '4px');
        this.menuButton.style('position', 'absolute');
        this.menuButton.style('justify-content', 'center');   
    }

    private goToMainMenu() {
        this.game.changeGameState('mainmenu')
    }

    private addRestartButton() {
        this.restartButton = createButton('Restart');
        
        this.restartButton.mousePressed(() => this.restartGame())
 
        this.restartButton.style('font-size', '20px');
        this.restartButton.style('width', '150');
        this.restartButton.style('height', '50');
        this.restartButton.style('background-color', 'green');
        this.restartButton.style('border', 'none');
        this.restartButton.style('border-radius', '4px');
        this.restartButton.style('position', 'absolute');
        this.restartButton.style('justify-cotent', 'center');
        this.restartButton.style('top', 'calc(50% + 45px)');
        this.restartButton.style('color', 'white');
    }

    private restartGame() {
        this.game.changeGameState('play')
    }
}