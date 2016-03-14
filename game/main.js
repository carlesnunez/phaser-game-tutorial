'use strict';

//global variables

var Phaser = require('phaser');
window.onload = function () {
  var game = new Phaser.Game(914, 514, Phaser.AUTO, 'phaser-game-tutorial');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));


  game.state.start('boot');
};
