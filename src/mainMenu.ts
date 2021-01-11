class MainMenu {
    private game: IGameState;
    private mainMenuImg: p5.Image;
    private rainbow: p5.Image;
    
    constructor(game: IGameState) {
        this.game = game;
        this.mainMenuImg = backgroundLevel1;
        this.rainbow = rainbowImg;
        

    }

    update() {
        this.addStartBtn();
        /*
        if(mouseIsPressed){
            this.game.gameState = "play"
        }
        */
 
    }

    draw() {
        push()
        image(this.mainMenuImg, 0, 0, width, height);
        imageMode(CENTER)
        image(this.rainbow, width/2, 300, 1000, 700)
        this.addStartBtn();
        pop()
    }

    private addStartBtn() {
        fill('green')
        noStroke();
        rectMode(CENTER)
        rect(width/2, height/2 + 100, 100, 50)
    }

    // private startGame() {
    //     //this.game.gameState = "play"
    //     let game = this.getGame();
    //     console.log(game)
    // }

    
        
        
}