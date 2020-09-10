'use strict';

// function for creating the pokemon
function Pokemon(name, hp, att, def) {
  this.name = name
  this.health = hp;
  this.attack = att;
  this.defense = def;
}

// values from the user;
var nameArgument = prompt('What is your pokemon\'s name ?');
var hpArgument = prompt('How much health do they have?');
var attArgument = prompt('How much attack power?');
var defArgument = prompt('How much defense?');

// Create the Pokemon from the constructor
var UserPokemon = new Pokemon(nameArgument, hpArgument, attArgument, defArgument);

function renderPokemon(pokemon) {


  var nameEl = document.getElementById('name');
  nameEl.textContent = pokemon.name;

  var hpEl = document.getElementById('hp');
  hpEl.textContent = pokemon.health;

  var attEl = document.getElementById('att');
  attEl.textContent = pokemon.attack;

  var defEl = document.getElementById('def');
  defEl.textContent = pokemon.defense;
}

renderPokemon(UserPokemon);
// function createPokemon() {
//   new Pokemon();
// }

// createPokemon();