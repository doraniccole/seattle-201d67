'use strict';

var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');

// Products need to be created and stored.
var allProducts = [];
var viewedProducts = [] // a gloabl array of things that cannot be re-displayed => should contain 6 Products
var roundsOfVoting = 3;


// Constructors
function Products(nameAsAParameter, imagePathAsParameter) {
  this.name = nameAsAParameter;
  this.image = imagePathAsParameter;
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);
}

Products.prototype.methodName = function () {
  console.log(this);
}

// Products.methodName(); // undefined because it sits on the prototype.

var bag = new Products('bag', 'assets/bag.jpg');
var banana = new Products('banana', 'assets/banana.jpg');
var boots = new Products('boots', 'assets/boots.jpg');
var breakfast = new Products('breakfast', 'assets/breakfast.jpg');
var bathroom = new Products('bathroom', 'assets/bathroom.jpg');
var bubblegum = new Products('bubblegum', 'assets/bubblegum.jpg');
var chair = new Products('chair', 'assets/chair.jpg');
var cthulhu = new Products('cthulhu', 'assets/cthulhu.jpg');

bag.methodName(); // logs all the properties of bag. {name, image, votes}
bathroom.methodName();

// // randomly assign images to our HTML <img>
// var randomIndexValue = Math.floor(Math.random() * allProducts.length); // randomIndes value
// leftImg.src = allProducts[randomIndexValue].image;

// randomIndexValue = Math.floor(Math.random() * allProducts.length);
// centerImg.src = allProducts[randomIndexValue].image;

// randomIndexValue = Math.floor(Math.random() * allProducts.length);
// rightImg.src = allProducts[randomIndexValue].image;

function displayImages() {
  // we always track up to 6 images, that can be invalid
  while (viewedProducts.length < 6) {
    var randomProduct = getRandomProduct();
    while (!viewedProducts.includes(randomProduct)) {
      viewedProducts.push(randomProduct);
    }
  }

  console.log(viewedProducts);

  for (var i = 0; i < 3; i++) {
    var temp = viewedProducts.shift();
    if (i === 0) leftImg.src = temp.image;
    if (i === 1) centerImg.src = temp.image;
    if (i === 2) rightImg.src = temp.image;
    temp.views += 1;
  }

  // leftImg.src = getRandomProduct().image;
  // centerImg.src = getRandomProduct().image;
  // rightImg.src = getRandomProduct().image;

  // if this is not working??
  // 1) errors in the console.
  // 2) In your head try and imagine what the page should look, and look in the devTools > elements and see if something is missing.
  // 3) try and put comments next to the code that should be working
  // add console logs to verify that the code does what you think it should
}

function getRandomProduct() {
  var randomIndexValue = Math.floor(Math.random() * allProducts.length);
  return allProducts[randomIndexValue];
}

function handleClick(event) {

  // we don't want to do just this
  // bag.votes += 1;
  // bathroom.votes += 1;
  console.log(bag, bathroom);

  // we need to know which image was clicked ( this is going to come from the HTML event)

  // we need to find that image, from within our allProducts array
  for (var i = 0; i < allProducts.length; i++) {
    // allProducts[i].image => every image path that we've created
    if (event.target.attributes[1].value === allProducts[i].image) {
      allProducts[i].votes += 1;
    }
  }
  roundsOfVoting -= 1;
  if (roundsOfVoting < 1) {
    leftImg.style.display = 'none'
    leftImg.removeEventListener('click', handleClick);
    centerImg.removeEventListener('click', handleClick);
    centerImg.style.display = 'none';
    rightImg.removeEventListener('click', handleClick);
    rightImg.style.display = 'none'
    localStorage.setItem('productData', JSON.stringify(allProducts));
  }
  displayImages();
  console.log(allProducts);
}

displayImages();
leftImg.addEventListener('click', handleClick);
centerImg.addEventListener('click', handleClick);
rightImg.addEventListener('click', handleClick);