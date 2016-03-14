'use strict';
var Scenary =  require("../prefabs/Scenary.js");
var EnemyGenerator =  require("../prefabs/EnemyGenerator.js");
var gameData = require('../core/gameData');

var Play = function Play() {
  var self = this;

  this.create = function create() {
    gameData.score = 0;
    var scenary = new Scenary(this.game, true);
    var enemyGenerator = new EnemyGenerator(this.game);
  };

  this.update = function () {

  };
};


module.exports = Play;
