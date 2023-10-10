let firstOperand = 0;
let secondOperand = 0;
let operator = '';
let incrementation = 2;

let operation = '';

let result = 0;

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

let numberButtons = document.querySelectorAll('.numberButtons button');
let currentOperationCursor = document.querySelector('.cursor');
let currentOperationCalcul = document.querySelector('.currentOperationCalcul');
let resetButton = document.querySelector('.reset');

numberButtons.forEach(button => {
    let value = button.getAttribute('value');
    button.addEventListener('click', function() {
        operation += value;
        currentOperationCalcul.innerHTML = operation;
    })
})

resetButton.addEventListener('click', function() {
    operation = '';
    currentOperationCalcul.innerHTML = '';
})


setInterval(function(){
    if(currentOperationCursor.getAttribute('visibility') == 'visible'){
        currentOperationCursor.style.visibility = 'hidden';
        currentOperationCursor.setAttribute('visibility', 'hidden');
    }
    else if(currentOperationCursor.getAttribute('visibility') == 'hidden'){
        currentOperationCursor.style.visibility = 'visible';
        currentOperationCursor.setAttribute('visibility', 'visible');
    }

},500)

console.log(operate('+',10,5));
console.log(operate('-',10,5));
console.log(operate('*',10,5));
console.log(operate('/',10,5));

console.log()