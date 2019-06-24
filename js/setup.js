'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var WIZARDS_AMOUNT = 4;
  var containerForCharacter = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  function showBlock(selector) {
    var blockSetup = document.querySelector(selector);
    blockSetup.classList.remove('hidden');
  }

  function getRandomArrayElement(array) {
    return array[Math.round(Math.random() * (array.length - 1))];
  }

  function successHandler(wizards) {
    var fragment = document.createDocumentFragment();
    var containerForRender = document.querySelector('.setup-similar-list');

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      var character = renderCharacter(wizards[i]);
      fragment.appendChild(character);
    }

    containerForRender.appendChild(fragment);
  }

  function renderCharacter(wizard) {
    var cloneContainer = containerForCharacter.cloneNode(true);
    var name = cloneContainer.querySelector('.setup-similar-label');
    var coatColor = cloneContainer.querySelector('.wizard-coat');
    var eyesColor = cloneContainer.querySelector('.wizard-eyes');

    name.textContent = wizard.name;
    coatColor.style.fill = wizard.colorCoat;
    eyesColor.style.fill = wizard.eyesColor;

    return cloneContainer;
  }

  function changeColorByClick() {
    coat.addEventListener('click', function () {
      coat.style.fill = getRandomArrayElement(COAT_COLORS);
    });

    eyes.addEventListener('click', function () {
      eyes.style.fill = getRandomArrayElement(EYES_COLORS);
    });

    fireball.addEventListener('click', function () {
      fireball.style.backgroundColor = getRandomArrayElement(FIREBALL_COLORS);
    });
  }

  showBlock('.setup-similar');
  changeColorByClick();

  window.backend.load(successHandler, window.util.errorHandler);

})();


