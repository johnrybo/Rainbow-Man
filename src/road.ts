class Road {
    update() { }

    draw() {
        push()
        imageMode(CORNER);
        image(backgroundLevel1, 0, 0, width, height);
        fill('lightgrey');
        noStroke();
        
        quad(width * .3, 100, width * .7, 100, width * .9, height, width * .1, height);
        pop();
    }
}