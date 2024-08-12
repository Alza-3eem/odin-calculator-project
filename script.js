const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num2 === 0 ? "WTF" : num1 / num2;

const buttons = document.querySelectorAll(".btn")
const display = document.getElementById("display")
const clearBtn = document.getElementById("clear")
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")
const multiplyBtn = document.getElementById("multiply")
const divideBtn = document.getElementById("divide")
const equalsBtn = document.getElementById("equals")

let currentInput = "";
let num1 = null;
let operator = null;

buttons.forEach(button => { 
    button.addEventListener("click", () => {
       if (button.innerText === "+" || button.innerText === "-" || button.innerText === "*" || button.innerText === "/") {
        if (num1 === null) {
            num1 = parseFloat(currentInput);
            operator = button.innerText;
            currentInput = "";
        } else if (currentInput !== "") {
            num1 = performOperation(num1, parseFloat(currentInput), operator);
        }
       } else if (button.innerText === "=") {
            if (operator && currentInput !== "") {
                currentInput = performOperation(num1, parseFloat(currentInput), operator).toString();
                operator = null;
                num1 = null;
            }
       } else {
        currentInput += button.innerText;
       }
       display.innerText = currentInput;
    });
});

clearBtn.addEventListener("click", () => {
    display.innerText = "";
    currentInput = "";
    num1 = null;
    operator = null;
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