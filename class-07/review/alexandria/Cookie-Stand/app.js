'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    cookiesAtEachHour: [],

    // 1 find a number between the min and max customers per hour value
    checkCustomers: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    },

    // 2 find the number of cookies sold at a given hour.
    calculateCookiesPerHours: function () {
        for (var i = 0; i < hours.length; i++) {
            this.cookiesAtEachHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
        }
        this.renderStore();
    },

    // 3 render elements to the DOM
    renderStore: function () {
        // find a container to append to
        var root = document.getElementById('root');

        // create our element that we need to append
        var list = document.createElement('ul');

        // add text content to our created elements
        for (var i = 0; i < this.cookiesAtEachHour.length; i++) {
            var listItem = document.createElement('li');
            // string template syntax
            listItem.textContent = `${hours[i]}: ${this.cookiesAtEachHour[i]}`;
            list.append(listItem);
        }

        // append to the root
        root.append(list);
    }
};  //have to calculate cookies sold at each location, for each hour of the day using the average cookies sold and the customers generated.

seattle.calculateCookiesPerHours();

var tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    checkCustomers: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    }
};
var dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    checkCustomers: function () {

        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust

    }
};
var paris = {
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    checkCustomers: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    }
};
var lima = {
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    checkCustomers: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    }
};
console.log(dubai.checkCustomers());
console.log(seattle.checkCustomers());
console.log(paris.checkCustomers());
console.log(lima.checkCustomers());
console.log(tokyo.checkCustomers());