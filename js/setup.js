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
  var DELAY_TIME = 500;
  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var coatInput = document.querySelector('input[name="coat-color"]');
  var eyesInput = document.querySelector('input[name="eyes-color"]');
  var fireballInput = document.querySelector('input[name="fireball-color"]');
  var currentColorCoat = COAT_COLORS[0];
  var currentColorEyes = EYES_COLORS[0];
  var currentColorFireball = FIREBALL_COLORS[0];
  var wizardsData = [];
  var debounceDrawing = window.utils.debounce(sortWizards, DELAY_TIME);

  function showBlock(selector) {
    var blockSetup = document.querySelector(selector);
    blockSetup.classList.remove('hidden');
  }

  function getRandomArrayElement(array) {
    return array[Math.round(Math.random() * (array.length - 1))];
  }

  function renderWizards(wizards) {
    wizardsData = wizards;
    sortWizards();
  }

  function changeColorByClick() {
    coat.addEventListener('click', function () {
      currentColorCoat = getRandomArrayElement(COAT_COLORS);
      coat.style.fill = currentColorCoat;
      coatInput.value = currentColorCoat;
      debounceDrawing();
    });

    eyes.addEventListener('click', function () {
      currentColorEyes = getRandomArrayElement(EYES_COLORS);
      eyes.style.fill = currentColorEyes;
      eyesInput.value = currentColorEyes;
      debounceDrawing();
    });

    fireball.addEventListener('click', function () {
      currentColorFireball = getRandomArrayElement(FIREBALL_COLORS);
      fireball.style.backgroundColor = currentColorFireball;
      fireballInput.value = currentColorFireball;
    });
  }

  function sortWizards() {
    window.wizards(wizardsData.sort(function (first, second) {
      var rankDiff = getRank(second) - getRank(first);

      if (rankDiff === 0) {
        rankDiff = first.name.localeCompare(second.name);
      }

      return rankDiff;
    }));
  }

  function getRank(wizard) {
    var rank = 0;

    rank += (wizard.colorCoat === currentColorCoat) ? 2 : 0;
    rank += (wizard.colorEyes === currentColorEyes) ? 1 : 0;

    return rank;
  }


  showBlock('.setup-similar');
  changeColorByClick();

  window.backend.load(renderWizards, window.utils.errorHandler);

})();


