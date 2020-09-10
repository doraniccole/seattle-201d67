'use strict'

var stores = null;
var myTable = document.getElementById('myTable');
var storeInfo = document.getElementById('storeInfo');
var times = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function createTableHeader() {
    var trElement = document.createElement('tr');
    myTable.appendChild(trElement);

    var thElement = document.createElement('th');
    thElement.textContent = "Store Location";
    trElement.appendChild(thElement);

    for (var i = 0; i < times.length; i++) {
        var thElement = document.createElement('th');
        thElement.textContent = times[i];
        trElement.appendChild(thElement);
    }
    thElement = document.createElement('th');
    thElement.textContent = 'Total';
    trElement.appendChild(thElement);

}
createTableHeader();

function createTableRow() {
    var trElement = document.createElement('tr');
    myTable.appendChild(trElement);

    var thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = 'Totals'
}

function createTableFooter() {
    var trElement = document.createElement('tr');
    myTable.appendChild(trElement);

    var thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = ('Totals');

    var grandTotal = 0;
    loop1: for (var i = 0; i < times.length; i++) {

        var hourlySum = 0;
        var tdElement = document.createElement('td')
        trElement.appendChild(tdElement);

        loop2: for (var j = 0; j < stores.length; j++) {
            hourlySum += stores[j].cookiesEachHour[i];
            grandTotal += stores[j].cookEachHour[i];
        }

        tdElement.textContent = hourlySum;
    }

    tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = grandTotal;
}


function customersPerHrRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Store(name, min, max, avg) {

    this.storeName = name;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCookies = avg;
    this.cookieSalePerHr = [];
    this.totalCookiesADay = 0;
}

Store.prototype.render = function () {
    // create our row per store
    var trEl = document.createElement('tr');
    myTable.append(trEl);

    var blankTd = document.createElement('td');
    blankTd.textContent = this.storeName;
    trEl.append(blankTd);

    for (var i = 0; i < times.length; i++) {
        var cookiesAtHour = Math.round(customersPerHrRandom(this.minCustomers, this.maxCustomers) * this.avgCookies);
        this.totalCookiesADay += cookiesAtHour;
        var liEl = document.createElement('td');
        liEl.textContent = Math.round(customersPerHrRandom(this.minCustomers, this.maxCustomers) * this.avgCookies);
        trEl.appendChild(liEl);
    }
    var liEl = document.createElement('ld');
    liEl.textContent = "Daily Total: " + this.totalCookiesADay;
    trEl.appendChild(liEl);
}
var seattle = new Store('Seattle', 23, 65, 6.3)
var tokyo = new Store('Tokyo', 3, 24, 1.2)
var dubai = new Store('Dubai', 11, 38, 3.7)
var paris = new Store('Paris', 20, 38, 2.3)
var lima = new Store('Lima', 2, 16, 4.6)

seattle.render()
tokyo.render()
dubai.render()
paris.render()
lima.render()
createTableRow();
stores = [seattle, tokyo, dubai, paris, lima]


