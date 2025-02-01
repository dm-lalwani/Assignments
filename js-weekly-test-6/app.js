const tiles = document.querySelectorAll(".tile");
const attemptsEl = document.getElementById("attempts");
const restartBtn = document.getElementById("restart");

const symbols = ["🍇", "🍉", "🚗", "🍌", "🏠", "🥭", "🍎", "🐯"];
let randomizedSymbols = [];
let openedTiles = [];
let attempts = 0;

// Duplicate symbols to create pairs and shuffle
function shuffleSymbols() {
  const pairs = [...symbols, ...symbols];
  pairs.sort(() => Math.random() - 0.5);
  randomizedSymbols = pairs;
}

// Handle tile click
function handleTileClick(e) {
  const tile = e.target;
  const index = tile.dataset.index;

  if (tile.textContent || openedTiles.length === 2) return;

  tile.textContent = randomizedSymbols[index];
  openedTiles.push(tile);

  if (openedTiles.length === 2) {
    attempts++;
    attemptsEl.textContent = attempts;
    checkForMatch();
  }
}

// Check if two opened tiles match
function checkForMatch() {
  const [tile1, tile2] = openedTiles;

  if (tile1.textContent === tile2.textContent) {
    tile1.classList.add("matched");
    tile2.classList.add("matched");
  } else {
    setTimeout(() => {
      tile1.textContent = "";
      tile2.textContent = "";
    }, 1000);
  }

  openedTiles = [];
}

// Restart game
function restartGame() {
  attempts = 0;
  attemptsEl.textContent = attempts;
  openedTiles = [];
  shuffleSymbols();
  tiles.forEach((tile) => {
    tile.textContent = "";
    tile.classList.remove("matched");
  });
}

// Initialize game
tiles.forEach((tile) => tile.addEventListener("click", handleTileClick));
restartBtn.addEventListener("click", restartGame);
shuffleSymbols();
