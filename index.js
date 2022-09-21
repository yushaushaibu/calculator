const screen = document.querySelector('.screen');
const operators = document.querySelectorAll('.operators div');
const number = document.querySelectorAll('.numbers div');
let clear = document.getElementById('clear');
let result = document.getElementById('result');
let resultDisplayed = false;

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', (e) => {
        // storing current clicked digit(String) & last character in variable
        let currentDigit = screen.innerHTML;
        let lastChar = currentDigit[currentDigit.length -1];

        // if final result is not displayed, keep joining digits
        if (resultDisplayed === false) {
            screen.innerHTML += e.target.innerHTML;
        }
        else if (resultDisplayed === true && lastChar === '+' || lastChar === '-' || last === 'x' || lastChar === '÷') {

        /* if result is currently displayed and operator is pressed,
        keep on joining digits for next operation */
        resultDisplayed = false;
        screen.innerHTML += e.target.innerHTML;
        } else {
            /* if result is currently displayed and number is pressed 
            we need to clear the new input to start new operation */
            resultDisplayed = false;
            screen.innerHTML = "";
            screen.innerHTML = e.target.innerHTML;
        }
    })
}