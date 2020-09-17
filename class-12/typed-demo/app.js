'use strict';

var canvasEl = document.getElementById('myChart');
var ctx = canvasEl.getContext('2d');


var chartConfig = {
  type: 'bar',
  data: {

    // these are the words displayed at the bottom
    labels: ['Banana', 'R2D2', 'Bathroom', 'Green', 'Purple', 'Orange', 'too many'],
    datasets: [{
      label: '# of Votes',

      // these are the data points
      data: [12, 19, 3, 5, 2, 3, 500],
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
}

var chart = new Chart(ctx, chartConfig);

function updateChart(value) {
  // a good stretch goal
  chart.config.data.datasets[0].data[0] = value;
  chart.update();
}

updateChart(300);
