'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var containerForRender = document.querySelector('.setup-similar-list');

  function renderWizards(wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      var character = window.createWizard(wizards[i]);
      fragment.appendChild(character);
    }

    clearWizards();
    containerForRender.appendChild(fragment);
  }

  function clearWizards() {
    var wizards = containerForRender.querySelectorAll('.setup-similar-item');

    wizards.forEach(function (wizard) {
      containerForRender.removeChild(wizard);
    });
  }

  window.wizards = renderWizards;
})();
