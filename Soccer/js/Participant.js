"use strict";
var Soccer;
(function (Soccer) {
    class Participant {
        constructor(initX, initY, maxFieldWidth, maxFieldHeight) {
            this.maxFieldWidth = maxFieldWidth;
            this.maxFieldHeight = maxFieldHeight;
            this.initX = initX;
            this.initY = initY;
            this._x = initX;
            this._y = initY;
        }
        get x() {
            return this._x;
        }
        get y() {
            return this._y;
        }
        setPos(x, y) {
            this._x = x;
            this._y = y;
        }
        addPos(addX, addY) {
            //to keep entity in boundaries
            if (this._x + addX > MINIMUM_WALL_DISTANCE && this._x + addX < this.maxFieldWidth - MINIMUM_WALL_DISTANCE) {
                this._x += addX;
            }
            if (this._y + addY > MINIMUM_WALL_DISTANCE && this._y + addY < this.maxFieldHeight - MINIMUM_WALL_DISTANCE) {
                this._y += addY;
            }
        }
    }
    Soccer.Participant = Participant;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Participant.js.map