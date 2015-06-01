
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
    it("current-frame should be 1 after two rolls", function() {
        var game = new bowling.Game();
        game.roll(0);
        game.roll(0);
        assert.equal(game.currentFrame, 1);
    });
    it("current-frame should be 10 after twenty rolls of 0", function() {
        var game = new bowling.Game();
        var i = 0;
        while(i++ < 20) { game.roll(0); }
        assert.equal(game.currentFrame, 10);
    });
    it("should throw an error after trying to roll too many rolls", function() {
        var game = new bowling.Game();
        var i = 0;
        while(i++ < 20) { game.roll(0); }
        assert.throws(function() {  game.roll(0) });
    });
    it("current-frame should be 1 after a strike", function() {
        var game = new bowling.Game();
        game.roll(10);
        assert.equal(game.currentFrame, 1);
    });
    it("current-frame should be 3 after three strikes", function() {
        var game = new bowling.Game();
        game.roll(10);
        assert.equal(game.currentFrame, 1);
    });
    it("score should be 30 after two rolls of 10", function() {
        var game = new bowling.Game();
        game.roll(10);
        game.roll(10);
        assert.equal(game.score(), 30);
    });
    it("score should be 270 after ten rolls of 10", function() {
        var game = new bowling.Game();
        var i = 0;
        while(i++ < 10) { game.roll(10); }
        assert.equal(game.score(), 270);
    });
    it("score should be 300 after twelve rolls of 10", function() {
        var game = new bowling.Game();
        var i = 0;
        while(i++ < 12) { game.roll(10); }
        assert.equal(game.score(), 300);
    });
});
