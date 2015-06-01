
var debug = require("debug")("kata:bowling");

function add(x, y) { return x + y; }

function Game() {
    this.startNextFrame = function() {
        debug(this.currentFrame, this.onNextRoll, this.onNextNextRoll);
        if (this.currentFrame < 10) {
            this.currentFrame += 1;
        }
    };
    this.currentFrame =  0;
    this.roll = function (pins) {
        var currentFrame = this.currentFrame;
        var f = this.frames[currentFrame];
        var addToThis = function (pins) {
            debug("addToThis:", currentFrame, pins);
            f.push(pins);
        };
        if ( currentFrame > 10 ||
             (  currentFrame === 10 &&
                this.frames[9][0] !== 10 ) )
        {
            throw new Error('Game over, man!');
        }
        debug("callbacks:", currentFrame, this.onNextRoll, this.onNextNextRoll);
        while(this.onNextRoll.length > 0) {
            debug("handling onNextRoll");
            var func = this.onNextRoll.shift();
            func(pins);
        }
        this.onNextRoll = this.onNextNextRoll;
        this.onNextNextRoll = [];
        if (currentFrame > 8) {
            debug("Frame 10: ", this.frames);
        }
        if (currentFrame < 10) {
            var total = f.reduce(add, 0) + pins;
            f.push(pins);
            if (total == 10 || f.length === 2) {
                this.startNextFrame();
            }
            if (f.length == 1 && pins === 10) {
                this.onNextRoll.push(addToThis);
                this.onNextNextRoll.push(addToThis);
                debug("strike:", currentFrame, this.onNextRoll, this.onNextNextRoll);
            } else if (total == 10) {
                this.onNextRoll.push(addToThis);
            }
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
