const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Constants
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const SCORE_BALL_SPEED = 2;
const FRAMES_BETWEEN_POKEMONS = 50;
const DEBUG = false;

// Global variables
let frame = 0; // The frame counter
let player = new Player();
let pokemons = [];
let bg = new Background();

function animation() {
  updateEverything();
  drawEverything(ctx);
  window.requestAnimationFrame(animation);
}
animation();

// drawEverything draws elements on the canvas
// It shouldn't modify any variable
function drawEverything(ctx) {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  if (player.life > 0) drawGame(ctx);
  else drawGameOver(ctx);
}

function drawGame(ctx) {
  bg.draw(ctx);

  player.draw(ctx);

  // Draw all pokemons
  for (let i = 0; i < pokemons.length; i++) {
    pokemons[i].draw(ctx);
  }

  drawScore(ctx);
}

function drawGameOver(ctx) {
  ctx.save();
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.font = "100px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText("GAME OVER", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 30);
  ctx.restore();
}

// updateEverything update variables
// It shouldn't draw on the canvas
function updateEverything() {
  frame++;

  // Create new Pokemon every FRAMES_BETWEEN_POKEMONS frames
  if (frame % FRAMES_BETWEEN_POKEMONS === 0) {
    pokemons.push(new Pokemon());
  }

  bg.update();
  player.update();

  // Update all pokemons and check for collision
  for (let i = pokemons.length - 1; i >= 0; i--) {
    pokemons[i].update();
    if (checkCollision(player, pokemons[i])) {
      player.life--;
      pokemons.splice(i, 1);
    }
  }

  removeUselessPokemons();
}

function drawScore(ctx) {
  ctx.save();
  ctx.font = "40px Arial";
  ctx.fillText("Life: " + player.life + "❤️", CANVAS_WIDTH - 220, 60);
  ctx.restore();
}

function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

// Return true when player and pokemon are colliding
function checkCollision(player, pokemon) {
  return distance(player, pokemon) < player.radius + pokemon.radius;
}

function removeUselessPokemons() {
  pokemons = pokemons.filter(pokemon => {
    return pokemon.x + pokemon.radius + 20 > 0;
  });
}

// Listen for key events
document.onkeydown = event => {
  console.log(event.keyCode);
  // left
  if (event.keyCode === 37) {
    player.vx = -5;
  }
  // right
  if (event.keyCode === 39) {
    player.vx = 5;
  }
  // up
  if (event.keyCode === 38) {
    player.vy = -5;
  }
  // down
  if (event.keyCode === 40) {
    player.vy = 5;
  }
};

document.onkeyup = event => {
  console.log(event.keyCode);
  // left
  if (event.keyCode === 37) {
    player.vx = 0;
  }
  // right
  if (event.keyCode === 39) {
    player.vx = 0;
  }
  // up
  if (event.keyCode === 38) {
    player.vy = 0;
  }
  // down
  if (event.keyCode === 40) {
    player.vy = 0;
  }
};
