var BowlingGame = function() {
  this.score = 0;
  this.frames = [];
};

BowlingGame.prototype.roll = function(result) {
  this.score += result;
};