'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP = 50;

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = 'black';
  ctx.font = '16px \'PT Mono\'';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxValue = times[0];
  for (var i = 1; i < times.length; i++) {
    if (maxValue < times[i]) {
      maxValue = times[i];
    }
  }

  for (var i = 0; i < players.length; i++) {

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0, 0,' + Math.random() * 255 + ')';
    }

    ctx.fillRect(140 + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - 25, BAR_WIDTH, -BAR_HEIGHT * times[i] / maxValue);
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], 140 + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - 5);
    ctx.fillText(Math.round(times[i]), 140 + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxValue - 35);
  }
};

