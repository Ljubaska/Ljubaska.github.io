"use strict";
var Soccer;
(function (Soccer) {
    class Player extends Soccer.Participant {
        constructor(initX, initY, team, speed, precision, backNumber, maxFieldWidth, maxFieldHeight) {
            super(initX, initY, maxFieldWidth, maxFieldHeight);
            this.team = team;
            this.precision = precision;
            this.speed = speed;
            this.backNumber = backNumber;
        }
    }
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Player.js.map