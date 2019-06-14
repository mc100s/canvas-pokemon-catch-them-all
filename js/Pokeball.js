class Pokeball {
  constructor(player) {
    this.radius = 15;
    this.x = player.x + player.radius / 2;
    this.y = player.y;
    this.vx = 4;
    this.img = new Image();
    this.img.src = "https://i.imgur.com/9OG1r7r.png";
  }
  draw(ctx) {
    ctx.save();

    // Draw the image
    ctx.translate(this.x, this.y);
    let size = 2 * this.radius;
    ctx.drawImage(this.img, -size / 2, -size / 2, size, size);

    ctx.restore();
  }
  update() {
    this.x += this.vx;
  }
}
