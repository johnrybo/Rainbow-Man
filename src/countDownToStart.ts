class CountDownToStart {
    private game: IGameState
    private timer: number;

    constructor(game: IGameState ) {
        this.game = game;
        this.timer = 3;
    }

    draw() {
        this.background()
        this.countDownNumber();
    }

    private background() {
        fill(0, 0, 0, 200);
        rect(0, 0, width, height);
    }

    private countDownNumber() {
        fill('white')
        textAlign(CENTER, CENTER);
        textSize(200)
        text(this.timer, width/2, height/2)

        if (frameCount % 60 == 0 && this.timer > 0) {
            this.timer -= 1;
        } if (this.timer == 0) {
            this.game.changeGameState("play");
        }
    }
}