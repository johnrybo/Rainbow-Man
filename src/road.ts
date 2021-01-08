class Road {
    update() { }

    draw() {
        push()
        imageMode(CORNER);
        image(backgroundLevel6, 0, 0, width, height);
        fill('lightgrey');
        noStroke();
        
        quad(width * .3, 100, width * .7, 100, width - 100, height, 100, height);
        pop();
    }
}