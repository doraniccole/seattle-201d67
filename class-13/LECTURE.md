# Class 13

## Announcements

- Project week is coming up
  - Project prep assignment due at the end of the week
  - Prject teams will be either announced tomorrow but likely Friday.
  - Teams will be decided by instructional  staff, but we are open to input and suggestions.
  
- 301 Entrance Exam
  - It's timed tp open up over the weekend.
  - Multiple Choice exam, it's very tricky.
  - It's gonna try to gotcha.
  - You can still have retakes.
    - 80% to pass, if you fail, meet with Jacob, and will discuss and potentially.
    - The retakes, will most likely during project week.
    - Take it early, if you are worried about timing.
    - Plan to spend about 3 hours.
      - Read the questions carefully.
      - Try to run all the code that is shown in the exam.
      - 25 Questions.
  
- Sunday is the last day for resubmissions for labs.
   - Focus on Thursday labs.
   - We'll give you points for he previous days labs.
   - Don't stress too hard, I will allow labs turned in after Sunday, but please prioritize you project.

## Code Review

- Sizing our Charts
  - Hard to reconfigure, hack at...
  - Create a function that grabs the current height and width of the window.
- Browser cacheing, cmd-shft-R.
  - The browser sometimes doesn't actually reload stuff, saves them to our file system for performance boosts.


Bus-mall
 - While loops (how many rounds of votes)
    - We need to run a block of code as many times as necessary until a condition is met
 - Click event, adding a result to the page.
    - displaying something
       - what is displayed
          - getting / creating an element from the DOM (document)
       - When something is displayed
          - What event is associated

```js
var myArray = [];

// this will only run once
if (myArray.length < 10) {
  myArray.push(1);
}

// this will run until myArray.length == 10
while (myArray.length < 10) {
  myArray.push(1);
}

do {
  console.log('this runs at least once');
} while (false)

// below the loop, myArray is almost garanteed to have 10 thiings in it.

```
 


```js

window.innerHeight;
window.innerWidth;

function resizeChart(event) {

  // manully reset the size properties of your chart
}


window.addEventlistene('resize', resizeChart);

```

## Persisting our Data

- Preventing our data from being reset on page load, or page refreshes.
  - We can leverage a browser called localstorage, to persist our data, storing for later use.
  - typically this is done by a CMS or Database
    - These are usually difficult to implement.
    - Localstorage is quick and simple if your doing browser stuff.
    - Less secure, and thus should be used sparingly.
  - Everything that is saved is within your file system
    - localStorage manages it's contents  for your.
      - url basis ( every url has it's own slot in localStorage ).
      - Everything is stored in /path/to/browser/sourcecode.
      - There is about a 5 mb limit.

```js

 // global thing in the browser
document.getElementById('some-id');


// also we have localstorage in the browser

localStorage.setItem();  // places data inside localStorage
localStorage.getItem(); // retreives data from inside locaStorage
localStorege.removeItem(); // removes something from localStorage
localStorage.clear(); // clears all localStorage ( only for the URL that your html is running on)


// everything in local storage is done via key value pairs.

localStorage.setItem('key', 'value');
// NOTE: localStorage only stores immutable data
/// immutable datatype: strings / numbers / booleans
//  even though immutable are not altered, they will be stored as a string.

JSON.stringify(object) // turns an object into a string

// when we want to use the data in an object like syntax.
JSON.parse(ObjectAsString) // turns a stringified object back into an object

localStorage.getItem('key');

localStorage.removeItem('key');

localStorage.clear(); // for your particaly url.


// this is often used to store cookies / tokens / authentication credentials / small pieces of data that I site uses semi frequently.
// Super important or sentive items should NOT go in localStorage.


```
