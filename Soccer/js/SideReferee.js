"use strict";
var Soccer;
(function (Soccer) {
    class SideReferee extends Soccer.Participant {
        constructor(initX, initY, maxFieldWidth, maxFieldHeight) {
            super(initX, initY, maxFieldWidth, maxFieldHeight);
            this.color = "#F6A000";
            this.speed = 2;
        }
    }
    Soccer.SideReferee = SideReferee;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=SideReferee.js.map