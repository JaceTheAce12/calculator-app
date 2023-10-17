// Calculator buttons and their values
const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C','⌫'
];

// Keyboard event listener
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (isValidInput(key)) {
        addToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if(key === 'Backspace') {
        deleteLastCharacter();
    }
});

// Function to check if the input is valid (digits, operators, or Enter key)
function isValidInput(input) {
    return /^[0-9+\-*/.=]$/.test(input);
}

const buttonsContainer = document.querySelector('.buttons');

buttons.forEach(buttonValue => {
    const button = document.createElement('button');
    button.textContent = buttonValue;
    // Add buttons to page
    buttonsContainer.appendChild(button);

    if (buttonValue.match(/[0-9.]/)) {
        button.classList.add('number');
    } else if (buttonValue === '=') {
        button.classList.add('equal');
    } else if (buttonValue === 'C') {
        button.classList.add('clear');
    } else if (buttonValue === '⌫') { 
        button.classList.add('delete');
    } else {
        button.classList.add('operator');
    }

    button.addEventListener('click', () => {
        if (buttonValue === '=') {
            calculate();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else if (buttonValue === '⌫') { // Handle delete button click
            deleteLastCharacter();
        } else {
            addToDisplay(buttonValue);
        }
    });
});

// Function to delete the last character from the display
function deleteLastCharacter() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Calculator functions
function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

