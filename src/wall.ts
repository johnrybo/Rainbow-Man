class Wall {
    private wallSections: WallSection[];
    public yWallPosition: number;
    private wallWidth: number;
    private totalSections: number;
    private wallHeight: number;
    

    constructor(totalSections: number) {
        this.totalSections = totalSections;
        this.wallSections = this.createWallSections();
        this.yWallPosition = height * .05;
        this.wallWidth = width * .4;        
        this.totalSections = 3;
        this.wallHeight = 100;
    }

    private createWallSections(): WallSection[] {
        // todo: should come from level object
        const colors = ['red', 'blue', 'green', 'yellow']
        shuffle(colors, true)
        
        const sections = [];
        for (let i = 0; i < this.totalSections; i++) {
            sections.push(new WallSection(colors[i]))
        }
        return sections;
    }

    public update() {
        // this.wallSection.update();
        this.moveWalls();
        this.changeWallSize();
    }

    public draw() {
        push()
        this.drawDebuggWall();

        for (const wallSection of this.wallSections) {
            wallSection.draw(this.yWallPosition, this.wallWidth, this.wallHeight);
        }

        pop();
    }

    private drawDebuggWall() {
        fill('red');
        rectMode(CENTER)
        noStroke();
        rect(width * .5, this.yWallPosition, this.wallWidth, this.wallHeight);
    }

    /* Moves wall */
    private moveWalls() {
        this.yWallPosition = this.yWallPosition + 1;
        if (this.yWallPosition > height) {
            this.yWallPosition = height * .1;
          }       
    }

    /* Change wall size when moving */
    private changeWallSize() {
        this.wallWidth += width / 1500
        if(this.yWallPosition + 1 > height) {
            this.wallWidth = width * .4
        }
    }
}

