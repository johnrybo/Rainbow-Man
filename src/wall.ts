class Wall {
    public wallSections: WallSection[];
    public yWallPosition: number;
    private wallWidth: number;
    private totalSections: number;
    private wallHeight: number;

    // enbart för test
    public color: string;

    constructor(totalSections: number) {
        this.totalSections = totalSections;
        this.wallSections = this.createWallSections();
        this.yWallPosition = height * .05;
        this.wallWidth = width * .4;
        this.wallHeight = 100;

        // enbart för test
        this.color = 'red';
    }

    public update() {
        this.moveWalls();
        this.changeWallSize();
    }

    public draw() {
        push()
        for (let i = 0; i < this.wallSections.length; i++) {
            const wallSection = this.wallSections[i]
            wallSection.draw(this.yWallPosition, this.wallWidth, this.wallHeight, this.totalSections, i);
        }
        pop();
    }

    // Create wall sections and add color
    private createWallSections(): WallSection[] {
        // todo: colors should come from level object
        const colors = ['red', 'yellow', 'green'];
        shuffle(colors, true);

        const sections = [];
        for (let i = 0; i < this.totalSections; i++) {
            sections.push(new WallSection(colors[i]));
        }

        return sections;
    }

    /* Move walls */
    private moveWalls() {
        this.yWallPosition = this.yWallPosition + 1;
    }

    /* Change wall size when moving */
    private changeWallSize() {
        this.wallWidth += width / 1500
        if (this.yWallPosition + 1 > height) {
            this.wallWidth = width * .4
        }
    }
}

