class Road {
    update() { }

    draw() {
        background('blue');
        fill('grey');
        quad(width * .3, 100, width * .7, 100, width -100, height, 100, height);
    }
}