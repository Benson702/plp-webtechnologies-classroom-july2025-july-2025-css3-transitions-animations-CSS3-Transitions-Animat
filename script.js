// JavaScript code goes here. 
// All CSS code has been moved to a separate .css file.
// ---------- Part 2: JavaScript Functions ----------

// Global variable (accessible everywhere)
let lastResult = 0;

// Function with parameter & return value
function square(num) {
  // Local variable (only inside this function)
  let result = num * num;
  return result;
}

// Function that reuses square() and updates the DOM
function showSquare(n) {
  lastResult = square(n);  // demonstrates reusability + scope
  document.getElementById("calcResult").textContent =
    `✅ The square of ${n} is ${lastResult}`;
}

// ---------- Part 3: Combining CSS + JS ----------

// Add/remove animation class dynamically
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("animatedBox");

  // Reset the animation by removing the class if it exists
  box.classList.remove("slide");

  // Trigger reflow to restart animation
  void box.offsetWidth;

  // Add the animation class
  box.classList.add("slide");
});
