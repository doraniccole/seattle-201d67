'use strict';

// We are going to have a better time using a constructor to handle all of our Products
Product.allProducts = [];
var totalClicks = 0;
var maxClicks = 25;
var productImages = {};

var productDetails = [
  { name: 'bag', image: 'assets/bag.jpg' },
  { name: 'banana', image: 'assets/banana.jpg' },
  { name: 'boots', image: 'assets/boots.jpg' },
  { name: 'bathroom', image: 'assets/bathroom.jpg' },
  { name: 'breakfast', image: 'assets/breakfast.jpg' },
  { name: 'bubblegum', image: 'assets/bubblegum.jpg' },
];

function Product(name, image) { // what makes this a contructor. Using the keyword this.
  this.name = name;
  this.image = image;
  this.votes = 0;
  this.timesRendered = 0;
  this.previouslySeen = false;
  Product.allProducts.push(this);
}


// this is an object: stores data.
// var Jacob = {
//   name: 'Jacob',
// }

// this creates all of our products and places them in an array.
for (var i = 0; i < productDetails.length; i++) {
  new Product(productDetails[i].name, productDetails[i].image);
}
console.log(Product.allProducts);


// We know that we need to select Prodects randomly from all the Products we make
function getRandomIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

// We have to increment votes for a specific Product when the Product is clicked on
//   What is clicked?? Adding event listeners!

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

img1.addEventListener('click', handleClick);
img2.addEventListener('click', handleClick);
img3.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();

  // event.target => targetting a specific item, based off of our HTML
  var clickedItem = event.target.attributes[1].value;

  //   What exactly is incremented??
  //      loop through available products?
  for (var i = 0; i < Product.allProducts.length; i++) {
    if (clickedItem === Product.allProducts[i].image) {
      Product.allProducts[i].votes++;
      console.log(Product.allProducts[i]);
    };
  }

  if (totalClicks === maxClicks) { // removing event listeners!!
    img1.removeEventListener('click', handleClick);
    img2.removeEventListener('click', handleClick);
    img3.removeEventListener('click', handleClick);
  }
  renderProducts();
}




// We have to display 3 unique and new Products After the click occurs
//    Each of the 3 products are not the same
//    When we render 3 new Products, they cannot be Products that were just displayed.


function renderProducts() {
  // what is currently rendered??
  //    create 3 newImage and store for reference
  var img1Render = img1.src;
  var img2Render = img2.src;
  var img3Render = img3.src;

  // randomlySelect a new Image for each image on the page
  var newImage1 = Product.allProducts[getRandomIndex()].image;
  var newImage2 = Product.allProducts[getRandomIndex()].image;
  var newImage3 = Product.allProducts[getRandomIndex()].image;

  //    compared all new Image with currently rendered images, and make sure no duplicates exist.
  while (img1Render === newImage1 || newImage1 === img2Render || newImage1 === img3Render) {
    newImage1 = Product.allProducts[getRandomIndex()].image;
  }
  while (img2Render === newImage2 || newImage2 === newImage1 || newImage2 === img1Render || newImage2 === img3Render) {
    newImage2 = Product.allProducts[getRandomIndex()].image;
  }
  while (img3Render === newImage3 || newImage3 === newImage1 || newImage3 === newImage2 || newImage3 === img1Render || newImage3 === img2Render) {
    newImage3 = Product.allProducts[getRandomIndex()].image;
  }

  // actually renders the new images we've found
  img1.src = newImage1;
  img2.src = newImage2;
  img3.src = newImage3;


  // if (newImage !== img1Render) {
  //   img1.src = newImage;
  // }

  // newImage = Product.allProducts[getRandomIndex()].image;

  // if (newImage !== img2Render) {
  //   img2.src = newImage;
  // }

  // newImage = Product.allProducts[getRandomIndex()].image;

  // if (newImage !== img3Render) {
  //   img3.src = newImage
  // }
}


// We also only want the user to be able to Vote 25 Times
//     After this the "clicks" don't do anything.
//     A Chart is also displayed after Votes are completed.
