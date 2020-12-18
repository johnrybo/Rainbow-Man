class HighScore {
    
    public score: number;

    constructor() {
        this.score = 0;
    }
    
    update() { }

    draw() {
        textSize(width / 40);
        // textAlign(CENTER, CENTER);
        text("Poäng: " + this.score, 50, 50);
    }

}