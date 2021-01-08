interface LevelData {
    wallSectionCount: number;
    tempo: number;
    background: p5.Image;
}

class LevelFactory {
    private levelData: LevelData[];
    private allColors: string[];

    constructor() {
        this.allColors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];
        this.levelData = [
            {
                wallSectionCount: 3,
                tempo: 1,
                background: backgroundLevel1,
            },
            {
                wallSectionCount: 4,
                tempo: 1,
                background: backgroundLevel2,
            },
            {
                wallSectionCount: 4,
                tempo: 2,
                background: backgroundLevel3,
            },
            {
                wallSectionCount: 4,
                tempo: 2,
                background: backgroundLevel4,
            },
            {
                wallSectionCount: 4,
                tempo: 2,
                background: backgroundLevel5,
            },
            {
                wallSectionCount: 4,
                tempo: 2,
                background: backgroundLevel6,
            },
            {
                wallSectionCount: 4,
                tempo: 3,
                background: backgroundLevel7,
            },
            {
                wallSectionCount: 4,
                tempo: 3,
                background: backgroundLevel1,
            },
            {
                wallSectionCount: 4,
                tempo: 3,
                background: backgroundLevel2,
            },
            {
                wallSectionCount: 4,
                tempo: 3,
                background: backgroundLevel6,
            }
        ];
    }

    public getLevel(level: number): Level {
        const data = this.levelData[level - 1];
        const colors = this.allColors.slice(data.wallSectionCount);

        return new Level(level, colors, data);
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

