const buttons = document.querySelectorAll('.buttons');
const history = document.querySelector('.display-history');
const result = document.querySelector('.display-result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '+/-') {
            tooglePositiveOrNegative();
        } else if (button.textContent === '/' || button.textContent === 'x' || button.textContent === '-' || button.textContent === '+') {
            addOperator(button);
        } else if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === 'C') {
            erase();
        } else {
            if (result.textContent === '0' && button.textContent !== '.') {
                result.textContent = button.textContent;
            } else {
                result.textContent += button.textContent;
            }
        }
    });
});

const tooglePositiveOrNegative = () => {
    if (result.textContent !== '' || result.textContent !== '0') {
        result.textContent = result.textContent * -1;
    }
}

const erase = () => {
    result.textContent = '0';
    history.textContent = ''
}

const calculate = () => {
    history.textContent += ` ${result.textContent}`;
    result.textContent = eval(history.textContent);
    history.textContent += ` =`;
}

const addOperator = (button) => {
    history.textContent += `${result.textContent} ${button.textContent}`;
    result.textContent = '';
}

