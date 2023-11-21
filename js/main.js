const buttons = document.querySelectorAll('.buttons');
const history = document.querySelector('.display-history');
const result = document.querySelector('.display-result');

let mostRecentlyPushedButton = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '+/-') {
            togglePositiveOrNegative();
        } else if (button.textContent === '/' || button.textContent === '*' || button.textContent === '-' || button.textContent === '+') {
            addOperator(button);
        } else if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === 'C') {
            erase();
        } else {
            checkMostRecentlyPushedButton(button);
        }
        mostRecentlyPushedButton = button.textContent;
    });
});

const togglePositiveOrNegative = () => {
    if (result.textContent !== '' && result.textContent !== '0') {
        result.textContent = String(result.textContent * -1);
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
}

const checkMostRecentlyPushedButton = (button) => {
    if (result.textContent === '0' && button.textContent !== '.') {
        result.textContent = button.textContent;
    } else if (mostRecentlyPushedButton === 'C' || mostRecentlyPushedButton === '+' || mostRecentlyPushedButton === '-' || mostRecentlyPushedButton === '*' || mostRecentlyPushedButton === '/') {
        result.textContent = button.textContent;
    } else if (mostRecentlyPushedButton === '=') {
        result.textContent = button.textContent;
        history.textContent = '';
    } else {
        result.textContent += button.textContent;
    }
}

