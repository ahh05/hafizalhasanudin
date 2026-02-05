// Get the display input
const display = document.getElementById('display');

// Add number or operator to display
function appendToDisplay(value) {
  // Prevent multiple operators in a row
  const lastChar = display.value.slice(-1);
  if ('+-*/'.includes(value) && '+-*/'.includes(lastChar)) return;
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Calculate result
function calculateResult() {
  try {
    // Use eval safely because input comes only from buttons
    display.value = eval(display.value);
  } catch (err) {
    display.value = 'Error';
  }
}
