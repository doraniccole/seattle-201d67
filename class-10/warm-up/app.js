'use strict';

function Pokemon(name, hp, att, def) {
  this.name = name
  this.health = hp;
  this.attack = att;
  this.defense = def;
}

var newPokemonSubmit = document.getElementById('new-pokemon-form');

if (newPokemonSubmit.addEventListener) {
  newPokemonSubmit.addEventListener('submit', function (e) {
    console.log(e);
    console.log(e.target.health.value);
    console.log(e.target.name.value);
    e.preventDefault();
    battleButton();
  })
}

// Grad info from our form.
function battleButton() {
  var nameInput = document.getElementById('name').value;
  var healthInput = parseInt(document.getElementById('health').value);
  var attackInput = parseInt(document.getElementById('attack').value);
  var defenseInput = parseInt(document.getElementById('defense').value);

  var newPokemon = new Pokemon(nameInput, healthInput, attackInput, defenseInput);
  console.log(newPokemon);
}