class Drop {
  constructor(x, y, r) {
    var options = {
      restitution: 0.4,
      friction: 0.1,
      density: 0.2,
    };
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r, this.r);
    pop();
  }

  updateY() {
    if (this.body.position.y > height) {
      Matter.Body.setPosition(this.body, {
        x: random(0, 400),
        y: random(0, 400),
      });
    }
  }
}
