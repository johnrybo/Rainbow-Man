class Road {

    draw(backgroundImage: p5.Image) {
        push()
        imageMode(CORNER);
        image(backgroundImage, 0, 0, width, height);
        fill('lightgrey');
        noStroke();
        
        quad(width * .3, 100, width * .7, 100, width * .9, height, width * .1, height);
        pop();
    }
}