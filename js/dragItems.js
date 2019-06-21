'use strict';

var items = document.querySelectorAll('.setup-artifacts-shop .setup-artifacts-cell img');
var dropContainer = document.querySelectorAll('.setup-artifacts .setup-artifacts-cell');


items.forEach(function (item) {
  item.addEventListener('dragstart', function (evt) {
    evt.dataTransfer.setData('image/png', evt.target.id);
    evt.dataTransfer.dropEffect = 'move';
  });
});

dropContainer.forEach(function (containerItem) {
  containerItem.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'move';
  });

  containerItem.addEventListener('drop', function (evt) {
    evt.preventDefault();
    var data = evt.dataTransfer.getData('image/png');
    console.log(data);
    evt.target.appendChild(document.getElementById(data));
  });
});
