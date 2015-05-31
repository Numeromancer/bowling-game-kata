
var assert = require("assert");
var bowling = require("../bowling-game-kata.js");

describe("Game", function() {
    it("should return a new game", function() {
        var game = new bowling.Game();
        assert(game);
    });
    it("should return a new game with a score of zero", function() {
        var game = new bowling.Game();
        assert(game);
        assert(game.score);
        assert.equal(game.score(), 0);
    });
    it("should return a new game with 10 frames", function() {
        var game = new bowling.Game();
        assert.equal(game.frames.length, 10);
    });
    it("score should be 5 after single roll of 5", function() {
        var game = new bowling.Game();
        game.roll(5);
        assert.equal(game.score(), 5);
    });
    it("score should be 10 after two rolls of 5", function() {
        var game = new bowling.Game();
        game.roll(5);
        game.roll(5);
        assert.equal(game.score(), 10);
    });
});
