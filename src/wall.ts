class Wall {
    public wallSections: WallSection[];
    public yWallPosition: number;
    public wallWidth: number;
    public totalSections: number;
    private wallHeight: number;
    private wallColors: string[];
    private wallTempo: number;

    constructor(totalSections: number, wallColors: string[], wallTempo: number) {
        this.totalSections = totalSections;
        this.wallColors = wallColors;
        this.wallSections = this.createWallSections();
        this.yWallPosition = height * .1;
        this.wallWidth = width * .4;
        this.wallHeight = 100;
        this.wallTempo = wallTempo;
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

        const colors = this.wallColors;
        shuffle(colors, true);

        const sections = [];
        for (let i = 0; i < this.totalSections; i++) {
            sections.push(new WallSection(colors[i]));
        }

        return sections;
    }

    // Move wall.
    private moveWalls() {
        this.yWallPosition = this.yWallPosition + this.wallTempo;
    }

    // Change wall size when moving
    private changeWallSize() {

        if (this.wallTempo == 3) {
            this.wallWidth += width / 440
        } else if (this.wallTempo == 3.5) {
            this.wallWidth += width / 380
        } else if (this.wallTempo == 4) {
            this.wallWidth += width / 330
        } else if (this.wallTempo == 4.5) {
                this.wallWidth += width / 300
        } else if (this.wallTempo == 5) {
            this.wallWidth += width / 260
        }
        
        if (this.yWallPosition + 1 > height) {
            this.wallWidth = width * .4
        }
    }
}

