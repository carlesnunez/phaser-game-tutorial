
'use strict';
function Preload() {
}

Preload.prototype = {
  preload: function() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.atlasJSONHash('scene', 'assets/scene.png', 'assets/scene.json');
    this.load.atlasJSONHash('objects', 'assets/objects.png', 'assets/objects.json');
    this.load.atlasJSONHash('hud', 'assets/HUD.png', 'assets/HUD.json');
  },
  create: function() {
  },
  update: function() {
    if(!!this.ready){
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
