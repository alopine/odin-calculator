// Global Variables
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let total = null;
let resetDisplay = false;


// HTML Selectors
const display = document.querySelector("#display");
const allClearButton = document.querySelector("#allClear");
const backspaceButton = document.querySelector("#backspace");
const percentButton = document.querySelector("#percent");
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
            } else {
                return a / b;
            }
    }
}

function clearDisplay() {
    removeActiveOp();
    display.textContent = null;
    resetDisplay = false;
}

function allClear() {
    clearDisplay();
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    total = null;
}

function backspaceClear() {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
}

function updateDisplay(number) {
    if (display.textContent === null || (display.textContent === "0" && number != "." || resetDisplay === true)) {
        clearDisplay();
    } else if (number === "." && display.textContent.includes(".")) {
        return;
    }
    display.textContent += number;
}

function calculate() {
    removeActiveOp();
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

function handleOperator(button) {
    if (currentOperator) {
        calculate();
    }
    removeActiveOp();
    button.classList.add("activeOp");
    currentOperator = button.textContent;
    firstOperand = display.textContent;
    resetDisplay = true;
}

function removeActiveOp() {
    opButtons.forEach((button) => {
        button.classList.remove("activeOp");
    });
}

// Event Listeners
allClearButton.addEventListener("click", () => {
    allClear();
});

backspaceButton.addEventListener("click", () => {
    backspaceClear();
});

percentButton.addEventListener("click", () => {
    total = operate(display.textContent, "÷", 100);
    resetDisplay = true;
    updateDisplay(Math.round(total * 100000000000) / 100000000000);
});

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        updateDisplay(button.textContent);
    });
}); 

opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        handleOperator(button);
    });
});

calcButton.addEventListener("click", () => {
    calculate();
});

// Keypress Functions
document.addEventListener("keydown", handleKeydown);

function handleKeydown(e) {
    switch(true) {
        case (e.key >= 0 || e.key <= 9):
            updateDisplay(e.key);
            break;
        case (e.key === "Backspace"):
            backspaceClear();
            break;
        case (e.key === "=" || e.key === "Enter"):
            calculate();
            break;
        case (e.key === "/"):
            handleOperator(opButtons[0]);
            break;
        case (e.key === "*"):
            handleOperator(opButtons[1]);
            break;
        case (e.key === "-"):
            handleOperator(opButtons[2]);
            break;
        case (e.key === "+"):
            handleOperator(opButtons[3]);
            break;
    };
}