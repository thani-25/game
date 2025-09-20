let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

// Handle guess
function checkGuess() {
  const guess = Number(input.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⚠️ Please enter a number between 1 and 100.";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! You found it in ${attempts} tries.`;
    message.style.color = "green";
    guessBtn.disabled = true;
    restartBtn.style.display = "inline-block";
    document.body.style.background = "linear-gradient(135deg, #56ab2f, #a8e063)";
  } else if (guess < secretNumber) {
    message.textContent = "🔼 Too low, try a higher number.";
    message.style.color = "#333";
  } else {
    message.textContent = "🔽 Too high, try a lower number.";
    message.style.color = "#333";
  }
  input.value = "";
  input.focus();
}

// Guess button click
guessBtn.addEventListener("click", checkGuess);

// Enter key press = submit
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// Restart button
restartBtn.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = "";
  message.style.color = "#333";
  input.value = "";
  guessBtn.disabled = false;
  restartBtn.style.display = "none";
  document.body.style.background = "linear-gradient(135deg, #74ebd5, #ACB6E5)";
  input.focus();
});
