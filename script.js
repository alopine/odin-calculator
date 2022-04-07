// Global Variables
let displayValue;


// HTML Selectors
const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");
const numberButtons = document.querySelectorAll(".numberButton");

// Basic Math Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


// Calculator Functions
function operate(a, operator, b) {
    switch(true) {
        case (operator === "+"):
            return add(a, b);
        case (operator === "-"):
            return subtract(a, b);
        case (operator === "*"):
            return multiply(a, b);
        case (operator === "/"):
            return divide(a, b);
    }
}

function populateDisplay(number) {
    display.textContent += number;
    displayValue = parseInt(display.textContent);
}


// Event Listeners
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        populateDisplay(button.textContent);
    });
}); 

clearButton.addEventListener("click", () => {
    display.textContent = "";
    displayValue = null;
});