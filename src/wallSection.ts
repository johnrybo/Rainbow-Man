class WallSection {
    public color: string;
    public xPosition: number; 
    
    
    
    constructor(color: string) {
        this.color = color;
        this.xPosition = this.handleXPosition()
    }
    
    public update(){       
    }

    public draw(parentPositionY: number, parentWidth: number, parentHeight: number, parentTotalSections: number, index: number) {
        push();
        fill(this.color);
        noStroke();
        
        rectMode(CORNER);
        this.xPosition = this.handleXPosition(parentWidth, parentTotalSections, index);
        const yPosition = parentPositionY - parentHeight / 2;
        rect(this.xPosition, yPosition, parentWidth / parentTotalSections, parentHeight);
        pop();
    }

    private handleXPosition(parentWidth: number, parentTotalSections:number, index: number) {     
        const screenCenter = width / 2;
        const wallSectionWidth = parentWidth / parentTotalSections;
        const parentX = screenCenter - parentWidth / 2;
        const x = parentX + wallSectionWidth * index;

        return x
    }
}
                                                                                                                                              