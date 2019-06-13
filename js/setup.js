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
var WIZARDS_AMOUNT = 4;
var containerForCharacter = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function showBlock(selector) {
  var blockSetup = document.querySelector(selector);
  blockSetup.classList.remove('hidden');
}

function getRandomArrayElement(array) {
  return array[Math.round(Math.random() * (array.length - 1))];
}

function generateCharacter() {
  return {
    name: getWizardName(getRandomArrayElement(NAMES), getRandomArrayElement(LAST_NAMES)),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS)
  };
}

function getWizardName(name, surname) {
  return (Math.random() < 0.5) ? name + ' ' + surname : surname + ' ' + name;
}

function renderCharacter(array) {
  var fragment = document.createDocumentFragment();
  var containerForRender = document.querySelector('.setup-similar-list');

  for (var i = 0; i < array.length; i++) {
    var character = createCharacter(array[i]);
    fragment.appendChild(character);
  }

  containerForRender.appendChild(fragment);
}

function createCharacter(character) {
  var cloneContainer = containerForCharacter.cloneNode(true);
  var name = cloneContainer.querySelector('.setup-similar-label');
  var coatColor = cloneContainer.querySelector('.wizard-coat');
  var eyesColor = cloneContainer.querySelector('.wizard-eyes');

  name.textContent = character.name;
  coatColor.style.fill = character.coatColor;
  eyesColor.style.fill = character.eyesColor;

  return cloneContainer;
}

function createArrayOfCharacters() {
  var array = [];
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    array[i] = generateCharacter();
  }
  return array;
}

window.onload = function () {
  showBlock('.setup');
  showBlock('.setup-similar');
  renderCharacter(createArrayOfCharacters());
};
