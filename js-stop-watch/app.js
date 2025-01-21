// Select elements
const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let elapsedTime = 0;
let timerInterval;

// Function to start the timer
function startTimer() {
  const startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    displayTime(elapsedTime);
  }, 10);

  toggleButtons(true);
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
  toggleButtons(false);
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerEl.textContent = "00:00:00.00";
  toggleButtons(false);
}

// Function to display time
function displayTime(milliseconds) {
  const ms = Math.floor((milliseconds % 1000) / 10);
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));

  timerEl.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(ms).padStart(2, "0")}`;
}

// Function to enable/disable buttons
function toggleButtons(isRunning) {
  startButtonEl.disabled = isRunning;
  stopButtonEl.disabled = !isRunning;
}

// Add event listeners
startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
