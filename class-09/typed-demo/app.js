'use strict';

var pokedex = [];

// If we are passing a function as a value, into an event listener
function logger(event) {
  console.log('Input changed', event.target.name, event.target.value);
}

function Pokemon(name, hp, att, def) {
  this.name = name
  this.health = hp;
  this.attack = att;
  this.defense = def;
}

// on form submission, we do thiis
function createPokemon(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var hp = event.target.hp.value;
  var att = event.target.att.value;
  var def = event.target.def.value;
  var newPokemon = new Pokemon(name, hp, att, def);
  pokedex.push(newPokemon);
  console.log(pokedex);
}

var nameInput = document.getElementById('name');
var hpInput = document.getElementById('hp');
var attInput = document.getElementById('att');
var defInput = document.getElementById('def');
var formElement = document.getElementById('pokemon-form');

// assign an event listener to an element, and pass a function as a value
nameInput.addEventListener('input', logger);
hpInput.addEventListener('input', logger);
attInput.addEventListener('input', logger);
defInput.addEventListener('input', logger);

// handling the default form submission
// formElement.addEventListener('submit', function (event) {
//   event.preventDefault();
// });

formElement.addEventListener('submit', createPokemon);