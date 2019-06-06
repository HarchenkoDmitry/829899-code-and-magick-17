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

function renderTextCongratulation(ctx, text) {
  var posTextX = CLOUD_X + CLOUD_INDENT_X;

  for (var textLine = 0; textLine < text.length; textLine++) {
    var posTextY = CLOUD_Y + CLOUD_INDENT_Y + ROW_HEIGHT * textLine;
    renderText(ctx, text[textLine], posTextX, posTextY);
  }
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

function renderStatistic(ctx, players, times) {
  var maxValue = getMaxValue(times);
  var posFirstBarX = CLOUD_X + CLOUD_INDENT_X + BAR_GAP;
  var posBarY = CLOUD_HEIGHT - CLOUD_INDENT_Y;

  for (var i = 0; i < players.length; i++) {

    var barHeight = -BAR_HEIGHT * times[i] / maxValue;
    var posBarX = posFirstBarX + (BAR_WIDTH + 2 * BAR_GAP) * i;

    renderStatisticForOnePlayer(ctx, players[i], times[i], posBarX, posBarY, barHeight);
  }
}

function renderStatisticForOnePlayer(ctx, player, time, posBarX, posBarY, barHeight) {
  renderBar(ctx, player, posBarX, posBarY, BAR_WIDTH, barHeight);
  renderText(ctx, player, posBarX, posBarY + ROW_HEIGHT);
  renderText(ctx, Math.round(time), posBarX, posBarY + barHeight - FONT_GAP_Y);
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
  renderTextCongratulation(ctx, TEXT_CONGRATULATION);
  renderStatistic(ctx, players, times);
};

