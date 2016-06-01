
var AgeOfADragon = AgeOfADragon || {};

AgeOfADragon.Boot = function() {};

AgeOfADragon.Boot.prototype = {
  preload: function() {

  },

  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.state.start('Preload');
  }
};
