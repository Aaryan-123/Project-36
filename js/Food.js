class Food {
    constructor() {
        this.image = loadImage("images/milk.png");
        this.foodStock = 0;
        this.lastFed;
        this.hour = 4;
    }

    display() {
        var x = 80, y = 100;
        imageMode(CENTER);
        image(this.image, 220, 220, 70, 70);
        if (this.foodStock != 0) {
            for (var i = 0; i < this.foodStock; i++) {
                if (i % 10 === 0) {
                    x = 80;
                    y += 50;
                }
                image(this.image, x, y, 50, 50);
                x += 30;
            }
        }
    }

    bedroom() {
        background(bedroomImg,550,500);
    }

    garden() {
        background(gardenImg,550,500);
    }

    washroom() {
        background(washroomImg,550,500);
    }

    hour() {
    currentTime = hour();
    if(currentTime == (lastFed + 1)) {
        update("Playing");
        foods.garden();
    } else if(currentTime == (lastFed + 2)) {
        update("Sleeping");
        foods.bedroom();
    } else if(currentTime > (lastFed + 2) && currentTime <= (lastFed + 4)) {
    update("Bathing");
    foods.washroom();
    } else {
    update("Sleeping");
    foods.display();
        }
    }
}