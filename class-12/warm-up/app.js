'use strict';

// grabbing our button elements
var currentValueEl = document.getElementById('result');
var addButton = document.getElementById('add-bttn');
var subButton = document.getElementById('sub-bttn');
var numberInput = document.getElementById("number1");

// a function for handling a click?
function handleClick(event) {
  var currentValueNum = parseInt(currentValueEl.textContent);
  event.preventDefault();
  var elementClicked = event.target;
  var inputValue = parseInt(numberInput.value);
  var newValue = 0;

  if (elementClicked.id === "add-bttn") {
    newValue = currentValueNum + inputValue;
  } else if (elementClicked.id === "sub-bttn") {
    newValue = currentValueNum - inputValue;
  }

  currentValueEl.textContent = newValue;

  console.log(numberInput.value, elementClicked.id);
}

// adding our event handlers to our button elements
addButton.addEventListener('click', handleClick);
subButton.addEventListener('click', handleClick);