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
var SERNAMES = [
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
var WIZARD_AMOUNT = 4;
var wizard = {};

function showBlock(selector) {
  var blockSetup = document.querySelector(selector);
  blockSetup.classList.remove('hidden');
}

function getRandomArrayElement(array) {
  return array[Math.round(Math.random() * (array.length - 1))];
}

function generateCharacter() {
  wizard = {
    name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SERNAMES),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS)
  };
  return wizard;
}

function createCharacter(character) {
  var container = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var name = container.querySelector('.setup-similar-label');
  var coatColor = container.querySelector('.wizard-coat');
  var eyesColor = container.querySelector('.wizard-eyes');

  name.textContent = character.name;
  coatColor.style.fill = character.coatColor;
  eyesColor.style.fill = character.eyesColor;

  return container;
}

function renderCharacter() {
  var containerForRender = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < WIZARD_AMOUNT; i++) {
    generateFragment(fragment);
  }

  containerForRender.appendChild(fragment);
}

function generateFragment(fragment) {
  var character = generateCharacter();
  var containerCharacter = createCharacter(character);
  var characterClone = containerCharacter.cloneNode(true);
  fragment.appendChild(characterClone);
}

window.onload = function () {
  showBlock('.setup');
  renderCharacter();
  showBlock('.setup-similar');
};
