class Umbrella {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.circle(x, y, 50, options);
    this.r = 50;
    this.image = loadImage("man.png");
    World.add(world, this.body);
  }
  display() {
    imageMode(CENTER);
    image(
      this.image,
      this.body.position.x,
      this.body.position.y + 70,
      300,
      300
    );
  }
}
