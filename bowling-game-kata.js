
var debug = require("debug")("kata:bowling");

function Game() {
    this.currentFrame =  0;
    this.roll = function (pins) {
    };
     this.score = function () {
         return 0;
     };
     this.frames = []; // 10 frames
     return this;
}

exports.Game = Game;
