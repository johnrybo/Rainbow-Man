class WallSection {

    private color: string;

    // private totalWallWidth: number;
    // private sectionWidth: number;
    // private sectionHeight: number;
    // private firstSectionPosition: number;
    
    
    constructor(color: string) {
        this.color = color;
        // this.totalWallWidth = width * .4;
        // this.sectionWidth = this.totalWallWidth / this.totalSections;
        // this.sectionHeight = 100;
        // this.firstSectionPosition = width * .3 + this.sectionWidth / 2;
    }
    
    public update(){
        // this.createWallSections(); 
    }

    public draw(parentPositionY: number, parentWidth: number, parentHeight: number ) {
        push();
        fill(this.color);
        noStroke();
        rectMode(CENTER);
        
        rect(width / 2, parentPositionY, parentWidth / 3, parentHeight);
        pop();
    }

    /* Syfte: Berätta för programmet vilken vägg som ska byggas.
    En array som består av två objekt, vägg 1 och vägg 2.
    CreateWallSection() kollar om det är vägg 1 är true/false. Om true, bygg vägg 1, annars vägg 2.
    När antal sektioner för vägg 1 är skapta, ska createWallSection ändra true till false och börja bygga vägg två. 
    */
}
// const randomColor = Math.trunc(Math.random() * 7) + 1;                                                                                                                                                