// Global Variables
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let total = null;
let resetDisplay = false;


// HTML Selectors
const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".opButton");
const calcButton = document.querySelector("#calcButton");

display.textContent = null;

// Calculator Functions
function operate(a, operator, b) {
    a = Number(a);
    b = Number(b);
    switch(true) {
        case (operator === "+"):
            return a + b;
        case (operator === "−"):
            return a - b;
        case (operator === "×"):
            return a * b;
        case (operator === "÷"):
            if (b === 0) {
                alert("You can't divide by 0!");
                return 0;
            } else{
                return a / b;
            }
    }
}

function clearDisplay() {
    removeActive();
    display.textContent = null;
    resetDisplay = false;
}

function clearAll() {
    clearDisplay();
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    total = null;
}

function updateDisplay(number) {
    if (display.textContent === null || (display.textContent === "0" && number != ".")) {
        clearDisplay();
    } else if (number === "." && display.textContent.includes(".")) {
        return;
    }
    display.textContent += number;
}

function calculate() {
    if (!currentOperator || resetDisplay){
        return;
    } else {
        secondOperand = display.textContent;
        total = operate(firstOperand, currentOperator, secondOperand);
        firstOperand = total;
        currentOperator = null;
        clearDisplay();
        updateDisplay(Math.round(total * 100000000000) / 100000000000);
    }
}

function removeActive() {
    opButtons.forEach((button) => {
        button.classList.remove("active");
    });
}

// Event Listeners
clearButton.addEventListener("click", () => {
    clearAll();
});

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (resetDisplay === true) {
            clearDisplay();
        } 
        updateDisplay(button.textContent);
    });
}); 

opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (currentOperator) {
            calculate();
        }
        removeActive();
        button.classList.add("active");
        currentOperator = button.textContent;
        firstOperand = display.textContent;
        resetDisplay = true;
    });
});

calcButton.addEventListener("click", () => {
    removeActive();
    calculate();
});