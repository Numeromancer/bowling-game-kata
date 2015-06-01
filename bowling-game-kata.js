
var debug = require("debug")("kata:bowling");

function add(x, y) { return x + y; }

function Game() {
    this.startNextFrame = function() {
        this.currentFrame += 1;
        this.onNextRoll = this.onNextNextRoll;
        this.onNextNextRoll = [];
    };
    this.currentFrame =  0;
    this.roll = function (pins) {
        var currentFrame = this.currentFrame;
        var f = this.frames[currentFrame];
        var addToThis = function (pins) {
            debug("add ", pins, " to frame ", currentFrame);
            f.push(pins);
        };
        if (currentFrame > 9) {
            throw new Error('Game over, man!');
        }
        while(this.onNextRoll.length > 0) {
            var func = this.onNextRoll.shift();
            func(pins);
        }
        var total = f.reduce(add, 0) + pins;
        f.push(pins);
        if (f.length == 1 && pins === 10) {
            debug("");
            this.onNextRoll.push(addToThis);
            this.onNextNextRoll.push(addToThis);
        } else if (total == 10) {
            this.onNextRoll.push(addToThis);
        }
        if (total == 10 || f.length === 2) {
            this.startNextFrame();
        }
    };
     this.score = function () {
         var score = 0;
         this.frames.forEach(function(f) {
             score += f.reduce(add, 0);
         });
         return score;
     };
     this.frames = function() {
         var a=[]; var i=0;
         while(i++<10){ a.push([]); };
         return a;
     }(); // 10 frames
     this.onNextRoll = [];
     this.onNextNextRoll = [];
     return this;
}

exports.Game = Game;
