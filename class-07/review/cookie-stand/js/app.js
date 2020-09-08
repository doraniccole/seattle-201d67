'use strict';
var storeInfo1 = document.getElementById('store-sales1');
var storeInfo2 = document.getElementById('store-sales2');
var storeInfo3 = document.getElementById('store-sales3');
var storeInfo4 = document.getElementById('store-sales4');
var storeInfo5 = document.getElementById('store-sales5');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomNumberGen(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var seattleStore = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  cookiePerSale: 6.3,
  cookieSalePerHour: [],
  totalCookiesADay: 0,

  cph: function () {
    // var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var ul = document.createElement('li');
      var cookiesAtHour = Math.round(randomNumberGen(this.minCust, this.maxCust) * this.cookiePerSale);
      this.totalCookiesADay += cookiesAtHour;
      this.cookieSalePerHour.push(cookiesAtHour);
      ul.textContent = hours[i] + ': ' + cookiesAtHour + ' cookies';
      //this.totalCookiesADay += Math.round(custHour*this.cookiePerCust);
      storeInfo1.appendChild(ul);
      console.log(this.totalCookiesADay, this.cookieSalePerHour);
    }
  }
};

seattleStore.cph();

var tokyoStore = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  cookiePerSale: 1.2,
  //cookieSalePerHour: [],
  //totalCookiesADay: 0,

  cph: function () {
    for (var i = 0; i < hours.length; i++) {
      var ul = document.createElement('li');
      ul.textContent = hours[i] + ': ' + Math.round(randomNumberGen(this.minCust, this.maxCust) * this.cookiePerSale) + ' cookies';
      //this.totalCookiesADay += Math.round(custHour*this.cookiePerCust);
      storeInfo2.appendChild(ul);
    }
  }
};

tokyoStore.cph();

var dubaiStore = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  cookiePerSale: 3.7,
  //cookieSalePerHour: [],
  //totalCookiesADay: 0,

  cph: function () {
    for (var i = 0; i < hours.length; i++) {
      var ul = document.createElement('li');
      ul.textContent = hours[i] + ': ' + Math.round(randomNumberGen(this.minCust, this.maxCust) * this.cookiePerSale) + ' cookies';
      //this.totalCookiesADay += Math.round(custHour*this.cookiePerCust);
      storeInfo3.appendChild(ul);
    }
  }
};

dubaiStore.cph();

var parisStore = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  cookiePerSale: 3.7,
  //cookieSalePerHour: [],
  //totalCookiesADay: 0,

  cph: function () {
    for (var i = 0; i < hours.length; i++) {
      var ul = document.createElement('li');
      ul.textContent = hours[i] + ': ' + Math.round(randomNumberGen(this.minCust, this.maxCust) * this.cookiePerSale) + ' cookies';
      //this.totalCookiesADay += Math.round(custHour*this.cookiePerCust);
      storeInfo4.appendChild(ul);
    }
  }
};

parisStore.cph();

var limaStore = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  cookiePerSale: 4.6,
  //cookieSalePerHour: [],
  //totalCookiesADay: 0,

  cph: function () {
    for (var i = 0; i < hours.length; i++) {
      var ul = document.createElement('li');
      ul.textContent = hours[i] + ': ' + Math.round(randomNumberGen(this.minCust, this.maxCust) * this.cookiePerSale) + ' cookies';
      //this.totalCookiesADay += Math.round(custHour*this.cookiePerCust);
      storeInfo5.appendChild(ul);
    }
  }
};

limaStore.cph();
