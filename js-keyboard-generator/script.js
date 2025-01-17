const keyBoardInput = document.querySelector(".keyboard");
const keyTextDisplay = document.getElementById("key-text");
const keyCodeDisplay = document.getElementById("ans");
const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;

keyBoardInput.addEventListener("keyup", (e) => {
  keyCodeDisplay.textContent = e.keyCode;
  keyTextDisplay.textContent = e.key;
});

// Toggle between light and dark mode
themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
