'use strict'

var stores = null;
var storeInfo = document.getElementById('storeSales');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// Grabbing our root container
var myTable = document.getElementById("myTable");


// Creating elements within the DOM
// create a new element
// add some content to the element
// append that element to a container.

// Creaes a table row of header elements with values NOT from a Store
function createTableHeader() {
    // create the TR
    var trElement = document.createElement('tr');
    // append to table
    myTable.appendChild(trElement);

    // add the first TH with "store location"
    var thElement = document.createElement('th');
    thElement.textContent = "Store location";
    trElement.appendChild(thElement);

    // ? for loop through hours!
    // take each time from the hours array 
    // put those into a <th>
    for (var i = 0; i < hours.length; i++) {
        thElement = document.createElement('th');
        thElement.textContent = hours[i];
        trElement.appendChild(thElement);
    }

    // add the last TH with "total"
    thElement = document.createElement('th');
    thElement.textContent = 'Total';
    trElement.appendChild(thElement);
}
createTableHeader();

// Add up hourly values from each store, displays the sum in a table row
function createTableFooter() {

    // Create the Row
    var trElement = document.createElement('tr');
    // append to table
    myTable.appendChild(trElement);

    //Add a TD with 'Totals'
    var thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = ('Totals');

    // getting through each store and add up each hourly total
    // hit each store that exists
    // as we hit each store, we need to loop through he hours, and sum each hour
    var grandTotal = 0;
    loop1: for (var i = 0; i < hours.length; i++) {

        // Define a value to sum
        var hourlySum = 0;

        // create our new Table Data cell        
        var tdElement = document.createElement('td');
        trElement.appendChild(tdElement);

        // loop through each store
        loop2: for (var j = 0; j < stores.length; j++) {

            // grab values from a store, at an hour (6am / 7am ....)
            hourlySum += stores[j].cookiesEachHour[i];
            grandTotal += stores[j].cookiesEachHour[i];

        }

        // when loop2 is finished, we can add our content
        tdElement.textContent = hourlySum;
    }

    // create add content, append
    tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = grandTotal;
}

function Store(city, minCust, maxCust, aveCookieSale, cookiesEachHour) {
    this.city = city;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.aveCookieSale = aveCookieSale;
    this.cookiesEachHour = cookiesEachHour;
    this.totalCookies = function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    }
    // stores.push(this);
}

Store.prototype.render = function () {
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = (this.city);
    trElement.appendChild(tdElement);

    var totalCookiesPerDay = 0;
    for (var i = 0; i < hours.length; i++) {

        var table = document.createElement('td');
        var cookiesThisHour = Math.round(this.totalCookies(this.minCust, this.maxCust) * this.aveCookieSale);
        table.textContent = cookiesThisHour;
        trElement.appendChild(table)
        myTable.appendChild(trElement);
        totalCookiesPerDay += cookiesThisHour;
        this.cookiesEachHour.push(cookiesThisHour);
    }
    var total = document.createElement('td');
    total.textContent = totalCookiesPerDay;
    console.log(myTable)
    trElement.appendChild(total);
}


var Seattle = new Store('Seattle', 23, 65, 6.3, []);
var Tokyo = new Store('Tokyo', 3, 24, 1.2, []);
var Dubai = new Store('Dubai', 11, 38, 3.7, []);
var Paris = new Store('Paris', 20, 38, 2.3, []);
var Lima = new Store('Lima', 2, 16, 4.6, []);

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
stores = [Seattle, Tokyo, Dubai, Paris, Lima];

createTableFooter();
