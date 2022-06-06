class claculator {
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement;
        this.currentTextElement = currentTextElement;

    }
    clear() {
        this.currentTextElement.innerText = '';
        this.previousTextElement.innerText = '';
        this.operation = undefined;
    }
    delete() {
        this.current = this.current.toString().slice(0, -1);

    }
    appendNumber(number) {
        if (number === '.' && this.currentValue.includes('.')) return;
        this.current = this.current.toString() + number.toString();
    }
}
chooseOperation(operation) {
    if (this.current === '')
        if (this.previous !== '') {
            this.compute();
        }
    this.operation = operation;
    this.previous = this.current;
    this.current = '';

}
compute() {
    let computation;
    const prev = parseFloat(this.previous);
    const current = parseFloat(this.current);
    if (isNaN(prev) || isNaN(current))
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
        }
    this.current = computation;
    this.operation = undefined;
    this.previous = '';
}
getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerdigit = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;

    if (isNaN(integerdigit)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerdigit.toLocaleString('en', { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    } else {
        return integerDisplay;
    }
    return floatNumber.toLocaleString('en');
}

updateDisplay() {
    this.currentTextElement.innerText = this.currentValue;
    this.previousTextElement.innerText = this.previousValue;
}

const numberbutton = document.querySelectorAll('[data-number]');
const operatorbutton = document.querySelectorAll('[data-operator]');
const equalsbutton = document.querySelector('[data-equals]');
const allclearbutton = document.querySelector('[data-all-clear]');
const deletebutton = document.querySelector('[data-delete]');
const previousTextElement = document.querySelector('[data-previous]');
const currentTextElement = document.querySelector('[data-current]');
const calculator = new claculator(previousTextElement, currentTextElement);
numberbutton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})
operatorbutton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})
equalsbutton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})
allclearbutton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})
deletebutton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})