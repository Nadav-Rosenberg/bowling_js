describe ('BowlingGame', function() {

  it('can creat a new game', function() {

    var game = new BowlingGame();
    expect(game.score).toEqual(0);

  });

  it('can roll a gutter game', function() {
    
    var game = new BowlingGame();
    for (i = 0; i < 20; i++) { 
      game.roll(0);
    }

    expect(game.score).toEqual(0);

  });

  it('can accumulate points', function() {

    var game = new BowlingGame();
    game.roll(2);
    game.roll(3);
    expect(game.score).toEqual(5);

  });

  describe('has 10 frames', function() {
    
    it('has frame one', function() {

      var game = new BowlingGame;
      expect(game.frames[0]).toBe(frame);

    }); 


  });


});