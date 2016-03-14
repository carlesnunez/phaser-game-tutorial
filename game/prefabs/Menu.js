'use strict';

var Menu = function(game) {
  this.game = game;
  var self = this;

  var init = function init(){
    //Initializing all the stuff - Using call to mantain the 'this' context
    var readyButton = game.add.button(this.game.width / 2 + 25, this.game.height / 2 - 100, 'hud', initGame, this.game, 'text_ready', 'text_ready', 'text_ready', 'text_ready');
    game.add.tween(readyButton.scale).to({x: 1.5, y: 1.5}, 1000, Phaser.Easing.Linear.None, true, 1000, -1, true);
    readyButton.anchor.x = 0.5;
    readyButton.anchor.y = 0.5;
    readyButton.frezeeFrames = true;
  };

  var initGame = function initGame() {
    this.state.start('play');
  };

  //Using call to don't lose the this context
  init.call(this);
};

module.exports = Menu;
