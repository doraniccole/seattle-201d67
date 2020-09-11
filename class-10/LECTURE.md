# Class 10: JS Debugging

## Warm Up
- continue our Pokemon constructor
- Given the Code below refactor our prompt workflow into one that uses an HTML form, and event handlers.

```js

'use strict';

// function for creating the pokemon
function Pokemon(name, hp, att, def) {
  this.name = name
  this.health = hp;
  this.attack = att;
  this.defense = def;
}

// Convert this to a form:
var nameArgument = prompt('What is your pokemon\'s name ?');
var hpArgument = prompt('How much health do they have?');
var attArgument = prompt('How much attack power?');
var defArgument = prompt('How much defense?');

// Executed on a form submission event.
var UserPokemon = new Pokemon(nameArgument, hpArgument, attArgument, defArgument);

```

## Code Review

- Salmon Cookies
  - Modify an existing row?
    - Doing way more, using a method that makes sense to humans.
  - Know what's possible
  - removing data from an element

- Mark:
  - iterated through cells and replaced textContent.
  - How many times are you iterating?

```js
var element = documen.createElement('div');
element.textContent = 'something to display';

element.innerHTML = null;
```

## Debugging

- The 4 javascript runtime errors

1) Syntax Error:
   - Miss places character { ], comma when supposed a period.
2) Reference Error:
   - Some variable doesn't exist ( misspeling ), it exists outside of function scope;
3) Type error;
   - you are trying to do something on the wron type
   - Using a string method on not a string
4) Range Error:
  - Your trying to do something with a numeric that is invalid.

### Try / Catch statement
- allows us to capture runtimie errors, without fully blocking our script.

