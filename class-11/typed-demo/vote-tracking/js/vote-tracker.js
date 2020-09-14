'use strict';

// I want to be able to reference ( I want a variable for ) each of my Pokemon
//  Type of Pokedex
var pokedex = [];
var userVotes = 0;

// getting a random index values
// console.log(Math.floor(Math.random() * pokedex.length));

// I need some reference to my HTML
// Template for my Pokemon
//   Does my Pokemon have a button?  div
var listEl = document.getElementById('pokemon-list');
var pokemon1 = document.getElementById('pokemon1');
var pokemon2 = document.getElementById('pokemon2');
var name1 = document.getElementById('name1');
var name2 = document.getElementById('name2');
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var count1 = document.getElementById('count1');
var count2 = document.getElementById('count2');

// Each of my Pokemon in the Pokedex need some personal data
// name
// votes / clicks
// image
// number of times they appear on the screen

function Pokemon(name, image) {
  this.name = name;
  this.image = image;
  this.votes = 0;
  this.timesShown = 0;
}

Pokemon.prototype.render = function () {

}

var Charizard = new Pokemon('Charizard', 'https://cdn.bulbagarden.net/upload/7/7e/006Charizard.png');
pokedex.push(Charizard);
var Bulbasaur = new Pokemon('Bulbasaur', 'https://cdn.bulbagarden.net/upload/7/73/002Ivysaur.png');
pokedex.push(Bulbasaur);

pokemon1.id = Charizard.name;
name1.textContent = Charizard.name;
image1.src = Charizard.image;
pokemon2.id = Bulbasaur.name;
name2.textContent = Bulbasaur.name;
image2.src = Bulbasaur.image;

// some function that run on an event (click)
//  event on the pokemon that are displayed in my HTML

// addEventListener(eventName, a function)

function handleClick(event) {
  userVotes += 1;
  if (userVotes > 24) {
    listEl.removeEventListener('click', handleClick); // is this defined?
  }
  // event => on object that gets created whenever occurs.
  //   comes from our HTML
  console.log('list has been clicked', event.target.parentElement);
  var pokemon = event.target.parentElement.getAttribute('id');

  for (var i = 0; i < pokedex.length; i++) {
    if (pokemon === pokedex[i].name) {
      pokedex[i].votes += 1;
      console.log(pokedex[i].votes);
      event.target.parentElement.children[2].textContent = pokedex[i].votes;
    }
  }
  console.log(event.target.parentElement.children[2]);
};

// if (someone clicks our html) {
//   handleClick()
// }
listEl.addEventListener('click', handleClick);

// when do we want to remove this listener??
