/* Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation. */

const calculator = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
}

const number1 = 5;
const number2 = 3;
const operator = '+';
const result = calculator(number1, operator, number2);
console.log(result);
