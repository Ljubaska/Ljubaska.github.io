"use strict";
var Soccer;
(function (Soccer) {
    class Referee extends Soccer.Participant {
        constructor(initX, initY, maxFieldWidth, maxFieldHeight) {
            super(initX, initY, maxFieldWidth, maxFieldHeight);
            this.color = "#F6A000";
            this.speed = 0.5;
        }
    }
    Soccer.Referee = Referee;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Referee.js.map