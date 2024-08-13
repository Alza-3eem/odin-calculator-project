const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num2 === 0 ? "Error" : num1 / num2;

const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const clearBtn = document.getElementById("btn-clear");
const equalsBtn = document.getElementById("btn-equals");

let currentInput = "";
let currentResult = null;
let operator = null;
let shouldResetDisplay = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;
        
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentResult !== null && currentInput !== "") {
                currentResult = performOperation(currentResult, parseFloat(currentInput), operator);
                display.innerText = currentResult;
                currentInput = "";
            } else {
                currentResult = parseFloat(currentInput);
                currentInput = "";
            }
            operator = value;
            shouldResetDisplay = false;
        } else if (value === '=') {
            if (operator && currentInput !== "") {
                currentResult = performOperation(currentResult, parseFloat(currentInput), operator);
                display.innerText = currentResult;
                currentInput = currentResult;
                operator = null; 
                shouldResetDisplay = true; 
            }
        } else if (value === 'CLR') {
            currentResult = null;
            operator = null;
            currentInput = "";
            display.innerText = "";
        } else {
            if (shouldResetDisplay) {
                currentInput = value;
                shouldResetDisplay = false;
            } else {
                currentInput += value;
            }
            display.innerText = currentInput;
        }
    });
});

function performOperation(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Error";
    }
}
