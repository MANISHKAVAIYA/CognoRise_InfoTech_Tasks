let expression = "";
let result = "";

function updateDisplay() {
  document.getElementById("expression").innerText = expression;
  document.getElementById("result").value = result;
}

function appendToDisplay(value) {
  expression += value;
  updateDisplay();
}

function clearDisplay() {
  expression = "";
  result = "";
  updateDisplay();
}

function operate(operator) {
  if (expression !== "" && !isNaN(expression[expression.length - 1])) {
    expression += operator;
    updateDisplay();
  }
}

function calculate() {
  try {
    result = eval(expression);
    updateDisplay();
    expression = result.toString();
  } catch (error) {
    alert("Invalid expression!");
  }
}

window.onload = updateDisplay;
