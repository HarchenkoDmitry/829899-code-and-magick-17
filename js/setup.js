'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
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
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

function onPopupEscPress(evt) {
  var userName = document.querySelector('.setup-user-name');

  if (evt.keyCode === 27 && userName !== document.activeElement) {
    closePopup();
  }
}

function getRandomArrayElement(array) {
  return array[Math.round(Math.random() * (array.length - 1))];
}

function getWizardData() {
  return {
    name: getWizardName(getRandomArrayElement(NAMES), getRandomArrayElement(LAST_NAMES)),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS)
  };
}

function getWizardName(name, lastName) {
  return (Math.random() < 0.5) ? name + ' ' + lastName : lastName + ' ' + name;
}

function renderCharacters(wizards) {
  var fragment = document.createDocumentFragment();
  var containerForRender = document.querySelector('.setup-similar-list');

  for (var i = 0; i < wizards.length; i++) {
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
  coatColor.style.fill = wizard.coatColor;
  eyesColor.style.fill = wizard.eyesColor;

  return cloneContainer;
}

function getWizardsData() {
  var wizards = [];
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    wizards[i] = getWizardData();
  }
  return wizards;
}

function changeColorByClick() {
  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

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


window.onload = function () {
  renderCharacters(getWizardsData());
  changeColorByClick();

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  });
};
