# Class 08: CSS Layouts

## Warmup

- Create a Pokemon constructor function, that produces a pokemon with
  - 4 properties
    - name : string
    - health : number
    - attack : number
    - defense : number

```js

var otherName = null;

// Parameters
//  placeholders for argument values
function Pokemon(name, health, attack, defense) {
  // 'this' refers to the object that is being created;
  otherName = 'something';

  this.name = name;
  this.health = health;
  this.attack = attack;
  this.defense = defense;

  // not accessible
  console.log(this.attack);
  // not doing this so much
  this.speak = function() {
    console.log(this.name);
  }
}


// Assign a function as value onto the blueprint for making a Pokemon
Pokemon.prototype.speak = function() {
  console.log(this.name);
}


console.log(this); // refers to the global window object

// Pass our arguments into the constructor.
var pichu = new Pokemon('Pichu', 15, 8, 5);
pichu.speak();
var squishy = new Pokemon('Squishy', 9001, 4, 10);
squishy.speak();

// Pokemon fighting function
function PokemonBattle(pokemon1, pokemon2) {

  while (pokemon1.health > 0 || pokemon2.health > 0) {

    // here we
    pokemon1.health -= pokemon2.attack

  }

}

PokemonBattle(pichu, squishy);

var pokedex = [pichu, squishy];

pokedex[0] // {Pokemon}

console.log(pichu) // {name: 'Pichu', health: 15, attack: 8, defense: 5}

```

## Code Review

- Lab requirements
  - Convert all of your object literals , into object created via a constructor.
    - take the values / properties that you made, remove the values
      - `this.valueName`
      - attack proper keys within the contructor
      - methods are going to look very (Store.prototype)
  - Displaying data in a table.
    - Nested Table > tableRow > tableData / tableHeader
    - Breaking the table down to its smallest most repeatable group of elements.
      - Creating the header and the footer Row 

## Create A Layout
