'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_INDENT_X = 20;
var CLOUD_INDENT_Y = 30;
var SHADOW_TRANSITION = 10;

var FONT = '16px \'PT Mono\'';
var FONT_COLOR = 'black';
var FONT_GAP_Y = 5;
var ROW_HEIGHT = 20;

var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 25;

var TEXT_CONGRATULATION = ['Ура вы победили!', 'Список результатов:'];

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function renderText(ctx, text, x, y) {
  ctx.font = FONT;
  ctx.fillStyle = FONT_COLOR;
  ctx.fillText(text, x, y);
}

function renderBar(ctx, name, x, y, width, height) {
  ctx.fillStyle = (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgb(0, 0,' + Math.random() * 255 + ')';
  ctx.fillRect(x, y, width, height);
}

function getMaxValue(arr) {
  var maxValue = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_TRANSITION, CLOUD_Y + SHADOW_TRANSITION, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var posTextX = CLOUD_X + CLOUD_INDENT_X;

  for (var textLine = 0; textLine < TEXT_CONGRATULATION.length; textLine++) {
    var posTextY = CLOUD_Y + CLOUD_INDENT_Y + ROW_HEIGHT * textLine;
    renderText(ctx, TEXT_CONGRATULATION[textLine], posTextX, posTextY);
  }

  var maxValue = getMaxValue(times);
  var posFirstBarX = CLOUD_X + CLOUD_INDENT_X + BAR_GAP;
  var posBarY = CLOUD_HEIGHT - CLOUD_INDENT_Y;

  for (var j = 0; j < players.length; j++) {

    var barHeight = -BAR_HEIGHT * times[j] / maxValue;
    var posBarX = posFirstBarX + (BAR_WIDTH + 2 * BAR_GAP) * j;

    renderBar(ctx, players[j], posBarX, posBarY, BAR_WIDTH, barHeight);
    renderText(ctx, players[j], posBarX, posBarY + ROW_HEIGHT);
    renderText(ctx, Math.round(times[j]), posBarX, posBarY + barHeight - FONT_GAP_Y);
  }
};

