class Wall {
    public y: number;
    private wallWidth: number;
    public color: string;
    

    constructor() {
        this.y = height * .1;
        this.wallWidth = width * .4
        this.color = 'red';
    }

    public update() {
        this.moveWalls()
        this.changeWallSize();
    }

    public draw() {    
        this.moveWalls();  
        this.changeWallSize();
    }

    /* Moves wall */
    private moveWalls() {
        fill(this.color);
        noStroke();
        rect(width * .5, this.y, this.wallWidth, 100);
        rectMode(CENTER) 
        this.y = this.y + 1;
        if (this.y > height) {
            this.y = height * .1;
          }       
    }

    /* Change wall size when moving */
    private changeWallSize() {
        this.wallWidth = this.wallWidth + 1.2
        if(this.y + 1 > height) {
            this.wallWidth = width * .4
        }
    }
}

