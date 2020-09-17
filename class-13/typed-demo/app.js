'use strict';


function Product(name) {
  this.name = name;
}

var form = document.getElementById('product-form');

function handleSubmit(event) {
  event.preventDefault();
  var value = event.target.product.value;
  var selectValue = event.target.select.value;
  console.log(selectValue);

  // built in function called JSON.stringify(), this turnd objects into strings;


  var newProduct = new Product(value);
  var thingToSave = JSON.stringify(newProduct);

  localStorage.setItem('formValue', thingToSave);

  var thingFromStorage = localStorage.getItem('formValue');
  // we have to use JSON.parse in order to turn our data from type string, back into type object.

  var objectFromStorage = JSON.parse(thingFromStorage);

  console.log(objectFromStorage, objectFromStorage.name);
}

localStorage.setItem('bigArray', JSON.stringify([
  { name: 'Jacob' },
  100,
]));

var arrayFromStorage = JSON.parse(localStorage.bigArray);

console.log(arrayFromStorage[0]);

console.log(localStorage);

form.addEventListener('submit', handleSubmit);