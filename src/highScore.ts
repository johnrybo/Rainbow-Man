class HighScore {

    public score: number;
    public highScoreLS: number;

    constructor() {
        this.score = 0;
        this.highScoreLS = 0;

    }

    update() { }

    draw() {
        textSize(width / 40);
        // textAlign(CENTER, CENTER);
        text("Score: " + this.score, 50, 50);

        this.getHighScoreFromLS();
        text("Highscore: " + this.highScoreLS, width - 300, 50);
    }

    private getHighScoreFromLS() {
        this.highScoreLS = Number(getItem('highScore'));
        if (this.highScoreLS === null) {
            this.highScoreLS = 0;
        }
    }

}