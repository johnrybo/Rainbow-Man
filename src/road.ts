class Road {
    update() { }

    draw() {
        image(backgroundLevel6, 0, 0, windowWidth, windowHeight);
        fill('lightgrey');
        noStroke();
        
        quad(width * .3, 100, width * .7, 100, width - 100, height, 100, height);
        
    }
}