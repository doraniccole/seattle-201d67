'use strict';


//create array/loop to run through images

//create images array

Item.allItems = [];
var numOfClicks = [];
var imagesClicked = [];
var imageIndex = document.getElementById('images');
var leftContainer = document.getElementById('left');
var centerContainer = document.getElementById('center');
var rightContainer = document.getElementById('right');

var uservotes = 0;

function randomindex(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

//create constructor function
function Item(name, source) {//this is your object
    this.name = name;
    this.image = source;
    this.clicks = 0;
    this.views = 0;
    Item.allItems.push(this);
}
//may need to add a third parameter that would be an extension to target image source type this.src = `../img/${src}.jpg`; (this is hardcode to source image, this is what the extentsion will be doing the function of)

//img src type needs to coincide with the actual file source/image name

//create random number generator
Item.prototype.randomimages = function () {
    var generateImages = randomindex(Item.allItems.length);
    return generateImages;
}

function generateRandomIndex() {
    var generateImages = randomindex(Item.allItems.length);
    return generateImages;
}

//put images in HTML
//create event listener for image clicks
//create tracker for image clicks
//add property to object that sotres number of clicks
//add property to object that tracks products that have been clicked
//create loop that sets 25 rounds of clicking
//display report of click numbers (preferably as a percentage value

//create mall image vars//

new Item('R2D2 Luggage Bag', 'images/bag.jpg');
new Item('Banana Slicer', 'images/banana.jpg');
new Item('Bathroom Ipad Dock', 'images/bathroom.jpg');
new Item('Toeless Rubber Boots', 'images/boots.jpg');
new Item('Compact Breakfast', 'images/breakfast.jpg');
new Item('Meatball Bubblegum', 'images/bubblegum.jpg');
new Item('Red Aesthetic Chair', 'images/chair.jpg');
new Item('Cthulhu Action Figure', 'images/cthulhu.jpg');
new Item('Rare Dragon Meat', 'images/dragon.jpg');
new Item('Duck Beak Muzzle', 'images/dog-duck.jpg');
new Item('Cutlery Pens', 'images/pen.jpg');
new Item('Sweepin Doggy Booties', 'images/pet-sweep.jpg');
new Item('Pizza Scissors', 'images/scissors.jpg');
new Item('Shark Sleeping Bag', 'images/shark.jpg');
new Item('Baby Sweeper', 'images/sweep.png');
new Item('Tauntaun Sleeping Bag', 'images/tauntaun.jpg');
new Item('Rare Unicorn Meat', 'images/unicorn.jpg');
new Item('Tentacle USB', 'images/usb.gif');
new Item('Self-filling Watering Can', 'images/water-can.jpg');
new Item('No-spill Wine Glass', 'images/wine-glass.jpg');

console.log(Item.allItems);



// rightContainer.src = ''
function renderImages() {
    var renderedImages = [rightContainer.src, leftContainer.src, centerContainer.src];
    var tempImages = [];

    var generatedImage = Item.allItems[generateRandomIndex()].image;

    console.log(renderedImages, generatedImage);
    while (!renderedImages.includes[generatedImage] && tempImages.length < 3) {
        console.log(generatedImage);
        generatedImage = Item.allItems[generateRandomIndex()].image;
        tempImages.push(generatedImage);
    }
    renderedImages = tempImages;
    // eventually this will fill with all our images
    // renderedImages.push(generatedImage);

    rightContainer.setAttribute('src', renderedImages[0]);
    leftContainer.setAttribute('src', renderedImages[1]);
    centerContainer.setAttribute('src', renderedImages[2]);
}


function handleVote(event) {

    var currentThingsThatWasClicked = event.target;
    var itemId = currentThingsThatWasClicked.src;

    for (var i = 0; i < Item.allItems.length; i++) {
        if (itemId.includes(Item.allItems[i].image)) {
            Item.allItems[i].clicks += 1;
            console.log(Item.allItems[i].name, Item.allItems[i].clicks);
        }
    }

    renderImages();
}

rightContainer.addEventListener('click', handleVote);
leftContainer.addEventListener('click', handleVote);
centerContainer.addEventListener('click', handleVote)
renderImages();

// console.log(Item.allItems[0].randomimages());
