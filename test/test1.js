
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
});
