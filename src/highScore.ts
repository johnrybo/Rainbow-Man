class HighScore {
    public score: number;
    public highScoreLS: number;

    constructor() {
        this.score = 0;
        this.highScoreLS = 0;
    }

    update() { }

    draw() {
        push();
        textSize(width / 40);
        textAlign(LEFT, TOP);
        text("Score: " + this.score, 20, 20);
        
        this.getHighScoreFromLS();
        textAlign(RIGHT, TOP);
        text("Highscore: " + this.highScoreLS, width - 20, 20);
        pop();
    }

    private getHighScoreFromLS() {
        this.highScoreLS = Number(getItem('highScore'));
        if (this.highScoreLS === null) {
            this.highScoreLS = 0;
        }
    }
}