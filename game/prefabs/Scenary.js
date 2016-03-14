'use strict';

var UI =  require("./UI.js");

var Scenary = function(game, isGame) {
  Phaser.Group.call(this, game);
  this.game = game;

  var createBackground = function createBackground(){
    for(var i=0; i < 5; i++) {
      for(var e=0; e < 5; e++) {
        this.game.add.sprite(i * 256, e * 256, 'scene', 'bg_wood');
      }
    }
  };

  var createGrass = function createGrass() {
    for(var e=0; e < 10; e++) {
      //If is odd or pair we select a type of grass or another.
      var grassType = e%2 ? 2 : 1;
      var position = e%2 ?  336 : 320;
      this.game.add.sprite(e * 132, 514-(position), 'scene', 'grass' + grassType);
    }
  };

  var createClouds = function createClouds(){
    var cloud1 = this.game.add.sprite(-100, 100, 'scene', 'cloud1');
    var cloud2 = this.game.add.sprite(-100, 120, 'scene', 'cloud2');

    var cloud1Tween = game.add.tween(cloud1).from({x: -100}).to( { x: 900 }, 55000, Phaser.Easing.Linear.None, true, 0, -1);
    var cloud2Tween = game.add.tween(cloud2).to({    x: [300, 800,  900, 0],    y: [600,  600, 200, 0],    angle: [360]}, 5000).interpolation(function(v, k){    return Phaser.Math.catmullRomInterpolation(v, k);});
  };

  var createTopCurtain = function createTopCurtain() {
    for(var i=-40; i < 5; i++){
      this.game.add.sprite(i * 185, '65', 'scene', 'curtain_top');
    }
  };

  var createWater = function createWater() {
    this.water2Gp = this.game.add.group();
    this.water1Gp = this.game.add.group();
    for(var e=0; e < 20; e++) {
      this.game.add.sprite((e * 132) + 44, 274, 'scene', 'water1', this.water1Gp);
    }
    for(var e=0; e < 10; e++) {
      var water2 = this.game.add.sprite(e * 132 - 3, 274, 'scene', 'water2', this.water2Gp);
    }
    //Interpolation is used to make a clean 'round' trajectory on tween
    game.add.tween(this.water2Gp).to({x: [15, 15, 0, 0], y: [0,  -15, -15, 0]}, 3000, "Sine.easeInOut", true, -1, false).interpolation(Phaser.Math.bezierInterpolation);;
    game.add.tween(this.water1Gp).to({x: [15, 15, 0, 0], y: [0,  -15, -15, 0]}, 2500, "Sine.easeInOut", true, -1, false).interpolation(Phaser.Math.bezierInterpolation);
  };

  var createTable = function createTable(){
    this.table = this.game.add.group();
    for(var e=0; e < 5; e++) {
      this.game.add.sprite(e * 256, 514-120, 'scene', 'bg_wood', this.table);
    }
  }

  var createLateralCurtains = function createLateralCurtains(){
    this.curtainLeft = this.game.add.sprite(0, 30, 'scene', 'curtain');
    this.curtainLeftNude = this.game.add.sprite(-10, 238, 'scene', 'curtain_rope');
    this.curtainRight = this.game.add.sprite(914, 30, 'scene', 'curtain');
    this.curtainRightNude = this.game.add.sprite(878, 238, 'scene', 'curtain_rope');
    //Invert the curtain
    this.curtainRight.scale.x = -1;

    for(var i=0; i < 4; i++){
      this.game.add.sprite(i * 256, '0', 'scene', 'curtain_straight');
    }

  }

  var createUI = function createUI() {
    this.userInterface = new UI(this.game, isGame);
  }


  this.update = function() {
    this.game.world.bringToTop(this.water1Gp);
    this.game.world.bringToTop(this.table);
    this.game.world.bringToTop(this.curtainLeft);
    this.game.world.bringToTop(this.curtainLeftNude);
    this.game.world.bringToTop(this.curtainRight);
    this.game.world.bringToTop(this.curtainRightNude);
    this.game.world.bringToTop(this.curtainRightNude);
    this.game.world.bringToTop(this.userInterface);
    this.userInterface.setScore();
  }

  var init = function init(){
    //Initializing all the stuff - Using call to mantain the 'this' context
    createBackground.call(this);
    createGrass.call(this);
    createClouds.call(this);
    createTopCurtain.call(this);
    createWater.call(this);
    createTable.call(this);
    createLateralCurtains.call(this);
    createUI.call(this);
    isGame && this.userInterface.startTimer();
  }

  //Using call to don't lose the this context
  init.call(this);
};

Scenary.prototype = Object.create(Phaser.Group.prototype);
Scenary.prototype.constructor = Scenary;

module.exports = Scenary;
