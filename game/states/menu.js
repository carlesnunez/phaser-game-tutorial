
'use strict';
var Scenary =  require("../prefabs/Scenary.js");
var MenuUI =  require("../prefabs/Menu.js");
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    var scenary = new Scenary(this.game, false);
    var menu = new MenuUI(this.game, false);
  },
  update: function() {

  }
};

module.exports = Menu;
