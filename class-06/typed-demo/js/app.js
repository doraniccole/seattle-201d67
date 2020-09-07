'use strict';

// We want to think about hierarchy first
// article > h2
// article > section > div
// artivle > section > div > p
// article > section > div > h3

var body = document.getElementById('root');

var articleEl = document.createElement('article');
var heading2El = document.createElement('h2');
var divEl = document.createElement('div');
var paragraphEl = document.createElement('p');
var heading3El = document.createElement('h3');

heading2El.textContent = 'My Article Title';
paragraphEl.textContent = 'Some text content';
heading3El.textContent = 'by Jacob Knaack';

// destination <-- element we want to append
articleEl.append(heading2El);
articleEl.append(divEl);
divEl.append(paragraphEl);
divEl.append(heading3El);
body.append(articleEl);
articleEl.append(divEl);

// create a function that maybe takes an element to create and a parent to append
function addContent(/*element to create*/ /*content to add*/ /* destination for created element */) {

}