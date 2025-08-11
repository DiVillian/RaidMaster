// RaidMaster Prototype main script

// Canvas and context setup
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Player state
const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 20,
  speed: 100, // pixels per second
  vx: 0,
  vy: 0
};

// Input state
const keys = {};

// Debug overlay element
const debugDiv = document.getElementById('debug');

// Key handlers
window.addEventListener('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
});
window.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

// Game loop timing
let lastTime = performance.now();

function update(dt) {
  // Reset velocity
  player.vx = 0;
  player.vy = 0;

  // Determine velocity based on input
  if (keys['arrowup'] || keys['w']) player.vy = -1;
  if (keys['arrowdown'] || keys['s']) player.vy = 1;
  if (keys['arrowleft'] || keys['a']) player.vx = -1;
  if (keys['arrowright'] || keys['d']) player.vx = 1;

  // Normalize diagonal movement
  const mag = Math.hypot(player.vx, player.vy);
  if (mag > 0) {
    player.vx /= mag;
    player.vy /= mag;
  }

  // Update position
  player.x += player.vx * player.speed * dt;
  player.y += player.vy * player.speed * dt;

  // Keep player within bounds
  player.x = Math.max(player.size / 2, Math.min(canvas.width - player.size / 2, player.x));
  player.y = Math.max(player.size / 2, Math.min(canvas.height - player.size / 2, player.y));
}

function draw() {
  // Clear canvas
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw player as a square
  ctx.fillStyle = '#4caf50';
  ctx.fillRect(player.x - player.size / 2, player.y - player.size / 2, player.size, player.size);
}

function renderDebug() {
  debugDiv.textContent = `Position: (${player.x.toFixed(1)}, ${player.y.toFixed(1)}) | Speed: ${player.speed.toFixed(0)} px/s`;
}

function gameLoop(time) {
  const dt = (time - lastTime) / 1000;
  lastTime = time;
  update(dt);
  draw();
  renderDebug();
  requestAnimationFrame(gameLoop);
}

// Start the loop
requestAnimationFrame(gameLoop);
