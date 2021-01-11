//---- GLOBAL VARIABLES ----//
let game: Game;
let characterImgGreen: p5.Image;
let characterImgRed: p5.Image;
let characterImgBlue: p5.Image;
let characterImgYellow: p5.Image;
let characterImgIndigo: p5.Image;
let characterImgViolet: p5.Image;
let characterImgOrange: p5.Image;

let rainbowImg: p5.Image;

let backgroundLevel1: p5.Image;
let backgroundLevel2: p5.Image;
let backgroundLevel3: p5.Image;
let backgroundLevel4: p5.Image;
let backgroundLevel5: p5.Image;
let backgroundLevel6: p5.Image;
let backgroundLevel7: p5.Image;

let song: p5.SoundFile;
let collisionSound: p5.SoundFile;
let itemsSound: p5.SoundFile;
let gameOverSound: p5.SoundFile;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');

    characterImgGreen = loadImage('../assets/images/rainbowManGreen.svg');
    characterImgRed = loadImage('../assets/images/rainbowManRed.svg');
    characterImgBlue = loadImage('../assets/images/rainbowManBlue.svg');
    characterImgYellow = loadImage('../assets/images/rainbowManYellow.svg');
    characterImgIndigo = loadImage('../assets/images/rainbowManIndigo.svg');
    characterImgViolet = loadImage('../assets/images/rainbowManViolet.svg');
    characterImgOrange = loadImage('../assets/images/rainbowManOrange.svg');

    rainbowImg = loadImage('../assets/images/rainbow.png')

    backgroundLevel1 = loadImage('../assets/images/backgrounds/starting-background.jpeg');
    backgroundLevel2 = loadImage('../assets/images/backgrounds/starting-color.jpeg');
    backgroundLevel3 = loadImage('../assets/images/backgrounds/lightblue.jpeg');
    backgroundLevel4 = loadImage('../assets/images/backgrounds/pink.jpeg');
    backgroundLevel5 = loadImage('../assets/images/backgrounds/purple.jpeg');
    backgroundLevel6 = loadImage('../assets/images/backgrounds/darkblue.jpeg');
    backgroundLevel7 = loadImage('../assets/images/backgrounds/green.jpeg');
    backgroundLevel7 = loadImage('../assets/images/backgrounds/yellow.jpeg');

    song = (window as any).loadSound('../assets/music/rainbowMan.mp3');
    collisionSound = (window as any).loadSound('../assets/soundeffects/collision.wav');
    itemsSound = (window as any).loadSound('../assets/soundeffects/items.wav');
    gameOverSound = (window as any).loadSound('../assets/soundeffects/gameOverSound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    // noCursor();

    game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    push();
    game.update();
    game.draw();
    pop();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}