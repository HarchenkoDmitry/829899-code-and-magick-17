'use strict';

(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var dropContainer = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  function addHighlight(evt) {
    if (evt.target.classList.contains('setup-artifacts-cell')) {
      evt.preventDefault();
      evt.target.style.backgroundColor = 'yellow';
    }
  }

  function removeHighlight(evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
  }

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  dropContainer.addEventListener('dragenter', addHighlight);

  dropContainer.addEventListener('dragover', addHighlight);

  dropContainer.addEventListener('dragleave', function (evt) {
    if (evt.target.classList.contains('setup-artifacts-cell')) {
      removeHighlight(evt);
    }
  });

  dropContainer.addEventListener('drop', function (evt) {
    if (evt.target.classList.contains('setup-artifacts-cell')) {
      removeHighlight(evt);
      evt.target.appendChild(draggedItem);
    }
  });
})();
