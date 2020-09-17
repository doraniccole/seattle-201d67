# Class 14: Reinstantiate


## Code Review

- What things need to be Reviewed
  - Voting Feature.
  - Displaying Voting Results.
    - Displaying how many a product was viewed / rendered.

```js

// Products need to be created and stored.
var allProducts = [];


// Constructors
function Products(nameAsAParameter, imagePathAsParameter) {
  this.name = nameAsAParameter;
  this.image = imagePathAsParameter;
  this.votes = 0;
}

Products.prototype.methodName = function() {
  console.log(this);
}

Products.methodName(); // undefined because it sits on the prototype.

var bag = new Products('bag', 'assets/bag.jpg');

bag.votes += 1;
bag.methodName(); // logs all the properties of bag. {name, image, votes}

var bathroom = new Products('bathroom', 'assets/bathroom.jpg');

bathroom.votes += 1;
bathroom.methodName();



```
