'use strict';
var config = require('../config/configMain');
var gameData = require('../core/gameData');
var Enemy = function (game) {
  Phaser.Group.call(this, game);

  var self = this;
  var init = function init() {
    //Initializing all the stuff - Using call to mantain the 'this' context
    this.x = game.rnd.integerInRange(100, 700);
    this.y = 360
    this.enemyUp = this.game.add.sprite(0, 0, 'objects', 'duck_' + config.duckTypes[game.rnd.integerInRange(0, 13)], this);
    this.enemyDown = this.game.add.sprite(30, 95, 'objects', 'stick_wood_outline', this);
    this.scale.y = 1;
    this.angle = 90;
    this.pivot.x = 30;
    this.pivot.y = 250;
    this.enemyUp.inputEnabled = true;
    this.enemyUp.events.onInputDown.add(killEnemy);
    this.tweenIn = this.game.add.tween(this).from({angle: 90}).to({angle: 0}, 500, Phaser.Easing.Linear.None, false);
    this.tweenOut = this.game.add.tween(this).from({angle: 0}).to({angle: 90}, 500, Phaser.Easing.Linear.None, false);
    this.tweenOut.onComplete.add(disableEnemy);

    this.initMovement();
  };

  this.initMovement = function initMovement() {
    this.game.time.events.add(Phaser.Timer.SECOND * 3.5, turnDown, this);
    this.tweenIn.start();
  };

  var turnDown = function turnDown() {
    this.tweenOut.start();
  };

  var disableEnemy = function disableEnemy() {
    self.enemyUp.kill();
  };

  var killEnemy = function killEnemy() {
    gameData.score = gameData.score + 1;
    self.enemyUp.kill();
  };

  this.recycle = function recycle() {
    this.enemyUp.frameName = config.duckTypes[game.rnd.integerInRange(0, 13)];
    this.enemyUp.reset(0, 0);
    this.x = game.rnd.integerInRange(100, 700);
    this.angle = 90;
    this.initMovement();
  };

  init.call(this);
};

Enemy.prototype = Object.create(Phaser.Group.prototype);
Enemy.prototype.constructor = Enemy;

module.exports = Enemy;
