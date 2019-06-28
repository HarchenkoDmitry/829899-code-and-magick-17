'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var containerForCharacter = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var containerForRender = document.querySelector('.setup-similar-list');

  function createWizard(wizard) {
    var cloneContainer = containerForCharacter.cloneNode(true);
    var name = cloneContainer.querySelector('.setup-similar-label');
    var coatColor = cloneContainer.querySelector('.wizard-coat');
    var eyesColor = cloneContainer.querySelector('.wizard-eyes');

    name.textContent = wizard.name;
    coatColor.style.fill = wizard.colorCoat;
    eyesColor.style.fill = wizard.colorEyes;

    return cloneContainer;
  }

  function renderWizards(wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      var character = createWizard(wizards[i]);
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

  window.render = renderWizards;
})();
