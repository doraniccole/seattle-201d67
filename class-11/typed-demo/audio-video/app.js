'use strict';

var levees = document.getElementById('levees');
var toggleMute = document.getElementById('mute-button');

var prevVolume = levees.volume;

toggleMute.addEventListener('click', function () {
  prevVolume = levees.volume;

  console.log(levees.volume);
  if (levees.volume) {
    levees.volume = 0;
  } else {
    levees.volume = 1;
  }
});