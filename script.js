// Game URL configuration - update this when you deploy your WebGL build
const GAME_URL = "/play game/";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const playGameBtn = document.getElementById("play-game-btn");
if (playGameBtn) {
  playGameBtn.href = GAME_URL;
}
