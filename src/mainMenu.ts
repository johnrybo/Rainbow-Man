class MainMenu {
    private game: IGameState;
    private mainMenuImg: p5.Image;
    private rainbow: p5.Image;
    private controlsImg: p5.Image
    
    constructor(game: IGameState) {
        this.game = game;
        this.mainMenuImg = backgroundLevel1;
        this.rainbow = rainbowImg;
        this.controlsImg = controlsImg;
    }

    update() { 
        push()
        image(this.mainMenuImg, 0, 0, width, height);
        imageMode(CENTER)
        image(this.rainbow, width/2, 250, 600, height/2)
        this.addStartBtn();
        this.showHighScore();
        this.showInstructions();
        this.showControls();
        pop()
    }

    draw() { 
    }

    private addStartBtn() {
        let button = createButton('Start Game');

        button.mousePressed(() => {
            this.startGame(button);
        })
        
        button.position(width/2 - 150, height/2 + 220);
        button.style('font-size', '40px')
        button.style('width', '300px')
        button.style('height', '60px') 
        button.style('border', 'none')
        button.style('border-radius', '4px')
        button.style('background-color', '#3BBA36')          
    }

    private startGame(button: p5.Element) {
        game.gameState = "play";
        button.elt.remove()
        loop();
    }

    private showHighScore() {
        let highScore = localStorage.getItem('highScore')

        textAlign(RIGHT, TOP);
        textSize(width / 40);
        text("Highscore: " + highScore, width - 20, 20);
    }

    private showInstructions() {
        textAlign(CENTER)
        textSize(width / 60);
        text("RainBowMan can only go through the walls with the same color as himself.", width/2, height/2);
    }

    private showControls() {
        textAlign(CENTER)
        textSize(width / 60);
        text("Use left and right arrow to move.", width/2, height/2 + 50)
        image(this.controlsImg, width/2, height/2 + 150, 300, 100)
    }   
}    
        
