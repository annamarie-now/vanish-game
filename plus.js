class Plus {
  constructor(randomX, randomY) {
    this.y = randomY;
    this.x = randomX;
    this.width = 15;
    this.height = 15;
    this.randX = random(2.5, -2.5);
    this.randY = random(2.5, -2.5);
  }

  //   setup() {
  //     this.plusImg = loadimage("/assets/drink_me.png");}

  draw() {
    fill(255);
    rect(this.x, this.y, 15, 5);
    rect(this.x + 5, this.y - 5, 5, 15);
    fill("black");
    noStroke();
    this.move();
    this.wallCollision();
    // image(this.plusImg, this.x, this.y);
  }
  move = () => {
    /*   if (frameCount % 120 === 0) {
      this.randomX = random(0.4, -0.4);
      this.randomY = random(0.4, -0.4);
    } */

    this.x += this.randX;
    this.y += this.randY;
  };

  wallCollision() {
    if (this.x < 0) {
      this.randX *= -1;
    }
    if (this.x > WIDTH - this.width) {
      this.randX += -1;
    }
    if (this.y < 0) {
      this.randY *= -1;
    }
    if (this.y > HEIGHT - this.height) {
      this.randY *= -1;
    }
  }
}
