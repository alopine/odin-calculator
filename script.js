// Global Variables
let displayValue;
let currentOperator;
let inputA;
let inputB;
let operatorActive = false;
let inputMode = "A";


// HTML Selectors
const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".opButton");
const calcButton = document.querySelector("#calcButton");


// Calculator Functions
function operate(a, operator, b) {
    switch(true) {
        case (operator === "+"):
            return a + b;
        case (operator === "-"):
            return a - b;
        case (operator === "*"):
            return a * b;
        case (operator === "/"):
            return a / b;
    }
}

function updateDisplay(number) {
    display.textContent += number;
    displayValue = parseInt(display.textContent);
}

function clearDisplay() {
    display.textContent = null;
    displayValue = null;
    currentOperator = null;
    inputA = null;
    inputB = null;
    operatorActive = false;
}


// Event Listeners
clearButton.addEventListener("click", () => {
    clearDisplay();
});

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operatorActive && (inputMode !== "B")) {
            display.textContent = null;
            displayValue = null;
            inputMode = "B"
        }
        updateDisplay(button.textContent);
        console.log(inputA, currentOperator, inputB);
    });
}); 

opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentOperator = button.textContent;
        inputA = displayValue;
        operatorActive = true;
        console.log(inputA, currentOperator, inputB);
    });
});

calcButton.addEventListener("click", () => {
        inputB = displayValue;
        display.textContent = null;
        displayValue = null;
        updateDisplay(operate(inputA, currentOperator, inputB));
        console.log(inputA, currentOperator, inputB);
        inputMode = "A";
});