"use strict";

function handleBar(val) {
  var bar = document.getElementById('storageBar');
  var width = 0,
      interval;
  interval = setInterval(function () {
    if (width < val + 1) {
      bar.style.width = "".concat(width, "px");
      width++;
    } else {
      clearInterval(interval);
    }
  }, 5);
}

function handleIndicator(val, id, time) {
  var indicator = document.getElementById(id);
  var counter = 0,
      interval;
  interval = setInterval(function () {
    if (counter < val + 1) {
      indicator.innerText = counter;
      counter++;
    } else {
      clearInterval(interval);
    }
  }, time);
}

window.onload = function () {
  handleBar(370);
  handleIndicator(185, 'indicatorLeft', 12);
};