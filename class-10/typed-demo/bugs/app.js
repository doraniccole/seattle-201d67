'use strict';

var object = {
  name: "Jacob"
}

// syntax error
// console.log(object.name{ 0]);

function myFunc() {
  var object2 = { num: 0 };
  console.log('functioin running');
}

// reference error
// console.log(object2);
// myfunc();

// type error
var string = 'Jacob'
var element = document.getElementById('wrong');

// string.push('new name');
// element.addEventListener('click', function () {
//   console.log('event fired');
// });


// allows us to capture an error in the catch block, and still be able to do useful things
try {
  // Range Error
  // var array = new Array(-1);
  var array = [0];

  console.log(array);
  if (array.length < 2) {
    throw (new Error('bad array'));
  }
} catch (error) {
  console.log(error);
  console.log('something bad happened', error.message);
}

console.log('Everything is fine');