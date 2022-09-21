const screen = document.querySelector(".screen");
const operator = document.querySelectorAll(".operators div");
const number = document.querySelectorAll(".numbers div");
let clear = document.getElementById("clear");
let result = document.getElementById("result");
let resultDisplayed = false;

// Looping over numbers
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (e) => {
    // storing current clicked digit(String) & last character in variable ~ used later
    let currentDigit = screen.innerHTML;
    let lastChar = currentDigit[currentDigit.length - 1];

    // if final result is not displayed, keep joining digits
    if (resultDisplayed === false) {
      screen.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      last === "x" ||
      lastChar === "÷"
    ) {
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
  });
}

// Adding click handlers to number buttons
// looping over operators
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    // storing current screen string and its last character in variables - used later
    let currentDigit = screen.innerHTML;
    let lastChar = currentDigit[currentDigit.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "x" ||
      lastChar === "÷"
    ) {
      let newStr = currentDigit.substring(0, currentString.length - 1) + e.target.innerHTML;
      screen.innerHTML = newStr;
    } else if (currentDigit.length == 0) {
      // if first key pressed is an opearator, don't do anything
      console.log("enter a number first");
    } else {
      // else just add the operator pressed to the input
      screen.innerHTML += e.target.innerHTML;
    }
  });
}
