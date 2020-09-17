# Class 07: Constructor Functions

## Warm Up

- Write a function that takes 0 parameters and returns 2 strings.

```js

function strings() {
  return ['test thing', 'string2'];
}

```

- Write a function that takes this function as a parameter, and returns a boolean, saying whether or not the function returns 2 strings.

```js

// passing our initial function , takes place somewhere else
returnStrings(strings);

// name our function parameter
function returnsStrings(anything) {
  var values = anything(); // must provide a function with an array return value;
  if (typeof(values[0]) === 'string' && typeof(values[1]) === 'string') {
    // return ['string1', 'string2']
    return true;
  } else {
    // return null;
    return false;
  }
}

```

## Salmon Cookies

- 2 Main tasks we have to solve for this lab
  - Calculating random numbers of cookies sold per hour for each store
    - based off of three values:
      - min cookies per hour
      - max cookies per hour
      - average # of customers per hour.
  - Append this information to some HTML.
- 2 review folders
  - 2 seperate to achive lab requirements.

## Constructor function

- Looks just like a normal, the only is that a constructor implicitly returns a new object;
  - There's a little bit of magic

```js

// this is valid, but leads to complications down the line
// this is called a factory.
function createStore() {
  return {
    name: 'store',
    speak: function() {
      console.log(this.name);
    }
  }
}

// constructor
function Store() {
  this.name = 'store',
  this.speak = function() {
    console.log(this.name);
  }
}

// we a have a specific way in which constructor functions are used

var seattle = new Store();

console.log(seattle) // {name: 'store', speak: [function]}

// let's recreate our lab stores

function Store(name, min, max) {

  function calculate(min, max) {
    // does the things?/
    // this will different things
  }

  console.log(this); // this will change depending on how the function is called.
  this.storeName = name,
  this.minCust = min,
  this.maxCust = max;
  this.average = calculate(this.minCust, this.maxCust);
  // this.speak = function() {
  //   this // is different here
  // }
}


// new keyword activates constructor function capabilities
var seattle = new Store('Seattle', 20, 60);
console.log(seattle) // Store {storeName: 'seattle', minCust: 20, maxCust: 60}

var lima = new Store('Lima');
console.log(lima) // Store {storeName: 'seattle', minCust: undefined, maxCust: undefined}

// Methods on constructors

// this syntax ensures that 'this' will always reference the object that was created
Store.prototype.speak = function() {
  console.log(this.name);
}

Store.prototype.checkCustomers = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
};

//
var stores = [seattle, lima];

```

## HTML tables

- Display rows and columns in a HTML document
  - <table> </table> parent element for all of our table
  - <tr> </tr> a table row, which sould contain all the cell data for a given row.
  - <td> </td> a table cell, each one will show up as a column within a given row.

```html

<table>
  <tbody>
  <tr>
    <td>
      Cell One
    </td>
    <td>
      Cell Two
    </td>
    <td>
      Cell Three
    </td>
  </tr>
  <tr>
    <td>
      Cell One
    </td>
    <td>
      Cell Two
    </td>
    <td>
      Cell Three
    </td>
  </tr>
  <tr>
    <td>
      Cell One
    </td>
    <td>
      Cell Two
    </td>
    <td>
      Cell Three
    </td>
  </tr>
  </tbody>
</table>

```
