const screen = document.querySelector(".screen");
const operator = document.querySelectorAll(".operators div");
const number = document.querySelectorAll(".numbers div");
let clear = document.getElementById("clear");
let result = document.getElementById("result");
let resultDisplayed = false;

// Looping over numbers
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', (e) => {
    // storing current clicked digit(String) & last character in variable ~ used later
    let currentDigit = screen.innerHTML;
    let lastChar = currentDigit[currentDigit.length -1];

    // if final result is not displayed, keep adding digits
    if (resultDisplayed === false) {
      screen.innerHTML += e.target.innerHTML;
    }

    else if (resultDisplayed === true && 
      lastChar === '+' || 
      lastChar === '-' ||
      lastChar === 'x' ||
      lastChar === '÷') {
        /* if result is currently displayed and operator is pressed, 
        keep on joining digits for next operation */
        resultDisplayed = false;
        screen.innerHTML += e.target.innerHTML;
      }
      
      else {
        /* if result is currently displayed and number is pressed
        we need to clear the new input to start new operation */
        resultDisplayed = false;
        screen.innerHTML = "";
        screen.innerHTML += e.target.innerHTML;

      }
  })
}


// Adding click handlers to the number buttons
/* looping over operators */
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', (e) => {
    // storing current screen string and its last character in variables - used later
    let currentDigit = screen.innerHTML;
    let lastChar = currentDigit[currentDigit.length -1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "x" ||
        lastChar === "÷" 
      ) {
        let newStr = currentDigit.substring(0, currentDigit.length -1) + e.target.innerHTML;
        screen.innerHTML = newStr;
      }

      else if (currentDigit.length == 0) {
        // if first key pressed is an opearator, don't do anything
        console.log('enter a number first')
      } else {
        // else just add the operator pressed to the screen
        screen.innerHTML += e.target.innerHTML;
      }
  })
}

// on click of the 'equal' button
result.addEventListener('click', () => {
   // this is the string that we will be processing eg. -10+26+33-56*34/23
  let screenString = screen.innerHTML;

   // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
   let numbers = screenString.split(/\+|\-|\×|\÷/g);

   // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  let operators = screenString.replace(/[0-9]|\./g, "").split("");

  console.log(screenString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  let divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide +1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  let multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  let subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  let add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  screen.innerHTML = numbers[0]; // displaying the output
  resultDisplayed = true; // turning flag if result is displayed
});

// clearing the input on press of clear
clear.addEventListener('click', () => {
  screen.innerHTML = "";
})

