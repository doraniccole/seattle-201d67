'use strict';

var canvasEl = document.getElementById('product-data');

var allProductsString = '';
var allProductsData = [];


if (localStorage.productData) {
  allProductsString = localStorage.getItem('productData');
  allProductsData = JSON.parse(allProductsString);
}

console.log(allProductsData);

var productLabels = [];
var productVotes = [];

for (var i = 0; i < allProductsData.length; i++) {
  productVotes.push(allProductsData[i].votes);
  productLabels.push(allProductsData[i].name);
}


var chartConfig = {
  type: 'bar',
  data: {
    labels: productLabels,
    datasets: [{
      label: '# of Votes',
      data: productVotes,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

new Chart(canvasEl, chartConfig);