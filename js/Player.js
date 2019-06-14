class Player {
  constructor() {
    this.radius = 40;
    this.x = this.radius;
    this.y = CANVAS_HEIGHT / 2;
    this.vx = 0;
    this.vy = 0;
    this.score = 0;
    this.life = 3;

    this.img = new Image();
    this.img.src = "https://i.imgur.com/B6P616j.png";
  }
  draw(ctx) {
    ctx.save();

    ctx.fillStyle = "#3366ee";

    // Draw the circle
    if (DEBUG) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    }

    // Draw the image
    ctx.translate(this.x, this.y);
    let size = 4 * this.radius;
    ctx.drawImage(this.img, -size / 2, -size / 2, size, size);

    ctx.restore();
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;

    // To add as a limit the border of the canvas
    if (this.x - this.radius < 0) this.x = this.radius;
    if (this.x + this.radius > CANVAS_WIDTH)
      this.x = CANVAS_WIDTH - this.radius;
    if (this.y - this.radius < 0) this.y = this.radius;
    if (this.y + this.radius > CANVAS_HEIGHT)
      this.y = CANVAS_HEIGHT - this.radius;
  }
}
