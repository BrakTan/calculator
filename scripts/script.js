let firstOperand = 0;
let secondOperand = 0;
let operator = '';

function add(a ,b){
    return a+b;
}

function substract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, operand1, operand2){
    switch(operator){
        case '+':
            return add(operand1, operand2);
            break;
        case '-':
            return substract(operand1, operand2);
            break;
        case '*':
            return multiply(operand1, operand2);
            break;
        case '/':
            return divide(operand1, operand2);
            break;
        default:
            return 0;
    }
}

console.log(operate('+',10,5));
console.log(operate('-',10,5));
console.log(operate('*',10,5));
console.log(operate('/',10,5));