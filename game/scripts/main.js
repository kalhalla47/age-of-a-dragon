
var AgeOfADragon = AgeOfADragon || {};

AgeOfADragon.game = new Phaser.Game(window.innerWidth - 20, window.innerHeight - 20, Phaser.AUTO, '');

AgeOfADragon.game.state.add('Boot', AgeOfADragon.Boot);

AgeOfADragon.game.state.start('Boot');
