# Class 06: The Document Object Model

## Review of last week

- Guessing Game?

- lab-05a: fun with functions

- Git stuff!!
  - How to git unstuck.
  - Git insights tab in github.

```js
//Question 4 / 5

// See review folder for solutions!

var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line

}

```

## Objects in JS

- A new data structure.
- a more complex variable, which can include more than one data type.

```js

var name = 'Jacob';
var age = 30;
var title = 'instructor';

var Jacob = [name, age, title];

// this is a valid way of storing info.
Jacob[0];

// an object let's us define "properties" by name on one thing.
//  This example creates an object using an "Object literal"

Jacob = {
  name: 'Jacob', // when defining an object, we must use commas when seperating properties
  age: 30,
  title: 'instructor',
  classes: ['201', '301', '401'], // this is known as a trailing comma, in js this is fine, other language not soo much.
}

console.log(Jacob) // {name: 'Jacob', age; 30, title: 'intructor'}
console.log(Jacob.age) // 30
console.log(Jacob.classes) // ['201', '301', '401']

```

### Some pros and cons

- Main benefit is we get to describe our data more.
  - our properties should have some meaning to us (as developers) or our users.
- Another is that we no longer need to perform a loop to validate and lookup information.
- Big Pro: This is a simplification of Object Oriented Programming.
  - This is a requirement for using many other programming.

```js

// this is a lookup from an object
  if (Jacob.age > 80) {
    console.log('Thats old');
  }
  if (Jacob.name !== 'Jacob') {
    console.log('uh oh');
  }
  
for (...) {
  if (arr[i] > 80) {
    console.log('Thats old');
  }
}

```

### Contextual 'this'

- 'this' is a keyword in javascript, that references the current object that our block of code points to.

```js

var Jacob = {
  name: 'Jacob',
  age: 30,
  title: this.name + ' instructor',
  classes: ['201', '301', '401'],
}

console.log(this);

```

### methods

- A function that lives on an object definition.
  
```js

// properties are referred to as 'key : values'
var Jacob = {
  name: 'Jacob',
  age: 30,
  title: 'instructor',
  classes: ['201', '301', '401'],
  speak: function() {
    console.log('Hello, I\'m ' + this.name);
  },
  print: function() {
    console.log(this);
  }
}

```

### Accessing data from an object

```js

// dot notation

Jacob.name // reference the object itself, and then dot - property.

// secondary bracket notation

Jacob["name"];

var propertyNames = ['name', 'title', 'age'];
// propertyNames[0] => name;
Jacob[propertyName[0]];

```

#### Where we're headed with this

```js

// Object constructor => an object

var Squirtle = ContructPokemon('squirtle', 100, ['waterblast', 'tackle']);

^-.. this.hp = this.hp - attackDamage;

Squirtle.turn(40);

```

## WHAT / WHY / HOW the DOM

- The Document Object Model (DOM)
  - Lives in the global runtime environment.
  - We can call out to this object, within any code block that `runs in the browser`.
  - The javascript was conceived as a multi runtime language.
    - The runtime was responsible for providing the functionality ( that js was going to interface with ).
- A built-in API (application program interface).
- Functionality includes all the features of an HTML document.
  - Creating element tags.
  - Selecting element tags.
  - adding classes.
  - Setting attributes.
  - ...etc.

```js

// We can programmatically update HTMl features using the document global object:

// check out what exists globally
document // => our entire document in HTML

// Select the container you would like to add content to.
/* Step 1 */ var section = document.getElementById('an id attribute that you expect');

// create a specific HTML tag.
/* step 2*/ var paragraph = document.createElement('p');
// keep in mind the parent child relationship you might want in your markup.

// display this element by adding content and appending to the actual Document.

// When we got our containers selected and our element tags created, we can finally add content and append to the actual document displayed in the browser.
/* step 3*/paragraph.textContent = 'adding some text';
/* step 4*/section.append(paragraph);

```

## Random Numbers is JS

```js

var randomNumberBetween0And10 = Math.floor(Math.random() * (10 + 1));

```
