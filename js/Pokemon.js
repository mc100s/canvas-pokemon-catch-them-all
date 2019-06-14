class Pokemon {
  constructor() {
    this.radius = 40;
    this.x = CANVAS_WIDTH + 200
    this.y = this.radius + 
      Math.floor((CANVAS_HEIGHT - 2 * this.radius) * Math.random());
    this.vx = -SCORE_BALL_SPEED; // Velocity y

    let randomNumber = 1 + Math.floor(150*Math.random())
    this.img = new Image();
    this.img.src = `https://pokemon-fight.surge.sh/images/pokemons/${randomNumber}.png`;
  }
  draw(ctx) {
    ctx.save(); // Save the current context state

    ctx.fillStyle = "red";

    // Draw the circle
    if (DEBUG) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    }

    // Draw the picture
    ctx.translate(this.x, this.y);
    let size = 4 * this.radius;
    ctx.drawImage(this.img, -size / 2, -size / 2, size, size);

    ctx.restore(); // Restore the context state from the begining
  }
  update() {
    this.x += this.vx;
  }
}
