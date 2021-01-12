interface LevelData {
    wallSectionCount: number;
    tempo: number;
    wallInterval: number;
    background: p5.Image;
}

class LevelFactory {
    private levelData: LevelData[];
    public allColors: string[];

    constructor() {
        this.allColors = ['red', 'blue', 'green', 'yellow', 'indigo', 'orange', 'violet'];
        this.levelData = [
            {
                wallSectionCount: 3,
                tempo: 3,
                wallInterval: 2000,
                background: backgroundLevel1,
            },
            {
                wallSectionCount: 4,    // 10
                tempo: 3,
                wallInterval: 1900,
                background: backgroundLevel2,
            },
            {
                wallSectionCount: 4,    // 20
                tempo: 4,
                wallInterval: 1800,
                background: backgroundLevel3,
            },
            {
                wallSectionCount: 5,    // 30
                tempo: 4,
                wallInterval: 1700,
                background: backgroundLevel4,
            },
            {
                wallSectionCount: 5,    // 40
                tempo: 4,
                wallInterval: 1600,
                background: backgroundLevel5,
            },
            {
                wallSectionCount: 6,    // 50
                tempo: 4,
                wallInterval: 1500,
                background: backgroundLevel6,
            },
            {
                wallSectionCount: 6,    // 60
                tempo: 5,
                wallInterval: 1400,
                background: backgroundLevel7,
            },
            {
                wallSectionCount: 6,    // 70
                tempo: 5,
                wallInterval: 1300,
                background: backgroundLevel1,
            },
            {
                wallSectionCount: 7,    // 80
                tempo: 5,
                wallInterval: 1200,
                background: backgroundLevel2,
            },
            {
                wallSectionCount: 7,    // 90
                tempo: 5,
                wallInterval: 1100,
                background: backgroundLevel6,
            }
        ];
    }

    public getLevel(currentLevel: number): Level {
        const data = this.levelData[currentLevel - 1];
        
        let colors = this.allColors.slice(0, data.wallSectionCount);

        return new Level(currentLevel, colors, data.tempo, data.wallInterval, data.wallSectionCount, data.background);
    }
}



// Gubben: En färg.
// Väggen: Tre färger.
// Hastighet: Långsamt.
// Bakgrund: 1.

// Gubben: En annan färg.
// Väggen: Fyra färger.
// Hastighet: Långsamt.
// Bakgrund: 1.

// Gubben: En annan färg.
// Väggen: Fyra färger.
// Hastighet: Medel.
// Bakgrund: 2.

// Gubben: Byter färg efter var tredje vägg.
// Väggen: Fyra färger, olika storlekar.
// Hastighet: Medel.
// Bakgrund: 2.

// Gubben: Byter färg efter varannan vägg.
// Väggen: Fyra färger, olika storlekar.
// Hastighet: Medel.
// Bakgrund: 3.

// Gubben: Byter färg efter varje vägg.
// Väggen: Fyra färger, olika storlekar.
// Hastighet: Medel.
// Bakgrund: 3.

// Gubben: Byter färg efter varje vägg.
// Väggen: Fyra färger, olika storlekar.
// Hastighet: Snabbt.
// Bakgrund: 4.

// Gubben: Byter färg efter varje vägg.
// Väggen: Fem färger, olika storlekar.
// Hastighet: Snabbt.
// Bakgrund: 4.

// Gubben: Byter färg efter varje vägg.
// Väggen: Sex färger, olika storlekar.
// Hastighet: Snabbt.
// Bakgrund: 5.

// Gubben: Byter färg efter varje vägg.
// Väggen: Sju färger, olika storlekar.
// Hastighet: Snabbt.
// Bakgrund: 5.

