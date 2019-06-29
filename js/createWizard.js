'use strict';

(function () {
  var containerForCharacter = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

  window.createWizard = createWizard;
})();
