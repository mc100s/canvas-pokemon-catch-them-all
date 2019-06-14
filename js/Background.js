class Background {
  constructor() {
    this.x = 0;
    this.vx = -2;
    this.img = new Image();
    this.img.src = "https://i.imgur.com/SDLKgrr.png";
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(this.img, this.x+CANVAS_WIDTH, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
  update() {
    this.x += this.vx;
    if (this.x < -CANVAS_WIDTH) this.x = 0
  }
}
