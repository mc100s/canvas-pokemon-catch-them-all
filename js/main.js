const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Constants
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const GRAVITY = 1;
const BOUNCING_SPEED = -25;
const SCORE_BALL_SPEED = 2;
const FRAMES_BETWEEN_SCORE_BALLS = 120;

// Global variables
let frame = 0; // The frame counter
let player = new Player();
let scoreBalls = [];

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

  player.draw(ctx);

  // Draw all scoreBalls
  for (let i = 0; i < scoreBalls.length; i++) {
    scoreBalls[i].draw(ctx);
  }

  drawScore(ctx);
}

// updateEverything update variables
// It shouldn't draw on the canvas
function updateEverything() {
  frame++;

  // Create new ScoreBall every FRAMES_BETWEEN_SCORE_BALLS frames
  if (frame % FRAMES_BETWEEN_SCORE_BALLS === 0) {
    scoreBalls.push(new ScoreBall());
  }

  player.update();

  // Update all scoreBalls and check for collision
  for (let i = scoreBalls.length - 1; i >= 0; i--) {
    scoreBalls[i].update();
    if (checkCollision(player, scoreBalls[i])) {
      player.score += scoreBalls[i].score;
      scoreBalls.splice(i, 1);
    }
  }

  removeUselessScoreBalls();
}

function drawScore(ctx) {
  ctx.save();
  ctx.font = "40px Arial";
  ctx.fillText("Score: " + player.score, CANVAS_WIDTH - 220, 60);
  ctx.restore();
}

function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

// Return true when player and scoreBall are colliding
function checkCollision(player, scoreBall) {
  return distance(player, scoreBall) < player.radius + scoreBall.radius;
}

function removeUselessScoreBalls() {
  scoreBalls = scoreBalls.filter(scoreBall => {
    return scoreBall.y - scoreBall.radius - 20 < CANVAS_HEIGHT;
  });
}

// Listen for key events
document.onkeydown = event => {
  console.log(event.keyCode);
  // left
  if (event.keyCode === 37) {
    player.vx = -10;
  }
  // right
  if (event.keyCode === 39) {
    player.vx = 10;
  }
};
