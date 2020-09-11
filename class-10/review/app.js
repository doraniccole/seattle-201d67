'use strict';

var table = document.getElementById('cookie-table');
var form = document.getElementById('new-store');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];

// creating a store via a constructor function
// minCust => number
// maxCust => number
// avgCookiesPerCust => number
// avgCookiesPerHour => numberBetweenMin&Max * avgCookiesPerHour

function Store(storeName, minCust, maxCust, avgCookiesPerCust) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cookiesAtEachHour = [];
  this.totalDailyCookies = 0;
  stores.push(this);
}

Store.prototype.generateCookiesAtHour = function () {
  // random number?
  // calc value between min and max
  var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;

  // multiply by avgCookiesperCust
  return Math.round(customers * this.avgCookiesPerCust);
}

Store.prototype.generateDailyCookies = function () {
  this.cookiesAtEachHour = [];
  for (var i = 0; i < hours.length; i++) {
    this.cookiesAtEachHour.push(this.generateCookiesAtHour());
  }
  return this.cookiesAtEachHour;
}

// Filling a table with values from our stores
// avgCookiesPerHour
// create table Row
// create table Cells
// append Row to a Table

Store.prototype.renderToTable = function () {
  // takes all store data (name / cookiesPerHour)
  this.cookiesAtEachHour // an array of  numbers
  // render a row in our table
  var tableRow = document.createElement('tr'); // one row per store
  table.append(tableRow);

  var tableData = document.createElement('td'); // one data cell per hour
  tableData.textContent = this.storeName;
  tableRow.append(tableData);

  // lets find the cookie sales and append it to our row
  for (var i = 0; i < this.cookiesAtEachHour.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = this.cookiesAtEachHour[i];
    tableRow.append(tableData);
  }
}

var seattle = new Store('Seattle', 10, 20, 4);
seattle.generateDailyCookies();
seattle.renderToTable();

var london = new Store('London', 2, 13, 8);
london.generateDailyCookies();
london.renderToTable();

var lima = new Store('Lima', 20, 50, 1);
lima.generateDailyCookies();
lima.renderToTable();

var tokyo = new Store('Tokyo', 3, 30, 4.7);
tokyo.generateDailyCookies();
tokyo.renderToTable();

var dubai = new Store('Dubai', 4, 6, 9);
dubai.generateDailyCookies();
dubai.renderToTable();

console.log(stores);

function handleSubmit(event) {
  event.preventDefault();

  var { name, minCust, maxCust, avgCookies } = event.target;

  var store = new Store(name.value, parseInt(minCust.value), parseInt(maxCust.value), parseInt(avgCookies.value));
  console.log(store);
  store.generateDailyCookies();
  store.renderToTable();
}

// Generating new Store from a form
form.addEventListener('submit', handleSubmit);
