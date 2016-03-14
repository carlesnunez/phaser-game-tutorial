'use strict';

var Enemy = require('./Enemy');
var config = require('../config/configMain');
var EnemyGenerator = function(game, canKill) {
  this.game = game;
  this.enemyBag = [];

  var self = this,
    MAX_ENEMIES = config.maxEnemies;

  var init = function init(){
    //Initializing a timer event
    console.log(config.spawnSpeed);
    this.game.time.events.repeat(Phaser.Timer.SECOND * config.spawnSpeed, 100, createEnemy, self);
  };

  var recycleEnemy = function recycleEnemy () {
    var founded = false, i = 0;
    //Finding dead enemies to Recycle them. On each cycle we find new enemy.
    while(!founded && i < MAX_ENEMIES){
      if(!self.enemyBag[i].enemyUp.alive){
        self.enemyBag[i].recycle();
        founded = true;
      } else {
        i++;
      }
    }
  };

  var createEnemy = function createEnemy (){
    var maxEnemies = MAX_ENEMIES;
    if(this.enemyBag.length < maxEnemies) {
      this.enemyBag.push(new Enemy(this.game));
    } else {
      recycleEnemy();
    }
  };

  //Using call to don't lose the this context
  init.call(this);
};

module.exports = EnemyGenerator;
