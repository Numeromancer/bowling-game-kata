
var debug = require("debug")("kata:bowling");

function add(x, y) { return x + y; }

function Game() {
    this.currentFrame =  0;
    this.roll = function (pins) {
        if (this.currentFrame > 9) {
            throw new Error('Game over, man!');
        }
        var f = this.frames[this.currentFrame];
        var total = f.reduce(add, 0) + pins;
        f.push(pins);
        if (total == 10 || f.length === 2) {
            this.currentFrame += 1;
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
     return this;
}

exports.Game = Game;
