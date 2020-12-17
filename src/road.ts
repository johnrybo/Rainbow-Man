class Road {
    update() { }

    draw() {
        background('blue');
        fill('lightgrey');
        quad(width * .3, 100, width * .7, 100, width -100, height, 100, height);
    }
}