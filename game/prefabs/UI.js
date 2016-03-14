'use strict';
var config = require('../config/configMain');
var gameData = require('../core/gameData');

var UI = function (game, isGame) {
  Phaser.Group.call(this, game);

  this.timeLeft = gameData.time;

  var init = function init() {
    initScore.call(this);
    isGame && initTimer.call(this);
  };

  var initTimer = function initTimer() {

    this.timer = this.game.time.create(this.game, false);
    this.timer.loop(Phaser.Timer.SECOND, decrementCounter, this);
    this.timerText = this.game.add.text(770, 345, this.timeLeft.toString(), {fontSize: 40}, this);
  };

  this.startTimer = function startTimer(){
    this.timer.start();
  };

  this.stopTimer = function stopTimer(){
    this.updateTimer(gameData.time);
    this.timer.stop();
  };

  this.updateTimer = function updateTimer(newTime){
    this.timerText.text = newTime;
  };

  var decrementCounter = function decrementCounter(){
    if(this.timeLeft > 0){
      this.timeLeft--;
      this.updateTimer(this.timeLeft);
    } else {
      this.game.state.start('gameover');
    }
  };

  var initScore = function initScore(){
    this.scoreLeft = this.game.add.sprite(90, 345, 'hud', 'text_score_small', this);
    this.scoreRight = this.game.add.text(210, 345, gameData.score.toString(), {fontSize: 30}, this);
  };

  this.setScore = function setScore(){
    this.scoreRight.text = gameData.score.toString();
  };

  this.setTimer = function setTimer(){

  };

  init.call(this);
};

UI.prototype = Object.create(Phaser.Group.prototype);
UI.prototype.constructor = UI;

module.exports = UI;
