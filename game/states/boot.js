
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.stage.backgroundColor = '#DDDDDD';
    this.game.state.start('preload');
  }
};

module.exports = Boot;
