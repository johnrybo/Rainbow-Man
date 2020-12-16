class Character {

    private x: number;
    private y: number;
    private speed: number;

    constructor() {
        this.x = width / 2;
        this.y = height - 150;
        this.speed = 30;
    }

    update() { }

    draw() {
        imageMode(CENTER);
        image(characterImg, this.x, this.y);
        this.moveCharacter();
    }

    private moveCharacter() {

        if (keyIsPressed) {
            if (keyCode == LEFT_ARROW && this.x !> 200) {
                this.x -= this.speed;
            }
        } 
        
        if (keyIsPressed) {
            if (keyCode == RIGHT_ARROW && this.x !< (width - 200)) {
                this.x += this.speed;
            }
        }
    }

    /*
    private hitBox() {
        if (this.y === wall.y) {
            // game over
        } else if (this.y === item.y) {
            // add item
        }
    }
    */

}