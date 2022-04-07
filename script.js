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

// Operate
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